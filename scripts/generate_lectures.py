#!/usr/bin/env python3
"""
Generate comprehensive lecturesData.js for all 102 lectures of the AWS series.
"""
import json
import re

with open('lectures_raw.json', 'r', encoding='utf-8') as f:
    raw_lectures = json.load(f)

# Module definition lookup
MODULE_MAP = {
    1: {"id": 1, "title": "Cloud Fundamentals & AWS Global Infrastructure", "icon": "fa-cloud", "badge": "Basics & Infra"},
    2: {"id": 2, "title": "Amazon EC2 & Compute Architectures", "icon": "fa-server", "badge": "Compute"},
    3: {"id": 3, "title": "Amazon VPC & Cloud Networking", "icon": "fa-network-wired", "badge": "Networking"},
    4: {"id": 4, "title": "AWS Storage Services (S3 & EFS)", "icon": "fa-database", "badge": "Storage"},
    5: {"id": 5, "title": "Amazon EBS & Machine Images (AMI)", "icon": "fa-hdd", "badge": "Block Storage"},
    6: {"id": 6, "title": "High Availability, Auto Scaling & ELB", "icon": "fa-layer-group", "badge": "Scalability"},
    7: {"id": 7, "title": "AWS IAM & Security Governance", "icon": "fa-shield-alt", "badge": "Security"},
    8: {"id": 8, "title": "AWS Database Services (RDS, Aurora & DynamoDB)", "icon": "fa-table", "badge": "Databases"},
    9: {"id": 9, "title": "Amazon Route 53 & Global DNS", "icon": "fa-globe", "badge": "DNS & Traffic"},
    10: {"id": 10, "title": "Amazon CloudFront & Edge CDN", "icon": "fa-bolt", "badge": "Edge & CDN"},
    11: {"id": 11, "title": "Application Messaging (SQS & SNS)", "icon": "fa-envelope-open-text", "badge": "Decoupling"},
    12: {"id": 12, "title": "Serverless Computing & AWS Lambda", "icon": "fa-code", "badge": "Serverless"}
}

def determine_module(lec_num):
    if 1 <= lec_num <= 3:
        return 1
    elif 4 <= lec_num <= 17:
        return 2
    elif (18 <= lec_num <= 28) or lec_num == 98 or lec_num == 99:
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

print("Helper defined.")
