import { emojify } from 'node-emoji';
import { calculateAzureCafResult } from './azurecaf-resource-template.js';

export function getMarkdownLine(markdownData) {
  return `${markdownData}\n`;
}

/*
 *
 * This function generates the markdown variables section
 *
 * @param {Object} hclData
 *
 * @return {Promise<String>}
 *
 * @throws {Error}
 *
 * @example
 *
 * ## Variables
 *
 * | Name                            | Properties                                                              |
 * | ------------------------------- | ----------------------------------------------------------------------- |
 * | accountable                     | default: n/a                                                            |
 * |                                 | description: Accountable for the deployed resources                     |
 * |                                 | type: ${string}                                                         |
 */
export async function generateMarkdownVariables(
  hclData,
  beautify,
  stackName,
  maxCharacterLengthInPropertyTable,
) {
  try {
    if (hclData.variable === undefined) {
      return Promise.resolve('');
    }
    let markdownData = getMarkdownLine(`## ${stackName} Variables`);
    markdownData += getMarkdownLine(`\n`);
    markdownData += getMarkdownLine(`| Name | Properties |`);
    markdownData += getMarkdownLine(
      `|:--------------------------------------|:--------------------------------------------------------------------|`,
    );
    Object.keys(hclData.variable).forEach((variableName) => {
      markdownData += getMarkdownLine(
        `| ${variableName} | ${Object.keys(hclData.variable[variableName][0])[0]}: ${hclData.variable[variableName][0][Object.keys(hclData.variable[variableName][0])[0]]} |`,
      );
      Object.keys(hclData.variable[variableName][0])
        .slice(1)
        .forEach((variableProperty) => {
          markdownData += getMarkdownLine(
            `| | ${variableProperty}: ${splitStringIntoChunks(hclData.variable[variableName][0][variableProperty], parseInt(maxCharacterLengthInPropertyTable, 10)).join().replaceAll('\n', ' ')} |`,
          );
        });
    });
    markdownData += getMarkdownLine(`:${stackName} variable properties\r\n`);
    return Promise.resolve(markdownData);
  } catch (error) {
    return Promise.reject(error.message || error);
  }
}

/*
 * This function generates the markdown variables section
 *
 * @param {Object} hclData
 *
 * @return {Promise<String>}
 *
 * @throws {Error}
 *
 * @example
 *
 * ## Resources
 *
 * ### Resource name
 *
 * | Properties | Values                     |
 * | ---------- | -------------------------- |
 * | Typer      | azurerm_resource_group     |
 * | location   | ${var.region}              |
 * | name       | ${azurecaf_name.rg.result} |
 * | tags       | ${module.tags.common_tags} |
 */
export async function generateMarkdownResources(
  hclData,
  beautify = false,
  stackName,
  maxCharacterLengthInPropertyTable,
) {
  try {
    if (hclData.resource === undefined) {
      return Promise.resolve('');
    }
    let markdownData = getMarkdownLine(`## ${stackName} Resources`);
    markdownData += getMarkdownLine(``);
    Object.keys(hclData.resource).forEach((resourceType) => {
      // we do not specify the azurecaf_name resources
      if (resourceType !== 'azurecaf_name') {
        Object.keys(hclData.resource[resourceType]).forEach((resourceName) => {
          markdownData += getMarkdownLine(
            `### ${stackName} ${resourceType.replace('azurerm_', '').replaceAll('_', ' ')} ${resourceName.replaceAll('_', ' ')}`,
          );
          markdownData += getMarkdownLine(``);
          markdownData += getMarkdownLine(`| Properties | Values |`);
          markdownData += getMarkdownLine(
            `|:--------------------------------------|:-------------------------------------------------------------------|`,
          );
          markdownData += getMarkdownLine(`| Type | ${resourceType} |`);

          Object.keys(hclData.resource[resourceType][resourceName][0]).forEach(
            (resourceProperty) => {
              let propertyValue = '';
              try {
                propertyValue = getResourcePropertyValue(
                  hclData,
                  hclData.resource[resourceType][resourceName][0][resourceProperty],
                  beautify,
                ).toString();
                // we add a secable space every 50 characters in order to have correct formatting with pandoc and avoid to have table
                // that are too large in the pdf page
                propertyValue = splitStringIntoChunks(
                  propertyValue,
                  parseInt(maxCharacterLengthInPropertyTable, 10),
                ).join(' ');
              } catch (error) {
                propertyValue = '';
              }
              markdownData += getMarkdownLine(
                `| ${resourceProperty} | ${propertyValue} |`,
              );
            },
          );
          markdownData += getMarkdownLine(
            `:${stackName} ${resourceType.replace('azurerm_', '').replaceAll('_', ' ')} ${resourceName.replaceAll('_', ' ')} properties\r\n`,
          );
        });
        markdownData += getMarkdownLine(`\n`);
      }
    });
    return Promise.resolve(markdownData);
  } catch (error) {
    return Promise.reject(error.message || error);
  }
}

