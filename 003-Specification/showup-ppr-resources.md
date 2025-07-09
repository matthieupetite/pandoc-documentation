# Stack showup-ppr resources

## showup-ppr Variables


| Name | Properties |
|:--------------------------------------|:--------------------------------------------------------------------|
| accountable | default: n/a |
| | description: Accountable for the deployed resources |
| | type: \$\{string\} |
| app | default: showup |
| | description: Application for which the resources where deployed |
| | type: \$\{string\} |
| azure_tenant_id | description: Tenant ID of your subscription |
| | sensitive:  |
| | type: \$\{string\} |
| company | default: orange |
| | description: Company name |
| | type: \$\{string\} |
| confidentiality | default: c1 |
| | description: Confidentiality level of the deployed resources |
| | type: \$\{string\} |
| connectivity_client_certificate_path | default: ../../certs/connectivity-cert.pfx |
| | description: Connectivity client certificate path |
| | type: \$\{string\} |
| connectivity_client_id | description: Connectivity client ID |
| | sensitive:  |
| | type: \$\{string\} |
| connectivity_subscription_id | description: Connectivity subscription ID |
| | type: \$\{string\} |
| csu | default: n/a |
| | description: Csu value for the deployed resources |
| | type: \$\{string\} |
| customer | default: Klepierre Showup |
| | description: Customer using the deployed resources |
| | type: \$\{string\} |
| env | default: ppr |
| | description: Environment of the deployed resources |
| | type: \$\{string\} |
| gen | default: automatic |
| | description: Generation type of the deployed resources |
| | type: \$\{string\} |
| lz_app_address_prefix | description: Landing zone app address prefix |
| | type: \$\{string\} |
| lz_app_client_certificate_path | default: ../../certs/lz-app-cert.pfx |
| | description: App Landing Zone client certificate path |
| | type: \$\{string\} |
| lz_app_client_id | description: lz-app client ID |
| | sensitive:  |
| | type: \$\{string\} |
| lz_app_subnet_adress_prefix | description: landing zone subnet adress prefix |
| | type: \$\{string\} |
| lz_app_subscription_id | description: lz-app subscription ID |
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
| management_client_certificate_path | default: ../../certs/management-cert.pfx |
| | description: Management client certificate path |
| | type: \$\{string\} |
| management_client_id | description: Management client ID |
| | sensitive:  |
| | type: \$\{string\} |
| management_subscription_id | description: Management subscription ID |
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
| project | default: klepierre-showup-ppr |
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
| showup_prod_client_certificate_path | description: Client certificate path for showup-prod stack |
| | sensitive:  |
| | type: \$\{string\} |
| showup_prod_client_id | description: showup-prod stack client id |
| | sensitive:  |
| | type: \$\{string\} |
| showup_prod_subscription_id | description: showup-prod stack associated subscription id |
| | sensitive:  |
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
:showup-ppr variable properties

## showup-ppr Resources

### showup-ppr app service service backend

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_app_service |
| app_service_plan_id | \$\{azurerm_app_service_plan.service_plan_backend.id \} |
| app_settings | \{"DOCKER_REGISTRY_SERVER_PASSWORD":"<PASSWORD>","D OCKER_REGISTRY_SERVER_URL":"<DOCKER_REGISTRY_URL>" ,"DOCKER_REGISTRY_SERVER_USERNAME":"<USERNAME>","W EBSITES_ENABLE_APP_SERVICE_STORAGE":"false"\} |
| identity | \[\{"type":"SystemAssigned"\}\] |
| location | westeurope |
| name | webapp-showup-backend-\$\{var.env\} |
| resource_group_name | rg-showup-backend-ppr-westeu |
| site_config | \[\{"dotnet_framework_version":"v4.0","linux_fx_vers ion":"DOCKER|<DOCKER_IMAGE_NAME>:<TAG>"\}\] |
| tags | \$\{module.tags.common_tags\} |
:showup-ppr app service service backend properties

### showup-ppr app service service integration

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_app_service |
| app_service_plan_id | \$\{azurerm_app_service_plan.service_plan_integratio n.id\} |
| location | westeurope |
| name | showup-integration-\$\{var.env\} |
| resource_group_name | rg-showup-integration-ppr-westeu |
| site_config | \[\{"dotnet_framework_version":"v4.0"\}\] |
:showup-ppr app service service integration properties



