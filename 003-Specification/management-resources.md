# Stack management resources

## management Variables


| Name | Properties |
|:--------------------------------------|:--------------------------------------------------------------------|
| accountable | default: n/a |
| | description: Accountable for the deployed resources |
| | type: \$\{string\} |
| amount_connect | default: 1000 |
| | description: Budget value associated with a budget alert for co,nnectivity subscription |
| | type: \$\{number\} |
| amount_devops | default: 1000 |
| | description: Budget value associated with a budget alert for de,vops subscription |
| | type: \$\{number\} |
| amount_identity | default: 1000 |
| | description: Budget value associated with a budget alert for id,entity subscription |
| | type: \$\{number\} |
| amount_mgt | default: 1000 |
| | description: Budget value associated with a budget alert for ma,nagement subscription |
| | type: \$\{number\} |
| amount_showup_dev | default: 1000 |
| | description: Budget value associated with a budget alert for sh,owup dev subscription |
| | type: \$\{number\} |
| amount_showup_prod | default: 1000 |
| | description: Budget value associated with a budget alert for sh,owup prod subscription |
| | type: \$\{number\} |
| app | default: management |
| | description: Application for which the resources where deployed |
| | type: \$\{string\} |
| azure_tenant_id | description: Azure tenant ID |
| | sensitive:  |
| | type: \$\{string\} |
| budget_contact_emails | default: practice.azure@orange.com,devops@orange.com |
| | description: Mailing list of contacts for budget alerts |
| | type: \$\{list(string)\} |
| company | default: orange business |
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
| customer | default: Klepierre DSI |
| | description: Customer using the deployed resources |
| | type: \$\{string\} |
| deploy_security_center | default: false |
| | description: Enable the deployement of the security center aspe,ct |
| | type: \$\{bool\} |
| devops_client_certificate_path | default: ../../certs/devops-cert.pfx |
| | description: Devops client certificate path |
| | type: \$\{string\} |
| devops_client_id | description: Devops client ID |
| | sensitive:  |
| | type: \$\{string\} |
| devops_subscription_id | description: Devops subscription ID |
| | type: \$\{string\} |
| enable_security_center_auto_provisioning | default: On |
| | description: Enables or disables the Security Center Auto Provi,sioning feature for the subscription |
| | type: \$\{string\} |
| | validation: \[object Object\] |
| env | default: default |
| | description: Environment of the deployed resources |
| | type: \$\{string\} |
| gen | default: automatic |
| | description: Generation type of the deployed resources |
| | type: \$\{string\} |
| identity_client_certificate_path | default: ../../certs/identity-cert.pfx |
| | description: Identity client certificate path |
| | type: \$\{string\} |
| identity_client_id | description: Identity client ID |
| | sensitive:  |
| | type: \$\{string\} |
| identity_subscription_id | description: Identity subscription ID |
| | type: \$\{string\} |
| law_retention | default: 90 |
| | description: Log Analytics Workspace retention in days |
| | type: \$\{number\} |
| law_sku | default: PerGB2018 |
| | description: Log Analytics Workspace SKU |
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
| project | default: klepierre-managment |
| | description: Project supporting the deployed resources |
| | type: \$\{string\} |
| region | default: North Europe |
| | description: Region for all resources |
| | type: \$\{string\} |
| region_abbreviation | default: ne |
| | description: Region abbreviation for all resources |
| | type: \$\{string\} |
| reseller | default: orange business |
| | description: Reseller of the deployed resources |
| | type: \$\{string\} |
| resource_type | default: AppServices,ContainerRegistry,KeyVaults,KubernetesService,SqlServers,SqlServerVirtualMachines,StorageAccounts,VirtualMachines,Arm,Dns |
| | description: Resource type this setting affects |
| | type: \$\{list(string)\} |
| security_center_setting_enabled | default: true |
| | description: Security setting enabled |
| | type: \$\{bool\} |
| security_center_setting_name | default: MCAS |
| | description: Security Setting name ex. MCAS |
| | type: \$\{string\} |
| | validation: \[object Object\] |
| security_center_subscription_pricing | default: Standard |
| | description: Pricing tier to use |
| | type: \$\{string\} |
| security_contats_alert_admins | default: true |
| | description: Activate Alerts notifications for admins |
| | type: \$\{bool\} |
| security_contats_alert_notifications | default: true |
| | description: Activate alerts notifications |
| | type: \$\{bool\} |
| security_contats_email | description: Security contact email address |
| | type: \$\{string\} |
| security_contats_phone | description: Security contact phone number |
| | type: \$\{string\} |
| semver | default: n/a |
| | description: Semantic version of the deployed resources |
| | type: \$\{string\} |
| showup_dev_client_certificate_path | default: ../../certs/showup-dev-cert.pfx |
| | description: showup-dev client certificate path |
| | type: \$\{string\} |
| showup_dev_client_id | description: showup-dev client ID |
| | sensitive:  |
| | type: \$\{string\} |
| showup_dev_subscription_id | description: showup-prod subscription ID |
| | type: \$\{string\} |
| showup_prod_client_certificate_path | default: ../../certs/showup-prod-cert.pfx |
| | description: showup-prod client certificate path |
| | type: \$\{string\} |
| showup_prod_client_id | description: showup-prod client ID |
| | sensitive:  |
| | type: \$\{string\} |
| showup_prod_subscription_id | description: showup-prod subscription ID |
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
| threshold | default: 80 |
| | description: Threshold value associated with a notification |
| | type: \$\{number\} |
:management variable properties

