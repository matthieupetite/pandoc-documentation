import hclparser from 'hcl2-parser';
import * as emoji from 'node-emoji';
import fs from 'fs';
import path from 'path';

export function parseHclFile(path) {
  try {
    const hcl = hclparser;
    console.log(emoji.emojify(`:gear: Parsing HCL file: ${path}\n`));
    const data = hcl.parseToObject(fs.readFileSync(path, 'utf8'));
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error.message || error);
  }
}

export function parseHclFiles(basePath, paths) {
  try {
    let hclData = '';
    const hcl = hclparser;
    paths.forEach(async (filepath) => {
      hclData += fs.readFileSync(path.join(basePath, filepath), 'utf8');
      hclData += '\n\n';
    });

    return Promise.resolve(hcl.parseToObject(hclData));
  } catch (error) {
    return Promise.reject(error.message || error);
  }
}
