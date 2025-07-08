import { askDocumentationToConvert } from './lib/inquirer.js';
import { convertDocumentation } from './lib/shared.js';

async function main() {
  askDocumentationToConvert().then(async (selectedDoc) => {
    if (selectedDoc) {
      console.log(`You selected: ${selectedDoc.name}`);
      await convertDocumentation(selectedDoc);
    }
  });
}

main();
