# Stack governance resources

## governance Variables


| Name | Properties |
|:--------------------------------------|:--------------------------------------------------------------------|
| accountable | default: n/a |
| | description: Accountable for the deployed resources |
| | type: \$\{string\} |
| allowed_regions | default: North Europe,West Europe |
| | description: List of allowed regions |
| | type: \$\{list(string)\} |
| app | default: governance |
| | description: Application for which the resources where deployed |
| | type: \$\{string\} |
| azure_tenant_id | description: Azure tenant ID |
| | sensitive:  |
| | type: \$\{string\} |
| company | default: klepierre |
| | description: Company name |
| | type: \$\{string\} |
| confidentiality | default: c1 |
| | description: Confidentiality level of the deployed resources |
| | type: \$\{string\} |
| connectivity_client_id | description: Connectivity client ID |
| | sensitive:  |
| | type: \$\{string\} |
| connectivity_subscription_id | description: Connectivity subscription ID |
| | type: \$\{string\} |
| csu | default: n/a |
| | description: Csu value for the deployed resources |
| | type: \$\{string\} |
| customer | default: Klepierre DSI |
| | description: Customer using the deployed resources |
| | type: \$\{string\} |
| devops_client_certificate_path | description: Devops client certificate |
| | sensitive:  |
| | type: \$\{string\} |
| devops_client_id | description: Devops client ID |
| | type: \$\{string\} |
| devops_subscription_id | description: Devops subscription ID |
| | type: \$\{string\} |
| env | default: default |
| | description: Environment of the deployed resources |
| | type: \$\{string\} |
| gen | default: automatic |
| | description: Generation type of the deployed resources |
| | type: \$\{string\} |
| governance_client_certificate_path | description: governance client certificate |
| | sensitive:  |
| | type: \$\{string\} |
| governance_client_id | description: Governance client ID |
| | sensitive:  |
| | type: \$\{string\} |
| identity_client_id | description: Identity client ID |
| | sensitive:  |
| | type: \$\{string\} |
| identity_subscription_id | description: Identity subscription ID |
| | type: \$\{string\} |
| lz_app_client_id | description: Lz application client ID |
| | sensitive:  |
| | type: \$\{string\} |
| lz_app_subscription_id | description: Lz application subscription ID |
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
| project | default: klepierre-governance |
| | description: Project supporting the deployed resources |
| | type: \$\{string\} |
| region | default: westeurope |
| | description: Region |
| | type: \$\{string\} |
| region_abbreviation | default: weu |
| | description: Region abbreviation |
| | type: \$\{string\} |
| reseller | default: orange business |
| | description: Reseller of the deployed resources |
| | type: \$\{string\} |
| resource_group_name_launchpad | description: Resource group name for the launchpad |
| | type: \$\{string\} |
| root_parent_management_group_id | description: Root management group ID |
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
| storage_account_name_launchpad | description: Storage account name for the launchpad |
| | type: \$\{string\} |
| tenant_name | default: kstorage |
| | description: Tenant name for the deployed resources |
| | type: \$\{string\} |
:governance variable properties

## governance Resources

### governance management group mg company

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-\$\{var.company\} |
| name | mg-\$\{var.company\} |
| parent_management_group_id | n/a |
:governance management group mg company properties

### governance management group mg connectivity

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-connectivity |
| name | mg-connectivity |
| parent_management_group_id | \$\{azurerm_management_group.mg_platform.id\} |
| subscription_ids | \["\$\{var.connectivity_subscription_id\}"\] |
:governance management group mg connectivity properties

### governance management group mg decommissioned

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-decommissioned |
| name | mg-decommissioned |
| parent_management_group_id | \$\{azurerm_management_group.mg_company.id\} |
:governance management group mg decommissioned properties

### governance management group mg dev

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-dev |
| name | mg-dev |
| parent_management_group_id | \$\{azurerm_management_group.mg_landing_zones.id\} |
:governance management group mg dev properties

