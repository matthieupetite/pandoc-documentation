# Stack showup-prod resources

## showup-prod Variables


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
| confidentiality | default: c1 |
| | description: Confidentiality level of the deployed resources |
| | type: \$\{string\} |
| csu | default: n/a |
| | description: Csu value for the deployed resources |
| | type: \$\{string\} |
| customer | default: Klepierre Showup |
| | description: Customer using the deployed resources |
| | type: \$\{string\} |
| env | default: prod |
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
| project | default: klepierre-showup-prod |
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
:showup-prod variable properties

## showup-prod Resources

### showup-prod app service service backend

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_app_service |
| app_service_plan_id | \$\{azurerm_app_service_plan.service_plan_backend.id \} |
| app_settings | \{"DOCKER_REGISTRY_SERVER_PASSWORD":"<PASSWORD>","D OCKER_REGISTRY_SERVER_URL":"<DOCKER_REGISTRY_URL>" ,"DOCKER_REGISTRY_SERVER_USERNAME":"<USERNAME>","W EBSITES_ENABLE_APP_SERVICE_STORAGE":"false"\} |
| identity | \[\{"type":"SystemAssigned"\}\] |
| location | westeurope |
| name | webapp-showup-backend-\$\{var.env\} |
| resource_group_name | rg-showup-backend-prod-westeu |
| site_config | \[\{"dotnet_framework_version":"v4.0","linux_fx_vers ion":"DOCKER|<DOCKER_IMAGE_NAME>:<TAG>"\}\] |
| tags | \$\{module.tags.common_tags\} |
:showup-prod app service service backend properties

### showup-prod app service service integration

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_app_service |
| app_service_plan_id | \$\{azurerm_app_service_plan.service_plan_integratio n.id\} |
| location | westeurope |
| name | showup-integration-\$\{var.env\} |
| resource_group_name | rg-showup-integration-prod-westeu |
| site_config | \[\{"dotnet_framework_version":"v4.0"\}\] |
:showup-prod app service service integration properties



### showup-prod app service plan service plan backend

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_app_service_plan |
| kind | Linux |
| location | westeurope |
| name | plan-showup-shared-prod-westeu |
| reserved | true |
| resource_group_name | rg-showup-shared-prod-westeu |
| sku | \[\{"size":"P3","tier":"Premium"\}\] |
| tags | \$\{module.tags.common_tags\} |
| zone_redundant | true |
:showup-prod app service plan service plan backend properties

### showup-prod app service plan service plan integration

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_app_service_plan |
| location | westeurope |
| name | \$\{azurcaf_name.service_plan_integration.result\} |
| resource_group_name | rg-showup-integration-prod-westeu |
| sku | \[\{"size":"P3","tier":"Premium"\}\] |
:showup-prod app service plan service plan integration properties



### showup-prod app service virtual network swift connection backend integration

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_app_service_virtual_network_swift_connection |
| app_service_id | \$\{azurerm_app_service.service_backend.id\} |
| subnet_id | \$\{azurerm_subnet.integration_subnet.id\} |
:showup-prod app service virtual network swift connection backend integration properties



### showup-prod application gateway app gateway

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
| name | agw-showup-prod-westeu |
| request_routing_rule | \[\{"backend_address_pool_name":"\$\{local.backend_add ress_pool_name\}","backend_http_settings_name":"\$\{l ocal.http_setting_name\}","http_listener_name":"\$\{l ocal.listener_name\}","name":"\$\{local.request_routi ng_rule_name\}","priority":9,"rule_type":"Basic"\}\] |
| resource_group_name | rg-showup-network-prod-westeu |
| sku | \[\{"capacity":2,"name":"Standard_v2","tier":"Standa rd_v2"\}\] |
| ssl_certificate | \[\{"data":"\$\{filebase64(\"\$\{path.module\}/certificat es/app-gateway-cert.pfx\")\}","name":"appGatewaySsl Cert","password":"tobe defined"\}\] |
| tags | \$\{module.tags.common_tags\} |
:showup-prod application gateway app gateway properties



### showup-prod flexible postgresql server postgresql

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_flexible_postgresql_server |
| administrator_login | showupdadminpg |
| administrator_login_password | \$\{random.pgpassword.result\} |
| location | westeurope |
| name | showup-prod-westeu |
| resource_group_name | rg-showup-shared-prod-westeu |
| sku | \[\{"capacity":2,"name":"GP_Standard_D2s_v3","tier": "GeneralPurpose"\}\] |
| storage | \[\{"auto_grow":"Enabled","size":5120\}\] |
| tags | \$\{module.tags.common_tags\} |
| version | 11 |
:showup-prod flexible postgresql server postgresql properties



### showup-prod key vault showup

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_key_vault |
| enable_rbac_authorization | true |
| location | westeurope |
| name | kv-showup-prod-westeu |
| resource_group_name | rg-showup-shared-prod-westeu |
| sku_name | standard |
| tags | \$\{module.tags.common_tags\} |
| tenant_id | \$\{data.azurerm_client_config.current.tenant_id\} |
:showup-prod key vault showup properties