## management Resources

### management application insights shared

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_application_insights |
| application_type | web |
| location | North Europe |
| name | appi-shared-ne |
| resource_group_name | rg-mgmt-shared-ne |
| retention_in_days | 90 |
| tags | \$\{module.tags.common_tags\} |
| workspace_id | \$\{azurerm_log_analytics_workspace.law_showup_dev.i d\} |
:management application insights shared properties

### management application insights showup dev

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_application_insights |
| application_type | web |
| location | North Europe |
| name | appi-showup-dev-ne |
| resource_group_name | rg-mgmt-showup-dev-ne |
| retention_in_days | 90 |
| tags | \$\{module.tags.common_tags\} |
| workspace_id | \$\{azurerm_log_analytics_workspace.law_showup_dev.i d\} |
:management application insights showup dev properties

### management application insights showup prod

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_application_insights |
| application_type | web |
| location | North Europe |
| name | appi-showup-prod-ne |
| resource_group_name | rg-mgmt-showup-prod-ne |
| retention_in_days | 90 |
| tags | \$\{module.tags.common_tags\} |
| workspace_id | \$\{azurerm_log_analytics_workspace.law_showup_prod. id\} |
:management application insights showup prod properties



### management consumption budget subscription connectivity budget

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_consumption_budget_subscription |
| amount | 1000 |
| lifecycle | \[\{"ignore_changes":\["\$\{time_period\}"\]\}\] |
| name | acbs-connectivity-ne |
| notification | \[\{"contact_emails":"\$\{var.budget_contact_emails\}", "contact_groups":\["\$\{azurerm_monitor_action_group. monitorgroup.id\}"\],"enabled":true,"operator":"Equa lTo","threshold":"\$\{var.threshold\}"\}\] |
| subscription_id | /subscriptions/\$\{var.connectivity_subscription_id\} |
| time_grain | Monthly |
| time_period | \[\{"start_date":"\$\{local.start_date\}"\}\] |
:management consumption budget subscription connectivity budget properties

### management consumption budget subscription devops budget

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_consumption_budget_subscription |
| amount | 1000 |
| lifecycle | \[\{"ignore_changes":\["\$\{time_period\}"\]\}\] |
| name | acbs-devops-ne |
| notification | \[\{"contact_emails":"\$\{var.budget_contact_emails\}", "contact_groups":\["\$\{azurerm_monitor_action_group. monitorgroup.id\}"\],"enabled":true,"operator":"Equa lTo","threshold":"\$\{var.threshold\}"\}\] |
| subscription_id | /subscriptions/\$\{var.devops_subscription_id\} |
| time_grain | Monthly |
| time_period | \[\{"start_date":"\$\{local.start_date\}"\}\] |
:management consumption budget subscription devops budget properties