### governance management group mg devops

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-devops |
| name | mg-devops |
| parent_management_group_id | \$\{azurerm_management_group.mg_company.id\} |
| subscription_ids | \["\$\{var.devops_subscription_id\}"\] |
:governance management group mg devops properties

### governance management group mg exploitation dev

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-exploitation-dev |
| name | mg-exploitation-dev |
| parent_management_group_id | \$\{azurerm_management_group.mg_prod.id\} |
:governance management group mg exploitation dev properties

### governance management group mg exploitation prod

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-exploitation-prod |
| name | mg-exploitation-prod |
| parent_management_group_id | \$\{azurerm_management_group.mg_prod.id\} |
:governance management group mg exploitation prod properties

### governance management group mg finance prod

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-finance-prod |
| name | mg-finance-prod |
| parent_management_group_id | \$\{azurerm_management_group.mg_prod.id\} |
:governance management group mg finance prod properties

### governance management group mg identity

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-identity |
| name | mg-identity |
| parent_management_group_id | \$\{azurerm_management_group.mg_platform.id\} |
| subscription_ids | \["\$\{var.identity_subscription_id\}"\] |
:governance management group mg identity properties

### governance management group mg landing zones

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-landing-zones |
| name | mg-landing-zones |
| parent_management_group_id | \$\{azurerm_management_group.mg_company.id\} |
:governance management group mg landing zones properties

### governance management group mg legacy

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-legacy |
| name | mg-legacy |
| parent_management_group_id | \$\{azurerm_management_group.mg_company.id\} |
:governance management group mg legacy properties

### governance management group mg management

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-management |
| name | mg-management |
| parent_management_group_id | \$\{azurerm_management_group.mg_platform.id\} |
| subscription_ids | \["\$\{var.management_subscription_id\}"\] |
:governance management group mg management properties

### governance management group mg platform

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-platform |
| name | mg-platform |
| parent_management_group_id | \$\{azurerm_management_group.mg_company.id\} |
:governance management group mg platform properties

### governance management group mg prod

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-prod |
| name | mg-prod |
| parent_management_group_id | \$\{azurerm_management_group.mg_landing_zones.id\} |
:governance management group mg prod properties

### governance management group mg sandbox

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-sandbox |
| name | mg-sandbox |
| parent_management_group_id | \$\{azurerm_management_group.mg_company.id\} |
:governance management group mg sandbox properties

### governance management group mg showup dev

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-showup-dev |
| name | mg-showup-dev |
| parent_management_group_id | \$\{azurerm_management_group.mg_exploitation_dev.id\} |
:governance management group mg showup dev properties

### governance management group mg showup prod

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_management_group |
| display_name | mg-showup-prod |
| name | mg-showup-prod |
| parent_management_group_id | \$\{azurerm_management_group.mg_exploitation_prod.id \} |
:governance management group mg showup prod properties



### governance role assignment service principals

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_role_assignment |
| depends_on | \["\$\{azurerm_role_definition.devops_user_role_defin ition\}","\$\{azurerm_management_group.mg_devops\}"\] |
| for_each | \$\{\{ for ra in local.rights_assignments : "\$\{ra.rig hts_key\}.\$\{ra.rights_list_key\}" => ra \}\} |
| principal_id | \$\{each.value.principal_id\} |
| role_definition_id | \$\{each.value.role_definition_resource_id\} |
| scope | \$\{each.value.scope\} |
:governance role assignment service principals properties



### governance role definition devops user role definition

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_role_definition |
| description | Devops Users Role |
| name | Devops Users Role |
| permissions | \[\{"actions":\["Microsoft.Storage/storageAccounts/li stkeys/action"\],"not_actions":\[\]\}\] |
| scope | /subscriptions/\$\{var.devops_subscription_id\}/resou rcegroups/\$\{var.resource_group_name_launchpad\}/pro viders/Microsoft.Storage/storageAccounts/\$\{var.sto rage_account_name_launchpad\} |
:governance role definition devops user role definition properties



