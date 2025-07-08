import inquirer from 'inquirer';
import { listDocumentations } from './shared.js';

export async function askDocumentationToConvert() {
  const documentations = listDocumentations();

  if (documentations.length === 0) {
    console.log('No documentation found to convert to PDF.');
    return null;
  }

  const choices = documentations.map((doc) => ({
    name: `${doc.name} (${doc.folder})`,
    value: doc,
  }));

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedDocumentation',
      message: 'Which documentation do you want to convert to PDF?',
      choices: choices,
    },
  ]);

  return answers.selectedDocumentation;
}