### management consumption budget subscription identity budget

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_consumption_budget_subscription |
| amount | 1000 |
| lifecycle | \[\{"ignore_changes":\["\$\{time_period\}"\]\}\] |
| name | acbs-identity-ne |
| notification | \[\{"contact_emails":"\$\{var.budget_contact_emails\}", "contact_groups":\["\$\{azurerm_monitor_action_group. monitorgroup.id\}"\],"enabled":true,"operator":"Equa lTo","threshold":"\$\{var.threshold\}"\}\] |
| subscription_id | /subscriptions/\$\{var.identity_subscription_id\} |
| time_grain | Monthly |
| time_period | \[\{"start_date":"\$\{local.start_date\}"\}\] |
:management consumption budget subscription identity budget properties

### management consumption budget subscription management budget

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_consumption_budget_subscription |
| amount | 1000 |
| lifecycle | \[\{"ignore_changes":\["\$\{time_period\}"\]\}\] |
| name | acbs-mgmt-ne |
| notification | \[\{"contact_emails":"\$\{var.budget_contact_emails\}", "contact_groups":\["\$\{azurerm_monitor_action_group. monitorgroup.id\}"\],"enabled":true,"operator":"Equa lTo","threshold":"\$\{var.threshold\}"\}\] |
| subscription_id | /subscriptions/\$\{var.management_subscription_id\} |
| time_grain | Monthly |
| time_period | \[\{"start_date":"\$\{local.start_date\}"\}\] |
:management consumption budget subscription management budget properties

### management consumption budget subscription showup dev budget

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_consumption_budget_subscription |
| amount | 1000 |
| lifecycle | \[\{"ignore_changes":\["\$\{time_period\}"\]\}\] |
| name | acbs-showup-dev-ne |
| notification | \[\{"contact_emails":"\$\{var.budget_contact_emails\}", "contact_groups":\["\$\{azurerm_monitor_action_group. monitorgroup.id\}"\],"enabled":true,"operator":"Equa lTo","threshold":"\$\{var.threshold\}"\}\] |
| subscription_id | /subscriptions/\$\{var.showup_dev_subscription_id\} |
| time_grain | Monthly |
| time_period | \[\{"start_date":"\$\{local.start_date\}"\}\] |
:management consumption budget subscription showup dev budget properties

### management consumption budget subscription showup prod budget

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_consumption_budget_subscription |
| amount | 1000 |
| lifecycle | \[\{"ignore_changes":\["\$\{time_period\}"\]\}\] |
| name | acbs-showup-prod-ne |
| notification | \[\{"contact_emails":"\$\{var.budget_contact_emails\}", "contact_groups":\["\$\{azurerm_monitor_action_group. monitorgroup.id\}"\],"enabled":true,"operator":"Equa lTo","threshold":"\$\{var.threshold\}"\}\] |
| subscription_id | /subscriptions/\$\{var.showup_prod_subscription_id\} |
| time_grain | Monthly |
| time_period | \[\{"start_date":"\$\{local.start_date\}"\}\] |
:management consumption budget subscription showup prod budget properties



