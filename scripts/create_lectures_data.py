import json, re

with open('all_playlist_videos.json') as f:
    videos = json.load(f)

with open('lectures_raw.json') as f:
    raw_list = json.load(f)
    raw_map = {x['id']: x for x in raw_list}

MODULES = [
    {
        "id": 1,
        "title": "Cloud Fundamentals & AWS Global Infrastructure",
        "badge": "Basics & Infra",
        "icon": "fa-cloud",
        "count": 3,
        "desc": "Introduction to Cloud Computing, Service Models (IaaS, PaaS, SaaS), Virtualization layers, Regions, Availability Zones, and AWS Free Tier setup."
    },
    {
        "id": 2,
        "title": "Amazon EC2 & Compute Architectures",
        "badge": "Compute",
        "icon": "fa-server",
        "count": 14,
        "desc": "Elastic Compute Cloud deep dive: Instance families (T, M, C, R, I, P, G, Metal), Purchasing options (On-Demand, Reserved, Spot), Windows/Linux EC2, IMDSv2, and User Data automation."
    },
    {
        "id": 3,
        "title": "Amazon VPC & Cloud Networking",
        "badge": "Networking",
        "icon": "fa-network-wired",
        "count": 13,
        "desc": "Virtual Private Cloud architecture: CIDR, Subnets, Route Tables, Internet Gateway, NAT Gateway vs NAT Instance, Security Groups vs NACLs, VPC Peering, Endpoints, and Site-to-Site VPN."
    },
    {
        "id": 4,
        "title": "AWS Storage Services (S3, EFS & Lifecycle)",
        "badge": "Storage",
        "icon": "fa-database",
        "count": 13,
        "desc": "Object vs Block vs File storage, Amazon S3 Storage Classes, S3 Lifecycle Management, Versioning, MFA Delete, Cross-Region Replication, Static Web Hosting, Route 53 binding, and Amazon EFS."
    },
    {
        "id": 5,
        "title": "Amazon EBS & Machine Images (AMI)",
        "badge": "Block Storage",
        "icon": "fa-hdd",
        "count": 9,
        "desc": "Elastic Block Store volume types (gp2, gp3, io1, io2, st1, sc1), EBS vs Instance Store, Snapshots, Incremental backups, KMS Encryption, AMIs, and cross-account volume migration."
    },
    {
        "id": 6,
        "title": "High Availability, Auto Scaling & Elastic Load Balancing",
        "badge": "Scalability",
        "icon": "fa-layer-group",
        "count": 11,
        "desc": "Fault tolerance, EC2 Auto Scaling groups, Dynamic Scaling policies, Elastic Load Balancers (ALB vs NLB vs CLB), Health checks, Target groups, and Multi-VPC load balancing."
    },
    {
        "id": 7,
        "title": "AWS IAM & Security Governance",
        "badge": "Security",
        "icon": "fa-shield-alt",
        "count": 10,
        "desc": "Identity & Access Management: Users, Groups, Roles vs Policies, Least Privilege, MFA, AWS STS Temporary credentials, Cross-Account Access, Microsoft AD Connector, and Billing Dashboards."
    },
    {
        "id": 8,
        "title": "AWS Database Services (RDS, Aurora & DynamoDB)",
        "badge": "Databases",
        "icon": "fa-table",
        "count": 11,
        "desc": "Relational vs NoSQL databases, Amazon RDS engines, Multi-AZ Synchronous replication vs Read Replicas, Amazon Aurora architecture (6 copies across 3 AZs), and Amazon DynamoDB NoSQL design."
    },
    {
        "id": 9,
        "title": "Amazon Route 53 & Global DNS Management",
        "badge": "DNS & Traffic",
        "icon": "fa-globe",
        "count": 6,
        "desc": "Domain Name System fundamentals, Hosted Zones, Record types (A, CNAME, ALIAS), and 7 Routing Policies (Simple, Weighted, Latency, Failover, Geolocation, Geoproximity, Multi-Value)."
    },
    {
        "id": 10,
        "title": "Amazon CloudFront & Edge CDN",
        "badge": "Edge & CDN",
        "icon": "fa-bolt",
        "count": 3,
        "desc": "Content Delivery Network architecture: Edge Locations, Regional Edge Caches, Origins, Cache Behaviors, TTL, Cache Invalidation, Origin Access Control (OAC), and SSL integration."
    },
    {
        "id": 11,
        "title": "Application Messaging & Decoupling (SQS & SNS)",
        "badge": "Decoupling",
        "icon": "fa-envelope-open-text",
        "count": 6,
        "desc": "Loosely coupled architectures: Amazon SQS Standard vs FIFO, Visibility Timeout, Dead Letter Queues (DLQ), Short vs Long Polling, Amazon SNS Pub/Sub Fan-Out, and Event Triggers."
    },
    {
        "id": 12,
        "title": "Serverless Computing & AWS Lambda",
        "badge": "Serverless",
        "icon": "fa-code",
        "count": 3,
        "desc": "Serverless execution principles, AWS Lambda runtime lifecycle, vCPU/Memory allocations, Cold vs Warm starts, Invocation models (Sync, Async, Polling), and end-to-end S3-Lambda-DynamoDB pipelines."
    }
]

def get_module_for_lecture(lec_num):
    if 1 <= lec_num <= 3:
        return 1
    elif 4 <= lec_num <= 17:
        return 2
    elif (18 <= lec_num <= 28) or lec_num in (98, 99):
        return 3
    elif 29 <= lec_num <= 41:
        return 4
    elif 42 <= lec_num <= 50:
        return 5
    elif 51 <= lec_num <= 61:
        return 6
    elif 62 <= lec_num <= 71:
        return 7
    elif 72 <= lec_num <= 82:
        return 8
    elif 83 <= lec_num <= 88:
        return 9
    elif 89 <= lec_num <= 91:
        return 10
    elif 92 <= lec_num <= 97:
        return 11
    elif 100 <= lec_num <= 102:
        return 12
    return 1

print("Ready to assemble lectures.")
