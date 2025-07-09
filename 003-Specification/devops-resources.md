# Stack devops resources

## devops Variables


| Name | Properties |
|:--------------------------------------|:--------------------------------------------------------------------|
| accountable | default: n/a |
| | description: Accountable for the deployed resources |
| | type: \$\{string\} |
| ado_admin_username | default: azuredevops-vm-user |
| | description: azure dev ops agent virtual machine user name |
| | type: \$\{string\} |
| ado_personal_access_token | description: PAT Token used to configure azure dev ops |
| | type: \$\{string\} |
| ado_project_name | default: LandingZone |
| | description: azure dev ops project name |
| | type: \$\{string\} |
| agent_server_image_specification | default: \[object Object\] |
| | description: agent virtual machine image specification |
| | type: \$\{object(\{     publisher = string     offer     = ,string     sku       = string     version   = stri,ng   \})\} |
| app | default: devops |
| | description: Application for which the resources where deployed |
| | type: \$\{string\} |
| azure_tenant_id | description: Tenant ID of your subscription |
| | sensitive:  |
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
| devops_agent_pool_name | default: azuredevopspool |
| | description: Name of the agent pool |
| | type: \$\{string\} |
| devops_agent_vm_count | default: 2 |
| | description: Number of devops agent to deploy |
| | type: \$\{number\} |
| devops_agent_vm_size | default: Standard_DS3_v2 |
| | description: Size of the VM used for the devops agent |
| | type: \$\{string\} |
| devops_client_certificate_path | description: Client certificate path for devops stack |
| | sensitive:  |
| | type: \$\{string\} |
| devops_client_id | description: devops stack client id |
| | sensitive:  |
| | type: \$\{string\} |
| devops_container_registry_sku | default: Basic |
| | description: container registry used in devops lz |
| | sensitive:  |
| | type: \$\{string\} |
| | validation: \[object Object\] |
| devops_subscription_id | description: devops stack associated subscription id |
| | sensitive:  |
| | type: \$\{string\} |
| devops_virtual_network_address_space | default: 10.69.244.0/27 |
| | description: The address space that is used the virtual network |
| | type: \$\{list(string)\} |
| devops_vm_subnet_address_space | default: 10.69.244.0/27 |
| | description: The address space that is used the subnet |
| | type: \$\{string\} |
| env | default: default |
| | description: Environment of the deployed resources |
| | type: \$\{string\} |
| gen | default: automatic |
| | description: Generation type of the deployed resources |
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
| project | default: klepierre-devops |
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
| stack_name | default: devops |
| | type: \$\{string\} |
| | validation: \[object Object\] |
| tenant_name | default: kstorage |
| | description: Tenant name for the deployed resources |
| | type: \$\{string\} |
:devops variable properties

## devops Resources

### devops azuredevops agent pool vmpool

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azuredevops_agent_pool |
| count |  |
| name | azuredevopspool |
:devops azuredevops agent pool vmpool properties



### devops azuredevops agent queue vmqueue

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azuredevops_agent_queue |
| agent_pool_id | \$\{azuredevops_agent_pool.vmpool\[0\].id\} |
| count |  |
| lifecycle | \[\{"ignore_changes":\["\$\{project_id\}"\]\}\] |
| project_id | \$\{data.azuredevops_project.this.id\} |
:devops azuredevops agent queue vmqueue properties



### devops azuredevops pipeline authorization ado agent autorization

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azuredevops_pipeline_authorization |
| count |  |
| lifecycle | \[\{"ignore_changes":\["\$\{project_id\}","\$\{resource_id \}"\]\}\] |
| project_id | \$\{data.azuredevops_project.this.id\} |
| resource_id | \$\{azuredevops_agent_queue.vmqueue\[count.index\].id\} |
| type | queue |
:devops azuredevops pipeline authorization ado agent autorization properties



### devops availability set this

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_availability_set |
| location | westeurope |
| name | avail-devops-default-westeu |
| resource_group_name | rg-devops-agents-westeu |
:devops availability set this properties



### devops container registry devops container registry

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_container_registry |
| admin_enabled | true |
| location | westeurope |
| name | cr-devops-default-westeu |
| resource_group_name | rg-devops-services-westeu |
| sku | Basic |
:devops container registry devops container registry properties



### devops key vault keyvault devops

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_key_vault |
| enable_rbac_authorization | true |
| enabled_for_disk_encryption | true |
| location | westeurope |
| name | kv-devops-default-westeu |
| purge_protection_enabled | true |
| resource_group_name | rg-devops-services-westeu |
| sku_name | standard |
| soft_delete_retention_days | 7 |
| tenant_id | n/a |
:devops key vault keyvault devops properties



### devops key vault secret devops agent admin login

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_key_vault_secret |
| content_type | text |
| depends_on | \["\$\{azurerm_role_assignment.spn_keyvault_secret_of ficer\}","\$\{azurerm_role_assignment.spn_keyvault_ce rtificate_officer\}"\] |
| key_vault_id | \$\{azurerm_key_vault.keyvault_devops.id\} |
| name | devops-agent-admin-login |
| value | azuredevops-vm-user |
:devops key vault secret devops agent admin login properties

### devops key vault secret devops agent admin password

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_key_vault_secret |
| content_type | text |
| depends_on | \["\$\{azurerm_role_assignment.spn_keyvault_secret_of ficer\}","\$\{azurerm_role_assignment.spn_keyvault_ce rtificate_officer\}"\] |
| key_vault_id | \$\{azurerm_key_vault.keyvault_devops.id\} |
| name | devops-agent-admin-password |
| value | \$\{random_password.devops_agent_admin_password.resu lt\} |
:devops key vault secret devops agent admin password properties