### showup-prod key vault secret pgpassword

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_key_vault_secret |
| key_vault_id | \$\{azurerm_key_vault.example.id\} |
| name | postgres-admin-password |
| value | \$\{random.pgpassword.result\} |
:showup-prod key vault secret pgpassword properties



### showup-prod postgresql flexible server database integration db

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_postgresql_flexible_server_database |
| charset | UTF8 |
| collation | en_US.utf8 |
| lifecycle | \[\{"prevent_destroy":true\}\] |
| name | service_db |
| server_id |  |
:showup-prod postgresql flexible server database integration db properties

### showup-prod postgresql flexible server database service db

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_postgresql_flexible_server_database |
| charset | UTF8 |
| collation | en_US.utf8 |
| lifecycle | \[\{"prevent_destroy":true\}\] |
| name | service_db |
| server_id |  |
:showup-prod postgresql flexible server database service db properties



### showup-prod public ip app gateway public ip

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_public_ip |
| allocation_method | Static |
| location | westeurope |
| name | pip-showup-prod-westeu |
| resource_group_name | rg-showup-network-prod-westeu |
| sku | Standard |
| tags | \$\{module.tags.common_tags\} |
:showup-prod public ip app gateway public ip properties



### showup-prod resource group backend

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | westeurope |
| name | rg-showup-backend-prod-westeu |
| tags | \$\{module.tags.common_tags\} |
:showup-prod resource group backend properties

### showup-prod resource group frontend

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | westeurope |
| name | rg-showup-frontend-prod-westeu |
| tags | \$\{module.tags.common_tags\} |
:showup-prod resource group frontend properties

### showup-prod resource group integration

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | westeurope |
| name | rg-showup-integration-prod-westeu |
| tags | \$\{module.tags.common_tags\} |
:showup-prod resource group integration properties

### showup-prod resource group network

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | westeurope |
| name | rg-showup-network-prod-westeu |
| tags | \$\{module.tags.common_tags\} |
:showup-prod resource group network properties

### showup-prod resource group shared

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | westeurope |
| name | rg-showup-shared-prod-westeu |
| tags | \$\{module.tags.common_tags\} |
:showup-prod resource group shared properties



### showup-prod storage account frontend

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_storage_account |
| account_replication_type | ZRS |
| account_tier | Standard |
| location | westeurope |
| name | showupfrontend\$\{var.env\} |
| resource_group_name | rg-showup-frontend-prod-westeu |
:showup-prod storage account frontend properties



### showup-prod subnet backend subnet

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["10.69.3.0/27"\] |
| name | snet-backend-prod-westeu |
| resource_group_name | rg-showup-network-prod-westeu |
| virtual_network_name | vnet-showup-network-prod-westeu |
:showup-prod subnet backend subnet properties

### showup-prod subnet frontend subnet

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["10.69.3.32/27"\] |
| name | snet-frontend-prod-westeu |
| resource_group_name | vnet-showup-network-prod-westeu |
| virtual_network_name | vnet-showup-network-prod-westeu |
:showup-prod subnet frontend subnet properties

### showup-prod subnet gateway subnet

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["10.69.2.0/24"\] |
| name | gatewaySubnet |
| resource_group_name | rg-showup-network-prod-westeu |
| virtual_network_name | vnet-showup-network-prod-westeu |
:showup-prod subnet gateway subnet properties

### showup-prod subnet integration subnet

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["10.69.3.64/26"\] |
| name | snet-pe-shared-prod-westeu |
| resource_group_name | rg-showup-network-prod-westeu |
| virtual_network_name | vnet-showup-network-prod-westeu |
:showup-prod subnet integration subnet properties



### showup-prod virtual network network

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_virtual_network |
| address_space | \["10.69.0.0/23"\] |
| location | westeurope |
| name | vnet-showup-network-prod-westeu |
| resource_group_name | rg-showup-network-prod-westeu |
| tags | \$\{module.tags.common_tags\} |
:showup-prod virtual network network properties



### showup-prod random pgpassword

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | random |
| length | 32 |
| special | false |
:showup-prod random pgpassword properties



## showup-prod Modules

### showup-prod module tags

| Properties | Values |
|:-------------------------|:--------------------------------------------------------------------|
| accountable | n/a |
| app | lz-app |
| confidentiality | c1 |
| csu | n/a |
| customer | Klepierre Showup |
| env | prod |
| gen | automatic |
| maintainer | n/a |
| managed_level | full-managed |
| mcr_contract_id | n/a |
| monitored | false |
| offer | n/a |
| owner | n/a |
| personal_data | g0 |
| project | klepierre-showup-prod |
| region | westeurope |
| reseller | orange business |
| semver | n/a |
| sla | standard |
| source | ../../../modules/shared/tags |
| stack | n/a |
| tenant_name | kstorage |
:showup-prod module tags properties

