# Lectures 71 to 102
BATCH_4 = {
    71: {
        "cleanTitle": "AWS Directory Service: Connecting Windows Server to AWS AD Connector",
        "hindiSummary": "AWS AD Connector ek proxy service hai jo aapke on-premises Microsoft Active Directory ko AWS se connect karti hai bina kisi directory synchronization ke. Isse aapke office ke domain users apne existing office passwords se AWS Management Console aur Windows EC2 instances me login kar sakte hain.",
        "englishSummary": "Architectural implementation of AWS Directory Service AD Connector. Functioning as a high-availability directory proxy that redirects authentication requests to an on-premises Microsoft Active Directory without caching credentials or directory syncing.",
        "keyConcepts": [
            "AD Connector: Proxy gateway that forwards Active Directory authentication requests directly to your existing on-premises domain controllers.",
            "Zero Credential Caching: Does not replicate or sync user passwords in the cloud; credentials remain strictly inside your on-premises AD.",
            "Prerequisites: AWS Site-to-Site VPN or AWS Direct Connect to reach on-premises domain controllers; VPC subnets spanning at least 2 AZs; DNS IP configuration.",
            "Use Cases: Seamless Windows EC2 domain join, Amazon WorkSpaces login, and AWS Management Console federated sign-in using corporate credentials."
        ],
        "examTips": "If exam asks to 'use existing on-premises Active Directory credentials to access AWS without caching or syncing credentials to the cloud' -> Choose AD Connector.",
        "architecture": "AWS VPC [AD Connector Proxy (Multi-AZ)] === [Site-to-Site VPN] ===> On-Premises Data Center [Active Directory Domain Controller]",
        "commandsOrSteps": [
            "AWS Directory Service -> Set up directory -> AD Connector -> Specify VPC, Subnets, on-premise DNS IPs, and service account credentials."
        ],
        "interviewQuestions": "Q: What is the primary difference between AWS Managed Microsoft AD and AWS AD Connector?\nA: AWS Managed Microsoft AD is a full, cloud-hosted Active Directory cluster managed by AWS. AD Connector is merely a lightweight proxy gateway that forwards authentication requests to an existing on-premises Active Directory."
    },
    72: {
        "cleanTitle": "Database Fundamentals: DBMS Architecture & Flat Files vs Databases",
        "hindiSummary": "Database ka basic concept: Flat files (CSV, Excel) me data store karne ki limitations jaise redundancy, data inconsistency, zero security aur poor search speed. DBMS (Database Management System) data ko structured form me store karta hai aur fast retrieval, ACID compliance aur security provide karta hai.",
        "englishSummary": "Introduction to Database Management Systems (DBMS). Analyzing the structural limitations of flat-file storage (redundancy, concurrency conflicts, lack of atomicity) and the architectural advantages of relational and non-relational database management systems.",
        "keyConcepts": [
            "Flat Files vs DBMS: Flat files lack transaction isolation, atomic rollbacks, concurrent locking, and indexed search capabilities.",
            "CRUD Operations: Create, Read, Update, Delete.",
            "Database Categorization: Relational (RDBMS - Structured, SQL, Tables/Rows) vs Non-Relational (NoSQL - Flexible, JSON Documents, Key-Value, Graphs).",
            "Cloud Databases on AWS: Managed services (Amazon RDS, Aurora, DynamoDB) vs Self-Managed databases on EC2 instances."
        ],
        "examTips": "Self-managed DB on EC2 requires you to handle OS patching, database patching, backups, and replication manually. Managed AWS databases (RDS) automate all maintenance.",
        "architecture": "Application Tier ---> Database Management Engine (Query Optimizer + Buffer Pool + Storage Engine) ---> Storage Subsystem",
        "commandsOrSteps": [
            "Compare Database Options on AWS: RDS vs Aurora vs DynamoDB vs Redshift vs ElastiCache."
        ],
        "interviewQuestions": "Q: Why should a company migrate a database from an EC2 instance to Amazon RDS?\nA: Amazon RDS automates time-consuming database administrative tasks including OS and database engine patching, automated daily backups, multi-AZ synchronous replication, failover, and storage auto-scaling."
    },
    73: {
        "cleanTitle": "What is a Relational Database (RDBMS): SQL & ACID Properties",
        "hindiSummary": "Relational Database (RDBMS) tables (rows aur columns) me data store karta hai aur SQL (Structured Query Language) use karta hai. Yeh strict schema aur ACID properties (Atomicity, Consistency, Isolation, Durability) follow karta hai, jo financial systems aur banking transactions ke liye mandatory hota hai.",
        "englishSummary": "Deep architectural analysis of Relational Database Management Systems (RDBMS). Understanding tables, primary keys, foreign keys, schema normalization, SQL syntax, and the foundational ACID transaction properties.",
        "keyConcepts": [
            "Strict Schema: Pre-defined tables with explicit column data types (INT, VARCHAR, TIMESTAMP).",
            "ACID Properties:\n  - Atomicity: All operations in a transaction succeed, or the entire transaction is rolled back (All-or-Nothing).\n  - Consistency: Data must satisfy all database schema constraints, foreign keys, and validation rules.\n  - Isolation: Concurrent transactions execute independently without interfering with each other.\n  - Durability: Once a transaction commits, data is permanently recorded even in the event of a system crash.",
            "Best For: Complex multi-table JOINs, financial transactions, ERP systems, and strictly structured business records."
        ],
        "examTips": "Workloads requiring strict ACID compliance, complex SQL queries, and table JOINs -> Relational Database (Amazon RDS / Aurora).",
        "architecture": "Order Table [OrderID (PK)] <=== [Foreign Key Relationship] ===> OrderItems Table [ItemID, OrderID (FK)]",
        "commandsOrSteps": [
            "SELECT u.name, o.total FROM Users u JOIN Orders o ON u.id = o.user_id WHERE o.status = 'PAID';"
        ],
        "interviewQuestions": "Q: What does Atomicity mean in an RDBMS transaction?\nA: Atomicity ensures that a series of database operations either execute completely or not at all. If a banking transfer deducts money from Account A but fails before crediting Account B, the entire transaction rolls back."
    },
    74: {
        "cleanTitle": "What is a NoSQL Database: Non-Relational Systems, BASE & CAP Theorem",
        "hindiSummary": "NoSQL (Not Only SQL) databases flexible schema (bina fixed columns ke) use karte hain. Yeh Key-Value, Document, Columnar ya Graph format me data store karte hain. Yeh BASE properties (Basically Available, Soft state, Eventual consistency) aur CAP theorem follow karte hain aur massive horizontal scale hote hain.",
        "englishSummary": "Architectural breakdown of NoSQL (Non-Relational) database systems. Exploring schemaless data models (Key-Value, Document, Wide-Column, Graph), horizontal partitioning (sharding), the BASE consistency model, and Eric Brewer's CAP Theorem (Consistency, Availability, Partition Tolerance).",
        "keyConcepts": [
            "Schemaless Design: Each record (item/document) can have different attributes and nested JSON structures.",
            "4 Types of NoSQL:\n  1. Key-Value: Ultra-fast key lookups (Amazon DynamoDB).\n  2. Document: JSON-like documents (MongoDB, Amazon DocumentDB).\n  3. Wide-Column: Massive analytical datasets (Apache Cassandra, Amazon Keyspaces).\n  4. Graph: Interconnected relationships (Amazon Neptune).",
            "CAP Theorem: A distributed data store can guarantee at most TWO out of three: Consistency, Availability, and Partition Tolerance.",
            "Horizontal Scaling: NoSQL databases scale horizontally across distributed cluster nodes with zero performance degradation."
        ],
        "examTips": "Massive horizontal write throughput, JSON documents, sub-10-millisecond latency at any scale -> Choose NoSQL (Amazon DynamoDB).",
        "architecture": "NoSQL Partitioning: Partition Key Hash ---> Target Storage Partition Node (Instant O(1) Key-Value Lookup)",
        "commandsOrSteps": [
            "Review JSON document structure: `{\"id\": \"item101\", \"title\": \"Laptop\", \"specs\": {\"ram\": \"16GB\", \"cpu\": \"M3\"}}`"
        ],
        "interviewQuestions": "Q: What is the CAP Theorem and how does it relate to cloud databases?\nA: The CAP theorem states that in a distributed network with network Partitions (P), you must choose between Consistency (C - every read gets latest write or error) or Availability (A - every request gets non-error response without guarantee of latest write)."
    },
    75: {
        "cleanTitle": "Amazon RDS Overview: Managed Relational Database Services & Engines",
        "hindiSummary": "Amazon RDS (Relational Database Service) AWS ki fully-managed relational database service hai. Yeh 6 popular database engines support karta hai: MySQL, PostgreSQL, MariaDB, Oracle, Microsoft SQL Server, aur Amazon Aurora. Hardware provisioning, OS patching, backups aur recovery sab AWS sambhalta hai.",
        "englishSummary": "Introduction to Amazon Relational Database Service (RDS). Managed deployment of OLTP relational databases across 6 supported engines: MySQL, PostgreSQL, MariaDB, Oracle, Microsoft SQL Server, and Amazon Aurora. Operational maintenance, automated snapshots, and scaling.",
        "keyConcepts": [
            "6 Supported DB Engines: Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle, and Microsoft SQL Server.",
            "Managed Responsibilities: AWS handles server provisioning, OS installation, database engine patching, automated backups, point-in-time recovery, and hardware failure failover.",
            "Customer Responsibilities: Database optimization, indexing, schema design, queries, and user security permissions.",
            "No OS Access: Customers DO NOT have SSH or RDP operating system level access to the underlying RDS host server."
        ],
        "examTips": "IMPORTANT EXAM RULE: You CANNOT SSH into an Amazon RDS instance. If an application strictly requires underlying OS access or custom OS kernel modules, you must install the database on Amazon EC2.",
        "architecture": "Application Servers (EC2 / ECS / Lambda) === [SQL Port: 3306/5432] ===> Amazon RDS Managed Database Instance",
        "commandsOrSteps": [
            "aws rds describe-db-instances --query 'DBInstances[*].[DBInstanceIdentifier,Engine,DBInstanceStatus,Endpoint.Address]'"
        ],
        "interviewQuestions": "Q: Can you log in via SSH to an Amazon RDS database instance?\nA: No. Amazon RDS is a managed service that restricts host operating system access. If custom OS access or third-party database plugins are required, you must run the database on self-managed EC2 instances."
    },
    76: {
        "cleanTitle": "Amazon RDS Part 2: Multi-AZ Synchronous Replication vs Read Replicas",
        "hindiSummary": "RDS ke do sabse important features: Multi-AZ Deployment (High Availability ke liye hota hai: doosre AZ me standby copy banti hai jo synchronous replicate hoti hai, failover automatic hota hai). Read Replicas (Performance scaling ke liye hota hai: read traffic offload karne ke liye up to 5 asynchronous copies banti hain, jise report generation ke liye use kiya jata hai).",
        "englishSummary": "Comprehensive architectural comparison of Amazon RDS Multi-AZ Deployments vs Amazon RDS Read Replicas. Contrasting synchronous replication vs asynchronous replication, high availability vs read scalability, automated DNS failover mechanics, and cross-region replica promotion.",
        "keyConcepts": [
            "RDS Multi-AZ (Disaster Recovery & High Availability):\n  - Synchronous physical block-level replication to a standby instance in a different Availability Zone.\n  - Standby instance is PASSIVE (cannot accept read or write queries).\n  - Automatic DNS failover occurs in 60-120 seconds if primary DB fails (no app code changes needed).\n  - Backups and maintenance are taken from the standby instance to prevent I/O freezes on primary.",
            "RDS Read Replicas (Performance & Read Scalability):\n  - Asynchronous replication from the primary DB engine.\n  - Replicas are ACTIVE for READ-ONLY queries (offloads read traffic from primary DB).\n  - Supports up to 5 Read Replicas per primary DB (can reside in same AZ, cross-AZ, or cross-Region).\n  - Can be promoted to an independent standalone read-write database."
        ],
        "examTips": "HIGH FREQUENCY EXAM COMPARISON: High Availability / Disaster Recovery -> Multi-AZ. Read Performance Scaling / Reporting Queries -> Read Replicas.",
        "architecture": "Multi-AZ: Primary DB (AZ-1a, Read/Write) === [Sync Replication] ===> Standby DB (AZ-1b, Passive Failover)\nRead Replicas: Primary DB (AZ-1a) === [Async Replication] ===> Read Replica 1 (Read Only), Read Replica 2 (Read Only)",
        "commandsOrSteps": [
            "aws rds modify-db-instance --db-instance-identifier mydb --multi-az --apply-immediately",
            "aws rds create-db-instance-read-replica --db-instance-identifier mydb-replica-1 --source-db-instance-identifier mydb"
        ],
        "interviewQuestions": "Q: Can your application run SQL SELECT queries against an Amazon RDS Multi-AZ standby instance?\nA: No. In standard RDS Multi-AZ, the standby instance is purely passive and does not accept client connections. To scale read queries, you must deploy Read Replicas."
    },
    77: {
        "cleanTitle": "Amazon RDS Part 3: Automated Backups, Manual Snapshots & Storage Autoscaling",
        "hindiSummary": "RDS me backup do tarah ke hote hain: Automated Backups (rozana full snapshot aur transaction logs save hote hain, 1 se 35 din retention, second-by-second Point-in-Time Recovery milta hai) aur Manual DB Snapshots (user dwara manual liye jate hain, jab tak delete na karo hamesha rehte hain). Storage Autoscaling storage bharne par automatically disk size badha deta hai.",
        "englishSummary": "Architectural mechanisms of Amazon RDS Automated Backups, Point-in-Time Recovery (PITR), Manual DB Snapshots, and Storage Auto-scaling. Disaster recovery retention rules and dynamic storage expansion up to 64 TiB without downtime.",
        "keyConcepts": [
            "Automated Backups: Daily full storage snapshot combined with 5-minute transaction log uploads to S3. Retention period: 1 to 35 days (default 7 days).",
            "Point-in-Time Recovery (PITR): Restores the database to any specific second within the retention window up to the last 5 minutes as a brand-new DB instance.",
            "Manual DB Snapshots: Initiated manually by the customer; retained indefinitely until explicitly deleted (even if the original DB instance is deleted).",
            "RDS Storage Auto-scaling: Automatically expands storage capacity up to a configured threshold when free disk space falls below 10% for at least 15 minutes, preventing `Disk Full` outages."
        ],
        "examTips": "If you delete an RDS instance, automated backups are deleted by default, but manual snapshots are PERMANENTLY RETAINED.",
        "architecture": "Live DB Transactions ---> 5-Min Log Backups to S3 ---> Point-in-Time Recovery restores to exact second as New Instance",
        "commandsOrSteps": [
            "aws rds create-db-snapshot --db-instance-identifier mydb --db-snapshot-identifier mydb-manual-snap-2026",
            "aws rds restore-db-instance-to-point-in-time --source-db-instance-identifier mydb --target-db-instance-identifier mydb-restored --restore-time 2026-09-20T10:00:00.000Z"
        ],
        "interviewQuestions": "Q: What is the maximum retention period for Amazon RDS automated backups, and what happens to automated backups when you delete the database instance?\nA: Maximum retention is 35 days. By default, deleting the RDS instance deletes all automated backups. However, AWS prompts you to take a final manual snapshot, which persists indefinitely."
    },
    78: {
        "cleanTitle": "Amazon RDS Part 4: Amazon Aurora Cloud-Native Database Architecture",
        "hindiSummary": "Amazon Aurora AWS ka banaya hua cloud-native relational database hai jo MySQL aur PostgreSQL se 100% compatible hai. MySQL se 5 guna aur PostgreSQL se 3 guna tez chalta hai. Iska storage layer compute se alag hota hai aur data ki 6 copies 3 Availability Zones me store hoti hain. Up to 15 Read Replicas aur Aurora Serverless support karta hai.",
        "englishSummary": "Architectural deep dive into Amazon Aurora. Cloud-native distributed database architecture decoupling compute from storage. Explaining the 6-way storage replication across 3 Availability Zones, quorum write/read models, up to 15 auto-scaling Read Replicas with sub-10ms replica lag, Aurora Serverless v2, and Aurora Global Database.",
        "keyConcepts": [
            "Performance: Delivers up to 5x throughput of standard MySQL and up to 3x throughput of standard PostgreSQL on identical hardware.",
            "Decoupled Shared Storage: Storage is distributed across a specialized multi-tenant storage fleet independent of compute nodes. Scales automatically in 10 GB increments up to 128 TiB.",
            "6 Copies Across 3 AZs: Aurora writes 6 copies of data across 3 Availability Zones (2 copies per AZ). Can tolerate losing an entire AZ + 1 additional copy without losing write availability.",
            "Aurora Read Replicas: Supports up to 15 Read Replicas sharing the same underlying storage volume (zero replication overhead, sub-10ms lag, auto-promoted to primary during failover in under 30 seconds).",
            "Aurora Global Database: Spans up to 5 secondary AWS Regions with cross-region replication latency under 1 second."
        ],
        "examTips": "CRITICAL EXAM ARCHITECTURE: Aurora writes 6 copies across 3 AZs. Write quorum requires 4/6 copies; Read quorum requires 3/6 copies.",
        "architecture": "Aurora Compute (Primary RW Node) === [Shared Storage Bus] ===> Distributed Storage Fleet [AZ-1 (2 Copies), AZ-2 (2 Copies), AZ-3 (2 Copies)]\nAurora Compute (Up to 15 Read Replicas) === [Reads directly from same Shared Storage Fleet]",
        "commandsOrSteps": [
            "aws rds describe-db-clusters --query 'DBClusters[*].[DBClusterIdentifier,Engine,Status,Endpoint,ReaderEndpoint]'"
        ],
        "interviewQuestions": "Q: Why is replication lag between an Amazon Aurora primary instance and its Read Replicas negligible (sub-10ms) compared to traditional RDS?\nA: Traditional RDS Read Replicas must replay complete SQL binlogs onto independent EBS disks. Aurora primary and read replicas share the same distributed underlying storage volume; replicas only read updated log records directly from shared storage."
    },
    79: {
        "cleanTitle": "AWS RDS Lab: Connecting to MySQL Instance from Linux EC2 via MySQL CLI",
        "hindiSummary": "RDS MySQL instance banane aur Linux EC2 server se connect karne ka practical: RDS instance private subnet me launch kiya, Security Group me MySQL port 3306 sirf EC2 server ke security group ke liye open kiya, Linux me `mysql-client` install kiya aur command line se database connect karke tables banaye.",
        "englishSummary": "Hands-on implementation of Amazon RDS MySQL. Provisioning a private RDS instance inside a DB Subnet Group, configuring Security Group rules allowing inbound TCP port 3306 strictly from the web server Security Group, installing MySQL client on Linux EC2, establishing database connections, and running SQL queries.",
        "keyConcepts": [
            "DB Subnet Group: Collection of subnets (at least 2 in different AZs) designated for RDS database deployment.",
            "Security Group Chaining: The RDS Security Group should allow inbound TCP port 3306 ONLY from the EC2 Security Group ID (`sg-web`), preventing any direct internet exposure.",
            "Database Endpoint: Connect using the RDS DNS endpoint (e.g. `mydb.c3xxxx.us-east-1.rds.amazonaws.com`), never hardcoding underlying IP addresses.",
            "Verifying connectivity with `mysql -h <endpoint> -u admin -p`."
        ],
        "examTips": "Security Best Practice: Never place RDS database instances in public subnets with public IPs. Always place RDS in private subnets and restrict port access to application security groups.",
        "architecture": "EC2 Web Server (sg-web) === [TCP Port 3306] ===> RDS Security Group (sg-rds: allows sg-web only) ===> MySQL Database",
        "commandsOrSteps": [
            "sudo yum install -y mysql",
            "mysql -h mydb.c3xxxx.us-east-1.rds.amazonaws.com -P 3306 -u admin -p",
            "CREATE DATABASE inventory; SHOW DATABASES;"
        ],
        "interviewQuestions": "Q: How do you configure network security so that only EC2 application instances can connect to an RDS database?\nA: In the RDS Security Group, add an inbound rule for database port (e.g. TCP 3306 for MySQL or 5432 for PostgreSQL) and set the Source to the Security Group ID of the EC2 instances (`sg-xxxx`), rejecting all other traffic."
    },
    80: {
        "cleanTitle": "AWS RDS Lab Part 2: Connecting to RDS MySQL from Windows Server via Workbench",
        "hindiSummary": "Windows Server se Amazon RDS MySQL database connect karna: Windows EC2 me MySQL Workbench aur HeidiSQL install kiya, RDS instance ka DNS endpoint, username aur password dalkar secure connection banaya, aur GUI tools ke zariye tables, schemas aur queries run karke dekhe.",
        "englishSummary": "Hands-on configuration connecting a Windows Server EC2 instance to Amazon RDS MySQL using graphical database administration tools (MySQL Workbench and HeidiSQL). Managing TCP port 3306 firewall rules, SSL certificate validation, and user connection strings.",
        "keyConcepts": [
            "Install MySQL Workbench or HeidiSQL GUI client on Windows EC2.",
            "Configure Connection: Hostname = RDS Endpoint Address, Port = 3306, Username = `admin`, Password.",
            "Enforce SSL/TLS: Download AWS Global RDS Certificate Authority (CA) bundle to ensure all database traffic across VPC subnets is encrypted in transit.",
            "Troubleshooting Connection Timeouts: Verify that the DB Subnet Group route tables and Security Group rules permit traffic from the Windows instance."
        ],
        "examTips": "To enforce SSL/TLS encryption on all connections to MySQL RDS: Set the parameter `require_secure_transport = ON` in the RDS Parameter Group.",
        "architecture": "Windows EC2 Instance (MySQL Workbench GUI) === [Encrypted TLS Port 3306] ===> Amazon RDS MySQL Database",
        "commandsOrSteps": [
            "Download MySQL Workbench MSI installer -> Connect to Host: mydb.xxxx.rds.amazonaws.com:3306 -> Test Connection."
        ],
        "interviewQuestions": "Q: What is the most common reason for a 'Connection Timed Out' error when connecting to an RDS instance from an EC2 instance in the same VPC?\nA: The RDS Security Group is not allowing inbound traffic on the database port (e.g. 3306) from the EC2 instance's Security Group, or the instances reside in different VPCs without VPC Peering."
    },
    81: {
        "cleanTitle": "Amazon DynamoDB Complete Theory: Partition Keys, RCU/WCU & DAX",
        "hindiSummary": "Amazon DynamoDB AWS ki fully managed NoSQL Key-Value database service hai jo single-digit millisecond latency deti hai kisi bhi scale par. Isme tables, items aur attributes hote hain. Primary Key do tarah ki hoti hai: Simple (Partition Key) ya Composite (Partition Key + Sort Key). DAX (DynamoDB Accelerator) in-memory cache se latency microseconds me convert ho jati hai.",
        "englishSummary": "Exhaustive architectural breakdown of Amazon DynamoDB. Deep dive into Table, Item, and Attribute data structures, Primary Keys (Partition Key vs Composite Partition + Sort Key), Read/Write Capacity Units (RCU and WCU), On-Demand vs Provisioned capacity modes, DynamoDB Accelerator (DAX), Global Tables, Streams, and Time To Live (TTL).",
        "keyConcepts": [
            "Single-Digit Millisecond Latency: Fast, predictable performance at any scale (from 10 requests to 10 million requests per second).",
            "Primary Key Types:\n  - Simple Primary Key: Partition Key (PK / Hash Key). Determines physical storage partition.\n  - Composite Primary Key: Partition Key + Sort Key (SK / Range Key). Stores items with same PK together sorted by SK.",
            "Capacity Modes:\n  - On-Demand Capacity: Pay-per-request. Automatically scales up/down instantly. Best for unpredictable or spiky traffic.\n  - Provisioned Capacity: Specify expected Read Capacity Units (RCU) and Write Capacity Units (WCU). Supports Auto Scaling. Best for predictable workloads.",
            "DynamoDB Accelerator (DAX): In-memory caching cluster delivering up to 10x performance boost (microsecond latency) for read-heavy workloads with zero application code rewrites.",
            "Global Tables: Fully managed multi-region, multi-active database replication with cross-region sync in under one second.",
            "Time To Live (TTL): Automatically expires and deletes old items after a specified Unix timestamp at zero cost."
        ],
        "examTips": "HIGH FREQUENCY EXAM QUESTIONS: Need microsecond latency for DynamoDB reads -> DynamoDB Accelerator (DAX). Multi-region active-active database replication -> DynamoDB Global Tables.",
        "architecture": "Client Request ---> DynamoDB Accelerator (DAX Cache: Microseconds) ---> DynamoDB Storage Partitions (SSD: Single-Digit Milliseconds)",
        "commandsOrSteps": [
            "aws dynamodb create-table --table-name Users --attribute-definitions AttributeName=UserId,AttributeType=S --key-schema AttributeName=UserId,KeyType=HASH --billing-mode PAY_PER_REQUEST"
        ],
        "interviewQuestions": "Q: What is the difference between a Scan operation and a Query operation in Amazon DynamoDB?\nA: A Query searches items using the Partition Key and optional Sort Key, making it extremely fast, efficient, and cost-effective. A Scan reads every single item in the entire table before filtering, which is slow, expensive, and consumes massive RCUs."
    },
    82: {
        "cleanTitle": "Amazon DynamoDB Hands-on Demo: Table Creation, Items, Query vs Scan",
        "hindiSummary": "DynamoDB ka live practical: Console me 'Customers' table banaya (Partition Key: CustomerID), items add kiye (har item me alag-alag columns/attributes daalkar schemaless nature dekha), aur Query tatha Scan operations run karke dono ke RCU consumption aur speed ka farq samjha.",
        "englishSummary": "Hands-on lab deploying and interacting with Amazon DynamoDB. Provisioning tables, populating items with heterogeneous schemaless JSON attributes, executing targeted Query operations against Partition Keys, running full-table Scans, and analyzing RCU metric consumption.",
        "keyConcepts": [
            "Provisioning Table with Primary Key `CustomerID` (String).",
            "Inserting heterogeneous items: Item 1 has `{CustomerID, Name, Email}`; Item 2 has `{CustomerID, Name, Phone, LoyaltyTier, Address}` (demonstrating schemaless design).",
            "Executing Query: Filtering on `CustomerID = 'CUST100'` -> Returns instantly consuming 0.5 RCU.",
            "Executing Scan: Reads all 50,000 items in table -> High latency, consumes huge RCU quota.",
            "Global Secondary Indexes (GSI): Created on non-key attributes to enable alternate queries without table scans."
        ],
        "examTips": "Best practice rule: ALWAYS design DynamoDB access patterns using Queries on Partition/Sort keys or Secondary Indexes. Avoid Scans in production applications.",
        "architecture": "Application Query (PK=CUST100) ---> Partition Hash Lookup ---> 1 Exact Item Returned (0.5 RCU)\nApplication Scan ---> Iterates ALL Partitions ---> 10,000 Items Scanned ---> Returns Filtered Result (Costly)",
        "commandsOrSteps": [
            "aws dynamodb put-item --table-name Customers --item '{\"CustomerID\": {\"S\": \"C101\"}, \"Name\": {\"S\": \"Rahul\"}}'",
            "aws dynamodb query --table-name Customers --key-condition-expression 'CustomerID = :v1' --expression-attribute-values '{\":v1\":{\"S\":\"C101\"}}'"
        ],
        "interviewQuestions": "Q: Why is running a DynamoDB Scan in a large production table considered an anti-pattern?\nA: A Scan sequentially examines every single item across all physical partitions in the table. In a multi-gigabyte table, a Scan exhausts provisioned read capacity (RCU), throttles legitimate user traffic, and incurs significant financial costs."
    },
    83: {
        "cleanTitle": "Amazon Route 53 Tutorial: Global DNS Hierarchy & Domain Management",
        "hindiSummary": "Amazon Route 53 AWS ki highly available aur scalable Domain Name System (DNS) service hai. Port 53 par DNS chalta hai isliye iska naam Route 53 hai. DNS domain name (jaise google.com) ko computer ke samajhne wale IP address (jaise 142.250.190.46) me convert karta hai.",
        "englishSummary": "Introduction to Amazon Route 53 and global Domain Name System (DNS) architecture. DNS resolution hierarchy (Root servers, TLD servers, Authoritative Name Servers), Domain Registrar services, and 100% SLA DNS uptime.",
        "keyConcepts": [
            "Port 53: DNS operates on TCP/UDP Port 53.",
            "DNS Hierarchy: 1. Root Level (`.`). 2. Top-Level Domain (TLD like `.com`, `.org`, `.in`). 3. Second-Level Domain (`amazon.com`). 4. Subdomain (`api.amazon.com`).",
            "Recursive DNS Resolver vs Authoritative Name Server: Resolvers query servers on behalf of clients; Authoritative servers hold the true DNS record mapping.",
            "Route 53 as Registrar and DNS Server: Register domain names directly in AWS and manage authoritative DNS records globally with 100% availability SLA."
        ],
        "examTips": "Amazon Route 53 provides a 100% Availability SLA, backed by globally distributed Anycast DNS name server clusters.",
        "architecture": "User Browser (example.com) ---> ISP DNS Resolver ---> Root Server (.) ---> TLD Server (.com) ---> Route 53 Name Server ---> Returns IP 54.210.1.1",
        "commandsOrSteps": [
            "dig example.com +trace # Trace full DNS resolution hierarchy from root servers to authoritative servers"
        ],
        "interviewQuestions": "Q: What is the purpose of an Authoritative DNS Name Server?\nA: An Authoritative Name Server is the definitive source that holds the actual DNS resource records (A, CNAME, MX) configured by the domain owner for a specific domain zone."
    },
    84: {
        "cleanTitle": "Amazon Route 53 Record Types: A, AAAA, CNAME vs ALIAS Records",
        "hindiSummary": "DNS Records ke types: A Record (Hostname ko IPv4 address me point karta hai), AAAA Record (IPv6 address ke liye), CNAME (Hostname ko doosre Hostname par point karta hai, root domain par allow nahi hota), aur ALIAS Record (AWS ka special smart record jo apex root domain `example.com` ko direct AWS resources jaise ALB, CloudFront, S3 par point kar sakta hai).",
        "englishSummary": "Deep architectural analysis of Route 53 DNS Record Types. Comprehensive comparison between standard DNS CNAME records and AWS-proprietary ALIAS records, IPv4 (A) records, IPv6 (AAAA) records, Mail Exchange (MX) records, and Time-To-Live (TTL) caching dynamics.",
        "keyConcepts": [
            "A Record: Maps hostname to an IPv4 address (e.g. `api.example.com -> 54.210.1.1`).",
            "AAAA Record: Maps hostname to an IPv6 address.",
            "CNAME Record: Maps hostname to another hostname (e.g. `www.example.com -> my-alb-123.amazonaws.com`). CANNOT be created for the Zone Apex (naked root domain `example.com`).",
            "ALIAS Record (AWS Specific):\n  - Extends standard DNS functionality. Can point directly to AWS resources (ALB, NLB, CloudFront distribution, S3 website, API Gateway).\n  - WORKS FOR ZONE APEX (e.g. `example.com` can point directly to an ALB!).\n  - Free of charge (DNS queries to Alias records for AWS resources incur no query charges).\n  - Automatically handles IP address changes of the underlying AWS resource.",
            "TTL (Time To Live): Duration client DNS caches retain the IP before querying the name server again."
        ],
        "examTips": "CRITICAL EXAM QUESTION: How to route apex root domain (`example.com` without www) to an Application Load Balancer? CNAME is invalid for zone apex! You MUST USE a Route 53 ALIAS Record.",
        "architecture": "Apex Domain: example.com === [Route 53 ALIAS Record] ===> Application Load Balancer (my-alb.amazonaws.com)\nSubdomain: www.example.com === [CNAME Record] ===> example.com",
        "commandsOrSteps": [
            "aws route53 change-resource-record-sets --hosted-zone-id Z12345 --change-batch file://alias-record.json"
        ],
        "interviewQuestions": "Q: Why can't you use a CNAME record to point your root domain (e.g. `company.com`) to an AWS Application Load Balancer, and what is the AWS solution?\nA: DNS RFC standards forbid creating a CNAME record at the Zone Apex (root domain) because it conflicts with mandatory SOA and NS records. The AWS solution is Route 53 ALIAS records, which operate like an A record for the root domain while dynamically tracking AWS resource endpoints."
    },
    85: {
        "cleanTitle": "Amazon Route 53 Hosted Zones: Public vs Private Hosted Zones",
        "hindiSummary": "Hosted Zone DNS records ka container hota hai. Public Hosted Zone internet par globally accessible hota hai (public domains ke liye). Private Hosted Zone aapke specific VPCs ke andar private rehta hai (internal microservices aur internal domain names jaise `db.internal.corp` ke liye jo internet se hide rehte hain).",
        "englishSummary": "Architectural breakdown of Amazon Route 53 Hosted Zones. Detailed comparison between Public Hosted Zones (authoritative for global public internet routing) and Private Hosted Zones (associated with one or more VPCs for private internal corporate DNS resolution).",
        "keyConcepts": [
            "Hosted Zone: Container holding DNS resource records for a domain name managed by Route 53 ($0.50/month per hosted zone).",
            "Public Hosted Zone: Resolves queries originating from the public internet. Accessible worldwide.",
            "Private Hosted Zone: Associated with specific VPCs in one or more AWS accounts. Queries are resolved ONLY by instances inside those associated VPCs.",
            "Cross-Account Private Hosted Zone: A private hosted zone in Account A can be associated with VPCs in Account B via VPC association authorizations.",
            "Split-Horizon DNS: Hosting both a Public and Private zone with the exact same domain name (internal users get private IPs; external users get public IPs)."
        ],
        "examTips": "To enable Private Hosted Zones, the associated VPC MUST have `enableDnsHostnames` and `enableDnsSupport` set to `true`.",
        "architecture": "Internet User ---> Queries Public Hosted Zone ---> Returns Public IP (54.210.1.1)\nEC2 in VPC A ---> Queries Private Hosted Zone (internal.corp) ---> Returns Private IP (10.0.2.50)",
        "commandsOrSteps": [
            "aws route53 create-hosted-zone --name dev.internal --vpc VPCRegion=us-east-1,VPCId=vpc-xxxx --caller-reference 20260901"
        ],
        "interviewQuestions": "Q: What is Split-Horizon DNS and how is it implemented in AWS Route 53?\nA: Split-Horizon DNS uses both a Public and a Private Hosted Zone with the exact same domain name (e.g. `example.com`). Internal VPC clients resolve the domain to internal private IP addresses, while public internet users resolve to external public IP addresses."
    },
    86: {
        "cleanTitle": "Amazon Route 53 DNS Health Checks & Automated Failover",
        "hindiSummary": "Route 53 Health Checks aapke application servers ko monitor karte hain (HTTP/HTTPS/TCP probes). Agar primary server down hota hai to Route 53 automatic DNS failover trigger karke user traffic ko standby disaster recovery server par redirect kar deta hai.",
        "englishSummary": "Configuration and mechanics of Amazon Route 53 Health Checks and DNS Failover. Setting up automated application endpoint probes, CloudWatch metric integration, calculated health checks, and active-passive disaster recovery failover.",
        "keyConcepts": [
            "Health Check Probers: Globally distributed Route 53 health checkers (over 15 global locations) probe your endpoint every 30s (or 10s for fast checks).",
            "Endpoint Considered Unhealthy: When a configurable threshold (e.g. 3 consecutive probes) fails HTTP 2xx/3xx response codes or TCP handshake.",
            "Calculated Health Checks: Monitors up to 256 child health checks and triggers failover based on boolean logic (e.g. failover if 3 out of 5 microservices fail).",
            "DNS Failover Routing: Works with Active-Passive Failover routing policy. Primary record returns healthy IP; if primary health check fails, Route 53 automatically returns Secondary backup IP."
        ],
        "examTips": "DNS Failover requires Route 53 Health Checks. Note: If an endpoint is behind a private subnet, Route 53 health checkers CANNOT reach it unless monitored via CloudWatch metric alarms.",
        "architecture": "Route 53 Probers === [HTTP Health Check: /health] ===> Primary Server (Healthy)\nIf Primary Fails ---> Route 53 flips DNS answer to Secondary Disaster Recovery Server",
        "commandsOrSteps": [
            "aws route53 create-health-check --caller-reference hc01 --health-check-config IPAddress=54.210.1.1,Port=80,Type=HTTP,ResourcePath=/health"
        ],
        "interviewQuestions": "Q: How does Amazon Route 53 monitor the health of an endpoint located inside a private VPC subnet?\nA: Route 53 external probers cannot reach private IP addresses. You must create a CloudWatch Alarm based on internal metrics (e.g. EC2 StatusCheckFailed or custom metric) and configure a Route 53 Health Check based on that CloudWatch Alarm."
    },
    87: {
        "cleanTitle": "Amazon Route 53 Routing Policies: 7 Routing Strategies Deep Dive",
        "hindiSummary": "Route 53 ki 7 routing policies: 1. Simple (single resource ya round robin). 2. Weighted (percentage based traffic split jaise 80% v1, 20% v2). 3. Latency (user ko sabse kam latency wale region me bhejta hai). 4. Failover (Active-Passive disaster recovery). 5. Geolocation (user ki country/continent ke hisab se). 6. Geoproximity (geographic location + bias). 7. Multi-Value Answer (multiple healthy IPs with health check).",
        "englishSummary": "Comprehensive architectural guide to all 7 Amazon Route 53 Routing Policies: Simple, Weighted, Latency-Based, Failover, Geolocation, Geoproximity (Traffic Flow), and Multi-Value Answer. Decision criteria and production disaster recovery design.",
        "keyConcepts": [
            "Simple Routing: Default policy. Routes traffic to a single resource or returns multiple values randomly for client round-robin. Does NOT support health checks.",
            "Weighted Routing: Distributes traffic based on assigned weights/percentages (e.g., 90% traffic to production app, 10% traffic to canary test app).",
            "Latency-Based Routing: Routes user requests to the AWS Region that provides the lowest network latency for that specific user.",
            "Failover Routing: Active-Passive disaster recovery. Routes traffic to primary resource when healthy, automatically switches to secondary backup when primary fails.",
            "Geolocation Routing: Routes traffic based on the geographic location of the user (by Continent, Country, or US State). Ideal for content localization, language, and licensing laws.",
            "Geoproximity Routing: Routes traffic based on geographic distance between user and resources, with a 'Bias' value (-99 to +99) to expand or shrink regional catchment areas. Requires Route 53 Traffic Flow.",
            "Multi-Value Answer Routing: Returns up to 8 healthy IP records in response to a query with DNS health check filtering (improves availability without full load balancer)."
        ],
        "examTips": "EXAM SCENARIOS:\n- Canary deployment testing (10% to new version) -> Weighted Routing.\n- Route users based on minimum ping time -> Latency-Based Routing.\n- Route European users to EU servers for GDPR compliance -> Geolocation Routing.\n- Active-Passive DR -> Failover Routing.",
        "architecture": "US User ---> Route 53 (Latency Policy) ---> US-East Region (Lowest Latency: 15ms)\nIndia User ---> Route 53 (Latency Policy) ---> AP-South Region (Lowest Latency: 20ms)",
        "commandsOrSteps": [
            "Review Route 53 Traffic Flow visual editor for visual routing policy creation."
        ],
        "interviewQuestions": "Q: What is the difference between Route 53 Geolocation Routing and Geoproximity Routing?\nA: Geolocation routes strictly based on the user's location (e.g. all users in France go to Paris region). Geoproximity routes based on geographic distance from AWS resource coordinates and allows biasing (expanding or shrinking the boundary around a data center)."
    },
    88: {
        "cleanTitle": "Amazon Route 53 Hands-on Lab: Configuring Records & Weighted Routing",
        "hindiSummary": "Route 53 ka live practical lab: Hosted Zone me alag-alag records banaye, Weighted Routing policy configure ki (70% weight server A ko aur 30% weight server B ko), browser aur command line se multiple requests bhej kar traffic split verify kiya.",
        "englishSummary": "Hands-on lab deploying Route 53 routing policies. Creating Hosted Zones, provisioning multiple web endpoints across different EC2 instances, setting up Weighted Routing policy records, simulating canary releases, and testing DNS resolution distributions using `dig` and `nslookup`.",
        "keyConcepts": [
            "Create Hosted Zone for domain name.",
            "Create Record 1: Name `app.example.com`, Type `A`, Weight `70`, Target `54.210.1.1`.",
            "Create Record 2: Name `app.example.com`, Type `A`, Weight `30`, Target `54.210.2.2`.",
            "Calculating Percentages: Weight A / (Weight A + Weight B) = 70 / 100 = 70% of traffic.",
            "DNS Caching Impact: Keep TTL low (e.g. 60 seconds) during canary testing so changes take effect rapidly on client resolvers."
        ],
        "examTips": "During DNS testing, if you receive the same IP repeatedly, check DNS TTL caching on your local resolver or test with `dig @8.8.8.8 domain`.",
        "architecture": "Route 53 Hosted Zone: app.example.com\n  ├── Weight 70 ===> Production Server A (v1.0)\n  └── Weight 30 ===> Canary Server B (v2.0)",
        "commandsOrSteps": [
            "for i in {1..10}; do dig +short app.example.com; done # Verify DNS response distribution"
        ],
        "interviewQuestions": "Q: Why is it critical to set a low TTL (Time To Live) on DNS records when performing canary deployments with Weighted Routing?\nA: A high TTL causes client recursive resolvers to cache the DNS answer for hours or days. A low TTL (e.g. 30-60 seconds) ensures clients re-query Route 53 frequently, honoring the weighted traffic distribution."
    },
    89: {
        "cleanTitle": "Amazon CloudFront Overview: Global Content Delivery Network (CDN)",
        "hindiSummary": "Amazon CloudFront AWS ki Content Delivery Network (CDN) service hai. Yeh static aur dynamic content (HTML, images, videos, APIs) ko duniya bhar ke 500+ Edge Locations par cache karta hai. Jab user request karta hai to use nazdeeki Edge Location se content milta hai, jisse website super fast load hoti hai.",
        "englishSummary": "Introduction to Amazon CloudFront. Architecture of a globally distributed Content Delivery Network (CDN). How CloudFront drastically reduces latency and Time-To-First-Byte (TTFB) by caching web assets across 500+ Points of Presence (Edge Locations) and Regional Edge Caches worldwide.",
        "keyConcepts": [
            "Edge Locations: Globally distributed Points of Presence (PoPs) located in major cities worldwide that cache content close to end users.",
            "Regional Edge Caches: Larger regional caching layers positioned between Edge Locations and the Origin server to absorb cache misses.",
            "Origins: The source of truth for your content. Supported origins: Amazon S3 buckets, Application Load Balancers, EC2 instances, or any custom HTTP web server.",
            "Security & DDoS Protection: Built-in integration with AWS Shield Standard (automatic DDoS protection at edge) and AWS WAF (Web Application Firewall).",
            "SSL/TLS at the Edge: Terminate HTTPS connections close to the user with free certificates from AWS Certificate Manager (ACM)."
        ],
        "examTips": "To attach a custom SSL certificate to a CloudFront distribution, the certificate MUST be issued or imported in the `us-east-1` (N. Virginia) AWS Region!",
        "architecture": "User (Tokyo) === [Low Latency: 5ms] ===> Tokyo Edge Location (Cache Hit!) ---> Immediate Response\n                                         \\___ [Cache Miss] ---> Regional Cache ---> S3 Origin (us-east-1)",
        "commandsOrSteps": [
            "aws cloudfront list-distributions --query 'DistributionList.Items[*].[Id,DomainName,Status]'"
        ],
        "interviewQuestions": "Q: What happens when an end-user requests a file through Amazon CloudFront and the file is not currently cached at the local Edge Location?\nA: CloudFront forwards the request to the Regional Edge Cache. If not found there, it fetches the file from the Origin server (e.g. S3), caches a copy at the Edge Location for future requests, and delivers the file to the user."
    },
    90: {
        "cleanTitle": "Amazon CloudFront Part 2: TTL, Cache Invalidation & Origin Access Control",
        "hindiSummary": "CloudFront caching mechanics: TTL (Time To Live) decide karta hai ki file kitni der cache rahegi. Agar aapne website update ki aur turant sabhi users ko naya version dikhana hai to 'Cache Invalidation' (`/*`) chalaya jata hai. S3 bucket ko private rakhne aur sirf CloudFront ke through access dene ke liye OAC (Origin Access Control) use hota hai.",
        "englishSummary": "Advanced CloudFront configuration: Time-To-Live (Minimum TTL, Maximum TTL, Default TTL), Cache Invalidation operations, and securing Amazon S3 origins using modern Origin Access Control (OAC) to completely block public direct S3 access.",
        "keyConcepts": [
            "TTL Mechanics: Governed by HTTP response headers (`Cache-Control: max-age`, `Expires`) or CloudFront Cache Policies (Default 24 hours).",
            "Cache Invalidation: Purges cached files from all edge locations immediately before TTL expires (e.g. `/*` to invalidate entire distribution, or `/images/*`). First 1,000 invalidation paths per month are free.",
            "Origin Access Control (OAC): Replaced legacy Origin Access Identity (OAI). Securely authorizes CloudFront to read from private S3 buckets using AWS SigV4, keeping the S3 bucket 100% private.",
            "Signed URLs & Signed Cookies: Restrict access to premium paid content, digital downloads, or private video streaming."
        ],
        "examTips": "CRITICAL SECURITY SCENARIO: How to ensure users can ONLY access S3 content via CloudFront and NOT via direct S3 URLs? Answer: Configure Origin Access Control (OAC) on CloudFront and attach an S3 bucket policy allowing only the CloudFront distribution principal.",
        "architecture": "Internet User === [HTTPS] ===> CloudFront Edge === [OAC: AWS SigV4 Auth] ===> Private S3 Bucket (Block Public Access ON)",
        "commandsOrSteps": [
            "aws cloudfront create-invalidation --distribution-id E12345 --paths '/*'",
            "aws cloudfront get-invalidation --distribution-id E12345 --id I12345"
        ],
        "interviewQuestions": "Q: What is Origin Access Control (OAC) in CloudFront and why did it replace OAI?\nA: OAC restricts direct public access to S3 buckets, forcing all traffic through CloudFront. OAC replaced legacy OAI because it supports modern AWS Signature Version 4 (SigV4), all S3 buckets in all regions, SSE-KMS encryption, and dynamic PUT/DELETE requests."
    },
    91: {
        "cleanTitle": "Amazon CloudFront Hands-on Demo: Accelerating S3 Website with Free SSL",
        "hindiSummary": "CloudFront ka live practical lab: S3 bucket me static website banayi, use private rakha, CloudFront Distribution banaya, Origin Access Control (OAC) lagakar S3 bucket policy update ki, aur CloudFront ke HTTPS domain (`https://d12345.cloudfront.net`) par website securely host karke dikhaya.",
        "englishSummary": "Hands-on lab deploying Amazon CloudFront with an Amazon S3 origin. Configuring Origin Access Control (OAC), modifying S3 bucket policy to allow CloudFront principal access, enabling HTTP to HTTPS redirection, and verifying global edge caching and latency reductions.",
        "keyConcepts": [
            "Create S3 bucket with 'Block all public access' kept ON.",
            "Create CloudFront Distribution targeting the S3 bucket origin domain.",
            "Select 'Origin access control settings' -> Create control setting.",
            "Copy generated S3 Bucket Policy into S3 permissions tab granting `s3:GetObject` with condition `StringEquals: {\"AWS:SourceArn\": \"arn:aws:cloudfront::...\"}`.",
            "Verify: Direct S3 URL gives 403 Forbidden; CloudFront HTTPS URL serves webpage instantly."
        ],
        "examTips": "Remember: The S3 origin in CloudFront can be configured either as an S3 REST API endpoint (for OAC private access) or as an S3 Static Website endpoint (for website redirects/error documents).",
        "architecture": "Public Client === [HTTPS 443] ===> CloudFront Edge Location ---> OAC Validated ---> Private S3 Bucket",
        "commandsOrSteps": [
            "curl -I https://d111111abcdef8.cloudfront.net # Inspect X-Cache: Hit from cloudfront"
        ],
        "interviewQuestions": "Q: How do you verify whether a response served by Amazon CloudFront was a Cache Hit or a Cache Miss?\nA: Inspect the HTTP response headers in the browser or via curl. The `X-Cache` header will show `Hit from cloudfront` if served from the edge cache, or `Miss from cloudfront` if fetched from the origin."
    },
    92: {
        "cleanTitle": "AWS Simple Queue Service (SQS) Part 1: Decoupled Architectures & Fundamentals",
        "hindiSummary": "Amazon SQS (Simple Queue Service) AWS ki pehli distributed message queuing service hai. Yeh applications ko Decouple (alag-alag) karne ke kaam aati hai. Producer queue me messages bhejta hai aur Consumer apni speed se messages process karta hai, jisse system traffic spike me bhi crash nahi hota.",
        "englishSummary": "Introduction to Amazon Simple Queue Service (SQS). Architectural principles of asynchronous message queuing, decoupled systems, producer-consumer models, eliminating tight coupling bottlenecks, and horizontal queue buffering.",
        "keyConcepts": [
            "Tightly Coupled vs Loosely Coupled: Tightly coupled systems fail completely if one component crashes; loosely coupled systems use message queues as buffers so downstream components process at their own pace.",
            "Producer-Consumer Model: Producers send messages to the SQS queue; Consumers (EC2, ECS, Lambda) poll the queue, process messages, and delete them.",
            "Message Retention: Messages can be retained in the queue from 1 minute up to 14 days (Default is 4 days).",
            "Message Size Limit: Maximum 256 KB of text payload per message. For payloads larger than 256 KB (up to 2 GB), use the Amazon SQS Extended Client Library for Java which stores data in Amazon S3.",
            "Unlimited Throughput: SQS Standard Queues offer nearly unlimited transactions per second."
        ],
        "examTips": "EXAM ARCHITECTURE PATTERN: A frontend web app receives sudden bursts of order submissions that overwhelm a backend database. Solution: Decouple the frontend and backend using an Amazon SQS queue.",
        "architecture": "Web Tier (Producers) === [Sends Order Messages] ===> Amazon SQS Queue === [Polls & Processes] ===> Worker Tier (Consumers)",
        "commandsOrSteps": [
            "aws sqs create-queue --queue-name OrdersQueue",
            "aws sqs send-message --queue-url https://sqs.us-east-1.amazonaws.com/123/OrdersQueue --message-body 'Order #1001'"
        ],
        "interviewQuestions": "Q: What is the maximum message size supported by Amazon SQS and how can you send larger payloads?\nA: The maximum native SQS message size is 256 KB. To send larger payloads (up to 2 GB), use the Amazon SQS Extended Client Library, which uploads the large file to Amazon S3 and places a reference pointer in the SQS message."
    },
    93: {
        "cleanTitle": "AWS SQS Part 2: Standard Queues vs FIFO Queues Comparison",
        "hindiSummary": "SQS ke do prakar: Standard Queue (unlimited throughput, at-least-once delivery jisme kabhi-kabhi duplicate message aa sakta hai, best-effort ordering) aur FIFO Queue (First-In-First-Out: strictly jis order me message aaya usi order me process hoga, exactly-once processing, 300 msg/sec ya batching me 3000 msg/sec).",
        "englishSummary": "In-depth comparison between Amazon SQS Standard Queues and SQS FIFO (First-In, First-Out) Queues. Analyzing throughput differences, ordering guarantees, message deduplication IDs, message group IDs, and financial application use cases.",
        "keyConcepts": [
            "Standard Queues:\n  - Unlimited throughput (nearly infinite API actions per second).\n  - At-Least-Once Delivery: Occasionally, duplicate copies of a message might be delivered.\n  - Best-Effort Ordering: Messages may occasionally be delivered in a different order than sent.\n  - Best for: General decoupling where duplicate handling or out-of-order processing is acceptable.",
            "FIFO Queues:\n  - Strictly First-In-First-Out ordering guaranteed.\n  - Exactly-Once Processing: Deduplication eliminates duplicate messages.\n  - Limited Throughput: 300 messages per second (or 3,000 msg/sec with batching); High Throughput FIFO mode scales up to 70,000 msg/sec.\n  - Name Requirement: Queue name MUST end with the `.fifo` suffix (e.g. `Orders.fifo`).\n  - Message Group ID: Groups related messages to preserve strict order per customer or account.",
            "Message Deduplication ID: 128-character unique hash used by SQS to discard duplicate messages within a 5-minute deduplication window."
        ],
        "examTips": "CRITICAL EXAM CUE: If an exam question mentions 'order must be strictly preserved' or 'no duplicate messages allowed' (e.g. bank transactions, stock trades) -> Choose SQS FIFO Queue.",
        "architecture": "Standard Queue: Unlimited Speed | Best-Effort Order | At-Least-Once Delivery\nFIFO Queue (.fifo): Exactly-Once Processing | Strict FIFO Order | Message Group ID Sequencing",
        "commandsOrSteps": [
            "aws sqs create-queue --queue-name BankingTransactions.fifo --attributes FifoQueue=true,ContentBasedDeduplication=true"
        ],
        "interviewQuestions": "Q: What is the purpose of the Message Group ID in an Amazon SQS FIFO queue?\nA: The Message Group ID tags messages belonging to a specific customer or session. SQS guarantees that messages with the same Message Group ID are processed in strict sequential order one by one, while messages with different Group IDs can be processed in parallel."
    },
    94: {
        "cleanTitle": "AWS SQS Part 3: Visibility Timeout, Dead Letter Queues (DLQ) & Long Polling",
        "hindiSummary": "SQS ke 3 sabse crucial features: 1. Visibility Timeout (jab consumer message uthata hai to message doosre consumers se chhip jata hai taaki do log same kaam na karein, default 30s). 2. Dead Letter Queue (DLQ: agar koi corrupted message bar-bar fail ho to use alag DLQ me bhej diya jata hai). 3. Long Polling (consumer queue me message aane ka 20 seconds tak wait karta hai, jisse empty responses aur billing cost 90% kam ho jati hai).",
        "englishSummary": "Architectural mastery of SQS operational mechanics: Visibility Timeout, In-Flight Messages, Dead Letter Queues (DLQ) with Redrive Policies, and Short Polling vs Long Polling (`WaitTimeSeconds`).",
        "keyConcepts": [
            "Visibility Timeout: The period of time (default 30 seconds, max 12 hours) during which SQS prevents other consumers from receiving and processing the message. If the consumer fails to delete the message before the timeout expires, the message becomes visible again.",
            "`ChangeMessageVisibility` API: If processing takes longer than expected, the consumer can call this API to extend its processing window.",
            "Dead Letter Queue (DLQ): A secondary queue where messages that fail processing multiple times (`maxReceiveCount` e.g. 5 times) are automatically routed for developer debugging.",
            "Short Polling vs Long Polling:\n  - Short Polling (`WaitTimeSeconds = 0`): Returns immediately even if the queue is empty. Results in high empty response counts and higher API costs.\n  - Long Polling (`WaitTimeSeconds = 1 to 20`): Waits up to 20 seconds for messages to arrive before returning. Drastically cuts costs and delivers messages instantly."
        ],
        "examTips": "A message is being processed by multiple consumers simultaneously. Why? Visibility Timeout is too short! Extend the Visibility Timeout so the consumer has enough time to finish and delete the message.",
        "architecture": "Consumer receives Message ---> Visibility Timeout (30s: Invisible to Others) ---> If Fails 5 Times ---> Routed to Dead Letter Queue (DLQ)",
        "commandsOrSteps": [
            "aws sqs change-message-visibility --queue-url <url> --receipt-handle <handle> --visibility-timeout 120",
            "aws sqs receive-message --queue-url <url> --wait-time-seconds 20 # Long Polling"
        ],
        "interviewQuestions": "Q: Why is Long Polling strongly recommended over Short Polling for Amazon SQS?\nA: Long Polling waits up to 20 seconds for a message to enter the queue before returning an empty response, significantly reducing empty receives, lowering AWS API request charges, and decreasing message retrieval latency."
    },
    95: {
        "cleanTitle": "AWS SQS Hands-on Lab: Queue Creation, Message Flow & Lambda Triggers",
        "hindiSummary": "SQS ka live practical lab: SQS Standard Queue banayi, message send karke dekha, Visibility Timeout test kiya, aur SQS queue ko AWS Lambda function ke sath connect kiya. Jaise hi queue me naya message aaya, Lambda function automatically trigger hokar message process karke queue se delete kar diya.",
        "englishSummary": "Hands-on implementation of Amazon SQS integrated with AWS Lambda. Creating queues, configuring Dead Letter Queues, sending JSON test messages, polling messages, and deploying an event-source mapping that triggers an AWS Lambda serverless consumer to process and automatically delete messages.",
        "keyConcepts": [
            "Create SQS Queue (`orders-queue`) with default Visibility Timeout 30s.",
            "Send message with JSON body: `{\"orderId\": \"ORD99\", \"amount\": 250}`.",
            "Lambda Event Source Mapping: AWS Lambda polls SQS in batches (e.g. batch size 10) using long polling.",
            "Automatic Message Deletion: When Lambda completes its execution successfully without errors, Lambda automatically deletes the processed messages from SQS.",
            "DLQ Redrive: If Lambda throws an exception across `maxReceiveCount` retries, SQS automatically moves the problematic message to the DLQ."
        ],
        "examTips": "When using SQS as an event source for Lambda: Ensure the SQS Visibility Timeout is set to at least 6 times the Lambda function's timeout.",
        "architecture": "Producer ---> SQS Queue === [Event Source Mapping: Batch Size 10] ===> AWS Lambda Consumer ---> Auto-Deletes on Success",
        "commandsOrSteps": [
            "aws lambda create-event-source-mapping --function-name ProcessOrder --batch-size 10 --event-source-arn arn:aws:sqs:us-east-1:123:orders-queue"
        ],
        "interviewQuestions": "Q: What rule must you follow regarding SQS Visibility Timeout when integrating an SQS queue with an AWS Lambda function?\nA: The SQS queue's Visibility Timeout must be configured to at least 6 times the timeout of the Lambda function. This gives the Lambda service enough time to retry or complete processing before SQS re-exposes the message to another execution."
    },
    96: {
        "cleanTitle": "AWS Simple Notification Service (SNS) Complete Theory: Pub/Sub & Fan-Out",
        "hindiSummary": "Amazon SNS (Simple Notification Service) AWS ki Publish/Subscribe (Pub/Sub) messaging service hai. Ek Publisher 'Topic' par message bhejta hai aur us Topic ke sabhi Subscribers (Email, SMS, SQS queues, Lambda functions, HTTP webhooks) ko message turant mil jata hai. SNS + SQS ko milakar 'Fan-Out' architecture banta hai.",
        "englishSummary": "Exhaustive architectural breakdown of Amazon Simple Notification Service (SNS). Principles of Publish/Subscribe (Pub/Sub) messaging, Topics, Subscribers, Message Filtering, Message Deduplication, and the legendary SNS + SQS Fan-Out architectural design pattern.",
        "keyConcepts": [
            "Pub/Sub Architecture: One-to-Many broadcast communication. Publishers send messages to an SNS Topic; all subscribed endpoints receive a copy.",
            "Supported Subscriber Protocols: Amazon SQS Queues, AWS Lambda Functions, HTTP/HTTPS webhooks, Email/Email-JSON, SMS text messages, Mobile Push Notifications (APNs, FCM).",
            "Fan-Out Architecture (SNS + SQS): A publisher sends an order message to a single SNS Topic. Three independent SQS queues (Billing Queue, Shipping Queue, Analytics Queue) are subscribed to the topic. Each queue receives an exact copy of the message, allowing independent worker pools to process concurrently without contention.",
            "Message Filtering: Subscribers define JSON filter policies so they receive only messages with specific attributes (e.g. only orders where `country: 'India'`).",
            "SNS FIFO Topics: Strictly ordered, deduplicated pub/sub messaging paired with SQS FIFO queues."
        ],
        "examTips": "EXAM SCENARIO: 'An order event must be processed by 3 different microservices simultaneously without dropping messages'. Solution: Publish event to an Amazon SNS Topic, which fans out to 3 separate Amazon SQS Queues!",
        "architecture": "Order Service ---> Amazon SNS Topic [OrdersTopic]\n                    ├── SQS Queue: Billing Service (Processes Payment)\n                    ├── SQS Queue: Inventory Service (Updates Stock)\n                    └── SQS Queue: Analytics Service (Data Lake)",
        "commandsOrSteps": [
            "aws sns create-topic --name OrdersTopic",
            "aws sns subscribe --topic-arn <topic-arn> --protocol sqs --notification-endpoint <sqs-arn>",
            "aws sns publish --topic-arn <topic-arn> --message 'Order #2026 Placed'"
        ],
        "interviewQuestions": "Q: What is the AWS Fan-Out architectural pattern and why is it used?\nA: In Fan-Out, an SNS message is replicated across multiple SQS queues subscribed to that topic. This decouples producer systems from consumer systems, allowing parallel, independent, and fault-tolerant processing of the same event by different microservices."
    },
    97: {
        "cleanTitle": "AWS SNS Hands-on Demo: Topic Creation, Email/SQS Subscriptions & CloudWatch Alarms",
        "hindiSummary": "SNS ka live practical: SNS Topic banaya, Email aur SQS queue ko subscribe kiya, Email confirmation approve kiya, aur Topic par message publish karke dekha to turant email inbox aur SQS queue dono me message aa gaya. Iske baad CloudWatch Alarm ko SNS se joda taaki CPU high hone par automated alert mile.",
        "englishSummary": "Hands-on implementation of Amazon SNS. Provisioning standard topics, subscribing email endpoints, subscribing SQS queues with SQS Access Policy permissions, confirming subscription links, publishing test messages, and integrating with Amazon CloudWatch Alarms for automated infrastructure alerting.",
        "keyConcepts": [
            "Topic Provisioning: Creating `SystemAlerts` topic.",
            "Subscription Confirmation: Email and HTTP subscriptions require clicking a confirmation token link before receiving messages.",
            "SQS Access Policy: The SQS queue must have a resource policy granting `sns.amazonaws.com` permission to call `sqs:SendMessage` for that topic ARN.",
            "CloudWatch Alarm Integration: Configure CloudWatch Alarms (e.g. EC2 CPU > 80%) to publish to the SNS Topic automatically during metric alarms.",
            "Raw Message Delivery: Bypasses SNS JSON metadata envelope and delivers the raw string directly to SQS or HTTP endpoints."
        ],
        "examTips": "If an SQS queue subscribed to an SNS topic is not receiving messages, check the SQS Queue Access Policy! It must explicitly allow `SendMessage` from the SNS Topic ARN.",
        "architecture": "CloudWatch Alarm (CPU > 80%) === [Triggers Notification] ===> SNS Topic ===> Sends Email to SysAdmin & Message to SQS Automation Queue",
        "commandsOrSteps": [
            "aws sns subscribe --topic-arn <arn> --protocol email --notification-endpoint admin@example.com",
            "aws cloudwatch put-metric-alarm --alarm-name HighCPU --metric-name CPUUtilization --namespace AWS/EC2 --statistic Average --period 300 --threshold 80 --comparison-operator GreaterThanThreshold --alarm-actions <sns-arn>"
        ],
        "interviewQuestions": "Q: Why is an SQS Queue Access Policy required when subscribing an SQS queue to an Amazon SNS topic?\nA: By default, SQS queues deny all external senders. An explicit SQS resource policy statement granting `sqs:SendMessage` with a condition matching the `aws:SourceArn` of the SNS Topic is required to allow SNS to write to the queue."
    },
    98: {
        "cleanTitle": "Configuring NAT Instance for Private Subnets & NAT Gateway vs NAT Instance",
        "hindiSummary": "Private subnet ko internet access dene ke do tareeqe: NAT Gateway (AWS managed, 45 Gbps scale, multi-AZ, maintenance-free, recommended) aur NAT Instance (self-managed EC2 instance jisme Source/Destination Check DISABLE karna padta hai aur iptables configure karni padti hai, single point of failure).",
        "englishSummary": "Architectural comparison and configuration of AWS NAT Instances vs AWS NAT Gateways. Detailed guide on deploying an EC2 NAT instance using the Amazon Linux NAT AMI, disabling Source/Destination Checks on the network interface, configuring iptables IP masquerading, and why managed NAT Gateway is the modern AWS standard.",
        "keyConcepts": [
            "NAT Instance Architecture: An Amazon Linux EC2 instance running in a public subnet configured as an IP forwarding router.",
            "CRITICAL NAT INSTANCE REQUIREMENT: You MUST disable 'Source/Destination Check' on the NAT instance's Elastic Network Interface (ENI), otherwise the EC2 hypervisor drops packets intended for other IP addresses.",
            "NAT Instance Limitations: Single point of failure (no built-in HA), limited bandwidth based on EC2 instance size, requires manual OS patching and security updates.",
            "NAT Gateway Advantages: AWS managed service, built-in redundancy within the AZ, scales automatically up to 45 Gbps, no OS maintenance, supports Elastic IPs natively."
        ],
        "examTips": "CRITICAL EXAM QUESTION: You launched a NAT instance on EC2, configured route tables, but private instances still cannot reach the internet. What did you forget? You forgot to DISABLE the EC2 Source/Destination Check!",
        "architecture": "Private EC2 ---> Route Table (0.0.0.0/0) ---> NAT Instance (Source/Dest Check: DISABLED) ---> Internet Gateway ---> Internet",
        "commandsOrSteps": [
            "aws ec2 modify-instance-attribute --instance-id i-nat-instance --source-dest-check '{\"Value\": false}'",
            "sudo sysctl -w net.ipv4.ip_forward=1",
            "sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE"
        ],
        "interviewQuestions": "Q: Why must you disable the 'Source/Destination Check' attribute on an EC2 NAT Instance?\nA: By default, an EC2 instance verifies that it is the source or destination of any network traffic it sends or receives. Because a NAT instance routes traffic for other private instances, the Source/Destination check must be disabled so the instance can forward packets with third-party IPs."
    },
    99: {
        "cleanTitle": "AWS Site-to-Site VPN Real-Time Production Implementation & Routing",
        "hindiSummary": "Production level AWS Site-to-Site VPN setup: On-premises data center router aur AWS VPC ke bich IPsec VPN tunnel banana. Virtual Private Gateway (VGW) VPC me lagaya, Customer Gateway (CGW) me on-premises public IP daala, IPsec Phase 1 aur Phase 2 parameters match kiye aur BGP dynamic routing se private connectivity establish ki.",
        "englishSummary": "Real-time production implementation of AWS Site-to-Site VPN. Establishing hardware-encrypted IPsec VPN tunnels between corporate on-premises edge routers and an AWS Virtual Private Gateway (VGW). Deep dive into Customer Gateway (CGW) definitions, IPsec Phase 1/Phase 2 pre-shared keys, BGP ASN dynamic routing, and VPN route propagation.",
        "keyConcepts": [
            "Virtual Private Gateway (VGW): The AWS-side VPN anchor attached to your VPC.",
            "Customer Gateway (CGW): The AWS resource representing your physical on-premises router/firewall (Cisco, Fortinet, pfSense) identified by its static public IPv4 address.",
            "IPsec Security Association: Uses IKEv1/IKEv2, AES-256 encryption, SHA-256 integrity, and Diffie-Hellman groups to establish a secure tunnel over the public internet.",
            "Enable Route Propagation: In your VPC Route Tables, enable 'Route Propagation' so on-premises routes advertised via BGP are automatically populated into the AWS route table.",
            "High Availability: Always configure both redundant tunnels on your on-premises router to ensure zero downtime during AWS endpoint maintenance."
        ],
        "examTips": "To ensure traffic from on-premises reaches your VPC subnets automatically, you must enable 'Route Propagation' on the VPC Route Tables for the Virtual Private Gateway.",
        "architecture": "On-Premises Data Center [Cisco Router: CGW] === [2x Encrypted IPsec Tunnels (BGP)] ===> AWS VPC [Virtual Private Gateway: VGW] ---> VPC Route Propagation Enabled",
        "commandsOrSteps": [
            "aws ec2 enable-vgw-route-propagation --route-table-id rtb-private --gateway-id vgw-xxxx",
            "Download router configuration file from AWS Console for specific vendor (Cisco IOS, Juniper, FortiOS)."
        ],
        "interviewQuestions": "Q: What is Route Propagation in the context of an AWS Site-to-Site VPN?\nA: Route Propagation automatically injects routes learned from your on-premises network via BGP (Border Gateway Protocol) directly into your VPC route tables, eliminating the need to maintain manual static route entries."
    },
    100: {
        "cleanTitle": "Serverless Computing & AWS Lambda Part 1: Execution Model & Lifecycle",
        "hindiSummary": "Serverless Computing aur AWS Lambda ka complete introduction: Serverless ka matlab yeh nahi ki server nahi hote, balki yeh hai ki server aapko manage nahi karne padte! AWS Lambda me aap sirf apna code (Python, Node.js, Java, Go) upload karte hain. Code tabhi run hota hai jab koi event aata hai, aur billing per-millisecond hoti hai. Cold Start vs Warm Start ka concept.",
        "englishSummary": "Foundational architecture of AWS Lambda and Serverless Computing. Understanding event-driven execution, memory-to-vCPU proportionality (128 MB to 10 GB), execution timeouts (max 15 minutes), the microVM execution environment (AWS Firecracker), Cold Starts vs Warm Starts, and millisecond billing.",
        "keyConcepts": [
            "Serverless Principles: No server provisioning or management, automatic scaling from 0 to thousands of concurrent requests, pay strictly for compute time consumed (per 1ms), built-in high availability.",
            "Supported Runtimes: Node.js, Python, Java, Go, C# (.NET), Ruby, custom runtimes (Rust), and Docker container images.",
            "Memory & vCPU Scaling: You configure memory (128 MB to 10,240 MB). AWS allocates CPU power and network bandwidth proportionally to memory.",
            "Maximum Execution Timeout: 15 minutes (900 seconds). For tasks running longer than 15 minutes, use AWS Fargate or EC2.",
            "Cold Start vs Warm Start:\n  - Cold Start: First invocation spins up a new Firecracker microVM, downloads code, and initializes runtime (adds latency).\n  - Warm Start: Subsequent invocations reuse the already-initialized execution context for ultra-fast execution.\n  - Provisioned Concurrency: Keeps pre-initialized microVMs ready to eliminate cold starts for latency-sensitive applications."
        ],
        "examTips": "CRITICAL AWS LAMBDA LIMITS:\n- Max execution time: 15 minutes (900 seconds).\n- Temporary disk storage: 512 MB to 10 GB in `/tmp`.\n- Memory range: 128 MB to 10,240 MB.",
        "architecture": "Event Trigger (S3/API Gateway) ---> Cold Start (Init Runtime: 200ms) ---> Warm Execution (Run Handler: 20ms) ---> Environment Preserved in Sleep",
        "commandsOrSteps": [
            "aws lambda create-function --function-name MyFunction --runtime python3.11 --role arn:aws:iam::xxxx:role/LambdaRole --handler lambda_function.lambda_handler --zip-file fileb://function.zip"
        ],
        "interviewQuestions": "Q: How do you eliminate Cold Start latency in AWS Lambda for mission-critical web applications?\nA: Enable Provisioned Concurrency. Provisioned Concurrency pre-initializes a requested number of execution environments and keeps them warm and hyper-responsive, guaranteeing double-digit millisecond latency."
    },
    101: {
        "cleanTitle": "AWS Lambda Part 2: Invocation Types, Event Sources & Execution Context",
        "hindiSummary": "AWS Lambda ke 3 invocation types: 1. Synchronous Invocation (caller response ka wait karta hai, jaise API Gateway, Cognito). 2. Asynchronous Invocation (caller event bhej kar aage badh jata hai, AWS automatically 2 baar retry karta hai, jaise S3, SNS). 3. Event Source Mapping (Lambda queue ya stream ko poll karta hai, jaise SQS, Kinesis, DynamoDB Streams).",
        "englishSummary": "Architectural breakdown of AWS Lambda Invocation Models: Synchronous Invocation, Asynchronous Invocation (built-in retry mechanisms and Dead Letter Queues / EventBridge Destinations), and Event Source Mapping (Poll-based). Reusing execution context outside the handler for database connections.",
        "keyConcepts": [
            "Synchronous Invocation: Caller waits for the function output (`RequestResponse`). If error occurs, client must retry (e.g. API Gateway, ALB, Amazon Cognito).",
            "Asynchronous Invocation: Caller sends event and receives immediate HTTP 202 Accepted (`Event`). Lambda queues the event and automatically retries twice upon failure. Configure Destinations or DLQ (SQS/SNS) for failed events (e.g. Amazon S3, Amazon SNS, EventBridge).",
            "Event Source Mapping (Poll-Based): Lambda polls the stream or queue on your behalf in batches (e.g. Amazon SQS, Amazon Kinesis, Amazon DynamoDB Streams).",
            "Execution Context Optimization: Initialize database connections and SDK clients OUTSIDE the `lambda_handler` function so they persist across warm invocations, avoiding connection overhead."
        ],
        "examTips": "To optimize database connections in Lambda: Instantiate the database connection pool OUTSIDE the event handler function in global scope so warm executions reuse existing open sockets.",
        "architecture": "Sync: API Gateway === [Wait for Response] ===> Lambda Handler ===> Returns JSON\nAsync: Amazon S3 === [Fires Event & Forgets] ===> Internal Lambda Queue ===> Processes Event (2 Retries)",
        "commandsOrSteps": [
            "aws lambda invoke --function-name MyFunction --invocation-type Event --payload '{\"key\":\"value\"}' response.json"
        ],
        "interviewQuestions": "Q: What happens if an AWS Lambda function fails during an Asynchronous Invocation (e.g. from Amazon S3)?\nA: Lambda automatically retries the execution two more times (total of 3 attempts) with backoff delays. If all retries fail, the event is either dropped or sent to a configured Dead Letter Queue (DLQ) or Lambda Destination for developer inspection."
    },
    102: {
        "cleanTitle": "AWS Lambda Final Masterclass Lab: Event-Driven S3 Trigger to DynamoDB Pipeline",
        "hindiSummary": "Puri 102 lectures series ka grand finale project: S3 + Lambda + DynamoDB ka complete Serverless Event-Driven Pipeline. User S3 bucket me file upload karega -> S3 Event turant Lambda function ko invoke karega -> Lambda function file ka metadata (name, size, timestamp) extract karke DynamoDB table me save kar dega! Zero server, zero maintenance, infinite scale!",
        "englishSummary": "Grand Finale Capstone Project: Building a complete Production Serverless Event-Driven Architecture. Creating an Amazon S3 Bucket, authoring an AWS Lambda function in Python using Boto3, configuring an S3 Event Notification trigger on `ObjectCreated`, and dynamically persisting object metadata into an Amazon DynamoDB table.",
        "keyConcepts": [
            "Event-Driven Architecture: Independent decoupled systems reacting to state changes in real time.",
            "IAM Execution Role: Grant Lambda permissions for `logs:CreateLogGroup`, `logs:PutLogEvents`, and `dynamodb:PutItem` on the target table.",
            "Boto3 Integration: Python AWS SDK used to parse the S3 event payload (`records[0]['s3']['bucket']['name']` and `object['key']`).",
            "S3 Bucket Event Notification: Configure event type `All object create events (s3:ObjectCreated:*)` pointing to the Lambda function ARN.",
            "DynamoDB Persistence: Storing `{FileID: UUID, FileName: Key, FileSize: Size, UploadTime: Timestamp}` in real time with single-digit millisecond latency."
        ],
        "examTips": "CRITICAL SERVERLESS DESIGN PATTERN: Asynchronous image processing, invoice scanning, or data ingestion pipeline: S3 Upload -> S3 Event -> AWS Lambda -> DynamoDB / SNS.",
        "architecture": "User uploads file ---> S3 Bucket === [s3:ObjectCreated Event] ===> AWS Lambda (Boto3 Handler) === [dynamodb:PutItem] ===> DynamoDB Table",
        "commandsOrSteps": [
            "# Python Lambda Code Sample:",
            "import boto3, uuid, time",
            "dynamodb = boto3.resource('dynamodb')",
            "table = dynamodb.Table('FileMetadata')",
            "def lambda_handler(event, context):",
            "    record = event['Records'][0]",
            "    bucket = record['s3']['bucket']['name']",
            "    key = record['s3']['object']['key']",
            "    size = record['s3']['object']['size']",
            "    table.put_item(Item={'FileID': str(uuid.uuid4()), 'Bucket': bucket, 'FileName': key, 'Size': size, 'CreatedAt': int(time.time())})",
            "    return {'statusCode': 200, 'body': 'Metadata stored successfully!'}"
        ],
        "interviewQuestions": "Q: Describe how you would design a serverless thumbnail generation and metadata logging system in AWS.\nA: When a user uploads a high-resolution image to an S3 bucket, an S3 `ObjectCreated` event triggers an AWS Lambda function. The Lambda function reads the image from S3, generates a resized thumbnail, saves the thumbnail to a separate output S3 bucket, and writes the image metadata and S3 URLs into an Amazon DynamoDB table."
    }
}
print(f"Batch 4 loaded: {len(BATCH_4)} lectures.")
