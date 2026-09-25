#!/usr/bin/env python3
"""
build_aws_livelabs.py
Compiles comprehensive, self-contained practical live labs for all 102 AWS lectures.
"""

import json
import re

print("Loading existing lectures data...")
with open('js/lecturesData.js', 'r', encoding='utf-8') as f:
    raw_content = f.read()

# Extract window.AWS_MODULES and window.AWS_LECTURES
m_modules = re.search(r'window\.AWS_MODULES\s*=\s*(\[.*?\]);', raw_content, re.DOTALL)
m_lectures = re.search(r'window\.AWS_LECTURES\s*=\s*(\[.*?\]);', raw_content, re.DOTALL)

if not m_modules or not m_lectures:
    print("Error parsing lecturesData.js")
    exit(1)

modules = json.loads(m_modules.group(1))
lectures = json.loads(m_lectures.group(1))

print(f"Loaded {len(modules)} modules and {len(lectures)} lectures.")
EOF
