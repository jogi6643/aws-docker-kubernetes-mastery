#!/usr/bin/env python3
"""
Comprehensive script to build js/lecturesData.js containing rich technical theory,
Hindi/English summaries, architecture diagrams, CLI commands, exam notes, and
interview questions for all 102 lectures.
"""

import json
import re

with open('all_playlist_videos.json', 'r', encoding='utf-8') as f:
    all_videos = json.load(f)

with open('lectures_raw.json', 'r', encoding='utf-8') as f:
    raw_dict = {item['id']: item for item in json.load(f)}

print(f"Total videos to process: {len(all_videos)}")

# Load lecture metadata and define generator logic
MODULES = [
    {"id": 1, "title": "Cloud Fundamentals & Global Infra", "badge": "Basics & Infra", "icon": "fa-cloud", "count": 3, "lectures": [1, 2, 3], "desc": "Introduction to Cloud Computing, Service Models (IaaS, PaaS, SaaS), Virtualization layers, Regions, Availability Zones, and AWS Free Tier setup."},
    {"id": 2, "title": "Amazon EC2 & Compute Architectures", "badge": "Compute", "icon": "fa-server", "count": 14, "lectures": list(range(4, 18)), "desc": "Elastic Compute Cloud deep dive: Instance families (T, M, C, R, I, P, G, Metal), Purchasing options (On-Demand, Reserved, Spot), Windows/Linux EC2, IMDSv2, and User Data automation."},
    {"id": 3, "title": "Amazon VPC & Cloud Networking", "badge": "Networking", "icon": "fa-network-wired", "count": 13, "lectures": list(range(18, 29)) + [98, 99], "desc": "Virtual Private Cloud architecture: CIDR, Subnets, Route Tables, Internet Gateway, NAT Gateway vs NAT Instance, Security Groups vs NACLs, VPC Peering, Endpoints, and Site-to-Site VPN."},
    {"id": 4, "title": "AWS Storage (S3, EFS & Lifecycle)", "badge": "Storage", "icon": "fa-database", "count": 13, "lectures": list(range(29, 42)), "desc": "Object vs Block vs File storage, Amazon S3 Storage Classes, S3 Lifecycle Management, Versioning, MFA Delete, Cross-Region Replication, Static Web Hosting, Route 53 binding, and Amazon EFS."},
    {"id": 5, "title": "Amazon EBS & Machine Images (AMI)", "badge": "Block Storage", "icon": "fa-hdd", "count": 9, "lectures": list(range(42, 51)), "desc": "Elastic Block Store volume types (gp2, gp3, io1, io2, st1, sc1), EBS vs Instance Store, Snapshots, Incremental backups, KMS Encryption, AMIs, and cross-account volume migration."},
    {"id": 6, "title": "High Availability, Auto Scaling & ELB", "badge": "Scalability", "icon": "fa-layer-group", "count": 11, "lectures": list(range(51, 62)), "desc": "Fault tolerance, EC2 Auto Scaling groups, Dynamic Scaling policies, Elastic Load Balancers (ALB vs NLB vs CLB), Health checks, Target groups, and Multi-VPC load balancing."},
    {"id": 7, "title": "AWS IAM & Security Governance", "badge": "Security", "icon": "fa-shield-alt", "count": 10, "lectures": list(range(62, 72)), "desc": "Identity & Access Management: Users, Groups, Roles vs Policies, Least Privilege, MFA, AWS STS Temporary credentials, Cross-Account Access, Microsoft AD Connector, and Billing Dashboards."},
    {"id": 8, "title": "AWS Databases (RDS, Aurora & DynamoDB)", "badge": "Databases", "icon": "fa-table", "count": 11, "lectures": list(range(72, 83)), "desc": "Relational vs NoSQL databases, Amazon RDS engines, Multi-AZ Synchronous replication vs Read Replicas, Amazon Aurora architecture (6 copies across 3 AZs), and Amazon DynamoDB NoSQL design."},
    {"id": 9, "title": "Amazon Route 53 & Global DNS", "badge": "DNS & Traffic", "icon": "fa-globe", "count": 6, "lectures": list(range(83, 89)), "desc": "Domain Name System fundamentals, Hosted Zones, Record types (A, CNAME, ALIAS), and 7 Routing Policies (Simple, Weighted, Latency, Failover, Geolocation, Geoproximity, Multi-Value)."},
    {"id": 10, "title": "Amazon CloudFront & Edge CDN", "badge": "Edge & CDN", "icon": "fa-bolt", "count": 3, "lectures": [89, 90, 91], "desc": "Content Delivery Network architecture: Edge Locations, Regional Edge Caches, Origins, Cache Behaviors, TTL, Cache Invalidation, Origin Access Control (OAC), and SSL integration."},
    {"id": 11, "title": "Application Messaging (SQS & SNS)", "badge": "Decoupling", "icon": "fa-envelope-open-text", "count": 6, "lectures": list(range(92, 98)), "desc": "Loosely coupled architectures: Amazon SQS Standard vs FIFO, Visibility Timeout, Dead Letter Queues (DLQ), Short vs Long Polling, Amazon SNS Pub/Sub Fan-Out, and Event Triggers."},
    {"id": 12, "title": "Serverless Computing & AWS Lambda", "badge": "Serverless", "icon": "fa-code", "count": 3, "lectures": [100, 101, 102], "desc": "Serverless execution principles, AWS Lambda runtime lifecycle, vCPU/Memory allocations, Cold vs Warm starts, Invocation models (Sync, Async, Polling), and end-to-end S3-Lambda-DynamoDB pipelines."}
]

def get_module_for_lecture(lec_num):
    for m in MODULES:
        if lec_num in m["lectures"]:
            return m["id"], m["title"], m["badge"]
    return 1, MODULES[0]["title"], MODULES[0]["badge"]

