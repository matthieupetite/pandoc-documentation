# Stack connectivity resources

## connectivity Variables


| Name | Properties |
|:--------------------------------------|:--------------------------------------------------------------------|
| accountable | default: n/a |
| | description: Accountable for the deployed resources |
| | type: \$\{string\} |
| admin-shell | default: /etc/cli.sh |
| | type: \$\{string\} |
| | validation: \[object Object\] |
| admin_SSH_key | default:  |
| | type: \$\{string\} |
| app | default: connectivity |
| | description: Application for which the resources where deployed |
| | type: \$\{string\} |
| azure_tenant_id | description: Azure tenant ID |
| | sensitive:  |
| | type: \$\{string\} |
| bgp-asn | default: 64512 |
| | type: \$\{string\} |
| | validation: \[object Object\] |
| bootstrap-script | default:  |
| | type: \$\{string\} |
| company | default: klepierre |
| | description: Company name |
| | type: \$\{string\} |
| confidentiality | default: c1 |
| | description: Confidentiality level of the deployed resources |
| | type: \$\{string\} |
| connectivity_client_certificate_path | description: Connectivity client certificate path |
| | type: \$\{string\} |
| connectivity_client_id | description: Connectivity client id |
| | type: \$\{string\} |
| connectivity_subscription_id | description: Connectivity subscription ID |
| | type: \$\{string\} |
| csu | default: n/a |
| | description: Csu value for the deployed resources |
| | type: \$\{string\} |
| custom-metrics | default: yes |
| | type: \$\{string\} |
| | validation: \[object Object\] |
| customer | default: klepierre |
| | description: Customer using the deployed resources |
| | type: \$\{string\} |
| env | default: default |
| | description: Environment of the deployed resources |
| | type: \$\{string\} |
| existing-public-ip | default:  |
| | type: \$\{string\} |
| gen | default: automatic |
| | description: Generation type of the deployed resources |
| | type: \$\{string\} |
| license-type | default: Security Enforcement (NGTP) |
| | type: \$\{string\} |
| | validation: \[object Object\] |
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
| new-public-ip | default: no |
| | type: \$\{string\} |
| | validation: \[object Object\] |
| offer | default: n/a |
| | description: Offer of the deployed resources |
| | type: \$\{string\} |
| os-version | default: R8120 |
| | description: GAIA OS version |
| | type: \$\{string\} |
| | validation: \[object Object\] |
| owner | description: Emails of the owners of the deployed resources |
| | type: \$\{string\} |
| personal_data | default: g0 |
| | description: Personal data of the deployed resources |
| | type: \$\{string\} |
| project | default: klepierre connectivity |
| | description: Project supporting the deployed resources |
| | type: \$\{string\} |
| region | default: West Europe |
| | description: Region for all resources |
| | type: \$\{string\} |
| region_abbreviation | default: westeu |
| | description: Region abbreviation |
| | type: \$\{string\} |
| reseller | default: orange business |
| | description: Reseller of the deployed resources |
| | type: \$\{string\} |
| scale-unit | default: 2 |
| | type: \$\{string\} |
| | validation: \[object Object\] |
| scale_units | default: 1 |
| | description: Express gateway scale units. Each scale unit is eq,ual to 2Gbps, with support for up to 10 scale unit,s (20Gbps) |
| | type: \$\{number\} |
| semver | default: n/a |
| | description: Semantic version of the deployed resources |
| | type: \$\{string\} |
| sic-key | default:  |
| | sensitive:  |
| | type: \$\{string\} |
| | validation: \[object Object\] |
| sla | default: standard |
| | description: Sla required of the deployed resources |
| | type: \$\{string\} |
| smart1-cloud-token-a | default:  |
| | type: \$\{string\} |
| smart1-cloud-token-b | default:  |
| | type: \$\{string\} |
| smart1-cloud-token-c | default:  |
| | type: \$\{string\} |
| smart1-cloud-token-d | default:  |
| | type: \$\{string\} |
| smart1-cloud-token-e | default:  |
| | type: \$\{string\} |
| stack | default: n/a |
| | description: Stack type of the deployed resources |
| | type: \$\{string\} |
| tenant_name | default: kstorage |
| | description: Tenant name for the deployed resources |
| | type: \$\{string\} |
| vhub_address_prefix | default: 10.69.252.0/23 |
| | description: Vhub address prefix |
| | type: \$\{string\} |
:connectivity variable properties

