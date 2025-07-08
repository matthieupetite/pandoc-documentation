---
title: "High Level Design"
author: [Matthieu PETITE]
date: "2025-01-20"
subject: "April Datascience Infrastructure"
keywords: [Markdown, Datascience, Azure, Terraform, DevOps]
subtitle: "Landing zone for Datascience Infrastructure"
lang: "en"
titlepage: true,
titlepage-rule-color: "360049"
cover: true
confidential: true
use-page-background: true
cover-background: ../assets/april-background.png
cover-background-opacity: 0.9
page-background: ../assets/april-page-background-draft.pdf
page-background-opacity: 0.2
customer-logo: ../pandoc-resources/images/april-logo.png
toc: true
toc-depth: 9
change-history: 
  - date: "2025-01-20"
	version: "1.0.0"
	author: "Matthieu PETITE"
	description: "Document Creation"
  - date: "2025-01-27"
	version: "1.0.1"
	author: "Matthieu PETITE"
	description: "Document the devops process related to the datascience platform"
  - date: "2025-01-28"
	version: "1.0.2"
	author: "Matthieu PETITE"
	description: "Document the deployment mode of kubernetes and the stacks strategy"
  - date: "2025-02-03"
	version: "1.0.3"
	author: "Matthieu PETITE"
	description: "April Charting and minor fix in devops strategy"
  - date: "2025-02-04"
	version: "1.0.4"
	author: "Matthieu PETITE"
	description: "Cillium CNI in Kubernetes presentation"
  - date: "2025-02-10"
	version: "1.0.5"
	author: "Matthieu PETITE"
	description: "Add storage account description on lz datascience"
  - date: "2025-04-03"
	version: "1.0.5"
	author: "Guillaume COUE"
	description: "Update document to match V1 scope for data platform"
  - date: "2025-05-26"
	version: "1.0.6"
	author: "Matthieu PETITE"
	description: "Update document to include new platforms (pre production, production)"
  - date: "2025-05-26"
	version: "1.0.7"
	author: "Matthieu PETITE"
	description: "Add ressource for envs"
lof: true
lot: true
caption-justification: centering
---
```{.include shift-heading-level-by=0}
./1-introduction.md
./2-global-overview.md
./3-design-area.md
./4-devops-process.md
./5-conventions.md
```