### devops linux virtual machine this

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_linux_virtual_machine |
| admin_password | \$\{random_password.devops_agent_admin_password.resu lt\} |
| admin_username | azuredevops-vm-user |
| availability_set_id | \$\{azurerm_availability_set.this.id\} |
| count | 2 |
| custom_data | \$\{data.local_file.vm_init_script_template\[count.in dex\].content_base64\} |
| depends_on | \["\$\{azurerm_network_interface.this\}","\$\{local_file .vm_init_script_template\}","\$\{azurerm_key_vault.ke yvault_devops\}","\$\{azurerm_role_assignment.spn_key vault_secret_officer\}","\$\{azurerm_role_assignment. spn_keyvault_certificate_officer\}","\$\{azurerm_key_ vault_secret.devops_agent_admin_login\}","\$\{azurerm _key_vault_secret.devops_agent_admin_password\}"\] |
| disable_password_authentication | false |
| identity | \[\{"type":"SystemAssigned"\}\] |
| lifecycle | \[\{"ignore_changes":\["\$\{custom_data\}"\]\}\] |
| location | westeurope |
| name | \$\{azurecaf_name.devops_vm\[count.index\].result\} |
| network_interface_ids | \["\$\{azurerm_network_interface.this\[count.index\].id \}"\] |
| os_disk | \[\{"caching":"ReadWrite","disk_size_gb":128,"storag e_account_type":"Standard_LRS"\}\] |
| resource_group_name | rg-devops-agents-westeu |
| size | Standard_DS3_v2 |
| source_image_reference | \[\{"offer":"\$\{var.agent_server_image_specification. offer\}","publisher":"\$\{var.agent_server_image_spec ification.publisher\}","sku":"\$\{var.agent_server_im age_specification.sku\}","version":"\$\{var.agent_ser ver_image_specification.version\}"\}\] |
:devops linux virtual machine this properties



### devops network interface this

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_network_interface |
| count | 2 |
| ip_configuration | \[\{"name":"internal","private_ip_address_allocation ":"Dynamic","subnet_id":"\$\{azurerm_subnet.devops_v m.id\}"\}\] |
| location | westeurope |
| name | \$\{azurecaf_name.devops_nic\[count.index\].result\} |
| resource_group_name | rg-devops-network-westeu |
:devops network interface this properties



### devops resource group agents

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | westeurope |
| name | rg-devops-agents-westeu |
| tags | \$\{module.tags.common_tags\} |
:devops resource group agents properties

### devops resource group network

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | westeurope |
| name | rg-devops-network-westeu |
| tags | \$\{module.tags.common_tags\} |
:devops resource group network properties

### devops resource group services

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | westeurope |
| name | rg-devops-services-westeu |
| tags | \$\{module.tags.common_tags\} |
:devops resource group services properties



### devops role assignment spn keyvault certificate officer

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_role_assignment |
| principal_id | \$\{data.azurerm_client_config.current.object_id\} |
| role_definition_name | Key Vault Certificates Officer |
| scope | \$\{azurerm_key_vault.keyvault_devops.id\} |
:devops role assignment spn keyvault certificate officer properties

### devops role assignment spn keyvault secret officer

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_role_assignment |
| principal_id | \$\{data.azurerm_client_config.current.object_id\} |
| role_definition_name | Key Vault Secrets Officer |
| scope | \$\{azurerm_key_vault.keyvault_devops.id\} |
:devops role assignment spn keyvault secret officer properties



### devops subnet devops private endpoint

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["10.69.245.0/24"\] |
| name | snet-devops-pe-default-westeu |
| resource_group_name | rg-devops-network-westeu |
| virtual_network_name | vnet-devops-default-westeu |
:devops subnet devops private endpoint properties

### devops subnet devops vm

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["\$\{var.devops_vm_subnet_address_space\}"\] |
| name | snet-devops-default-westeu |
| resource_group_name | rg-devops-network-westeu |
| service_endpoints | \["Microsoft.KeyVault","Microsoft.Storage"\] |
| virtual_network_name | vnet-devops-default-westeu |
:devops subnet devops vm properties



### devops virtual network this

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_virtual_network |
| address_space | 10.69.244.0/27 |
| location | westeurope |
| name | vnet-devops-default-westeu |
| resource_group_name | rg-devops-network-westeu |
:devops virtual network this properties



### devops local file vm init script template

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | local_file |
| content | "\$\{templatefile(\"\$\{path.module\}/files/cloud-init. sh.tpl\", \{    AZP_URL : \"https://dev.azure.com /klepierre\"    AZP_POOL : \"\$\{var.devops_agent_ pool_name\}\"    AZP_AGENT_NAME : azurecaf_name.d evops_vm\[count.index\].result    AZP_TOKEN : \"\$\{ var.ado_personal_access_token\}\"    USERNAME : \ "\$\{var.ado_admin_username\}\"  \})\}" |
| count | 2 |
| file_permission | 755 |
| filename | \$\{join(".", \["\$\{path.module\}/scripts/vm-init-scrip t-\$\{count.index\}.sh"\])\} |
:devops local file vm init script template properties



### devops random password devops agent admin password

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | random_password |
| length | 16 |
| override_special | _%@ |
| special | true |
:devops random password devops agent admin password properties



## devops Modules

### devops module tags

| Properties | Values |
|:-------------------------|:--------------------------------------------------------------------|
| accountable | n/a |
| app | devops |
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
| project | klepierre-devops |
| region | westeurope |
| reseller | orange business |
| semver | n/a |
| sla | standard |
| source | ../../../modules/shared/tags |
| stack | n/a |
| tenant_name | kstorage |
:devops module tags properties

