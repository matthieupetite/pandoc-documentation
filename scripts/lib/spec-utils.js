import * as emoji from 'node-emoji';
import { parseHclFiles } from './hclparser.js';
import {
  generateMarkdownVariables,
  generateMarkdownResources,
  generateMarkdownModule,
  getMarkdownLine,
} from './markdown-generator.js';
import path from 'path';
import { generateMarkdown, texifyMarkdownFile } from './spec-writer.js';

export async function getSpecificationMarkdownForStack(argv, beautify = true) {
  try {
    const stackName = argv.terraformStackDirectoryPath.split('/').slice(-1);
    const hclData = await parseHclFiles(
      argv.terraformStackDirectoryPath,
      argv.terraformStackFiles,
    );
    const variables = await generateMarkdownVariables(
      hclData[0],
      beautify,
      stackName,
      argv.maxCharacterLengthInPropertyTable,
    );
    const resources = await generateMarkdownResources(
      hclData[0],
      beautify,
      stackName,
      argv.maxCharacterLengthInPropertyTable,
    );
    const modules = await generateMarkdownModule(
      hclData[0],
      beautify,
      stackName,
      argv.maxCharacterLengthInPropertyTable,
    );
    let markdownResult = '';
    markdownResult += getMarkdownLine(`# Stack ${stackName} resources`);
    markdownResult += getMarkdownLine(``);
    markdownResult += variables;
    markdownResult += resources;
    markdownResult += modules;
    return Promise.resolve(markdownResult);
  } catch (error) {
    return Promise.reject(error.message || error);
  }
}

export async function getSpecificationMarkdownForSolution(argv) {
  try {
    // loop through the stacks and generate the specification for each stack
    let markdownResult = [];
    for await (const stacks of argv.terraformStacks) {
      markdownResult.push({
        stackName: stacks.terraformStackDirectoryPath.split('/').slice(-1),
        markdown: await getSpecificationMarkdownForStack(
          {
            terraformStackDirectoryPath: stacks.terraformStackDirectoryPath,
            terraformStackFiles: stacks.terraformStackFiles,
            maxCharacterLengthInPropertyTable: argv.maxCharacterLengthInPropertyTable,
          },
          argv.specBeautify == 'Yes' ? true : false,
        ),
      });
    }
    return Promise.resolve(markdownResult);
  } catch (error) {
    return Promise.reject(error.message || error);
  }
}

export async function generateDocumentationForSolution(answers) {
  try {
    console.log(emoji.emojify(`:rocket: Launching specgen command for solution...\n`));
    // test input data
    if (answers.terraformSolutionDirectoryPath.length == 0) {
      throw new Error('No terraform files selected');
    }

    const markdown = await getSpecificationMarkdownForSolution(answers);
    await generateMarkdown(answers.specGeneratedPath, markdown);
    await Promise.all(
      markdown.map(async (stack) => {
        await texifyMarkdownFile(
          path.join(answers.specGeneratedPath, `${stack.stackName}-resources.md`),
        );
      }),
    );
    console.log(emoji.emojify(`:white_check_mark: Command executed sucessfully\n$`));
  } catch (error) {
    throw error.message || error;
  }
}
