
# Introduction

## Objective

This document describes the high-level design of the Klepierre's architecture to be deployed to Azure by Orange Digital based on Microsoft’s recommendations and best practices.

Klepierre’s high-level design will cover the following areas:

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
- Landing zones for the Show Up project
- Sandbox
- Devops Zone

## Context

Klepierre, a leading European real estate company, is undertaking a cloud transformation initiative to modernize its IT infrastructure and support new business projects.
This project, delivered by Orange Business, aims to establish a secure, scalable, and compliant Azure environment by implementing a landing zone based on the Microsoft Cloud Adoption Framework (CAF) Enterprise Scale model. The landing zone will serve as the foundation for all future workloads, ensuring alignment with industry best practices for governance, security, and operational excellence.

The first phase focuses on designing and deploying the Azure landing zone, incorporating core services such as identity management, networking, monitoring, and compliance controls. In the second phase, the ShowUp project—a key business application—will be deployed within this environment, leveraging the robust foundation established in the initial phase.

This approach ensures that Klepierre’s cloud adoption is structured, repeatable, and aligned with both Microsoft’s recommendations and Klepierre’s business# Introduction.

The Microsoft Cloud Adoption Framework (CAF) is a set of proven guidance, best practices, tools, and documentation designed to help organizations plan, implement, and manage their cloud adoption journey on Microsoft Azure. It covers all stages of cloud adoption, including strategy, planning, readiness, migration, governance, management, and innovation.

CAF provides a structured approach to ensure that cloud environments are secure, well-governed, and aligned with business objectives. It helps organizations accelerate their cloud adoption while minimizing risks and ensuring compliance with industry standards.


## Global requirements

| Reference                          | Requirements                                                               |
| :----------------------------------| :------------------------------------------------------------------------- |
| OCB-AZ-GLOBAL-01                   | Architecture must be guided by the Well Architected Review                 |
| OCB-AZ-GLOBAL-02                   | All assets created must be deployed with Infrastructure as a code solution |
:Global Requirements