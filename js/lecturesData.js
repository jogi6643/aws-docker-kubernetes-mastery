/**
 * AWS Solution Architect & SysOps (102 Lectures) Complete Knowledge Base
 * Extracted & Synthesized from Technical Guftgu (Bhupinder Rajput) Video Series
 */

window.AWS_MODULES = [
  {
    "id": 1,
    "title": "Cloud Fundamentals & AWS Global Infrastructure",
    "badge": "Basics & Infra",
    "icon": "cloud",
    "color": "#3B82F6",
    "lectures": [
      1,
      2,
      3
    ],
    "desc": "Introduction to Cloud Computing, Service Models (IaaS, PaaS, SaaS), Virtualization layers, Regions, Availability Zones, and AWS Free Tier setup.",
    "count": 3
  },
  {
    "id": 2,
    "title": "Amazon EC2 & Compute Architectures",
    "badge": "Compute",
    "icon": "server",
    "color": "#F59E0B",
    "lectures": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17
    ],
    "desc": "Elastic Compute Cloud deep dive: Instance families (T, M, C, R, I, P, G, Metal), Purchasing options (On-Demand, Reserved, Spot), Windows/Linux EC2, IMDSv2, and User Data automation.",
    "count": 14
  },
  {
    "id": 3,
    "title": "Amazon VPC & Cloud Networking",
    "badge": "Networking",
    "icon": "network-wired",
    "color": "#10B981",
    "lectures": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      98,
      99
    ],
    "desc": "Virtual Private Cloud architecture: CIDR, Subnets, Route Tables, Internet Gateway, NAT Gateway vs NAT Instance, Security Groups vs NACLs, VPC Peering, Endpoints, and Site-to-Site VPN.",
    "count": 13
  },
  {
    "id": 4,
    "title": "AWS Storage Services (S3, EFS & Lifecycle)",
    "badge": "Storage",
    "icon": "database",
    "color": "#6366F1",
    "lectures": [
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41
    ],
    "desc": "Object vs Block vs File storage, Amazon S3 Storage Classes, S3 Lifecycle Management, Versioning, MFA Delete, Cross-Region Replication, Static Web Hosting, Route 53 binding, and Amazon EFS.",
    "count": 13
  },
  {
    "id": 5,
    "title": "Amazon EBS & Machine Images (AMI)",
    "badge": "Block Storage",
    "icon": "hdd",
    "color": "#EC4899",
    "lectures": [
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50
    ],
    "desc": "Elastic Block Store volume types (gp2, gp3, io1, io2, st1, sc1), EBS vs Instance Store, Snapshots, Incremental backups, KMS Encryption, AMIs, and cross-account volume migration.",
    "count": 9
  },
  {
    "id": 6,
    "title": "High Availability, Auto Scaling & Elastic Load Balancing",
    "badge": "Scalability",
    "icon": "layer-group",
    "color": "#8B5CF6",
    "lectures": [
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61
    ],
    "desc": "Fault tolerance, EC2 Auto Scaling groups, Dynamic Scaling policies, Elastic Load Balancers (ALB vs NLB vs CLB), Health checks, Target groups, and Multi-VPC load balancing.",
    "count": 11
  },
  {
    "id": 7,
    "title": "AWS IAM & Security Governance",
    "badge": "Security",
    "icon": "shield-alt",
    "color": "#EF4444",
    "lectures": [
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71
    ],
    "desc": "Identity & Access Management: Users, Groups, Roles vs Policies, Least Privilege, MFA, AWS STS Temporary credentials, Cross-Account Access, Microsoft AD Connector, and Billing Dashboards.",
    "count": 10
  },
  {
    "id": 8,
    "title": "AWS Database Services (RDS, Aurora & DynamoDB)",
    "badge": "Databases",
    "icon": "table",
    "color": "#14B8A6",
    "lectures": [
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82
    ],
    "desc": "Relational vs NoSQL databases, Amazon RDS engines, Multi-AZ Synchronous replication vs Read Replicas, Amazon Aurora architecture (6 copies across 3 AZs), and Amazon DynamoDB NoSQL design.",
    "count": 11
  },
  {
    "id": 9,
    "title": "Amazon Route 53 & Global DNS Management",
    "badge": "DNS & Traffic",
    "icon": "globe",
    "color": "#F97316",
    "lectures": [
      83,
      84,
      85,
      86,
      87,
      88
    ],
    "desc": "Domain Name System fundamentals, Hosted Zones, Record types (A, CNAME, ALIAS), and 7 Routing Policies (Simple, Weighted, Latency, Failover, Geolocation, Geoproximity, Multi-Value).",
    "count": 6
  },
  {
    "id": 10,
    "title": "Amazon CloudFront & Edge CDN",
    "badge": "Edge & CDN",
    "icon": "bolt",
    "color": "#EAB308",
    "lectures": [
      89,
      90,
      91
    ],
    "desc": "Content Delivery Network architecture: Edge Locations, Regional Edge Caches, Origins, Cache Behaviors, TTL, Cache Invalidation, Origin Access Control (OAC), and SSL integration.",
    "count": 3
  },
  {
    "id": 11,
    "title": "Application Messaging & Decoupling (SQS & SNS)",
    "badge": "Decoupling",
    "icon": "envelope-open-text",
    "color": "#06B6D4",
    "lectures": [
      92,
      93,
      94,
      95,
      96,
      97
    ],
    "desc": "Loosely coupled architectures: Amazon SQS Standard vs FIFO, Visibility Timeout, Dead Letter Queues (DLQ), Short vs Long Polling, Amazon SNS Pub/Sub Fan-Out, and Event Triggers.",
    "count": 6
  },
  {
    "id": 12,
    "title": "Serverless Computing & AWS Lambda",
    "badge": "Serverless",
    "icon": "code",
    "color": "#A855F7",
    "lectures": [
      100,
      101,
      102
    ],
    "desc": "Serverless execution principles, AWS Lambda runtime lifecycle, vCPU/Memory allocations, Cold vs Warm starts, Invocation models (Sync, Async, Polling), and end-to-end S3-Lambda-DynamoDB pipelines.",
    "count": 3
  }
];

