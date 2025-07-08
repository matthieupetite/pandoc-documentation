# Datascience Gitops Documentation

## Summray

- [Datascience Gitops Documentation](#datascience-gitops-documentation)
  - [Summray](#summray)
  - [Overview](#overview)
  - [Available documentations](#available-documentations)
  - [Create a documentation](#create-a-documentation)
  - [Available commands](#available-commands)

## Overview

This repository contains the documentation for the Datascience Gitops project, which is designed to streamline and automate the deployment of data science applications on azure cloud infrastructure using Terraform.

## Available documentations

Here is the list of available documentations:

| Title                                | Path.                                                               |
| ------------------------------------ | ------------------------------------------------------------------- |
| Work with the Datascience Starterkit | [Go to documentation](./work-with-datascience-starterkit/0-main.md) |
| Sample documentation                 | [Go to documentation](./sample-documentation/0-main.md)             |

## Create a documentation

To create a new documentation you simply have to create a folder within this repo and add a metadata.json file in it.
The metadata file describe your documentation properties and should looks like:

```json
{
    "name": "Work with Data Science Starter Kit",
    "entrypoint": "./0-main.md",
    "pdfFilename":"work-with-data-science-starter-kit.pdf",
    "appendVersion": true,
    "texTemplate": "./pandoc-ressources/april.tex"
}
```

The properties are:

| Property      | Description                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| name          | The name of the documentation, it will be used in the title of the PDF file.                                  |
| entrypoint    | The entrypoint of the documentation, it should be a markdown file and the path start from the document folder |
| pdfFilename   | The name of the PDF file that will be generated.                                                              |
| appendVersion | If true, the version of the documentation will be appended to the PDF filename (before the .pdf).             |
| texTemplate   | The path to the LaTeX template file used for generating the PDF.                                              |

: Property of the documentation metadata

You can copy paste the sample-documentation folder it's a good starting proing

## Available commands

To generate a documentation in pdf please run the folling command:

```bash
npm run generate:docs
```