/*
 * This function generates the markdown variables section
 *
 * @param {Object} hclData
 *
 * @return {Promise<String>}
 *
 * @throws {Error}
 *
 * @example
 *
 * ## Modules
 *
 * ### Module name
 *
 * | Properties | Values                     |
 * | ---------- | -------------------------- |
 * | location   | ${var.region}              |
 * | name       | ${azurecaf_name.rg.result} |
 * | tags       | ${module.tags.common_tags} |
 */
export async function generateMarkdownModule(
  hclData,
  beautify = true,
  stackName,
  maxCharacterLengthInPropertyTable,
) {
  try {
    if (hclData.module === undefined) {
      return Promise.resolve('');
    }
    let markdownData = getMarkdownLine(`## ${stackName} Modules`);
    markdownData += getMarkdownLine(``);
    Object.keys(hclData.module).forEach((moduleName) => {
      markdownData += getMarkdownLine(
        `### ${stackName} module ${moduleName.replaceAll('_', ' ')}`,
      );
      markdownData += getMarkdownLine(``);
      markdownData += getMarkdownLine(`| Properties | Values |`);
      markdownData += getMarkdownLine(
        `|:-------------------------|:--------------------------------------------------------------------|`,
      );
      Object.keys(hclData.module[moduleName][0]).forEach((moduleProperty) => {
        let propertyValue = '';
        try {
          propertyValue = getResourcePropertyValue(
            hclData,
            hclData.module[moduleName][0][moduleProperty],
            beautify,
          ).toString();
          // we add a secable space every 50 characters in order to have correct formatting with pandoc and avoid to have table
          // that are too large in the pdf page
          propertyValue = splitStringIntoChunks(
            propertyValue,
            parseInt(maxCharacterLengthInPropertyTable, 10),
          ).join(' ');
        } catch (error) {
          propertyValue = '';
        }
        markdownData += getMarkdownLine(`| ${moduleProperty} | ${propertyValue} |`);
      });
      markdownData += getMarkdownLine(
        `:${stackName} module ${moduleName.replaceAll('_', ' ')} properties\r\n`,
      );
    });
    return Promise.resolve(markdownData);
  } catch (error) {
    return Promise.reject(error.message || error);
  }
}

function isMultiLine(str) {
  if (typeof str !== 'string') return false;
  return str.includes('\n') || str.includes('\r\n');
}