### showup-ppr app service plan service plan backend

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_app_service_plan |
| kind | Linux |
| location | westeurope |
| name | plan-showup-backend-ppr-westeu |
| reserved | true |
| resource_group_name | rg-showup-shared-ppr-westeu |
| sku | \[\{"size":"P3","tier":"Premium"\}\] |
| tags | \$\{module.tags.common_tags\} |
| zone_redundant | true |
:showup-ppr app service plan service plan backend properties

### showup-ppr app service plan service plan integration

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_app_service_plan |
| location | westeurope |
| name | \$\{azurcaf_name.service_plan_integration.result\} |
| resource_group_name | rg-showup-integration-ppr-westeu |
| sku | \[\{"size":"P3","tier":"Premium"\}\] |
:showup-ppr app service plan service plan integration properties



### showup-ppr app service virtual network swift connection backend integration

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_app_service_virtual_network_swift_connection |
| app_service_id | \$\{azurerm_app_service.service_backend.id\} |
| subnet_id | \$\{azurerm_subnet.integration_subnet.id\} |
:showup-ppr app service virtual network swift connection backend integration properties



### showup-ppr application gateway app gateway

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_application_gateway |
| backend_address_pool | \[\{"fqdns":\["\$\{azurerm_app_service.service_backend. default_site_hostname\}"\],"name":"\$\{local.backend_a ddress_pool_name\}"\}\] |
| backend_http_settings | \[\{"cookie_based_affinity":"Disabled","name":"\$\{loc al.http_setting_name\}","path":"/path1/","port":80, "protocol":"Http","request_timeout":60\}\] |
| frontend_ip_configuration | \[\{"name":"appGatewayFrontendIP","public_ip_address _id":"\$\{azurerm_public_ip.app_gateway_public_ip.id \}"\}\] |
| frontend_port | \[\{"name":"httpsPort","port":443\}\] |
| gateway_ip_configuration | \[\{"name":"appGatewayIpConfig","subnet_id":"\$\{azure rm_subnet.gateway_subnet.id\}"\}\] |
| http_listener | \[\{"frontend_ip_configuration_name":"appGatewayFron tendIP","frontend_port_name":"httpsPort","name":"h ttpsListener","protocol":"Https","ssl_certificate_ name":"appGatewaySslCert"\},\{"frontend_ip_configura tion_name":"\$\{local.frontend_ip_configuration_name \}","frontend_port_name":"\$\{local.frontend_port_nam e\}","name":"\$\{local.listener_name\}","protocol":"Ht tp"\}\] |
| location | westeurope |
| name | agw-showup-ppr-westeu |
| request_routing_rule | \[\{"backend_address_pool_name":"\$\{local.backend_add ress_pool_name\}","backend_http_settings_name":"\$\{l ocal.http_setting_name\}","http_listener_name":"\$\{l ocal.listener_name\}","name":"\$\{local.request_routi ng_rule_name\}","priority":9,"rule_type":"Basic"\}\] |
| resource_group_name | rg-showup-network-ppr-westeu |
| sku | \[\{"capacity":2,"name":"Standard_v2","tier":"Standa rd_v2"\}\] |
| ssl_certificate | \[\{"data":"\$\{filebase64(\"\$\{path.module\}/certificat es/app-gateway-cert.pfx\")\}","name":"appGatewaySsl Cert","password":"tobe defined"\}\] |
| tags | \$\{module.tags.common_tags\} |
:showup-ppr application gateway app gateway properties



### showup-ppr flexible postgresql server postgresql

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_flexible_postgresql_server |
| administrator_login | showupdadminpg |
| administrator_login_password | \$\{random.pgpassword.result\} |
| location | westeurope |
| name | showup-ppr-westeu |
| resource_group_name | rg-showup-shared-ppr-westeu |
| sku | \[\{"capacity":2,"name":"GP_Standard_D2s_v3","tier": "GeneralPurpose"\}\] |
| storage | \[\{"auto_grow":"Enabled","size":5120\}\] |
| tags | \$\{module.tags.common_tags\} |
| version | 11 |
:showup-ppr flexible postgresql server postgresql properties



### showup-ppr key vault showup

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_key_vault |
| enable_rbac_authorization | true |
| location | westeurope |
| name | kv-showup-ppr-westeu |
| resource_group_name | rg-showup-shared-ppr-westeu |
| sku_name | standard |
| tags | \$\{module.tags.common_tags\} |
| tenant_id | \$\{data.azurerm_client_config.current.tenant_id\} |
:showup-ppr key vault showup properties



### showup-ppr key vault secret pgpassword

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_key_vault_secret |
| key_vault_id | \$\{azurerm_key_vault.example.id\} |
| name | postgres-admin-password |
| value | \$\{random.pgpassword.result\} |
:showup-ppr key vault secret pgpassword properties



