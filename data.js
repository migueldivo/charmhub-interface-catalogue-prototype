const catalogue = [
  {
    "name": "cos_agent",
    "status": "Published",
    "statusStyle": "published",
    "summary": "Machine-charm-specific interface for managing multiple observability-related data streams.",
    "categories": [
      "Observability"
    ]
  },
  {
    "name": "grafana_datasource",
    "status": "Published",
    "statusStyle": "published",
    "summary": "Provide Grafana data source servers.",
    "categories": [
      "Observability"
    ]
  },
  {
    "name": "ingress",
    "status": "Published",
    "statusStyle": "published",
    "summary": "-",
    "categories": [
      "Ingress",
      "Networking"
    ]
  },
  {
    "name": "ingress_per_unit",
    "status": "Published",
    "statusStyle": "published",
    "summary": "-",
    "categories": [
      "Ingress",
      "Networking"
    ]
  },
  {
    "name": "k8s-service",
    "status": "Published",
    "statusStyle": "published",
    "summary": "-",
    "categories": [
      "Networking"
    ]
  },
  {
    "name": "kratos_info",
    "status": "Published",
    "statusStyle": "published",
    "summary": "-",
    "categories": [
      "Identity-auth"
    ]
  },
  {
    "name": "milter",
    "status": "Published",
    "statusStyle": "published",
    "summary": "Provide or consume a mail filter.",
    "categories": []
  },
  {
    "name": "mysql_client",
    "status": "Published",
    "statusStyle": "published",
    "summary": "Access MySQL databases with unique credentials.",
    "categories": [
      "Data",
      "Identity-auth"
    ]
  },
  {
    "name": "opencti_connector",
    "status": "Published",
    "statusStyle": "published",
    "summary": "Connect a single OpenCTI provider to one or more OpenCTI connectors.",
    "categories": [
      "Security"
    ]
  },
  {
    "name": "openfga",
    "status": "Published",
    "statusStyle": "published",
    "summary": "Set up and connect to an OpenFGA store.",
    "categories": [
      "Identity-auth"
    ]
  },
  {
    "name": "prometheus_remote_write",
    "status": "Published",
    "statusStyle": "published",
    "summary": "Write Prometheus metrics to remote endpoint.",
    "categories": [
      "Observability"
    ]
  },
  {
    "name": "prometheus_scrape",
    "status": "Published",
    "statusStyle": "published",
    "summary": "Configure Prometheus scraping jobs.",
    "categories": [
      "Observability"
    ]
  },
  {
    "name": "saml",
    "status": "Published",
    "statusStyle": "published",
    "summary": "Authenticate users with SAML.",
    "categories": [
      "Identity-auth"
    ]
  },
  {
    "name": "smtp",
    "status": "Published",
    "statusStyle": "published",
    "summary": "Connect to a SMTP server.",
    "categories": [
      "Operations"
    ]
  },
  {
    "name": "tempo_cluster",
    "status": "Published",
    "statusStyle": "published",
    "summary": "Tempo coordinator and worker charm communication.",
    "categories": []
  },
  {
    "name": "tls-certificates",
    "status": "Published",
    "statusStyle": "published",
    "summary": "Securely request TLS certificates.",
    "categories": [
      "Security"
    ]
  },
  {
    "name": "tracing",
    "status": "Published",
    "statusStyle": "published",
    "summary": "Request endpoints for pushing trace data.",
    "categories": [
      "Observability"
    ]
  },
  {
    "name": "valkey_client",
    "status": "Published",
    "statusStyle": "published",
    "summary": "Access Valkey databases with credentials and TLS configuration.",
    "categories": [
      "Data"
    ]
  },
  {
    "name": "auth_proxy",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Configure an Identity and Access Proxy.",
    "categories": [
      "Identity-auth"
    ]
  },
  {
    "name": "azure_service_principal",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Interact with Microsoft Entra ID using service principal credentials.",
    "categories": [
      "Data",
      "Identity-auth"
    ]
  },
  {
    "name": "azure_storage",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Access Azure Blob Storage and Data Lake Storage (Gen 2).",
    "categories": []
  },
  {
    "name": "certificate_transfer",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Receive public or CA certificates.",
    "categories": [
      "Security"
    ]
  },
  {
    "name": "cloudflared_route",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Configure a cloudflared tunnel.",
    "categories": [
      "Ingress",
      "Networking"
    ]
  },
  {
    "name": "connect_client",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Interact with Kafka Connect clusters.",
    "categories": [
      "Data",
      "Identity-auth"
    ]
  },
  {
    "name": "database_backup",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Manage database backup and restore operations.",
    "categories": []
  },
  {
    "name": "dns_record",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Create and manage DNS records.",
    "categories": []
  },
  {
    "name": "etcd_client",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Access etcd clusters with credentials and TLS configuration.",
    "categories": [
      "Data",
      "Identity-auth"
    ]
  },
  {
    "name": "filesystem_info",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Export mount information about shared filesystems.",
    "categories": [
      "Data"
    ]
  },
  {
    "name": "fiveg_core_gnb",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": [
      "Telco"
    ]
  },
  {
    "name": "fiveg_f1",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": []
  },
  {
    "name": "fiveg_gnb_identity",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": []
  },
  {
    "name": "fiveg_n2",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": [
      "Telco"
    ]
  },
  {
    "name": "fiveg_n3",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": []
  },
  {
    "name": "fiveg_n4",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": [
      "Telco"
    ]
  },
  {
    "name": "fiveg_nrf",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": [
      "Telco"
    ]
  },
  {
    "name": "fiveg_rfsim",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": []
  },
  {
    "name": "forward_auth",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": [
      "Identity-auth"
    ]
  },
  {
    "name": "grafana_auth",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Provide authentication configuration for Grafana.",
    "categories": [
      "Identity-auth",
      "Observability"
    ]
  },
  {
    "name": "grafana_datasource_exchange",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Share UIDs for Grafana datasources between charms.",
    "categories": [
      "Internal",
      "Observability"
    ]
  },
  {
    "name": "hydra_endpoints",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": [
      "Identity-auth"
    ]
  },
  {
    "name": "ip_router",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": []
  },
  {
    "name": "istio_metadata",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Share Istio installation metadata between charms.",
    "categories": [
      "Networking"
    ]
  },
  {
    "name": "jwt",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Provide and consume JSON Web Token configuration.",
    "categories": []
  },
  {
    "name": "k8s_backup_target",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Configure Kubernetes backup target specifications.",
    "categories": [
      "Operations"
    ]
  },
  {
    "name": "kafka_client",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Interact with Kafka clusters as a client.",
    "categories": [
      "Data",
      "Identity-auth"
    ]
  },
  {
    "name": "karapace_client",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Access Karapace schema registry services.",
    "categories": []
  },
  {
    "name": "kratos_external_idp",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": []
  },
  {
    "name": "kubeflow_dashboard_links",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": [
      "Operations"
    ]
  },
  {
    "name": "ldap",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Configure and connect to a Lightweight Directory Access Protocol (LDAP) server.",
    "categories": [
      "Identity-auth"
    ]
  },
  {
    "name": "litmus_auth",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Exchange gRPC server endpoints for communication between Litmus auth and backend charms.",
    "categories": [
      "Internal",
      "Operations"
    ]
  },
  {
    "name": "login_ui_endpoints",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": [
      "Identity-auth"
    ]
  },
  {
    "name": "mimir_cluster",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Mimir coordinator and worker charm communication.",
    "categories": []
  },
  {
    "name": "mongodb_client",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Access MongoDB databases with unique credentials.",
    "categories": [
      "Data",
      "Identity-auth"
    ]
  },
  {
    "name": "nginx-route",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Create an Nginx ingress resource in a Kubernetes cluster.",
    "categories": [
      "Ingress",
      "Networking"
    ]
  },
  {
    "name": "oauth",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Connect to an OAuth2/OIDC Provider.",
    "categories": [
      "Identity-auth"
    ]
  },
  {
    "name": "opensearch_client",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Access OpenSearch and ElasticSearch clusters.",
    "categories": [
      "Data",
      "Identity-auth"
    ]
  },
  {
    "name": "postgresql_client",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Access PostgreSQL databases with unique credentials.",
    "categories": [
      "Data",
      "Identity-auth"
    ]
  },
  {
    "name": "profiling",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": []
  },
  {
    "name": "pyroscope_cluster",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Pyroscope coordinator and worker charm communication.",
    "categories": []
  },
  {
    "name": "s3",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": [
      "Data"
    ]
  },
  {
    "name": "sdcore_config",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": [
      "Telco"
    ]
  },
  {
    "name": "sdcore_management",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": [
      "Telco"
    ]
  },
  {
    "name": "spark_service_account",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": []
  },
  {
    "name": "vault-autounseal",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": []
  },
  {
    "name": "vault-kv",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Securely share Vault credentials to interact with the Vault Key-Value (KV) backend.",
    "categories": [
      "Security"
    ]
  },
  {
    "name": "velero_backup_config",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "Configure Kubernetes backup requirements for Velero.",
    "categories": []
  },
  {
    "name": "wazuh_api_client",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "The `wazuh_api_client` interface allows charms to connect to a Wazuh server. The provider charm manages access to the server, securely providing credentials and endpoints to the requirer charms.",
    "categories": []
  },
  {
    "name": "zookeeper",
    "status": "Draft",
    "statusStyle": "draft",
    "summary": "-",
    "categories": []
  }
];