function getResourcePropertyValue(hclData, property, beautify = false) {
  if (property === undefined) {
    return 'n/a';
  }

  let result = '';
  switch (typeof property) {
    case 'object':
      result = JSON.stringify(property);
      break;
    case 'array':
      result = JSON.stringify(property);
      break;
    case 'string':
      result = property;
      if (beautify && (property.startsWith('var.') || property.startsWith('${var.'))) {
        result = beautifyVariable(hclData, property);
      }

      if (
        beautify &&
        (property.startsWith('azurerm_') || property.startsWith('${azurerm_')) &&
        property.includes('.')
      ) {
        result = beautifyResource(hclData, property);
      }

      if (
        beautify &&
        (property.startsWith('azurecaf_') ||
          (property.startsWith('${azurecaf_') && property.includes('.')))
      ) {
        result = beautifyAzureCafResource(hclData, property);
      }
      result = isMultiLine(result)
        ? JSON.stringify(result.replace(/(\r|`\n)/g, ''))
        : result;

      break;
    default:
      result = property;
  }

  return result;
}

function getVariableName(name) {
  const start = name.indexOf('.') + 1;
  let end = 0;
  if (name.includes('?')) {
    end = name.indexOf('?') - 1;
  } else {
    end = name.lastIndexOf('}');
  }
  return name.substring(start, end);
}

function getResourceName(property) {
  const start = property.indexOf('.') + 1;
  const end = property.indexOf('.', start);
  return property.substring(start, end);
}

function getResourceType(property) {
  const start = property.startsWith('${') == true ? 2 : 0;
  const end = property.indexOf('.');
  return property.substring(start, end);
}

function getResourceAttribute(property) {
  const start = property.indexOf('.', property.indexOf('.') + 1) + 1;
  const end = property.indexOf('}') > 0 ? property.indexOf('}') : property.length;
  return property.substring(start, end);
}

function beautifyVariable(hclData, property) {
  const variable = getVariableName(property);
  return hclData.variable[variable][0].default == undefined
    ? 'n/a'
    : hclData.variable[variable][0].default;
}

function beautifyResource(hclData, property) {
  const resource_name = getResourceName(property);
  const resource_type = getResourceType(property);
  const resource_attribute = getResourceAttribute(property);
  if (hclData.resource[resource_type][resource_name] == undefined) {
    return property;
  } else {
    const propertyValue =
      hclData.resource[resource_type][resource_name][0][resource_attribute];
    if (propertyValue === undefined) {
      return property;
    }

    if (propertyValue.startsWith('var.') || propertyValue.startsWith('${var.')) {
      return beautifyVariable(hclData, propertyValue);
    } else if (
      propertyValue.startsWith('azurecaf_') ||
      propertyValue.startsWith('${azurecaf_')
    ) {
      return beautifyAzureCafResource(hclData, propertyValue);
    } else {
      return hclData.resource[resource_type][resource_name][0][resource_attribute];
    }
  }
}

function beautifyAzureCafResource(hclData, property) {
  const resource_type = getResourceType(property);
  const resource_name = getResourceName(property);

  // if the object azure caf is not known, return the property (probably no parsing of the naming.tf file)
  if (hclData.resource[resource_type][resource_name] === undefined) return property;

  // read the value of the associate azure caf name ressources
  const azurecaf_name = {
    name: hclData.resource[resource_type][resource_name][0].name,
    prefixes:
      hclData.resource[resource_type][resource_name][0].prefixes == undefined
        ? []
        : hclData.resource[resource_type][resource_name][0].prefixes,
    suffixes:
      hclData.resource[resource_type][resource_name][0].suffixes == undefined
        ? []
        : hclData.resource[resource_type][resource_name][0].suffixes,
    separator:
      hclData.resource[resource_type][resource_name][0].separator == undefined
        ? '-'
        : hclData.resource[resource_type][resource_name][0].separator,
    resource_type: hclData.resource[resource_type][resource_name][0].resource_type,
  };

  if (azurecaf_name.suffixes != undefined) {
    let beautifySuffixes = [];
    azurecaf_name.suffixes.forEach((suffix) => {
      if (suffix.startsWith('var.') || suffix.startsWith('${var.')) {
        beautifySuffixes.push(beautifyVariable(hclData, suffix));
      } else {
        beautifySuffixes.push(suffix);
      }
    });
    azurecaf_name.suffixes = beautifySuffixes;
  }

  return calculateAzureCafResult(azurecaf_name);
}

/**
 * Splits a string into chunks of the specified size.
 * @param {string} str - The string to be split.
 * @param {number} size - The size of each chunk.
 * @returns {string[]} - An array of string chunks.
 */
function splitStringIntoChunks(str, size = 50) {
  if (str.length <= size) {
    return [str];
  }
  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  return chunks;
}