## connectivity Resources

### connectivity azapi resource managed-app

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azapi_resource |
| body | \{"identity":\{"type":"UserAssigned","userAssignedId entities":\{"\$\{(azurerm_user_assigned_identity.mana ged_app_identity.id)\}":\{\}\}\},"kind":"MarketPlace"," plan":\{"name":"vwan-app","product":"cp-vwan-manage d-app","publisher":"checkpoint","version":"1.0.22" \},"properties":\{"managedResourceGroupId":"/subscri ptions/\$\{var.connectivity_subscription_id\}/resourc egroups/\$\{azurerm_resource_group.workloads.name\}", "parameters":\{"BGP":\{"value":"\$\{var.bgp-asn\}"\},"Li censeType":\{"value":"\$\{var.license-type\}"\},"NVA":\{ "value":"\$\{azurecaf_name.nva.result\}"\},"adminShell ":\{"value":"\$\{var.admin-shell\}"\},"bootstrapScript" :\{"value":"\$\{var.bootstrap-script\}"\},"createNewIPI ngress":\{"value":"\$\{var.new-public-ip\}"\},"customMe trics":\{"value":"\$\{var.custom-metrics\}"\},"hubASN": \{"value":"\$\{data.azurerm_virtual_hub.vwan-hub.virt ual_router_asn\}"\},"hubId":\{"value":"\$\{data.azurerm _virtual_hub.vhub.id\}"\},"hubPeers":\{"value":"\$\{dat a.azurerm_virtual_hub.vwan-hub.virtual_router_ips\} "\},"imageVersion":\{"value":"\$\{element(local.image_ versions, length(local.image_versions) -1)\}"\},"ipI ngressExistingResourceId":\{"value":"\$\{var.existing -public-ip\}"\},"location":\{"value":"\$\{azurerm_resou rce_group.workloads.location\}"\},"osVersion":\{"valu e":"\$\{var.os-version\}"\},"publicIPIngress":\{"value" :"\$\{(var.new-public-ip == \"yes\" || length(var.ex isting-public-ip) > 0) ? \"yes\" : \"no\"\}"\},"scal eUnit":\{"value":"\$\{var.scale-unit\}"\},"sicKey":\{"va lue":"\$\{var.sic-key\}"\},"smart1CloudTokenA":\{"value ":"\$\{var.smart1-cloud-token-a\}"\},"smart1CloudToken B":\{"value":"\$\{var.smart1-cloud-token-b\}"\},"smart1 CloudTokenC":\{"value":"\$\{var.smart1-cloud-token-c\} "\},"smart1CloudTokenD":\{"value":"\$\{var.smart1-clou d-token-d\}"\},"smart1CloudTokenE":\{"value":"\$\{var.s mart1-cloud-token-e\}"\},"sshPublicKey":\{"value":"\$\{ var.admin_SSH_key\}"\},"templateName":\{"value":"wan_ terraform_registry"\}\}\}\} |
| depends_on | \["\$\{azurerm_marketplace_agreement.accept-marketpla ce-terms\}","\$\{azurerm_resource_provider_registrati on.solutions\}"\] |
| location | West Europe |
| name | cp-checkpoint-westeu |
| parent_id | \$\{azurerm_resource_group.workloads.id\} |
| type | Microsoft.Solutions/applications@2019-07-01 |
:connectivity azapi resource managed-app properties



### connectivity marketplace agreement accept-marketplace-terms

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_marketplace_agreement |
| count | \$\{can(jsondecode(data.http.accept-marketplace-term s-existing-agreement.response_body).id) ? (jsondec ode(data.http.accept-marketplace-terms-existing-ag reement.response_body).properties.state == "Active " ? 0 : 1) : 1\} |
| offer | cp-vwan-managed-app |
| plan | vwan-app |
| publisher | checkpoint |
:connectivity marketplace agreement accept-marketplace-terms properties



### connectivity private dns resolver dns resolver

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_private_dns_resolver |
| location | West Europe |
| name | dnspr-klepierre-dns-resolver-westeu |
| resource_group_name | rg-connectivity-services-westeu |
| tags | \$\{module.tags.common_tags\} |
| virtual_network_id | \$\{azurerm_virtual_network.network.id\} |
:connectivity private dns resolver dns resolver properties