## governance Modules

### governance module allowed regions policy

| Properties | Values |
|:-------------------------|:--------------------------------------------------------------------|
| policies | \[\{"assignment_type":"management_group","location": "\$\{var.region\}","management_group_id":"\$\{azurerm_m anagement_group.mg_company.id\}","policy_assignment _name":"allowed-regions","policy_assignment_parame ters":\{"listOfAllowedLocations":\{"value":"\$\{var.al lowed_regions\}"\}\},"policy_display_name":"Allowed r egions","policy_name":"e56962a6-4747-49cd-b67b-bf8 b01975c4c"\}\] |
| source | ../../../modules/azure/policies/generics |
:governance module allowed regions policy properties

### governance module compute policies

| Properties | Values |
|:-------------------------|:--------------------------------------------------------------------|
| policies | \[\{"assignment_type":"management_group","location": "\$\{var.region\}","management_group_id":"\$\{azurerm_m anagement_group.mg_company.id\}","policy_assignment _name":"linux-ama-installed","policy_assignment_pa rameters":\{"Effect":\{"value":"AuditIfNotExists"\}\}, "policy_display_name":"Linux virtual machines shou ld have Azure Monitor Agent installed","policy_nam e":"1afdc4b6-581a-45fb-b630-f1e6051e3e7a"\},\{"assig nment_type":"management_group","location":"\$\{var.r egion\}","management_group_id":"\$\{azurerm_managemen t_group.mg_company.id\}","policy_assignment_name":" linux-vmss-ama","policy_assignment_parameters":\{"E ffect":\{"value":"AuditIfNotExists"\}\},"policy_displ ay_name":"Linux virtual machine scale sets should  have Azure Monitor Agent installed","policy_name": "32ade945-311e-4249-b8a4-a549924234d7"\},\{"assignme nt_type":"management_group","location":"\$\{var.regi on\}","management_group_id":"\$\{azurerm_management_g roup.mg_company.id\}","policy_assignment_name":"win -ama-installed","policy_assignment_parameters":\{"E ffect":\{"value":"AuditIfNotExists"\}\},"policy_displ ay_name":"Windows virtual machines should have Azu re Monitor Agent installed","policy_name":"c02729e 5-e5e7-4458-97fa-2b5ad0661f28"\},\{"assignment_type" :"management_group","location":"\$\{var.region\}","ma nagement_group_id":"\$\{azurerm_management_group.mg_ company.id\}","policy_assignment_name":"win-vmss-am a","policy_assignment_parameters":\{"Effect":\{"valu e":"AuditIfNotExists"\}\},"policy_display_name":"Win dows virtual machine scale sets should have Azure  Monitor Agent installed","policy_name":"3672e6f7-a 74d-4763-b138-fcf332042f8f"\}\] |
| policy_sets | \[\] |
| source | ../../../modules/azure/policies/generics |
:governance module compute policies properties

### governance module data protection policies

| Properties | Values |
|:-------------------------|:--------------------------------------------------------------------|
| policies | \[\{"assignment_type":"management_group","location": "\$\{var.region\}","management_group_id":"\$\{azurerm_m anagement_group.mg_company.id\}","policy_assignment _name":"kv-purge-protection","policy_display_name" :"Key vaults should have purge protection enabled" ,"policy_name":"0b60c0b2-2dc2-4e1c-b5c9-abbed971de 53"\},\{"assignment_type":"management_group","locati on":"\$\{var.region\}","management_group_id":"\$\{azure rm_management_group.mg_company.id\}","policy_assign ment_name":"kv-soft-delete","policy_display_name": "Key vaults should have soft delete enabled","poli cy_name":"1e66c121-a66a-4b1f-9b83-0fd99bf0fc2d"\},\{ "assignment_type":"management_group","location":"\$ \{var.region\}","management_group_id":"\$\{azurerm_man agement_group.mg_company.id\}","policy_assignment_n ame":"kv-sec-exp","policy_assignment_parameters":\{ "effect":\{"value":"Audit"\}\},"policy_display_name": "Key Vault secrets should have an expiration date" ,"policy_name":"98728c90-32c7-4049-8429-847dc0f4fe 37"\}\] |
| source | ../../../modules/azure/policies/generics |
:governance module data protection policies properties

