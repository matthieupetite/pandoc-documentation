# Global Architecture

## Klepierre Landing zones architecture

The schema below represents the landing zone design that will be implemented for Klepierre's project. The layout described here is based on the enterprise scale pattern, defined as a best practice by Microsoft when companies aim to push on Azure some critical assets of their IT. Taking benefits of the Hub & Spoke pattern implemented in the enterprise scale is the best solution for Klepierre to handle the deployment of the core platform on Azure as the group aims in the middle term to deploy more business workload. Details of each part are given in the next section.

![Landing zone global overview](./assets/2-global-overview/HLD.png)

The preceding enterprise-scale architecture represents the strategic design path and targets technical state of the art for Azure environment. This enterprise-scale architecture is modular by design. It is a foundational landing zone control plane that supports your application portfolios, whether the applications are being migrated or are newly developed and deployed to Azure. This architecture can scale alongside your business requirements, regardless of scale points. By default, all resources will be deployed in France Central Azure location.
