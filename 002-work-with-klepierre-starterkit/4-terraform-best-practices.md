# Terraform best practices

## Summary

- [Terraform best practices](#terraform-best-practices)
  - [Summary](#summary)
  - [Code Format Validation](#code-format-validation)
    - [Code Format Validation Overview](#code-format-validation-overview)
    - [Code Format Validation Useful links](#code-format-validation-useful-links)
  - [Code Semantic Validation](#code-semantic-validation)
    - [Code Semantic Validation Overview](#code-semantic-validation-overview)
    - [Code Semantic Validation Useful links](#code-semantic-validation-useful-links)
  - [Code convention](#code-convention)
    - [General convention](#general-convention)
    - [Naming convention for azure](#naming-convention-for-azure)
    - [Abbreviation Convention for azure](#abbreviation-convention-for-azure)
    - [Resources convention](#resources-convention)
    - [Code convention useful links](#code-convention-useful-links)

## Code Format Validation

### Code Format Validation Overview

***Code format check*** is important the practice build process in order to have a readable and identical code format.
Therefore each push to the project repo, should be followed by a code format validation prior to the merge process.
This check can be done in the pre-commit phase in order to have cleaner git commits.
The terraform command doing that check is:

```bash
terraform fmt -recursive -check
```

!!! Tip
    IDE such as VsCode can help you format your code on save or paste depending on the extensions you have installed.

### Code Format Validation Useful links

[Command: fmt - Terraform by HashiCorp](https://www.terraform.io/docs/cli/commands/fmt.html)

## Code Semantic Validation

### Code Semantic Validation Overview

***Terraform Code validation*** is an important practice in build process.
Therefore each push to the project repo should be followed by a code validation prior to the merge process.
This check can be done in the pre-commit phase in order to have cleaner git commits.
The terraform command to do the check is:

```bash
terraform validate
```

!!! Tip
    IDE such as VsCode can help you format your code on save or paste depending on the extensions you have installed.

### Code Semantic Validation Useful links

[Command: validate - Terraform by HashiCorp](https://www.terraform.io/docs/cli/commands/validate.html)

## Code convention

### General convention

- Use snake_case format (ie: underscore separated nouns)
- Use lowercase letters and numbers

### Naming convention for azure

In order to follow best practices, we recommend using the provider ***aztfmod/azurecaf***.
All naming rules and limitations for Azure are followed according to each resource.

***Resource group***

```terraform
resource "azurecaf_name" "example" {
  name          = "demo"
  resource_type = "azurerm_resource_group"
  suffixes      = ["northeu", "001"]
}
// Returns
// azurecaf_name = "rg-demo-northeu-001"
```

***Unknown resource***

```terraform
resource "azurecaf_name" "example" {
  resource_type = "general"
  name          = "mgt"
  prefixes      = ["law"]
  suffixes      = ["northeu", "001"]
}
// Returns
// azurecaf_name = "law-mgt-northeu-001"
```

### Abbreviation Convention for azure

In order to follow the best practices for abbreviations, we use this [guide](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations)
if the resource is not defined in the provider mentioned above.

If non can be found we shall recommnend using each first letter of the resource name in Azure.

### Resources convention

- Use singular nouns for names
- Include count argument inside resource block as the first argument (top)
- Use "this" if there is no descriptive name available
- Do not repeat resource type in resource name

### Code convention useful links

[Naming conventions - Terraform Best Practices (terraform-best-practices.com)](https://www.terraform-best-practices.com/naming)

[Define your naming convention - Cloud Adoption Framework | Microsoft Docs](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming)

[Recommended abbreviations for Azure resource types - Cloud Adoption Framework | Microsoft Docs](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations)

[https://github.com/aztfmod/terraform-provider-azurecaf](https://github.com/aztfmod/terraform-provider-azurecaf)