### governance module identity policies

| Properties | Values |
|:-------------------------|:--------------------------------------------------------------------|
| policies | \[\{"assignment_type":"management_group","location": "\$\{var.region\}","management_group_id":"\$\{azurerm_m anagement_group.mg_company.id\}","policy_assignment _name":"audit-custom-rbac","policy_display_name":" Audit usage of custom RBAC rules","policy_name":"a 451c1ef-c6ca-483d-87ed-f49761e3ffb5"\},\{"assignment _type":"management_group","location":"\$\{var.region \}","management_group_id":"\$\{azurerm_management_gro up.mg_company.id\}","policy_assignment_name":"custo m-owner-role","policy_display_name":"Custom subscr iption owner roles should not exist","policy_name" :"10ee2ea2-fb4d-45b8-a7e9-a2e770044cd9"\},\{"assignm ent_type":"management_group","location":"\$\{var.reg ion\}","management_group_id":"\$\{azurerm_management_ group.mg_company.id\}","policy_assignment_name":"de p-owner-role","policy_display_name":"Deprecated ac counts with owner permissions should be removed fr om your subscription","policy_name":"ebb62a0c-3560 -49e1-89ed-27e074e9f8ad"\},\{"assignment_type":"mana gement_group","location":"\$\{var.region\}","manageme nt_group_id":"\$\{azurerm_management_group.mg_compan y.id\}","policy_assignment_name":"mfa-enabled-write ","policy_display_name":"MFA should be enabled acc ounts with write permissions on your subscription" ,"policy_name":"9297c21d-2ed6-4474-b48f-163f75654c e3"\},\{"assignment_type":"management_group","locati on":"\$\{var.region\}","management_group_id":"\$\{azure rm_management_group.mg_company.id\}","policy_assign ment_name":"mfa-enabled-owner","policy_display_nam e":"MFA should be enabled on accounts with owner p ermissions on your subscription","policy_name":"aa 633080-8b72-40c4-a2d7-d00c03e80bed"\},\{"assignment_ type":"management_group","location":"\$\{var.region\} ","management_group_id":"\$\{azurerm_management_grou p.mg_company.id\}","policy_assignment_name":"mfa-en abled-read","policy_display_name":"MFA should be e nabled on accounts with read permissions on your s ubscription","policy_name":"e3576e28-8b17-4677-84c 3-db2990658d64"\},\{"assignment_type":"management_gr oup","location":"\$\{var.region\}","management_group_ id":"\$\{azurerm_management_group.mg_company.id\}","p olicy_assignment_name":"sup-1-owner-per-sub","poli cy_display_name":"There should be more than one ow ner assigned to your subscription","policy_name":" 09024ccc-0c5f-475e-9457-b7c0d9ed487b"\}\] |
| source | ../../../modules/azure/policies/generics |
:governance module identity policies properties

### governance module security policies