### connectivity private dns resolver dns forwarding ruleset klepierre dns forwarding ruleset

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_private_dns_resolver_dns_forwarding_ruleset |
| location | West Europe |
| name | dnsfwrs-klepierre-dns-forwarding-ruleset-westeu |
| private_dns_resolver_outbound_endpoint_ids | \["\$\{azurerm_private_dns_resolver_outbound_endpoint .dns_resolver_outbound_endpoint.id\}"\] |
| resource_group_name | rg-connectivity-services-westeu |
| tags | \$\{module.tags.common_tags\} |
:connectivity private dns resolver dns forwarding ruleset klepierre dns forwarding ruleset properties



### connectivity private dns resolver forwarding rule klepierre onprem dns forwarding rule

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_private_dns_resolver_forwarding_rule |
| dns_forwarding_ruleset_id | \$\{azurerm_private_dns_resolver_dns_forwarding_rule set.klepierre_dns_forwarding_ruleset.id\} |
| domain_name | klepierre.com |
| enabled | true |
| metadata | \$\{module.tags.common_tags\} |
| name | klepierre-onprem-dns-forwarding-rule |
| target_dns_servers | \[\{"ip_address":"10.10.0.1","port":53\},\{"ip_address ":"10.10.0.2","port":53\}\] |
:connectivity private dns resolver forwarding rule klepierre onprem dns forwarding rule properties



### connectivity private dns resolver outbound endpoint dns resolver outbound endpoint

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_private_dns_resolver_outbound_endpoint |
| location | \$\{azurerm_resource_group.services.location\} |
| name | dnsproe-klepierre-dns-resolver-outbound-endpoint-w esteu |
| private_dns_resolver_id | \$\{azurerm_private_dns_resolver.dns_resolver.id\} |
| subnet_id | \$\{azurerm_subnet.network_subnet.id\} |
| tags | \$\{module.tags.common_tags\} |
:connectivity private dns resolver outbound endpoint dns resolver outbound endpoint properties



### connectivity resource group network

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | West Europe |
| name | rg-connectivity-network-westeu |
| tags | \$\{module.tags.common_tags\} |
:connectivity resource group network properties

### connectivity resource group sdwan

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | West Europe |
| name | rg-connectivity-sdwan-westeu |
| tags | \$\{module.tags.common_tags\} |
:connectivity resource group sdwan properties

### connectivity resource group services

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | West Europe |
| name | rg-connectivity-services-westeu |
| tags | \$\{module.tags.common_tags\} |
:connectivity resource group services properties

### connectivity resource group workloads

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | West Europe |
| name | rg-connectivity-workloads-westeu |
| tags | \$\{module.tags.common_tags\} |
:connectivity resource group workloads properties



### connectivity resource provider registration solutions

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_provider_registration |
| count | \$\{jsondecode(data.http.azurerm_resource_provider_r egistration-exist.response_body).registrationState  == "Registered" ? 0 : 1\} |
| name | Microsoft.Solutions |
:connectivity resource provider registration solutions properties



### connectivity role assignment reader

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_role_assignment |
| depends_on | \["\$\{azurerm_user_assigned_identity.managed_app_ide ntity\}"\] |
| principal_id | \$\{azurerm_user_assigned_identity.managed_app_ident ity.principal_id\} |
| role_definition_name | Reader |
| scope | \$\{azurerm_virtual_hub.vhub.id\} |
:connectivity role assignment reader properties



### connectivity subnet dns subnet

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["10.69.254.64/27"\] |
| name | snet-dns-westeu |
| resource_group_name | rg-connectivity-network-westeu |
| virtual_network_name | vnet-dns-westeu |
:connectivity subnet dns subnet properties

### connectivity subnet netspoke subnet

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["10.69.254.32/27"\] |
| name | snet-netspoke-westeu |
| resource_group_name | rg-connectivity-network-westeu |
| virtual_network_name | vnet-netspoke-westeu |
:connectivity subnet netspoke subnet properties

### connectivity subnet sdwan subnet

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["10.69.254.0/27"\] |
| name | snet-sdwan-westeu |
| resource_group_name | rg-connectivity-network-westeu |
| virtual_network_name | vnet-sdwan-westeu |
:connectivity subnet sdwan subnet properties



### connectivity user assigned identity managed app identity

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_user_assigned_identity |
| location | West Europe |
| name | msi-connectivity-westeu |
| resource_group_name | rg-connectivity-workloads-westeu |
:connectivity user assigned identity managed app identity properties



