/**
 * AWS Cheat Sheets, Comparison Matrices & Exam Cram
 * Solutions Architect Associate (SAA-C03) & SysOps Administrator
 */

window.AWS_CHEATSHEETS = {
  "comparisons": [
    {
      "id": "sg-vs-nacl",
      "title": "Security Group (SG) vs Network ACL (NACL)",
      "description": "Essential AWS VPC security comparison between instance-level and subnet-level firewalls.",
      "headers": [
        "Feature",
        "Security Group (SG)",
        "Network ACL (NACL)"
      ],
      "rows": [
        [
          "Level",
          "Instance / ENI Level",
          "Subnet Level"
        ],
        [
          "State Tracking",
          "Stateful (Return traffic automatically allowed)",
          "Stateless (Inbound & Outbound evaluated separately)"
        ],
        [
          "Rule Types",
          "Supports ALLOW rules only",
          "Supports both ALLOW and DENY rules"
        ],
        [
          "Rule Evaluation",
          "All rules evaluated before deciding",
          "Numbered rules evaluated sequentially (lowest first)"
        ],
        [
          "Default State (Custom)",
          "Denies all inbound, allows all outbound",
          "Denies all inbound, denies all outbound"
        ],
        [
          "Blocking Specific IP",
          "Cannot block specific IP",
          "Can block specific IP using low rule number"
        ],
        [
          "Ephemeral Ports",
          "Automatically handled statefully",
          "Must explicitly allow outbound TCP 1024-65535"
        ]
      ]
    },
    {
      "id": "alb-vs-nlb",
      "title": "Application Load Balancer (ALB) vs Network Load Balancer (NLB)",
      "description": "Layer 7 intelligent routing vs Layer 4 ultra-high-speed network routing.",
      "headers": [
        "Feature",
        "Application Load Balancer (ALB)",
        "Network Load Balancer (NLB)"
      ],
      "rows": [
        [
          "OSI Layer",
          "Layer 7 (Application: HTTP, HTTPS, gRPC)",
          "Layer 4 (Transport: TCP, UDP, TLS)"
        ],
        [
          "Throughput & Latency",
          "High throughput, ~10-50ms latency",
          "Extreme throughput (millions RPS), microsecond latency"
        ],
        [
          "Static IP per AZ",
          "No (Uses dynamic DNS hostname)",
          "YES (Static Elastic IP per Availability Zone)"
        ],
        [
          "Routing Capabilities",
          "Path (`/api`), Host, HTTP headers, Query strings",
          "IP address, Port, and Protocol only"
        ],
        [
          "WebSockets & HTTP/2",
          "Yes, natively supported",
          "Yes (TCP pass-through)"
        ],
        [
          "Cross-Zone Load Balancing",
          "Enabled by default (free)",
          "Disabled by default (can be enabled)"
        ],
        [
          "AWS WAF Integration",
          "Yes, direct WAF integration",
          "No (requires ALB or CloudFront behind it)"
        ],
        [
          "Primary Use Case",
          "Websites, microservices, container apps",
          "Gaming, financial trading, ultra-low latency, static IP whitelisting"
        ]
      ]
    },
    {
      "id": "ebs-vs-efs-vs-s3",
      "title": "Storage Comparison: EBS vs EFS vs S3",
      "description": "Block Storage vs Shared File Storage vs Global Object Storage.",
      "headers": [
        "Feature",
        "Amazon EBS",
        "Amazon EFS",
        "Amazon S3"
      ],
      "rows": [
        [
          "Storage Type",
          "Block Storage",
          "File Storage (POSIX)",
          "Object Storage"
        ],
        [
          "Access Protocol",
          "Direct NVMe / SCSI block bus",
          "NFSv4 (TCP Port 2049)",
          "HTTPS REST API (GET, PUT, DELETE)"
        ],
        [
          "Instance Attachments",
          "Single EC2 in single AZ (Multi-Attach on io1/io2)",
          "1,000s of EC2 Linux instances across multiple AZs",
          "Infinite concurrent access globally"
        ],
        [
          "Durability & Scope",
          "AZ-specific (99.8% to 99.999%)",
          "Multi-AZ regional (99.999999999%)",
          "Multi-AZ regional (99.999999999% - 11 9s)"
        ],
        [
          "OS Boot Support",
          "Yes (Primary OS boot drive)",
          "No (Data files only)",
          "No"
        ],
        [
          "Capacity Scaling",
          "Fixed provisioned size (modify on fly)",
          "Elastic (auto-scales up and down)",
          "Infinite scale (zero capacity planning)"
        ],
        [
          "Cost Profile",
          "$0.08 / GB / mo (gp3)",
          "$0.30 / GB / mo ($0.025 with IA)",
          "$0.023 / GB / mo ($0.00099 Glacier Deep)"
        ]
      ]
    },
    {
      "id": "rds-vs-aurora-vs-dynamodb",
      "title": "Databases: RDS vs Amazon Aurora vs DynamoDB",
      "description": "Standard Managed Relational vs Cloud-Native Relational vs Managed NoSQL Key-Value.",
      "headers": [
        "Feature",
        "Amazon RDS",
        "Amazon Aurora",
        "Amazon DynamoDB"
      ],
      "rows": [
        [
          "Database Model",
          "Relational (OLTP)",
          "Cloud-Native Relational (MySQL/PostgreSQL)",
          "NoSQL (Key-Value & Document)"
        ],
        [
          "Schema",
          "Strict SQL Schema",
          "Strict SQL Schema",
          "Schemaless (Flexible JSON attributes)"
        ],
        [
          "Storage Architecture",
          "EBS volume attached to VM instance",
          "Shared distributed storage fleet across 3 AZs",
          "Fully managed distributed SSD partitions"
        ],
        [
          "Replication & HA",
          "Multi-AZ (1 synchronous standby in 2nd AZ)",
          "6 copies across 3 AZs (Quorum write: 4, read: 3)",
          "Synchronous replication across 3 AZs"
        ],
        [
          "Read Replicas",
          "Up to 5 replicas (Async replication lag)",
          "Up to 15 replicas (Sub-10ms lag, auto-failover)",
          "Global Tables (Active-Active multi-region)"
        ],
        [
          "Scaling Dimensions",
          "Vertical compute resize + Storage autoscaling",
          "Vertical compute + Aurora Serverless v2",
          "Horizontal infinite scaling (RCU/WCU / On-Demand)"
        ],
        [
          "Latency",
          "Low millisecond",
          "Low millisecond",
          "Single-digit millisecond / Microsecond (DAX)"
        ]
      ]
    },
    {
      "id": "sqs-vs-sns",
      "title": "Messaging: Amazon SQS vs Amazon SNS",
      "description": "Queue Decoupling (Pull/Polling) vs Pub/Sub Notification (Push/Fan-Out).",
      "headers": [
        "Feature",
        "Amazon SQS",
        "Amazon SNS"
      ],
      "rows": [
        [
          "Communication Model",
          "Queue (Point-to-Point / Producer-Consumer)",
          "Pub/Sub (Publish/Subscribe - One-to-Many)"
        ],
        [
          "Delivery Mechanism",
          "PULL: Consumers actively poll the queue",
          "PUSH: SNS immediately pushes events to subscribers"
        ],
        [
          "Persistence",
          "Messages retained up to 14 days (default 4 days)",
          "No persistence; pushed immediately (or discarded)"
        ],
        [
          "Subscribers",
          "Single consumer pool pulls individual messages",
          "Multiple subscribers (Email, SMS, SQS, Lambda, HTTP)"
        ],
        [
          "Message Ordering",
          "Standard (best-effort) / FIFO (strict order)",
          "Standard / FIFO Topics"
        ],
        [
          "Max Payload",
          "256 KB (up to 2GB with S3 Extended Client)",
          "256 KB"
        ],
        [
          "Synergy Pattern",
          "Worker queues buffer burst traffic",
          "Fan-Out: 1 SNS Topic pushes to multiple SQS queues"
        ]
      ]
    },
    {
      "id": "nat-gw-vs-nat-instance",
      "title": "NAT Gateway vs NAT Instance",
      "description": "AWS Managed NAT vs Self-Managed EC2 NAT router for private subnets.",
      "headers": [
        "Feature",
        "AWS NAT Gateway",
        "AWS NAT Instance (EC2)"
      ],
      "rows": [
        [
          "Management",
          "AWS Fully Managed",
          "Customer Self-Managed"
        ],
        [
          "High Availability",
          "Built-in redundancy within AZ (Deploy 1 per AZ)",
          "None (Single point of failure; requires scripts)"
        ],
        [
          "Bandwidth",
          "Scales automatically up to 45 Gbps",
          "Limited by EC2 instance type bandwidth"
        ],
        [
          "Maintenance",
          "Zero OS maintenance or security patches",
          "Customer must patch OS, iptables, and security"
        ],
        [
          "Source/Dest Check",
          "Not applicable (native)",
          "MUST BE DISABLED in EC2 settings to route traffic"
        ],
        [
          "Elastic IP Required",
          "Yes (Allocated on creation)",
          "Yes (Associated to EC2 ENI)"
        ],
        [
          "Cost Model",
          "Hourly charge + per-GB data processing charge",
          "EC2 instance hourly rate + data transfer out charge"
        ]
      ]
    }
  ],
  "examTips": [
    {
      "topic": "IAM Security Fundamentals",
      "tip": "Root account access keys should be deleted immediately upon creation. Daily operations must run under IAM users or IAM Identity Center roles with the Principle of Least Privilege. Never hardcode credentials on EC2; use IAM Roles with instance profiles."
    },
    {
      "topic": "VPC High Availability & Subnets",
      "tip": "Subnets NEVER span multiple Availability Zones. For multi-AZ redundancy, always deploy at least two subnets in two distinct AZs. AWS reserves 5 IP addresses in every subnet (.0, .1, .2, .3, .255)."
    },
    {
      "topic": "VPC Peering Non-Transitive Rule",
      "tip": "VPC Peering does NOT support transitive routing. If VPC A is peered to VPC B, and B to C, A cannot communicate with C through B. You must create an explicit peering connection between A and C or use AWS Transit Gateway."
    },
    {
      "topic": "S3 High Availability & Versioning",
      "tip": "All S3 storage classes (except One Zone-IA) store data across at least 3 Availability Zones with 11 9s durability. Versioning cannot be disabled once enabled—only suspended. To restore a deleted file, delete the Delete Marker."
    },
    {
      "topic": "EBS Snapshots & Availability Zones",
      "tip": "EBS volumes are strictly locked to their single Availability Zone. To attach an EBS volume to an EC2 instance in a different AZ, take a snapshot of the volume and restore it as a new volume in the destination AZ."
    },
    {
      "topic": "Auto Scaling Health Checks",
      "tip": "By default, Auto Scaling Groups only perform EC2 hypervisor hardware checks. If an application process crashes or freezes (HTTP 500), switch the ASG health check type to 'ELB' so the instance is automatically replaced."
    },
    {
      "topic": "Database High Availability vs Read Scaling",
      "tip": "Need Disaster Recovery and Automated Failover? Choose RDS Multi-AZ (synchronous replication to passive standby in another AZ). Need to scale read queries or run heavy reports? Choose RDS Read Replicas (asynchronous replication)."
    },
    {
      "topic": "Route 53 Apex Record Routing",
      "tip": "CNAME records CANNOT be placed at the Zone Apex (root domain like example.com). To route an apex domain to an Application Load Balancer, CloudFront distribution, or S3 website, use a Route 53 ALIAS record."
    },
    {
      "topic": "Serverless Decoupling with SQS & Lambda",
      "tip": "When connecting an SQS queue to AWS Lambda, set the SQS Visibility Timeout to at least 6 times the Lambda function timeout to prevent premature message redelivery while Lambda is still processing."
    }
  ],
  "quizQuestions": [
    {
      "id": 1,
      "question": "An e-commerce application expects sudden traffic spikes during a flash sale. The database is struggling to handle both transactional writes and analytical reporting queries. What is the most architecturally sound and cost-effective solution?",
      "options": [
        "Vertically resize the RDS instance to the largest available instance class during the sale.",
        "Deploy an Amazon RDS Multi-AZ standby instance and direct reporting queries to the standby endpoint.",
        "Create one or more Amazon RDS Read Replicas and point the analytical reporting queries to the Read Replica endpoint.",
        "Migrate the entire transactional database to Amazon S3."
      ],
      "correct": 2,
      "explanation": "Amazon RDS Read Replicas offload read-heavy traffic and reporting workloads asynchronously from the primary database. Multi-AZ standby instances are purely passive and cannot serve read traffic."
    },
    {
      "id": 2,
      "question": "A solutions architect is designing a web application on EC2 instances behind an Application Load Balancer. For security compliance, the EC2 instances must not be directly accessible from the public internet. How should the security groups be configured?",
      "options": [
        "Place EC2 instances in a public subnet with a Security Group allowing port 80 from 0.0.0.0/0.",
        "Place EC2 instances in private subnets with a Security Group that allows inbound HTTP traffic ONLY from the Security Group ID of the ALB.",
        "Use a Network ACL denying all inbound traffic on port 80.",
        "Assign an Elastic IP to each EC2 instance and block port 443."
      ],
      "correct": 1,
      "explanation": "Security Group Chaining: By setting the source of the EC2 Security Group to the Security Group ID of the ALB, only traffic evaluated and forwarded by the load balancer is allowed, preventing direct public internet access."
    },
    {
      "id": 3,
      "question": "A company wants to host a static website on Amazon S3 mapped to their root domain 'company.com'. Which Amazon Route 53 record type must be used to point the root domain to the S3 website endpoint?",
      "options": [
        "CNAME Record",
        "PTR Record",
        "ALIAS A-Record",
        "TXT Record"
      ],
      "correct": 2,
      "explanation": "DNS RFC standards prohibit CNAME records at the Zone Apex (root naked domain). Route 53 ALIAS records solve this by mapping the zone apex directly to AWS resource endpoints like S3 or ALB."
    },
    {
      "id": 4,
      "question": "An EC2 instance in a private subnet must download operating system security patches from the internet, but must strictly reject any inbound connection initiated from the internet. Which AWS component should you deploy?",
      "options": [
        "Internet Gateway in the private subnet",
        "NAT Gateway in a public subnet with an Elastic IP, and route 0.0.0.0/0 from the private route table to the NAT Gateway",
        "VPC Peering connection to an external public IP",
        "Egress-Only Internet Gateway for IPv4"
      ],
      "correct": 1,
      "explanation": "A NAT Gateway deployed in a public subnet allows instances in private subnets to initiate outbound connections to the internet while preventing inbound connections from reaching private instances."
    },
    {
      "id": 5,
      "question": "An application processes payment transactions where order messages must be processed in the exact sequence they were submitted, and no duplicate processing can occur. Which messaging service should you choose?",
      "options": [
        "Amazon SQS Standard Queue",
        "Amazon SNS Standard Topic",
        "Amazon SQS FIFO Queue",
        "Amazon CloudWatch Events"
      ],
      "correct": 2,
      "explanation": "Amazon SQS FIFO queues guarantee strict First-In-First-Out ordering and exactly-once processing with deduplication IDs, making them ideal for banking and transactional workflows."
    }
  ]
};
