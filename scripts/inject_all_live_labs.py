#!/usr/bin/env python3
"""
inject_all_live_labs.py
Master script to inject comprehensive Live Labs into:
1. Docker (all 8 lectures) -> js/dockerData.js
2. Kubernetes (all 10 lectures) -> js/k8sData.js
3. AWS (all 102 lectures) -> js/lecturesData.js
"""

import json
import re
from enhance_docker_labs import DOCKER_LABS
from enhance_k8s_labs import K8S_LABS
from generate_aws_labs import build_aws_lab

print("="*60)
print("1. Injecting Live Labs into Docker Database...")
print("="*60)

with open('scripts/build_docker_database.py', 'r', encoding='utf-8') as f:
    docker_py = f.read()

# Execute build_docker_database in a clean namespace
docker_ns = {}
exec(docker_py, docker_ns)

docker_modules = docker_ns['DOCKER_MODULES']
docker_lectures = docker_ns['DOCKER_LECTURES']
docker_cheatsheets = docker_ns['DOCKER_CHEATSHEETS']

for lec in docker_lectures:
    lid = lec['id']
    if lid in DOCKER_LABS:
        lec['hasLiveLab'] = True
        lec['liveLab'] = DOCKER_LABS[lid]
        print(f"  [Docker] Injected Live Lab into Lec {lid}: {lec['title']}")

docker_output = f"""/**
 * Docker Masterclass Knowledge Base (Technical Guftgu - Bhupinder Rajput)
 * Complete Theory, Hands-On Commands, Whiteboard Notes, Live Labs, Cheatsheets & Quiz
 */

window.DOCKER_MODULES = {json.dumps(docker_modules, indent=2, ensure_ascii=False)};

window.DOCKER_LECTURES = {json.dumps(docker_lectures, indent=2, ensure_ascii=False)};

window.DOCKER_CHEATSHEETS = {json.dumps(docker_cheatsheets, indent=2, ensure_ascii=False)};
"""

with open('js/dockerData.js', 'w', encoding='utf-8') as f:
    f.write(docker_output)

print(f"-> Successfully updated js/dockerData.js with {len(docker_lectures)} Live Labs!")

print("\n" + "="*60)
print("2. Injecting Live Labs into Kubernetes Database...")
print("="*60)

with open('scripts/build_k8s_database.py', 'r', encoding='utf-8') as f:
    k8s_py = f.read()

k8s_ns = {}
exec(k8s_py, k8s_ns)

k8s_modules = k8s_ns['K8S_MODULES']
k8s_lectures = k8s_ns['K8S_LECTURES']
k8s_cheatsheets = k8s_ns['K8S_CHEATSHEETS']

for lec in k8s_lectures:
    lid = lec['id']
    if lid in K8S_LABS:
        lec['hasLiveLab'] = True
        lec['liveLab'] = K8S_LABS[lid]
        print(f"  [K8s] Injected Live Lab into Lec {lid}: {lec['title']}")

k8s_output = f"""/**
 * Kubernetes (K8s) Masterclass Knowledge Base (Technical Guftgu - Bhupinder Rajput)
 * Complete Theory, Hands-On Commands, Whiteboard Notes, Live Labs, Cheatsheets & Quiz
 */

window.K8S_MODULES = {json.dumps(k8s_modules, indent=2, ensure_ascii=False)};

window.K8S_LECTURES = {json.dumps(k8s_lectures, indent=2, ensure_ascii=False)};

window.K8S_CHEATSHEETS = {json.dumps(k8s_cheatsheets, indent=2, ensure_ascii=False)};
"""

with open('js/k8sData.js', 'w', encoding='utf-8') as f:
    f.write(k8s_output)

print(f"-> Successfully updated js/k8sData.js with {len(k8s_lectures)} Live Labs!")

print("\n" + "="*60)
print("3. Injecting Live Labs into AWS Database (102 Lectures)...")
print("="*60)

with open('js/lecturesData.js', 'r', encoding='utf-8') as f:
    aws_content = f.read()

m_modules = re.search(r'window\.AWS_MODULES\s*=\s*(\[.*?\]);', aws_content, re.DOTALL)
m_lectures = re.search(r'window\.AWS_LECTURES\s*=\s*(\[.*?\]);', aws_content, re.DOTALL)

if not m_modules or not m_lectures:
    print("Error parsing AWS lecturesData.js")
    exit(1)

aws_modules = json.loads(m_modules.group(1))
aws_lectures = json.loads(m_lectures.group(1))

for lec in aws_lectures:
    lab = build_aws_lab(lec)
    lec['hasLiveLab'] = True
    lec['liveLab'] = lab

print(f"Generated Live Labs for all {len(aws_lectures)} AWS lectures!")

aws_output = f"""/**
 * AWS Solution Architect & SysOps (102 Lectures) Complete Knowledge Base
 * Extracted & Synthesized from Technical Guftgu (Bhupinder Rajput) Video Series
 * With Complete Theory, Whiteboard Notes, and Practical Live Labs
 */

window.AWS_MODULES = {json.dumps(aws_modules, indent=2, ensure_ascii=False)};

window.AWS_LECTURES = {json.dumps(aws_lectures, indent=2, ensure_ascii=False)};
"""

with open('js/lecturesData.js', 'w', encoding='utf-8') as f:
    f.write(aws_output)

print("-> Successfully updated js/lecturesData.js with 102 Live Labs!")
print("\nALL 3 COURSES (AWS, Docker, Kubernetes) ARE NOW FULLY EQUIPPED WITH LIVE LABS!")
