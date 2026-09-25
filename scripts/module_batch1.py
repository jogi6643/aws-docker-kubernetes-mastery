# Lectures 1 to 20
BATCH_1 = {
    1: {
        "cleanTitle": "What is Cloud Computing & How it Works",
        "hindiSummary": "Cloud Computing ka seedha matlab hai internet ke zariye on-demand IT resources (servers, storage, database, networking) access karna, pay-as-you-go pricing model par. Physical server khareedne ya data center maintain karne ki jhanjhat khatam ho jati hai.",
        "englishSummary": "Introduction to Cloud Computing principles based on NIST definition. Understanding on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. Deep dive into CapEx (Capital Expense) vs OpEx (Operational Expense) and AWS Global Infrastructure.",
        "keyConcepts": [
            "NIST 5 Essential Characteristics: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, Measured service.",
            "CapEx vs OpEx: Stop spending heavy upfront capital on physical hardware; pay only for variable compute consumption.",
            "AWS Global Infrastructure: Regions (geographical areas housing multiple isolated data centers) & Availability Zones (AZs) connected with high-speed, redundant fiber optic links.",
            "AWS Certification Journey: Cloud Practitioner (Foundational) -> Solutions Architect Associate (SAA-C03) -> SysOps / Developer -> Solutions Architect Professional."
        ],
        "examTips": "SAA-C03 Core Rule: Moving from CapEx to OpEx, stopping capacity guessing, and leveraging AWS economies of scale are foundational cloud value propositions.",
        "architecture": "Client Browser / App ---> Internet ---> AWS Edge Network ---> AWS Region (Multi-AZ Data Centers)",
        "commandsOrSteps": [
            "Explore interactive AWS Global Infrastructure map: https://infrastructure.aws/",
            "Understand the AWS Shared Responsibility Model (Security OF the cloud vs Security IN the cloud)."
        ],
        "interviewQuestions": "Q: What is the difference between Public Cloud, Private Cloud, and Hybrid Cloud?\nA: Public Cloud (AWS/Azure) is multi-tenant infrastructure owned and operated by a cloud provider. Private Cloud is infrastructure dedicated solely to a single enterprise. Hybrid Cloud bridges on-premises private infrastructure with public cloud using Direct Connect or VPN."
    },
    2: {
        "cleanTitle": "Cloud Service Models: IaaS, PaaS, SaaS & Virtualization Layers",
        "hindiSummary": "Cloud Computing me 3 mukhy service models hote hain: IaaS (Infrastructure as a Service - jaise EC2, VPC, storage jisme OS aur apps customer manage karta hai), PaaS (Platform as a Service - jaise Elastic Beanstalk jisme sirf application code aapka hota hai), aur SaaS (Software as a Service - jaise Google Drive, Gmail jisme pura software tayar milta hai).",
        "englishSummary": "Detailed comparison of Cloud Service Models (IaaS, PaaS, SaaS) and virtualization mechanics. Explaining Hypervisor Type-1 (Bare Metal: Xen, KVM, AWS Nitro) and Type-2 (Hosted: VirtualBox, VMware Workstation) and customer responsibility boundaries.",
        "keyConcepts": [
            "IaaS: Customer manages OS, runtime, middleware, data, and applications. AWS manages physical servers, power, cooling, hypervisors.",
            "PaaS: Customer manages application code and configuration. AWS manages hardware, OS patching, runtime environment, and scaling.",
            "SaaS: Provider manages the entire application stack; customer simply consumes the end-user product.",
            "Virtualization: Hypervisor slices physical CPU, RAM, and PCIe buses into virtual machines (EC2 instances). AWS Nitro offloads networking, storage, and security to dedicated hardware cards."
        ],
        "examTips": "Remember Shared Responsibility: In IaaS (EC2), OS patching is ALWAYS customer responsibility. In PaaS (Elastic Beanstalk, RDS), OS patching is AWS responsibility.",
        "architecture": "IaaS: [Physical HW + Hypervisor (AWS)] | [OS + Middleware + App (Customer)]\nPaaS: [HW + OS + Runtime (AWS)] | [Application Code (Customer)]\nSaaS: [Complete Stack (Provider)]",
        "commandsOrSteps": [
            "Compare AWS Services across models: EC2/VPC = IaaS, Elastic Beanstalk/Lambda = PaaS/Serverless, WorkSpaces/QuickSight = SaaS."
        ],
        "interviewQuestions": "Q: Why did AWS migrate from Xen hypervisors to the AWS Nitro System?\nA: The Nitro System offloads virtualization tasks (VPC networking, EBS storage, security enforcement) to dedicated ASIC hardware cards, freeing up nearly 100% of physical host CPU and memory for customer workloads."
    },
    3: {
        "cleanTitle": "How to Create AWS Free Tier Account & Security Best Practices",
        "hindiSummary": "AWS Free Tier account banane ka safe tareeka aur billing shock se bachne ke niyam. Account bante hi Root account par MFA lagana, Root access keys ko delete karna, IAM Admin user banana aur CloudWatch Billing Alarm set karna sabse zaroori pehla kadam hai.",
        "englishSummary": "Guide to setting up an AWS Free Tier account with account hardening. Explaining 12-Month Free services (750 hours/month EC2 t2.micro/t3.micro, 5GB S3, 750 hours RDS), Always Free services, and Short-term Free Trials. Step-by-step security hardening for Root accounts.",
        "keyConcepts": [
            "Free Tier categories: 12-Month Free (EC2, S3, RDS), Always Free (DynamoDB 25GB, 1M Lambda invocations/mo), Free Trials.",
            "Root Account Rule: Root user has unrestricted access to all resources and billing. Never use root user for daily administrative tasks.",
            "Multi-Factor Authentication (MFA): Protect root user with virtual MFA (Google Authenticator) or FIDO U2F hardware security key.",
            "CloudWatch Billing Alarms: Configure billing alerts to receive an SNS email notification when estimated charges exceed $1."
        ],
        "examTips": "AWS Security Pillar 101: Lock away Root account credentials, delete Root Access Keys, and enforce Principle of Least Privilege with IAM.",
        "architecture": "AWS Account Root User ---> Enable Virtual/Hardware MFA ---> Delete Root Access Keys ---> Create IAM Admin Group ---> Work via IAM User",
        "commandsOrSteps": [
            "Open AWS Billing Console -> Billing Preferences -> Check 'Receive Free Tier Usage Alerts' and 'Receive Billing Alerts'.",
            "Create Amazon CloudWatch Alarm for metric 'EstimatedCharges' > $5 with SNS topic subscription."
        ],
        "interviewQuestions": "Q: What is the AWS Best Practice regarding the Root account credentials?\nA: Never use the root account for everyday tasks. Enable MFA, delete root access keys, generate complex random passwords, and create dedicated IAM users/roles with least privilege."
    },
    4: {
        "cleanTitle": "Amazon EC2 Overview & Elastic Compute Cloud Architecture",
        "hindiSummary": "EC2 (Elastic Compute Cloud) AWS ki sabse lokpriya IaaS compute service hai. Yeh cloud me virtual servers (instances) provide karta hai jinhe aap apni requirement ke hisab se CPU, RAM, storage aur networking ke sath deploy kar sakte hain.",
        "englishSummary": "Foundational architecture of Amazon EC2. Detailed look into how EC2 provisions resizable compute capacity. Analysis of vCPUs, memory, instance store, EBS network attachments, hypervisors, and the complete EC2 instance lifecycle.",
        "keyConcepts": [
            "Elasticity: Scale computing capacity up or down automatically within minutes to meet traffic demands.",
            "Instance Lifecycle: Pending -> Running -> Stopping -> Stopped -> Shutting-down -> Terminated.",
            "Stopping vs Terminating: Stopping halts compute charges, keeps EBS root volume data intact, and releases public IPv4; Terminating deletes instance and its non-persistent volumes.",
            "Instance Naming Taxonomy: e.g., `c6i.2xlarge` -> 'c' (Family: Compute), '6' (Generation), 'i' (Intel processor), '2xlarge' (Size: 8 vCPUs, 16 GiB RAM)."
        ],
        "examTips": "Instance store storage is EPHEMERAL: data is lost upon instance stop. EBS volumes are PERSISTENT: data survives instance stops.",
        "architecture": "VPC -> Availability Zone -> Subnet -> EC2 Instance [vCPU + RAM] <=== (EBS Network Channel) ===> Attached EBS Volume",
        "commandsOrSteps": [
            "aws ec2 describe-instances --filters 'Name=instance-state-name,Values=running'",
            "aws ec2 start-instances --instance-ids i-0123456789abcdef0",
            "aws ec2 stop-instances --instance-ids i-0123456789abcdef0"
        ],
        "interviewQuestions": "Q: What happens to public and private IP addresses when you stop and restart an EC2 instance?\nA: The private IP address remains unchanged. The public IPv4 address is released back to the AWS pool; upon restart, the instance receives a brand new public IPv4 address (unless an Elastic IP is attached)."
    },
    5: {
        "cleanTitle": "Amazon EC2 Instance Types: General Purpose (T and M Families)",
        "hindiSummary": "General Purpose instances (T2, T3, T4g, M5, M6g) compute, memory aur networking ka balanced ratio dete hain. T-family 'burstable' hoti hai jisme CPU credits collect aur spend hote hain. M-family predictable, consistent production workloads ke liye hoti hai.",
        "englishSummary": "Deep architectural analysis of General Purpose instances. Detailed breakdown of burstable performance on T-series instances, baseline performance percentages, CPU Credits earning/spending mechanics, T3 Unlimited mode, and balanced M-family instances for enterprise web servers.",
        "keyConcepts": [
            "Balanced Resources: Equal proportion of compute, memory, and networking.",
            "Burstable Performance (T-Series): Earns CPU credits during low utilization; spends credits to burst up to 100% CPU when traffic spikes.",
            "T3 Standard vs T3 Unlimited: In standard mode, instance throttles when credits hit zero; in unlimited mode, instance continues bursting at a small extra per-vCPU-hour surcharge.",
            "M-Series (M5, M6i, M6g Graviton): Fixed, non-burstable enterprise compute for high-traffic web applications, small/medium databases, and backend microservices."
        ],
        "examTips": "Workloads with intermittent or spiky CPU needs (dev servers, staging, code repositories) -> T3. Consistent production web apps -> M5/M6.",
        "architecture": "Low Traffic (CPU < Baseline) ---> Earn CPU Credits ---> Traffic Surge (CPU > Baseline) ---> Burn Credits to Burst to 100%",
        "commandsOrSteps": [
            "aws ec2 modify-instance-credit-specification --instance-credit-specification '[{\"InstanceId\":\"i-123\",\"CpuCredits\":\"unlimited\"}]'"
        ],
        "interviewQuestions": "Q: How do CPU credits work on burstable T2/T3 instances?\nA: Each T instance earns a fixed number of CPU credits per hour based on size. Running below baseline stores credits; running above baseline burns credits to deliver 100% core performance."
    },
    6: {
        "cleanTitle": "Amazon EC2 Instance Types: Compute Optimized (C Family)",
        "hindiSummary": "Compute Optimized instances (C5, C6g, C6i, C7g) me high-performance processors hote hain jisme RAM ke muqable CPU power zyada hoti hai. Yeh batch processing, media encoding, high-performance web servers aur scientific calculations ke liye best hain.",
        "englishSummary": "Architectural guide to Compute Optimized instances (C-family). Built for workloads demanding raw processing power with high CPU-to-memory ratios (typically 2GB RAM per vCPU). Includes Intel Xeon, AMD EPYC, and custom AWS Graviton ARM-based processors.",
        "keyConcepts": [
            "High CPU-to-Memory Ratio: Typically 2 GiB of RAM per vCPU core.",
            "AWS Graviton3 / Graviton4 (C7g, C8g): Up to 25-40% better price-performance compared to comparable x86 processors.",
            "Target Workloads: Batch data processing, distributed analytics, high-traffic web servers, video transcoding, gaming servers, machine learning inference.",
            "Enhanced Networking: SR-IOV network interfaces offering up to 100 Gbps network bandwidth."
        ],
        "examTips": "Exam keywords: 'Batch processing', 'video encoding queue', 'high-performance computing (HPC)' -> Choose C-family instances.",
        "architecture": "High-Throughput Task Queue ---> Compute Cluster (C6i / C7g vCPUs) ---> Fast Parallel Processing ---> Output written to S3",
        "commandsOrSteps": [
            "aws ec2 describe-instance-types --filters 'Name=instance-type,Values=c6i.*' --query 'InstanceTypes[*].[InstanceType,VCpuInfo.DefaultVCpus,MemoryInfo.SizeInMiB]'"
        ],
        "interviewQuestions": "Q: When should you recommend a C-family instance over an M-family instance?\nA: Recommend C-family when CPU is the primary bottleneck and application does not require large memory footprints, minimizing costs per compute unit."
    },
    7: {
        "cleanTitle": "Amazon EC2 Instance Types: Memory Optimized (R, X, and Z Families)",
        "hindiSummary": "Memory Optimized instances (R5, R6g, X1, X2gd, z1d) un applications ke liye hote hain jo memory (RAM) me heavy datasets process karte hain, jaise Redis/Memcached cache clusters, Apache Spark big data, aur SAP HANA in-memory databases.",
        "englishSummary": "Deep architectural analysis of Memory Optimized instances (R, X, and Z families). Delivers massive RAM per vCPU (8 GiB to 32 GiB RAM per vCPU) and ultra-high memory bandwidth for real-time in-memory databases and large-scale data caches.",
        "keyConcepts": [
            "High RAM-to-vCPU Ratio: Purpose-built for memory-intensive workloads.",
            "R-Series (R5, R6i, R6g, R7g): Standard memory-optimized instances for Redis, Memcached, MySQL/PostgreSQL buffer pools.",
            "X-Series (X1, X2idn): Extreme memory instances offering up to 4 TiB to 16 TiB of RAM for enterprise in-memory databases (SAP HANA, Apache Spark).",
            "Z1d Series: High sustained CPU clock speed (up to 4.0 GHz) paired with massive RAM for electronic design automation (EDA)."
        ],
        "examTips": "Look for exam cues: 'In-memory database', 'Redis cache cluster', 'real-time session caching', or 'SAP HANA' -> Answer is R or X family.",
        "architecture": "Web Tier (M5) ---> In-Memory Caching Tier (R6g Redis Cluster) ---> Persistent Database Tier (RDS Multi-AZ)",
        "commandsOrSteps": [
            "aws ec2 describe-instance-types --filters 'Name=instance-type,Values=r6g.*' --query 'InstanceTypes[*].[InstanceType,MemoryInfo.SizeInMiB]'"
        ],
        "interviewQuestions": "Q: Which EC2 instance family would you deploy for an Apache Spark or Redis cluster?\nA: Memory Optimized R-family (e.g., r6g or r5), which provides high memory bandwidth and up to 32 GiB RAM per vCPU."
    },
    8: {
        "cleanTitle": "Amazon EC2 Instance Types: Storage Optimized (I, D, and H Families)",
        "hindiSummary": "Storage Optimized instances (I3, I4i, D2, D3) direct local NVMe SSDs ya dense HDDs use karte hain. Yeh millions of low-latency IOPS provide karte hain NoSQL databases (Cassandra, MongoDB, Elasticsearch) aur Hadoop data warehousing ke liye.",
        "englishSummary": "Overview of Storage Optimized instances (I, D, and H families). Engineered for workloads that require high, sequential read/write access to very large datasets on local NVMe SSD or high-density HDD storage with sub-millisecond latencies.",
        "keyConcepts": [
            "I-Series (I3, I4i): NVMe SSD-backed local instance storage delivering millions of low-latency IOPS for distributed NoSQL databases (Cassandra, MongoDB, ScyllaDB).",
            "D-Series (D2, D3): Dense HDD storage offering massive local disk capacity (up to dozens of Terabytes) for data warehousing and Hadoop HDFS.",
            "Ephemeral Nature of Local Storage: Local NVMe disks are instance store volumes; data does not persist when instance is stopped.",
            "Cluster Replication Requirement: Applications must handle data replication across multiple instances to protect against drive/host failure."
        ],
        "examTips": "If the requirement states 'lowest latency direct disk IOPS for a distributed NoSQL database' and tolerates cluster replication -> Choose I3/I4i.",
        "architecture": "EC2 Host Server === [Direct PCIe NVMe Storage Bus] ===> I4i VM Instance (Zero network latency, millions of IOPS)",
        "commandsOrSteps": [
            "lsblk -f # Inspect NVMe instance store block devices attached to Linux EC2"
        ],
        "interviewQuestions": "Q: Why is data on an I4i instance store at risk if the instance is stopped?\nA: Instance store volumes are physically attached to the host hardware. When an EC2 instance stops, AWS reclaims the hardware slot, permanently wiping instance store data."
    },
    9: {
        "cleanTitle": "Amazon EC2 Instance Types: Accelerated Computing (P, G, and F Families)",
        "hindiSummary": "Accelerated Computing instances hardware accelerators (NVIDIA GPUs, AWS Trainium, FPGAs) ka use karte hain. Yeh Machine Learning training, Deep Learning, 3D graphics rendering aur seismic modeling jaise complex mathematical calculations ke liye use hote hain.",
        "englishSummary": "Architectural breakdown of Accelerated Computing instances (P-family for AI/ML training, G-family for graphics/gaming, F-family for custom FPGAs, and Inf/Trn for AWS Inferentia/Trainium custom chips). Offloads floating-point computations from CPU to silicon accelerators.",
        "keyConcepts": [
            "P-Series (P3, P4d, P5): Powered by NVIDIA Tensor Core GPUs (V100, A100, H100) interconnected via NVLink for large language model (LLM) training.",
            "G-Series (G4dn, G5): NVIDIA Tensor Core GPUs optimized for real-time graphics rendering, video editing workstations, and game streaming.",
            "Inf & Trn Series: AWS custom silicon (Inferentia & Trainium) designed to cut ML training and inference costs by up to 50%.",
            "Elastic Fabric Adapter (EFA): Custom network interface for low-latency MPI communication in distributed GPU clusters."
        ],
        "examTips": "Exam scenarios: 'Train a deep learning neural network model' -> P4/P5. 'Run cost-effective machine learning inference' -> Inf2 / G4dn.",
        "architecture": "Host CPU Cores + Dedicated GPU Array (NVIDIA H100) via Ultra-High-Speed NVLink Bus + EFA Network",
        "commandsOrSteps": [
            "nvidia-smi # View GPU hardware status, memory usage, and driver versions on accelerated EC2 instances"
        ],
        "interviewQuestions": "Q: What is the purpose of the AWS Elastic Fabric Adapter (EFA) on Accelerated Computing instances?\nA: EFA bypasses the OS networking stack (OS-bypass) to deliver ultra-low latency, high-throughput inter-node communication required for distributed GPU machine learning clusters."
    },
    10: {
        "cleanTitle": "Amazon EC2 Instance Types: High Memory & Bare Metal Instances",
        "hindiSummary": "High Memory instances massive enterprise workloads (6 TB, 12 TB, 24 TB RAM) ke liye hote hain. Bare Metal instances bina kisi hypervisor ke direct physical server hardware ka access dete hain, jisse aap custom virtualization ya hypervisor chala sakte hain.",
        "englishSummary": "Deep dive into EC2 High Memory instances (u-series with up to 24 TiB RAM) and Bare Metal instances (`.metal`). Bare metal provides direct physical access to Intel Xeon / AMD EPYC / Graviton processors without hypervisors, enabling nested virtualization and custom OS kernel tuning.",
        "keyConcepts": [
            "High Memory Instances: Purpose-built for massive mission-critical in-memory databases like SAP HANA Enterprise Suite.",
            "Bare Metal (`*.metal`): Physical server hardware directly running the guest OS without a hypervisor, powered by the AWS Nitro System.",
            "Bare Metal Use Cases: Applications requiring low-level hardware performance counters, proprietary non-virtualizable software, or nested virtualization (running VMware ESXi, KVM, or Docker containers bare metal).",
            "Full access to processor features, memory buses, and hardware security features."
        ],
        "examTips": "Questions mentioning 'run custom hypervisor on AWS', 'VMware Cloud on AWS', or 'nested virtualization' require `.metal` (Bare Metal) instances.",
        "architecture": "Physical Hardware Server ===> Direct OS Boot (No Hypervisor) <=== AWS Nitro System Cards (VPC, EBS, Security Offload)",
        "commandsOrSteps": [
            "aws ec2 describe-instance-types --filters 'Name=bare-metal,Values=true' --query 'InstanceTypes[*].InstanceType'"
        ],
        "interviewQuestions": "Q: What is an EC2 Bare Metal instance and what makes it unique?\nA: A Bare Metal instance provides direct access to physical processors and memory without virtualization hypervisors, allowing workloads requiring nested virtualization or hardware counters to run directly on AWS hardware."
    },
    11: {
        "cleanTitle": "Amazon EC2 Purchasing Models: On-Demand, Reserved, Spot & Savings Plans",
        "hindiSummary": "EC2 ke purchasing models cost optimization ke liye sabse important hain: On-Demand (bina commitment, flexible, highest price), Reserved Instances (1 ya 3 saal ke commitment par up to 72% discount), Spot Instances (unused capacity par up to 90% discount, 2 min notice par terminate ho sakti hai), Dedicated Hosts (pura physical server aapka).",
        "englishSummary": "Complete financial and architectural breakdown of Amazon EC2 Purchasing Options: On-Demand, Savings Plans (Compute Savings Plans vs EC2 Instance Savings Plans), Reserved Instances (Standard, Convertible, Scheduled), Spot Instances, Dedicated Hosts, and Dedicated Instances.",
        "keyConcepts": [
            "On-Demand: Pay by the second with zero upfront commitment. Best for unpredictable, short-term workloads or development environments.",
            "Reserved Instances (RI): 1 or 3-year term. Standard RI (up to 72% discount, can be traded on AWS RI Marketplace); Convertible RI (up to 66% discount, can change instance family, OS, or tenancy).",
            "Savings Plans: Flexible dollar-per-hour commitment (e.g., commit to $10/hr of compute across EC2, Fargate, and Lambda).",
            "Spot Instances: Bid on spare AWS compute capacity with up to 90% discount. AWS can reclaim instances with a 2-minute interruption notice. Ideal for fault-tolerant, batch, stateless, CI/CD workloads.",
            "Dedicated Hosts vs Dedicated Instances: Dedicated Hosts give socket/core-level visibility for Bring-Your-Own-License (BYOL) compliance. Dedicated Instances guarantee single-tenant hardware isolation without socket visibility."
        ],
        "examTips": "GOLDEN EXAM RULE: Never use Spot Instances for critical databases or stateful applications. Use Spot for batch processing, rendering, and stateless web tier behind an Auto Scaling Group.",
        "architecture": "Workload Base (Reserved / Savings Plans) + Variable Spikes (On-Demand) + Fault-Tolerant Batch (Spot Instances)",
        "commandsOrSteps": [
            "aws ec2 request-spot-instances --spot-price '0.04' --instance-count 2 --launch-specification file://spot-spec.json",
            "aws ec2 describe-reserved-instances-offerings --instance-type 'm5.large'"
        ],
        "interviewQuestions": "Q: What is the difference between a Dedicated Host and a Dedicated Instance?\nA: Dedicated Host gives you complete visibility and control over the physical server sockets, cores, and physical host ID (required for BYOL software licenses). Dedicated Instance only guarantees your VMs run on hardware dedicated to your AWS account without socket-level visibility."
    },
    12: {
        "cleanTitle": "EC2 Placement Groups: Cluster, Spread, and Partition Strategies",
        "hindiSummary": "Placement Groups decide karte hain ki aapke EC2 instances physical hardware rack par kaise place honge. Cluster (ek hi rack me low latency ke liye), Spread (alag-alag racks me high availability ke liye), Partition (distributed systems jaise Hadoop/Kafka ke liye multi-rack partitions).",
        "englishSummary": "In-depth architecture of EC2 Placement Groups. Explaining how physical hardware placement impacts network bandwidth, inter-instance latency, and fault tolerance across AWS data center racks.",
        "keyConcepts": [
            "Cluster Placement Group: Packs instances close together inside a single Availability Zone. Delivers lowest network latency and highest packet-per-second performance (up to 100 Gbps). Risk: Single rack hardware failure impacts all instances.",
            "Spread Placement Group: Strictly places each instance on a separate physical hardware rack with distinct network and power sources (Maximum 7 instances per AZ). Ideal for critical individual VMs requiring fault isolation.",
            "Partition Placement Group: Divides instances across logical partitions (each containing multiple distinct racks) ensuring partitions do not share hardware. Perfect for distributed systems like HDFS, Cassandra, Kafka.",
            "Placement groups carry no additional charges; you only pay for the launched EC2 instances."
        ],
        "examTips": "HPC / lowest network latency -> Cluster. Maximum fault isolation for critical nodes -> Spread. Distributed Big Data (HDFS, Kafka) -> Partition.",
        "architecture": "Cluster: [Single Rack: EC2-1, EC2-2, EC2-3]\nSpread: [Rack A: EC2-1] | [Rack B: EC2-2] | [Rack C: EC2-3]\nPartition: [Partition 1 (Racks)] | [Partition 2 (Racks)]",
        "commandsOrSteps": [
            "aws ec2 create-placement-group --group-name 'HPC-Cluster' --strategy cluster",
            "aws ec2 run-instances --image-id ami-xxxx --instance-type c5n.18xlarge --placement 'GroupName=HPC-Cluster'"
        ],
        "interviewQuestions": "Q: Can a Cluster Placement Group span across multiple Availability Zones?\nA: No. A Cluster Placement Group cannot span multiple AZs because it relies on physical proximity within the same data center room to achieve ultra-low microsecond latency."
    },
    13: {
        "cleanTitle": "Hands-On: Launch Windows Server EC2 & Connect via RDP (Port 3389)",
        "hindiSummary": "Windows Server EC2 instance launch karne ka step-by-step practical. Windows instance me connect karne ke liye Remote Desktop Protocol (RDP - Port 3389) ka use hota hai. Key pair file se password decrypt karke Windows desktop me login kiya jata hai.",
        "englishSummary": "Hands-on walkthrough of provisioning a Windows Server EC2 instance. Decrypting the random Administrator password using the private key pair (`.pem`), configuring Security Groups for inbound TCP port 3389 (RDP), and establishing Remote Desktop client sessions.",
        "keyConcepts": [
            "Select Windows Server AMI (e.g., Windows Server 2022 Base Free Tier eligible).",
            "Security Group Inbound Rule: TCP Port 3389 (RDP) restricted to your specific IP (`/32`) for security.",
            "Password Decryption: AWS encrypts the Administrator password with the public key; upload your private `.pem` key in the console to decrypt it.",
            "Security Best Practice: Never open RDP port 3389 to `0.0.0.0/0` (public internet). Use AWS Systems Manager Fleet Manager or AWS Client VPN for private access."
        ],
        "examTips": "RDP uses TCP Port 3389. Restrict source CIDR to administrator IP (`/32`) or access via AWS Systems Manager Session Manager / Fleet Manager.",
        "architecture": "Admin Client (RDP Client) === [TCP Port 3389] ===> Internet Gateway ===> Windows EC2 (Public Subnet)",
        "commandsOrSteps": [
            "mstsc /v:<EC2_Public_IPv4_or_DNS> # Launch Windows RDP Client",
            "aws ec2 get-password-data --instance-id i-xxxx --priv-launch-key my-key.pem"
        ],
        "interviewQuestions": "Q: How do you securely access a Windows EC2 instance in a private subnet without exposing port 3389 to the internet?\nA: Use AWS Systems Manager (SSM) Fleet Manager or an EC2 Bastion Host over an encrypted SSH/VPN tunnel, eliminating internet exposure of port 3389."
    },
    14: {
        "cleanTitle": "Install IIS Web Server & Host Custom Webpage on Windows EC2",
        "hindiSummary": "Windows EC2 server par IIS (Internet Information Services) install karna aur custom webpage host karna. Iske liye AWS Security Group me HTTP (Port 80) open karna aur Windows Firewall me port allow karna zaroori hai.",
        "englishSummary": "Configuring IIS Web Server role on a Windows EC2 instance. Installing features via Server Manager or PowerShell, binding HTTP port 80, placing web files in `C:\\inetpub\\wwwroot`, and managing dual firewalls (AWS Security Group + Windows Defender).",
        "keyConcepts": [
            "Install IIS via Windows Server Manager or PowerShell: `Install-WindowsFeature -name Web-Server -IncludeManagementTools`.",
            "Default Document Root: `C:\\inetpub\\wwwroot`.",
            "Dual Firewall Architecture: Both the AWS Security Group (Inbound Port 80) AND the Windows OS Defender Firewall must allow HTTP traffic.",
            "Verifying website via Public IPv4 address in a browser."
        ],
        "examTips": "If Security Group allows HTTP port 80 but the web page still fails to load, check the host OS firewall (Windows Defender Firewall) or verify that the IIS service is running.",
        "architecture": "Client Web Browser === [HTTP Port 80] ===> Security Group ---> Windows OS Firewall ---> IIS Service (C:\\inetpub\\wwwroot)",
        "commandsOrSteps": [
            "powershell: Install-WindowsFeature -name Web-Server -IncludeManagementTools",
            "powershell: Set-Content -Path 'C:\\inetpub\\wwwroot\\iisstart.htm' -Value '<h1>Welcome to AWS Windows EC2!</h1>'"
        ],
        "interviewQuestions": "Q: Why might an HTTP request time out when connecting to a newly installed IIS web server on EC2?\nA: Common reasons: 1. Security Group does not allow inbound TCP port 80. 2. Subnet route table lacks an Internet Gateway route (`0.0.0.0/0 -> igw`). 3. Windows Defender Firewall is blocking inbound port 80."
    },
    15: {
        "cleanTitle": "How to Attach Extra EBS Volumes in Windows EC2 & Initialize Disks",
        "hindiSummary": "Chal rahe Windows server me naya storage disk (EBS Volume) attach karna. AWS console me volume create karke EC2 ko attach kiya jata hai, phir Windows me Disk Management (`diskmgmt.msc`) khol kar disk ko Online, Initialize (MBR/GPT) aur Format (NTFS) karke naya drive letter (D:, E:) diya jata hai.",
        "englishSummary": "Complete walkthrough of provisioning an EBS volume and attaching it to a running Windows EC2 instance. Initializing disk partition tables (MBR/GPT), creating simple volumes, formatting with NTFS, and assigning drive letters using Disk Management (`diskmgmt.msc`).",
        "keyConcepts": [
            "Availability Zone Rule: An EBS volume and the EC2 instance MUST reside in the exact same Availability Zone (e.g., us-east-1a) to attach.",
            "Attaching an EBS volume in AWS console does not automatically make it usable in Windows OS.",
            "Windows Steps: Open `diskmgmt.msc` -> Right click disk -> Make Online -> Initialize Disk -> New Simple Volume -> Format as NTFS.",
            "Elastic Volumes: EBS volume size can be dynamically expanded on-the-fly without stopping the instance; volume sizes cannot be decreased."
        ],
        "examTips": "EBS volumes are AZ-locked. You cannot directly attach an EBS volume in us-east-1a to an EC2 instance in us-east-1b without taking a snapshot first.",
        "architecture": "AZ: us-east-1a [ EC2 Windows Instance (C: Root Volume) <---> EBS Attached Volume (D: Data Volume) ]",
        "commandsOrSteps": [
            "aws ec2 create-volume --availability-zone us-east-1a --size 20 --volume-type gp3",
            "aws ec2 attach-volume --volume-id vol-xxxx --instance-id i-xxxx --device /dev/sdf",
            "diskmgmt.msc # Launch Windows Disk Management utility"
        ],
        "interviewQuestions": "Q: Can you attach an EBS volume to an EC2 instance located in a different Availability Zone?\nA: No. EBS volumes are AZ-specific. To move an EBS volume to another AZ, take a snapshot of the volume and create a new volume from that snapshot in the destination AZ."
    },
    16: {
        "cleanTitle": "Amazon EC2 Linux Launch, SSH Key Pairs & Terminal Connectivity",
        "hindiSummary": "Linux EC2 instance launch karne aur SSH (Secure Shell - Port 22) ke through connect karne ka process. Linux connect karte waqt private key ka permission `chmod 400 key.pem` hona zaroori hai, warna SSH security error de deta hai.",
        "englishSummary": "Launching and connecting to Amazon Linux / Ubuntu EC2 instances using SSH. Deep dive into asymmetric cryptography: Public Key injected into `~/.ssh/authorized_keys`, Private Key `.pem` kept by client. Permission hardening (`chmod 400`) and SSH client commands.",
        "keyConcepts": [
            "SSH protocol operates over TCP Port 22.",
            "Default OS usernames: Amazon Linux (`ec2-user`), Ubuntu (`ubuntu`), CentOS (`centos`), RHEL (`ec2-user` or `root`).",
            "File Permission Rule: Private keys must be readable only by the owner (`chmod 400 key.pem`). If permissions are too open (e.g. 777), SSH clients terminate the connection.",
            "Public Key Injection: AWS automatically injects the public key into `/home/username/.ssh/authorized_keys` during instance initialization."
        ],
        "examTips": "Exam question: 'User receives Unprotected Private Key File error when connecting via SSH'. Fix: Run `chmod 400 my-key.pem`.",
        "architecture": "User Terminal (Private Key: key.pem) === [SSH TCP Port 22] ===> EC2 Linux (~/.ssh/authorized_keys Public Key)",
        "commandsOrSteps": [
            "chmod 400 my-key.pem",
            "ssh -i my-key.pem ec2-user@<ec2-public-ip>",
            "cat ~/.ssh/authorized_keys"
        ],
        "interviewQuestions": "Q: What does the error 'Permissions 0777 for key.pem are too open' mean during an SSH connection?\nA: The SSH client enforces strict security and refuses to use an unencrypted private key accessible to other local users. You must restrict file permissions with `chmod 400 key.pem`."
    },
    17: {
        "cleanTitle": "EC2 Instance Metadata (IMDSv1 & IMDSv2) & User Data Automation",
        "hindiSummary": "Instance Metadata EC2 ke bare me data hota hai (jaise public IP, private IP, instance type, AMI ID, IAM role credentials). Yeh internal magic IP `http://169.254.169.254/latest/meta-data/` par query karke nikala jata hai. User Data script launch ke waqt server ko automatically setup karta hai.",
        "englishSummary": "Architectural breakdown of the EC2 Instance Metadata Service (IMDS) and User Data bootstrap automation. Understanding the Link-Local IPv4 address `169.254.169.254`, differences between IMDSv1 (HTTP GET) and IMDSv2 (Session-oriented token defense against SSRF vulnerabilities).",
        "keyConcepts": [
            "Link-Local IPv4 Address: `http://169.254.169.254` (accessible only from within the EC2 instance, non-routable over the internet).",
            "Metadata vs User Data: Metadata is data ABOUT the instance; User Data is bootstrap configuration script executed automatically by `cloud-init` as root on first boot.",
            "IMDSv1 vs IMDSv2: IMDSv2 requires an HTTP PUT request with header `X-aws-ec2-metadata-token-ttl-seconds` to generate a session token, preventing Server-Side Request Forgery (SSRF) credential theft.",
            "User Data log file in Linux: `/var/log/cloud-init-output.log`."
        ],
        "examTips": "HIGH FREQUENCY EXAM TOPIC: IMDSv2 prevents SSRF attacks by enforcing session tokens via PUT requests. Always remember the IP `169.254.169.254`.",
        "architecture": "EC2 Guest OS === [HTTP PUT Token Request] ===> 169.254.169.254 (IMDSv2) === [Token] ===> [HTTP GET /meta-data/ with Token]",
        "commandsOrSteps": [
            "# IMDSv2 Token Request:",
            "TOKEN=$(curl -s -X PUT 'http://169.254.169.254/latest/api/token' -H 'X-aws-ec2-metadata-token-ttl-seconds: 21600')",
            "curl -H \"X-aws-ec2-metadata-token: $TOKEN\" http://169.254.169.254/latest/meta-data/public-ipv4",
            "curl -H \"X-aws-ec2-metadata-token: $TOKEN\" http://169.254.169.254/latest/user-data"
        ],
        "interviewQuestions": "Q: Why is IMDSv2 significantly more secure than IMDSv1?\nA: IMDSv1 allows simple HTTP GET requests which can be exploited by SSRF (Server-Side Request Forgery) flaws in web apps to leak IAM temporary credentials. IMDSv2 requires a multi-step session token via HTTP PUT with custom headers that SSRF payloads cannot forge."
    },
    18: {
        "cleanTitle": "AWS VPC Part 1: What is Virtual Private Cloud & Default vs Custom VPC",
        "hindiSummary": "VPC (Virtual Private Cloud) AWS cloud ke andar aapka apna logically isolated private data center network hota hai. Default VPC pehle se bana milta hai jisme sabhi subnets public hote hain. Custom VPC enterprise security ke liye scratch se banaya jata hai jisme public aur private subnets alag-alag hote hain.",
        "englishSummary": "Introduction to Amazon VPC (Virtual Private Cloud). Logically isolated section of the AWS cloud where you launch AWS resources in a virtual network that you define. Comprehensive comparison between Default VPCs and Custom VPCs, IPv4 CIDR allocations (RFC 1918), and boundary isolation.",
        "keyConcepts": [
            "VPC is a Regional service; it spans across all Availability Zones in that Region.",
            "Default VPC: Created automatically by AWS in every Region; has a `/16` CIDR block (`172.31.0.0/16`), has an Internet Gateway attached, and all subnets have auto-assign public IP enabled.",
            "Custom VPC: Created from scratch; customer controls CIDR, subnetting, route tables, gateway attachments, and security perimeters.",
            "RFC 1918 Private IP Ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Maximum VPC size is `/16` (65,536 IPs), minimum is `/28` (16 IPs)."
        ],
        "examTips": "A VPC cannot span multiple Regions, but it spans all Availability Zones within its single Region.",
        "architecture": "AWS Region [ VPC (10.0.0.0/16) ---> AZ 1a (Subnet 10.0.1.0/24) | AZ 1b (Subnet 10.0.2.0/24) ]",
        "commandsOrSteps": [
            "aws ec2 create-vpc --cidr-block 10.0.0.0/16 --tag-specifications 'ResourceType=vpc,Tags=[{Key=Name,Value=Custom-Prod-VPC}]'"
        ],
        "interviewQuestions": "Q: Can you change the primary CIDR block of a VPC after it is created?\nA: You cannot alter the primary CIDR block, but AWS allows you to associate secondary IPv4 CIDR blocks to an existing VPC."
    },
    19: {
        "cleanTitle": "AWS VPC Part 2: Subnets Architecture & 5 Reserved IP Addresses",
        "hindiSummary": "Subnet VPC ka ek tukda hota hai jo kisi ek specific Availability Zone me rehta hai. Subnet do tarah ke hote hain: Public Subnet (jiska route Internet Gateway se juda hota hai) aur Private Subnet (jo internet se direct connect nahi hota). AWS har subnet me 5 IP addresses reserve karta hai.",
        "englishSummary": "Deep architectural analysis of VPC Subnets. Understanding Availability Zone mapping, Public vs Private Subnets, and CIDR subnet calculation. The AWS 5 Reserved IP Rule in every subnet.",
        "keyConcepts": [
            "Subnet Rule: A subnet resides in exactly ONE Availability Zone (cannot span multiple AZs).",
            "Public Subnet: Traffic routed to an Internet Gateway (IGW); instances receive public IPv4 addresses.",
            "Private Subnet: No direct route to IGW; isolated from inbound internet traffic (ideal for databases and backend app servers).",
            "AWS 5 Reserved IPs in every subnet: e.g. for `10.0.1.0/24`:\n  1. 10.0.1.0: Network address.\n  2. 10.0.1.1: Reserved by AWS for VPC Router.\n  3. 10.0.1.2: Reserved by AWS for DNS (AmazonProvidedDNS).\n  4. 10.0.1.3: Reserved by AWS for future use.\n  5. 10.0.1.255: Network broadcast address (AWS does not support broadcast, but reserves it)."
        ],
        "examTips": "EXAM MATH QUESTION: How many usable IP addresses are in a `/24` subnet? Total IPs = 256. Usable = 256 - 5 = 251 usable IPs! In a `/28` subnet: 16 - 5 = 11 usable IPs.",
        "architecture": "VPC (10.0.0.0/16)\n  ├── AZ-1a: Public Subnet (10.0.1.0/24) -> Route to IGW [251 Usable IPs]\n  └── AZ-1a: Private Subnet (10.0.2.0/24) -> Internal Route Only [251 Usable IPs]",
        "commandsOrSteps": [
            "aws ec2 create-subnet --vpc-id vpc-xxxx --cidr-block 10.0.1.0/24 --availability-zone us-east-1a"
        ],
        "interviewQuestions": "Q: Why does a /28 subnet in AWS have only 11 usable IP addresses instead of 14?\nA: Traditional networking reserves 2 IPs (network & broadcast). AWS reserves 3 additional IPs (VPC router, AmazonProvidedDNS, and future use), making 5 reserved IPs in total (16 - 5 = 11)."
    },
    20: {
        "cleanTitle": "AWS VPC Part 3: Route Tables, Implied Router & Internet Gateway",
        "hindiSummary": "Route Table niyam (rules) ka set hota hai jo decide karta hai ki network traffic kahan jayega. Implied Router VPC ke andar har subnet ke bich traffic route karta hai. Internet Gateway (IGW) VPC ko internet se connect karta hai aur horizontally scalable, highly available component hai.",
        "englishSummary": "Architectural breakdown of VPC Route Tables, the VPC Implied Router, and Internet Gateways (IGW). Understanding target routes, local routes (`10.0.0.0/16 -> local`), and default internet routes (`0.0.0.0/0 -> igw-xxxx`).",
        "keyConcepts": [
            "Implied Router: Logical software router built into the AWS hypervisor fabric that interconnects all subnets in the VPC seamlessly.",
            "Local Route: Every Route Table contains a default non-deletable route (e.g. `10.0.0.0/16 local`) allowing all subnets in the same VPC to talk to each other by default.",
            "Internet Gateway (IGW): Highly available, redundant VPC component that performs 1-to-1 NAT translation between private and public IPv4 addresses. Does not create a bandwidth bottleneck.",
            "One IGW Rule: You can attach at most ONE Internet Gateway to a single VPC at a time."
        ],
        "examTips": "To make a subnet public: 1. Attach an IGW to the VPC. 2. Add route `0.0.0.0/0 -> igw-xxxx` in the subnet's Route Table. 3. Ensure instances have Public IPv4 addresses.",
        "architecture": "EC2 (10.0.1.5) ---> Route Table (0.0.0.0/0) ---> Internet Gateway (IGW) ---> Internet (WWW)",
        "commandsOrSteps": [
            "aws ec2 create-internet-gateway",
            "aws ec2 attach-internet-gateway --internet-gateway-id igw-xxxx --vpc-id vpc-xxxx",
            "aws ec2 create-route --route-table-id rtb-xxxx --destination-cidr-block 0.0.0.0/0 --gateway-id igw-xxxx"
        ],
        "interviewQuestions": "Q: Can you attach two Internet Gateways to a single VPC for redundancy?\nA: No. A VPC can only have one Internet Gateway attached. IGW is an AWS managed service that is already horizontally scaled, redundant, and highly available by design."
    }
}
print(f"Batch 1 loaded: {len(BATCH_1)} lectures.")
