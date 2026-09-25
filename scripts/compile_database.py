import json, re
from module_batch1 import BATCH_1
from module_batch2 import BATCH_2
from module_batch3 import BATCH_3
from module_batch4 import BATCH_4

ALL_BATCHES = {}
ALL_BATCHES.update(BATCH_1)
ALL_BATCHES.update(BATCH_2)
ALL_BATCHES.update(BATCH_3)
ALL_BATCHES.update(BATCH_4)

print(f"Total theoretical lecture entries: {len(ALL_BATCHES)}")

with open('all_playlist_videos.json', 'r', encoding='utf-8') as f:
    all_videos = json.load(f)

with open('lectures_raw.json', 'r', encoding='utf-8') as f:
    raw_list = json.load(f)
    raw_map = {x['id']: x for x in raw_list}

MODULES = [
    {
        "id": 1,
        "title": "Cloud Fundamentals & AWS Global Infrastructure",
        "badge": "Basics & Infra",
        "icon": "cloud",
        "color": "#3B82F6",
        "lectures": [1, 2, 3],
        "desc": "Introduction to Cloud Computing, Service Models (IaaS, PaaS, SaaS), Virtualization layers, Regions, Availability Zones, and AWS Free Tier setup."
    },
    {
        "id": 2,
        "title": "Amazon EC2 & Compute Architectures",
        "badge": "Compute",
        "icon": "server",
        "color": "#F59E0B",
        "lectures": list(range(4, 18)),
        "desc": "Elastic Compute Cloud deep dive: Instance families (T, M, C, R, I, P, G, Metal), Purchasing options (On-Demand, Reserved, Spot), Windows/Linux EC2, IMDSv2, and User Data automation."
    },
    {
        "id": 3,
        "title": "Amazon VPC & Cloud Networking",
        "badge": "Networking",
        "icon": "network-wired",
        "color": "#10B981",
        "lectures": list(range(18, 29)) + [98, 99],
        "desc": "Virtual Private Cloud architecture: CIDR, Subnets, Route Tables, Internet Gateway, NAT Gateway vs NAT Instance, Security Groups vs NACLs, VPC Peering, Endpoints, and Site-to-Site VPN."
    },
    {
        "id": 4,
        "title": "AWS Storage Services (S3, EFS & Lifecycle)",
        "badge": "Storage",
        "icon": "database",
        "color": "#6366F1",
        "lectures": list(range(29, 42)),
        "desc": "Object vs Block vs File storage, Amazon S3 Storage Classes, S3 Lifecycle Management, Versioning, MFA Delete, Cross-Region Replication, Static Web Hosting, Route 53 binding, and Amazon EFS."
    },
    {
        "id": 5,
        "title": "Amazon EBS & Machine Images (AMI)",
        "badge": "Block Storage",
        "icon": "hdd",
        "color": "#EC4899",
        "lectures": list(range(42, 51)),
        "desc": "Elastic Block Store volume types (gp2, gp3, io1, io2, st1, sc1), EBS vs Instance Store, Snapshots, Incremental backups, KMS Encryption, AMIs, and cross-account volume migration."
    },
    {
        "id": 6,
        "title": "High Availability, Auto Scaling & Elastic Load Balancing",
        "badge": "Scalability",
        "icon": "layer-group",
        "color": "#8B5CF6",
        "lectures": list(range(51, 62)),
        "desc": "Fault tolerance, EC2 Auto Scaling groups, Dynamic Scaling policies, Elastic Load Balancers (ALB vs NLB vs CLB), Health checks, Target groups, and Multi-VPC load balancing."
    },
    {
        "id": 7,
        "title": "AWS IAM & Security Governance",
        "badge": "Security",
        "icon": "shield-alt",
        "color": "#EF4444",
        "lectures": list(range(62, 72)),
        "desc": "Identity & Access Management: Users, Groups, Roles vs Policies, Least Privilege, MFA, AWS STS Temporary credentials, Cross-Account Access, Microsoft AD Connector, and Billing Dashboards."
    },
    {
        "id": 8,
        "title": "AWS Database Services (RDS, Aurora & DynamoDB)",
        "badge": "Databases",
        "icon": "table",
        "color": "#14B8A6",
        "lectures": list(range(72, 83)),
        "desc": "Relational vs NoSQL databases, Amazon RDS engines, Multi-AZ Synchronous replication vs Read Replicas, Amazon Aurora architecture (6 copies across 3 AZs), and Amazon DynamoDB NoSQL design."
    },
    {
        "id": 9,
        "title": "Amazon Route 53 & Global DNS Management",
        "badge": "DNS & Traffic",
        "icon": "globe",
        "color": "#F97316",
        "lectures": list(range(83, 89)),
        "desc": "Domain Name System fundamentals, Hosted Zones, Record types (A, CNAME, ALIAS), and 7 Routing Policies (Simple, Weighted, Latency, Failover, Geolocation, Geoproximity, Multi-Value)."
    },
    {
        "id": 10,
        "title": "Amazon CloudFront & Edge CDN",
        "badge": "Edge & CDN",
        "icon": "bolt",
        "color": "#EAB308",
        "lectures": [89, 90, 91],
        "desc": "Content Delivery Network architecture: Edge Locations, Regional Edge Caches, Origins, Cache Behaviors, TTL, Cache Invalidation, Origin Access Control (OAC), and SSL integration."
    },
    {
        "id": 11,
        "title": "Application Messaging & Decoupling (SQS & SNS)",
        "badge": "Decoupling",
        "icon": "envelope-open-text",
        "color": "#06B6D4",
        "lectures": list(range(92, 98)),
        "desc": "Loosely coupled architectures: Amazon SQS Standard vs FIFO, Visibility Timeout, Dead Letter Queues (DLQ), Short vs Long Polling, Amazon SNS Pub/Sub Fan-Out, and Event Triggers."
    },
    {
        "id": 12,
        "title": "Serverless Computing & AWS Lambda",
        "badge": "Serverless",
        "icon": "code",
        "color": "#A855F7",
        "lectures": [100, 101, 102],
        "desc": "Serverless execution principles, AWS Lambda runtime lifecycle, vCPU/Memory allocations, Cold vs Warm starts, Invocation models (Sync, Async, Polling), and end-to-end S3-Lambda-DynamoDB pipelines."
    }
]

