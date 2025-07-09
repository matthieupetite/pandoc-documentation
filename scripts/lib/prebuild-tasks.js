import { emojify } from 'node-emoji';
import {
  specGenBasicInfo,
  specGenSolutionPathInfo,
  specGenDetailsInfoForSolution,
} from './spec-inquirer.js';
import { generateDocumentationForSolution } from './spec-utils.js';

export async function generateSpecification(documentation) {
  let answers = {
    ...(await specGenBasicInfo()),
    ...(await specGenSolutionPathInfo()),
  };
  answers = { ...(await specGenDetailsInfoForSolution(answers)), ...answers };
  answers.specGeneratedPath = documentation.folder;
  await generateDocumentationForSolution(answers);
}