### showup-ppr postgresql flexible server database integration db

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_postgresql_flexible_server_database |
| charset | UTF8 |
| collation | en_US.utf8 |
| lifecycle | \[\{"prevent_destroy":true\}\] |
| name | service_db |
| server_id |  |
:showup-ppr postgresql flexible server database integration db properties

### showup-ppr postgresql flexible server database service db

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_postgresql_flexible_server_database |
| charset | UTF8 |
| collation | en_US.utf8 |
| lifecycle | \[\{"prevent_destroy":true\}\] |
| name | service_db |
| server_id |  |
:showup-ppr postgresql flexible server database service db properties



### showup-ppr public ip app gateway public ip

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_public_ip |
| allocation_method | Static |
| location | westeurope |
| name | pip-showup-ppr-westeu |
| resource_group_name | rg-showup-network-ppr-westeu |
| sku | Standard |
| tags | \$\{module.tags.common_tags\} |
:showup-ppr public ip app gateway public ip properties



### showup-ppr resource group backend

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | westeurope |
| name | rg-showup-backend-ppr-westeu |
| tags | \$\{module.tags.common_tags\} |
:showup-ppr resource group backend properties

### showup-ppr resource group frontend

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | westeurope |
| name | rg-showup-frontend-ppr-westeu |
| tags | \$\{module.tags.common_tags\} |
:showup-ppr resource group frontend properties

### showup-ppr resource group integration

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | westeurope |
| name | rg-showup-integration-ppr-westeu |
| tags | \$\{module.tags.common_tags\} |
:showup-ppr resource group integration properties

### showup-ppr resource group network

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | westeurope |
| name | rg-showup-network-ppr-westeu |
| tags | \$\{module.tags.common_tags\} |
:showup-ppr resource group network properties

### showup-ppr resource group shared

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | westeurope |
| name | rg-showup-shared-ppr-westeu |
| tags | \$\{module.tags.common_tags\} |
:showup-ppr resource group shared properties



### showup-ppr storage account frontend

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_storage_account |
| account_replication_type | ZRS |
| account_tier | Standard |
| location | westeurope |
| name | showupfrontend\$\{var.env\} |
| resource_group_name | rg-showup-frontend-ppr-westeu |
:showup-ppr storage account frontend properties



### showup-ppr subnet backend subnet

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["10.69.3.32/27"\] |
| name | snet-showup-backend-ppr-westeu |
| resource_group_name | rg-showup-network-ppr-westeu |
| virtual_network_name | vnet-showup-network-ppr-westeu |
:showup-ppr subnet backend subnet properties

### showup-ppr subnet frontend subnet

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["10.69.3.0/27"\] |
| name | snet-showup-frontend-ppr-westeu |
| resource_group_name | vnet-showup-network-ppr-westeu |
| virtual_network_name | vnet-showup-network-ppr-westeu |
:showup-ppr subnet frontend subnet properties

### showup-ppr subnet integration subnet

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["10.69.3.64/26"\] |
| name | snet-showup-shared-ppr-westeu |
| resource_group_name | rg-showup-network-ppr-westeu |
| virtual_network_name | vnet-showup-network-ppr-westeu |
:showup-ppr subnet integration subnet properties



### showup-ppr virtual network network

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_virtual_network |
| address_space | \["10.69.2.0/23"\] |
| location | westeurope |
| name | vnet-showup-network-ppr-westeu |
| resource_group_name | rg-showup-network-ppr-westeu |
| tags | \$\{module.tags.common_tags\} |
:showup-ppr virtual network network properties



### showup-ppr random pgpassword

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | random |
| length | 32 |
| special | false |
:showup-ppr random pgpassword properties



## showup-ppr Modules

### showup-ppr module tags

| Properties | Values |
|:-------------------------|:--------------------------------------------------------------------|
| accountable | n/a |
| app | lz-app |
| confidentiality | c1 |
| csu | n/a |
| customer | Klepierre Showup |
| env | ppr |
| gen | automatic |
| maintainer | n/a |
| managed_level | full-managed |
| mcr_contract_id | n/a |
| monitored | false |
| offer | n/a |
| owner | n/a |
| personal_data | g0 |
| project | klepierre-showup-ppr |
| region | westeurope |
| reseller | orange business |
| semver | n/a |
| sla | standard |
| source | ../../../modules/shared/tags |
| stack | n/a |
| tenant_name | kstorage |
:showup-ppr module tags properties

