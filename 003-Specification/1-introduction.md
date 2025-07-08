# Introduction

## Objective

This document outlines the high-level design of  April Data Plaform architecture, which will be deployed to Azure by Digital Service. The design is based on Microsoft's recommendations and best practices. The high-level design for April will encompass the following areas, scoped on the Data Platform only:

April’s high-level design will cover the following areas:

- Azure Billing and Azure Active Directory Tenant
- Core resource
  - Management groups and subscriptions' organization
  - Security, governance, and compliance
  - Business continuity and disaster recovery
- Identity resources
  - Identity and access management
  - Identity subscription
- Connectivity resources
  - Network topology and connectivity
- Management resources
  - Management
  - Monitoring
- Landing Zones API
- Sandbox
- Devops Zone

## Context

### Project Overview

Following the successful April Marketplace migration to Azure, spearheaded by the April Digital Teams, the April Data Team is now contemplating the refactoring of its Data Platform which is today based on Dataiku solutions. Capitalizing on the success of the Digital Teams' project, Azure has been chosen as the preferred platform for redesigning the next version of the Data Platform.

This high-level design document (HLD) outlines the architecture and implementation plan for the migration of April's data platform to Azure. The project is initiated by the Data teams, who want to leverage the cloud capabilities and services to build an enterprise data platform that will enable data governance, data quality, and data analytics at scale. The project is aligned with April's digital transformation strategy and follows the best practices of the Azure Cloud Adoption Framework (CAF).

### Business Drivers and benefits

The main business drivers and expected benefits of migrating the data platform to Azure are:

- **Cost optimization**: By using Azure's pay-as-you-go model, April can reduce the capital expenditure and operational costs of maintaining on-premises data infrastructure and software licenses. Azure also offers various tools and features to monitor and optimize the resource utilization and performance of the data platform.

- **Scalability and elasticity**: Azure provides the ability to scale up or down the data platform resources according to the demand and workload. This enables April to handle peak periods, seasonal fluctuations, and business growth without compromising the service level agreements and user experience.

- **Innovation and agility:** Azure offers a rich portfolio of data services and solutions that can support various data scenarios and use cases, such as data ingestion, storage, processing, integration, transformation, analysis, and visualization. By using Azure's data services, April can accelerate the development and deployment of new data products and features, as well as adopt the latest technologies and trends in the data domain, such as artificial intelligence, machine learning, and big data.

- **Security and compliance**: Azure provides a secure and compliant cloud environment for the data platform, with built-in features such as encryption, authentication, authorization, auditing, backup, and disaster recovery. Azure also complies with the industry standards and regulations that are relevant to April's business, such as GDPR, ISO, and SOC.

- **Data governance and quality**: Azure enables April to implement a comprehensive and consistent data governance and quality framework across the data platform, with tools and capabilities such as data catalog, data lineage, data classification, data policies, data quality rules, data quality monitoring, and data quality reporting. By improving the data governance and quality, April can enhance the trustworthiness, reliability, and usability of the data assets, as well as mitigate the risks and costs associated with data issues and errors.
  
## Global requirements

| Reference                    | Requirements                                                    |
| :--------------------------- | :-------------------------------------------------------------- |
| OCB-AZ-GLOBAL-01             | Architecture must be guided by the Well Architected Review                 |
| OCB-AZ-GLOBAL-02             | All assets created must be deployed with Infrastructure as a code solution |

: Global Requirements
