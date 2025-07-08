import { emojify } from 'node-emoji';
import path from 'node:path';
import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function listDocumentations() {
  const documentationPath = path.join(__dirname, '../..');
  const documentations = [];

  readdirSync(documentationPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .filter(
      (dirent) =>
        dirent.name !== 'assets' &&
        dirent.name !== 'scripts' &&
        dirent.name !== 'node_modules' &&
        dirent.name !== '.husky',
    )
    .forEach((dirent) => {
      const folder = dirent.name;
      const metadataPath = path.join(documentationPath, folder, 'metadata.json');
      if (existsSync(metadataPath)) {
        const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'));
        documentations.push({
          name: metadata.name,
          entrypoint: metadata.entrypoint,
          pdfFilename:
            metadata.pdfFilename ||
            metadata.name.replace(' ', '-').toLowerCase() + '.pdf',
          appendVersion: metadata.appendVersion || false,
          folder: path.join(documentationPath, folder),
          texTemplate: metadata.texTemplate || './pandoc-ressources/april.tex',
          sharedPandocLuaFilters: metadata.sharedPandocLuaFilters,
        });
      }
    });

  return documentations;
}

export function getDocumentationCurrentVersion(documentation) {
  const documentationEntrypoint = path.join(
    documentation.folder,
    documentation.entrypoint,
  );
  // Read and parse the documentation entrypoint YAML file to extract the list of versions from change-history
  let version = '1.0.0';
  if (existsSync(documentationEntrypoint)) {
    const fileContent = readFileSync(documentationEntrypoint, 'utf8');
    let doc;
    try {
      doc = yaml.load(fileContent);
    } catch (e) {
      version = '1.0.0'; // Default version if YAML parsing fails
    }
    if (doc && doc['change-history'] && Array.isArray(doc['change-history'])) {
      const versions = doc['change-history'].map((entry) => entry.version);
      version = versions.length > 0 ? versions[versions.length - 1] : '1.0.0';
    }
  }

  return version;
}

export function convertDocumentation(documentation) {
  // convert markdown to pdf
  console.log(
    emojify(
      `:speech_balloon: Launching pandoc command to generate your pdf document ${documentation.name} located in ${documentation.folder} with entrypoint ${documentation.entrypoint}...`,
    ),
  );

  const sharedPandocLuaFilters = (documentation.sharedPandocLuaFilters || [])
    .map(
      (filter) =>
        `--lua-filter ${path.join(documentation.folder, '../pandoc-resources/filters/', filter)}`,
    )
    .join(' ');

  if (documentation.appendVersion) {
    const version = getDocumentationCurrentVersion(documentation);
    documentation.pdfFilename = `${documentation.pdfFilename.replace('.pdf', '')}-${version}.pdf`;
  }

  execSync(
    `pandoc ${path.join(documentation.folder, documentation.entrypoint)} -o "${path.join(documentation.folder, documentation.pdfFilename)}" --from markdown --template ${path.join(documentation.folder, '..', documentation.texTemplate)} --listings ${sharedPandocLuaFilters}`,
    {
      cwd: '/wspace/az-tf/documentation',
    },
  ).toString();
}
