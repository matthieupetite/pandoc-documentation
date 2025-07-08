# Node.js tooling for developper

![nodejs](./assets/3-nodejs-ecosystem/image1.png)

## Overview

In order to perform our daily tasks, we needed a tool that could automate all the boring stuff that can usually lead to typos and errors.

Therefore we are using (thanks to the help of the node.js community) a stack of tools allowing us to be more productive!

## Tools

### NPM

When you work with Node.js, you will need a package manager. The most well known is [npm](https://www.npmjs.com/).

The most important piece when dealing with this ecosystem is the [package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json) file.

You shall find all the relevant information concerning the source code such as

- name
- description
- version
- keywords
- main
- engines
- scripts
- authors
- devDependencies
- dependencies
- ...

### Husky

[Husky](https://typicode.github.io/husky/#/) is a modern git hooks tool.  

It is used in big open-source projects, helping the community to manage git hooks in Node.js projects.

### Commitizen

[Commitizen](https://www.npmjs.com/package/commitizen) is a community tool helping developers to follow the conventions in git commit messages.

### Standard-Version

[Standard-version](https://www.npmjs.com/package/standard-version) is a tool that shall help automate

- The tagging of the repo according to the git history
- The CHANGELOG.md file in the repository
- The update of the version of the package.json

## Husky tool

Husky will facility us when using the stack in the CI mode, avoiding to perform pre-commit actions if needed.

We are able to have complex scripts running before a commit is made in order to validate our code consistency.

![huskygif](./assets/3-nodejs-ecosystem//husky.gif)

***pre-commit***

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
 
[ -n "$CI" ] && exit 0
 
npm run validate
npm run terraform:docs
npm run markdown:fix
git add *\*.md
```

***commit-msg***

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
 
npx --no-install commitlint --edit "$1"
```

!!! note
    Each git repository in the project has its own precommit configuration depending of its purpose. The commit message precommit hook otherwise is the same for all git repo.

## package.json file

The package.json file is the backbone of a Node.js project.

All the scripts (ie: Javascript, shell, Powershell,..) shall be placed in the scripts object of the file.

The [npm-run-all](https://www.npmjs.com/package/npm-run-all) package will allow us to perform serial and parallel tasks.

Depending on the packages installed, you will be able to set configuration settings in the package.json file.

In this example, the following packages have their configurations set:

- commitizen
- standard-version
- husky

***Package.json file sample***

```json

{
  "name": "terraform-caf-enterprise-scale-vwan-starter-kit",
  "version": "1.11.4",
  "contributors": [
    "Alexandre SAKER <alexandre.saker@orange.com>",
    "Matthieu PETITE <matthieu.petite@orange.com>",
    "Stéphane CLAVEL <stephane1.clavel@orange.com>"
  ],
  "repository": {
    "type": "git",
    "url": "https://almnet-ng.orangeapplicationsforbusiness.com/tfs/OCB/practice_azure/_git/terraform-caf-enterprise-scale-vwan-starter-kit.git"
  },
  "scripts": {
    "prepare": "is-ci || husky install",
    "commit": "cz",
    "clean": "rm -rf dist build",
    "packages:check": "ncu",
    "packages:fix": "ncu -u'",
    "markdown:check": "markdownlint **/*.md --ignore node_modules",
    "markdown:fix": "markdownlint **/*.md --fix --ignore node_modules",
    "terraform:validate": "run-s terraform:validate:**",
    "terraform:validate:launchpad": "cd zones/launchpad && terraform init -upgrade -backend=false && terraform validate",
    "terraform:validate:devops": "cd zones/devops && terraform init -upgrade -backend=false && terraform validate",
    "terraform:validate:identity": "cd zones/identity && terraform init -upgrade -backend=false && terraform validate",
    "terraform:validate:connectivity": "cd zones/connectivity && terraform init -upgrade -backend=false && terraform validate",
    "terraform:validate:governance": "cd zones/governance && terraform init -upgrade -backend=false && terraform validate",
    "terraform:validate:management": "cd zones/management && terraform init -upgrade -backend=false && terraform validate",
    "terraform:validate:lz-app": "cd zones/lz-app && terraform init -upgrade -backend=false && terraform validate",
    "terraform:fmt": "cd zones && terraform fmt -recursive",
    "terraform:fmt:check": "cd zones && terraform fmt -recursive -check",
    "terraform:docs": "sh ./scripts/createTerraformDocs.sh",
    "terraform:init:launchpad": "cd zones/launchpad && terraform init -backend-config backend.tfvars",
    "terraform:init:devops": "cd zones/devops && terraform init -backend-config backend.tfvars",
    "terraform:init:identity": "cd zones/identity && terraform init -backend-config backend.tfvars",
    "terraform:init:connectivity": "cd zones/connectivity && terraform init -backend-config backend.tfvars",
    "terraform:init:governance": "cd zones/governance && terraform init -backend-config backend.tfvars",
    "terraform:init:management": "cd zones/management && terraform init -backend-config backend.tfvars",
    "terraform:init:lz-app": "cd zones/lz-app && terraform init -backend-config backend.tfvars",
    "terraform:plan:launchpad": "cd zones/launchpad && terraform plan -var-file terraform.tfvars -out plan.out",
    "terraform:plan:devops": "cd zones/devops && terraform plan -var-file terraform.tfvars -out plan.out",
    "terraform:plan:identity": "cd zones/identity && terraform plan -var-file terraform.tfvars -out plan.out",
    "terraform:plan:connectivity": "cd zones/connectivity && terraform plan -var-file terraform.tfvars -out plan.out",
    "terraform:plan:governance": "cd zones/governance && terraform plan -var-file terraform.tfvars -out plan.out",
    "terraform:plan:management": "cd zones/management && terraform plan -var-file terraform.tfvars -out plan.out",
    "terraform:plan:lz-app": "cd zones/lz-app && terraform plan -var-file terraform.tfvars -out plan.out",
    "terraform:apply:launchpad": "cd zones/launchpad && terraform apply plan.out",
    "terraform:apply:devops": "cd zones/devops && terraform apply plan.out",
    "terraform:apply:identity": "cd zones/identity && terraform apply plan.out",
    "terraform:apply:connectivity": "cd zones/connectivity && terraform apply plan.out",
    "terraform:apply:governance": "cd zones/governance && terraform apply plan.out",
    "terraform:apply:management": "cd zones/management && terraform apply plan.out",
    "terraform:apply:lz-app": "cd zones/lz-app && terraform apply plan.out",
    "terraform:plan-destroy:launchpad": "cd zones/launchpad && terraform plan -destroy -var-file terraform.tfvars",
    "terraform:plan-destroy:devops": "cd zones/devops && terraform plan -destroy -var-file terraform.tfvars",
    "terraform:plan-destroy:identity": "cd zones/identity && terraform plan -destroy -var-file terraform.tfvars",
    "terraform:plan-destroy:connectivity": "cd zones/connectivity && terraform plan -destroy -var-file terraform.tfvars",
    "terraform:plan-destroy:governance": "cd zones/governance && terraform plan -destroy -var-file terraform.tfvars",
    "terraform:plan-destroy:management": "cd zones/management && terraform plan -destroy -var-file terraform.tfvars",
    "terraform:plan-destroy:lz-app": "cd zones/lz-app && terraform plan -destroy -var-file terraform.tfvars",
    "terraform:destroy:launchpad": "cd zones/launchpad && terraform destroy -var-file terraform.tfvars -auto-approve",
    "terraform:destroy:devops": "cd zones/devops && terraform destroy -var-file terraform.tfvars -auto-approve",
    "terraform:destroy:identity": "cd zones/identity && terraform destroy -var-file terraform.tfvars -auto-approve",
    "terraform:destroy:connectivity": "cd zones/connectivity && terraform destroy -var-file terraform.tfvars -auto-approve",
    "terraform:destroy:governance": "cd zones/governance && terraform destroy -var-file terraform.tfvars -auto-approve",
    "terraform:destroy:management": "cd zones/management && terraform destroy -var-file terraform.tfvars -auto-approve",
    "terraform:destroy:lz-app": "cd zones/lz-app && terraform destroy -var-file terraform.tfvars -auto-approve",
    "validate": "run-p terraform:validate:** terraform:fmt:check",
    "prerelease": "git fetch origin --prune --prune-tags && git add .",
    "release": "standard-version -a",
    "postrelease": "run-s release:*",
    "release:tags": "git push -f --follow-tags origin main",
    "ci:validate": "rm -rf node_modules && npm ci && npm run validate",
    "prepublishOnly": "npm run ci:validate"
  },
  "description": "",
  "devDependencies": {
    "@commitlint/cli": "16.0.1",
    "@commitlint/config-conventional": "16.0.0",
    "commitizen": "4.2.4",
    "cz-conventional-changelog": "3.3.0",
    "husky": "7.0.0",
    "is-ci": "3.0.1",
    "markdownlint-cli": "0.30.0",
    "npm-run-all": "4.1.5",
    "prettier": "2.5.1",
    "standard-version": "9.3.2"
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  },
  "husky": {
    "hooks": {
      "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"
    }
  },
  "standard-version": {
    "header": "# Terraform Caf Enterprise Scale Vwan Starter Kit",
    "commitUrlFormat": "{{host}}/{{owner}}/{{repository}}/commit/{{hash}}",
    "compareUrlFormat": "{{host}}/{{owner}}/{{repository}}/branchCompare?baseVersion=GT{{previousTag}}&targetVersion=GT{{currentTag}}",
    "releaseCommitMessageFormat": "chore(release): [skip ci] {{currentTag}}",
    "types": [
      {
        "type": "feat",
        "section": "Features"
      },
      {
        "type": "fix",
        "section": "Bug Fixes"
      },
      {
        "type": "chore",
        "section": "Chore",
        "hidden": false
      },
      {
        "type": "docs",
        "section": "Docs",
        "hidden": false
      },
      {
        "type": "style",
        "hidden": true
      },
      {
        "type": "refactor",
        "hidden": true
      },
      {
        "type": "perf",
        "hidden": true
      },
      {
        "type": "test",
        "hidden": true
      }
    ],
    "skip": {
      "changelog": false
    },
    "scripts": {}
  },
  "engines": {
    "node": ">=14.18.2"
  }
}
```

Each script describes above the json node `script` can be called with the following command `npm run ...`.

For example, to launch the script `terraform:plan:connectivity` launch:

```bash
npm run terraform:plan:connectivity
```
