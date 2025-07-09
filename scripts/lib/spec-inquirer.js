import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

export async function specGenBasicInfo() {
  try {
    const inquirerConf = [
      {
        type: 'select',
        name: 'specBeautify',
        message: 'Do you want to beautify the specification?',
        choices: ['Yes', 'No'],
        default: 'Yes',
      },
      {
        type: 'input',
        name: 'maxCharacterLengthInPropertyTable',
        message: 'Please enter the max character length in the property table',
        default: process.env.MAX_CHARACTER_LENGHT_IN_PROPERTY_TABLE || '50',
        validate: (input) => {
          const number = parseInt(input);
          if (isNaN(number) || number <= 20 || number >= 200) {
            return 'Please enter a valid number greater than 20 and lower than 200';
          }
          return true;
        },
      },
    ];
    const answers = { ...(await inquirer.prompt(inquirerConf)) };
    return Promise.resolve(answers);
  } catch (error) {
    return Promise.reject(error.message || error);
  }
}

export async function specGenSolutionPathInfo() {
  try {
    const inquirerConf = [
      {
        type: 'input',
        name: 'terraformSolutionDirectoryPath',
        message: 'Please enter the directory path of the terraform solution zones path',
        default: process.env.INFRA_PATH || '../infra/zones/',
      },
    ];
    const answers = { ...(await inquirer.prompt(inquirerConf)) };
    return Promise.resolve(answers);
  } catch (error) {
    return Promise.reject(error.message || error);
  }
}

export async function specGenDetailsInfoForSolution(answers) {
  try {
    const solutionAzureZonesPath = answers.terraformSolutionDirectoryPath + '/azure';
    const stackList = fs
      .readdirSync(solutionAzureZonesPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
    answers.terraformStacks = [];
    for await (const stack of stackList) {
      const inquirerConf = [
        {
          type: 'checkbox',
          name: 'terraformStackFiles',
          message: `Please select the files you want to use to generate the specification for the stack ${stack}`,
          choices: fs
            .readdirSync(solutionAzureZonesPath + '/' + stack)
            .filter((file) => file.endsWith('.tf') && file !== 'naming.tf')
            .map((file) => ({ name: file, checked: true })),
        },
      ];

      const stackFiles = (await inquirer.prompt(inquirerConf)).terraformStackFiles;
      if (fs.existsSync(path.join(solutionAzureZonesPath, stack, 'naming.tf'))) {
        stackFiles.push('naming.tf');
      }

      answers.terraformStacks.push({
        stackName: stack,
        terraformStackDirectoryPath: solutionAzureZonesPath + '/' + stack,
        terraformStackFiles: stackFiles,
      });
    }
    return Promise.resolve(answers);
  } catch (error) {
    return Promise.reject(error.message || error);
  }
}
