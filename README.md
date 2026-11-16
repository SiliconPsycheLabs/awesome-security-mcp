<div align="center">

# Awesome Security MCP

![Awesome Security MCP banner](assets/banner.svg)

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue.svg)](CONTRIBUTING.md)
[![GitHub stars](https://img.shields.io/github/stars/okanyildiz/awesome-security-mcp?style=social)](https://github.com/okanyildiz/awesome-security-mcp)

**🔌 Official Servers • 🌐 Popular Servers • 🛡️ Security MCP • 💻 Clients & Hosts • 🔐 Best Practices**

*Accuracy over coverage. Entries are checked for existence, description accuracy and maintenance status before merging.*

</div>

---

## Official MCP Servers

Servers maintained in the [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) repository.

- :star: [Everything](https://github.com/modelcontextprotocol/servers/tree/main/src/everything) - Reference/test server demonstrating prompts, resources and tools.
- :star: [Fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) - Fetches web content and converts it for efficient LLM consumption.
- :star: [Filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) - File operations restricted through configurable access controls.
- :star: [Git](https://github.com/modelcontextprotocol/servers/tree/main/src/git) - Reads, searches and manipulates Git repositories.
- :star: [Memory](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) - Knowledge-graph-based persistent memory.
- :star: [Sequential Thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) - Dynamic, reflective problem-solving through structured thought sequences.
- :star: [Time](https://github.com/modelcontextprotocol/servers/tree/main/src/time) - Time and timezone conversion tools.

**Archived reference servers** (in [servers-archived](https://github.com/modelcontextprotocol/servers-archived); no security updates or guarantees) include GitHub, GitLab, PostgreSQL, SQLite, Puppeteer, Brave Search and Google Maps. Vendor-maintained alternatives are listed where they exist below; community alternatives such as Postgres MCP Pro and Stacklok SQLite are not database-vendor replacements.

[🔝 Back to top](#awesome-security-mcp)

---

## Security-Specific MCP Servers

MCP servers for security operations, forensics, OSINT, threat intelligence and penetration testing.

### Reconnaissance, OSINT, vulnerability testing and reverse engineering

- :new: [RedAmon](https://github.com/samugit83/redamon) - Self-hosted AI penetration-testing framework: attack-surface graphing, autonomous exploitation from a Kali sandbox with human approval gates, and auto-fix PRs; MCP both ways (plug in any MCP server as a tool, or drive RedAmon from Claude Code or your own agent).

- [GreyNoise MCP](https://github.com/GreyNoise-Intelligence/greynoise-mcp-server) - Vendor-maintained IP context, GNQL search and threat-intelligence investigation (small adoption so far).
- :star: [Semgrep MCP](https://github.com/semgrep/semgrep) - Built into the maintained Semgrep CLI via `semgrep mcp`; lets coding agents run security scans directly.
- :star: [Snyk MCP](https://github.com/snyk/studio-mcp) - Official `snyk mcp` integration for code, dependency, IaC, container, secret, SBOM and package-health scans.
- [Socket MCP](https://github.com/SocketDev/socket-mcp) - Official Socket supply-chain security and package-risk analysis (early development, rapidly evolving).
- :star: [SonarQube MCP](https://github.com/SonarSource/sonarqube-mcp-server) - Official SonarQube code-quality and security integration for AI agents (SONAR Source-Available License v1.0, limited to non-competitive purposes).
- [Trivy MCP](https://github.com/aquasecurity/trivy-mcp) - Aqua-maintained Trivy plugin for filesystem, repository and container vulnerability/misconfiguration scanning.

- :star: [AbuseIPDB MCP (official)](https://www.abuseipdb.com/tutorial/abuseipdb-mcp) - First-party hosted and local MCP server for IP reputation and abuse reports ([source](https://github.com/AbuseIPDB/AbuseIPDB-MCP)); local server is beta/read-only.
- :zzz: [AbuseIPDB MCP (Salmanwz)](https://github.com/Salmanwz/mcp-abuseipdb) - Community AbuseIPDB endpoint wrapper (dormant alternative).
- :star: [Burp Suite MCP Server](https://github.com/PortSwigger/mcp-server) - PortSwigger's Burp extension connects AI clients to Burp through Streamable HTTP, legacy SSE or a stdio proxy, with approval controls.
- [Censys Platform MCP](https://docs.censys.com/docs/platform-mcp-server) - Censys-hosted Internet Map search, asset investigation, CVE research, query generation and attack-surface analysis.
- [GhidraMCP](https://github.com/LaurieWired/GhidraMCP) - Ghidra plugin and MCP bridge for reverse engineering, decompilation, symbols and program inspection.
- :zzz: [Hashcat MCP](https://github.com/MorDavid/Hashcat-MCP) - Hashcat password-recovery automation through MCP (last push June 2025).
- :star: [Metasploit MCP Server (msfmcpd)](https://github.com/rapid7/metasploit-framework/blob/master/docs/metasploit-framework.wiki/How-to-use-Metasploit-MCP-Server.md) - Rapid7's native msfmcpd with 16 tools, read-only by default and dangerous actions gated off.
- [MetasploitMCP](https://github.com/GH05TCREW/MetasploitMCP) - Community implementation controlling Metasploit Framework operations through MCP.
- [Nessus MCP Server](https://github.com/Cyreslab-AI/nessus-mcp-server) - Controls a Nessus instance through its REST API for vulnerability scanning and analysis (community).
- :zzz: [Nmap MCP Server](https://github.com/imjdl/nmap-mcpserver) - Exposes Nmap network-scanning functionality through MCP (community; last push April 2025).
- :zzz: [Nuclei MCP](https://github.com/addcontent/nuclei-mcp) - Runs context-aware Nuclei vulnerability scans (community; last push August 2025).
- [OpenCTI MCP Server](https://github.com/socfortress/opencti-mcp-server) - Read-only OpenCTI indicator and observable access; [mcp-opencti](https://github.com/jhuntinfosec/mcp-opencti) is another community implementation with broader threat-intelligence queries.
- [OpenVAS MCP](https://github.com/greenbone-hive/openvas-mcp) - Greenbone/OpenVAS target, task, scan, report and audit management through a Rust GVM API gateway (vendor-maintained).
- :star: [radare2-mcp](https://github.com/radareorg/radare2-mcp) - Radare2 organization's server for disassembly and binary analysis, over stdio or HTTP MCP with optional authentication and sessions.
- [SecurityTrails MCP](https://github.com/pipeworx-io/mcp-securitytrails) - Third-party hosted gateway plus an stdio bridge for SecurityTrails, with shared Pipeworx meta-tools and no offline mode (experimental community).
- [Shodan MCP Server](https://github.com/Cyreslab-AI/shodan-mcp-server) - Shodan host/network reconnaissance, InternetDB, CVE lookup and alerting (community); the upstream Exploits API is no longer serving requests, so exploit lookup currently returns an error.
- :zzz: [SQLMap MCP](https://github.com/mohdhaji87/SQLMap-MCP) - Exposes SQLMap injection-testing and database-enumeration operations through FastMCP (last push August 2025).
- :new: [VirusTotal MCP](https://github.com/VirusTotal/virustotal-mcp) - Retrieves file, URL, domain and IP intelligence and supports explicitly requested submissions through VTAI, locally or through hosted OAuth (created September 2026).
- [Wireshark MCP](https://github.com/khuynh22/mcp-wireshark) - Uses Wireshark/tshark for live capture, PCAP parsing, display filters, stream following and JSON export.

### SIEM, detection, threat intelligence and DFIR

- :star: [OpenOSINT](https://github.com/OpenOSINT/OpenOSINT) - Open-source OSINT agent: 21 public-source tools behind natural-language chat, with an MCP server.
- :star: [World Intelligence MCP](https://github.com/marc-shade/world-intel-mcp) - 160-tool MCP server for real-time global intelligence from free public APIs, with a Qdrant vector store for semantic search.

- :star: [Google Security Operations and Threat Intelligence MCP](https://github.com/google/mcp-security) - First-party servers for Google SecOps/Chronicle, SecOps SOAR, Google Threat Intelligence and Security Command Center.
- :new: [MISP MCP](https://github.com/MISP/misp-mcp) - MISP-owned, read-only event, attribute, object, tag, taxonomy, galaxy and feed search (created April 2026, small adoption so far).
- :star: [OpenCTI native MCP server](https://docs.opencti.io/latest/deployment/mcp-server/) - Official OpenCTI server through XTM One, available in Community Edition over Streamable HTTP, with read/write operations under the caller's permissions.

- :star: [Panther MCP](https://github.com/panther-labs/mcp-panther) - Panther-maintained detection engineering, alert triage and data-lake/log investigation.

- [Arkime MCP](https://github.com/lflare/arkime-mcp) - Community Arkime session and network-investigation access (55 read-only tools).
- :star: [Arkime native MCP endpoint](https://arkime.com/settings#mcp-settings) - Arkime 6.7+ native `POST /mcp` endpoint, off by default and gated by `mcpEnabled` plus the `mcpUser` role.
- :new: [CAPE MCP](https://github.com/CAPESandbox/CAPE-mcp) - Small CAPESandbox-owned implementation for querying CAPE API v2 (experimental).
- [CrowdStrike Falcon MCP](https://github.com/CrowdStrike/falcon-mcp) - Falcon detections, incidents, behaviors, threat intelligence and threat-hunting workflows (maintenance mode; new development moved to hosted CrowdStrike MCP).
- [Defender MCP](https://github.com/MenkW/Defender-MCP) - Microsoft Defender XDR incidents, alerts, machines, advanced hunting and threat intelligence (community).
- [Fleet MCP](https://fleetdm.com/guides/fleet-mcp) - Fleet's endpoint-management MCP support for querying osquery data, host policies and vulnerabilities (experimental, per the official guide).
- [Malcolm MCP Server](https://github.com/nagameTW/mcp-server-malcolm) - Queries Malcolm's Zeek, Suricata, Arkime and NetBox data, read-only unless writes are explicitly enabled.
- [Microsoft Sentinel MCP](https://learn.microsoft.com/en-us/azure/sentinel/datalake/sentinel-mcp-get-started) - Microsoft-hosted security tool collections for Sentinel data exploration, hunting, graph analysis and triage; availability varies by collection.
- [osqueryi-mcp](https://github.com/mdfranz/osqueryi-mcp) - Local Go stdio server exposing host osquery tables and queries.
- :new: [Sigma MCP Server](https://github.com/SigmaHQ/sigma-mcp-server) - SigmaHQ's server exposing pySigma functionality, including Sigma rule validation, to MCP clients (created April 2026, small adoption so far).
- [Splunk MCP Server](https://splunkbase.splunk.com/app/7931) - Splunk's supported app for SPL execution/generation and Splunk data exploration ([CiscoDevNet repository](https://github.com/CiscoDevNet/Splunk-MCP-Server-official)) (Splunk Supported, beta).
- :zzz: [SuricataMCP](https://github.com/Medinios/SuricataMCP) - Suricata version/help and PCAP alert extraction; custom rules are added manually, not managed through MCP tools (last push June 2025).
- [TheHive MCP Server](https://github.com/gbrigandi/mcp-server-thehive) - Community TheHive alert, case, observable and incident-response operations.
- :star: [TheHiveMCP (StrangeBee)](https://github.com/StrangeBeeCorp/TheHiveMCP) - Official TheHiveMCP for alert, case, observable and incident-response operations, with a read-only default.
- [Velociraptor MCP Server](https://github.com/socfortress/velociraptor-mcp-server) - Velociraptor DFIR querying and investigation workflows.
- [Wazuh MCP Server](https://github.com/gbrigandi/mcp-server-wazuh) - Wazuh alert, agent, vulnerability and indexer/API access for security investigations.
- [Windows Memory Forensics MCP](https://github.com/0xhackerfren/Windows-Memory-Forensics-MCP) - Memory-dump analysis through Volatility 3, MemProcFS, CLR/SOS and YARA (research/CTF proof of concept; not recommended for production forensic investigations).
- :zzz: [Zeek MCP](https://github.com/Gabbo01/Zeek-MCP) - Zeek network-security monitoring and log-analysis integration (last push May 2025).

### Multi-tool security projects

- [Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) - 817 structured cybersecurity skills for AI agents, mapped to six frameworks including MITRE ATT&CK (skills library, not an MCP server).
- [Claude-OSINT](https://github.com/elementalsouls/Claude-OSINT) - Eight Claude skills for external recon (100+ recon capabilities, secret-regex patterns, dorks, read-only credential validators); a Claude skills pack, not an MCP server.
- [hackingtool-plugin](https://github.com/AKCodez/hackingtool-plugin) - Claude Code plugin wrapping 183+ pentesting and OSINT tools from Z4nzu/hackingtool (plugin/skill wrapper, not an MCP server).


- [Kali Linux MCP images](https://github.com/vxcontrol/kali-linux-image/tree/master/mcp) - Containerized MCP wrappers for Nmap, Metasploit, Nuclei, SQLMap and Hashcat; Hydra and John are deliberately not included.
- [OSINT MCP Server](https://github.com/badchars/osint-mcp-server) - Multi-source OSINT covering Shodan, VirusTotal, Censys, SecurityTrails, DNS, WHOIS, certificate transparency and BGP.
- [Tengu](https://github.com/rfunix/tengu) - Pentest MCP server integrating numerous tools including Nmap, Metasploit, SQLMap, Nuclei and Hydra.
- [Threat Intel Toolkit](https://github.com/scottycwilsono/threat-intel-toolkit) - Combines AbuseIPDB, VirusTotal and Shodan IP-enrichment workflows.

## Popular MCP Servers

Widely-used community and vendor MCP servers.

### Development, browser and local-system tools

- [Prefect MCP](https://github.com/PrefectHQ/prefect-mcp-server) - Official Prefect read-only inspection and documentation access; experimental, may change drastically.
- :new: [Temporal MCP](https://github.com/temporalio/temporal-mcp) - Temporal-maintained workflow inspection and `start_workflow`; pre-release, not production-ready.

- :star: [Azure DevOps MCP](https://github.com/microsoft/azure-devops-mcp) - Microsoft's official integration for Azure DevOps work items, repositories and pipelines; distinct from Azure MCP.
- :star: [Google MCP catalog](https://github.com/google/mcp) - Central catalog of Google's managed and open-source servers, including BigQuery, GKE, Cloud Run, Firestore, Cloud Storage and Google Workspace (presented as demonstration, not an officially supported Google product).
- :star: [IBM MCP Context Forge](https://github.com/IBM/mcp-context-forge) - Actively maintained MCP gateway, registry and proxy; fits alongside Docker MCP Gateway.
- [JetBrains MCP (built-in docs)](https://www.jetbrains.com/help/idea/mcp-server.html) - MCP support is built into IntelliJ-based IDEs since 2025.2; the older JetBrains/mcp-jetbrains proxy is deprecated and unmaintained.
- :star: [Microsoft Learn MCP](https://github.com/MicrosoftDocs/mcp) - Official Microsoft documentation and code-sample retrieval.

- [Browser Use](https://github.com/browser-use/browser-use) - Browser Use's built-in CLI MCP server for web browsing.
- [browser-use-mcp-server](https://github.com/kontext-security/browser-use-mcp-server) - Independent Browser Use-based web-browsing integration.
- :star: [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) - Chrome DevTools browser control, inspection, debugging, tracing and performance analysis.
- :star: [Context7](https://github.com/upstash/context7) - Upstash's current library documentation and code examples for agents.
- [Desktop Commander](https://github.com/wonderwhy-er/DesktopCommanderMCP) - Terminal control, filesystem search and diff-based file editing; inherently high privilege.
- :star: [Docker MCP Gateway](https://github.com/docker/mcp-gateway) - Docker's gateway and CLI for running and connecting catalogued MCP servers.
- :zzz: [docker-mcp](https://github.com/QuantGeekDev/docker-mcp) - Independent Docker operations MCP server (inactive since Dec 2024); avoid exposing an unrestricted Docker socket.
- :star: [GitHub MCP Server](https://github.com/github/github-mcp-server) - Official GitHub server for repos, code, issues, PRs, Actions, security alerts and workflows; selectable toolsets and read-only controls.
- :star: [GitLab MCP Server](https://docs.gitlab.com/user/model_context_protocol/mcp_server/) - GitLab-hosted access to projects, repositories, issues and merge requests.
- [Kubernetes MCP Server](https://github.com/containers/kubernetes-mcp-server) - Kubernetes and OpenShift resource inspection and management (Containers org, not Kubernetes itself).
- [mcp-server-commands](https://github.com/g0t4/mcp-server-commands) - Exposes process execution through a run_process tool.
- [mcp-shell-server](https://github.com/tumf/mcp-shell-server) - Executes allowlisted shell commands with timeouts and structured audit logging.
- :star: [Playwright MCP](https://github.com/microsoft/playwright-mcp) - Microsoft-maintained browser automation using Playwright's accessibility tree.

### Cloud and infrastructure

- :star: [HashiCorp Vault MCP](https://github.com/hashicorp/vault-mcp-server) - Official Vault secrets, mounts and PKI operations; requires a trusted local client and careful secret-exposure controls.

- :star: [Firebase MCP](https://github.com/firebase/firebase-tools/tree/main/src/mcp) - Official Firebase server shipped in firebase-tools for project, application, data and debugging workflows.
- [Oracle MCP servers](https://github.com/oracle/mcp) - Oracle-maintained collection of proof-of-concept/reference MCP implementations for Oracle products and services (not production products).

- :star: [AWS MCP Servers](https://github.com/awslabs/mcp) - AWS Labs' collection of service-specific servers for AWS documentation, APIs, infrastructure and operations.
- :star: [Cloudflare MCP Servers](https://github.com/cloudflare/mcp-server-cloudflare) - Product-specific Cloudflare servers for platform configuration, data and developer services.
- :star: [Microsoft MCP catalog](https://github.com/microsoft/mcp) - Includes the Azure MCP Server and other Microsoft implementations for Azure resource and data operations.
- :star: [Supabase MCP](https://github.com/supabase/mcp) - Supabase project, database, development and debugging tools; prefer read-only, project-scoped operation.
- :star: [Terraform MCP Server](https://github.com/hashicorp/terraform-mcp-server) - HashiCorp's integration with the Terraform ecosystem and infrastructure-as-code workflows.
- [Vercel MCP](https://vercel.com/docs/agent-resources/vercel-mcp) - OAuth-enabled access to Vercel projects, deployments, logs, analytics and documentation (hosted).

### Observability

- :star: [Datadog MCP](https://docs.datadoghq.com/mcp_server/) - Official access to Datadog observability data, investigations, APIs and selected product-specific workflows.
- :star: [Dynatrace MCP](https://docs.dynatrace.com/docs/dynatrace-intelligence/dynatrace-mcp) - Official remote access to Dynatrace observability and Dynatrace Intelligence tools.
- :star: [New Relic MCP](https://docs.newrelic.com/docs/agentic-ai/mcp/overview/) - Governed natural-language querying, investigation and actions across New Relic operational data.


- :zzz: [Elasticsearch MCP Server](https://github.com/elastic/mcp-server-elasticsearch) - Queries Elasticsearch indices and ES|QL (deprecated: critical security fixes only — use the Elastic Agent Builder MCP endpoint for Elastic 9.2+).
- :star: [Grafana MCP](https://github.com/grafana/mcp-grafana) - Searches dashboards and queries Grafana, Prometheus, Loki, alerting and related observability data.
- [Prometheus MCP Server](https://github.com/pab1it0/prometheus-mcp-server) - Executes and analyzes Prometheus/PromQL metric queries.
- [Sentry Toolkit / MCP](https://github.com/getsentry/toolkit) - Sentry issue, event, trace, release and debugging tools for coding agents.

### Databases

- :star: [Astra DB MCP](https://github.com/datastax/astra-db-mcp) - DataStax-maintained server for Astra DB/Cassandra-backed workloads.
- :zzz: [Chroma MCP](https://github.com/chroma-core/chroma-mcp) - Chroma-maintained server for collections, documents and vector queries (last push September 2025).
- :star: [ClickHouse MCP](https://github.com/ClickHouse/mcp-clickhouse) - Official ClickHouse querying and database interaction for AI assistants.
- :star: [Confluent MCP](https://github.com/confluentinc/mcp-confluent) - Confluent-maintained integration for Kafka/Confluent streaming resources and operations.
- :star: [Couchbase MCP](https://github.com/couchbase/mcp-server-couchbase) - Official Capella and self-hosted Couchbase data/query access.
- :star: [Databricks-provided MCP services](https://docs.databricks.com/aws/en/agents/mcp-tools/built-in-mcp-services) - Official managed MCP options for Databricks data, SQL, Genie and Unity Catalog-governed workflows.
- :star: [dbt MCP](https://github.com/dbt-labs/dbt-mcp) - Official dbt integration for project metadata, semantic-layer queries and dbt workflows.
- :star: [DuckDB/MotherDuck MCP](https://github.com/motherduckdb/mcp-server-motherduck) - Maintained local server supporting both DuckDB and MotherDuck.
- :star: [Google MCP Toolbox for Databases](https://github.com/googleapis/mcp-toolbox) - Actively maintained database MCP layer supporting BigQuery, Cloud SQL, AlloyDB, Spanner and Firestore.
- :star: [InfluxDB 3 MCP](https://github.com/influxdata/influxdb3_mcp_server) - InfluxData-maintained server for InfluxDB 3.
- :star: [Meilisearch MCP](https://github.com/meilisearch/meilisearch-mcp) - Official Meilisearch index, document and search integration.
- :star: [Milvus MCP](https://github.com/zilliztech/mcp-server-milvus) - Zilliz-maintained access to Milvus vector databases.
- :star: [Neo4j MCP](https://github.com/neo4j/mcp) - Neo4j's current official product server.
- :star: [OpenSearch MCP](https://github.com/opensearch-project/opensearch-mcp-server-py) - OpenSearch-project-maintained server for search, cluster, index and agent-memory workflows.
- :star: [Pinecone MCP](https://github.com/pinecone-io/pinecone-mcp) - Official Pinecone project and developer workflow integration.
- :star: [Qdrant MCP](https://github.com/qdrant/mcp-server-qdrant) - Official Qdrant vector-storage and semantic-search server.
- :star: [Snowflake-managed MCP](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp) - Snowflake's supported managed server for retrieving account data without deploying separate infrastructure.
- :star: [Weaviate built-in MCP](https://docs.weaviate.io/weaviate/configuration/mcp-server) - Current Weaviate-native schema inspection, search and object operations; the separate old standalone server is deprecated.

- :star: [MongoDB MCP Server](https://github.com/mongodb-js/mongodb-mcp-server) - Connects agents to MongoDB databases and MongoDB Atlas clusters.
- [MySQL MCP Server](https://github.com/designcomputer/mysql_mcp_server) - MySQL schema inspection and SQL interaction.
- [Postgres MCP Pro](https://github.com/crystaldba/postgres-mcp) - Configurable PostgreSQL access with schema, health and performance-analysis tools.
- :star: [Redis MCP](https://github.com/redis/mcp-redis) - Redis data management and search through natural-language agent workflows.
- [SQLite MCP](https://github.com/StacklokLabs/sqlite-mcp) - Lightweight SQLite MCP implementation; the old steering-group SQLite server is archived.

### Collaboration, productivity, identity and commerce


- :star: [Airbyte MCP](https://docs.airbyte.com/platform/airbyte-mcp) - Official hosted access to an Airbyte organization, connectors, replication and context-layer data.
- :star: [Airtable MCP](https://www.airtable.com/developers/agents/mcp/getting-started) - Official remote server for base schemas, records, analysis and automations, with read-only/read-write controls.
- :star: [Auth0 MCP](https://github.com/auth0/auth0-mcp-server) - Official Auth0 Management API integration for applications, Actions, logs and tenant administration.
- :star: [HubSpot Remote MCP](https://developers.hubspot.com/docs/build-with-ai/remote-mcp-server) - Generally available hosted server for reading and writing HubSpot CRM data.
- :star: [PayPal Agent Toolkit](https://github.com/paypal/agent-toolkit) - PayPal-maintained agent/MCP access to PayPal APIs.
- :star: [Salesforce Hosted MCP Servers](https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/hosted-mcp-servers-overview.html) - Generally available, Salesforce-hosted access to CRM data and automation with platform governance.
- :star: [SAP Integration Suite MCP](https://help.sap.com/docs/integration-suite/isuite-integrations-and-apis/model-context-protocol-mcp) - Governed exposure of SAP enterprise APIs and data as MCP tools.
- :star: [ServiceNow MCP Server Console](https://www.servicenow.com/docs/r/intelligent-experiences/mcp-platform-manager-landing.html) - ServiceNow-native governed exposure of instance functionality to external AI applications.
- :star: [Square MCP](https://github.com/square/square-mcp-server) - Official Square commerce API integration.
- :star: [Twilio MCP](https://www.twilio.com/docs/ai/mcp) - Official Twilio API discovery and access for coding agents across Twilio's product surface.
- :star: [Workday Agent-Ready Tools](https://www.workday.com/en-us/ai-platform/agent-ready-data-tools.html) - Workday's MCP-accessible HR and finance tools, including approval-aware business actions.

- :star: [Atlassian MCP Server](https://github.com/atlassian/atlassian-mcp-server) - Hosted access to Jira, Confluence, Jira Service Management, Bitbucket and Compass.
- [CLI for Microsoft 365 MCP](https://github.com/pnp/cli-microsoft365-mcp-server) - Exposes CLI for Microsoft 365 command discovery, documentation and execution (PnP).
- :zzz: [Discord MCP](https://github.com/v-3/discordmcp) - Discord channel and messaging integration for MCP clients (last push January 2025).
- [Google Workspace MCP](https://github.com/taylorwilsdon/google_workspace_mcp) - Self-hosted integration for Drive, Docs, Sheets, Slides, Gmail, Calendar, Chat, Forms and Tasks.
- [Linear MCP](https://linear.app/docs/mcp) - Finds, creates and updates Linear issues, projects and comments (hosted).
- [mcp-atlassian](https://github.com/sooperset/mcp-atlassian) - Jira and Confluence integration for self-hosted/Data Center needs.
- [Microsoft 365 MCP Server](https://github.com/Softeria/ms-365-mcp-server) - Graph API access to Microsoft 365 and Office services, with read-only and scope-selection options.
- [Microsoft MCP Server for Enterprise](https://learn.microsoft.com/en-us/graph/mcp-server/get-started) - Delegated, read-only Microsoft Graph access covering Entra users, groups, roles, directory data and security incidents.
- :zzz: [Notion MCP Server (local)](https://github.com/makenotion/notion-mcp-server) - Local Notion server; no longer actively maintained or supported.
- :star: [Okta MCP Server](https://github.com/okta/okta-mcp-server) - Okta-maintained self-hosted server for identity administration through Okta APIs.
- :star: [Remote Notion MCP](https://developers.notion.com/guides/mcp/get-started-with-mcp) - Actively maintained hosted Notion MCP for workspace search, page/database access and editing (hosted endpoint; see the guide for connection details).
- [Shopify Customer Accounts MCP](https://shopify.dev/docs/agents) - Customer Accounts MCP with UCP Catalog/Cart/Checkout/Order/Ask capabilities; Storefront MCP has a migration notice to UCP. Developer documentation/API assistance belongs under [Shopify AI Toolkit](https://shopify.dev/docs/apps/build/ai-toolkit).
- [Shopify MCP](https://github.com/GeLi2001/shopify-mcp) - Independent Shopify Admin API integration; distinct from Shopify's developer and storefront servers.
- [Slack MCP Server](https://docs.slack.dev/ai/slack-mcp-server) - Searches Slack, retrieves and sends messages, manages canvases and users, and uploads files (hosted).
- :star: [Stripe MCP](https://docs.stripe.com/mcp) - Hosted Stripe MCP server exposing Stripe API operations and documentation search; the older Agent Toolkit packages are deprecated (no further updates).
- [Teams MCP](https://github.com/floriscornel/teams-mcp) - Microsoft Teams and Graph API messaging, search and user operations (community, not Microsoft-maintained).
- [Work IQ MCP](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/overview) - Microsoft-hosted Microsoft 365 intelligence across mail, calendar, files and Teams.

[🔝 Back to top](#awesome-security-mcp)

---

## MCP Clients & Hosts

Applications that consume MCP servers.

- :star: [ChatGPT](https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt) - Custom MCP connectors with workspace permission controls.
- :star: [Claude Code](https://code.claude.com/docs/en/mcp) - Local and remote MCP support in Anthropic's coding agent.
- :star: [Claude Desktop / Claude connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) - Supports remote MCP connectors and local desktop server configurations.
- :star: [Cline](https://docs.cline.bot/mcp/mcp-overview) - VS Code coding agent with custom MCP server and marketplace support.
- :star: [Continue](https://docs.continue.dev/customize/mcp-tools) - Open-source VS Code/JetBrains agents with MCP tool configuration.
- :star: [Cursor](https://cursor.com/docs/mcp) - Built-in MCP support for local and remote servers through project/user configuration and marketplace integrations.
- :star: [Gemini CLI](https://geminicli.com/docs/tools/mcp-server/) - Local and remote MCP configuration in Google's CLI agent.
- :star: [goose](https://goose-docs.ai/) - Open-source MCP-native desktop/CLI agent, governed by the Agentic AI Foundation at the Linux Foundation (originally from Block).
- [Kimi Code](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/mcp.html) - Supports stdio, Streamable HTTP and legacy HTTP+SSE, OAuth, project/user configuration, workspace trust and tool allow/block lists.
- :star: [Kiro](https://kiro.dev/docs/mcp/configuration/) - MCP configuration across Kiro IDE, CLI and web clients.
- [LibreChat](https://www.librechat.ai/docs/features/mcp) - Self-hosted chat/agent platform with configurable MCP servers, OAuth support and access controls.
- :star: [OpenAI Codex](https://learn.chatgpt.com/docs/extend/mcp?surface=cli) - Codex support for consuming external MCP servers.
- :star: [OpenCode](https://opencode.ai/docs/mcp-servers/) - Local and remote MCP support, including tools, prompts and resources.
- :star: [Roo Code](https://roocodeinc.github.io/Roo-Code/features/mcp/using-mcp-in-roo/) - VS Code agent supporting configured MCP servers and granular auto-approval settings.
- :star: [VS Code Copilot](https://code.visualstudio.com/docs/agent-customization/mcp-servers) - Adds MCP tools and data to Copilot agent workflows, with server management and enterprise controls.
- [Windsurf Cascade](https://docs.devin.ai/windsurf/plugins/cascade/mcp) - Connects Cascade to local and remote MCP servers.
- [Zed](https://zed.dev/docs/ai/mcp) - Supports MCP context servers and extensions; current documentation specifically calls out Tools and Prompts.

[🔝 Back to top](#awesome-security-mcp)

---

## MCP Security Best Practices

Primary references: [MCP Security Best Practices](https://modelcontextprotocol.io/specification/latest/basic/security_best_practices), [MCP Authorization](https://modelcontextprotocol.io/specification/latest/basic/authorization), [MCP Transports](https://modelcontextprotocol.io/specification/latest/basic/transports), [OWASP MCP Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/MCP_Security_Cheat_Sheet.html), [Official MCP Registry](https://registry.modelcontextprotocol.io/) (a discovery mechanism, not a security certification).

1. **Treat tool metadata and results as untrusted input.** Tool descriptions, schemas, annotations, web pages, documents, issues, emails and returned data can carry indirect prompt injection. Cross-server tool shadowing and post-approval "rug pulls" are also risks. Filtering alone cannot establish safety; enforce authorization outside the model.
2. **Vet and pin servers and tool definitions.** Review source, publisher, exact install command, dependencies and tool schemas. Pin reviewed package versions and hashes, verify signatures where available, and re-review changed tool definitions. Do not equate registry presence or GitHub stars with trustworthiness.
3. **Default to least privilege and read-only operation.** Enable only required servers, toolsets and individual tools. Use read-only database roles, restricted OAuth scopes, project-scoped access, filesystem allowlists and narrowly scoped Kubernetes/cloud identities. Avoid wildcard auto-approval.
4. **Require risk-appropriate approval.** Show full arguments and require confirmation for writes, deletion, payments, credential changes, data sharing, command execution, scans, exploitation and other irreversible actions. Tool annotations such as `readOnlyHint` are hints, not enforcement.
5. **Handle secrets as credentials, not prompts.** Use OS credential stores or a secret manager, short-lived per-server tokens and minimal injected environment variables. Never place secrets in repositories, prompts, command arguments, URLs or logs. Rotate and revoke credentials independently for each server.
6. **Validate remote authorization correctly.** Use TLS and OAuth appropriately, validate token audience, and reject tokens not issued for the MCP server. Do not use token passthrough. Access tokens must not appear in URI query strings.
7. **Choose and harden the transport.** stdio avoids a listening network port but does not sandbox the child process; it inherits the permissions and environment granted by the host. For Streamable HTTP, require authentication where needed, validate Origin and Host, bind local services to loopback, and protect session/state handles. The old standalone HTTP+SSE transport is deprecated; Streamable HTTP may itself use SSE for streaming.
8. **Sandbox local servers.** Run third-party servers with a dedicated unprivileged identity and restricted filesystem, process and network access. Containers are useful only when configured securely; do not mount sensitive directories, host credentials or the Docker socket unnecessarily.
9. **Constrain network and data exfiltration paths.** Apply egress allowlists, SSRF protections, URL validation, redirect checks, private-address blocking, timeouts, rate limits and output-size limits. Pay particular attention when one agent has access to private data, untrusted content and an outbound communication tool simultaneously.
10. **Add controls specific to offensive-security servers.** Run them only in isolated, explicitly authorized environments; use target allowlists, non-root identities, read-only defaults where possible, bounded scans, approval gates and complete audit logs. Avoid wrappers that expose unrestricted shell commands or arbitrary scanner arguments.
11. **Log without creating another secret store.** Record actor, server, tool, arguments, result status and timestamp, while redacting credentials and sensitive content. Monitor new tools, definition changes, unusual call frequency and cross-server data flows.
12. **Warn about submissions and samples.** VirusTotal and similar services may share submitted files or URLs with partners or the security community. A hash lookup is not permission to upload the underlying file; require explicit authorization for submissions involving internal code, documents, personal data or credentials.

[🔝 Back to top](#awesome-security-mcp)

---

## Learning Resources

- 📘 [MCP Specification](https://modelcontextprotocol.io/specification) - Protocol details, transports, authorization and security best practices.
- 🧭 [MCP Governance & community](https://github.com/modelcontextprotocol) - Steering-group repositories and community discussions.
- 🧪 [MCP Inspector](https://github.com/modelcontextprotocol/inspector) - Official testing/debugging UI and proxy for MCP servers.
- 🛡️ [OWASP MCP Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/MCP_Security_Cheat_Sheet.html) - Concise security checklist for MCP deployments.
- 🗂️ [Official MCP Registry](https://registry.modelcontextprotocol.io/) - Server discovery (not a security certification).
- 📚 [Awesome MCP Servers (wong2)](https://github.com/wong2/awesome-mcp-servers) - Community-curated list of MCP servers (another good discovery source).
- 📚 [Punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - Large community list of MCP servers and clients.
- 📚 [MCP.so](https://mcp.so) - MCP server directory and ecosystem hub.

[🔝 Back to top](#awesome-security-mcp)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). One server per PR, verified links, honest descriptions, alphabetical order.

**License:** [MIT](LICENSE) © 2026 Okan YILDIZ

[🔝 Back to top](#awesome-security-mcp)
