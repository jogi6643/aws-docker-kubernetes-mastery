# Lectures 21 to 45
BATCH_2 = {
    21: {
        "cleanTitle": "AWS VPC Part 4: Network ACLs (NACL) vs Security Groups (SG)",
        "hindiSummary": "Security Group aur Network ACL (NACL) me sabse bada difference yeh hai ki Security Group 'Stateful' hota hai aur instance level par kaam karta hai, jabki NACL 'Stateless' hota hai aur subnet level par kaam karta hai. NACL me rule numbers hote hain aur Allow tatha Deny dono rules banaye ja sakte hain.",
        "englishSummary": "Architectural comparison of AWS Security Groups (SG) and Network Access Control Lists (NACL). Explaining stateful packet inspection vs stateless rule evaluation, subnet boundaries, rule ordering, ephemeral ports, and defense-in-depth networking.",
        "keyConcepts": [
            "Security Group: Operates at Instance/ENI level. Stateful (if traffic is allowed inbound, return traffic is automatically allowed outbound regardless of outbound rules). Supports Allow rules only.",
            "Network ACL: Operates at Subnet level. Stateless (inbound and outbound traffic must be explicitly allowed). Supports both Allow AND Deny rules.",
            "NACL Rule Ordering: Evaluated in numerical order from lowest to highest (e.g., Rule 100 evaluated before 200). First matching rule decides packet fate; asterisk (*) is default deny.",
            "Ephemeral Ports: Because NACLs are stateless, outbound NACLs must allow return traffic on ephemeral ports (typically TCP 1024-65535)."
        ],
        "examTips": "CRITICAL EXAM QUESTION: How to block a specific malicious IP address? Security Groups CANNOT deny IPs. You MUST use a Network ACL Deny rule with a low rule number (e.g. Rule 50 Deny).",
        "architecture": "Incoming Packet ---> NACL (Subnet Level / Stateless) ---> Security Group (Instance Level / Stateful) ---> EC2 Instance",
        "commandsOrSteps": [
            "aws ec2 create-network-acl-entry --network-acl-id acl-xxxx --rule-number 50 --protocol tcp --rule-action deny --cidr-block 203.0.113.50/32 --port-range From=80,To=80 --ingress"
        ],
        "interviewQuestions": "Q: What is the main difference between Security Groups and NACLs in AWS?\nA: Security Groups are stateful firewalls at the instance ENI level that only support ALLOW rules. NACLs are stateless firewalls at the subnet level that evaluate numbered ALLOW and DENY rules sequentially."
    },
    22: {
        "cleanTitle": "AWS VPC Complete Hands-on Lab: VPC, Subnets & Route Tables",
        "hindiSummary": "Complete VPC architecture scratch se banane ka hands-on practical: Ek naya VPC banaya (10.0.0.0/16), do subnets banaye (Public Subnet 10.0.1.0/24 aur Private Subnet 10.0.2.0/24), Internet Gateway attach kiya, aur custom Route Table banakar public subnet ko internet se joda.",
        "englishSummary": "End-to-end practical deployment of a custom Amazon VPC. Creating IPv4 CIDR `10.0.0.0/16`, provisioning public and private subnets across Availability Zones, creating and attaching an Internet Gateway, modifying Route Tables, and launching instances to verify network connectivity.",
        "keyConcepts": [
            "Create Custom VPC with CIDR `10.0.0.0/16` and enable DNS Hostnames & DNS Resolution.",
            "Create Public Subnet (`10.0.1.0/24`) and Private Subnet (`10.0.2.0/24`).",
            "Create and attach Internet Gateway (`igw-xxxx`) to the VPC.",
            "Create Public Route Table with route `0.0.0.0/0 -> igw-xxxx` and associate it to Public Subnet.",
            "Verify connectivity: Public EC2 can ping external web; Private EC2 cannot receive inbound internet traffic."
        ],
        "examTips": "Instances in a public subnet MUST have 'Auto-assign Public IPv4' enabled or be assigned an Elastic IP to communicate across the Internet Gateway.",
        "architecture": "Custom VPC (10.0.0.0/16)\n  ├── Public Subnet (10.0.1.0/24) ---> Public Route Table ---> Internet Gateway ---> Internet\n  └── Private Subnet (10.0.2.0/24) ---> Private Route Table ---> No Internet Route",
        "commandsOrSteps": [
            "aws ec2 create-vpc --cidr-block 10.0.0.0/16",
            "aws ec2 create-subnet --vpc-id vpc-xxxx --cidr-block 10.0.1.0/24",
            "aws ec2 create-internet-gateway",
            "aws ec2 attach-internet-gateway --internet-gateway-id igw-xxxx --vpc-id vpc-xxxx",
            "aws ec2 create-route --route-table-id rtb-xxxx --destination-cidr-block 0.0.0.0/0 --gateway-id igw-xxxx"
        ],
        "interviewQuestions": "Q: If an EC2 instance in a public subnet has an attached IGW and route 0.0.0.0/0 but still cannot access the internet, what is missing?\nA: The instance does not have a Public IPv4 address or Elastic IP attached, preventing the IGW from translating internal private IPs to internet-routable public IPs."
    },
    23: {
        "cleanTitle": "Hands-On Lab: AWS VPC NAT Gateway for Private Subnets",
        "hindiSummary": "Private Subnet me chal rahe servers (jaise database ya backend apps) ko internet par security patches aur software updates download karne ke liye NAT Gateway ka use hota hai. NAT Gateway hamesha Public Subnet me banta hai aur use ek Elastic IP chahiye hota hai.",
        "englishSummary": "Architectural implementation of AWS NAT Gateway (Network Address Translation). Allows instances in a private subnet to connect outbound to the internet (for OS updates, yum/apt packages) while strictly blocking inbound internet traffic from reaching private instances.",
        "keyConcepts": [
            "NAT Gateway MUST be deployed in a PUBLIC subnet with a route to an Internet Gateway.",
            "Requires an allocated Elastic IP (EIP) address upon creation.",
            "Private Subnet Route Table modification: Add route `0.0.0.0/0 -> nat-xxxx`.",
            "AWS Managed Service: NAT Gateway scales automatically up to 45 Gbps bandwidth, highly available within its AZ, and handles high burst traffic.",
            "Multi-AZ Best Practice: Deploy one NAT Gateway per Availability Zone for complete multi-AZ fault tolerance (if AZ-1 fails, AZ-2 private subnet still routes through its local NAT Gateway)."
        ],
        "examTips": "CRITICAL EXAM QUESTION: For high availability across 2 AZs, how many NAT Gateways should you deploy? Answer: TWO NAT Gateways (one in each AZ's public subnet). A single NAT Gateway creates an AZ-level single point of failure.",
        "architecture": "Private EC2 (10.0.2.5) ---> Private Route Table (0.0.0.0/0) ---> NAT Gateway (in Public Subnet 10.0.1.x) ---> Internet Gateway ---> Internet",
        "commandsOrSteps": [
            "aws ec2 allocate-address --domain vpc # Allocate Elastic IP",
            "aws ec2 create-nat-gateway --subnet-id subnet-public-id --allocation-id eipalloc-xxxx",
            "aws ec2 create-route --route-table-id rtb-private-id --destination-cidr-block 0.0.0.0/0 --nat-gateway-id nat-xxxx"
        ],
        "interviewQuestions": "Q: Can an external internet client initiate an inbound connection to an EC2 instance behind a NAT Gateway?\nA: No. NAT Gateways only permit one-way outbound initiated connections and statefully allow the return traffic. Inbound connections from the internet are dropped."
    },
    24: {
        "cleanTitle": "AWS VPC Peering: Same-Region Concept & Configuration Demo",
        "hindiSummary": "VPC Peering do VPCs ke bich direct private network connection hota hai, jisse dono VPC ke servers private IP par aapas me baat kar sakte hain. Peering ke liye dono VPCs ke CIDR blocks non-overlapping hone chahiye aur Transitive Peering allow nahi hoti.",
        "englishSummary": "In-depth architecture of VPC Peering within the same AWS Region. Establishing direct network routing between two VPCs over AWS private network infrastructure using private IPv4/IPv6 addresses without gateways, VPNs, or internet exposure.",
        "keyConcepts": [
            "Non-Overlapping CIDRs: VPC A and VPC B CANNOT have overlapping IP address spaces (e.g. 10.0.0.0/16 and 10.0.0.0/16 cannot peer).",
            "No Transitive Peering: If VPC A peers with VPC B, and VPC B peers with VPC C, VPC A CANNOT talk to VPC C through VPC B. You must create an explicit peering connection between A and C.",
            "High Performance & Low Latency: Traffic travels over AWS private fiber optic backbone; no single point of failure or bandwidth bottlenecks.",
            "Configuration Steps: 1. Requester VPC sends peering request. 2. Accepter VPC accepts request. 3. Update Route Tables in BOTH VPCs pointing destination CIDR to `pcx-xxxx`."
        ],
        "examTips": "EXAM CUE: 'Transitive routing is NOT supported in VPC Peering'. For multi-VPC hub-and-spoke transitive networking, use AWS Transit Gateway.",
        "architecture": "VPC A (10.0.0.0/16) <=== [VPC Peering Connection: pcx-xxxx] ===> VPC B (172.16.0.0/16)",
        "commandsOrSteps": [
            "aws ec2 create-vpc-peering-connection --vpc-id vpc-A --peer-vpc-id vpc-B",
            "aws ec2 accept-vpc-peering-connection --vpc-peering-connection-id pcx-xxxx",
            "aws ec2 create-route --route-table-id rtb-A --destination-cidr-block 172.16.0.0/16 --vpc-peering-connection-id pcx-xxxx",
            "aws ec2 create-route --route-table-id rtb-B --destination-cidr-block 10.0.0.0/16 --vpc-peering-connection-id pcx-xxxx"
        ],
        "interviewQuestions": "Q: If VPC A is peered with VPC B, and VPC B is peered with VPC C, can instances in VPC A communicate with VPC C?\nA: No. VPC Peering is non-transitive. To enable communication, you must create a direct peering connection between VPC A and VPC C, or implement AWS Transit Gateway."
    },
    25: {
        "cleanTitle": "AWS VPC Peering: Cross-Region VPC Peering Across Global AWS Regions",
        "hindiSummary": "Cross-Region VPC Peering do alag-alag AWS regions (jaise Mumbai ap-south-1 aur Virginia us-east-1) ke VPCs ko private connect karta hai. Traffic AWS ke global private network par automatically encrypt hokar travel karta hai, public internet par nahi jata.",
        "englishSummary": "Architecture of Inter-Region VPC Peering across disparate AWS geographical regions. Explaining global private backbone routing, automatic AEAD (Authenticated Encryption with Associated Data) hardware-level encryption, and cross-region security group references.",
        "keyConcepts": [
            "Cross-Region Peering: Connects VPCs across different AWS geographical regions securely.",
            "Built-in Encryption: All inter-region traffic is encrypted on the AWS global private fiber network using modern AEAD algorithms with zero customer key management.",
            "Security Group Referencing: You can reference Security Groups from a peered VPC in another region in Security Group rules.",
            "No Internet Gateway or VPN Required: High throughput, predictable latency, immune to public internet outages."
        ],
        "examTips": "Cross-Region VPC Peering encrypts all traffic natively with no performance penalty. MTU size for cross-region peering is 1500 bytes (Jumbo frames not supported).",
        "architecture": "Region 1 (Mumbai: 10.1.0.0/16) <=== [AWS Encrypted Global Backbone: pcx-xxxx] ===> Region 2 (N. Virginia: 10.2.0.0/16)",
        "commandsOrSteps": [
            "aws ec2 create-vpc-peering-connection --vpc-id vpc-mumbai --peer-vpc-id vpc-virginia --peer-region us-east-1"
        ],
        "interviewQuestions": "Q: Does traffic flowing over an inter-region VPC Peering connection traverse the public internet?\nA: No. All traffic remains entirely within AWS's global dedicated private fiber backbone and is encrypted at the physical layer without traversing the public internet."
    },
    26: {
        "cleanTitle": "AWS Network ACLs (NACL) Deep Dive & Subnet Security Testing",
        "hindiSummary": "NACL ka hands-on practical jisme rule evaluation order test kiya gaya. Default NACL sabhi inbound aur outbound traffic ko allow karta hai, jabki Custom NACL by default sab kuch deny karta hai. Rule number 100 allow aur rule number 50 deny lagakar live traffic block karke dikhaya gaya.",
        "englishSummary": "Hands-on analysis of Network Access Control Lists (NACLs). Testing inbound/outbound stateless filtering rules, rule numbering precedence, ephemeral ports handling, and contrasting default NACL behavior (allows all) with custom NACL behavior (denies all).",
        "keyConcepts": [
            "Default NACL: Created automatically with the VPC; permits ALL inbound and ALL outbound IPv4/IPv6 traffic (Rule 100 Allow All, Rule * Deny All).",
            "Custom NACL: Created by user; denies ALL inbound and ALL outbound traffic by default until explicit Allow rules are added.",
            "Rule Numbering Precedence: Evaluated from lowest number to highest; first match wins. (e.g., Rule 50 Deny Port 80 will block traffic even if Rule 100 Allows Port 80).",
            "Stateless Requirement: Must configure outbound rules for Ephemeral Ports (TCP 1024-65535) so web servers can respond to client requests."
        ],
        "examTips": "Remember: Each subnet in a VPC must be associated with exactly ONE NACL at a time. If you do not associate a NACL, the subnet automatically associates with the default NACL.",
        "architecture": "Internet Client (Port 54321) === [Inbound Rule 100: TCP 80] ===> Subnet NACL ===> EC2 Web Server\nEC2 Web Server (Port 80) === [Outbound Rule 100: TCP 1024-65535] ===> Subnet NACL ===> Internet Client",
        "commandsOrSteps": [
            "aws ec2 create-network-acl --vpc-id vpc-xxxx",
            "aws ec2 create-network-acl-entry --network-acl-id acl-xxxx --rule-number 100 --protocol tcp --rule-action allow --port-range From=80,To=80 --cidr-block 0.0.0.0/0 --ingress",
            "aws ec2 create-network-acl-entry --network-acl-id acl-xxxx --rule-number 100 --protocol tcp --rule-action allow --port-range From=1024,To=65535 --cidr-block 0.0.0.0/0 --egress"
        ],
        "interviewQuestions": "Q: What happens if an outbound NACL does not have an ephemeral port rule when hosting a public web server?\nA: Inbound HTTP requests on port 80 will reach the EC2 instance, but the server's response packet to the client's high-numbered source port (e.g. port 49152) will be dropped at the subnet boundary."
    },
    27: {
        "cleanTitle": "AWS VPC Endpoints: Gateway Endpoints (S3 & DynamoDB) vs Interface Endpoints",
        "hindiSummary": "VPC Endpoints private subnet me chal rahe EC2 instances ko AWS services (jaise S3, DynamoDB) se private connect karte hain, bina Internet Gateway ya NAT Gateway ke. Gateway Endpoints S3 aur DynamoDB ke liye free hote hain (Route Table me route add hota hai), jabki Interface Endpoints (AWS PrivateLink) baki sabhi services ke liye use hote hain.",
        "englishSummary": "Architectural mastery of AWS VPC Endpoints. Deep dive into Gateway Endpoints (supported exclusively for Amazon S3 and DynamoDB at no cost) vs Interface Endpoints (powered by AWS PrivateLink with an ENI, private IP, and hourly charges) for private AWS service communication.",
        "keyConcepts": [
            "Gateway Endpoints: Target entry in VPC Route Tables (`pl-xxxx -> vpce-xxxx`). Free of charge. Supports ONLY Amazon S3 and Amazon DynamoDB.",
            "Interface Endpoints (AWS PrivateLink): Provisions an Elastic Network Interface (ENI) with a private IP inside your subnet. Supports nearly all AWS services (EC2, SQS, SNS, CloudWatch, SSM) and third-party SaaS.",
            "Security & Cost Optimization: Prevents data from traversing NAT Gateways, dramatically reducing NAT data processing costs and eliminating internet exposure.",
            "Endpoint Policies: JSON IAM resource policies attached directly to the VPC Endpoint to restrict which S3 buckets or DynamoDB tables instances can access."
        ],
        "examTips": "EXAM SCENARIO: 'EC2 instances in a private subnet need to upload terabytes of data to S3 without internet access and minimize cost'. Answer: Deploy an Amazon S3 Gateway VPC Endpoint (free, routes through internal AWS network).",
        "architecture": "Private Subnet EC2 (10.0.2.10) ---> Route Table (Prefix List pl-xxxx) ---> Gateway VPC Endpoint (vpce-xxxx) ---> Amazon S3 Bucket",
        "commandsOrSteps": [
            "aws ec2 create-vpc-endpoint --vpc-id vpc-xxxx --service-name com.amazonaws.us-east-1.s3 --route-table-ids rtb-private-id",
            "aws s3 cp large-file.zip s3://my-private-bucket/ # Transfers over internal AWS link at high speed"
        ],
        "interviewQuestions": "Q: What is the primary difference between a Gateway Endpoint and an Interface Endpoint?\nA: Gateway Endpoints are free route-table-based targets supporting only S3 and DynamoDB. Interface Endpoints use AWS PrivateLink to deploy an ENI with a private IP in your subnet, supporting dozens of AWS services at an hourly + per-GB charge."
    },
    28: {
        "cleanTitle": "AWS Client VPN & Site-to-Site VPN Connection to Access EC2",
        "hindiSummary": "VPN (Virtual Private Network) ka use karke on-premises office ya remote developer laptop ko AWS VPC se securely connect karna. AWS Site-to-Site VPN me Virtual Private Gateway (VGW) VPC side par aur Customer Gateway (CGW) on-premises router side par IPsec tunnel banate hain.",
        "englishSummary": "Architecture of AWS VPN connections. Explaining AWS Client VPN (OpenVPN client software for remote workers) and AWS Site-to-Site VPN (IPsec tunnels connecting on-premises data centers to AWS VPC via Virtual Private Gateway and Customer Gateway).",
        "keyConcepts": [
            "Virtual Private Gateway (VGW): The VPN concentrator attached to the AWS VPC side.",
            "Customer Gateway (CGW): The physical router/appliance or software representation on the on-premises side.",
            "Dual IPsec Tunnels: Each AWS Site-to-Site VPN connection provisions TWO redundant IPsec tunnels for automatic failover.",
            "Routing Options: Static IP routing vs Dynamic routing using BGP (Border Gateway Protocol) for automatic path failover.",
            "AWS Client VPN: Managed client-based VPN service based on OpenVPN protocol for remote workforces."
        ],
        "examTips": "AWS Site-to-Site VPN automatically provides 2 tunnels for high availability. Configure both tunnels on your Customer Gateway router for redundancy.",
        "architecture": "Corporate Office [Customer Gateway: CGW] === [2x Encrypted IPsec Tunnels] ===> AWS VPC [Virtual Private Gateway: VGW]",
        "commandsOrSteps": [
            "aws ec2 create-customer-gateway --type ipsec.1 --public-ip 198.51.100.1 --bgp-asn 65000",
            "aws ec2 create-vpn-gateway --type ipsec.1",
            "aws ec2 create-vpn-connection --type ipsec.1 --customer-gateway-id cgw-xxxx --vpn-gateway-id vgw-xxxx"
        ],
        "interviewQuestions": "Q: Why does AWS provision two tunnels for a single Site-to-Site VPN connection?\nA: To provide high availability and fault tolerance. If AWS performs scheduled maintenance on one tunnel endpoint, traffic automatically fails over to the second redundant tunnel."
    },
    29: {
        "cleanTitle": "AWS Storage Architecture Part 1: Block, File, and Object Storage Overview",
        "hindiSummary": "AWS storage services ka complete overview: Block Storage (EBS - raw unformatted blocks, OS boot volume ke liye), Object Storage (S3 - files aur metadata flat structure me, unlimited scale, web access), aur File Storage (EFS - shared file system NFS jo multiple servers par ek sath mount hota hai).",
        "englishSummary": "Introduction to AWS Storage architectures. Comparative analysis of the three fundamental storage paradigms: Block Storage (Amazon EBS), Object Storage (Amazon S3), and File Storage (Amazon EFS / FSx), detailing performance characteristics, access protocols, and operational use cases.",
        "keyConcepts": [
            "Block Storage (Amazon EBS): Data split into raw blocks; requires file system formatting (ext4, NTFS); attached to a single EC2 instance at a time (block-level access). Best for OS disks and transactional databases.",
            "Object Storage (Amazon S3): Data stored as discrete objects containing key, data, metadata, and version ID. Flat structure without hierarchical folders. Accessed over REST HTTP APIs (`GET`, `PUT`). Best for images, videos, backups, data lakes.",
            "File Storage (Amazon EFS / FSx): Hierarchical directory structure accessed via network protocols (NFSv4 for Linux, SMB for Windows). Supports concurrent multi-instance read/write mounts."
        ],
        "examTips": "Workload needs shared storage across 100 Linux EC2 instances -> Amazon EFS. Needs OS boot drive or transactional database -> Amazon EBS. Needs petabytes of media files or data lake -> Amazon S3.",
        "architecture": "Block: EC2 <---> Attached EBS Block Device\nFile: EC2-A, EC2-B, EC2-C <--- [NFSv4] ---> Shared EFS Mount\nObject: Web Clients / Lambda / EC2 === [HTTP REST API] ===> Amazon S3 Bucket",
        "commandsOrSteps": [
            "Identify the storage type needed based on access protocol: POSIX NFS (EFS), SCSI/NVMe block (EBS), REST API HTTPS (S3)."
        ],
        "interviewQuestions": "Q: Can you mount an Amazon S3 bucket as a local POSIX file system on multiple EC2 instances?\nA: S3 is an object store accessed via HTTP REST APIs, not a POSIX file system. While third-party tools (s3fs) or AWS Mountpoint for Amazon S3 exist, native POSIX multi-instance file sharing is designed for Amazon EFS."
    },
    30: {
        "cleanTitle": "Block Storage vs Object Storage: Deep Dive & Differences",
        "hindiSummary": "Block storage aur Object storage ke bich ka gehra farq: Block storage me agar file ka 1 byte badalna ho to sirf wahi specific block update hota hai (fast incremental modification), jabki Object storage me agar 1 byte bhi badla to pura object dobara upload karna padta hai.",
        "englishSummary": "Comprehensive technical comparison between Block Storage and Object Storage. Analysis of data modification mechanics, latency profiles, metadata capabilities, scaling limits, and cost trade-offs.",
        "keyConcepts": [
            "Modification Granularity: Block storage allows in-place block modification (ideal for database random I/O); Object storage is immutable — any change requires uploading a new version of the entire object.",
            "Metadata Capabilities: Block storage has no metadata aside from OS inode tables; Object storage allows rich custom key-value metadata tags on every object.",
            "Scalability: Block storage has fixed provisioned gigabytes/terabytes per volume; Object storage offers infinite scaling with zero capacity planning.",
            "Cost Comparison: S3 object storage is drastically cheaper per gigabyte than provisioned EBS block storage."
        ],
        "examTips": "Database engine data files (MySQL, SQL Server) require random block-level access -> EBS. Storing static PDF invoices, image uploads, or archive tarballs -> S3.",
        "architecture": "Block Storage: File [Block 1][Block 2][Block 3] -> Change Block 2 only\nObject Storage: File Object [Key + Data + Custom Metadata] -> Replace Entire Object",
        "commandsOrSteps": [
            "Review latency: EBS sub-millisecond to low millisecond; S3 10-100 millisecond time-to-first-byte."
        ],
        "interviewQuestions": "Q: Why can't you run a traditional transactional relational database directly on an Amazon S3 bucket?\nA: Relational databases require sub-millisecond random read/write block operations, file locking, and atomic in-place block updates. S3 is an object store with higher latency that requires rewriting the full object on any edit."
    },
    31: {
        "cleanTitle": "Amazon S3 Introduction & S3 Bucket Naming Rules",
        "hindiSummary": "Amazon S3 (Simple Storage Service) AWS ki sabse famous object storage service hai. S3 me data 'Buckets' ke andar 'Objects' ke roop me store hota hai. S3 bucket ka naam puri duniya me (globally across all AWS accounts) unique hona chahiye aur DNS compliant hona chahiye.",
        "englishSummary": "Foundational theory of Amazon Simple Storage Service (S3). Understanding buckets, objects, keys, metadata, global namespace, regional storage isolation, and strict DNS bucket naming rules.",
        "keyConcepts": [
            "Global Namespace: Bucket names must be globally unique across all AWS accounts in all regions worldwide.",
            "Regional Data Residency: Although the namespace is global, you select the specific AWS Region where bucket data is physically stored and replicated.",
            "S3 Bucket Naming Rules:\n  - Length: 3 to 63 characters long.\n  - Allowed characters: Lowercase letters, numbers, and hyphens (-).\n  - Must NOT start or end with a hyphen; must NOT contain uppercase letters or underscores (_); must NOT be formatted as an IP address.",
            "Durability & Availability: S3 Standard provides 99.999999999% (11 9's) durability by automatically storing data redundantly across at least 3 Availability Zones."
        ],
        "examTips": "HIGH FREQUENCY EXAM FACT: Amazon S3 offers 11 9's of durability (99.999999999%) across all storage classes (except One Zone-IA).",
        "architecture": "S3 Global Namespace -> Region: ap-south-1 -> Bucket: 'my-unique-bucket-2026' -> Object: 'images/profile.jpg' (Key + Value + Metadata)",
        "commandsOrSteps": [
            "aws s3 mb s3://my-unique-company-bucket-2026 --region ap-south-1",
            "aws s3 ls"
        ],
        "interviewQuestions": "Q: What does 99.999999999% (11 9's) durability mean for Amazon S3?\nA: It means if you store 10,000,000 objects in S3, on average you can expect to lose a single object once every 10,000 years, achieved by synchronous replication across multiple physical data centers."
    },
    32: {
        "cleanTitle": "Amazon S3 Versioning, MFA Delete & Copying Objects",
        "hindiSummary": "S3 Versioning bucket ke andar objects ke multiple versions save rakhta hai. Agar koi file galti se delete ya overwrite ho jaye, to purane versions safe rehte hain. MFA Delete enable karne par object version delete karne ke liye MFA code chahiye hota hai.",
        "englishSummary": "Deep dive into Amazon S3 Versioning and MFA Delete security. Explaining version IDs, delete markers, soft deletes vs permanent deletes, versioning lifecycle states (Enabled, Suspended), and multi-factor authentication protection.",
        "keyConcepts": [
            "Versioning States: Unversioned (default) -> Versioning Enabled -> Versioning Suspended (cannot be fully disabled once enabled, only suspended).",
            "Delete Marker: When an object is deleted in a versioned bucket, S3 inserts a 'Delete Marker' with a new version ID (soft delete). The object appears deleted, but earlier versions remain intact.",
            "Permanent Delete: To permanently delete an object, you must explicitly specify the Version ID of the object or Delete Marker.",
            "MFA Delete: Enforces Multi-Factor Authentication token for 1. Changing bucket versioning state, and 2. Permanently deleting an object version. Can only be configured via AWS CLI using the root account."
        ],
        "examTips": "To recover an accidentally deleted file in a versioned S3 bucket: Simply delete the Delete Marker version, and the previous version immediately becomes current again!",
        "architecture": "Object Upload v1 (ID: 111) ---> Object Edit v2 (ID: 222) ---> Delete Command inserts [Delete Marker (ID: 333)] ---> Previous versions still stored",
        "commandsOrSteps": [
            "aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Enabled",
            "aws s3api list-object-versions --bucket my-bucket"
        ],
        "interviewQuestions": "Q: Can you turn off versioning on an S3 bucket after enabling it?\nA: No. Once versioning is enabled on an S3 bucket, it cannot be disabled. You can only suspend versioning, which stops creating new version IDs for future uploads while preserving existing versions."
    },
    33: {
        "cleanTitle": "Amazon S3 Storage Classes: Standard, Intelligent-Tiering, IA & Glacier",
        "hindiSummary": "S3 ke 7 storage classes cost optimization ke liye hote hain: S3 Standard (frequently accessed data), S3 Intelligent-Tiering (unknown access patterns, automatic tiering), S3 Standard-IA (infrequently accessed, lower storage cost, retrieval fee), S3 One Zone-IA (single AZ, 20% cheaper), S3 Glacier Flexible (hours retrieval), S3 Glacier Deep Archive (sabse sasta, 12-48 hours retrieval).",
        "englishSummary": "Architectural breakdown of Amazon S3 Storage Classes. Detailed comparison of latency, availability, durability, minimum storage duration, retrieval fees, and cost per gigabyte across S3 Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier Instant Retrieval, Glacier Flexible Retrieval, and Glacier Deep Archive.",
        "keyConcepts": [
            "S3 Standard: Millisecond latency, high throughput, 99.99% availability, 11 9's durability across >=3 AZs. No retrieval fee.",
            "S3 Intelligent-Tiering: Automatically moves objects between Frequent, Infrequent, and Archive tiers based on access patterns without operational overhead or retrieval fees.",
            "S3 Standard-IA: Lower storage cost than Standard, but charges a per-GB retrieval fee. Minimum storage duration charge of 30 days.",
            "S3 One Zone-IA: Stored in a single AZ (99.5% availability). If that AZ is destroyed, data is permanently lost. 20% cheaper than Standard-IA.",
            "S3 Glacier Flexible Retrieval: Minutes to hours retrieval options (Expedited 1-5 mins, Standard 3-5 hrs, Bulk 5-12 hrs). Minimum 90 days charge.",
            "S3 Glacier Deep Archive: Lowest-cost cloud storage ($0.00099/GB/month). Retrieval time 12 to 48 hours. Minimum 180 days charge. Ideal for 7-10 year compliance archiving."
        ],
        "examTips": "Long-term regulatory compliance archives accessed once or twice a year with acceptable 12-hour retrieval -> S3 Glacier Deep Archive. Unknown/unpredictable access patterns -> S3 Intelligent-Tiering.",
        "architecture": "Active Data (S3 Standard) === [30 Days] ===> Infrequent Access (Standard-IA) === [90 Days] ===> Glacier Deep Archive ($1/TB/month)",
        "commandsOrSteps": [
            "aws s3 cp document.pdf s3://my-bucket/ --storage-class INTELLIGENT_TIERING",
            "aws s3 cp archive.tar.gz s3://my-bucket/ --storage-class GLACIER_IR"
        ],
        "interviewQuestions": "Q: What is the main advantage of S3 Intelligent-Tiering over manual lifecycle policies?\nA: Intelligent-Tiering automatically optimizes storage costs for datasets with changing or unpredictable access patterns with zero retrieval fees, eliminating manual analysis and lifecycle maintenance."
    },
    34: {
        "cleanTitle": "Amazon S3 Bucket Creation Hands-on Lab via AWS Console",
        "hindiSummary": "AWS Management Console se S3 bucket banane ka complete practical: Region select karna, Block Public Access settings samajhna, Bucket encryption (SSE-S3 vs SSE-KMS) configure karna, aur files upload karke unke metadata aur permissions inspect karna.",
        "englishSummary": "Practical walkthrough of provisioning an Amazon S3 bucket through the AWS Management Console. Configuring S3 Block Public Access, server-side encryption options (SSE-S3 AES-256 vs SSE-KMS), object ownership ACL settings, and uploading sample assets.",
        "keyConcepts": [
            "Block Public Access: Enabled by default to prevent accidental internet exposure of sensitive data.",
            "Default Server-Side Encryption: AWS automatically encrypts all new objects at rest using SSE-S3 (AES-256) at zero additional charge.",
            "Object Ownership: Enforce 'Bucket owner enforced' to disable legacy Access Control Lists (ACLs) and govern access solely via IAM and Bucket Policies.",
            "Object Metadata: System-defined metadata (content-type, size) and user-defined custom key-value metadata tags."
        ],
        "examTips": "Security Best Practice: Keep 'Block Public Access' enabled at both Account and Bucket levels unless explicitly hosting a public static website.",
        "architecture": "AWS Console -> Create Bucket -> Configure Region -> Enable Default Encryption (SSE-S3) -> Keep Block Public Access ON",
        "commandsOrSteps": [
            "Navigate to S3 Console -> Create Bucket -> Enter bucket name -> Select Region -> Confirm Block Public Access enabled -> Click Create.",
            "Upload files -> Verify Server-Side Encryption status (AES-256)."
        ],
        "interviewQuestions": "Q: What is S3 Block Public Access and why was it introduced?\nA: Block Public Access is a centralized security control that overrides bucket policies and ACLs to guarantee that buckets and objects cannot be made publicly accessible, preventing accidental data leaks."
    },
    35: {
        "cleanTitle": "Amazon S3 Management using AWS CLI: Commands & Automation",
        "hindiSummary": "AWS Command Line Interface (CLI) ke zariye S3 buckets aur objects manage karna: `aws s3 mb` (make bucket), `aws s3 ls` (list), `aws s3 cp` (copy), `aws s3 sync` (folder sync), aur `aws s3 rb --force` (delete bucket with all objects).",
        "englishSummary": "Mastering Amazon S3 operations via the AWS CLI. Deep dive into high-level commands (`aws s3`) and low-level API commands (`aws s3api`). Automating file synchronization, recursive uploads, and multi-part upload parameters.",
        "keyConcepts": [
            "`aws s3 mb s3://bucket-name`: Make bucket.",
            "`aws s3 cp file.txt s3://bucket-name/`: Copy file to S3.",
            "`aws s3 sync ./local-folder s3://bucket-name/`: Synchronizes only modified or new files between local directory and S3 bucket.",
            "`aws s3 rm s3://bucket-name/ --recursive`: Delete all objects.",
            "`aws s3 rb s3://bucket-name --force`: Remove bucket and delete all contents.",
            "Multi-part Uploads: AWS CLI automatically splits files larger than 100 MB into chunks and uploads them in parallel for speed and resilience."
        ],
        "examTips": "Know the difference: `aws s3 sync` only copies new or modified files, minimizing bandwidth and API calls; `aws s3 cp --recursive` copies everything blindly.",
        "architecture": "Local Directory === [aws s3 sync: Parallel Chunk Upload] ===> Amazon S3 High-Speed Ingestion Pipeline",
        "commandsOrSteps": [
            "aws s3 mb s3://my-cli-demo-bucket-2026",
            "aws s3 cp my-image.png s3://my-cli-demo-bucket-2026/images/",
            "aws s3 sync ./dist s3://my-cli-demo-bucket-2026/ --delete",
            "aws s3 rb s3://my-cli-demo-bucket-2026 --force"
        ],
        "interviewQuestions": "Q: How does AWS CLI handle very large files (e.g. 50 GB) during an S3 upload?\nA: The AWS CLI automatically utilizes S3 Multipart Upload, splitting the file into 8 MB parts, uploading parts concurrently, and reassembling them on S3. If a single part fails, only that part is retried."
    },
    36: {
        "cleanTitle": "Amazon S3 Versioning Hands-on Lab: Delete Markers & File Recovery",
        "hindiSummary": "S3 Versioning ka practical: Bucket me versioning enable ki, same file ke alag-alag versions upload kiye, file ko delete karke dekha to Delete Marker lag gaya. Phir Delete Marker ko delete karke purani file ko wapas recover kar liya.",
        "englishSummary": "Hands-on lab demonstrating S3 Versioning lifecycle. Uploading iterative file versions, inspecting unique Version IDs, triggering soft deletes to create Delete Markers, and recovering soft-deleted objects by deleting the Delete Marker.",
        "keyConcepts": [
            "Enable Versioning via CLI or Console: Bucket status becomes `Enabled`.",
            "Object Evolution: Uploading `app.js` (Version ID: `abc123`), then updated `app.js` (Version ID: `xyz789`). Both are stored.",
            "Delete Marker Behavior: Running `aws s3 rm s3://my-bucket/app.js` does NOT delete the data; it adds a zero-byte Delete Marker as the latest version.",
            "Object Restoration: Deleting the Delete Marker reveals the previous version, instantly restoring the file to active status.",
            "Cost Implication: You pay for the cumulative storage of ALL active and non-current versions stored in the bucket."
        ],
        "examTips": "How to restore a file after accidental deletion in S3? Answer: List object versions and delete the Delete Marker version.",
        "architecture": "Delete Marker (Latest) === [Delete Action] ===> Previous Version (xyz789) becomes Active Latest Version",
        "commandsOrSteps": [
            "aws s3api put-bucket-versioning --bucket my-demo-bucket --versioning-configuration Status=Enabled",
            "aws s3 cp note.txt s3://my-demo-bucket/",
            "aws s3 rm s3://my-demo-bucket/note.txt",
            "aws s3api list-object-versions --bucket my-demo-bucket",
            "aws s3api delete-object --bucket my-demo-bucket --key note.txt --version-id <DeleteMarkerVersionId>"
        ],
        "interviewQuestions": "Q: What is a Delete Marker in Amazon S3 versioning?\nA: A Delete Marker is a special zero-byte object marker with a version ID. When placed on an object, S3 treats the object as deleted in standard GET requests, while preserving all preceding versions."
    },
    37: {
        "cleanTitle": "Amazon S3 Cross-Region Replication (CRR) & Same-Region Replication (SRR)",
        "hindiSummary": "S3 Replication ek bucket ke objects ko doosre bucket me automatically replicate karta hai. Cross-Region Replication (CRR) disaster recovery aur latency kam karne ke liye alag region me copy karta hai. Pehli shart: Source aur Destination dono buckets me Versioning ENABLE honi chahiye!",
        "englishSummary": "Architectural breakdown of Amazon S3 Replication. Comparing Cross-Region Replication (CRR for disaster recovery and compliance) and Same-Region Replication (SRR for log aggregation and dev/prod sync). Prerequisites, IAM replication service roles, and replication time controls (RTC).",
        "keyConcepts": [
            "Prerequisite Rule: Versioning MUST be enabled on BOTH the Source bucket and the Destination bucket.",
            "IAM Role: S3 requires an IAM role with permissions to read from source bucket and write objects to destination bucket.",
            "Replication Scope: Replicates new objects created after rule setup. Does NOT replicate existing objects retroactively (requires S3 Batch Replication for legacy objects).",
            "S3 Replication Time Control (S3 RTC): SLA-backed replication providing 99.9% of objects replicated within 15 minutes.",
            "Cross-Account Replication: Destination bucket can be owned by a completely different AWS account for ransomware protection."
        ],
        "examTips": "CRITICAL EXAM PREREQUISITE: You CANNOT configure S3 Replication without enabling Versioning on BOTH source and destination buckets.",
        "architecture": "Source Bucket (us-east-1, Versioned) === [IAM Role: S3 CRR Async] ===> Destination Bucket (ap-south-1, Versioned)",
        "commandsOrSteps": [
            "Enable versioning on Source and Target buckets.",
            "Create IAM Service Role with `s3:GetObjectVersion`, `s3:ReplicateObject` permissions.",
            "Configure Replication Rule in S3 Console under Management -> Replication rules."
        ],
        "interviewQuestions": "Q: If you configure S3 Cross-Region Replication on an existing bucket with 10 TB of data, are existing files automatically copied?\nA: No. S3 replication only applies to new objects uploaded after the rule is created. To replicate existing objects, you must trigger an S3 Batch Replication job."
    },
    38: {
        "cleanTitle": "Amazon S3 Object Lifecycle Management: Automated Cost Optimization",
        "hindiSummary": "S3 Lifecycle Management rules se aapka data automatically saste storage classes me transfer hota rehta hai aur purana data expire hokar delete ho jata hai. Jaise: 30 din baad Standard-IA me, 90 din baad Glacier me, aur 365 din baad delete.",
        "englishSummary": "Architectural design of S3 Lifecycle Management rules. Configuring automated transition actions (moving objects between storage classes as they age) and expiration actions (permanently deleting old versions or expired delete markers) to minimize storage costs.",
        "keyConcepts": [
            "Transition Actions: Move objects between storage classes (e.g. S3 Standard -> S3 Standard-IA after 30 days -> S3 Glacier after 90 days).",
            "Expiration Actions: Automatically delete objects or non-current versions after a specified number of days (e.g. permanently delete non-current versions after 180 days).",
            "Prefix & Tag Filtering: Apply lifecycle rules to specific folders (e.g. `logs/`) or object tags (e.g. `archive=true`).",
            "Cleanup Incomplete Multipart Uploads: Essential cost saver rule to abort and purge failed upload parts after 7 days."
        ],
        "examTips": "S3 Standard-IA has a minimum 30-day storage requirement; lifecycle transition rules from Standard to Standard-IA must specify at least 30 days.",
        "architecture": "Day 0: S3 Standard ---> Day 30: S3 Standard-IA ---> Day 90: S3 Glacier Flexible ---> Day 365: Expire / Permanent Delete",
        "commandsOrSteps": [
            "S3 Console -> Bucket -> Management tab -> Lifecycle rules -> Create lifecycle rule.",
            "Set Transitions: After 30 days move to Standard-IA; After 90 days move to Glacier Flexible Retrieval."
        ],
        "interviewQuestions": "Q: How do S3 Lifecycle rules help optimize costs for buckets with versioning enabled?\nA: You can configure lifecycle rules to automatically transition non-current (historical) versions to Glacier or permanently delete them after 30/60 days, preventing runaway storage costs for frequently modified files."
    },
    39: {
        "cleanTitle": "Amazon EFS Hands-on Demo: Shared Elastic File System on Linux EC2",
        "hindiSummary": "Amazon EFS (Elastic File System) ka practical lab: EFS ek shared network file system hai jo NFSv4 protocol use karta hai. Ek EFS file system banakar use alag-alag Availability Zones ke do Linux servers par ek sath `/mnt/efs` par mount kiya gaya.",
        "englishSummary": "Hands-on implementation of Amazon Elastic File System (EFS). Provisioning a serverless, shared, elastic POSIX-compliant file system. Creating Mount Targets in multiple Availability Zones, configuring Security Groups for NFS port 2049, and mounting EFS on Linux EC2 instances via `amazon-efs-utils`.",
        "keyConcepts": [
            "Shared Multi-Instance Storage: Multiple EC2 instances (hundreds or thousands) can concurrently read and write to the same EFS file system across multiple AZs.",
            "Protocol: NFSv4 (Network File System version 4) operating on TCP Port 2049.",
            "Elastic Scaling: Storage capacity grows and shrinks automatically as files are added or deleted; pay only for what you use.",
            "Storage Classes: EFS Standard (multi-AZ) vs EFS One Zone; EFS Infrequent Access (EFS IA) for files unaccessed for 30 days (saving up to 92%).",
            "Security Group Rule: EFS Mount Target Security Group MUST allow inbound TCP port 2049 from the EC2 Security Group."
        ],
        "examTips": "EFS is for LINUX instances (POSIX NFS). For Windows shared storage (SMB), choose Amazon FSx for Windows File Server.",
        "architecture": "AZ-1a: EC2 Linux Server 1 \\ \n                           ===> [NFS Port 2049] ===> Shared Amazon EFS Storage Cluster\nAZ-1b: EC2 Linux Server 2 /",
        "commandsOrSteps": [
            "sudo yum install -y amazon-efs-utils",
            "sudo mkdir /mnt/efs",
            "sudo mount -t efs -o tls fs-xxxxxxx:/ /mnt/efs",
            "df -hT /mnt/efs # Verify shared network mount"
        ],
        "interviewQuestions": "Q: What is the main difference between Amazon EBS and Amazon EFS?\nA: EBS is a block storage volume that can typically only be attached to a single EC2 instance in a single AZ at a time. EFS is a managed network file system (NFS) that can be concurrently mounted by thousands of EC2 instances across multiple AZs."
    },
    40: {
        "cleanTitle": "Hosting Static Websites on Amazon S3 in 10 Minutes",
        "hindiSummary": "Amazon S3 par bina kisi server ke HTML, CSS aur JavaScript static website host karna. S3 bucket me 'Static website hosting' feature enable kiya jata hai, index.html aur error.html specify kiye jate hain, aur Bucket Policy se public read access diya jata hai.",
        "englishSummary": "Complete guide to hosting a serverless static website on Amazon S3. Configuring static website hosting properties, establishing index and 404 error documents, unchecking Block Public Access, and applying an S3 Bucket Policy granting `s3:GetObject` permission to anonymous public callers.",
        "keyConcepts": [
            "Serverless Web Hosting: No servers, no operating system maintenance, high availability, auto-scaling up to millions of requests.",
            "S3 Website Endpoint URL Format: `http://<bucket-name>.s3-website.<region>.amazonaws.com` (Note: S3 website endpoints use HTTP; for HTTPS, integrate with CloudFront).",
            "Uncheck Block Public Access: S3 default blocks public access; must disable block public settings to host public website.",
            "Public Read Bucket Policy: Grant `s3:GetObject` on `arn:aws:s3:::<bucket-name>/*` to Principal `*`."
        ],
        "examTips": "S3 website hosting natively supports ONLY HTTP. To support HTTPS and custom domain SSL certificates, you MUST put Amazon CloudFront in front of the S3 bucket.",
        "architecture": "Web Browser === [HTTP Request] ===> S3 Website Endpoint ===> S3 Bucket (index.html / error.html)",
        "commandsOrSteps": [
            "aws s3 website s3://my-static-site --index-document index.html --error-document error.html",
            "# Apply Public Read Bucket Policy:",
            "aws s3api put-bucket-policy --bucket my-static-site --policy file://policy.json"
        ],
        "interviewQuestions": "Q: Can an Amazon S3 static website host dynamic backend server code like PHP, Node.js or Python?\nA: No. S3 only serves client-side static assets (HTML, CSS, JS, images, audio). Dynamic logic requires serverless compute like AWS Lambda behind API Gateway or EC2/containers."
    },
    41: {
        "cleanTitle": "Hosting S3 Static Website with Custom Domain Using Amazon Route 53",
        "hindiSummary": "S3 static website ko apne custom domain (jaise `www.mycompany.com`) ke sath connect karna. Iske liye S3 bucket ka naam aapke domain name se bilkul match hona chahiye, aur Route 53 me Alias A-record banakar S3 website endpoint ko point kiya jata hai.",
        "englishSummary": "Configuring custom domain name routing for an S3 static website using Amazon Route 53. Golden rule of bucket naming, Route 53 Alias Record configuration, and apex root domain vs subdomain redirection.",
        "keyConcepts": [
            "Strict Naming Requirement: The S3 bucket name MUST exactly match the domain or subdomain name (e.g., bucket name `example.com` for apex domain, and `www.example.com` for www subdomain).",
            "Route 53 Alias Record: Create an `A` record with Alias=True pointing directly to the S3 website endpoint in that region.",
            "Alias Record Benefits: Free of charge for Route 53 DNS queries to AWS resources, and dynamically responds to S3 IP address changes.",
            "Subdomain Redirection: Configure `www.example.com` bucket to redirect all requests to root bucket `example.com`."
        ],
        "examTips": "To map a custom domain in Route 53 directly to an S3 website bucket: The bucket name and Route 53 record name MUST BE IDENTICAL.",
        "architecture": "User Browser (example.com) ---> Route 53 (Alias A-Record) ---> S3 Website Endpoint (Bucket: example.com)",
        "commandsOrSteps": [
            "Create bucket named exactly `example.com` and enable static website hosting.",
            "In Route 53 Hosted Zone -> Create Record -> Name: apex -> Type: A -> Alias: Yes -> Target: S3 website endpoint."
        ],
        "interviewQuestions": "Q: Why must an S3 bucket name exactly match the domain name when routing directly from Route 53?\nA: The HTTP request `Host` header sent by the browser contains the domain name. S3 uses this Host header to locate and route to the correct bucket."
    },
    42: {
        "cleanTitle": "Amazon EBS Part 1: EBS vs Instance Store Architecture",
        "hindiSummary": "EBS (Elastic Block Store) aur Instance Store ke bich ka detailed comparison. EBS network storage hota hai jo instance stop hone par bhi data safe rakhta hai (persistent), jabki Instance Store physical host ka direct local disk hota hai jo stop hone par pura erase ho jata hai (ephemeral).",
        "englishSummary": "Architectural breakdown of Amazon Elastic Block Store (EBS) vs EC2 Instance Store. Contrasting network-attached block devices vs directly attached host bus adapters, persistence across instance stops, failure domains, and performance characteristics.",
        "keyConcepts": [
            "EBS (Network Attached): Communicates with EC2 over dedicated network links. Independent lifecycle: volume persists when instance is stopped.",
            "Instance Store (Direct Attached): Physically attached to the host server motherboard. Data is EPHEMERAL — lost when instance is stopped or underlying hardware fails.",
            "Performance: Instance Store provides ultra-high IOPS and sub-millisecond latency (no network hops); EBS provides high durability (99.999% replication within AZ).",
            "Root Volume Behavior: EBS root volumes default to `DeleteOnTermination=true`, but can be preserved by setting it to `false`."
        ],
        "examTips": "Workload needs temporary scratch space, cache, or buffer where data loss is acceptable -> Instance Store. Workload requires data persistence across reboots and stops -> EBS.",
        "architecture": "EC2 Instance === [Dedicated Network Channel] ===> EBS Volume (Persistent / Survives Stop)\nEC2 Instance === [Direct Physical PCIe Bus] ===> Local NVMe Instance Store (Ephemeral / Lost on Stop)",
        "commandsOrSteps": [
            "aws ec2 modify-instance-attribute --instance-id i-xxxx --block-device-mappings '[{\"DeviceName\":\"/dev/xvda\",\"Ebs\":{\"DeleteOnTermination\":false}}]'"
        ],
        "interviewQuestions": "Q: Under what circumstances is data on an EC2 Instance Store volume preserved or lost?\nA: Data persists through an OS reboot. Data is permanently LOST if the instance is stopped, terminated, or if the underlying physical host hardware experiences a failure."
    },
    43: {
        "cleanTitle": "Amazon EBS Part 2: EBS Volume Types (gp2, gp3, io1, io2, st1, sc1)",
        "hindiSummary": "EBS ke 6 volume types: gp2 (purana general purpose SSD), gp3 (naya general purpose jisme baseline 3000 IOPS aur 125 MB/s milta hai bina size badhaye), io1/io2 Block Express (highest performance provisioned IOPS SSD), st1 (throughput optimized HDD big data ke liye), sc1 (cold HDD archive ke liye).",
        "englishSummary": "Exhaustive technical analysis of all 6 Amazon EBS volume types: General Purpose SSD (gp2, gp3), Provisioned IOPS SSD (io1, io2 Block Express), Throughput Optimized HDD (st1), and Cold HDD (sc1). Sizing, IOPS-to-GB ratios, burst credits, and workload mapping.",
        "keyConcepts": [
            "General Purpose SSD (gp3): Baseline 3,000 IOPS and 125 MiB/s throughput included at no extra cost; can scale IOPS (up to 16,000) and throughput independently of volume size (20% cheaper than gp2).",
            "Provisioned IOPS SSD (io2 Block Express): Up to 256,000 IOPS, 4,000 MiB/s throughput, and sub-millisecond latency. 99.999% durability. Ideal for mission-critical Oracle, SQL Server, SAP HANA.",
            "Throughput Optimized HDD (st1): Spinning disk designed for sequential I/O, big data, data warehousing, and log processing. Cannot be used as an OS boot volume.",
            "Cold HDD (sc1): Lowest-cost block storage for infrequently accessed sequential workloads. Cannot be used as an OS boot volume."
        ],
        "examTips": "CRITICAL EXAM RULE: HDD volumes (st1 and sc1) CANNOT be used as bootable root volumes for EC2 instances. Only SSD volumes (gp2, gp3, io1, io2) can boot operating systems.",
        "architecture": "OS Boot Disks / Web Apps -> gp3 SSD\nMission-Critical Databases -> io2 Block Express SSD\nBig Data / Data Warehousing -> st1 HDD\nInfrequent Sequential Logs -> sc1 HDD",
        "commandsOrSteps": [
            "aws ec2 create-volume --availability-zone us-east-1a --size 100 --volume-type gp3 --iops 4000 --throughput 250"
        ],
        "interviewQuestions": "Q: Why is gp3 superior to gp2 for production AWS workloads?\nA: gp2 tied IOPS and throughput directly to storage size (3 IOPS per GB). gp3 decouples storage size from performance, providing 3,000 IOPS baseline for any disk size while costing 20% less per GB."
    },
    44: {
        "cleanTitle": "Amazon EBS Part 3: EBS Snapshots Architecture & Point-in-Time Backups",
        "hindiSummary": "EBS Snapshot EBS volume ka point-in-time backup hota hai jo Amazon S3 me internal store hota hai. Snapshots incremental hote hain (pehle snapshot me pura data jata hai, doosre snapshot me sirf wahi blocks jate hain jo change hue hain). Snapshot se naya volume kisi bhi AZ me banaya ja sakta hai.",
        "englishSummary": "Architectural mechanics of Amazon EBS Snapshots. Point-in-time block-level backups stored with 11 9's durability in Amazon S3. Understanding incremental backup mechanics, snapshot consistency, EBS Fast Snapshot Restore (FSR), and cross-AZ volume recreation.",
        "keyConcepts": [
            "Stored Internally in S3: Snapshots are stored under the hood in Amazon S3, providing 99.999999999% durability.",
            "Incremental Nature: Only blocks that changed since the previous snapshot are copied. You only pay for changed blocks.",
            "Point-in-Time Recovery: Even though snapshots are incremental, deleting an older snapshot does NOT corrupt newer snapshots (AWS manages block references automatically).",
            "Cross-AZ Migration: To move an EBS volume from us-east-1a to us-east-1b: Take a snapshot in us-east-1a -> Create a new EBS volume from that snapshot targeting us-east-1b."
        ],
        "examTips": "How to move an EBS volume to another Availability Zone? Answer: Create an EBS snapshot of the volume, and restore the snapshot as a new volume in the destination AZ.",
        "architecture": "Original EBS Volume (AZ 1a) ---> Point-in-Time Snapshot (Stored in S3) ---> Restore New Volume (AZ 1b)",
        "commandsOrSteps": [
            "aws ec2 create-snapshot --volume-id vol-xxxx --description 'Production backup'",
            "aws ec2 create-volume --availability-zone us-east-1b --snapshot-id snap-xxxx --volume-type gp3"
        ],
        "interviewQuestions": "Q: If you have Snapshot 1 (10 GB) and Snapshot 2 (2 GB incremental), what happens to your data if you delete Snapshot 1?\nA: Snapshot 2 remains fully usable. AWS automatically retains any unique blocks referenced by Snapshot 2 before purging deleted blocks, preserving complete point-in-time restoration."
    },
    45: {
        "cleanTitle": "Amazon EBS Part 4: Incremental Snapshot Internals & Changed Block Tracking",
        "hindiSummary": "Incremental Snapshot andar se kaise kaam karta hai: EBS direct APIs aur Changed Block Tracking (CBT) ke zariye AWS pata lagata hai ki pehle snapshot ke baad kaun se data blocks modify hue hain. Isse backup speed bahut fast ho jati hai aur storage cost kam lagti hai.",
        "englishSummary": "Deep technical analysis of EBS Snapshot internals. Exploring Amazon EBS direct APIs (`ebs:ListSnapshotBlocks`, `ebs:GetSnapshotBlock`), Changed Block Tracking (CBT), block allocation bitmaps, and asynchronous copy-on-write snapshotting while instances remain running.",
        "keyConcepts": [
            "Copy-on-Write: When you initiate a snapshot on a running volume, a point-in-time freeze is established instantly; writes to the volume continue immediately while snapshotting progresses in the background.",
            "Changed Block Tracking (CBT): EBS direct APIs compare two snapshots to identify precisely which 512 KiB blocks have changed.",
            "Crash-Consistent vs Application-Consistent: Snapshots taken on a running instance are crash-consistent. For application consistency (flushing file system cache and pending DB transactions), freeze I/O or stop instance before snapshotting.",
            "EBS Fast Snapshot Restore (FSR): Eliminates the initial I/O latency penalty when restoring volumes from snapshots by pre-warming blocks."
        ],
        "examTips": "To ensure maximum database consistency before taking an EBS snapshot: Flush write caches, stop the database service, or freeze file system I/O.",
        "architecture": "Volume State at 10:00 AM === [Snapshot 1: Blocks A, B, C]\nVolume Modified at 10:30 AM (Block B changed to B') === [Snapshot 2: Block B' only]",
        "commandsOrSteps": [
            "aws ebs list-snapshot-blocks --snapshot-id snap-xxxx",
            "aws ec2 enable-fast-snapshot-restores --availability-zones us-east-1a --source-snapshot-ids snap-xxxx"
        ],
        "interviewQuestions": "Q: What is the I/O latency penalty when a volume is newly restored from an EBS snapshot, and how do you resolve it?\nA: Restored blocks are lazily loaded from S3 on first read (causing initial latency). To resolve this, pre-warm the disk using `dd` or enable EBS Fast Snapshot Restore (FSR)."
    }
}
print(f"Batch 2 loaded: {len(BATCH_2)} lectures.")
