# Conventions

## Naming Conventions

### Naming convention requirements

An effective naming convention must contain information to quickly identify a resource type and its purpose.

For this project, we use Azure naming convention for all Azure resources except for servers. With servers, we base ourselves on client naming
suggests.

| Reference                        | Requirements                                                                                               |
| :------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| OCB-AZ-NMC-01                    | VM must use client Custom Naming Convention                                                                |
| OCB-AZ-NMC-02                    | All Azure resources except VM must use the Azure Naming Convention defined in the Cloud Adoption Framework |
| OCB-AZ-NMC-03                    | All Azure resources (VM included) must be “coded” with Terraform and generated from azurecaf provider      |
:Naming convention requirements

### Azure naming convention

#### Azure naming convention description

For Azure resources we propose a naming convention. The resource naming must be clear and explicit. An effective naming convention must contain
information to quickly identify a resource type and its purpose.

We have based our naming convention mainly on the Azure Cloud Adoption Framework’s (CAF) naming convention.

#### General guidance

CAF defines a naming strategy for overall the resources. Most resources have the same organizational naming. Resources will
follow this naming format:

**&lt;Resourcype&gt;-&lt;Workload/Application&gt;-&lt;Environment&gt;-&lt;AzureRegion&gt;-&lt;Instance&gt;**

For example, a public IP resource for a production SharePoint workload in the West US region might be *pip-sharepoint-pro-westus-001* as
pictured in the Figure below:

![Naming convention sample](./assets/5-conventions/image38.png)

For technical and logical reasons some resource naming may be different. For example, we have the case of storage account, for this resource
naming hyphen characters are not allowed. The Instance number is not mandatory and may be used only for resources hat are construct
in a terraform loop for example.

#### Implementation Rules

We respect Azure Cloud Adoption Framework (CAF) naming convention implementation rules. We extracted the useful information from the
source [https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming)


An effective naming convention composes resource names from important information about each resource. A good name helps you quickly identify
the resource's type, associated workload, deployment environment, and the Azure region hosting it.

When you construct your naming convention, identify the key pieces of information that you want to reflect in a resource name. Different
information is relevant for different resource types. The following list provides examples of information that are useful when you construct
resource names.

Keep the length of naming components short to prevent exceeding resource name length limits.

| Naming component                 | Description                                                                 |
| :------------------------------- | :-------------------------------------------------------------------------- |
| Resource type                    | An abbreviation that represents the type of Azure resource or asset. This component is often used as a prefix or suffix in the name. For more information, see Recommended abbreviations for Azure resource types. Examples: rg, vm,pip                                                     |
| Business Unit                    | Top-level division of your company that owns the subscription or workload the resource belongs to. In smaller organizations, this component might represent a single corporate top-level organizational element. Examples: fin, mktg, product, it ,corp                                                                |
| Application or service name      | Name of the application, workload, or service that the resource is a part of.Examples: navigator,  emissions, sharepoint,hadoop  |
| Subscription name                | Summary description of the purpose of the subscription that contains the resource. Often broken down by deployment environment type or specific workloads.xamples: prod, shared, client                                                                                                                                  |
| Env                              | The environment name related to the deployment of the resources. For a core landing zone, the environment value is default. example: prod, nonprod|
| location                         | The Azure region where the resource is deployed in a short version. For example France Central location will be name frc|
:implementation rules

##### Example names: General

| Asset type                                  | Format and examples                                                          |
| :-------------------------------------------| :--------------------------------------------------------------------------- |
| Management Group                            | The naming convention for the management group are defined in chapter 3.2.1 - Management groups and subscription organization |
| Subscription                                | The pattern to define subscription name is the following: sub-\<subscription name\>-\<env\> where the env value is optional.  |
| Resource Group                              | The pattern to define resource group name name is the following: rg-\<resource group name\>-\<env\>-\<location\>-\<###\>       |
:Naming convention general resources

##### Example names: Networking

