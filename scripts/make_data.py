import json, re

with open('all_playlist_videos.json') as f:
    videos = json.load(f)

with open('lectures_raw.json') as f:
    raw_list = json.load(f)
    raw_map = {x['id']: x for x in raw_list}

MODULES = [
    {"id": 1, "title": "Cloud Fundamentals & AWS Global Infrastructure", "badge": "Basics & Infra", "icon": "cloud", "color": "#3B82F6", "lectures": [1, 2, 3], "desc": "Introduction to Cloud Computing, Service Models (IaaS, PaaS, SaaS), Virtualization layers, Regions, Availability Zones, and AWS Free Tier setup."},
    {"id": 2, "title": "Amazon EC2 & Compute Architectures", "badge": "Compute", "icon": "server", "color": "#F59E0B", "lectures": list(range(4, 18)), "desc": "Elastic Compute Cloud deep dive: Instance families (T, M, C, R, I, P, G, Metal), Purchasing options (On-Demand, Reserved, Spot), Windows/Linux EC2, IMDSv2, and User Data automation."},
    {"id": 3, "title": "Amazon VPC & Cloud Networking", "badge": "Networking", "icon": "network-wired", "color": "#10B981", "lectures": list(range(18, 29)) + [98, 99], "desc": "Virtual Private Cloud architecture: CIDR, Subnets, Route Tables, Internet Gateway, NAT Gateway vs NAT Instance, Security Groups vs NACLs, VPC Peering, Endpoints, and Site-to-Site VPN."},
    {"id": 4, "title": "AWS Storage Services (S3, EFS & Lifecycle)", "badge": "Storage", "icon": "database", "color": "#6366F1", "lectures": list(range(29, 42)), "desc": "Object vs Block vs File storage, Amazon S3 Storage Classes, S3 Lifecycle Management, Versioning, MFA Delete, Cross-Region Replication, Static Web Hosting, Route 53 binding, and Amazon EFS."},
    {"id": 5, "title": "Amazon EBS & Machine Images (AMI)", "badge": "Block Storage", "icon": "hdd", "color": "#EC4899", "lectures": list(range(42, 51)), "desc": "Elastic Block Store volume types (gp2, gp3, io1, io2, st1, sc1), EBS vs Instance Store, Snapshots, Incremental backups, KMS Encryption, AMIs, and cross-account volume migration."},
    {"id": 6, "title": "High Availability, Auto Scaling & Elastic Load Balancing", "badge": "Scalability", "icon": "layer-group", "color": "#8B5CF6", "lectures": list(range(51, 62)), "desc": "Fault tolerance, EC2 Auto Scaling groups, Dynamic Scaling policies, Elastic Load Balancers (ALB vs NLB vs CLB), Health checks, Target groups, and Multi-VPC load balancing."},
    {"id": 7, "title": "AWS IAM & Security Governance", "badge": "Security", "icon": "shield-alt", "color": "#EF4444", "lectures": list(range(62, 72)), "desc": "Identity & Access Management: Users, Groups, Roles vs Policies, Least Privilege, MFA, AWS STS Temporary credentials, Cross-Account Access, Microsoft AD Connector, and Billing Dashboards."},
    {"id": 8, "title": "AWS Database Services (RDS, Aurora & DynamoDB)", "badge": "Databases", "icon": "table", "color": "#14B8A6", "lectures": list(range(72, 83)), "desc": "Relational vs NoSQL databases, Amazon RDS engines, Multi-AZ Synchronous replication vs Read Replicas, Amazon Aurora architecture (6 copies across 3 AZs), and Amazon DynamoDB NoSQL design."},
    {"id": 9, "title": "Amazon Route 53 & Global DNS Management", "badge": "DNS & Traffic", "icon": "globe", "color": "#F97316", "lectures": list(range(83, 89)), "desc": "Domain Name System fundamentals, Hosted Zones, Record types (A, CNAME, ALIAS), and 7 Routing Policies (Simple, Weighted, Latency, Failover, Geolocation, Geoproximity, Multi-Value)."},
    {"id": 10, "title": "Amazon CloudFront & Edge CDN", "badge": "Edge & CDN", "icon": "bolt", "color": "#EAB308", "lectures": [89, 90, 91], "desc": "Content Delivery Network architecture: Edge Locations, Regional Edge Caches, Origins, Cache Behaviors, TTL, Cache Invalidation, Origin Access Control (OAC), and SSL integration."},
    {"id": 11, "title": "Application Messaging & Decoupling (SQS & SNS)", "badge": "Decoupling", "icon": "envelope-open-text", "color": "#06B6D4", "lectures": list(range(92, 98)), "desc": "Loosely coupled architectures: Amazon SQS Standard vs FIFO, Visibility Timeout, Dead Letter Queues (DLQ), Short vs Long Polling, Amazon SNS Pub/Sub Fan-Out, and Event Triggers."},
    {"id": 12, "title": "Serverless Computing & AWS Lambda", "badge": "Serverless", "icon": "code", "color": "#A855F7", "lectures": [100, 101, 102], "desc": "Serverless execution principles, AWS Lambda runtime lifecycle, vCPU/Memory allocations, Cold vs Warm starts, Invocation models (Sync, Async, Polling), and end-to-end S3-Lambda-DynamoDB pipelines."}
]

def get_mod(n):
    for m in MODULES:
        if n in m["lectures"]:
            return m
    return MODULES[0]

# Write out base check
print("Videos:", len(videos))