### connectivity virtual hub vhub

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_virtual_hub |
| address_prefix | 10.69.252.0/23 |
| location | West Europe |
| name | vhub-klepierre-westeu |
| resource_group_name | rg-connectivity-workloads-westeu |
| tags | \$\{module.tags.common_tags\} |
| virtual_wan_id | \$\{azurerm_virtual_wan.vwan.id\} |
:connectivity virtual hub vhub properties



### connectivity virtual hub connection vhub to netspoke vnet

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_virtual_hub_connection |
| name | vhcon-netspoke-westeu |
| remote_virtual_network_id | \$\{azurerm_virtual_network.network.id\} |
| virtual_hub_id | \$\{azurerm_virtual_hub.vhub.id\} |
:connectivity virtual hub connection vhub to netspoke vnet properties

### connectivity virtual hub connection vhub to network vnet

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_virtual_hub_connection |
| name | vhcon-network-westeu |
| remote_virtual_network_id | \$\{azurerm_virtual_network.network.id\} |
| virtual_hub_id | \$\{azurerm_virtual_hub.vhub.id\} |
:connectivity virtual hub connection vhub to network vnet properties

### connectivity virtual hub connection vhub to sdwan vnet

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_virtual_hub_connection |
| name | vhcon-sdwan-westeu |
| remote_virtual_network_id | \$\{azurerm_virtual_network.network.id\} |
| virtual_hub_id | \$\{azurerm_virtual_hub.vhub.id\} |
:connectivity virtual hub connection vhub to sdwan vnet properties



### connectivity virtual hub routing intent routing intent

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_virtual_hub_routing_intent |
| name | default-westeu |
| routing_policy | \[\{"destinations":\["Internet"\],"name":"InternetTraf ficPolicy","next_hop":"/subscriptions/\$\{var.connec tivity_subscription_id\}/resourcegroups/\$\{azurerm_r esource_group.workloads.name\}/providers/Microsoft. Network/networkVirtualAppliances/\$\{azurecaf_name.n va.result\}"\},\{"destinations":\["PrivateTraffic"\],"n ame":"PrivateTrafficPolicy","next_hop":"/subscript ions/\$\{var.connectivity_subscription_id\}/resourceg roups/\$\{azurerm_resource_group.workloads.name\}/pro viders/Microsoft.Network/networkVirtualAppliances/ \$\{azurecaf_name.nva.result\}"\}\] |
| virtual_hub_id | \$\{azurerm_virtual_hub.vhub.id\} |
:connectivity virtual hub routing intent routing intent properties



### connectivity virtual network dns

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_virtual_network |
| address_space | \["10.69.254.64/27"\] |
| location | West Europe |
| name | vnet-dns-westeu |
| resource_group_name | rg-connectivity-network-westeu |
| tags | \$\{module.tags.common_tags\} |
:connectivity virtual network dns properties

### connectivity virtual network netspoke

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_virtual_network |
| address_space | \["10.69.254.32/27"\] |
| location | West Europe |
| name | vnet-netspoke-westeu |
| resource_group_name | rg-connectivity-workloads-westeu |
| tags | \$\{module.tags.common_tags\} |
:connectivity virtual network netspoke properties

### connectivity virtual network sdwan

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_virtual_network |
| address_space | \["10.69.254.0/27"\] |
| location | West Europe |
| name | vnet-sdwan-westeu |
| resource_group_name | rg-connectivity-network-westeu |
| tags | \$\{module.tags.common_tags\} |
:connectivity virtual network sdwan properties



### connectivity virtual wan vwan

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_virtual_wan |
| location | West Europe |
| name | vwan-klepierre-westeu |
| resource_group_name | rg-connectivity-workloads-westeu |
| tags | \$\{module.tags.common_tags\} |
:connectivity virtual wan vwan properties



## connectivity Modules

### connectivity module tags

| Properties | Values |
|:-------------------------|:--------------------------------------------------------------------|
| accountable | n/a |
| app | connectivity |
| confidentiality | c1 |
| csu | n/a |
| customer | klepierre |
| env | default |
| gen | automatic |
| maintainer | n/a |
| managed_level | full-managed |
| mcr_contract_id | n/a |
| monitored | false |
| offer | n/a |
| owner | n/a |
| personal_data | g0 |
| project | klepierre connectivity |
| region | West Europe |
| reseller | orange business |
| semver | n/a |
| sla | standard |
| source | ../../../modules/shared/tags |
| stack | n/a |
| tenant_name | kstorage |
:connectivity module tags properties