| Properties | Values |
|:-------------------------|:--------------------------------------------------------------------|
| policies | \[\{"assignment_type":"management_group","location": "\$\{var.region\}","management_group_id":"\$\{azurerm_m anagement_group.mg_company.id\}","policy_assignment _name":"internet-vm-nsg","policy_display_name":"In ternet-facing virtual machines should be protected  with network security groups","policy_name":"f6de 0be7-9a8a-4b8a-b349-43cf02d22f7c"\},\{"assignment_ty pe":"management_group","location":"\$\{var.region\}", "management_group_id":"\$\{azurerm_management_group. mg_company.id\}","policy_assignment_name":"gtw-snet -no-nsg","policy_display_name":"Gateway subnets sh ould not be configured with a network security gro up","policy_name":"35f9c03a-cc27-418e-9c0c-539ff99 9d010"\},\{"assignment_type":"management_group","loc ation":"\$\{var.region\}","management_group_id":"\$\{az urerm_management_group.mg_company.id\}","policy_ass ignment_name":"snet-nsg-assoc","policy_display_nam e":"Subnets should be associated with a Network Se curity Group","policy_name":"e71308d3-144b-4262-b1 44-efdc3cc90517"\},\{"assignment_type":"management_g roup","location":"\$\{var.region\}","management_group _id":"\$\{azurerm_management_group.mg_company.id\}"," policy_assignment_name":"sa-net-restrict","policy_ display_name":"Storage accounts should restrict ne twork access","policy_name":"34c877ad-507e-4c82-99 3e-3452a6e0ad3c"\},\{"assignment_type":"management_g roup","location":"\$\{var.region\}","management_group _id":"\$\{azurerm_management_group.mg_company.id\}"," policy_assignment_name":"sa-sec-transfer","policy_ display_name":"Secure transfer to storage accounts  should be enabled","policy_name":"404c3081-a854-4 457-ae30-26a93ef643f9"\},\{"assignment_type":"manage ment_group","location":"\$\{var.region\}","management _group_id":"\$\{azurerm_management_group.mg_company. id\}","policy_assignment_name":"sa-allow-msft-svc", "policy_display_name":"Storage accounts should all ow access from trusted Microsoft services","policy _name":"c9d007d0-c057-4772-b18c-01e546713bcd"\},\{"a ssignment_type":"management_group","location":"\$\{v ar.region\}","management_group_id":"\$\{azurerm_manag ement_group.mg_company.id\}","policy_assignment_nam e":"aa-vars-encrypt","policy_display_name":"Automa tion account variables should be encrypted","polic y_name":"3657f5a0-770e-44a3-b44e-9431ba1e9735"\},\{" assignment_type":"management_group","location":"\$\{ var.region\}","management_group_id":"\$\{azurerm_mana gement_group.mg_company.id\}","policy_assignment_na me":"sub-log-profile","policy_display_name":"Azure  subscriptions should have a log profile for Activ ity Log","policy_name":"7796937f-307b-4598-941c-67 d3a05ebfe7"\},\{"assignment_type":"management_group" ,"location":"\$\{var.region\}","management_group_id": "\$\{azurerm_management_group.mg_company.id\}","polic y_assignment_name":"email-not-high-sev","policy_di splay_name":"Email notification to subscription ow ner for high severity alerts should be enabled","p olicy_name":"0b15565f-aa9e-48ba-8619-45960f2c314d" \},\{"assignment_type":"management_group","location" :"\$\{var.region\}","management_group_id":"\$\{azurerm_ management_group.mg_company.id\}","policy_assignmen t_name":"sub-contact-email","policy_display_name": "Subscriptions should have a contact email address  for security issues","policy_name":"4f4f78b8-e367 -4b10-a341-d9a4ad5cf1c7"\}\] |
| source | ../../../modules/azure/policies/generics |
:governance module security policies properties

### governance module tag policies

| Properties | Values |
|:-------------------------|:--------------------------------------------------------------------|
| location | westeurope |
| management_group_id | \$\{azurerm_management_group.mg_company.id\} |
| mandatory_tags | \$\{module.tags_agnostic.mandatory_tags\} |
| source | ../../../modules/azure/policies/tags |
:governance module tag policies properties

### governance module tags agnostic

| Properties | Values |
|:-------------------------|:--------------------------------------------------------------------|
| accountable | n/a |
| app | n/a |
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
| project | klepierre-governance |
| region | global |
| reseller | orange business |
| semver | n/a |
| sla | standard |
| source | ../../../modules/shared/tags |
| stack | n/a |
| tenant_name | kstorage |
:governance module tags agnostic properties

