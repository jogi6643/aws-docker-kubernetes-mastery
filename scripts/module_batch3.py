# Lectures 46 to 70
BATCH_3 = {
    46: {
        "cleanTitle": "Amazon EBS Part 5: EBS Volume Encryption with AWS KMS",
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
    47: {
        "cleanTitle": "Amazon EBS Part 6: How to Share EBS Snapshots Across AWS Accounts",
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
    48: {
        "cleanTitle": "How to Create an Amazon Machine Image (AMI) from an EC2 Instance",
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
    49: {
        "cleanTitle": "How to Copy an AMI into Another AWS Account & Another AWS Region",
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
    50: {
        "cleanTitle": "EC2 Troubleshooting Lab: Rescue Unbootable EC2 by Attaching Root Volume",
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
    51: {
        "cleanTitle": "Amazon EC2 Auto Scaling Part 1: Elasticity & High Availability Concepts",
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
    52: {
        "cleanTitle": "Amazon EC2 Auto Scaling Part 2: Auto Scaling & Load Balancing Synergy",
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
    53: {
        "cleanTitle": "Amazon EC2 Auto Scaling Part 3: Types of Scaling Policies",
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
    54: {
        "cleanTitle": "Auto Scaling Detailed Hands-on Demo: Launch Template & CPU Stress Testing",
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
    55: {
        "cleanTitle": "Elastic Load Balancer (ELB) in AWS Part 1: High Availability Fundamentals",
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
    56: {
        "cleanTitle": "AWS Elastic Load Balancer Part 2: Layer 4 vs Layer 7 Load Balancing",
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
    57: {
        "cleanTitle": "AWS Elastic Load Balancer Part 3: How ELB Works, Health Checks & Target Groups",
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
    58: {
        "cleanTitle": "AWS Elastic Load Balancer Part 4: ALB vs NLB vs CLB Comparison",
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
    59: {
        "cleanTitle": "AWS Application Load Balancer (ALB) Hands-on Lab: Path-Based Routing",
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
    60: {
        "cleanTitle": "AWS Network Load Balancer (NLB) Demo & Cross-Zone Load Balancing",
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
    61: {
        "cleanTitle": "Multi-VPC & Cross-VPC Load Balancing Architecture in AWS",
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
    62: {
        "cleanTitle": "AWS IAM Part 1: Identity & Access Management Roles and Features",
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
    63: {
        "cleanTitle": "AWS IAM Part 2: IAM Policies Architecture & Policy Types",
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
    64: {
        "cleanTitle": "AWS IAM Part 3: IAM Identities (Users, User Groups, and Roles)",
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
    65: {
        "cleanTitle": "AWS IAM Part 4: IAM Roles & AWS Security Token Service (STS)",
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
    66: {
        "cleanTitle": "AWS IAM Part 5: IAM Best Practices & Least Privilege Architecture",
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
    67: {
        "cleanTitle": "AWS IAM Part 6: Account Security, Password Policies & MFA Enforcement",
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
    68: {
        "cleanTitle": "AWS IAM Lab Part 1: How to Create IAM Users & Access Keys",
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
    69: {
        "cleanTitle": "AWS IAM Lab Part 2: User Groups, Inline Policies & Billing Dashboard Access",
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
    70: {
        "cleanTitle": "Cross-Account Access using IAM Roles & External ID",
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
    }
}
print(f"Batch 3 loaded: {len(BATCH_3)} lectures.")
