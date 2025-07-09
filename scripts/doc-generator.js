import { emojify } from 'node-emoji';
import { askDocumentationToConvert } from './lib/inquirer.js';
import { convertDocumentation } from './lib/shared.js';

async function main() {
  askDocumentationToConvert().then(async (selectedDoc) => {
    if (selectedDoc) {
      console.log(`You selected: ${selectedDoc.name}`);
      if (
        selectedDoc.prebuildtasks != undefined &&
        selectedDoc.prebuildtasks.length > 0
      ) {
        console.log(
          emojify(
            `:rocket: Running prebuild tasks: ${selectedDoc.prebuildtasks.join(', ')}`,
          ),
        );
        for (const task of selectedDoc.prebuildtasks) {
          const taskModule = await import(`./lib/prebuild-tasks.js`);
          if (taskModule[task]) {
            await taskModule[task](selectedDoc);
          } else {
            console.warn(emojify(`:bomb: Task ${task} not found in prebuild-tasks.js`));
          }
        }
      }
      console.log(`Converting documentation: ${selectedDoc.name}`);
      await convertDocumentation(selectedDoc);
    }
  });
}

main();