### management linux function app monitoring-teams

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_linux_function_app |
| app_settings | \{"APPINSIGHTS_INSTRUMENTATIONKEY":"\$\{azurerm_appli cation_insights.shared.instrumentation_key\}","AZUR E_MANAGED_IDENTITY_CLIENT_ID":"\$\{azurerm_user_assi gned_identity.monitoring_function_app_identity.cli ent_id\}","FUNCTIONS_WORKER_RUNTIME":"node","NODE_E NV":"production","TENANT_ENVIRONMENT_SUB_CONNECTIV ITY":"kstorage.onmicrosoft.com,https://kstorage.we bhook.office.com/webhookb2/388e641e-06f7-4f9e-b0d0 -3ed1e344ae83@7c98f49f-ac31-43eb-888a-72a17520cdda /IncomingWebhook/a4e60177a09040db862863a8f80ea880/ 1ded9754-8025-48c9-8d8a-5e658bc47a48,b0f6135c-2741 -4cfa-9cf3-f1dd2d657ad8,Mkp Int 1,https://prod-39. westeurope.logic.azure.com:443/workflows/c6cb7844f 1824500ab9fc905a57a631a/triggers/manual/paths/invo ke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual% 2Frun&sv=1.0&sig=eR1iXlJ9ap2YI_Zh66dByog6WwyJY5tUc Z983WCpotk","TENANT_ENVIRONMENT_SUB_DEVOPS":"kstor age.onmicrosoft.com,https://kstorage.webhook.offic e.com/webhookb2/388e641e-06f7-4f9e-b0d0-3ed1e344ae 83@7c98f49f-ac31-43eb-888a-72a17520cdda/IncomingWe bhook/a8dac1071d7f4d2d825b7090e8a2288e/1ded9754-80 25-48c9-8d8a-5e658bc47a48,e2063f5a-7406-4aeb-87af- d291fa0055fb,Mkp Int 2,https://prod-39.westeurope. logic.azure.com:443/workflows/c6cb7844f1824500ab9f c905a57a631a/triggers/manual/paths/invoke?api-vers ion=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1. 0&sig=eR1iXlJ9ap2YI_Zh66dByog6WwyJY5tUcZ983WCpotk" ,"TENANT_ENVIRONMENT_SUB_DISTCHATAON_HPR":"kstorag e.onmicrosoft.com,https://kstorage.webhook.office. com/webhookb2/388e641e-06f7-4f9e-b0d0-3ed1e344ae83 @7c98f49f-ac31-43eb-888a-72a17520cdda/IncomingWebh ook/b9f4c6b351fe47c19ef19fb5906d74da/b1ee62f9-e2b6 -4ed3-8fb9-75c2899518f9,7eb5a117-dee7-4cd6-a387-2c 61f334ef43,Distchataon HPR,https://prod-39.westeur ope.logic.azure.com:443/workflows/c6cb7844f1824500 ab9fc905a57a631a/triggers/manual/paths/invoke?api- version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&s v=1.0&sig=eR1iXlJ9ap2YI_Zh66dByog6WwyJY5tUcZ983WCp otk","TENANT_ENVIRONMENT_SUB_IDENTITY":"kstorage.o nmicrosoft.com,https://kstorage.webhook.office.com /webhookb2/388e641e-06f7-4f9e-b0d0-3ed1e344ae83@7c 98f49f-ac31-43eb-888a-72a17520cdda/IncomingWebhook /712fada41e9b4f6db962e17ccc723db4/1ded9754-8025-48 c9-8d8a-5e658bc47a48,788010a0-90cb-4ae3-bd31-297f1 de6ab46,Mkp Rec 2,https://prod-39.westeurope.logic .azure.com:443/workflows/c6cb7844f1824500ab9fc905a 57a631a/triggers/manual/paths/invoke?api-version=2 016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig =eR1iXlJ9ap2YI_Zh66dByog6WwyJY5tUcZ983WCpotk","TEN ANT_ENVIRONMENT_SUB_MANAGEMENT":"kstorage.onmicros oft.com,https://kstorage.webhook.office.com/webhoo kb2/388e641e-06f7-4f9e-b0d0-3ed1e344ae83@7c98f49f- ac31-43eb-888a-72a17520cdda/IncomingWebhook/3f4e11 b680584c78b6e087bfd77a1f77/1ded9754-8025-48c9-8d8a -5e658bc47a48,9d29d668-87f4-4c35-bfbf-9eb2b3bfb3ca ,Mkp Rec 1,https://prod-39.westeurope.logic.azure. com:443/workflows/c6cb7844f1824500ab9fc905a57a631a /triggers/manual/paths/invoke?api-version=2016-06- 01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=eR1iXl J9ap2YI_Zh66dByog6WwyJY5tUcZ983WCpotk","TENANT_ENV IRONMENT_SUB_SHOWUP_DEV":"kstorage.onmicrosoft.com ,https://kstorage.webhook.office.com/webhookb2/388 e641e-06f7-4f9e-b0d0-3ed1e344ae83@7c98f49f-ac31-43 eb-888a-72a17520cdda/IncomingWebhook/9ebbfb8257094 24e94760671a218a4e2/1ded9754-8025-48c9-8d8a-5e658b c47a48,d6613bed-fe68-48c2-94fc-7f348fbaf615,Distch ataon PPR,https://prod-23.westeurope.logic.azure.c om:443/workflows/fbf84495ec2e4bdb881b71c3319cba21/ triggers/manual/paths/invoke?api-version=2016-06-0 1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=SZUPvSs qgcBLx7mtHcx8gSTqcBgx1dfRIIi1hAO0Q88","TENANT_ENVI RONMENT_SUB_SHOWUP_PROD":"kstorage.onmicrosoft.com ,https://kstorage.webhook.office.com/webhookb2/388 e641e-06f7-4f9e-b0d0-3ed1e344ae83@7c98f49f-ac31-43 eb-888a-72a17520cdda/IncomingWebhook/9ebbfb8257094 24e94760671a218a4e2/1ded9754-8025-48c9-8d8a-5e658b c47a48,1f05dd2c-3de1-4b34-812a-47f323651b73,Mkp PP R,https://prod-23.westeurope.logic.azure.com:443/w orkflows/fbf84495ec2e4bdb881b71c3319cba21/triggers /manual/paths/invoke?api-version=2016-06-01&sp=%2F triggers%2Fmanual%2Frun&sv=1.0&sig=SZUPvSsqgcBLx7m tHcx8gSTqcBgx1dfRIIi1hAO0Q88","USE_SHORT_DESCRIPTI ON":"true","WEBSITE_RUN_FROM_PACKAGE":""\} |
| identity | \[\{"identity_ids":\["\$\{azurerm_user_assigned_identit y.monitoring_function_app_identity.id\}"\],"type":"U serAssigned"\}\] |
| lifecycle | \[\{"ignore_changes":\["\$\{site_config\[0\].application_ insights_key\}","\$\{app_settings\[\"WEBSITE_RUN_FROM_ PACKAGE\"\]\}"\]\}\] |
| location | North Europe |
| name | fa-mgmt-monitoring-teams-ne |
| resource_group_name | rg-mgmt-shared-ne |
| service_plan_id | \$\{azurerm_service_plan.monitoring_function_app_ser vice_plan.id\} |
| site_config | \[\{"always_on":false,"application_insights_connecti on_string":"\$\{azurerm_application_insights.managem ent_application_insight.connection_string\}","appli cation_stack":\[\{"node_version":"18"\}\],"cors":\[\{"al lowed_origins":\["https://www.portal.azure.com"\]\}\]\} \] |
| storage_account_access_key | \$\{azurerm_storage_account.monitoring_function_app_ storage_account.primary_access_key\} |
| storage_account_name | st-mgmtmonitoring-ne |
:management linux function app monitoring-teams properties