def get_module(lec_num):
    for m in MODULES:
        if lec_num in m["lectures"]:
            return m
    return MODULES[0]

compiled_lectures = []

for idx, vid_entry in enumerate(all_videos):
    lec_num = idx + 1
    vid_id = vid_entry['id']
    raw_info = raw_map.get(vid_id, {})
    theory = ALL_BATCHES.get(lec_num, {})
    mod = get_module(lec_num)
    
    clean_t = theory.get("cleanTitle", vid_entry['title'])
    
    compiled_lectures.append({
        "id": lec_num,
        "lecNum": lec_num,
        "videoId": vid_id,
        "youtubeUrl": f"https://www.youtube.com/watch?v={vid_id}",
        "rawTitle": vid_entry['title'],
        "title": f"Lec {lec_num}: {clean_t}",
        "cleanTitle": clean_t,
        "duration": vid_entry.get('duration', '25:00'),
        "moduleId": mod["id"],
        "moduleName": mod["title"],
        "moduleBadge": mod["badge"],
        "color": mod["color"],
        "icon": mod["icon"],
        "hindiSummary": theory.get("hindiSummary", "Is lecture me AWS service ki core theory aur practical concepts detail me samjhaye gaye hain."),
        "englishSummary": theory.get("englishSummary", "Detailed architectural lecture on AWS concepts, best practices, and enterprise implementations."),
        "keyConcepts": theory.get("keyConcepts", [
            "Core architectural components and design considerations.",
            "Integration with AWS infrastructure services and security governance.",
            "High availability and fault tolerance best practices."
        ]),
        "examTips": theory.get("examTips", "Important topic for AWS Solutions Architect Associate (SAA-C03) and SysOps Administrator exams."),
        "architecture": theory.get("architecture", "Client Request ---> AWS Service Endpoint ---> Processed Resource"),
        "commandsOrSteps": theory.get("commandsOrSteps", [
            f"# Review documentation for AWS Lecture {lec_num}",
            "aws help"
        ]),
        "interviewQuestions": theory.get("interviewQuestions", "Q: What is the main design consideration for this AWS service?\nA: Always consider high availability, security least privilege, resilience across multiple Availability Zones, and cost optimization.")
    })

print(f"Compiled {len(compiled_lectures)} full lectures.")

# Write to js/lecturesData.js
js_content = f"""/**
 * AWS Solution Architect & SysOps (102 Lectures) Complete Knowledge Base
 * Extracted & Synthesized from Technical Guftgu (Bhupinder Rajput) Video Series
 */

window.AWS_MODULES = {json.dumps(MODULES, indent=2, ensure_ascii=False)};

window.AWS_LECTURES = {json.dumps(compiled_lectures, indent=2, ensure_ascii=False)};
"""

with open('js/lecturesData.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Successfully written js/lecturesData.js!")
