# Stack identity resources

## identity Variables


| Name | Properties |
|:--------------------------------------|:--------------------------------------------------------------------|
| accountable | default: n/a |
| | description: Accountable for the deployed resources |
| | type: \$\{string\} |
| app | default: identity |
| | description: Application for which the resources where deployed |
| | type: \$\{string\} |
| azure_tenant_id | description: Azure tenant ID |
| | sensitive:  |
| | type: \$\{string\} |
| company | default: orange |
| | description: identity client certificate path |
| | type: \$\{string\} |
| confidentiality | default: c1 |
| | description: Confidentiality level of the deployed resources |
| | type: \$\{string\} |
| csu | default: n/a |
| | description: Csu value for the deployed resources |
| | type: \$\{string\} |
| customer | default: Klepierre DSI |
| | description: Customer using the deployed resources |
| | type: \$\{string\} |
| env | default: default |
| | description: Environment of the deployed resources |
| | type: \$\{string\} |
| gen | default: automatic |
| | description: Generation type of the deployed resources |
| | type: \$\{string\} |
| identity_client_certificate_path | description: identity client certificate path |
| | type: \$\{string\} |
| identity_client_id | description: identity client id |
| | type: \$\{string\} |
| identity_subscription_id | description: Identity subscription ID |
| | type: \$\{string\} |
| ma_contract_id | default: n/a |
| | description: Ma contract ID for the deployed resources |
| | type: \$\{string\} |
| maintainer | default: n/a |
| | description: Emails of the maintainers of the deployed resource,s |
| | type: \$\{string\} |
| managed_level | default: full-managed |
| | description: Managed level for the deployed resources |
| | type: \$\{string\} |
| mcr_contract_id | default: n/a |
| | description: Mcr contract ID for the deployed resources |
| | type: \$\{string\} |
| monitored | default: false |
| | description: Monitored boolean for deployed resources |
| | type: \$\{string\} |
| offer | default: n/a |
| | description: Offer of the deployed resources |
| | type: \$\{string\} |
| owner | description: Emails of the owners of the deployed resources |
| | type: \$\{string\} |
| personal_data | default: g0 |
| | description: Personal data of the deployed resources |
| | type: \$\{string\} |
| project | default: klepierre-identity |
| | description: Project supporting the deployed resources |
| | type: \$\{string\} |
| region | default: westeurope |
| | description: Region |
| | type: \$\{string\} |
| region_abbreviation | default: westeu |
| | description: Region abbreviation |
| | type: \$\{string\} |
| reseller | default: orange business |
| | description: Reseller of the deployed resources |
| | type: \$\{string\} |
| semver | default: n/a |
| | description: Semantic version of the deployed resources |
| | type: \$\{string\} |
| sla | default: standard |
| | description: Sla required of the deployed resources |
| | type: \$\{string\} |
| stack | default: n/a |
| | description: Stack type of the deployed resources |
| | type: \$\{string\} |
| tenant_name | default: kstorage |
| | description: Tenant name for the deployed resources |
| | type: \$\{string\} |
:identity variable properties

## identity Resources

### identity key vault identity

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_key_vault |
| enable_rbac_authorization | true |
| location | westeurope |
| name | kv-kv-identity-westeu |
| purge_protection_enabled | true |
| resource_group_name | rg-identity-services-westeu |
| sku_name | standard |
| soft_delete_retention_days | 7 |
| tags | \$\{module.tags.common_tags\} |
| tenant_id | \$\{data.azurerm_client_config.current.tenant_id\} |
:identity key vault identity properties



### identity private dns a record keyvault

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_private_dns_a_record |
| name | kv-kv-identity-westeu |
| records | \["\$\{azurerm_private_endpoint.identity_kv.private_s ervice_connection\[0\].private_ip_address\}"\] |
| resource_group_name | rg-identity-network-westeu |
| ttl | 300 |
| zone_name | privatelink.vaultcore.azure.net |
:identity private dns a record keyvault properties



### identity private dns zone keyvault

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_private_dns_zone |
| name | privatelink.vaultcore.azure.net |
| resource_group_name | rg-identity-network-westeu |
:identity private dns zone keyvault properties



### identity private dns zone virtual network link keyvault

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_private_dns_zone_virtual_network_link |
| name | kv-kv-identity-westeu |
| private_dns_zone_name | privatelink.vaultcore.azure.net |
| registration_enabled | false |
| resource_group_name | rg-identity-network-westeu |
| virtual_network_id | \$\{azurerm_virtual_network.identity.id\} |
:identity private dns zone virtual network link keyvault properties



### identity private endpoint identity kv

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_private_endpoint |
| location | westeurope |
| name | kv-kv-identity-westeu |
| private_service_connection | \[\{"is_manual_connection":false,"name":"\$\{azurecaf_ name.identity_kv.result\}-psc","private_connection_ resource_id":"\$\{azurerm_key_vault.identity.id\}","s ubresource_names":\["vault"\]\}\] |
| resource_group_name | rg-identity-services-westeu |
| subnet_id | \$\{azurerm_subnet.identity.id\} |
| tags | \$\{module.tags.common_tags\} |
:identity private endpoint identity kv properties



### identity resource group network

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | westeurope |
| name | rg-identity-network-westeu |
| tags | \$\{module.tags.common_tags\} |
:identity resource group network properties

### identity resource group service

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | westeurope |
| name | rg-identity-services-westeu |
| tags | \$\{module.tags.common_tags\} |
:identity resource group service properties



### identity subnet identity

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["10.69.251.224/27"\] |
| name | subnet-snet-identity-westeu |
| resource_group_name | rg-identity-network-westeu |
| virtual_network_name | vnet-vnet-identity-westeu |
:identity subnet identity properties



### identity virtual network identity

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_virtual_network |
| address_space | \["10.69.251.224/27"\] |
| location | westeurope |
| name | vnet-vnet-identity-westeu |
| resource_group_name | rg-identity-network-westeu |
| tags | \$\{module.tags.common_tags\} |
:identity virtual network identity properties



## identity Modules

### identity module tags

| Properties | Values |
|:-------------------------|:--------------------------------------------------------------------|
| accountable | n/a |
| app | identity |
| confidentiality | c1 |
| csu | n/a |
| customer | Klepierre DSI |
| env | default |
| gen | automatic |
| maintainer | n/a |
| managed_level | full-managed |
| mcr_contract_id | n/a |
| monitored | false |
| offer | n/a |
| owner | n/a |
| personal_data | g0 |
| project | klepierre-identity |
| region | westeurope |
| reseller | orange business |
| semver | n/a |
| sla | standard |
| source | ../../../modules/shared/tags |
| stack | n/a |
| tenant_name | kstorage |
:identity module tags properties