| Asset type                      | Format and examples                                                         |
| :------------------------------ | :-------------------------------------------------------------------------- |
| Virtual network                 | The pattern to define virtual network name is the following: vnet-\<virtual network name\>-\<env\>-\<location\>-\<###>.                          |
| Subnet                          | The pattern to define subnet name is the following: snet-\<subnet name\>-\<env\>-\<location\>-\<###>.                                            |
| Network interface (NIC)         | The pattern to define network interface name is the following: nic-\<vm name\>-\<env\>-\<location\>-\<###>                                       |
| Public IP address               | The pattern to define public network interface name is the following: pip-\<vm name or app name\>-\<env\>-\<location\>-\<###>                    |
| Route table                     | The pattern to define route table name is the following: rt-\<route table name\>-\<env\>-\<location\>-\<###>.                                    |
| Firewall                        | The pattern to define firewall name is the following: afw-\<firewall name\>-\<env\>-\<location\>-\<###>.                                         |
| Firewall Policy                 | The pattern to define firewall policy name is the following: afwp-\<policy name\>-\<env\>-\<location\>-\<###>.                                   |
| Firewall Rule                   | The pattern to define firewall rule name is the following: afwr-\<rule name\>-\<env\>-\<location\>-\<###>.                                       |
| Firewall Rules Collection Group | The pattern to define firewall rules collection group name is the following: afwrcg-\<rules collection group name\>-\<env\>-\<location\>-\<###>. |
| Firewall Rules Collection       | The pattern to define firewall rules collection name is the following: afwrc-\<rules collection name\>-\<env\>-\<location\>-\<###>.              |
| Virtual Network Peering         | The pattern to define Virtual Network Peering name is the following: peer-\<vnet-source\>-to-\<vnet-destination>.                                |
| Virtual WAN                     | The pattern to define virtual wan name is the following: vwan-\<vwan-name\>-\<env\>-\<location\>-\<###>.                                         |
| VPN Gateway                     | The pattern to define virtual wan name is the following: vpng-\<gateway-name\>-\<env\>-\<location><###>.                                         |
| Virtual Hub                     | The pattern to define virtual hub name is the following: vhub-\<vhub name\>-\<env\>-\<location\>-\<###>.                                         |
| VPN connection                  | The pattern to define vpn connection name is the following: vcn-\<connection name\>-\<env\>-\<location\>-\<###>.                                 |
| VPN site                        | The pattern to define VPN site name is the following: vst-\<site name\>-\<env\>-\<location\>-\<###>.                                             |
| Virtual Network Gateway         | The pattern to define VPN site name is the following: vgw-\<gateway name\>-\<env\>-\<location\>-\<###>.                                          |
| Application Gateway             | The pattern to define application gateway name is the following: agw-\<gateway name\>-\<env\>-\<location\>-\<###>.                               |
:Naming convention Networking Resources

### Infrastructure as code

The resources will be deployed from Infrastructure as Code tool Terraform. The naming convention by Terraform provider Azurecaf:

[https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.17/docs](https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.17/docs)

We chose the current latest stable version:

- 1.2.17 – Release Date 05/05/2022

From Azurecaf provider we’ll use azurecaf\_name resources to deploy different Azure resources. All the resources names must be declared in
naming.tf file.

You can find azurecaf\_name documentation link below:

[https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.17/docs/resources/azurecaf\_name](https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.17/docs/resources/azurecaf\_name)

#### Resources calculation code sample

It’s the standard way to use azurecaf_name, we must adapt resource_type. Example of code implementation below:

```
resource "azurecaf_name" "rg_sample" {  
  name           = "sample-pro"
  resource_type  = "azurerm_resource_group"
  suffixes       = ["frc","001"]
}
```

```
resource "azurerm_resource_group" "rg_sample" {
  name     = azurecaf_name.rg_sample.result
  location = "frcrope"
}
```

## Tagging convention

### Tagging Requirements

| Reference                   | Requirements                                      | 
| :-------------------------- | :------------------------------------------------ |
| OCB-AZ-TGC-01               | Key-Value pairs tagging standards                 |
| OCB-AZ-TGC-02               | All resources that accept in Azure must be tagged |
:Tagging Requirements

### Tagging description

Tags are pairs of key-value strings to associate with resources. Tagging resource permit to quickly obtain a certain number of information.
It’s complementary and contains more details than naming convention, useful for managing resources.

It also allows to classify assets within different dimensions to facilitate the lookup of resources and reporting (FinOps, technical report…).
It also permits you to perform operational activities on resources based on tag filtering rules.

### Azure tagging convention

We propose a set of tags with examples in the table below.

| Tag                             | Value Expected                   | Requirement      | Comment                                                 |
| :------------------------------ | :------------------------------- | :--------------- | :------------------------------------------------------ |
| environment             | prod, nonprod, none              | required    | Environment identification for tenant projects. none if no environment defined                                              |
| project_confidentiality | c1, c2, c3                       | required    | Level of confidentiality for the project, "c3" by default (with minimum confidentiality)                                    |
| personal_data           | g1, g2, g3                       | required    | Level of personal data for the project "g3" by default (without personal data)                                              |
| accountable             | <group name>                     | optional    | Person or team who is accountable on the project. It is strongly recommended to use a group or a team rather than a person. |
| maintainer              | <maintainer name>                | optional    | Person or team who is maintainer of the project. It is strongly recommended to use a group or a team rather than a person.  |
| team                    |                                  | optional    | Owner name                                                                                                                  |
| gen                     | automatic, manual                | required    | Type of generation (via Infrastructure as code or manually through portal) at the origin of the creation of the project     |
| sub-stack-name          |                                  | optional    | Name of the subtack (in case of gen is automatic)                                                                           |
| reseller                | OCB                              | required    | Name of the OBS reseller                                                                                                    |
| tenant-name             | Circet                           | required    | Name of the tenant                                                                                                          | 
| offer                   | multicloud-ready                 | required    | Type of offer that is at the origin of the creation of the project. Null for organization projects.                         |
| customer-name           | Circet                           | required    | Name of the customer                                                                                                        |
| contract-id-type        | obs-contract-number              | required    |                                                                                                                             |
| contract-id             | ocb0005652                       | required    |                                                                                                                             |
| obs-contract-number     | ocb0005652                       | optionnel   | Contract number used in the multicloud-ready in order to export the billing to the creation of the cloudStore billing.      |
| managed-level           | managed, co-managed, not-managed | required    | Identification of the level of OCB involvement on the tenant created (resale case)                                          |
| region                  | frc                              | Required    | The location of the resources.                                                                                              |
:Tagging convention