window.AWS_LECTURES = [
  {
    "id": 1,
    "lecNum": 1,
    "videoId": "DxveVHN4Ymg",
    "youtubeUrl": "https://www.youtube.com/watch?v=DxveVHN4Ymg",
    "rawTitle": "What is cloud and how it works in hindi | Lec-01 | AWS Solution Architect Tutorial for Beginners",
    "title": "Lec 1: What is Cloud Computing & How it Works",
    "cleanTitle": "What is Cloud Computing & How it Works",
    "duration": "37:36",
    "moduleId": 1,
    "moduleName": "Cloud Fundamentals & AWS Global Infrastructure",
    "moduleBadge": "Basics & Infra",
    "color": "#3B82F6",
    "icon": "cloud",
    "hindiSummary": "Cloud Computing ka seedha matlab hai internet ke zariye on-demand IT resources (servers, storage, database, networking) access karna, pay-as-you-go pricing model par. Traditional Data Center me crores ka CapEx, precision AC cooling, generators, leased line aur manpower lagta hai, jabki AWS Cloud me 2 minute me server mil jata hai aur sirf use kiye gaye time ka bill dena hota hai (jaise bijli board ya Uber cab ka bill).",
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
    "interviewQuestions": "Q: What is the difference between Public Cloud, Private Cloud, and Hybrid Cloud?\nA: Public Cloud (AWS/Azure) is multi-tenant infrastructure owned and operated by a cloud provider. Private Cloud is infrastructure dedicated solely to a single enterprise. Hybrid Cloud bridges on-premises private infrastructure with public cloud using Direct Connect or VPN.",
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec-01)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "37:36",
      "summary": "Is lecture me Bhupinder Rajput ji ne digital board par classroom style me scratch se samjhaya ki traditional data center kaise kaam karta hai, usme kya-kya pareshaniyan (CapEx, cooling, maintenance) aati hain, aur cloud computing kaise un samasyaon ko electricity grid aur Ola/Uber ke model par solve karti hai.",
      "sections": [
        {
          "heading": "1. Traditional On-Premises Data Center Setup (Board Diagram)",
          "hindiNote": "Board par sabse pehle ek company ka khud ka data center banakar dikhaya gaya. Agar ek company khud ka data center banati hai, toh use kya-kya setup karna padta hai:",
          "points": [
            "Physical Building / Real Estate: Khud ki zameen ya bhari rent par office space.",
            "Server Racks: Mehenge HP, Dell, IBM ya Cisco ke physical blade/rack servers.",
            "Storage Area Networks (SAN / NAS): Terabytes/Petabytes hard drives aur controllers.",
            "Precision AC (Cooling HVAC): Servers ki heat nikalne ke liye 18°C-20°C par 24 hours chalne wale heavy ACs.",
            "Power Backup (Dual UPS & Diesel Generators): Grid cut hone par backup power, jiske liye generators aur diesel ka stock chahiye.",
            "High-Speed Leased Line Internet: Tata, Airtel jaisi do alag-alag ISPs se dedicated fiber leased line.",
            "Specialized Manpower: System Admins, Network Admins, Storage Engineers, 24x7 guards aur CCTV.",
            "Diwali / Sale Traffic Ki Problem: Agar sale ke liye 50 servers khareed liye, toh sale ke baad 40 servers bekaar pade rahenge (huge money waste)."
          ],
          "diagram": "+---------------------------------------------------------------------+\n|              TRADITIONAL ON-PREMISES DATA CENTER                     |\n+---------------------------------------------------------------------+\n|  [ Real Estate & Space ] ---> Millions upfront                      |\n|  [ Hardware Racks ]      ---> Dell / HP servers (High CapEx)        |\n|  [ SAN/NAS Storage ]     ---> Huge disks, failure risks             |\n|  [ Precision AC Cooling] ---> 24x7 HVAC cooling bills               |\n|  [ Dual UPS & Gen-Sets ] ---> 24x7 Power redundancy                 |\n|  [ Dual Leased Lines ]   ---> Dedicated ISP fiber                   |\n|  [ 24x7 Engineers Team]  ---> SysAdmins, NetAdmins, DBAs            |\n+---------------------------------------------------------------------+\n| Major Drawbacks on Board:                                           |\n| 1. High CapEx (Crores upfront heavy investment)                       |\n| 2. 3-6 Months Procurement (Servers khareedne aur setup me mahino ka time)         |\n| 3. Idle Capacity Waste (Sale khatam hote hi servers idle pade rehte hain)  |\n+---------------------------------------------------------------------+"
        },
        {
          "heading": "2. Real-World Whiteboard Analogies (Board Par Samjhaye Gaye Real-Life Examples)",
          "hindiNote": "Cloud computing ko samjhane ke liye Bhupinder ji ne do bohot hi sateek aur saral examples board par samjhaye:",
          "points": [
            "Electricity Board Analogy: Aapko ghar me fan ya bulb chalane ke liye apna khud ka power plant nahi lagana padta. Grid company power plant banati hai, aap sirf switch on karte hain, units consume karte hain aur month ke end me jitne units use huye sirf uska bill (Pay-as-you-go) pay karte hain.",
            "Ola/Uber Cab Analogy: Agar aapko Delhi se Gurgaon jana hai, toh aap ₹50 lakh ki nayi car (CapEx) nahi khareedte. Aap app se cab book karte hain, travel complete karte hain, meter ka fare pay karte hain, aur baat khatam. Cloud me servers bhi aise hi rental par milte hain."
          ],
          "diagram": "[ Real Power Plant (Electricity Board) ]  ===> [ Home Wall Socket ] ===> Pay Monthly Units\n[ AWS Global Infrastructure (Cloud)    ]  ===> [ Your Laptop / App ] ===> Pay Per-Hour/Sec"
        },
        {
          "heading": "3. 5 Essential Characteristics of Cloud (NIST 5 Core Rules)",
          "hindiNote": "Board par likhe gaye cloud ke 5 essential rules (SAA-C03 exam me frequently pooche jaate hain):",
          "points": [
            "1. On-Demand Self-Service: Bina kisi human approval ke, jab chahe 2 minute me server/storage launch karo.",
            "2. Broad Network Access: Internet ke through laptop, mobile, tablet ya kisi bhi location se access possible.",
            "3. Resource Pooling (Multi-Tenancy): Ek hi large physical infrastructure par multiple customers ke resources securely share hote hain.",
            "4. Rapid Elasticity: Requirement aane par turant scale-out karein, traffic kam hone par turant scale-in karein.",
            "5. Measured Service: Jitna CPU, RAM ya bandwidth use hua, theek utna hi pay karein (Transparent Metered Billing)."
          ],
          "diagram": "       +---------------------------------------------+\n       |     NIST 5 ESSENTIAL CLOUD CHARACTERISTICS  |\n       +---------------------------------------------+\n       | 1. On-Demand Self Service  (Instant Click)  |\n       | 2. Broad Network Access    (Anywhere, HTTP) |\n       | 3. Resource Pooling        (Multi-Tenant)   |\n       | 4. Rapid Elasticity        (Scale In / Out) |\n       | 5. Measured Service        (Pay For Usage)  |\n       +---------------------------------------------+"
        },
        {
          "heading": "4. CapEx vs OpEx Comparison (CapEx vs OpEx Board Table)",
          "hindiNote": "Accounting aur finance me cloud ka sabse bada benefit CapEx ko OpEx me convert karna hai:",
          "points": [
            "CapEx (Capital Expenditure): Hardware purchase karne ke liye upfront huge investment. Isme depreciation aur idle capacity ka risk hota hai.",
            "OpEx (Operational Expenditure): Running cost ya monthly rent. Jitna consume karo utna expense declare karo, immediate operational flexibility milti hai."
          ],
          "diagram": "+----------------------+------------------------------------------------+\n| Parameter            | CapEx (On-Premises)    | OpEx (AWS Cloud)      |\n+----------------------+------------------------+-----------------------+\n| Upfront Cost         | Very High (Crores)     | Zero (zsh)             |\n| Procurement Time     | Weeks / Months         | Seconds / Minutes     |\n| Maintenance Risk     | 100% Customer          | Managed by AWS        |\n| Financial Risk       | High (Depreciation)    | Zero (Pay for usage)  |\n| Scalability          | Difficult & Rigid      | Instant & Elastic     |\n+----------------------+------------------------+-----------------------+"
        },
        {
          "heading": "5. Cloud Deployment Models (Deployment Models)",
          "hindiNote": "Board par 4 types ke cloud deployment models diagram ke sath explain kiye gaye:",
          "points": [
            "Public Cloud: AWS, Google Cloud, Microsoft Azure - Ye internet par general public aur all enterprises ke liye accessible hai.",
            "Private Cloud: Kisi single organization (jaise Bank ya Defense) ka dedicated private infrastructure.",
            "Hybrid Cloud: On-premises data center aur public cloud ka combination (via AWS Direct Connect ya Site VPN).",
            "Community Cloud: Common compliance goals wale organizations (jaise Hospitals, Universities) ka shared cloud."
          ],
          "diagram": "[ Public Cloud (AWS/Azure) ] <==========> [ Private Cloud (On-Prem Data Center) ]\n                                    |\n                         [ HYBRID CLOUD BRIDGE ]\n                    (AWS Direct Connect / Site VPN)"
        },
        {
          "heading": "6. Cloud Service Models Pyramid (IaaS vs PaaS vs SaaS)",
          "hindiNote": "Ye pyramid diagram board par explain kiya gaya - kaunsa layer AWS manage karegi aur kaunsa aap:",
          "points": [
            "IaaS (Infrastructure as a Service): AWS hardware aur virtualization manage karti hai. OS, patching, runtime, aur data aap manage karte hain (jaise EC2, VPC, EBS).",
            "PaaS (Platform as a Service): AWS hardware, OS, runtime aur patching manage karti hai. Aap sirf application code aur data deploy karte hain (jaise Elastic Beanstalk, RDS).",
            "SaaS (Software as a Service): End-user ready-made software application. Kuch bhi install ya patch nahi karna (jaise Gmail, Office 365, Google Drive)."
          ],
          "diagram": "                    /\\ \n                   /  \\   SaaS (Software as a Service) -> Gmail, Salesforce\n                  /----\\  PaaS (Platform as a Service) -> Elastic Beanstalk, RDS\n                 /------\\ IaaS (Infrastructure as a Service) -> EC2, VPC, EBS\n                +--------+"
        },
        {
          "heading": "7. AWS Global Infrastructure (Global Infrastructure Overview)",
          "hindiNote": "Board par bataya gaya ki AWS ka global footprint kaise structured hai:",
          "points": [
            "Regions: Worldwide alag-alag geographical locations (jaise Mumbai ap-south-1, Virginia us-east-1).",
            "Availability Zones (AZs): Ek Region ke andar minimum 2 ya 3 isolated physical data centers (jaise ap-south-1a, ap-south-1b). Ye ultra-low latency dark fiber se connected hote hain taaki disaster me bhi high availability rahe.",
            "Edge Locations: Global cities me distributed caching points (CloudFront CDN) jo users ko low-latency content serve karte hain."
          ],
          "diagram": "AWS REGION (e.g. ap-south-1 Mumbai)\n+--------------------------------------------------------------+\n|  [ AZ 1: ap-south-1a ] <==== Fiber ====> [ AZ 2: ap-south-1b ]|\n|  (Data Center A)                          (Data Center B)    |\n|           \\                                      /           |\n|            +===========< Ultra-Low Latency >====+            |\n|                                  |                           |\n|                         [ AZ 3: ap-south-1c ]                |\n|                         (Data Center C)                      |\n+--------------------------------------------------------------+"
        },
        {
          "heading": "8. AWS Certification Tree & Common Doubts (Certifications & FAQ)",
          "hindiNote": "Lecture ke end me board par certification roadmap aur students ke common doubts address kiye gaye:",
          "points": [
            "Roadmap: Cloud Practitioner (Level 1) -> Solutions Architect Associate SAA-C03 (Level 2) -> Solutions Architect Professional SAP-C02 (Level 3).",
            "Kya coding/programming zaroori hai? -> Bilkul nahi! Solutions Architect aur SysOps roles me coding compulsory nahi hai. Aapko architectural concepts, cloud networking (IP, Port, Subnet) aur basic Linux ki clear practical understanding honi chahiye."
          ],
          "diagram": "[ Level 1: Foundational ]  AWS Certified Cloud Practitioner\n           |\n[ Level 2: Associate ]     AWS Solutions Architect Associate (SAA-C03) <--- FOCUS\n           |\n[ Level 3: Professional ]  AWS Solutions Architect Professional (SAP-C02)\n           |\n[ Level 4: Specialty ]     Security / Advanced Networking / Database"
        }
      ]
    }
  },
  {
    "id": 2,
    "lecNum": 2,
    "videoId": "XMskE8AjEjs",
    "youtubeUrl": "https://www.youtube.com/watch?v=XMskE8AjEjs",
    "rawTitle": "IAAS, PAAS and SAAS in AWS | Lec 2 | How Cloud Works | Virtualization layers in AWS CLoud",
    "title": "Lec 2: Cloud Service Models: IaaS, PaaS, SaaS & Virtualization Layers",
    "cleanTitle": "Cloud Service Models: IaaS, PaaS, SaaS & Virtualization Layers",
    "duration": "22:30",
    "moduleId": 1,
    "moduleName": "Cloud Fundamentals & AWS Global Infrastructure",
    "moduleBadge": "Basics & Infra",
    "color": "#3B82F6",
    "icon": "cloud",
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
  {
    "id": 3,
    "lecNum": 3,
    "videoId": "uujEQjiw7CU",
    "youtubeUrl": "https://www.youtube.com/watch?v=uujEQjiw7CU",
    "rawTitle": "How to create AWS Free Account-Hindi LEC 3| AWS Solution Architect tutorial for beginners",
    "title": "Lec 3: How to Create AWS Free Tier Account & Security Best Practices",
    "cleanTitle": "How to Create AWS Free Tier Account & Security Best Practices",
    "duration": "5:53",
    "moduleId": 1,
    "moduleName": "Cloud Fundamentals & AWS Global Infrastructure",
    "moduleBadge": "Basics & Infra",
    "color": "#3B82F6",
    "icon": "cloud",
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
  {
    "id": 4,
    "lecNum": 4,
    "videoId": "gO_2VWUkl0U",
    "youtubeUrl": "https://www.youtube.com/watch?v=gO_2VWUkl0U",
    "rawTitle": "Types of EC2 Instances Part 1-Hindi/urdu | Lec-04 | Theory of Elastic compute Cloud | AWS tutorial",
    "title": "Lec 4: Amazon EC2 Overview & Elastic Compute Cloud Architecture",
    "cleanTitle": "Amazon EC2 Overview & Elastic Compute Cloud Architecture",
    "duration": "17:46",
    "moduleId": 2,
    "moduleName": "Amazon EC2 & Compute Architectures",
    "moduleBadge": "Compute",
    "color": "#F59E0B",
    "icon": "server",
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
  {
    "id": 5,
    "lecNum": 5,
    "videoId": "UQ8eBZvPrYc",
    "youtubeUrl": "https://www.youtube.com/watch?v=UQ8eBZvPrYc",
    "rawTitle": "Amazon EC2 Part 2-Hindi/Urdu | LEC-05 | General Purpose Instance | TYPES OF EC2 |what is ec2 in aws",
    "title": "Lec 5: Amazon EC2 Instance Types: General Purpose (T and M Families)",
    "cleanTitle": "Amazon EC2 Instance Types: General Purpose (T and M Families)",
    "duration": "20:05",
    "moduleId": 2,
    "moduleName": "Amazon EC2 & Compute Architectures",
    "moduleBadge": "Compute",
    "color": "#F59E0B",
    "icon": "server",
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
  {
    "id": 6,
    "lecNum": 6,
    "videoId": "4ry6XM7PvEQ",
    "youtubeUrl": "https://www.youtube.com/watch?v=4ry6XM7PvEQ",
    "rawTitle": "Amazon EC2 Part-3 Hindi/urdu | Lec-06 | Compute Optimized Instance | EC2 instances Types |",
    "title": "Lec 6: Amazon EC2 Instance Types: Compute Optimized (C Family)",
    "cleanTitle": "Amazon EC2 Instance Types: Compute Optimized (C Family)",
    "duration": "10:52",
    "moduleId": 2,
    "moduleName": "Amazon EC2 & Compute Architectures",
    "moduleBadge": "Compute",
    "color": "#F59E0B",
    "icon": "server",
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
  {
    "id": 7,
    "lecNum": 7,
    "videoId": "hXfNX_p2mHw",
    "youtubeUrl": "https://www.youtube.com/watch?v=hXfNX_p2mHw",
    "rawTitle": "Amazon EC2 Part-4 Hindi/Urdu |LEC-07 | Memory optimized Instance | AWS Tutorials in Hindi/Urdu |",
    "title": "Lec 7: Amazon EC2 Instance Types: Memory Optimized (R, X, and Z Families)",
    "cleanTitle": "Amazon EC2 Instance Types: Memory Optimized (R, X, and Z Families)",
    "duration": "9:27",
    "moduleId": 2,
    "moduleName": "Amazon EC2 & Compute Architectures",
    "moduleBadge": "Compute",
    "color": "#F59E0B",
    "icon": "server",
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
  {
    "id": 8,
    "lecNum": 8,
    "videoId": "EZlCvbfJbKE",
    "youtubeUrl": "https://www.youtube.com/watch?v=EZlCvbfJbKE",
    "rawTitle": "Amazon EC2 Part-5 Hindi/urdu | LEC-08 |Storage Optimized Instances | AWS Solution Architect Tutorial",
    "title": "Lec 8: Amazon EC2 Instance Types: Storage Optimized (I, D, and H Families)",
    "cleanTitle": "Amazon EC2 Instance Types: Storage Optimized (I, D, and H Families)",
    "duration": "13:34",
    "moduleId": 2,
    "moduleName": "Amazon EC2 & Compute Architectures",
    "moduleBadge": "Compute",
    "color": "#F59E0B",
    "icon": "server",
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
  {
    "id": 9,
    "lecNum": 9,
    "videoId": "zE3QIEiiNSE",
    "youtubeUrl": "https://www.youtube.com/watch?v=zE3QIEiiNSE",
    "rawTitle": "Amazon EC2 Part -6 Hindi/Urdu | LEC-09 | Accelerated Computing Instance |AWS EC2 Tutorials",
    "title": "Lec 9: Amazon EC2 Instance Types: Accelerated Computing (P, G, and F Families)",
    "cleanTitle": "Amazon EC2 Instance Types: Accelerated Computing (P, G, and F Families)",
    "duration": "13:02",
    "moduleId": 2,
    "moduleName": "Amazon EC2 & Compute Architectures",
    "moduleBadge": "Compute",
    "color": "#F59E0B",
    "icon": "server",
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
  {
    "id": 10,
    "lecNum": 10,
    "videoId": "h0z-l5v-abs",
    "youtubeUrl": "https://www.youtube.com/watch?v=h0z-l5v-abs",
    "rawTitle": "Amazon EC2 Part-7-Hindi | High Memory Instance | LEC-10 | AWS Tutorial for beginners in hindi",
    "title": "Lec 10: Amazon EC2 Instance Types: High Memory & Bare Metal Instances",
    "cleanTitle": "Amazon EC2 Instance Types: High Memory & Bare Metal Instances",
    "duration": "13:31",
    "moduleId": 2,
    "moduleName": "Amazon EC2 & Compute Architectures",
    "moduleBadge": "Compute",
    "color": "#F59E0B",
    "icon": "server",
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
  {
    "id": 11,
    "lecNum": 11,
    "videoId": "dG11IG2WfxA",
    "youtubeUrl": "https://www.youtube.com/watch?v=dG11IG2WfxA",
    "rawTitle": "Amazon EC2 Purchasing options Part-8-Hindi/urdu | Lec-11 | AWS Elastic compute cloud | AWS SAA C03",
    "title": "Lec 11: Amazon EC2 Purchasing Models: On-Demand, Reserved, Spot & Savings Plans",
    "cleanTitle": "Amazon EC2 Purchasing Models: On-Demand, Reserved, Spot & Savings Plans",
    "duration": "37:11",
    "moduleId": 2,
    "moduleName": "Amazon EC2 & Compute Architectures",
    "moduleBadge": "Compute",
    "color": "#F59E0B",
    "icon": "server",
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
  {
    "id": 12,
    "lecNum": 12,
    "videoId": "EDyLhse2pw0",
    "youtubeUrl": "https://www.youtube.com/watch?v=EDyLhse2pw0",
    "rawTitle": "AWS EC2 Instances Part-9- Hindi/Urdu | LEC-12 | AWS Solution architect tutorial for beginners",
    "title": "Lec 12: EC2 Placement Groups: Cluster, Spread, and Partition Strategies",
    "cleanTitle": "EC2 Placement Groups: Cluster, Spread, and Partition Strategies",
    "duration": "33:24",
    "moduleId": 2,
    "moduleName": "Amazon EC2 & Compute Architectures",
    "moduleBadge": "Compute",
    "color": "#F59E0B",
    "icon": "server",
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
  {
    "id": 13,
    "lecNum": 13,
    "videoId": "zYBYm45A78E",
    "youtubeUrl": "https://www.youtube.com/watch?v=zYBYm45A78E",
    "rawTitle": "How to Create a Windows Server in AWS | LEC 13 | How to launch Windows Instance in AWS | Amazon EC2",
    "title": "Lec 13: Hands-On: Launch Windows Server EC2 & Connect via RDP (Port 3389)",
    "cleanTitle": "Hands-On: Launch Windows Server EC2 & Connect via RDP (Port 3389)",
    "duration": "24:10",
    "moduleId": 2,
    "moduleName": "Amazon EC2 & Compute Architectures",
    "moduleBadge": "Compute",
    "color": "#F59E0B",
    "icon": "server",
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
  {
    "id": 14,
    "lecNum": 14,
    "videoId": "L1Rp--bWwPs",
    "youtubeUrl": "https://www.youtube.com/watch?v=L1Rp--bWwPs",
    "rawTitle": "How to Install webserver IIS and Create Webpage on windows Server-Hindi/Urdu | Lec-14 | AWS SAA C03",
    "title": "Lec 14: Install IIS Web Server & Host Custom Webpage on Windows EC2",
    "cleanTitle": "Install IIS Web Server & Host Custom Webpage on Windows EC2",
    "duration": "13:34",
    "moduleId": 2,
    "moduleName": "Amazon EC2 & Compute Architectures",
    "moduleBadge": "Compute",
    "color": "#F59E0B",
    "icon": "server",
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
  {
    "id": 15,
    "lecNum": 15,
    "videoId": "9Cs6n6xA0Sw",
    "youtubeUrl": "https://www.youtube.com/watch?v=9Cs6n6xA0Sw",
    "rawTitle": "How to attach extra volume in existing windows machine in AWS | Lec-15 | AWS SAA C03 Tutorials",
    "title": "Lec 15: How to Attach Extra EBS Volumes in Windows EC2 & Initialize Disks",
    "cleanTitle": "How to Attach Extra EBS Volumes in Windows EC2 & Initialize Disks",
    "duration": "19:38",
    "moduleId": 2,
    "moduleName": "Amazon EC2 & Compute Architectures",
    "moduleBadge": "Compute",
    "color": "#F59E0B",
    "icon": "server",
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
  {
    "id": 16,
    "lecNum": 16,
    "videoId": "V7RC32ufxek",
    "youtubeUrl": "https://www.youtube.com/watch?v=V7RC32ufxek",
    "rawTitle": "AWS EC2 Linux Launch & Concept using SSH | LEC-16 | How to create an AWS EC2 Linux instance | SAAC03",
    "title": "Lec 16: Amazon EC2 Linux Launch, SSH Key Pairs & Terminal Connectivity",
    "cleanTitle": "Amazon EC2 Linux Launch, SSH Key Pairs & Terminal Connectivity",
    "duration": "13:39",
    "moduleId": 2,
    "moduleName": "Amazon EC2 & Compute Architectures",
    "moduleBadge": "Compute",
    "color": "#F59E0B",
    "icon": "server",
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
  {
    "id": 17,
    "lecNum": 17,
    "videoId": "BI65txf8_kQ",
    "youtubeUrl": "https://www.youtube.com/watch?v=BI65txf8_kQ",
    "rawTitle": "How to Retrieve Metadata of Amazon linux machine-Hindi/Urdu | LEC-17 | AWS SAA C03 Tutorials |",
    "title": "Lec 17: EC2 Instance Metadata (IMDSv1 & IMDSv2) & User Data Automation",
    "cleanTitle": "EC2 Instance Metadata (IMDSv1 & IMDSv2) & User Data Automation",
    "duration": "8:38",
    "moduleId": 2,
    "moduleName": "Amazon EC2 & Compute Architectures",
    "moduleBadge": "Compute",
    "color": "#F59E0B",
    "icon": "server",
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
  {
    "id": 18,
    "lecNum": 18,
    "videoId": "K7Nxx0YuVxo",
    "youtubeUrl": "https://www.youtube.com/watch?v=K7Nxx0YuVxo",
    "rawTitle": "Virtual Private Cloud in AWS Part-1 Hindi/Urdu | Lec-18 |What is VPC and how it works | Types of VPC",
    "title": "Lec 18: AWS VPC Part 1: What is Virtual Private Cloud & Default vs Custom VPC",
    "cleanTitle": "AWS VPC Part 1: What is Virtual Private Cloud & Default vs Custom VPC",
    "duration": "24:18",
    "moduleId": 3,
    "moduleName": "Amazon VPC & Cloud Networking",
    "moduleBadge": "Networking",
    "color": "#10B981",
    "icon": "network-wired",
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
  {
    "id": 19,
    "lecNum": 19,
    "videoId": "tXJiWva4lsQ",
    "youtubeUrl": "https://www.youtube.com/watch?v=tXJiWva4lsQ",
    "rawTitle": "Virtual Private Cloud Part-2 Hindi | LEC-19 |  What is VPC | What is a Virtual private Cloud | AWS",
    "title": "Lec 19: AWS VPC Part 2: Subnets Architecture & 5 Reserved IP Addresses",
    "cleanTitle": "AWS VPC Part 2: Subnets Architecture & 5 Reserved IP Addresses",
    "duration": "14:12",
    "moduleId": 3,
    "moduleName": "Amazon VPC & Cloud Networking",
    "moduleBadge": "Networking",
    "color": "#10B981",
    "icon": "network-wired",
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
  {
    "id": 20,
    "lecNum": 20,
    "videoId": "OKuPIlVGEjg",
    "youtubeUrl": "https://www.youtube.com/watch?v=OKuPIlVGEjg",
    "rawTitle": "Virtual Private Cloud Part-3 Hindi/Urdu | LEC-20 | What is Internet Gateway | Implied Router | AWS",
    "title": "Lec 20: AWS VPC Part 3: Route Tables, Implied Router & Internet Gateway",
    "cleanTitle": "AWS VPC Part 3: Route Tables, Implied Router & Internet Gateway",
    "duration": "17:58",
    "moduleId": 3,
    "moduleName": "Amazon VPC & Cloud Networking",
    "moduleBadge": "Networking",
    "color": "#10B981",
    "icon": "network-wired",
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
  },
  {
    "id": 21,
    "lecNum": 21,
    "videoId": "wVqrZjF1ics",
    "youtubeUrl": "https://www.youtube.com/watch?v=wVqrZjF1ics",
    "rawTitle": "Virtual Private Cloud Part-4 Hindi/Urdu | Lec-21 | Internet Gateway | Network ACL | AWS SAA C03",
    "title": "Lec 21: AWS VPC Part 4: Network ACLs (NACL) vs Security Groups (SG)",
    "cleanTitle": "AWS VPC Part 4: Network ACLs (NACL) vs Security Groups (SG)",
    "duration": "44:27",
    "moduleId": 3,
    "moduleName": "Amazon VPC & Cloud Networking",
    "moduleBadge": "Networking",
    "color": "#10B981",
    "icon": "network-wired",
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
  {
    "id": 22,
    "lecNum": 22,
    "videoId": "v01oaZBRRpY",
    "youtubeUrl": "https://www.youtube.com/watch?v=v01oaZBRRpY",
    "rawTitle": "AWS VPC Demo | Creating VPC,Subnets,Route table | LEC-22 |  How to Create Amazon VPC | AWS SAA C03",
    "title": "Lec 22: AWS VPC Complete Hands-on Lab: VPC, Subnets & Route Tables",
    "cleanTitle": "AWS VPC Complete Hands-on Lab: VPC, Subnets & Route Tables",
    "duration": "26:11",
    "moduleId": 3,
    "moduleName": "Amazon VPC & Cloud Networking",
    "moduleBadge": "Networking",
    "color": "#10B981",
    "icon": "network-wired",
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
  {
    "id": 23,
    "lecNum": 23,
    "videoId": "YRYwbORyXkI",
    "youtubeUrl": "https://www.youtube.com/watch?v=YRYwbORyXkI",
    "rawTitle": "Lab on VPC NAT Gateway-Hindi/Urdu | Lec-23 |How to access internet via NAT Gateway | AWS VPC demo",
    "title": "Lec 23: Hands-On Lab: AWS VPC NAT Gateway for Private Subnets",
    "cleanTitle": "Hands-On Lab: AWS VPC NAT Gateway for Private Subnets",
    "duration": "18:49",
    "moduleId": 3,
    "moduleName": "Amazon VPC & Cloud Networking",
    "moduleBadge": "Networking",
    "color": "#10B981",
    "icon": "network-wired",
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
  {
    "id": 24,
    "lecNum": 24,
    "videoId": "kM7zunMeBg8",
    "youtubeUrl": "https://www.youtube.com/watch?v=kM7zunMeBg8",
    "rawTitle": "AWS-VPC Peering- Concept & Demo | LEC 24| 2 VPC within a Region | AWS-Solution Architect Tutorials",
    "title": "Lec 24: AWS VPC Peering: Same-Region Concept & Configuration Demo",
    "cleanTitle": "AWS VPC Peering: Same-Region Concept & Configuration Demo",
    "duration": "37:45",
    "moduleId": 3,
    "moduleName": "Amazon VPC & Cloud Networking",
    "moduleBadge": "Networking",
    "color": "#10B981",
    "icon": "network-wired",
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
  {
    "id": 25,
    "lecNum": 25,
    "videoId": "Evj6DQr6gwM",
    "youtubeUrl": "https://www.youtube.com/watch?v=Evj6DQr6gwM",
    "rawTitle": "AWS-VPC Peering across Two Region | Lec-25 | Cross-Region VPC Peering | AWS-CSA Associate Exam",
    "title": "Lec 25: AWS VPC Peering: Cross-Region VPC Peering Across Global AWS Regions",
    "cleanTitle": "AWS VPC Peering: Cross-Region VPC Peering Across Global AWS Regions",
    "duration": "28:02",
    "moduleId": 3,
    "moduleName": "Amazon VPC & Cloud Networking",
    "moduleBadge": "Networking",
    "color": "#10B981",
    "icon": "network-wired",
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
  {
    "id": 26,
    "lecNum": 26,
    "videoId": "5pI8IcBTM2s",
    "youtubeUrl": "https://www.youtube.com/watch?v=5pI8IcBTM2s",
    "rawTitle": "AWS Network ACL's inside my VPC-Hindi/Urdu | LEC-26 | AWS Solution Architect tutorial for beginners",
    "title": "Lec 26: AWS Network ACLs (NACL) Deep Dive & Subnet Security Testing",
    "cleanTitle": "AWS Network ACLs (NACL) Deep Dive & Subnet Security Testing",
    "duration": "18:14",
    "moduleId": 3,
    "moduleName": "Amazon VPC & Cloud Networking",
    "moduleBadge": "Networking",
    "color": "#10B981",
    "icon": "network-wired",
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
  {
    "id": 27,
    "lecNum": 27,
    "videoId": "ab036IW3ASw",
    "youtubeUrl": "https://www.youtube.com/watch?v=ab036IW3ASw",
    "rawTitle": "AWS VPC Endpoint Theory with Lab-Hindi/Urdu | LEC-27 | AWS  VPC Endpoint for S3 | AWS SAA C03",
    "title": "Lec 27: AWS VPC Endpoints: Gateway Endpoints (S3 & DynamoDB) vs Interface Endpoints",
    "cleanTitle": "AWS VPC Endpoints: Gateway Endpoints (S3 & DynamoDB) vs Interface Endpoints",
    "duration": "29:44",
    "moduleId": 3,
    "moduleName": "Amazon VPC & Cloud Networking",
    "moduleBadge": "Networking",
    "color": "#10B981",
    "icon": "network-wired",
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
  {
    "id": 28,
    "lecNum": 28,
    "videoId": "WxBiGioCBDk",
    "youtubeUrl": "https://www.youtube.com/watch?v=WxBiGioCBDk",
    "rawTitle": "AWS Tutorials in Hindi/Urdu | VPN Connection in AWS-LEC 28 | Access EC2 Instance through VPN",
    "title": "Lec 28: AWS Client VPN & Site-to-Site VPN Connection to Access EC2",
    "cleanTitle": "AWS Client VPN & Site-to-Site VPN Connection to Access EC2",
    "duration": "24:27",
    "moduleId": 3,
    "moduleName": "Amazon VPC & Cloud Networking",
    "moduleBadge": "Networking",
    "color": "#10B981",
    "icon": "network-wired",
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
  {
    "id": 29,
    "lecNum": 29,
    "videoId": "ZG-JRs5qRlc",
    "youtubeUrl": "https://www.youtube.com/watch?v=ZG-JRs5qRlc",
    "rawTitle": "AWS Storage Part-1 Hindi/Urdu | Lec-29 | Types of AWS Storage | Glacier | EBS | AWS Cloud Storage",
    "title": "Lec 29: AWS Storage Architecture Part 1: Block, File, and Object Storage Overview",
    "cleanTitle": "AWS Storage Architecture Part 1: Block, File, and Object Storage Overview",
    "duration": "17:28",
    "moduleId": 4,
    "moduleName": "AWS Storage Services (S3, EFS & Lifecycle)",
    "moduleBadge": "Storage",
    "color": "#6366F1",
    "icon": "database",
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
  {
    "id": 30,
    "lecNum": 30,
    "videoId": "uPv6rmhKUvA",
    "youtubeUrl": "https://www.youtube.com/watch?v=uPv6rmhKUvA",
    "rawTitle": "AWS Storage Part-2 Hindi/urdu | Block storage and Object Storage | AWS Solution Architect Tutorial",
    "title": "Lec 30: Block Storage vs Object Storage: Deep Dive & Differences",
    "cleanTitle": "Block Storage vs Object Storage: Deep Dive & Differences",
    "duration": "17:29",
    "moduleId": 4,
    "moduleName": "AWS Storage Services (S3, EFS & Lifecycle)",
    "moduleBadge": "Storage",
    "color": "#6366F1",
    "icon": "database",
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
  {
    "id": 31,
    "lecNum": 31,
    "videoId": "IHnorot0kxM",
    "youtubeUrl": "https://www.youtube.com/watch?v=IHnorot0kxM",
    "rawTitle": "AWS Storage Part-3 Hindi/urdu | Lec-31 |  S3 introduction | S3 Naming Rules | Simple Storage service",
    "title": "Lec 31: Amazon S3 Introduction & S3 Bucket Naming Rules",
    "cleanTitle": "Amazon S3 Introduction & S3 Bucket Naming Rules",
    "duration": "28:28",
    "moduleId": 4,
    "moduleName": "AWS Storage Services (S3, EFS & Lifecycle)",
    "moduleBadge": "Storage",
    "color": "#6366F1",
    "icon": "database",
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
  {
    "id": 32,
    "lecNum": 32,
    "videoId": "S_RV_NTABo0",
    "youtubeUrl": "https://www.youtube.com/watch?v=S_RV_NTABo0",
    "rawTitle": "AWS Storage Part-4 Hindi/urdu | S3 Versioning | MFA Delete | S3 Copying Objects | AWS S3 Tutorial",
    "title": "Lec 32: Amazon S3 Versioning, MFA Delete & Copying Objects",
    "cleanTitle": "Amazon S3 Versioning, MFA Delete & Copying Objects",
    "duration": "30:06",
    "moduleId": 4,
    "moduleName": "AWS Storage Services (S3, EFS & Lifecycle)",
    "moduleBadge": "Storage",
    "color": "#6366F1",
    "icon": "database",
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
  {
    "id": 33,
    "lecNum": 33,
    "videoId": "HTb_VYOE4WM",
    "youtubeUrl": "https://www.youtube.com/watch?v=HTb_VYOE4WM",
    "rawTitle": "Amazon S3 Tutorials Hindi/Urdu/English | Lec-33 | Amazon S3 Storage classes | S3 Glacier | S3-IA",
    "title": "Lec 33: Amazon S3 Storage Classes: Standard, Intelligent-Tiering, IA & Glacier",
    "cleanTitle": "Amazon S3 Storage Classes: Standard, Intelligent-Tiering, IA & Glacier",
    "duration": "55:58",
    "moduleId": 4,
    "moduleName": "AWS Storage Services (S3, EFS & Lifecycle)",
    "moduleBadge": "Storage",
    "color": "#6366F1",
    "icon": "database",
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
  {
    "id": 34,
    "lecNum": 34,
    "videoId": "MZBTyfs2jTw",
    "youtubeUrl": "https://www.youtube.com/watch?v=MZBTyfs2jTw",
    "rawTitle": "S3 Bucket Creation LAB-Lec 34  | AWS Simple Storage Service Lab | AWS S3 Bucket | AWS SAA C03",
    "title": "Lec 34: Amazon S3 Bucket Creation Hands-on Lab via AWS Console",
    "cleanTitle": "Amazon S3 Bucket Creation Hands-on Lab via AWS Console",
    "duration": "17:32",
    "moduleId": 4,
    "moduleName": "AWS Storage Services (S3, EFS & Lifecycle)",
    "moduleBadge": "Storage",
    "color": "#6366F1",
    "icon": "database",
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
  {
    "id": 35,
    "lecNum": 35,
    "videoId": "g_rw2X5HJZg",
    "youtubeUrl": "https://www.youtube.com/watch?v=g_rw2X5HJZg",
    "rawTitle": "S3 Bucket Creation using CLI-Hindi/Urdu | Lec-35 | AWS tutorial for beginners | AWS SAA C03 Tutorial",
    "title": "Lec 35: Amazon S3 Management using AWS CLI: Commands & Automation",
    "cleanTitle": "Amazon S3 Management using AWS CLI: Commands & Automation",
    "duration": "21:10",
    "moduleId": 4,
    "moduleName": "AWS Storage Services (S3, EFS & Lifecycle)",
    "moduleBadge": "Storage",
    "color": "#6366F1",
    "icon": "database",
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
  {
    "id": 36,
    "lecNum": 36,
    "videoId": "3BRIA2SDQUk",
    "youtubeUrl": "https://www.youtube.com/watch?v=3BRIA2SDQUk",
    "rawTitle": "S3 Versioning-Hindi/Urdu | Lec-36 | How to enable versioning on S3 Bucket| AWS Tutorial for beginner",
    "title": "Lec 36: Amazon S3 Versioning Hands-on Lab: Delete Markers & File Recovery",
    "cleanTitle": "Amazon S3 Versioning Hands-on Lab: Delete Markers & File Recovery",
    "duration": "13:49",
    "moduleId": 4,
    "moduleName": "AWS Storage Services (S3, EFS & Lifecycle)",
    "moduleBadge": "Storage",
    "color": "#6366F1",
    "icon": "database",
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
  {
    "id": 37,
    "lecNum": 37,
    "videoId": "kraKcjxSJv0",
    "youtubeUrl": "https://www.youtube.com/watch?v=kraKcjxSJv0",
    "rawTitle": "S3 Cross Region Replication in Hindi/Urdu | Lec-37 | AWS Solution Architect Tutorial for beginners",
    "title": "Lec 37: Amazon S3 Cross-Region Replication (CRR) & Same-Region Replication (SRR)",
    "cleanTitle": "Amazon S3 Cross-Region Replication (CRR) & Same-Region Replication (SRR)",
    "duration": "16:45",
    "moduleId": 4,
    "moduleName": "AWS Storage Services (S3, EFS & Lifecycle)",
    "moduleBadge": "Storage",
    "color": "#6366F1",
    "icon": "database",
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
  {
    "id": 38,
    "lecNum": 38,
    "videoId": "vz-o7AXg_cU",
    "youtubeUrl": "https://www.youtube.com/watch?v=vz-o7AXg_cU",
    "rawTitle": "AWS S3 Object Lifecycle Management-Hindi/Urdu | Lec-38 | S3 Demo | AWS S3 Tutorial | AWS Glacier",
    "title": "Lec 38: Amazon S3 Object Lifecycle Management: Automated Cost Optimization",
    "cleanTitle": "Amazon S3 Object Lifecycle Management: Automated Cost Optimization",
    "duration": "13:08",
    "moduleId": 4,
    "moduleName": "AWS Storage Services (S3, EFS & Lifecycle)",
    "moduleBadge": "Storage",
    "color": "#6366F1",
    "icon": "database",
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
  {
    "id": 39,
    "lecNum": 39,
    "videoId": "hx6mMIcQN6E",
    "youtubeUrl": "https://www.youtube.com/watch?v=hx6mMIcQN6E",
    "rawTitle": "AWS EFS Demo-Using through linux servers-Hindi/Urdu | Lec-39 | Elastic file system |AWS EFS Tutorial",
    "title": "Lec 39: Amazon EFS Hands-on Demo: Shared Elastic File System on Linux EC2",
    "cleanTitle": "Amazon EFS Hands-on Demo: Shared Elastic File System on Linux EC2",
    "duration": "20:00",
    "moduleId": 4,
    "moduleName": "AWS Storage Services (S3, EFS & Lifecycle)",
    "moduleBadge": "Storage",
    "color": "#6366F1",
    "icon": "database",
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
  {
    "id": 40,
    "lecNum": 40,
    "videoId": "OKtZhbg7he0",
    "youtubeUrl": "https://www.youtube.com/watch?v=OKtZhbg7he0",
    "rawTitle": "Static Website Hosting on AWS S3-Hindi/Urdu | LEC-40 | Make website in 10 Minutes on AWS | Route 53",
    "title": "Lec 40: Hosting Static Websites on Amazon S3 in 10 Minutes",
    "cleanTitle": "Hosting Static Websites on Amazon S3 in 10 Minutes",
    "duration": "22:01",
    "moduleId": 4,
    "moduleName": "AWS Storage Services (S3, EFS & Lifecycle)",
    "moduleBadge": "Storage",
    "color": "#6366F1",
    "icon": "database",
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
  {
    "id": 41,
    "lecNum": 41,
    "videoId": "YJnqXaGb2M8",
    "youtubeUrl": "https://www.youtube.com/watch?v=YJnqXaGb2M8",
    "rawTitle": "Hosting Static website on S3 Bucket using route 53-Hindi/Urdu | Lec-41 | S3 static Website hosting |",
    "title": "Lec 41: Hosting S3 Static Website with Custom Domain Using Amazon Route 53",
    "cleanTitle": "Hosting S3 Static Website with Custom Domain Using Amazon Route 53",
    "duration": "23:55",
    "moduleId": 4,
    "moduleName": "AWS Storage Services (S3, EFS & Lifecycle)",
    "moduleBadge": "Storage",
    "color": "#6366F1",
    "icon": "database",
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
  {
    "id": 42,
    "lecNum": 42,
    "videoId": "gJD8M5dcs4s",
    "youtubeUrl": "https://www.youtube.com/watch?v=gJD8M5dcs4s",
    "rawTitle": "Elastic Block Store Part-1-Hindi/Urdu | LEC-42 |  Difference between EBS and instance store | AWS",
    "title": "Lec 42: Amazon EBS Part 1: EBS vs Instance Store Architecture",
    "cleanTitle": "Amazon EBS Part 1: EBS vs Instance Store Architecture",
    "duration": "20:24",
    "moduleId": 5,
    "moduleName": "Amazon EBS & Machine Images (AMI)",
    "moduleBadge": "Block Storage",
    "color": "#EC4899",
    "icon": "hdd",
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
  {
    "id": 43,
    "lecNum": 43,
    "videoId": "XTpPMf7AgLc",
    "youtubeUrl": "https://www.youtube.com/watch?v=XTpPMf7AgLc",
    "rawTitle": "Elastic Block Store Part-2-Hindi/Urdu | Lec-43 | EBS Volume Types | AWS-CSA Lectures | AWS EBS",
    "title": "Lec 43: Amazon EBS Part 2: EBS Volume Types (gp2, gp3, io1, io2, st1, sc1)",
    "cleanTitle": "Amazon EBS Part 2: EBS Volume Types (gp2, gp3, io1, io2, st1, sc1)",
    "duration": "30:43",
    "moduleId": 5,
    "moduleName": "Amazon EBS & Machine Images (AMI)",
    "moduleBadge": "Block Storage",
    "color": "#EC4899",
    "icon": "hdd",
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
  {
    "id": 44,
    "lecNum": 44,
    "videoId": "PkOhjYMteqs",
    "youtubeUrl": "https://www.youtube.com/watch?v=PkOhjYMteqs",
    "rawTitle": "AWS Elastic Block store Part-3-Hindi/Urdu | Lec-44 |How to take EBS Snapshot | AWS SA C003 Tutorials",
    "title": "Lec 44: Amazon EBS Part 3: EBS Snapshots Architecture & Point-in-Time Backups",
    "cleanTitle": "Amazon EBS Part 3: EBS Snapshots Architecture & Point-in-Time Backups",
    "duration": "27:48",
    "moduleId": 5,
    "moduleName": "Amazon EBS & Machine Images (AMI)",
    "moduleBadge": "Block Storage",
    "color": "#EC4899",
    "icon": "hdd",
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
  {
    "id": 45,
    "lecNum": 45,
    "videoId": "tzOs1_ed2IU",
    "youtubeUrl": "https://www.youtube.com/watch?v=tzOs1_ed2IU",
    "rawTitle": "Elastic Block Store (EBS) Part-4-Hindi/Urdu | Lec-45 | What is Incremental Snapshot | AWS SAA C03",
    "title": "Lec 45: Amazon EBS Part 4: Incremental Snapshot Internals & Changed Block Tracking",
    "cleanTitle": "Amazon EBS Part 4: Incremental Snapshot Internals & Changed Block Tracking",
    "duration": "14:58",
    "moduleId": 5,
    "moduleName": "Amazon EBS & Machine Images (AMI)",
    "moduleBadge": "Block Storage",
    "color": "#EC4899",
    "icon": "hdd",
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
  },
  {
    "id": 46,
    "lecNum": 46,
    "videoId": "fUY3NcpJ9sk",
    "youtubeUrl": "https://www.youtube.com/watch?v=fUY3NcpJ9sk",
    "rawTitle": "Elastic Block Store Part-5-Hindi/Urdu | LEC-46 | How to encrypt EBS Volume | AWS-SAA C03 exam",
    "title": "Lec 46: Amazon EBS Part 5: EBS Volume Encryption with AWS KMS",
    "cleanTitle": "Amazon EBS Part 5: EBS Volume Encryption with AWS KMS",
    "duration": "19:29",
    "moduleId": 5,
    "moduleName": "Amazon EBS & Machine Images (AMI)",
    "moduleBadge": "Block Storage",
    "color": "#EC4899",
    "icon": "hdd",
    "hindiSummary": "EBS Volume ko encrypt karne ka process: AWS KMS (Key Management Service) ke AES-256 keys ka use hota hai. Data at rest, data in flight (instance aur volume ke bich ka traffic), aur saare snapshots automatically encrypt hote hain. Unencrypted volume ko encrypt karne ke liye: Snapshot lo -> Snapshot copy karte waqt Encrypt karo -> Naya encrypted volume banao.",
    "englishSummary": "Architectural implementation of Amazon EBS Encryption using AWS Key Management Service (AWS KMS). AES-256 encryption applied to data at rest, disk I/O in transit, and derived snapshots. Complete process to encrypt an existing unencrypted volume.",
    "keyConcepts": [
      "Encrypted Elements: Data at rest inside the volume, all disk I/O moving between instance and volume, all snapshots created from the volume, and all volumes created from those snapshots.",
      "KMS Integration: Powered by AWS KMS Customer Master Keys (AWS Managed `aws/ebs` or Customer Managed CMK).",
      "Encrypting Existing Unencrypted Volumes:\n  1. Take a snapshot of the unencrypted volume.\n  2. Copy the snapshot and check the 'Encrypt this snapshot' checkbox (selecting KMS key).\n  3. Create a new volume from the encrypted snapshot copy.",
      "Default Account Encryption: You can enable 'Always encrypt new EBS volumes' at the AWS account region level."
    ],
    "examTips": "HIGH FREQUENCY EXAM WORKFLOW: You CANNOT directly encrypt an existing running unencrypted EBS volume. You MUST snapshot it, copy the snapshot with encryption enabled, and restore a new encrypted volume.",
    "architecture": "Unencrypted EBS -> Snapshot -> Copy Snapshot (Enable KMS AES-256) -> Encrypted Snapshot -> Create Encrypted EBS",
    "commandsOrSteps": [
      "aws ec2 copy-snapshot --source-region us-east-1 --source-snapshot-id snap-unencrypted --encrypted --kms-key-id alias/my-cmk",
      "aws ec2 enable-ebs-encryption-by-default # Enforces regional encryption for all future volumes"
    ],
    "interviewQuestions": "Q: How do you encrypt an existing unencrypted root EBS volume of a running EC2 instance with minimum downtime?\nA: Stop the instance, create an EBS snapshot of the root volume, copy the snapshot with encryption enabled using an AWS KMS key, create a new encrypted volume from that copy, attach it as `/dev/xvda` to the EC2 instance, and restart."
  },
  {
    "id": 47,
    "lecNum": 47,
    "videoId": "PIs_B8M00lE",
    "youtubeUrl": "https://www.youtube.com/watch?v=PIs_B8M00lE",
    "rawTitle": "Elastic Block store Part-6 in Hindi/Urdu | LEC-47 | How to Share EBS Snapshot | AWS  SAA C03 Videos",
    "title": "Lec 47: Amazon EBS Part 6: How to Share EBS Snapshots Across AWS Accounts",
    "cleanTitle": "Amazon EBS Part 6: How to Share EBS Snapshots Across AWS Accounts",
    "duration": "22:59",
    "moduleId": 5,
    "moduleName": "Amazon EBS & Machine Images (AMI)",
    "moduleBadge": "Block Storage",
    "color": "#EC4899",
    "icon": "hdd",
    "hindiSummary": "EBS Snapshot ko kisi doosre AWS account ke sath share karna. Agar snapshot unencrypted hai to direct account ID dalkar share ho jata hai. Agar snapshot AWS Managed key (`aws/ebs`) se encrypted hai, to use share nahi kar sakte! Pehle use Customer Managed Key (CMK) se re-encrypt karna padta hai aur KMS key policy me destination account ko permission deni padti hai.",
    "englishSummary": "Security architecture for cross-account EBS Snapshot sharing. Managing snapshot permissions (Private vs Public), handling encrypted snapshot sharing restrictions, and modifying AWS KMS Key Policies to allow cross-account key access.",
    "keyConcepts": [
      "Public vs Private Sharing: Snapshots can be shared privately with specific 12-digit AWS Account IDs, or shared publicly (CAUTION: never share sensitive production snapshots publicly).",
      "CRITICAL ENCRYPTION RULE: Snapshots encrypted with the default AWS Managed key (`aws/ebs`) CANNOT be shared across accounts.",
      "Cross-Account Encrypted Sharing Workflow:\n  1. Copy snapshot using a Customer Managed Key (CMK).\n  2. Update the KMS CMK Key Policy to grant `kms:CreateGrant` and `kms:Decrypt` to the destination AWS Account ID.\n  3. Share the re-encrypted snapshot with the destination Account ID.\n  4. Destination account must copy the shared snapshot into their own account with their own KMS key before creating volumes."
    ],
    "examTips": "EXAM TRAP: Can you share a snapshot encrypted with the default AWS Managed KMS key (`aws/ebs`)? NO! You must re-encrypt with a Customer Managed CMK first.",
    "architecture": "Account A (Snapshot encrypted with CMK) === [KMS Key Policy Permission] ===> Account B (Copies snapshot with Account B KMS Key)",
    "commandsOrSteps": [
      "aws ec2 modify-snapshot-attribute --snapshot-id snap-xxxx --attribute createVolumePermission --operation-type add --user-ids 123456789012"
    ],
    "interviewQuestions": "Q: Why does AWS prevent sharing snapshots encrypted with the default `aws/ebs` KMS key across accounts?\nA: The default `aws/ebs` key is an AWS-managed key scoped strictly to your account. Its key policy cannot be modified to grant cross-account permissions. Only Customer Managed Keys (CMKs) support cross-account key delegation."
  },
  {
    "id": 48,
    "lecNum": 48,
    "videoId": "y2kEZkiQwM4",
    "youtubeUrl": "https://www.youtube.com/watch?v=y2kEZkiQwM4",
    "rawTitle": "How to create AMI From EC2 | LEC-48 | What is amazon machine image | AWS Solution Architect TUTORIAL",
    "title": "Lec 48: How to Create an Amazon Machine Image (AMI) from an EC2 Instance",
    "cleanTitle": "How to Create an Amazon Machine Image (AMI) from an EC2 Instance",
    "duration": "24:11",
    "moduleId": 5,
    "moduleName": "Amazon EBS & Machine Images (AMI)",
    "moduleBadge": "Block Storage",
    "color": "#EC4899",
    "icon": "hdd",
    "hindiSummary": "AMI (Amazon Machine Image) EC2 server ka complete golden image blueprint hota hai jisme OS, software, packages aur configuration save ho jate hain. Ek click par same configuration ke 100 naye instances launch kiye ja sakte hain. AMI banate waqt instance ko reboot hone se bachane ke liye 'No Reboot' option use hota hai.",
    "englishSummary": "Creation and lifecycle management of Amazon Machine Images (AMIs). Understanding golden images, root volume snapshotting, block device mapping, sysprep/sanitization for Windows/Linux, and the 'No Reboot' parameter trade-offs.",
    "keyConcepts": [
      "Golden Image Concept: Pre-bake operating system patches, application runtimes, and dependencies into an AMI to eliminate slow User Data execution during auto-scaling events.",
      "What an AMI Contains: 1. Root EBS volume snapshot. 2. Block device mappings (attached EBS volumes). 3. Launch permissions (private, shared, public). 4. OS architecture specifications.",
      "Reboot vs No Reboot: By default, AWS reboots the instance to flush filesystem write caches for file system consistency. Setting `NoReboot=true` avoids downtime but risks capturing uncommitted in-memory writes.",
      "Community AMIs & AWS Marketplace: Commercial pre-packaged AMIs."
    ],
    "examTips": "For fastest Auto Scaling launch times, bake dependencies into an AMI rather than downloading packages via User Data scripts on every boot.",
    "architecture": "Configured EC2 Instance (OS + Apps + Data) ---> Create AMI ---> Golden AMI Stored in AWS Region ---> Launch 1 to 1000 identical EC2s",
    "commandsOrSteps": [
      "aws ec2 create-image --instance-id i-xxxx --name 'Prod-Golden-AMI-v1' --description 'Golden AMI with Nginx and Node.js' --no-reboot"
    ],
    "interviewQuestions": "Q: What is the risk of selecting 'No Reboot' when creating an AMI from a live production server?\nA: File systems write data asynchronously. Without a reboot or file system freeze, uncommitted writes in OS buffers or database tables may not be captured, resulting in a crash-inconsistent filesystem."
  },
  {
    "id": 49,
    "lecNum": 49,
    "videoId": "aGB7bvTMRTM",
    "youtubeUrl": "https://www.youtube.com/watch?v=aGB7bvTMRTM",
    "rawTitle": "How to copy AMI into another AWS Account | LEC-49 | AWS Cross account permission | AWS-CSA Tutorials",
    "title": "Lec 49: How to Copy an AMI into Another AWS Account & Another AWS Region",
    "cleanTitle": "How to Copy an AMI into Another AWS Account & Another AWS Region",
    "duration": "15:25",
    "moduleId": 5,
    "moduleName": "Amazon EBS & Machine Images (AMI)",
    "moduleBadge": "Block Storage",
    "color": "#EC4899",
    "icon": "hdd",
    "hindiSummary": "AMI ko disaster recovery ke liye kisi doosre AWS region (jaise us-east-1 se ap-south-1) me copy karna, ya kisi doosre AWS account me share karna. Cross-account share karne ke baad destination account AMI ko copy karke apna private image bana leta hai.",
    "englishSummary": "Cross-region and cross-account AMI distribution strategies. Replicating golden images globally for multi-region disaster recovery and sharing AMIs across organization accounts (Dev, Stage, Prod) within AWS Organizations.",
    "keyConcepts": [
      "Cross-Region Copy: Copies the underlying EBS snapshots and creates a registered AMI in the target region with a new regional AMI ID (e.g. `ami-0123...`).",
      "Cross-Account Sharing: Share the AMI launch permissions with target AWS Account IDs.",
      "Best Practice for Target Account: Always copy the shared AMI into the target account's local repository. This protects you if the source account unshares or deletes the original AMI.",
      "Deregistering AMIs: Deleting an AMI requires two steps: 1. Deregister the AMI ID. 2. Delete the underlying EBS snapshots manually."
    ],
    "examTips": "Deregistering an AMI does NOT automatically delete its backing EBS snapshots! To stop incurring storage costs, you must explicitly delete the associated snapshots.",
    "architecture": "Account A (Build Golden AMI) ---> Share Launch Permissions ---> Account B (Copies AMI to Own Account with Local KMS Key)",
    "commandsOrSteps": [
      "aws ec2 copy-image --source-image-id ami-xxxx --source-region us-east-1 --region ap-south-1 --name 'Prod-Golden-AMI-Mumbai'",
      "aws ec2 modify-image-attribute --image-id ami-xxxx --launch-permission 'Add=[{UserId=123456789012}]'"
    ],
    "interviewQuestions": "Q: If you deregister an Amazon Machine Image (AMI), what happens to the underlying EBS snapshots?\nA: The snapshots remain in Amazon S3 and continue to accrue monthly storage charges. You must identify and delete the backing snapshots manually via `aws ec2 delete-snapshot`."
  },
  {
    "id": 50,
    "lecNum": 50,
    "videoId": "C6lSCAVggFE",
    "youtubeUrl": "https://www.youtube.com/watch?v=C6lSCAVggFE",
    "rawTitle": "How to attach root volume with another EC2 Instance | How to take snapshot of EC2 | AWS-CSA Lectures",
    "title": "Lec 50: EC2 Troubleshooting Lab: Rescue Unbootable EC2 by Attaching Root Volume",
    "cleanTitle": "EC2 Troubleshooting Lab: Rescue Unbootable EC2 by Attaching Root Volume",
    "duration": "14:44",
    "moduleId": 5,
    "moduleName": "Amazon EBS & Machine Images (AMI)",
    "moduleBadge": "Block Storage",
    "color": "#EC4899",
    "icon": "hdd",
    "hindiSummary": "Production EC2 rescue procedure: Agar server crash ho jaye, OS corrupt ho jaye, ya SSH key lose ho jaye, to instance stop karo -> Root EBS volume detach karo -> Ek healthy helper EC2 me secondary disk (`/dev/xvdf`) ke roop me attach karo -> Mount karke corrupted files ya `authorized_keys` theek karo -> Wapas original EC2 me root (`/dev/xvda`) attach karke start kar do!",
    "englishSummary": "Real-world EC2 system administration rescue methodology. Recovering an inaccessible, corrupted, or misconfigured EC2 instance by detaching its root EBS volume, attaching it as a secondary data volume to a healthy helper instance, correcting configuration files, and reattaching as the root device.",
    "keyConcepts": [
      "Root Device Name: Linux root device is typically `/dev/xvda` or `/dev/sda1`.",
      "Rescue Steps in Order:\n  1. Stop the broken EC2 instance (Instance A).\n  2. Detach the root EBS volume (`vol-xxxx`).\n  3. Launch a healthy helper EC2 instance (Instance B) in the SAME Availability Zone.\n  4. Attach `vol-xxxx` to Instance B as a secondary volume (`/dev/xvdf`).\n  5. SSH into Instance B, mount `/dev/xvdf1` to `/mnt/rescue`, and repair broken `/etc/fstab`, logs, or `~/.ssh/authorized_keys`.\n  6. Unmount, detach `vol-xxxx` from Instance B, reattach to Instance A as `/dev/xvda`, and boot Instance A."
    ],
    "examTips": "SysOps Exam Essential: How to recover a Linux EC2 instance when the private key is lost? Answer: Stop instance, detach root volume, attach to temporary helper instance, append new public key to `~/.ssh/authorized_keys`, reattach root volume, and start.",
    "architecture": "Crashed EC2 (Stop) ---> Detach Root Volume ---> Attach to Helper EC2 as /mnt/rescue ---> Fix Files ---> Reattach as /dev/xvda ---> Start",
    "commandsOrSteps": [
      "sudo mkdir /mnt/rescue && sudo mount /dev/xvdf1 /mnt/rescue",
      "sudo nano /mnt/rescue/home/ec2-user/.ssh/authorized_keys # Add new SSH public key",
      "sudo umount /mnt/rescue"
    ],
    "interviewQuestions": "Q: How do you regain SSH access to an EC2 instance if the private key `.pem` file is permanently lost?\nA: Stop the instance, detach its root volume, attach it as a secondary volume to a temporary helper instance, replace the public key in `/home/ec2-user/.ssh/authorized_keys`, detach and reattach to original instance as root device `/dev/xvda`, and start."
  },
  {
    "id": 51,
    "lecNum": 51,
    "videoId": "hS9DLXyOgd0",
    "youtubeUrl": "https://www.youtube.com/watch?v=hS9DLXyOgd0",
    "rawTitle": "AWS Autoscaling Part-1 Hindi/Urdu | LEC-51 | Amazon EC2 Autoscaling | AWS-SAA C03 Exam Tutorials",
    "title": "Lec 51: Amazon EC2 Auto Scaling Part 1: Elasticity & High Availability Concepts",
    "cleanTitle": "Amazon EC2 Auto Scaling Part 1: Elasticity & High Availability Concepts",
    "duration": "31:04",
    "moduleId": 6,
    "moduleName": "High Availability, Auto Scaling & Elastic Load Balancing",
    "moduleBadge": "Scalability",
    "color": "#8B5CF6",
    "icon": "layer-group",
    "hindiSummary": "Auto Scaling ka basic concept: Traffic badhne par servers automatically add karna (Scale Out), aur traffic kam hone par unnecessary servers terminate karna (Scale In). Isse application 100% available rehti hai aur cost sabse kam aati hai.",
    "englishSummary": "Introduction to Amazon EC2 Auto Scaling. Architectural principles of elasticity, high availability, and fault tolerance. Contrasting vertical scaling (scale up - bigger instance) with horizontal scaling (scale out - adding more instances behind a load balancer).",
    "keyConcepts": [
      "Horizontal Scaling (Scale Out / Scale In): Adding or removing EC2 instances dynamically. Infinite ceiling, high availability, zero downtime.",
      "Vertical Scaling (Scale Up / Scale Down): Increasing instance size (e.g. t3.micro to m5.2xlarge). Requires stopping the instance (downtime) and has hardware limits.",
      "Auto Scaling Components: 1. Launch Template (What to launch). 2. Auto Scaling Group (Where to launch: VPC, subnets, min/desired/max capacity). 3. Scaling Policies (When to launch: CPU, network, schedules).",
      "Self-Healing: If an EC2 instance fails health checks, Auto Scaling automatically terminates it and launches a fresh replacement instance to maintain desired capacity."
    ],
    "examTips": "Auto Scaling provides self-healing infrastructure: If an instance becomes unhealthy, ASG replaces it automatically without human intervention.",
    "architecture": "Traffic Surge ---> CloudWatch Metric High ---> Auto Scaling Group launches +2 EC2 instances across AZ-1a and AZ-1b",
    "commandsOrSteps": [
      "aws autoscaling describe-auto-scaling-groups",
      "aws autoscaling set-desired-capacity --auto-scaling-group-name my-asg --desired-capacity 4"
    ],
    "interviewQuestions": "Q: What is the difference between Horizontal Scaling and Vertical Scaling in cloud architecture?\nA: Vertical scaling increases compute/RAM of a single server (requires downtime and hits hardware limits). Horizontal scaling adds multiple identical servers behind a load balancer, providing fault tolerance, elasticity, and zero downtime."
  },
  {
    "id": 52,
    "lecNum": 52,
    "videoId": "X7beRrEeBSI",
    "youtubeUrl": "https://www.youtube.com/watch?v=X7beRrEeBSI",
    "rawTitle": "Aws autoscaling part-2 hindi/urdu | LEC-52 | Autoscaling and Load balancing in AWS |AWS Training",
    "title": "Lec 52: Amazon EC2 Auto Scaling Part 2: Auto Scaling & Load Balancing Synergy",
    "cleanTitle": "Amazon EC2 Auto Scaling Part 2: Auto Scaling & Load Balancing Synergy",
    "duration": "43:09",
    "moduleId": 6,
    "moduleName": "High Availability, Auto Scaling & Elastic Load Balancing",
    "moduleBadge": "Scalability",
    "color": "#8B5CF6",
    "icon": "layer-group",
    "hindiSummary": "Auto Scaling aur Elastic Load Balancer (ELB) milkar enterprise architecture banate hain. ELB aane wale traffic ko sabhi running servers me divide karta hai, aur jab Auto Scaling naye servers launch ya terminate karta hai, to ELB automatically unhe traffic send ya stop karta hai.",
    "englishSummary": "Architectural integration between EC2 Auto Scaling Groups (ASG) and Elastic Load Balancers (ELB / Target Groups). Explaining automatic target registration/deregistration, ELB Health Checks, and Connection Draining (Deregistration Delay).",
    "keyConcepts": [
      "Dynamic Target Registration: When ASG launches a new instance, it automatically registers the instance's private IP with the ELB Target Group.",
      "Connection Draining (Deregistration Delay): When ASG scales in, ELB stops sending new requests to terminating instances and waits for in-flight requests to complete (default 300 seconds) before terminating.",
      "EC2 vs ELB Health Checks: EC2 health checks only check hypervisor and VM hardware. ELB health checks perform HTTP requests to `/health` application endpoint. Configure ASG to use ELB health checks so crashed web apps are replaced automatically.",
      "Multi-AZ Distribution: ASG always balances instances evenly across configured Availability Zones (e.g., 2 in AZ-1a, 2 in AZ-1b)."
    ],
    "examTips": "CRITICAL EXAM TIP: If an instance's web application crashes (returns HTTP 500) but the VM is running, standard EC2 health check thinks it is healthy. Switch ASG Health Check Type to 'ELB' so ASG replaces it!",
    "architecture": "Internet Clients ---> Elastic Load Balancer (ALB) === [Health Checks & Traffic Distribution] ===> Auto Scaling Group [AZ-1a, AZ-1b, AZ-1c]",
    "commandsOrSteps": [
      "aws autoscaling update-auto-scaling-group --auto-scaling-group-name my-asg --health-check-type ELB --health-check-grace-period 300"
    ],
    "interviewQuestions": "Q: Why should you configure an Auto Scaling Group to use ELB Health Checks instead of EC2 Health Checks?\nA: EC2 health checks only detect VM hardware or network failure. ELB health checks ping the application layer (e.g. HTTP 200 on `/health`), ensuring instances with frozen application processes or crashed web servers are automatically replaced."
  },
  {
    "id": 53,
    "lecNum": 53,
    "videoId": "c-AwFkicRY8",
    "youtubeUrl": "https://www.youtube.com/watch?v=c-AwFkicRY8",
    "rawTitle": "AWS Autoscaling Part-3 | LEC-53 | Types of scaling policies | AWS Solution architect Associate",
    "title": "Lec 53: Amazon EC2 Auto Scaling Part 3: Types of Scaling Policies",
    "cleanTitle": "Amazon EC2 Auto Scaling Part 3: Types of Scaling Policies",
    "duration": "39:29",
    "moduleId": 6,
    "moduleName": "High Availability, Auto Scaling & Elastic Load Balancing",
    "moduleBadge": "Scalability",
    "color": "#8B5CF6",
    "icon": "layer-group",
    "hindiSummary": "Auto Scaling policies ke 4 prakar: 1. Target Tracking Scaling (sabse aasan, jaise average CPU 50% maintain karo). 2. Step Scaling (agar CPU 70% ho to +1 server, 90% ho to +3 servers). 3. Simple Scaling (purana policy model jisme cooldown period lagta hai). 4. Scheduled Scaling (fixed time par scale karna, jaise Monday morning 9 AM).",
    "englishSummary": "Deep architectural analysis of EC2 Auto Scaling Policies: Target Tracking Scaling, Step Scaling, Simple Scaling, Scheduled Scaling, and Predictive Scaling (Machine Learning). Cooldown periods, CloudWatch alarm triggers, and metric thresholds.",
    "keyConcepts": [
      "Target Tracking Scaling: Simplest and recommended; keep a metric at a target value (e.g. `ASGAverageCPUUtilization = 50%` or `ALBRequestCountPerTarget = 1000`). AWS automatically calculates scaling steps.",
      "Step Scaling: Scales based on the size of the metric alarm breach (e.g., if CPU 60-70% add 1; if CPU 70-85% add 2; if CPU >85% add 4). No cooldown delay between steps.",
      "Simple Scaling: Scales by a fixed amount when an alarm triggers, then enforces a Cooldown Period (default 300 seconds) where no further scaling actions are allowed.",
      "Scheduled Scaling: Scales based on predictable calendar events (e.g., scale up to 10 instances every Friday at 6:00 PM for weekend shopping sale).",
      "Predictive Scaling: Uses machine learning to analyze historical traffic patterns and forecast future capacity demands ahead of traffic spikes."
    ],
    "examTips": "Exam asks: 'Which scaling policy ensures average CPU stays at exactly 40% with minimal configuration?' Answer: Target Tracking Scaling Policy.",
    "architecture": "Metric Breach: Average CPU > 75% ---> Step Scaling: +2 EC2s ---> Metric Normalizes: Average CPU = 50% ---> Stable",
    "commandsOrSteps": [
      "aws autoscaling put-scaling-policy --auto-scaling-group-name my-asg --policy-name cpu50-target --policy-type TargetTrackingScaling --target-tracking-configuration file://config.json"
    ],
    "interviewQuestions": "Q: What is the purpose of the Auto Scaling Cooldown Period in Simple Scaling?\nA: The cooldown period (default 300s) prevents the ASG from launching or terminating additional instances before the previously launched instances have finished booting and stabilizing metrics."
  },
  {
    "id": 54,
    "lecNum": 54,
    "videoId": "mLJImHSh-tc",
    "youtubeUrl": "https://www.youtube.com/watch?v=mLJImHSh-tc",
    "rawTitle": "AWS Autoscaling Demo in detail-Hindi/Urdu | LEC-54 | Step scaling,Target tracking policy | AWS DEMO",
    "title": "Lec 54: Auto Scaling Detailed Hands-on Demo: Launch Template & CPU Stress Testing",
    "cleanTitle": "Auto Scaling Detailed Hands-on Demo: Launch Template & CPU Stress Testing",
    "duration": "40:02",
    "moduleId": 6,
    "moduleName": "High Availability, Auto Scaling & Elastic Load Balancing",
    "moduleBadge": "Scalability",
    "color": "#8B5CF6",
    "icon": "layer-group",
    "hindiSummary": "Auto Scaling ka live practical lab: Launch Template banaya (Amazon Linux, User Data me web server aur CPU stress script daala), Auto Scaling Group banaya (Min=1, Desired=2, Max=4), Target Tracking policy lagayi (CPU > 50%), aur `stress` tool se CPU load badhakar live naye instances scale-out hote hue dekhe.",
    "englishSummary": "End-to-end hands-on deployment of an EC2 Auto Scaling Group. Creating a Launch Template with User Data bootstrapping, configuring ASG capacity thresholds (Min, Desired, Max), deploying Target Tracking policies, generating artificial CPU load via `stress` utility, observing CloudWatch alarm triggers, and witnessing automated scale-in upon load reduction.",
    "keyConcepts": [
      "Launch Template: Superseded legacy Launch Configurations. Supports instance versioning, Spot/On-Demand mix, T3 Unlimited, and multiple network interfaces.",
      "Capacity Limits: Minimum Capacity (floor), Desired Capacity (baseline), Maximum Capacity (ceiling).",
      "Simulating CPU Surge: Using Linux `stress --cpu 4 --timeout 300s` to spike utilization to 100%.",
      "CloudWatch Alarm Trigger: Alarm transitions from `OK` to `ALARM` state -> Triggers Auto Scaling policy -> Launches 2 new instances in parallel.",
      "Scale-In Termination Policy: ASG terminates instances across AZs to maintain balance, prioritizing oldest launch templates and non-protected instances."
    ],
    "examTips": "Termination Policy Rule: ASG first chooses the AZ with the most instances. Inside that AZ, it terminates instances launched with the oldest launch configuration/template.",
    "architecture": "CloudWatch CPU Alarm > 50% === [Scale-Out Signal] ===> ASG expands from 2 to 4 instances\nStress Tool Stops ---> CloudWatch CPU Alarm < 20% === [Scale-In Signal] ===> ASG contracts to 2 instances",
    "commandsOrSteps": [
      "sudo amazon-linux-extras install epel -y && sudo yum install -y stress",
      "stress --cpu 2 --timeout 300 # Generates 100% CPU utilization for 5 minutes",
      "aws autoscaling describe-scaling-activities --auto-scaling-group-name my-asg"
    ],
    "interviewQuestions": "Q: How does an Auto Scaling Group decide which EC2 instance to terminate during a scale-in event?\nA: 1. It identifies the AZ with the most instances. 2. It checks for instances with allocation strategies. 3. It selects instances with the oldest launch template or configuration. 4. It chooses the instance closest to the next billing hour."
  },
  {
    "id": 55,
    "lecNum": 55,
    "videoId": "3WlcgylrAxE",
    "youtubeUrl": "https://www.youtube.com/watch?v=3WlcgylrAxE",
    "rawTitle": "Elastic load balancer in aws-hindi/Urdu | LEC-55 | AWS ELB Tutorial | AWS Tutorial | AWS Training",
    "title": "Lec 55: Elastic Load Balancer (ELB) in AWS Part 1: High Availability Fundamentals",
    "cleanTitle": "Elastic Load Balancer (ELB) in AWS Part 1: High Availability Fundamentals",
    "duration": "30:38",
    "moduleId": 6,
    "moduleName": "High Availability, Auto Scaling & Elastic Load Balancing",
    "moduleBadge": "Scalability",
    "color": "#8B5CF6",
    "icon": "layer-group",
    "hindiSummary": "Elastic Load Balancer (ELB) traffic distribution service hai jo incoming user traffic ko multiple backend servers (EC2 instances, containers, IP addresses) par automatically distribute karti hai. Agar koi server fail ho jaye to ELB use traffic bhejna band kar deta hai.",
    "englishSummary": "Introduction to AWS Elastic Load Balancing (ELB). Architectural principles of distributing incoming application traffic across multiple targets in multiple Availability Zones. Benefits of single point of entry, SSL termination, and decoupling clients from backend servers.",
    "keyConcepts": [
      "High Availability: Spans multiple Availability Zones within an AWS Region.",
      "Single DNS Endpoint: Clients connect to the ELB DNS name (e.g. `my-alb-123.amazonaws.com`); ELB automatically manages underlying IP scaling.",
      "Health Checking: Periodically probes backend instances; routes traffic only to healthy targets.",
      "Separation of Concerns: Public subnet hosts the internet-facing ELB; private subnets host the backend EC2 web/app servers."
    ],
    "examTips": "ELBs NEVER have static public IP addresses (except Network Load Balancer). Always reference an Application Load Balancer by its DNS Name, never an IP address.",
    "architecture": "Internet Clients === [HTTPS Traffic] ===> Elastic Load Balancer (Public Subnet) === [HTTP Routing] ===> EC2 Instances (Private Subnets)",
    "commandsOrSteps": [
      "aws elbv2 describe-load-balancers --query 'LoadBalancers[*].[LoadBalancerName,DNSName,Type]'"
    ],
    "interviewQuestions": "Q: Can an Elastic Load Balancer route traffic to EC2 instances located across multiple Availability Zones?\nA: Yes. ELB is inherently a multi-AZ service designed to distribute traffic across target instances in different Availability Zones for fault tolerance."
  },
  {
    "id": 56,
    "lecNum": 56,
    "videoId": "RewtkN8ICs0",
    "youtubeUrl": "https://www.youtube.com/watch?v=RewtkN8ICs0",
    "rawTitle": "AWS  Elastic load Balancer Part-2 Hindi/Urdu | LEC-56 | AWS ELB | What is aws elastic load balancer",
    "title": "Lec 56: AWS Elastic Load Balancer Part 2: Layer 4 vs Layer 7 Load Balancing",
    "cleanTitle": "AWS Elastic Load Balancer Part 2: Layer 4 vs Layer 7 Load Balancing",
    "duration": "21:02",
    "moduleId": 6,
    "moduleName": "High Availability, Auto Scaling & Elastic Load Balancing",
    "moduleBadge": "Scalability",
    "color": "#8B5CF6",
    "icon": "layer-group",
    "hindiSummary": "OSI model ke Layer 4 (Transport Layer - TCP/UDP) aur Layer 7 (Application Layer - HTTP/HTTPS) load balancing ka farq: Layer 4 sirf IP aur Port dekhta hai (ultra-fast, millions of requests), jabki Layer 7 HTTP headers, URL path (`/api`, `/images`), aur cookies ko inspect karke intelligent routing karta hai.",
    "englishSummary": "Technical comparison between Layer 4 (Transport) and Layer 7 (Application) load balancing in AWS. Contrasting packet routing speeds, connection termination, protocol support, HTTP header inspection, and URL routing rules.",
    "keyConcepts": [
      "Layer 4 (Network Load Balancer): Operates at TCP/UDP/TLS layer. Does NOT inspect packet payloads or HTTP headers. Blazing fast, ultra-low latency (microsecond scale), handles millions of requests per second.",
      "Layer 7 (Application Load Balancer): Operates at HTTP/HTTPS/gRPC layer. Inspects HTTP headers, cookies, URL paths, and query parameters for intelligent content-based routing.",
      "SSL/TLS Termination: Both ALB and NLB can offload SSL/TLS decryption, saving CPU cycles on backend EC2 instances.",
      "X-Forwarded-For Header: Because ALB terminates client connections and opens a new connection to the target EC2, it appends the client's original IP address in the `X-Forwarded-For` HTTP header."
    ],
    "examTips": "Workload needs routing based on URL path (`/images` vs `/api`) or HTTP host header -> Choose Application Load Balancer (ALB). Workload needs millions of RPS, ultra-low latency, or static IP -> Choose Network Load Balancer (NLB).",
    "architecture": "Client Request ---> Layer 7 (ALB): Inspects '/api/checkout' ---> Routes to Checkout Microservice Target Group",
    "commandsOrSteps": [
      "Review OSI model layers: Layer 4 = TCP/UDP (NLB), Layer 7 = HTTP/HTTPS/WebSocket (ALB)."
    ],
    "interviewQuestions": "Q: How does a backend EC2 instance behind an ALB know the actual client's public IP address?\nA: The ALB inserts the client's original IP into the `X-Forwarded-For` HTTP request header, along with `X-Forwarded-Proto` (http/https) and `X-Forwarded-Port`."
  },
  {
    "id": 57,
    "lecNum": 57,
    "videoId": "yLd4peEUmpQ",
    "youtubeUrl": "https://www.youtube.com/watch?v=yLd4peEUmpQ",
    "rawTitle": "AWS Elastic load Balancer Part-3 | LEC-57 AWS ELB |How ELB Works | What is AWS Elastic load balancer",
    "title": "Lec 57: AWS Elastic Load Balancer Part 3: How ELB Works, Health Checks & Target Groups",
    "cleanTitle": "AWS Elastic Load Balancer Part 3: How ELB Works, Health Checks & Target Groups",
    "duration": "36:53",
    "moduleId": 6,
    "moduleName": "High Availability, Auto Scaling & Elastic Load Balancing",
    "moduleBadge": "Scalability",
    "color": "#8B5CF6",
    "icon": "layer-group",
    "hindiSummary": "ELB andar se kaise kaam karta hai: ELB ke 3 mukhy components hote hain: Listeners (jo specific port aur protocol par listen karte hain), Rules (jo decide karte hain traffic kahan jayega), aur Target Groups (jisme backend servers register hote hain). Health Check fail hote hi ELB traffic bhejna rok deta hai.",
    "englishSummary": "Architectural breakdown of ELB components. In-depth look at Listeners, Listener Rules (Path-based, Host-based, HTTP Header, Query string), Target Groups, Health Check thresholds (Interval, Timeout, Healthy/Unhealthy threshold counts), and Target Types (Instance ID, IP Address, Lambda function, ALB).",
    "keyConcepts": [
      "Listener: Listens for connection requests based on protocol (HTTP/HTTPS) and port (80/443).",
      "Listener Rules: Priority-ordered condition-action pairs (e.g. IF Path=`/orders/*` THEN Forward to `orders-tg`).",
      "Target Group: Logical grouping of targets (EC2 instances, ECS containers, private IPs, Lambda functions) receiving forwarded traffic.",
      "Health Check Configuration: Path (e.g. `/health.html`), Matcher (e.g. HTTP 200), Interval (e.g. 30s), Healthy Threshold (e.g. 3 consecutive passes), Unhealthy Threshold (e.g. 2 consecutive fails).",
      "Target Types: `instance` (registers by instance ID), `ip` (registers private IPs, essential for ECS Fargate and on-premises hybrid targets), `lambda` (invokes serverless function)."
    ],
    "examTips": "Target Group Target Type `ip` allows an ALB to route traffic to on-premises servers connected via Direct Connect or Site-to-Site VPN!",
    "architecture": "ALB Listener (Port 443) ---> Rule 1: Path is /api/* ---> Target Group API (3 Instances)\n                         ---> Default Rule: Path is * ---> Target Group Web (2 Instances)",
    "commandsOrSteps": [
      "aws elbv2 create-target-group --name web-tg --protocol HTTP --port 80 --vpc-id vpc-xxxx --health-check-path /health",
      "aws elbv2 register-targets --target-group-arn tg-arn --targets Id=i-xxxx Id=i-yyyy"
    ],
    "interviewQuestions": "Q: Can an Application Load Balancer route traffic to servers located outside of AWS (e.g. on-premises data center)?\nA: Yes. If the Target Group target type is set to `ip`, the ALB can route traffic to private on-premises IP addresses across an AWS Direct Connect or Site-to-Site VPN connection."
  },
  {
    "id": 58,
    "lecNum": 58,
    "videoId": "eKL4LBjpZv8",
    "youtubeUrl": "https://www.youtube.com/watch?v=eKL4LBjpZv8",
    "rawTitle": "AWS Elastic load Balancer Part-4 | AWS ELB | What is aws elastic  Load Balancer | AWS ALB vs NLB",
    "title": "Lec 58: AWS Elastic Load Balancer Part 4: ALB vs NLB vs CLB Comparison",
    "cleanTitle": "AWS Elastic Load Balancer Part 4: ALB vs NLB vs CLB Comparison",
    "duration": "25:30",
    "moduleId": 6,
    "moduleName": "High Availability, Auto Scaling & Elastic Load Balancing",
    "moduleBadge": "Scalability",
    "color": "#8B5CF6",
    "icon": "layer-group",
    "hindiSummary": "AWS ke 3 load balancers ka comprehensive comparison: Application Load Balancer (ALB - Layer 7, path/host routing, WebSockets, microservices), Network Load Balancer (NLB - Layer 4, ultra-high speed, static IP per AZ, gaming/financial), aur Classic Load Balancer (CLB - purana legacy model).",
    "englishSummary": "Exhaustive comparison of Application Load Balancer (ALB), Network Load Balancer (NLB), Gateway Load Balancer (GWLB), and Classic Load Balancer (CLB). Detailed feature matrix covering protocols, performance, static IPs, cross-zone load balancing, and use cases.",
    "keyConcepts": [
      "ALB (Layer 7): Best for HTTP/HTTPS web apps and microservices. Supports path/host routing, redirect (HTTP to HTTPS), fixed response, WebSockets, gRPC, and AWS WAF integration.",
      "NLB (Layer 4): Best for extreme performance, TCP/UDP/TLS traffic, gaming, financial trading platforms. Delivers millions of RPS with sub-millisecond latency. Provides ONE STATIC IP or Elastic IP per AZ.",
      "GWLB (Layer 3/4): Gateway Load Balancer for deploying, scaling, and managing third-party virtual security appliances (firewalls, IDS/IPS). Uses GENEVE protocol on port 6081.",
      "CLB (Legacy): Deprecated previous-generation load balancer (Layer 4/7). Not recommended for new architectures."
    ],
    "examTips": "CRITICAL EXAM CUE: Application requires a Static Public IP address for client whitelisting -> MUST CHOOSE Network Load Balancer (NLB) with Elastic IPs (ALB does not support static IPs).",
    "architecture": "ALB: Intelligent Layer 7 HTTP/HTTPS Content-Based Routing\nNLB: High-Speed Layer 4 TCP/UDP Ultra-Low Latency with Static IPs\nGWLB: Layer 3 Transparent Inspection Firewall Interceptor (GENEVE 6081)",
    "commandsOrSteps": [
      "Review comparison table: Protocols, Latency (NLB ms vs ALB 10s ms), Static IP support (NLB Yes, ALB No), WAF support (ALB Yes, NLB No)."
    ],
    "interviewQuestions": "Q: When must you strictly choose a Network Load Balancer instead of an Application Load Balancer?\nA: Choose NLB when: 1. You require static public IP addresses for firewall whitelisting. 2. You handle non-HTTP protocols (pure TCP, UDP, TLS). 3. You require extreme throughput (millions of RPS with microsecond latency)."
  },
  {
    "id": 59,
    "lecNum": 59,
    "videoId": "OftItZ2Ahd8",
    "youtubeUrl": "https://www.youtube.com/watch?v=OftItZ2Ahd8",
    "rawTitle": "Lab on AWS Application load Balancer-Hindi/Urdu | AWS Elastic load balancer | AWS ELB Tutorial",
    "title": "Lec 59: AWS Application Load Balancer (ALB) Hands-on Lab: Path-Based Routing",
    "cleanTitle": "AWS Application Load Balancer (ALB) Hands-on Lab: Path-Based Routing",
    "duration": "33:54",
    "moduleId": 6,
    "moduleName": "High Availability, Auto Scaling & Elastic Load Balancing",
    "moduleBadge": "Scalability",
    "color": "#8B5CF6",
    "icon": "layer-group",
    "hindiSummary": "Application Load Balancer ka live practical: Do alag Target Groups banaye (`web-tg` aur `api-tg`). ALB listener me Path-based rule lagaya: agar user `/api/*` request karega to traffic `api-tg` ke servers par jayega, aur baki sabhi requests default `web-tg` par jayengi.",
    "englishSummary": "Step-by-step hands-on deployment of an AWS Application Load Balancer. Configuring multi-AZ public subnets, creating target groups, configuring health checks, deploying microservices on EC2 instances, and configuring Path-Based Routing listener rules in the ALB console.",
    "keyConcepts": [
      "Provision Internet-Facing ALB spanning at least 2 Availability Zones.",
      "Create Target Group 1 (`web-tg`) on Port 80 and Target Group 2 (`api-tg`) on Port 80.",
      "Configure Listener Rules: IF `Path is /api*` THEN `Forward to api-tg`; Default rule: `Forward to web-tg`.",
      "HTTP to HTTPS Redirection: Configure Port 80 listener with action `Redirect to HTTPS 443 with Status code 301 (Moved Permanently)`.",
      "Security Group Chaining: EC2 Security Group should only allow HTTP port 80 traffic originating from the ALB Security Group ID (`sg-alb`), blocking direct public internet access."
    ],
    "examTips": "Security Best Practice: Lock down EC2 Security Groups to accept traffic ONLY from the ALB's Security Group ID. This prevents attackers from bypassing the ALB.",
    "architecture": "Client === [HTTP :80 / HTTPS :443] ===> ALB (sg-alb)\n  ├── IF Path is /api/* ===> api-tg (EC2 Private: allows sg-alb only)\n  └── Default Action    ===> web-tg (EC2 Private: allows sg-alb only)",
    "commandsOrSteps": [
      "aws elbv2 create-listener --load-balancer-arn alb-arn --protocol HTTP --port 80 --default-actions Type=forward,TargetGroupArn=web-tg-arn",
      "aws elbv2 create-rule --listener-arn listener-arn --priority 10 --conditions Field=path-pattern,Values='/api/*' --actions Type=forward,TargetGroupArn=api-tg-arn"
    ],
    "interviewQuestions": "Q: How do you configure an Application Load Balancer to automatically redirect all HTTP traffic to HTTPS?\nA: In the ALB HTTP (port 80) listener, add a default action of type 'Redirect', set the protocol to HTTPS, port to 443, and specify HTTP status code 301 (Moved permanently)."
  },
  {
    "id": 60,
    "lecNum": 60,
    "videoId": "GoxMcltLsEs",
    "youtubeUrl": "https://www.youtube.com/watch?v=GoxMcltLsEs",
    "rawTitle": "AWS Network Load Balancer-Demo | AWS ELB | Cross zone Load Balancer | What is AWS NLB vs ALB vs ELB",
    "title": "Lec 60: AWS Network Load Balancer (NLB) Demo & Cross-Zone Load Balancing",
    "cleanTitle": "AWS Network Load Balancer (NLB) Demo & Cross-Zone Load Balancing",
    "duration": "26:04",
    "moduleId": 6,
    "moduleName": "High Availability, Auto Scaling & Elastic Load Balancing",
    "moduleBadge": "Scalability",
    "color": "#8B5CF6",
    "icon": "layer-group",
    "hindiSummary": "Network Load Balancer ka hands-on practical: NLB me static Elastic IP assign karke deploy kiya gaya. Cross-Zone Load Balancing feature test kiya gaya: agar yeh disable ho to traffic sirf local AZ ke servers me rehta hai, enable karne par traffic sabhi AZs me barabar distribute hota hai.",
    "englishSummary": "Hands-on implementation of AWS Network Load Balancer (NLB). Assigning Elastic IP addresses per Availability Zone, setting up TCP target groups, and analyzing Cross-Zone Load Balancing mechanics, connection preservation, and target health evaluation.",
    "keyConcepts": [
      "Static Elastic IP per AZ: When creating an NLB, you can assign an Elastic IP to each subnet, giving your clients permanent static IP addresses.",
      "Cross-Zone Load Balancing in NLB: Disabled by default in NLB (enabled by default in ALB). When disabled, each NLB node only routes to targets in its local AZ. When enabled, traffic is evenly distributed across all targets in all AZs.",
      "Client IP Preservation: NLB preserves the original client source IP and port natively without rewriting packet headers.",
      "Health Check Options: Supports TCP ping, HTTP, and HTTPS application health probes."
    ],
    "examTips": "Remember: Cross-Zone Load Balancing is ENABLED by default for ALB (free), but DISABLED by default for NLB (can be enabled, inter-AZ data charges may apply).",
    "architecture": "Client Request === [Static IP: 54.210.1.1] ===> NLB Node (AZ-1a) === [Cross-Zone Enabled] ===> Targets in AZ-1a & AZ-1b",
    "commandsOrSteps": [
      "aws elbv2 create-load-balancer --name prod-nlb --type network --subnets subnet-1a subnet-1b",
      "aws elbv2 modify-load-balancer-attributes --load-balancer-arn nlb-arn --attributes Key=load_balancing.cross_zone.enabled,Value=true"
    ],
    "interviewQuestions": "Q: What happens if Cross-Zone Load Balancing is disabled on a Network Load Balancer with 2 instances in AZ-A and 8 instances in AZ-B?\nA: If 100 requests arrive evenly divided (50 to AZ-A node, 50 to AZ-B node), each instance in AZ-A receives 25 requests (50% traffic per VM), while each instance in AZ-B receives only 6.25 requests. Enabling Cross-Zone balances traffic evenly to 10 requests per instance."
  },
  {
    "id": 61,
    "lecNum": 61,
    "videoId": "keXwkpjSRrw",
    "youtubeUrl": "https://www.youtube.com/watch?v=keXwkpjSRrw",
    "rawTitle": "How to establish a load balancer between two VPC-Hindi/urdu | LEC-61 | AWS ALB vs NLB vs CLB",
    "title": "Lec 61: Multi-VPC & Cross-VPC Load Balancing Architecture in AWS",
    "cleanTitle": "Multi-VPC & Cross-VPC Load Balancing Architecture in AWS",
    "duration": "42:03",
    "moduleId": 6,
    "moduleName": "High Availability, Auto Scaling & Elastic Load Balancing",
    "moduleBadge": "Scalability",
    "color": "#8B5CF6",
    "icon": "layer-group",
    "hindiSummary": "Do alag-alag VPCs ke bich load balancer kaise set karein: VPC Peering ya Transit Gateway ka use karke ALB ke Target Group me Target Type 'IP Address' select kiya jata hai aur doosre VPC ke private IPs register kiye jate hain. Isse central VPC ka load balancer doosre VPC ke servers ko traffic bhejta hai.",
    "englishSummary": "Enterprise architecture for Multi-VPC and Cross-VPC load balancing. Deploying an internet-facing Application Load Balancer in a centralized ingress VPC and forwarding traffic across VPC Peering or AWS Transit Gateway to target instances residing in backend application VPCs using IP target groups.",
    "keyConcepts": [
      "Centralized Ingress Pattern: Ingress VPC handles all public traffic, WAF filtering, and SSL termination; backend VPCs contain isolated application tiers.",
      "Target Type = `ip`: Allows ALB to register private IP addresses belonging to peered VPCs or on-premises networks.",
      "Routing Prerequisites: VPC Peering or AWS Transit Gateway must be established between Ingress VPC and Application VPC, with route tables updated.",
      "Security Group Chaining: Backend instances in Application VPC must allow incoming traffic from Ingress VPC subnet CIDR ranges."
    ],
    "examTips": "To route ALB traffic across peered VPCs, target group MUST use Target Type `ip` (instance IDs cannot be registered across VPC boundaries).",
    "architecture": "Ingress VPC [Public ALB (Target Type: IP)] === [VPC Peering: pcx-xxxx] ===> Application VPC [EC2 Private: 172.16.1.10, 172.16.1.11]",
    "commandsOrSteps": [
      "aws elbv2 create-target-group --name cross-vpc-tg --protocol HTTP --port 80 --target-type ip --vpc-id vpc-ingress-id",
      "aws elbv2 register-targets --target-group-arn tg-arn --targets Id=172.16.1.10 Id=172.16.1.11"
    ],
    "interviewQuestions": "Q: Can an Application Load Balancer forward traffic to an instance ID located in a peered VPC?\nA: No. You cannot register instance IDs from a different VPC. You must configure the Target Group with target type `ip` and register the private IP addresses of the instances in the peered VPC."
  },
  {
    "id": 62,
    "lecNum": 62,
    "videoId": "o2w5DlccB3A",
    "youtubeUrl": "https://www.youtube.com/watch?v=o2w5DlccB3A",
    "rawTitle": "AWS Identity and access Management Part-1 | IAM Roles and features | AWS IAM Tutorial |AWS Training",
    "title": "Lec 62: AWS IAM Part 1: Identity & Access Management Roles and Features",
    "cleanTitle": "AWS IAM Part 1: Identity & Access Management Roles and Features",
    "duration": "40:01",
    "moduleId": 7,
    "moduleName": "AWS IAM & Security Governance",
    "moduleBadge": "Security",
    "color": "#EF4444",
    "icon": "shield-alt",
    "hindiSummary": "AWS IAM (Identity and Access Management) AWS security ka backbone hai. Yeh ek Global Service hai (Region select karne ki zarurat nahi hoti). IAM decide karta hai ki kaun login kar sakta hai (Authentication) aur kya-kya access kar sakta hai (Authorization).",
    "englishSummary": "Introduction to AWS Identity and Access Management (IAM). Core security pillars, Global service architecture, difference between Authentication (AuthN - Who you are) and Authorization (AuthZ - What permissions you have), and account governance.",
    "keyConcepts": [
      "Global Service: IAM users, groups, roles, and policies are global and apply across all AWS Regions worldwide automatically.",
      "Authentication vs Authorization: AuthN verifies identity (username, password, access keys, MFA); AuthZ evaluates IAM policies to grant or deny permissions.",
      "IAM Core Identities: 1. Root User (superadmin, account creator). 2. IAM Users (individual human team members). 3. IAM Groups (collection of users with common job functions). 4. IAM Roles (assumed by services or federated identities).",
      "Principle of Least Privilege: Always grant ONLY the minimum permissions required to perform a specific job, and nothing more."
    ],
    "examTips": "IAM is a GLOBAL service. Changes made to IAM take effect across all regions worldwide.",
    "architecture": "IAM Principal (User / Role) === [Authentication: MFA/Keys] ===> Policy Evaluation Engine === [Explicit Deny > Explicit Allow > Default Deny] ===> AWS Resource",
    "commandsOrSteps": [
      "aws iam list-users",
      "aws iam get-account-summary"
    ],
    "interviewQuestions": "Q: What is the default permission state for a newly created IAM user in AWS?\nA: Implicit Deny. A newly created IAM user has zero permissions and cannot perform any action or access any AWS resource until an IAM policy explicitly grants permission."
  },
  {
    "id": 63,
    "lecNum": 63,
    "videoId": "Z3jVClyYAN0",
    "youtubeUrl": "https://www.youtube.com/watch?v=Z3jVClyYAN0",
    "rawTitle": "Identity and access Management Part-2-Hindi/Urdu | LEC-63 | AWS IAM Roles and Policies | AWS SAA C03",
    "title": "Lec 63: AWS IAM Part 2: IAM Policies Architecture & Policy Types",
    "cleanTitle": "AWS IAM Part 2: IAM Policies Architecture & Policy Types",
    "duration": "29:49",
    "moduleId": 7,
    "moduleName": "AWS IAM & Security Governance",
    "moduleBadge": "Security",
    "color": "#EF4444",
    "icon": "shield-alt",
    "hindiSummary": "IAM Policies JSON documents hote hain jo permissions define karte hain. Policy ke 3 prakar hote hain: AWS Managed Policies (AWS dwara pehle se bani hui), Customer Managed Policies (aapki apni custom bani hui), aur Inline Policies (jo kisi specific user ya role se chipki hoti hain).",
    "englishSummary": "Architectural breakdown of AWS IAM Policies. Detailed JSON policy syntax (`Effect`, `Principal`, `Action`, `Resource`, `Condition`). Comprehensive comparison between AWS Managed Policies, Customer Managed Policies, and Inline Policies.",
    "keyConcepts": [
      "JSON Policy Structure:\n  - Effect: `Allow` or `Deny`.\n  - Action: List of service actions (e.g. `s3:GetObject`, `ec2:StartInstances`).\n  - Resource: ARN of target AWS resources (e.g. `arn:aws:s3:::my-bucket/*`).\n  - Condition: Constraints when policy takes effect (e.g. `aws:SourceIP`, `aws:MultiFactorAuthPresent`).",
      "AWS Managed Policies: Pre-created and maintained by AWS (e.g. `AdministratorAccess`, `ReadOnlyAccess`). Cannot be edited by customers.",
      "Customer Managed Policies: Custom reusable policies created and managed by the customer. Version-controlled (up to 5 versions) with rollback capabilities.",
      "Inline Policies: Embedded directly into a single user, group, or role. Strictly 1-to-1 relationship; deleted if the identity is deleted.",
      "Evaluation Logic: Explicit Deny ALWAYS overrides any Explicit Allow. If no rule matches, the default is Implicit Deny."
    ],
    "examTips": "CRITICAL EXAM POLICY RULE: An EXPLICIT DENY always wins over an EXPLICIT ALLOW, regardless of policy hierarchy or attachments.",
    "architecture": "Evaluation Order: 1. Is there an Explicit Deny? -> YES = DENY\n                  2. Is there an Explicit Allow? -> YES = ALLOW\n                  3. Default = Implicit Deny",
    "commandsOrSteps": [
      "aws iam create-policy --policy-name S3ReadOnlyCustom --policy-document file://s3-policy.json",
      "aws iam attach-user-policy --user-name dev-user --policy-arn arn:aws:iam::xxxx:policy/S3ReadOnlyCustom"
    ],
    "interviewQuestions": "Q: If an IAM user has an Allow policy for S3 on their group, but an attached policy explicitly denies S3 access, can they access S3?\nA: No. An explicit Deny always supersedes any Allow in AWS IAM evaluation logic."
  },
  {
    "id": 64,
    "lecNum": 64,
    "videoId": "AKSMYUaIqKk",
    "youtubeUrl": "https://www.youtube.com/watch?v=AKSMYUaIqKk",
    "rawTitle": "Identity and access Management Part 3-Hindi/Urdu | AWS Training Videos | AWS IAM Tutorial",
    "title": "Lec 64: AWS IAM Part 3: IAM Identities (Users, User Groups, and Roles)",
    "cleanTitle": "AWS IAM Part 3: IAM Identities (Users, User Groups, and Roles)",
    "duration": "15:41",
    "moduleId": 7,
    "moduleName": "AWS IAM & Security Governance",
    "moduleBadge": "Security",
    "color": "#EF4444",
    "icon": "shield-alt",
    "hindiSummary": "IAM Identities ka deep dive: IAM User ek single insaan ke liye hota hai. IAM Group multiple users ko ek sath permissions dene ke liye hota hai (jaise Developers, Admins). Group ke andar groups nahi banaye ja sakte (no nesting). IAM Role temporary credentials provide karta hai.",
    "englishSummary": "Deep architectural analysis of IAM Identities: IAM Users, IAM User Groups, and IAM Roles. User Group inheritance rules, credential types (Console Password vs Programmatic Access Keys), and identity lifecycle management.",
    "keyConcepts": [
      "IAM Users: Represents a person or service application requiring long-term interaction with AWS. Has long-term credentials (password, access key ID + secret access key).",
      "IAM User Groups: Collection of IAM users. Permissions attached to a group apply to all users within it.",
      "Group Nesting Rule: Groups CANNOT contain other groups; you cannot nest groups in AWS IAM.",
      "Credential Types:\n  - Console Password + MFA: For AWS Management Console login.\n  - Access Key ID + Secret Access Key: For AWS CLI, SDK, and API programmatic access.\n  - SSH Keys: For AWS CodeCommit."
    ],
    "examTips": "Best Practice: Never attach policies directly to individual IAM users. Assign users to IAM User Groups and attach policies to the groups for maintainability.",
    "architecture": "Admins Group [Policy: AdminAccess] ---> User Alice, User Bob inherit permissions automatically",
    "commandsOrSteps": [
      "aws iam create-group --group-name Developers",
      "aws iam add-user-to-group --user-name john --group-name Developers"
    ],
    "interviewQuestions": "Q: Can an IAM Group be a member of another IAM Group in AWS?\nA: No. AWS IAM does not support nested groups. Groups can only contain IAM users directly."
  },
  {
    "id": 65,
    "lecNum": 65,
    "videoId": "pD1aRAB29hY",
    "youtubeUrl": "https://www.youtube.com/watch?v=pD1aRAB29hY",
    "rawTitle": "Identity and Access Management Part-4 -Hindi/Urdu | AWS IAM Identities | AWS IAM Tutorial",
    "title": "Lec 65: AWS IAM Part 4: IAM Roles & AWS Security Token Service (STS)",
    "cleanTitle": "AWS IAM Part 4: IAM Roles & AWS Security Token Service (STS)",
    "duration": "42:15",
    "moduleId": 7,
    "moduleName": "AWS IAM & Security Governance",
    "moduleBadge": "Security",
    "color": "#EF4444",
    "icon": "shield-alt",
    "hindiSummary": "IAM Roles sabse secure tareeka hain services ko permissions dene ka. EC2 instance ya Lambda function me Access Keys hardcode karne ki jagah IAM Role attach kiya jata hai. AWS STS (Security Token Service) temporary credentials (access key, secret key, session token) generate karta hai jo har 1 se 12 ghante me automatically rotate ho jate hain.",
    "englishSummary": "In-depth architecture of IAM Roles and the AWS Security Token Service (STS). Eliminating hardcoded credentials on EC2 and containers, role assumption mechanics (`sts:AssumeRole`), short-lived temporary security credentials, and Trust Policies vs Permissions Policies.",
    "keyConcepts": [
      "No Hardcoded Credentials: Never store AWS Access Keys on EC2 instances or in source code.",
      "IAM Role for EC2: An Instance Profile delivers short-lived credentials directly to the instance via the Instance Metadata Service (IMDS).",
      "Trust Policy vs Permissions Policy:\n  - Trust Policy: Defines WHO can assume the role (e.g. `ec2.amazonaws.com` or another AWS account).\n  - Permissions Policy: Defines WHAT actions the assumed role can perform on AWS resources.",
      "AWS STS (Security Token Service): Generates temporary security credentials valid from 15 minutes to 12 hours. Automatically refreshed by AWS SDKs seamlessly."
    ],
    "examTips": "HIGH FREQUENCY EXAM RULE: How should an application on EC2 access S3 securely? Answer: Attach an IAM Role with S3 permissions to the EC2 instance profile. NEVER store API keys on the server!",
    "architecture": "EC2 Instance ---> Assumes IAM Role ---> AWS STS issues Temporary Credentials ---> Access Granted to S3 Bucket",
    "commandsOrSteps": [
      "aws sts assume-role --role-arn arn:aws:iam::xxxx:role/S3AccessRole --role-session-name test-session",
      "aws iam create-instance-profile --instance-profile-name EC2-S3-Profile"
    ],
    "interviewQuestions": "Q: Why is assigning an IAM Role to an EC2 instance far more secure than embedding AWS Access Keys in the application code?\nA: IAM Roles use AWS STS to generate short-lived temporary credentials that are automatically rotated every few hours. Storing static Access Keys risks accidental source code leaks and requires manual credential rotation."
  },
  {
    "id": 66,
    "lecNum": 66,
    "videoId": "xIbtYZGRKCU",
    "youtubeUrl": "https://www.youtube.com/watch?v=xIbtYZGRKCU",
    "rawTitle": "Identity and Access Management Part-5 Hindi/Urdu | LEC-66 | AWS IAM | AWS IAM Roles and Policies",
    "title": "Lec 66: AWS IAM Part 5: IAM Best Practices & Least Privilege Architecture",
    "cleanTitle": "AWS IAM Part 5: IAM Best Practices & Least Privilege Architecture",
    "duration": "29:01",
    "moduleId": 7,
    "moduleName": "AWS IAM & Security Governance",
    "moduleBadge": "Security",
    "color": "#EF4444",
    "icon": "shield-alt",
    "hindiSummary": "AWS Security ke 10 Golden Best Practices: 1. Root user ko lock karo aur MFA enable karo. 2. Har user ke liye alag IAM user banao. 3. Groups ke zariye permissions manage karo. 4. Least Privilege follow karo. 5. Strong Password Policy lagao. 6. Access keys regular rotate karo. 7. IAM Access Advisor se unused permissions delete karo.",
    "englishSummary": "Comprehensive security architecture based on the AWS IAM Best Practices and CIS AWS Foundations Benchmark. Hardening account security, enforcing least privilege, credential lifecycle management, IAM Access Advisor, and automated permission boundaries.",
    "keyConcepts": [
      "Lock Away Root Credentials: Delete root access keys; use root user only for emergency account tasks and billing tier changes.",
      "Enforce MFA Universally: Mandatory Multi-Factor Authentication for root and all IAM users with console access.",
      "Principle of Least Privilege: Start with zero permissions and grant only the specific actions required for the workload.",
      "IAM Access Advisor: Shows when services were last accessed by a user or role. Identify and remove permissions that haven't been used in 90 days.",
      "IAM Credential Report: Audits account-wide user status, password ages, and MFA activation across all credentials."
    ],
    "examTips": "Auditing tool questions: To audit the status of all credentials and MFA across all IAM users in your account -> Download the IAM Credential Report.",
    "architecture": "AWS Account Security Checklist:\n[x] Root MFA Enabled  [x] No Root Keys  [x] IAM Password Policy  [x] Least Privilege  [x] IAM Roles for EC2",
    "commandsOrSteps": [
      "aws iam generate-credential-report",
      "aws iam get-credential-report"
    ],
    "interviewQuestions": "Q: How do you identify and clean up unused IAM permissions in an enterprise AWS account?\nA: Use IAM Access Advisor to review the 'Last Accessed' timestamp for services and actions. Remove any permissions that have not been exercised within the last 90 days."
  },
  {
    "id": 67,
    "lecNum": 67,
    "videoId": "ezc9Ys0AeCg",
    "youtubeUrl": "https://www.youtube.com/watch?v=ezc9Ys0AeCg",
    "rawTitle": "AWS Identity and Access Management Part-6 Hindi/Urdu | AWS IAM Tutorial |Account Security with IAM",
    "title": "Lec 67: AWS IAM Part 6: Account Security, Password Policies & MFA Enforcement",
    "cleanTitle": "AWS IAM Part 6: Account Security, Password Policies & MFA Enforcement",
    "duration": "29:15",
    "moduleId": 7,
    "moduleName": "AWS IAM & Security Governance",
    "moduleBadge": "Security",
    "color": "#EF4444",
    "icon": "shield-alt",
    "hindiSummary": "Enterprise level account security: IAM Password Policy configure karna (minimum 12 characters, uppercase, lowercase, numbers, special characters, 90 din me password expiry, purane passwords reuse na karne dena) aur Virtual MFA device bind karna.",
    "englishSummary": "Detailed configuration of IAM Account Password Policies and multi-factor authentication (MFA). Implementing enterprise compliance standards, password expiration cycles, lockout rules, and virtual/hardware MFA token bindings.",
    "keyConcepts": [
      "Password Policy Settings:\n  - Minimum password length (8 to 128 characters).\n  - Require at least one uppercase letter, lowercase letter, number, and non-alphanumeric symbol.\n  - Enable password expiration (e.g. rotate every 90 days).\n  - Prevent password reuse (remember previous 1 to 24 passwords).\n  - Allow users to change their own passwords.",
      "MFA Enforcement via Policy: Attach an IAM policy that denies ALL AWS actions unless `aws:MultiFactorAuthPresent: true`.",
      "MFA Types: Virtual MFA (Google Authenticator, Authy), FIDO U2F Hardware Keys (YubiKey), Hardware TOTP tokens."
    ],
    "examTips": "You can enforce MFA by writing an IAM policy with a `Deny` condition that blocks all actions if `aws:MultiFactorAuthPresent` is `false`.",
    "architecture": "User Login Request === [Password Correct] ===> Check MFA Present? === NO ===> Deny All Actions\n                                                               === YES ===> Allow Permitted Actions",
    "commandsOrSteps": [
      "aws iam update-account-password-policy --minimum-password-length 14 --require-symbols --require-numbers --require-uppercase-characters --max-password-age 90"
    ],
    "interviewQuestions": "Q: How can you programmatically force all IAM users to enable MFA before they can perform any actions in the AWS console?\nA: Attach an IAM policy with an explicit Deny on `*` resources with condition `BoolIfExists: {\"aws:MultiFactorAuthPresent\": \"false\"}`, while exempting IAM self-service MFA management actions."
  },
  {
    "id": 68,
    "lecNum": 68,
    "videoId": "8hZq5byiIvo",
    "youtubeUrl": "https://www.youtube.com/watch?v=8hZq5byiIvo",
    "rawTitle": "AWS IAM Lab Part-1 Hindi/Urdu | How to create IAM User in AWS | AWS IAM Tutorial | IAM User",
    "title": "Lec 68: AWS IAM Lab Part 1: How to Create IAM Users & Access Keys",
    "cleanTitle": "AWS IAM Lab Part 1: How to Create IAM Users & Access Keys",
    "duration": "34:10",
    "moduleId": 7,
    "moduleName": "AWS IAM & Security Governance",
    "moduleBadge": "Security",
    "color": "#EF4444",
    "icon": "shield-alt",
    "hindiSummary": "IAM User banane ka hands-on practical: Ek naya user banaya, Management Console access diya, custom password set kiya, user ko first login par password badalne ke liye force kiya, aur AWS CLI ke liye Programmatic Access Keys (Access Key ID & Secret Access Key) generate karke configure kiye.",
    "englishSummary": "Hands-on implementation of IAM User management. Provisioning users via console and CLI, managing console passwords, enforcing 'Require password reset on next sign-in', generating Access Key pairs, and securely configuring local AWS CLI profiles via `aws configure`.",
    "keyConcepts": [
      "User Creation: Set username, console access status, and password assignment.",
      "First Login Hygiene: Check 'User must create a new password at next sign-in'.",
      "Access Keys: Access Key ID (20 characters e.g. `AKIA...`) and Secret Access Key (40 characters). The Secret Access Key is shown ONLY ONCE at creation time; if lost, it must be deleted and regenerated.",
      "Custom Account Sign-in URL: Create a user-friendly sign-in alias (e.g. `https://mycompany.signin.aws.amazon.com/console`) replacing the 12-digit account number."
    ],
    "examTips": "If an IAM user loses their Secret Access Key, you CANNOT retrieve it. You must delete the compromised key pair and generate a new one.",
    "architecture": "AWS Console -> IAM -> Create User -> Enable Console Access -> Enforce Password Reset -> Generate Access Keys -> Configure CLI",
    "commandsOrSteps": [
      "aws iam create-user --user-name dev-vikram",
      "aws iam create-access-key --user-name dev-vikram",
      "aws configure # Enters Access Key, Secret Key, Region, and Output format"
    ],
    "interviewQuestions": "Q: Can an administrator view an IAM user's existing Secret Access Key in the AWS console?\nA: No. The Secret Access Key is only displayed once at creation time. AWS does not store it in plain text. If lost, the administrator must deactivate and delete the old key and create a new key pair."
  },
  {
    "id": 69,
    "lecNum": 69,
    "videoId": "eLjiW6TZMKc",
    "youtubeUrl": "https://www.youtube.com/watch?v=eLjiW6TZMKc",
    "rawTitle": "AWS IAM Lab Part-2 Hindi/Urdu | How to create IAM Group,Inline Policy and Billing Dashboard",
    "title": "Lec 69: AWS IAM Lab Part 2: User Groups, Inline Policies & Billing Dashboard Access",
    "cleanTitle": "AWS IAM Lab Part 2: User Groups, Inline Policies & Billing Dashboard Access",
    "duration": "27:42",
    "moduleId": 7,
    "moduleName": "AWS IAM & Security Governance",
    "moduleBadge": "Security",
    "color": "#EF4444",
    "icon": "shield-alt",
    "hindiSummary": "IAM Groups aur Policies ka hands-on practical: 'Developers' aur 'Auditors' groups banaye, custom Inline Policy likh kar specific S3 bucket ka access diya, aur Root user se Billing Console me jakar 'IAM User and Role Access to Billing Information' enable kiya taaki finance team billing dashboard dekh sake.",
    "englishSummary": "Hands-on lab configuring IAM User Groups, authoring custom inline policies, and delegating AWS Billing Dashboard access to IAM users. Enabling root account billing activation settings and attaching financial management managed policies.",
    "keyConcepts": [
      "Group Policy Assignment: Attaching managed policies to groups so newly added members automatically inherit permissions.",
      "Authoring Custom Inline Policy: Creating scoped JSON rules targeting specific S3 bucket ARNs.",
      "Enabling Billing Dashboard Access: By default, IAM users CANNOT view the AWS Billing Console even if they have `AdministratorAccess`. The Root user must explicitly navigate to Account Settings and check 'Activate IAM Access' for billing information.",
      "Attaching `Billing` or `AWSBillingReadOnlyAccess` policy to finance users."
    ],
    "examTips": "HIGH FREQUENCY EXAM GOTCHA: An administrator user with `AdministratorAccess` gets an Access Denied error on the Billing Dashboard. Why? The Root user must first enable 'Activate IAM Access to Billing Information' in Account Settings!",
    "architecture": "Root User Account Settings -> Activate IAM Billing Access -> Attach 'AWSBillingReadOnlyAccess' Policy to Finance Group",
    "commandsOrSteps": [
      "Root Account -> Account Settings -> IAM User and Role Access to Billing Information -> Click Edit -> Check 'Activate IAM Access'.",
      "Attach managed policy 'Billing' to finance-group."
    ],
    "interviewQuestions": "Q: Why can't an IAM user with `AdministratorAccess` view the AWS Billing & Cost Management console by default?\nA: Billing data is protected at the root account level. The root user must explicitly activate IAM access to billing in account settings before any IAM user or administrator can access billing data."
  },
  {
    "id": 70,
    "lecNum": 70,
    "videoId": "pIXSdYVGHFI",
    "youtubeUrl": "https://www.youtube.com/watch?v=pIXSdYVGHFI",
    "rawTitle": "Cross Account access using IAM Role-Hindi/Urdu | AWS IAM Federated User and Role | AWS IAM Tutorial",
    "title": "Lec 70: Cross-Account Access using IAM Roles & External ID",
    "cleanTitle": "Cross-Account Access using IAM Roles & External ID",
    "duration": "39:04",
    "moduleId": 7,
    "moduleName": "AWS IAM & Security Governance",
    "moduleBadge": "Security",
    "color": "#EF4444",
    "icon": "shield-alt",
    "hindiSummary": "Do alag-alag AWS accounts ke bich cross-account access setup karna. Production Account me ek IAM Role banaya jata hai jiska Trust Policy doosre Development Account ko access deta hai. Development user `sts:AssumeRole` karke Production role assume karta hai. Security ke liye 'External ID' use hota hai 'Confused Deputy' problem se bachne ke liye.",
    "englishSummary": "Deep architectural design of Cross-Account Access using IAM Roles and External IDs. Explaining role assumption mechanics across disparate AWS accounts, delegating permissions without sharing static credentials, and defending against the Confused Deputy vulnerability using External IDs.",
    "keyConcepts": [
      "Cross-Account Role Architecture: Account A (Production) hosts the resource and the IAM Role. Account B (Dev/Audit) hosts the IAM User who assumes the role.",
      "Trust Relationship: Account A's IAM Role Trust Policy explicitly specifies Account B's 12-digit Account ID as the Principal: `\"Principal\": {\"AWS\": \"arn:aws:iam::AccountB-ID:root\"}`.",
      "Switch Role in AWS Console: Users in Account B click their username in the console header -> 'Switch Role' -> Enter Account A ID and Role name.",
      "External ID & Confused Deputy Problem: When integrating with third-party SaaS vendors who manage resources on your behalf, an External ID is mandatory. It acts as a shared secret preventing another third-party customer from hijacking your role."
    ],
    "examTips": "EXAM SCENARIO: 'A third-party SaaS company needs access to your AWS environment to audit costs. What is the most secure setup?' Answer: Create an IAM Role with an External ID in the trust policy and grant the vendor permission to assume the role.",
    "architecture": "Account B User === [sts:AssumeRole with External ID] ===> Account A IAM Role ===> Grants Temporary Access to Production DB",
    "commandsOrSteps": [
      "aws sts assume-role --role-arn arn:aws:iam::111122223333:role/CrossAccountAuditRole --role-session-name AuditSession --external-id MySecret123"
    ],
    "interviewQuestions": "Q: What is the Confused Deputy problem in AWS and how does the IAM External ID resolve it?\nA: It occurs when a third-party service is tricked by a malicious customer into accessing another customer's AWS account. An External ID is a shared unique secret required in the trust policy that ensures the third-party only accesses resources intended for that specific customer."
  },
  {
    "id": 71,
    "lecNum": 71,
    "videoId": "Spu_mxedGBI",
    "youtubeUrl": "https://www.youtube.com/watch?v=Spu_mxedGBI",
    "rawTitle": "How to connect windows server to AWS AD Connector | LEC-71 | AWS AD Connector | AWS IAM",
    "title": "Lec 71: AWS Directory Service: Connecting Windows Server to AWS AD Connector",
    "cleanTitle": "AWS Directory Service: Connecting Windows Server to AWS AD Connector",
    "duration": "42:38",
    "moduleId": 7,
    "moduleName": "AWS IAM & Security Governance",
    "moduleBadge": "Security",
    "color": "#EF4444",
    "icon": "shield-alt",
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
  {
    "id": 72,
    "lecNum": 72,
    "videoId": "vsz8PoQos_0",
    "youtubeUrl": "https://www.youtube.com/watch?v=vsz8PoQos_0",
    "rawTitle": "What is Database-Hindi/Urdu | What is database management System | AWS Database | AWS DynamoDB",
    "title": "Lec 72: Database Fundamentals: DBMS Architecture & Flat Files vs Databases",
    "cleanTitle": "Database Fundamentals: DBMS Architecture & Flat Files vs Databases",
    "duration": "25:07",
    "moduleId": 8,
    "moduleName": "AWS Database Services (RDS, Aurora & DynamoDB)",
    "moduleBadge": "Databases",
    "color": "#14B8A6",
    "icon": "table",
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
  {
    "id": 73,
    "lecNum": 73,
    "videoId": "4WnLrcBtq7o",
    "youtubeUrl": "https://www.youtube.com/watch?v=4WnLrcBtq7o",
    "rawTitle": "What is Relational Database-Hindi/Urdu | LEC-73 | What is SQL | AWS Database | AWS RDS",
    "title": "Lec 73: What is a Relational Database (RDBMS): SQL & ACID Properties",
    "cleanTitle": "What is a Relational Database (RDBMS): SQL & ACID Properties",
    "duration": "29:36",
    "moduleId": 8,
    "moduleName": "AWS Database Services (RDS, Aurora & DynamoDB)",
    "moduleBadge": "Databases",
    "color": "#14B8A6",
    "icon": "table",
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
  {
    "id": 74,
    "lecNum": 74,
    "videoId": "H-A7VdONggM",
    "youtubeUrl": "https://www.youtube.com/watch?v=H-A7VdONggM",
    "rawTitle": "What is NoSQL Database in Hindi/Urdu | LEC-74 | Non Relational Databases | AWS DynamoDB",
    "title": "Lec 74: What is a NoSQL Database: Non-Relational Systems, BASE & CAP Theorem",
    "cleanTitle": "What is a NoSQL Database: Non-Relational Systems, BASE & CAP Theorem",
    "duration": "40:20",
    "moduleId": 8,
    "moduleName": "AWS Database Services (RDS, Aurora & DynamoDB)",
    "moduleBadge": "Databases",
    "color": "#14B8A6",
    "icon": "table",
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
  {
    "id": 75,
    "lecNum": 75,
    "videoId": "MTppcqSploY",
    "youtubeUrl": "https://www.youtube.com/watch?v=MTppcqSploY",
    "rawTitle": "AWS Relational database Services-Hindi/Urdu | LEC-75 | AWS Databases | AWS RDS | AWS DynamoDB",
    "title": "Lec 75: Amazon RDS Overview: Managed Relational Database Services & Engines",
    "cleanTitle": "Amazon RDS Overview: Managed Relational Database Services & Engines",
    "duration": "27:50",
    "moduleId": 8,
    "moduleName": "AWS Database Services (RDS, Aurora & DynamoDB)",
    "moduleBadge": "Databases",
    "color": "#14B8A6",
    "icon": "table",
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
  {
    "id": 76,
    "lecNum": 76,
    "videoId": "CrPiDpELHy4",
    "youtubeUrl": "https://www.youtube.com/watch?v=CrPiDpELHy4",
    "rawTitle": "AWS Relational Database Services Part II-Hindi/Urdu | LEC-76 | AWS RDS | AWS DynamoDB | AWS SAA C03",
    "title": "Lec 76: Amazon RDS Part 2: Multi-AZ Synchronous Replication vs Read Replicas",
    "cleanTitle": "Amazon RDS Part 2: Multi-AZ Synchronous Replication vs Read Replicas",
    "duration": "31:06",
    "moduleId": 8,
    "moduleName": "AWS Database Services (RDS, Aurora & DynamoDB)",
    "moduleBadge": "Databases",
    "color": "#14B8A6",
    "icon": "table",
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
  {
    "id": 77,
    "lecNum": 77,
    "videoId": "nVq8LTxI1Hs",
    "youtubeUrl": "https://www.youtube.com/watch?v=nVq8LTxI1Hs",
    "rawTitle": "AWS Relational Database Services-III Hindi/urdu | LEC-77 | AWS Databases | AWS RDS | AWS SAA C03",
    "title": "Lec 77: Amazon RDS Part 3: Automated Backups, Manual Snapshots & Storage Autoscaling",
    "cleanTitle": "Amazon RDS Part 3: Automated Backups, Manual Snapshots & Storage Autoscaling",
    "duration": "29:06",
    "moduleId": 8,
    "moduleName": "AWS Database Services (RDS, Aurora & DynamoDB)",
    "moduleBadge": "Databases",
    "color": "#14B8A6",
    "icon": "table",
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
  {
    "id": 78,
    "lecNum": 78,
    "videoId": "uMYf4-TgRf0",
    "youtubeUrl": "https://www.youtube.com/watch?v=uMYf4-TgRf0",
    "rawTitle": "AWS Relational database services Part-4 Hindi/Urdu | LEC-78 | AWS Database | AWS RDS Aurora",
    "title": "Lec 78: Amazon RDS Part 4: Amazon Aurora Cloud-Native Database Architecture",
    "cleanTitle": "Amazon RDS Part 4: Amazon Aurora Cloud-Native Database Architecture",
    "duration": "31:25",
    "moduleId": 8,
    "moduleName": "AWS Database Services (RDS, Aurora & DynamoDB)",
    "moduleBadge": "Databases",
    "color": "#14B8A6",
    "icon": "table",
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
  {
    "id": 79,
    "lecNum": 79,
    "videoId": "3yNTsbMRWKc",
    "youtubeUrl": "https://www.youtube.com/watch?v=3yNTsbMRWKc",
    "rawTitle": "AWS RDS Lab-Hindi/Urdu | LEC-79 | How to access MySQL Instance from Linux machine | AWS RDS MySQL",
    "title": "Lec 79: AWS RDS Lab: Connecting to MySQL Instance from Linux EC2 via MySQL CLI",
    "cleanTitle": "AWS RDS Lab: Connecting to MySQL Instance from Linux EC2 via MySQL CLI",
    "duration": "35:15",
    "moduleId": 8,
    "moduleName": "AWS Database Services (RDS, Aurora & DynamoDB)",
    "moduleBadge": "Databases",
    "color": "#14B8A6",
    "icon": "table",
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
  {
    "id": 80,
    "lecNum": 80,
    "videoId": "mm27zBqoxKA",
    "youtubeUrl": "https://www.youtube.com/watch?v=mm27zBqoxKA",
    "rawTitle": "AWS RDS Lab Part-2-Hindi/urdu | LEC-80 | How to access MySQL DB From windows Server | AWS Databases",
    "title": "Lec 80: AWS RDS Lab Part 2: Connecting to RDS MySQL from Windows Server via Workbench",
    "cleanTitle": "AWS RDS Lab Part 2: Connecting to RDS MySQL from Windows Server via Workbench",
    "duration": "14:47",
    "moduleId": 8,
    "moduleName": "AWS Database Services (RDS, Aurora & DynamoDB)",
    "moduleBadge": "Databases",
    "color": "#14B8A6",
    "icon": "table",
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
  {
    "id": 81,
    "lecNum": 81,
    "videoId": "PlhD80o-wcw",
    "youtubeUrl": "https://www.youtube.com/watch?v=PlhD80o-wcw",
    "rawTitle": "AWS Dynamo DB Complete Theory-Hindi/Urdu | LEC-81 |  What is dynamoDB | AWS Sysops | AWS SAA-C03",
    "title": "Lec 81: Amazon DynamoDB Complete Theory: Partition Keys, RCU/WCU & DAX",
    "cleanTitle": "Amazon DynamoDB Complete Theory: Partition Keys, RCU/WCU & DAX",
    "duration": "35:21",
    "moduleId": 8,
    "moduleName": "AWS Database Services (RDS, Aurora & DynamoDB)",
    "moduleBadge": "Databases",
    "color": "#14B8A6",
    "icon": "table",
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
  {
    "id": 82,
    "lecNum": 82,
    "videoId": "8Bl-6Hv424Y",
    "youtubeUrl": "https://www.youtube.com/watch?v=8Bl-6Hv424Y",
    "rawTitle": "AWS DynamoDB Demo-Hindi/Urdu | LEC-82 | Create Table,item in dynamo DB | AWS Databases",
    "title": "Lec 82: Amazon DynamoDB Hands-on Demo: Table Creation, Items, Query vs Scan",
    "cleanTitle": "Amazon DynamoDB Hands-on Demo: Table Creation, Items, Query vs Scan",
    "duration": "18:26",
    "moduleId": 8,
    "moduleName": "AWS Database Services (RDS, Aurora & DynamoDB)",
    "moduleBadge": "Databases",
    "color": "#14B8A6",
    "icon": "table",
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
  {
    "id": 83,
    "lecNum": 83,
    "videoId": "PsJWTZ-bYlQ",
    "youtubeUrl": "https://www.youtube.com/watch?v=PsJWTZ-bYlQ",
    "rawTitle": "AWS Route 53 Tutorial-Hindi/Urdu | How routing policy works in Route 53 | What is AWS Route 53",
    "title": "Lec 83: Amazon Route 53 Tutorial: Global DNS Hierarchy & Domain Management",
    "cleanTitle": "Amazon Route 53 Tutorial: Global DNS Hierarchy & Domain Management",
    "duration": "19:12",
    "moduleId": 9,
    "moduleName": "Amazon Route 53 & Global DNS Management",
    "moduleBadge": "DNS & Traffic",
    "color": "#F97316",
    "icon": "globe",
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
  {
    "id": 84,
    "lecNum": 84,
    "videoId": "G20A82dB5w0",
    "youtubeUrl": "https://www.youtube.com/watch?v=G20A82dB5w0",
    "rawTitle": "AWS Route 53 Basics-Part-II Hindi/Urdu | LEC-84 | What is Route 53 | AWS Routing policies",
    "title": "Lec 84: Amazon Route 53 Record Types: A, AAAA, CNAME vs ALIAS Records",
    "cleanTitle": "Amazon Route 53 Record Types: A, AAAA, CNAME vs ALIAS Records",
    "duration": "34:52",
    "moduleId": 9,
    "moduleName": "Amazon Route 53 & Global DNS Management",
    "moduleBadge": "DNS & Traffic",
    "color": "#F97316",
    "icon": "globe",
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
  {
    "id": 85,
    "lecNum": 85,
    "videoId": "Qf8BNGq2r6w",
    "youtubeUrl": "https://www.youtube.com/watch?v=Qf8BNGq2r6w",
    "rawTitle": "AWS Route 53 Part-III in Hindi/urdu | Lec-85 | What is Route 53 in AWS | AWS DNS | AWS Routing",
    "title": "Lec 85: Amazon Route 53 Hosted Zones: Public vs Private Hosted Zones",
    "cleanTitle": "Amazon Route 53 Hosted Zones: Public vs Private Hosted Zones",
    "duration": "18:16",
    "moduleId": 9,
    "moduleName": "Amazon Route 53 & Global DNS Management",
    "moduleBadge": "DNS & Traffic",
    "color": "#F97316",
    "icon": "globe",
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
  {
    "id": 86,
    "lecNum": 86,
    "videoId": "59aFPjeXfm8",
    "youtubeUrl": "https://www.youtube.com/watch?v=59aFPjeXfm8",
    "rawTitle": "AWS Route 53 Part-4 Hindi/Urdu | Lec-86 | What is AWS Route 53 | AWS Routing policies | AWS DNS",
    "title": "Lec 86: Amazon Route 53 DNS Health Checks & Automated Failover",
    "cleanTitle": "Amazon Route 53 DNS Health Checks & Automated Failover",
    "duration": "23:01",
    "moduleId": 9,
    "moduleName": "Amazon Route 53 & Global DNS Management",
    "moduleBadge": "DNS & Traffic",
    "color": "#F97316",
    "icon": "globe",
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
  {
    "id": 87,
    "lecNum": 87,
    "videoId": "MR0dwcJ0Ujg",
    "youtubeUrl": "https://www.youtube.com/watch?v=MR0dwcJ0Ujg",
    "rawTitle": "AWS Route 53 Routing Policies-Hindi/Urdu | Lec-87 | AWS Route 53 and its features | AWS DNS",
    "title": "Lec 87: Amazon Route 53 Routing Policies: 7 Routing Strategies Deep Dive",
    "cleanTitle": "Amazon Route 53 Routing Policies: 7 Routing Strategies Deep Dive",
    "duration": "48:41",
    "moduleId": 9,
    "moduleName": "Amazon Route 53 & Global DNS Management",
    "moduleBadge": "DNS & Traffic",
    "color": "#F97316",
    "icon": "globe",
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
  {
    "id": 88,
    "lecNum": 88,
    "videoId": "7V33wpgCUIM",
    "youtubeUrl": "https://www.youtube.com/watch?v=7V33wpgCUIM",
    "rawTitle": "AWS Route 53 Demo-Hindi/Urdu | Lec-88 | How Routing Policy works in Route 53 | AWS DNS | AWS Videos",
    "title": "Lec 88: Amazon Route 53 Hands-on Lab: Configuring Records & Weighted Routing",
    "cleanTitle": "Amazon Route 53 Hands-on Lab: Configuring Records & Weighted Routing",
    "duration": "19:42",
    "moduleId": 9,
    "moduleName": "Amazon Route 53 & Global DNS Management",
    "moduleBadge": "DNS & Traffic",
    "color": "#F97316",
    "icon": "globe",
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
  {
    "id": 89,
    "lecNum": 89,
    "videoId": "dyPI37FQWW4",
    "youtubeUrl": "https://www.youtube.com/watch?v=dyPI37FQWW4",
    "rawTitle": "AWS Cloudfront-Hindi/urdu | What is Cloudfront | Creating amazon cloudfront distribution |AWS CDN",
    "title": "Lec 89: Amazon CloudFront Overview: Global Content Delivery Network (CDN)",
    "cleanTitle": "Amazon CloudFront Overview: Global Content Delivery Network (CDN)",
    "duration": "30:37",
    "moduleId": 10,
    "moduleName": "Amazon CloudFront & Edge CDN",
    "moduleBadge": "Edge & CDN",
    "color": "#EAB308",
    "icon": "bolt",
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
  {
    "id": 90,
    "lecNum": 90,
    "videoId": "YwAPrf2tMjs",
    "youtubeUrl": "https://www.youtube.com/watch?v=YwAPrf2tMjs",
    "rawTitle": "AWS Cloudfront Part-2 Hindi/Urdu | What is Edge location and Regional edge cache in AWS |AWS SAA C03",
    "title": "Lec 90: Amazon CloudFront Part 2: TTL, Cache Invalidation & Origin Access Control",
    "cleanTitle": "Amazon CloudFront Part 2: TTL, Cache Invalidation & Origin Access Control",
    "duration": "17:00",
    "moduleId": 10,
    "moduleName": "Amazon CloudFront & Edge CDN",
    "moduleBadge": "Edge & CDN",
    "color": "#EAB308",
    "icon": "bolt",
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
  {
    "id": 91,
    "lecNum": 91,
    "videoId": "ufRxrPihooE",
    "youtubeUrl": "https://www.youtube.com/watch?v=ufRxrPihooE",
    "rawTitle": "AWS Cloudfront Demo Hindi/urdu | How CDN works in AWS",
    "title": "Lec 91: Amazon CloudFront Hands-on Demo: Accelerating S3 Website with Free SSL",
    "cleanTitle": "Amazon CloudFront Hands-on Demo: Accelerating S3 Website with Free SSL",
    "duration": "15:25",
    "moduleId": 10,
    "moduleName": "Amazon CloudFront & Edge CDN",
    "moduleBadge": "Edge & CDN",
    "color": "#EAB308",
    "icon": "bolt",
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
  {
    "id": 92,
    "lecNum": 92,
    "videoId": "PjsbXzuj_5Y",
    "youtubeUrl": "https://www.youtube.com/watch?v=PjsbXzuj_5Y",
    "rawTitle": "AWS Simple Queue Service-HIndi/Urdu | How SQS Works | AWS SQS used Cases | SNS vs SQS Comparison",
    "title": "Lec 92: AWS Simple Queue Service (SQS) Part 1: Decoupled Architectures & Fundamentals",
    "cleanTitle": "AWS Simple Queue Service (SQS) Part 1: Decoupled Architectures & Fundamentals",
    "duration": "24:51",
    "moduleId": 11,
    "moduleName": "Application Messaging & Decoupling (SQS & SNS)",
    "moduleBadge": "Decoupling",
    "color": "#06B6D4",
    "icon": "envelope-open-text",
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
  {
    "id": 93,
    "lecNum": 93,
    "videoId": "wCD6NtTMIeY",
    "youtubeUrl": "https://www.youtube.com/watch?v=wCD6NtTMIeY",
    "rawTitle": "AWS SQS Part-2 Hindi/Urdu | LEC-93 |Important Points of Simple Queue Service | How SQS Billing works",
    "title": "Lec 93: AWS SQS Part 2: Standard Queues vs FIFO Queues Comparison",
    "cleanTitle": "AWS SQS Part 2: Standard Queues vs FIFO Queues Comparison",
    "duration": "18:14",
    "moduleId": 11,
    "moduleName": "Application Messaging & Decoupling (SQS & SNS)",
    "moduleBadge": "Decoupling",
    "color": "#06B6D4",
    "icon": "envelope-open-text",
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
  {
    "id": 94,
    "lecNum": 94,
    "videoId": "pypjxGaUQHw",
    "youtubeUrl": "https://www.youtube.com/watch?v=pypjxGaUQHw",
    "rawTitle": "AWS SQS Part-3 Hindi/Urdu | LEC-94 | SQS Visibility Timeout | Short Polling and Long Polling | SAA",
    "title": "Lec 94: AWS SQS Part 3: Visibility Timeout, Dead Letter Queues (DLQ) & Long Polling",
    "cleanTitle": "AWS SQS Part 3: Visibility Timeout, Dead Letter Queues (DLQ) & Long Polling",
    "duration": "22:45",
    "moduleId": 11,
    "moduleName": "Application Messaging & Decoupling (SQS & SNS)",
    "moduleBadge": "Decoupling",
    "color": "#06B6D4",
    "icon": "envelope-open-text",
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
  {
    "id": 95,
    "lecNum": 95,
    "videoId": "dedJqS4WuB4",
    "youtubeUrl": "https://www.youtube.com/watch?v=dedJqS4WuB4",
    "rawTitle": "AWS SQS LAB-Hindi/urdu | LEC-95 |  AWS SQS Triggers on Lambda function | AWS Simple Queue Service",
    "title": "Lec 95: AWS SQS Hands-on Lab: Queue Creation, Message Flow & Lambda Triggers",
    "cleanTitle": "AWS SQS Hands-on Lab: Queue Creation, Message Flow & Lambda Triggers",
    "duration": "13:04",
    "moduleId": 11,
    "moduleName": "Application Messaging & Decoupling (SQS & SNS)",
    "moduleBadge": "Decoupling",
    "color": "#06B6D4",
    "icon": "envelope-open-text",
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
  {
    "id": 96,
    "lecNum": 96,
    "videoId": "_IFRdW06OUs",
    "youtubeUrl": "https://www.youtube.com/watch?v=_IFRdW06OUs",
    "rawTitle": "AWS Simple Notification Service Complete Theory-Hindi/urdu | Lec-96 | AWS SNS Features | SNS vs SQS",
    "title": "Lec 96: AWS Simple Notification Service (SNS) Complete Theory: Pub/Sub & Fan-Out",
    "cleanTitle": "AWS Simple Notification Service (SNS) Complete Theory: Pub/Sub & Fan-Out",
    "duration": "24:32",
    "moduleId": 11,
    "moduleName": "Application Messaging & Decoupling (SQS & SNS)",
    "moduleBadge": "Decoupling",
    "color": "#06B6D4",
    "icon": "envelope-open-text",
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
  {
    "id": 97,
    "lecNum": 97,
    "videoId": "d8HilKWQ7OM",
    "youtubeUrl": "https://www.youtube.com/watch?v=d8HilKWQ7OM",
    "rawTitle": "AWS SNS Demo-Hindi/urdu | Lec-97 | AWS Simple Notification Service | AWS Cloudwatch | AWS SAA C03",
    "title": "Lec 97: AWS SNS Hands-on Demo: Topic Creation, Email/SQS Subscriptions & CloudWatch Alarms",
    "cleanTitle": "AWS SNS Hands-on Demo: Topic Creation, Email/SQS Subscriptions & CloudWatch Alarms",
    "duration": "10:57",
    "moduleId": 11,
    "moduleName": "Application Messaging & Decoupling (SQS & SNS)",
    "moduleBadge": "Decoupling",
    "color": "#06B6D4",
    "icon": "envelope-open-text",
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
  {
    "id": 98,
    "lecNum": 98,
    "videoId": "pSNFw71T2uA",
    "youtubeUrl": "https://www.youtube.com/watch?v=pSNFw71T2uA",
    "rawTitle": "Configuring NAT instance for private subnets and internet access | LEC-98NAT Gateway vs NAT instance",
    "title": "Lec 98: Configuring NAT Instance for Private Subnets & NAT Gateway vs NAT Instance",
    "cleanTitle": "Configuring NAT Instance for Private Subnets & NAT Gateway vs NAT Instance",
    "duration": "32:33",
    "moduleId": 3,
    "moduleName": "Amazon VPC & Cloud Networking",
    "moduleBadge": "Networking",
    "color": "#10B981",
    "icon": "network-wired",
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
  {
    "id": 99,
    "lecNum": 99,
    "videoId": "qGpMQIzGw_w",
    "youtubeUrl": "https://www.youtube.com/watch?v=qGpMQIzGw_w",
    "rawTitle": "AWS Site to Site VPN Configuration-Theory and Demo-Hindi/Urdu | Lec-99 | AWS Real time Project",
    "title": "Lec 99: AWS Site-to-Site VPN Real-Time Production Implementation & Routing",
    "cleanTitle": "AWS Site-to-Site VPN Real-Time Production Implementation & Routing",
    "duration": "58:30",
    "moduleId": 3,
    "moduleName": "Amazon VPC & Cloud Networking",
    "moduleBadge": "Networking",
    "color": "#10B981",
    "icon": "network-wired",
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
  {
    "id": 100,
    "lecNum": 100,
    "videoId": "6cTObKzpLUA",
    "youtubeUrl": "https://www.youtube.com/watch?v=6cTObKzpLUA",
    "rawTitle": "AWS Lambda Part-1-Hindi/Urdu | Lec-100 | Serverless compute on AWS | What is AWS Lambda",
    "title": "Lec 100: Serverless Computing & AWS Lambda Part 1: Execution Model & Lifecycle",
    "cleanTitle": "Serverless Computing & AWS Lambda Part 1: Execution Model & Lifecycle",
    "duration": "39:21",
    "moduleId": 12,
    "moduleName": "Serverless Computing & AWS Lambda",
    "moduleBadge": "Serverless",
    "color": "#A855F7",
    "icon": "code",
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
  {
    "id": 101,
    "lecNum": 101,
    "videoId": "7aH9VoeQ6t8",
    "youtubeUrl": "https://www.youtube.com/watch?v=7aH9VoeQ6t8",
    "rawTitle": "AWS Lambda Part-2 Hindi/Urdu | Lec-101 | Invocation types | AWS Lambda Trigger | AWS Serverless",
    "title": "Lec 101: AWS Lambda Part 2: Invocation Types, Event Sources & Execution Context",
    "cleanTitle": "AWS Lambda Part 2: Invocation Types, Event Sources & Execution Context",
    "duration": "33:30",
    "moduleId": 12,
    "moduleName": "Serverless Computing & AWS Lambda",
    "moduleBadge": "Serverless",
    "color": "#A855F7",
    "icon": "code",
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
  {
    "id": 102,
    "lecNum": 102,
    "videoId": "LfyqWYpm8Jw",
    "youtubeUrl": "https://www.youtube.com/watch?v=LfyqWYpm8Jw",
    "rawTitle": "AWS Lambda Lab-1 Hindi/Urdu | LAST LECTURE 102 | Setup S3 Trigger with Lambda and dynamoDB",
    "title": "Lec 102: AWS Lambda Final Masterclass Lab: Event-Driven S3 Trigger to DynamoDB Pipeline",
    "cleanTitle": "AWS Lambda Final Masterclass Lab: Event-Driven S3 Trigger to DynamoDB Pipeline",
    "duration": "24:46",
    "moduleId": 12,
    "moduleName": "Serverless Computing & AWS Lambda",
    "moduleBadge": "Serverless",
    "color": "#A855F7",
    "icon": "code",
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
];