### management log analytics workspace law

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_log_analytics_workspace |
| location | North Europe |
| name | log-mgmt-shared-ne |
| resource_group_name | rg-mgmt-shared-ne |
| retention_in_days | 90 |
| sku | PerGB2018 |
| tags | \$\{module.tags.common_tags\} |
:management log analytics workspace law properties

### management log analytics workspace law showup dev

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_log_analytics_workspace |
| location | North Europe |
| name | log-mgmt-showup-dev-ne |
| resource_group_name | rg-mgmt-showup-dev-ne |
| retention_in_days | 90 |
| sku | PerGB2018 |
| tags | \$\{module.tags.common_tags\} |
:management log analytics workspace law showup dev properties

### management log analytics workspace law showup prod

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_log_analytics_workspace |
| location | North Europe |
| name | log-mgmt-showup-prod-ne |
| resource_group_name | rg-mgmt-showup-prod-ne |
| retention_in_days | 90 |
| sku | PerGB2018 |
| tags | \$\{module.tags.common_tags\} |
:management log analytics workspace law showup prod properties



### management monitor action group monitorgroup

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_monitor_action_group |
| name | amag-mgmt-ne |
| resource_group_name | \$\{azurerm_resource_group.rg.name\} |
| short_name | bgt-action |
:management monitor action group monitorgroup properties



