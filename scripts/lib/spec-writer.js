import fs from 'fs';
import path from 'path';
import { emojify } from 'node-emoji';
import { format } from 'prettier';

export async function texifyMarkdownFile(markdownFilePath) {
  try {
    let fileContent = fs.readFileSync(markdownFilePath, 'utf8');
    fileContent = fileContent.replaceAll('[', '\\[');
    fileContent = fileContent.replaceAll(']', '\\]');
    fileContent = fileContent.replaceAll('$', '\\$');
    fileContent = fileContent.replaceAll('}', '\\}');
    fileContent = fileContent.replaceAll('{', '\\{');
    fileContent = fileContent.replaceAll('\\n', '');
    //fileContent = fileContent.replaceAll('_', ' ')
    fs.writeFileSync(markdownFilePath, fileContent);
  } catch (error) {
    return Promise.reject(error.message || error);
  }
}

export async function generateMarkdown(specGeneratedPath, stacks) {
  try {
    // generate the root specification file
    await stacks.forEach(async (stack) => {
      console.log(
        emojify(
          `:rocket: Generating specification to markdown for stack ${stack.stackName}`,
        ),
      );
      const filePath = path.join(specGeneratedPath, `${stack.stackName}-resources.md`);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      fs.writeFileSync(filePath, stack.markdown);
    });
    console.log(
      emojify(':white_check_mark: Markdown specifidation generated successfully'),
    );
  } catch (error) {
    return Promise.reject(error.message || error);
  }
}