### management portal dashboard cost dashboard

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_portal_dashboard |
| dashboard_properties | "  \{    \"lenses\": \{      \"0\": \{        \ "order\": 0,        \"parts\": \{          \$\{te mplatefile(\"./templates/cost-widget.tpl\", \{  o rder        = 0,  x            = 0,  y             = 0,  subscription = var.management_subscrip tion_id,  tenant_name  = var.tenant_name,  Dis playName  = \"Management Cost\",  amount       =  azurerm_consumption_budget_subscription.managemen t_budget.amount,  budgetName   = azurerm_consump tion_budget_subscription.management_budget.name,   time_grain   = azurerm_consumption_budget_subscr iption.management_budget.time_grain\})\},           \$\{templatefile(\"./templates/cost-widget.tpl\ ", \{  order        = 1,  x            = 7,   y            = 0,  subscription = var.connectivi ty_subscription_id,  tenant_name  = var.tenant_n ame,  DisplayName  = \"Connectivity Cost\",  a mount       = azurerm_consumption_budget_subscript ion.connectivity_budget.amount,  budgetName   =  azurerm_consumption_budget_subscription.connectivi ty_budget.name,  time_grain   = azurerm_consumpt ion_budget_subscription.connectivity_budget.time_g rain\})\},          \$\{templatefile(\"./templat es/cost-widget.tpl\", \{  order        = 2,  x             = 0,  y            = 5,  subscripti on = var.identity_subscription_id,  DisplayName   = \"Identity Cost\",  tenant_name  = var.tenant _name,  amount       = azurerm_consumption_budge t_subscription.identity_budget.amount,  budgetNa me   = azurerm_consumption_budget_subscription.ide ntity_budget.name,  time_grain   = azurerm_consu mption_budget_subscription.identity_budget.time_gr ain\})\},          \$\{templatefile(\"./template s/cost-widget.tpl\", \{  order        = 3,  x             = 7,  y            = 5,  subscriptio n = var.devops_subscription_id,  DisplayName  =  \"Devops Cost\",  tenant_name  = var.tenant_name ,  amount       = azurerm_consumption_budget_sub scription.devops_budget.amount,  budgetName   =  azurerm_consumption_budget_subscription.devops_bud get.name,  time_grain   = azurerm_consumption_bu dget_subscription.devops_budget.time_grain\})\},           \$\{templatefile(\"./templates/cost-widg et.tpl\", \{  order        = 4,  x            =  0,  y            = 10,  subscription = var.sh owup_dev_subscription_id,  DisplayName  = \"Show up Dev Cost\",  tenant_name  = var.tenant_name,\ n  amount       = azurerm_consumption_budget_subsc ription.showup_dev_budget.amount,  budgetName    = azurerm_consumption_budget_subscription.showup_d ev_budget.name,  time_grain   = azurerm_consumpt ion_budget_subscription.showup_dev_budget.time_gra in\})\}      \}      \}    \},    \"metadat a\": \{      \"model\": \{\}    \}  \}" |
| location | North Europe |
| name | dsb-cost-ne |
| resource_group_name | \$\{azurerm_resource_group.rg.name\} |
| tags | \$\{module.tags.common_tags\} |
:management portal dashboard cost dashboard properties

### management portal dashboard dashboard

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_portal_dashboard |
| dashboard_properties | "    \{    \"lenses\": \{      \"0\": \{         \"order\": 0,        \"parts\": \{          \" 0\": \{            \"position\": \{               \"x\": 0,              \"y\": 0,               \"colSpan\": 4,              \"rowSpan\": 6             \},            \"metadata\": \{               \"inputs\": \[                \{                   \"name\": \"resourceType\",                   \"value\": \"Microsoft.Resources/resources\"                 \}              \],               \"type\": \"Extension/HubsExtension/PartType/Br owseAllResourcesPinnedPart\",              \"vie wState\": \{                \"content\": \{                   \"selectableData\": \{                     \"activatedItems\": \[\],                     \"selectedItems\": \[\]                  \}                 \}              \}            \}           \},          \"1\": \{            \"positi on\": \{              \"x\": 0,              \" y\": 6,              \"colSpan\": 2,               \"rowSpan\": 1            \},            \" metadata\": \{              \"inputs\": \[\],               \"type\": \"Extension/HubsExtension/Part Type/ServicesHealthPart\"            \}           \},          \"2\": \{            \"position\" : \{              \"x\": 4,              \"y\":  0,              \"colSpan\": 4,               \"rowSpan\": 2            \},            \"meta data\": \{              \"inputs\": \[\],               \"type\": \"Extension/HubsExtension/PartType /AzureProjectGettingStartedPart\"            \}           \},          \"3\": \{            \"po sition\": \{              \"x\": 4,               \"y\": 2,              \"colSpan\": 4,               \"rowSpan\": 5            \},             \"metadata\": \{              \"inputs\": \[\],               \"type\": \"Extension/HubsExtension/ PartType/GettingStartedPart\"            \}           \}        \}      \}    \},    \"metadat a\": \{      \"model\": \{\}    \}  \}   " |
| location | North Europe |
| name | dsb-mgmt-ne |
| resource_group_name | \$\{azurerm_resource_group.rg.name\} |
| tags | \$\{module.tags.common_tags\} |
:management portal dashboard dashboard properties



### management resource group network

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | North Europe |
| name | rg-mgmt-network-ne |
| tags | \$\{module.tags.common_tags\} |
:management resource group network properties

### management resource group shared

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | North Europe |
| name | rg-mgmt-shared-ne |
| tags | \$\{module.tags.common_tags\} |
:management resource group shared properties

### management resource group showup dev

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | North Europe |
| name | rg-mgmt-showup-dev-ne |
| tags | \$\{module.tags.common_tags\} |
:management resource group showup dev properties

### management resource group showup prod

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_resource_group |
| location | North Europe |
| name | rg-mgmt-showup-prod-ne |
| tags | \$\{module.tags.common_tags\} |
:management resource group showup prod properties



### management role assignment monitoring function app identity reader on april tenant

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_role_assignment |
| principal_id | \$\{azurerm_user_assigned_identity.monitoring_functi on_app_identity.principal_id\} |
| provider | \$\{azurerm.governance\} |
| role_definition_name | Reader |
| scope | \$\{data.azurerm_management_group.mg_company.id\} |
:management role assignment monitoring function app identity reader on april tenant properties



### management security center auto provisioning auto

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_security_center_auto_provisioning |
| auto_provision | On |
:management security center auto provisioning auto properties



### management security center setting setting

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_security_center_setting |
| enabled | true |
| setting_name | MCAS |
:management security center setting setting properties



### management security center subscription pricing connectivity

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_security_center_subscription_pricing |
| for_each | \$\{toset(var.resource_type)\} |
| provider | \$\{azurerm.connectivity\} |
| resource_type | \$\{each.key\} |
| tier | Standard |
:management security center subscription pricing connectivity properties

### management security center subscription pricing identity

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_security_center_subscription_pricing |
| for_each | \$\{toset(var.resource_type)\} |
| provider | \$\{azurerm.identity\} |
| resource_type | \$\{each.key\} |
| tier | Standard |
:management security center subscription pricing identity properties

### management security center subscription pricing lz app

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_security_center_subscription_pricing |
| for_each | \$\{toset(var.resource_type)\} |
| provider | \$\{azurerm.lz_app\} |
| resource_type | \$\{each.key\} |
| tier | Standard |
:management security center subscription pricing lz app properties

### management security center subscription pricing management

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_security_center_subscription_pricing |
| for_each | \$\{toset(var.resource_type)\} |
| resource_type | \$\{each.key\} |
| tier | Standard |
:management security center subscription pricing management properties



### management security center workspace connectivity

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_security_center_workspace |
| count | false |
| provider | \$\{azurerm.connectivity\} |
| scope | /subscriptions/\$\{var.connectivity_subscription_id\} |
| workspace_id | \$\{azurerm_log_analytics_workspace.law.id\} |
:management security center workspace connectivity properties

### management security center workspace identity

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_security_center_workspace |
| count | false |
| provider | \$\{azurerm.identity\} |
| scope | /subscriptions/\$\{var.identity_subscription_id\} |
| workspace_id | \$\{azurerm_log_analytics_workspace.law.id\} |
:management security center workspace identity properties

### management security center workspace management

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_security_center_workspace |
| count | false |
| scope | /subscriptions/\$\{var.management_subscription_id\} |
| workspace_id | \$\{azurerm_log_analytics_workspace.law.id\} |
:management security center workspace management properties

### management security center workspace showup dev

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_security_center_workspace |
| count | false |
| provider | \$\{azurerm.showup_dev\} |
| scope | /subscriptions/\$\{var.showup_dev_subscription_id\} |
| workspace_id | \$\{azurerm_log_analytics_workspace.law.id\} |
:management security center workspace showup dev properties

### management security center workspace showup prod

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_security_center_workspace |
| count | false |
| provider | \$\{azurerm.showup_prod\} |
| scope | /subscriptions/\$\{var.showup_prod_subscription_id\} |
| workspace_id | \$\{azurerm_log_analytics_workspace.law.id\} |
:management security center workspace showup prod properties



### management service plan monitoring function app service plan

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_service_plan |
| location | North Europe |
| name | mgmt-monitoring-ne |
| os_type | Linux |
| resource_group_name | rg-mgmt-shared-ne |
| sku_name | Y1 |
:management service plan monitoring function app service plan properties



### management storage account monitoring function app storage account

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_storage_account |
| account_replication_type | LRS |
| account_tier | Standard |
| location | North Europe |
| min_tls_version | TLS1_2 |
| name | st-mgmtmonitoring-ne |
| resource_group_name | rg-mgmt-shared-ne |
:management storage account monitoring function app storage account properties



### management subnet mgmt

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["10.69.249.0/26"\] |
| name | snet-mgmt-integration-ne |
| resource_group_name | rg-mgmt-network-ne |
| virtual_network_name | vnet-mgmt-ne |
:management subnet mgmt properties

### management subnet mgmt bastion

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["10.69.248.0/24"\] |
| name | AzureBastionSubnet |
| resource_group_name | rg-mgmt-network-ne |
| virtual_network_name | vnet-mgmt-ne |
:management subnet mgmt bastion properties

### management subnet mgmt pe

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_subnet |
| address_prefixes | \["10.69.249.64/26"\] |
| name | snet-mgmt-pe-ne |
| resource_group_name | rg-mgmt-network-ne |
| virtual_network_name | vnet-mgmt-ne |
:management subnet mgmt pe properties



### management user assigned identity monitoring function app identity

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_user_assigned_identity |
| location | North Europe |
| name | fa-mgmt-monitoring-ne |
| resource_group_name | rg-mgmt-shared-ne |
:management user assigned identity monitoring function app identity properties



### management virtual network mgmt

| Properties | Values |
|:--------------------------------------|:-------------------------------------------------------------------|
| Type | azurerm_virtual_network |
| address_space | 10.69.248.0/23 |
| location | North Europe |
| name | vnet-mgmt-ne |
| resource_group_name | rg-mgmt-network-ne |
| tags | \$\{module.tags.common_tags\} |
:management virtual network mgmt properties



## management Modules

### management module tags

| Properties | Values |
|:-------------------------|:--------------------------------------------------------------------|
| accountable | n/a |
| app | management |
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
| project | klepierre-managment |
| region | North Europe |
| reseller | orange business |
| semver | n/a |
| sla | standard |
| source | ../../../modules/shared/tags |
| stack | n/a |
| tenant_name | kstorage |
:management module tags properties

