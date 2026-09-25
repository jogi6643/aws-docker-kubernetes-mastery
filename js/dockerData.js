/**
 * Docker Masterclass Knowledge Base (Technical Guftgu - Bhupinder Rajput)
 * Complete Theory, Hands-On Commands, Whiteboard Notes, Live Labs, Cheatsheets & Quiz
 */

window.DOCKER_MODULES = [
  {
    "id": 1,
    "title": "Docker Fundamentals & OS-Level Virtualization",
    "badge": "Fundamentals",
    "icon": "cubes",
    "color": "#0DB7ED",
    "count": 2,
    "lectures": [
      1,
      2
    ],
    "desc": "Software evolution: Bare Metal -> VMs -> Containers. Monolithic vs Microservices architecture, Dependency hell solution, OS-level virtualization vs Hypervisor, Linux Namespaces & Cgroups, and Docker Hub base images."
  },
  {
    "id": 2,
    "title": "Docker Architecture & Linux/AWS EC2 Setup",
    "badge": "Architecture & Setup",
    "icon": "server",
    "color": "#38BDF8",
    "count": 2,
    "lectures": [
      3,
      4
    ],
    "desc": "Docker Client-Server Engine (Client, REST API, dockerd Daemon), Object models (Images, Containers, Registries), installing Docker on AWS EC2 Amazon Linux, systemctl management, user permissions, and basic container lifecycle commands."
  },
  {
    "id": 3,
    "title": "Dockerfile & Custom Image Construction",
    "badge": "Image Building",
    "icon": "file-code",
    "color": "#F59E0B",
    "count": 1,
    "lectures": [
      5
    ],
    "desc": "Writing production-grade Dockerfiles: FROM, RUN, COPY vs ADD, WORKDIR, ENV, EXPOSE, CMD vs ENTRYPOINT. Image layer caching mechanism, docker build optimization, docker diff, and docker commit."
  },
  {
    "id": 4,
    "title": "Docker Storage, Volumes & Data Persistence",
    "badge": "Volumes & Storage",
    "icon": "database",
    "color": "#10B981",
    "count": 1,
    "lectures": [
      6
    ],
    "desc": "Deep dive into Docker Storage: Ephemeral container layer (Overlay2/CoW) vs Persistent Storage. Creating & inspecting Docker Volumes, Bind Mounts vs tmpfs, mounting syntax (-v and --mount), sharing volumes across containers, and verifying persistence across container deletion."
  },
  {
    "id": 5,
    "title": "Docker Networking, Port Mapping & Container Operations",
    "badge": "Networking & Ops",
    "icon": "network-wired",
    "color": "#8B5CF6",
    "count": 2,
    "lectures": [
      7,
      8
    ],
    "desc": "Docker container networking (Default bridge network docker0, isolated container IPs), Port Forwarding with -p, EXPOSE instruction mechanics, docker exec interactive shell, real-time logging, container restart policies, inspect metadata, and DevOps career advice."
  }
];

window.DOCKER_LECTURES = [
  {
    "id": 1,
    "lecNum": 1,
    "videoId": "vWjP3fsfgrw",
    "youtubeUrl": "https://www.youtube.com/watch?v=vWjP3fsfgrw",
    "rawTitle": "What is Docker and how it works ? | Docker tutorial for Beginners | Microservices | Devops Tools",
    "title": "Lec 1: What is Docker & How it Works | Microservices & DevOps",
    "cleanTitle": "What is Docker & How it Works | Microservices & DevOps",
    "duration": "49:53",
    "moduleId": 1,
    "moduleName": "Docker Fundamentals & OS-Level Virtualization",
    "moduleBadge": "Fundamentals",
    "color": "#0DB7ED",
    "icon": "cubes",
    "hindiSummary": "Docker ek open-source containerization platform hai jo applications aur unke saare dependencies (code, runtime, libraries, settings) ko ek lightweight container me pack kar deta hai. Isse 'It works on my machine' wali samasya hamesha ke liye khatam ho jati hai. Chahe developer ka laptop ho, testing server ho ya AWS Cloud production, container har jagah bilkul ek jaisa chalta hai.",
    "englishSummary": "Introduction to containerization technologies and how Docker revolutionized modern software engineering. Transition from Monolithic architectures to loosely-coupled Microservices. Overcoming matrix of hell (incompatible libraries, OS dependencies). Explaining shipping container analogy, portability, and DevOps toolchain integration.",
    "keyConcepts": [
      "Containerization Concept: Packaging application code together with its libraries, binaries, and configurations into an isolated runtime package.",
      "The 'Works on My Machine' Dilemma: Resolving discrepancy between developer machines (macOS/Ubuntu) and production servers (RHEL/CentOS).",
      "Monolith vs Microservices: Breaking large single-executable codebases into independent, lightweight, self-healing microservice containers.",
      "Shipping Container Analogy: In shipping transport, standardized steel containers fit seamlessly on trucks, trains, and cargo ships without unpacking goods."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 01 - Docker)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "49:53",
      "summary": "भूपिंदर राजपूत जी ने डिजिटल बोर्ड पर समझाया कि पुराने समय में सॉफ्टवेयर कैसे डिप्लॉय होता था, डेवलपर्स और ऑपरेशन टीम के बीच झगड़े ('मेरे लैपटॉप में चल रहा था, प्रोडक्शन में क्यों फटा?') क्यों होते थे, और कैसे डॉकर ने शिपिंग कंटेनर मॉडल पर इस समस्या को हमेशा के लिए खत्म किया।",
      "sections": [
        {
          "heading": "1. The Traditional Deployment Problem ('Works on My Machine')",
          "hindiNote": "बोर्ड पर एक डेवलपर और एक सर्वर एडमिन का केस बनाया गया:",
          "points": [
            "डेवलपर के लैपटॉप पर: Python 3.9, Ubuntu 22.04, SQLite लाइब्रेरी। कोड बहुत बढ़िया चल रहा है।",
            "प्रोडक्शन सर्वर पर: Python 3.6, RedHat Enterprise Linux, अलग SSL लाइब्रेरी। कोड प्रोडक्शन में डालते ही एरर दे देता है!",
            "परिणाम: डेवलपर कहता है 'मेरे कोड में कोई गलती नहीं है', और सिस्टम एडमिन कहता है 'सर्वर पर नहीं चल रहा'।"
          ],
          "diagram": "[ Developer Laptop ] (Python 3.9, Ubuntu) ===> Code Works Perfectly!\n       |\n       +--- Deploy to Production ---> [ Production Server ] (Python 3.6, CentOS)\n                                             |\n                                             v\n                                   [ FAILED / CRASHED ] (Dependency Mismatch!)"
        },
        {
          "heading": "2. The Cargo Shipping Analogy (कार्गो शिपिंग कंटेनर उदाहरण)",
          "hindiNote": "डॉकर का नाम और लोगो 'व्हेल पर रखे कंटेनर' क्यों है? बोर्ड पर इतिहास का बहुत सुंदर उदाहरण समझाया गया:",
          "points": [
            "1950 से पहले: जहाजों में सामान (केले, कपड़े, गाड़ियां, मसाले) खुले बोरों में रखा जाता था। हर पोर्ट पर उतारने-चढ़ाने में हफ्तों लगते थे और सामान खराब हो जाता था।",
            "स्टैंडर्ड शिपिंग कंटेनर: फिर एक फिक्स साइज का स्टील का कंटेनर बनाया गया। अब चाहे अंदर कुछ भी हो, क्रेन उसे उठाकर जहाज, ट्रक या ट्रेन पर बिना बदले रख देती है।",
            "डॉकर भी यही करता है: आपका कोड, उसकी लाइब्रेरी, कॉन्फ़िगरेशन एक 'सॉफ्टवेयर कंटेनर' में बंद हो जाती है। यह कंटेनर लैपटॉप, EC2, या डेटा सेंटर में बिना किसी बदलाव के चलता है।"
          ],
          "diagram": "+-------------------------------------------------------------+\n| DOCKER CONTAINER (Standardized Software Package)            |\n|                                                             |\n|  [ Your Application Code ]                                  |\n|  [ Exact Python/Node Runtime ]                              |\n|  [ Exact Dependencies & Libraries ]                         |\n|  [ Environment Configs ]                                    |\n+-------------------------------------------------------------+\n         |                        |                       |\n         v                        v                       v\n[ Developer Laptop ]     [ AWS EC2 Instance ]     [ Google Cloud / Azure ]"
        },
        {
          "heading": "3. Monolithic Architecture vs Microservices",
          "hindiNote": "क्लाउड और डेवॉप्स में डॉकर इतना जरूरी क्यों बन गया?",
          "points": [
            "Monolithic (मोनोलिथिक): पूरा सॉफ्टवेयर (यूजर लॉगिन, पेमेंट, कार्ट, इनवॉइस) एक ही 10GB के बड़े प्रोग्राम में होता है। अगर पेमेंट में बग आया तो पूरी वेबसाइट डाउन!",
            "Microservices (माइक्रोसर्विसेज): हर सर्विस का अपना अलग छोटा कंटेनर (Login Container, Payment Container, Cart Container)। अगर कार्ट क्रैश भी हुआ तो बाकी वेबसाइट चलती रहती है।"
          ],
          "diagram": "MONOLITHIC:     [ UI + Login + Cart + Payment + DB ] ---> Single Huge Failure Point\n\nMICROSERVICES:  [ UI Container ]   ---> [ Login Container ]\n                       |          ---> [ Cart Container ]\n                       +          ---> [ Payment Container ]"
        }
      ]
    },
    "architecture": "Developer Code + Deps ---> Docker Image ---> Docker Container ---> Run Anywhere (Laptop / EC2 / Cloud)",
    "commandsOrSteps": [
      "docker version (Check client & server engine versions)",
      "docker run hello-world (First test container execution)"
    ],
    "examTips": "DevOps / DCA Exam Tip: A Docker Container packages application user-space code and dependencies, sharing the underlying host Linux OS kernel.",
    "interviewQuestions": "Q: What problem does Docker solve in DevOps?\nA: Docker eliminates environment inconsistency and dependency drift across development, staging, and production environments, enabling true 'Build Once, Run Anywhere' CI/CD pipelines.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Your First Container Run & Lifecycle Inspection",
      "scenario": "Sochiye aap ek nayi car chalana seekh rahe hain. Pehle din aap car ke engine ko kholne ke bajaye sirf ignition on karke test drive lete hain. Is lab me hum bina kisi complex setup ke Docker ka pehla container run karenge aur dekhenge ki Docker background me images aur containers ko kaise manage karta hai.",
      "objective": "Verify Docker installation, pull the official 'hello-world' and 'alpine' images, run your first isolated container, inspect its execution lifecycle, and verify exit status codes.",
      "duration": "10-15 Mins",
      "cost": "100% Free (Runs on local laptop or AWS Free Tier EC2)",
      "difficulty": "Complete Beginner",
      "diagram": "+-------------------------------------------------------------+\n| Your Host Machine (Laptop or EC2)                           |\n|                                                             |\n|  [ User Terminal ]                                          |\n|         |                                                   |\n|         | 1. 'docker run hello-world'                       |\n|         v                                                   |\n|  [ Docker Daemon (dockerd) ]                                |\n|         |                                                   |\n|         +---> Check local cache: Not found                  |\n|         +---> 2. Pull layer from Docker Hub (hub.docker.com)|\n|         +---> 3. Instantiate isolated container             |\n|         +---> 4. Print message to stdout                    |\n|         +---> 5. Exit cleanly with status code 0            |\n+-------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Verify Docker Daemon Health & Version",
          "laymanExplanation": "Car me baithkar check karna ki engine aur dashboard dono theek se kaam kar rahe hain ya nahi.",
          "consoleAction": "Docker Desktop user: Check top status bar to ensure the whale icon is green ('Docker Desktop is running').",
          "command": "docker version",
          "commandExplanation": "`docker version` shows both Client (CLI interface) and Server (dockerd background engine) architecture details and API version.",
          "expectedOutput": "Client: Docker Engine - Community\n Version:           24.0.7\n OS/Arch:           linux/amd64\nServer: Docker Engine - Community\n Engine:\n  Version:          24.0.7",
          "verification": "Confirm that both 'Client' and 'Server' sections appear without 'Cannot connect to the Docker daemon' error."
        },
        {
          "stepNum": 2,
          "title": "Run First Lightweight Hello-World Container",
          "laymanExplanation": "Docker Hub se sabse chhota test container download karke run karna jo verify karta hai ki download, image creation aur container execution pipeline 100% working hai.",
          "consoleAction": "In Docker Desktop -> Search 'hello-world' -> Click Run.",
          "command": "docker run hello-world",
          "commandExplanation": "`docker run` is a compound command that internally performs: (1) `docker pull` if missing locally, (2) `docker create`, and (3) `docker start`.",
          "expectedOutput": "Hello from Docker!\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n 1. The Docker client contacted the Docker daemon.\n 2. The Docker daemon pulled the \"hello-world\" image from the Docker Hub.\n 3. The Docker daemon created a new container from that image which runs the\n    executable that produces the output you are currently reading.",
          "verification": "Read 'Hello from Docker!' confirmation on your screen."
        },
        {
          "stepNum": 3,
          "title": "Inspect Stopped Containers & Exit Codes",
          "laymanExplanation": "Jab container apna kaam khatam kar leta hai, toh wo band ho jata hai. Hum check karte hain ki pichle chale hue containers ka history record kya hai.",
          "consoleAction": "In Docker Desktop -> Go to 'Containers' tab -> Select 'Exited' filter.",
          "command": "docker ps -a",
          "commandExplanation": "`docker ps` shows only currently active running containers. Adding `-a` (all) reveals stopped and exited containers along with exit codes (Exited (0) means success).",
          "expectedOutput": "CONTAINER ID   IMAGE         COMMAND    CREATED          STATUS                      PORTS     NAMES\n3c7f91a21e0b   hello-world   \"/hello\"   30 seconds ago   Exited (0) 29 seconds ago             relaxed_turing",
          "verification": "Notice 'Exited (0)' in the STATUS column indicating graceful execution."
        },
        {
          "stepNum": 4,
          "title": "Run an Interactive Alpine Linux Micro-Container",
          "laymanExplanation": "Alpine Linux sirf 5MB ka ek complete Linux OS hai. Hum iske andar live bash shell kholkar explore karenge.",
          "consoleAction": "Docker Desktop -> Search 'alpine' -> Click Run with interactive terminal flag.",
          "command": "docker run -it --name my-alpine-box alpine sh",
          "commandExplanation": "-i: Keep STDIN open (interactive).\n-t: Allocate pseudo-TTY terminal.\n--name: Custom container name.\nalpine: Image name from Docker Hub.\nsh: Shell command to execute inside container.",
          "expectedOutput": "/ # uname -a\nLinux my-alpine-box 5.15.0 #1 SMP Alpine Linux\n/ # cat /etc/os-release\nNAME=\"Alpine Linux\"\nID=alpine\nVERSION_ID=3.18.4",
          "verification": "Type `exit` to close the shell session and return to your host terminal."
        }
      ],
      "simulator": {
        "welcomeMessage": "Welcome to Docker Live Lab 1 Sandbox Terminal!\nType or click commands below to test container execution.",
        "commands": {
          "docker version": "Client: Docker Engine - Community\n Version: 24.0.7\n API version: 1.43\n OS/Arch: linux/amd64\n\nServer: Docker Engine - Community\n Engine: Version 24.0.7\n containerd: Version 1.7.1",
          "docker run hello-world": "Unable to find image 'hello-world:latest' locally\nlatest: Pulling from library/hello-world\n7190e5904de7: Pull complete\nDigest: sha256:d58e752f82a9f1c2c866f502032ea10b7115ffbfa76736e84f369b0522dd946\nStatus: Downloaded newer image for hello-world:latest\n\nHello from Docker!\nThis message shows that your installation appears to be working correctly!",
          "docker ps -a": "CONTAINER ID   IMAGE         COMMAND    CREATED          STATUS                      PORTS     NAMES\n3c7f91a21e0b   hello-world   \"/hello\"   30 seconds ago   Exited (0) 29 seconds ago             relaxed_turing",
          "docker run -it --name my-alpine-box alpine sh": "Interactive shell opened: / # uname -a\nLinux my-alpine-box 5.15.0 Alpine Linux x86_64\n/ # cat /etc/os-release\nNAME=\"Alpine Linux\"\nVERSION_ID=3.18.4\n/ # [Session exited cleanly]",
          "docker rm my-alpine-box": "my-alpine-box\n[OK] Cleaned up container my-alpine-box."
        }
      },
      "troubleshooting": [
        {
          "issue": "Cannot connect to the Docker daemon at unix:///var/run/docker.sock",
          "cause": "Docker service is not running or current user does not have permission.",
          "solution": "On Linux/EC2 run `sudo systemctl start docker` and `sudo usermod -aG docker $USER`. On Mac/Windows start Docker Desktop application."
        }
      ],
      "cleanup": [
        "docker rm $(docker ps -a -q) # Removes all stopped containers",
        "docker rmi hello-world alpine # Cleans up test images"
      ]
    }
  },
  {
    "id": 2,
    "lecNum": 2,
    "videoId": "vacvCaE4uQM",
    "youtubeUrl": "https://www.youtube.com/watch?v=vacvCaE4uQM",
    "rawTitle": "O.S Level Virtualisation in Docker-Hindi/Urdu | What is Docker? | Docker for beginners | Docker Hub",
    "title": "Lec 2: OS-Level Virtualization vs VMs & Docker Hub",
    "cleanTitle": "OS-Level Virtualization vs VMs & Docker Hub",
    "duration": "27:40",
    "moduleId": 1,
    "moduleName": "Docker Fundamentals & OS-Level Virtualization",
    "moduleBadge": "Fundamentals",
    "color": "#0DB7ED",
    "icon": "cubes",
    "hindiSummary": "Virtual Machine (VM) hardware virtualization karti hai jisme har VM apna pura Guest Operating System (GBs of storage, dedicated kernel) le kar chalti hai, jisse boot hone me 2-3 minute lagte hain. Iske viprit, Docker OS-level virtualization karta hai - yeh host machine ke Linux Kernel ko share karta hai aur sirf application process ko isolate karta hai (Namespaces aur Cgroups ke zariye). Isliye Docker container kuch milliseconds me start ho jata hai aur MBs me storage leta hai.",
    "englishSummary": "Architectural breakdown of Hardware Virtualization (Hypervisors: VMware, VirtualBox, KVM) versus Operating System Level Virtualization (Containers). Linux kernel primitives: Namespaces (isolation of PID, Network, Mount, IPC, UTS) and Control Groups (Cgroups for CPU, RAM, I/O limits). Introduction to Docker Hub public registry.",
    "keyConcepts": [
      "Hypervisor Virtualization: Slices physical hardware. Each VM requires its own full Guest OS kernel (heavy memory footprint, high licensing cost, slow boot).",
      "OS-Level Virtualization: Slices OS resources. Containers run as native processes directly on the host kernel (near bare-metal performance, sub-second boot).",
      "Linux Namespaces: Provides process isolation (PID namespace for process tree, NET for network interfaces, MNT for filesystem, IPC for inter-process communication).",
      "Control Groups (Cgroups): Enforces resource accounting and caps (limits container to 512MB RAM, 1 vCPU, disk I/O bandwidth).",
      "Docker Hub (hub.docker.com): Central cloud registry containing millions of certified official images (Ubuntu, Nginx, Redis, Postgres, Node, Python, Alpine)."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 02 - Virtualization)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "27:40",
      "summary": "बोर्ड पर वर्चुअल मशीन (VM) और डॉकर कंटेनर की लेयर्स बनाकर दोनों के बीच का तकनीकी फर्क समझाया गया। यह इंटरव्यू का सबसे महत्वपूर्ण सवाल है।",
      "sections": [
        {
          "heading": "1. Virtual Machine (VM) Architecture on Board",
          "hindiNote": "VM में क्या-क्या लेयर्स होती हैं और यह भारी क्यों होती है:",
          "points": [
            "Hardware: Physical Server (CPU, RAM, Disks)",
            "Host OS: Physical server ka OS",
            "Hypervisor: Type-1 (ESXi/KVM) ya Type-2 (VMware/VirtualBox)",
            "Guest OS: Har VM ke andar apna 10-20GB ka Windows ya Linux OS install karna padta hai!",
            "Boot Time: 1 se 3 minute (kyunki pura OS boot hota hai)."
          ],
          "diagram": "+---------------------------------------------+\n| App 1 | App 2 | App 3                       |\n| Bins / Libs                                 |\n| GUEST OS (Ubuntu ~10GB) | GUEST OS (RHEL)   |\n+---------------------------------------------+\n| HYPERVISOR (VMware / VirtualBox / KVM)      |\n+---------------------------------------------+\n| HOST OS / PHYSICAL HARDWARE (CPU/RAM/DISKS) |\n+---------------------------------------------+"
        },
        {
          "heading": "2. Docker Container Architecture on Board",
          "hindiNote": "डॉकर में गेस्ट OS की कोई जरूरत नहीं होती:",
          "points": [
            "Hardware + Host OS + Linux Kernel",
            "Docker Engine (dockerd Daemon)",
            "Containers: Sirf application binaries aur libraries! Koi alag se Guest OS nahi hota.",
            "Boot Time: 50 milliseconds se 2 second!",
            "Size: Alpine Linux image sirf 5MB ki hoti hai!"
          ],
          "diagram": "+---------------------------------------------+\n| Container 1    | Container 2    | Container 3|\n| App + Libs     | App + Libs     | App + Libs |\n+---------------------------------------------+\n| DOCKER ENGINE (Shares Host Linux Kernel)    |\n+---------------------------------------------+\n| HOST LINUX OS & HARDWARE                    |\n+---------------------------------------------+"
        },
        {
          "heading": "3. The Secret Behind Isolation: Namespaces & Cgroups",
          "hindiNote": "अगर कंटेनर एक ही कर्नल शेयर करते हैं, तो वे आपस में टकराते क्यों नहीं?",
          "points": [
            "Namespaces (पर्दा / Isolation): कंटेनर 1 को लगता है कि दुनिया में वही अकेला है। उसका अपना PID 1 होता है, अपना IP एड्रेस, अपना रूट डायरेक्टरी।",
            "Cgroups (लिमिट / कंट्रोल): कोई भी कंटेनर पूरे सर्वर की रैम या CPU नहीं खा सकता। हम लिमिट लगा सकते हैं (जैसे 'docker run -m 512m')."
          ],
          "diagram": "HOST KERNEL:\n  |--> Namespaces ===> PID (Process ID), NET (Network), MNT (Mount), IPC, UTS\n  |--> Cgroups    ===> CPU Throttling, Memory Limits, Disk I/O Throttling"
        }
      ]
    },
    "architecture": "Hardware ---> Host OS ---> Docker Engine ---> [Container A (50MB)] | [Container B (10MB)] | [Container C (80MB)]",
    "commandsOrSteps": [
      "docker search ubuntu (Search Docker Hub directly from CLI)",
      "docker pull alpine (Pull ultra-lightweight 5MB Alpine Linux image)"
    ],
    "examTips": "Core Rule: A single physical host can run 10-20 Virtual Machines, but the exact same host can run 200-500 Docker Containers because containers share the host kernel.",
    "interviewQuestions": "Q: What is the fundamental architectural difference between Docker containers and Virtual Machines?\nA: VMs virtualize the physical hardware layer and require a complete Guest OS for each instance. Containers virtualize the operating system layer, running directly as isolated processes sharing the host Linux kernel.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Comparing VM vs Container Resource Footprint & Linux Namespaces",
      "scenario": "Maan lijiye aapke paas 10 dost aa rahe hain. Agar har dost ke liye ek alag 3-bedroom flat rent par lenge (VM with full OS), toh kharcha aur maintenance bohot zyada hoga. Lekin agar ek hi bade hall me 10 alag-alag study table laga diye jayein (Docker Containers with shared OS Kernel), toh sabka kaam 5 minute me aur 95% kam kharche me ho jayega!",
      "objective": "Demonstrate OS-level virtualization by comparing memory footprint between VM and Docker, inspect process isolation using Linux PID namespaces, and explore official images on Docker Hub.",
      "duration": "15-20 Mins",
      "cost": "100% Free",
      "difficulty": "Complete Beginner",
      "diagram": "+--------------------------------------------------------------+\n| Host Kernel: PID Space                                       |\n|  Host PID 12450: dockerd                                     |\n|  Host PID 12890: container-shim                              |\n|         |                                                    |\n|         +---> [ Container PID Namespace ]                    |\n|                     |                                        |\n|                     +---> Inside Container: PID 1 (sh)       |\n|                     +---> Isolated filesystem (Alpine 5MB)   |\n|                     +---> Zero Guest OS overhead             |\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Search Official Pre-Built Images on Docker Hub",
          "laymanExplanation": "Jaise mobile me Google Play Store ya Apple App Store se verified apps search karte hain, waise hi terminal se Docker Hub par verified images search karna.",
          "consoleAction": "Visit https://hub.docker.com and search for 'alpine' or 'ubuntu'.",
          "command": "docker search --filter is-official=true alpine",
          "commandExplanation": "`docker search` queries the Docker Hub API. `--filter is-official=true` filters out unofficial third-party images.",
          "expectedOutput": "NAME      DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED\nalpine    A minimal Docker image based on Alpine Linux…   10340     [OK]",
          "verification": "Look for '[OK]' in the OFFICIAL column."
        },
        {
          "stepNum": 2,
          "title": "Inspect Image Size: Alpine (5MB) vs Ubuntu (77MB)",
          "laymanExplanation": "Ek full Ubuntu VM 15,000MB (15GB) ki hoti hai, jabki Docker container me wahi Ubuntu sirf 77MB aur Alpine sirf 5MB leta hai!",
          "consoleAction": "In Docker Desktop -> 'Images' tab -> Check size column.",
          "command": "docker pull alpine && docker pull ubuntu:22.04 && docker images",
          "commandExplanation": "Pulls both images and lists their size on disk. Notice how small container base images are compared to traditional ISO files.",
          "expectedOutput": "REPOSITORY   TAG       IMAGE ID       CREATED        SIZE\nubuntu       22.04     5a81c4b612d3   2 weeks ago    77.8MB\nalpine       latest    7e01a0d0a1da   1 month ago    7.34MB",
          "verification": "Notice Alpine is ~7MB while traditional VM operating systems take 10GB-20GB."
        },
        {
          "stepNum": 3,
          "title": "Observe PID Namespace Isolation in Action",
          "laymanExplanation": "Container ke andar chalne wala process sochta hai ki wo system ka pehla aur akela process hai (PID 1), jabki host machine par wo ek aam process hota hai.",
          "consoleAction": "Run container in background with sleep command.",
          "command": "docker run -d --name isolate-demo alpine sleep 300",
          "commandExplanation": "Starts an isolated container executing `sleep 300` in the background.",
          "expectedOutput": "a91b483e5f7c823091...\n[Container running]",
          "verification": "Run `docker top isolate-demo` to see PID inside container vs PID on host."
        },
        {
          "stepNum": 4,
          "title": "Compare Process Trees Inside and Outside Container",
          "laymanExplanation": "Pehle container ke andar se process dekhenge, fir host machine ke angle se dekhenge.",
          "consoleAction": "View container processes via CLI.",
          "command": "docker exec isolate-demo ps aux",
          "commandExplanation": "`docker exec` executes a process inside the running container. Inside, `sleep 300` has PID 1!",
          "expectedOutput": "PID   USER     TIME  COMMAND\n  1   root     0:00  sleep 300",
          "verification": "Confirm that inside the container, PID is 1 (completely isolated namespace)."
        }
      ],
      "simulator": {
        "welcomeMessage": "Docker Lab 2 Sandbox: OS Virtualization & Namespaces",
        "commands": {
          "docker search --filter is-official=true alpine": "NAME      DESCRIPTION                                     STARS     OFFICIAL\nalpine    A minimal Docker image based on Alpine Linux…   10340     [OK]",
          "docker pull alpine && docker pull ubuntu:22.04 && docker images": "Pulling alpine... Done (7.3MB)\nPulling ubuntu:22.04... Done (77.8MB)\nREPOSITORY   TAG       IMAGE ID       SIZE\nubuntu       22.04     5a81c4b612d3   77.8MB\nalpine       latest    7e01a0d0a1da   7.34MB",
          "docker run -d --name isolate-demo alpine sleep 300": "a91b483e5f7c8230915fba40982312b1\n[OK] Background container 'isolate-demo' running sleep 300.",
          "docker exec isolate-demo ps aux": "PID   USER     TIME  COMMAND\n  1   root     0:00  sleep 300\n 14   root     0:00  ps aux",
          "docker rm -f isolate-demo": "isolate-demo\n[OK] Container forcibly removed."
        }
      },
      "troubleshooting": [
        {
          "issue": "Image pull rate limit exceeded on Docker Hub",
          "cause": "Docker Hub enforces limits on unauthenticated anonymous pulls (100 pulls / 6 hours).",
          "solution": "Run `docker login` with your free Docker Hub account to increase limits to 200 pulls."
        }
      ],
      "cleanup": [
        "docker rm -f isolate-demo",
        "docker rmi alpine ubuntu:22.04"
      ]
    }
  },
  {
    "id": 3,
    "lecNum": 3,
    "videoId": "h17po-0DfWE",
    "youtubeUrl": "https://www.youtube.com/watch?v=h17po-0DfWE",
    "rawTitle": "Docker Architecture in Hindi | Lec-25 | Benefits of Docker containers | Docker Limitations | Devops",
    "title": "Lec 3: Docker Engine Architecture, Client-Server & Lifecycle",
    "cleanTitle": "Docker Engine Architecture, Client-Server & Lifecycle",
    "duration": "1:04:52",
    "moduleId": 2,
    "moduleName": "Docker Architecture & Linux/AWS EC2 Setup",
    "moduleBadge": "Architecture & Setup",
    "color": "#38BDF8",
    "icon": "server",
    "hindiSummary": "Docker ek Client-Server architecture par kaam karta hai. Isme 3 mukhya components hote hain: 1) Docker Client (CLI tool jisme hum commands type karte hain), 2) Docker Host (jisme background service 'dockerd' yani Docker Daemon chalta hai jo images aur containers ko banata aur manage karta hai), aur 3) Docker Registry (jaise Docker Hub jahan images store hoti hain). Client aur Daemon aapas me REST API ke zariye communicate karte hain.",
    "englishSummary": "Comprehensive breakdown of Docker Engine architecture. Exploring Docker Client CLI, Docker Daemon (dockerd), containerd runtime, runc OCI implementation, and communication over Unix sockets (/var/run/docker.sock) or TCP. Deep dive into Docker Objects: Images, Containers, Networks, Volumes, and Plugins. Container lifecycle state machine (created, running, paused, stopped, killed).",
    "keyConcepts": [
      "Client-Server Architecture: Docker CLI and Docker Daemon can run on the same machine or across remote networks via REST APIs.",
      "Docker Daemon (dockerd): The persistent background engine that listens for Docker API requests and manages container objects, images, storage, and networking.",
      "Docker Images vs Containers: An Image is a read-only blueprint/template; a Container is a runnable, living instance of that image with a thin read-write layer on top.",
      "Container Lifecycle States: Created -> Running (docker run/start) -> Paused (docker pause) -> Stopped (docker stop) -> Deleted (docker rm).",
      "Limitations of Docker: Containers sharing Linux kernel cannot run native Windows kernel code directly without virtualization; multi-host container orchestration requires Kubernetes or Docker Swarm."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 03 - Architecture)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "1:04:52",
      "summary": "इस लेक्चर में भूपिंदर राजपूत जी ने डिजिटल बोर्ड पर 3-टियर डॉकर आर्किटेक्चर (Client, Host/Daemon, Registry) का विस्तृत फ्लोचार्ट बनाया और समझाया कि जब आप 'docker run' लिखते हैं तो पर्दे के पीछे क्या होता है।",
      "sections": [
        {
          "heading": "1. Docker 3-Tier Architecture Flowchart",
          "hindiNote": "बोर्ड पर तीन बड़े बॉक्स बनाकर समझाया गया:",
          "points": [
            "Box 1: Docker Client (CLI) - जहाँ आप 'docker build', 'docker pull', 'docker run' लिखते हैं।",
            "Box 2: Docker Host (Daemon) - असली इंजन (dockerd) जो बैकग्राउंड में चलता है, इमेजेस और कंटेनर्स बनाता है।",
            "Box 3: Registry (Docker Hub) - इंटरनेट पर मौजूद लाइब्रेरी जहाँ से इमेजेस डाउनलोड होती हैं।"
          ],
          "diagram": "+-------------------+       REST API       +-------------------------------------+\n|   DOCKER CLIENT   |  =================>  |             DOCKER HOST             |\n| (docker CLI tool) |  /var/run/docker.sock| +---------------------------------+ |\n|                   |                      | | Docker Daemon (dockerd)         | |\n| - docker build    |                      | |  |-> Images (Nginx, Ubuntu, App)| |\n| - docker pull     |                      | |  |-> Containers (Running Proc)  | |\n| - docker run      |                      | |  |-> Networks & Volumes         | |\n+-------------------+                      | +---------------------------------+ |\n                                           +-------------------------------------+\n                                                              ^ \n                                                              | Pull / Push\n                                                              v\n                                                   +----------------------+\n                                                   |   DOCKER REGISTRY    |\n                                                   |   (hub.docker.com)   |\n                                                   +----------------------+"
        },
        {
          "heading": "2. What happens during 'docker run -d nginx'?",
          "hindiNote": "बोर्ड पर स्टेप-बाय-स्टेप फ्लो बताया गया:",
          "points": [
            "Step 1: Docker Client ने Daemon से पूछा - 'क्या तुम्हारे लोकल कैशे में nginx इमेज है?'",
            "Step 2: अगर लोकल में नहीं है, तो Daemon Docker Hub पर जाता है और 'docker pull' करता है।",
            "Step 3: इमेज की लेयर्स डाउनलोड होने के बाद, Daemon उस इमेज के ऊपर एक Thin Read-Write Layer चढ़ाता है।",
            "Step 4: Linux Namespaces (PID, NET) और Cgroups एक्टिवेट करता है और कंटेनर स्टार्ट कर देता है!"
          ],
          "diagram": "[ docker run -d nginx ]\n       |\n       +--> Local Cache Check? \n                 |-- Found? ===> Create Container Immediately\n                 +-- Not Found? ===> Connect to Docker Hub\n                                           |--> Download Layers\n                                           |--> Save to Local Images\n                                           |--> Launch Container"
        }
      ]
    },
    "architecture": "CLI (Client) ---> REST API (/var/run/docker.sock) ---> dockerd (Host) ---> Images/Containers <---> Registry (Docker Hub)",
    "commandsOrSteps": [
      "docker info (Display comprehensive system-wide Docker host information)",
      "systemctl status docker (Check whether dockerd daemon service is running)"
    ],
    "examTips": "Crucial Exam Tip: The Docker Daemon listens on Unix socket unix:///var/run/docker.sock by default. Root privileges or membership in the 'docker' user group is required to talk to this socket.",
    "interviewQuestions": "Q: What is the relationship between Docker Image and Docker Container?\nA: A Docker Image is a read-only, immutable template built from layered filesystems. A Container is a stateful, runtime instance of an image with an added top writable layer.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Installing & Hardening Docker Engine on AWS EC2 (Amazon Linux 2023 / Ubuntu)",
      "scenario": "Aapne AWS par ek naya blank server (EC2) hire kiya hai. Jaise ek naye computer me sabse pehle OS ke baad software install karte hain, waise hi hum EC2 instance par Docker Engine install karenge, non-root user permissions configure karenge taaki bina `sudo` ke docker chal sake, aur service ko boot-persistent banayenge.",
      "objective": "Install Docker Engine from official repositories on an AWS EC2 instance, manage the systemd daemon service, configure Linux user group permissions for ec2-user/ubuntu, and verify automated restart on reboot.",
      "duration": "15 Mins",
      "cost": "100% Free Tier (t2.micro / t3.micro)",
      "difficulty": "Beginner to Intermediate",
      "diagram": "+--------------------------------------------------------------+\n| AWS EC2 Instance (Amazon Linux 2023 / Ubuntu 22.04)          |\n|                                                              |\n|  [ User: ec2-user / ubuntu ]                                 |\n|         |                                                    |\n|         +---> Added to 'docker' Linux Group                  |\n|         |                                                    |\n|         v                                                    |\n|  [ /var/run/docker.sock (UNIX Socket - rw-rw----) ]          |\n|         |                                                    |\n|         v                                                    |\n|  [ systemd: docker.service (ENABLED at boot) ]               |\n|         |                                                    |\n|         v                                                    |\n|  [ dockerd Daemon Engine ]                                   |\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Update Package Index and Install Docker Package",
          "laymanExplanation": "Server ki purani package list refresh karna aur official repository se Docker ke latest stable binaries download karna.",
          "consoleAction": "Connect to your EC2 instance using EC2 Instance Connect or SSH (`ssh -i key.pem ec2-user@<public-ip>`).",
          "command": "sudo yum update -y && sudo yum install -y docker",
          "commandExplanation": "On Amazon Linux 2/2023, `yum install docker` installs the tested and optimized AWS Docker package with all dependencies.",
          "expectedOutput": "Installed:\n  containerd.x86_64\n  docker.x86_64\nComplete!",
          "verification": "Run `docker --version` to verify binary is in $PATH."
        },
        {
          "stepNum": 2,
          "title": "Start Docker Daemon & Enable Boot Persistence",
          "laymanExplanation": "Docker service ko start karna aur aisi setting karna ki agar EC2 restart bhi ho jaye, toh Docker apne aap auto-start ho jaye.",
          "consoleAction": "Run systemctl commands in terminal.",
          "command": "sudo systemctl start docker && sudo systemctl enable docker",
          "commandExplanation": "`start` initializes dockerd immediately. `enable` creates symlinks so systemd boots Docker upon server reboot.",
          "expectedOutput": "Created symlink /etc/systemd/system/multi-user.target.wants/docker.service -> /usr/lib/systemd/system/docker.service.",
          "verification": "Run `sudo systemctl status docker` and verify status says 'active (running)'."
        },
        {
          "stepNum": 3,
          "title": "Grant Non-Root Execution Permissions (Security Best Practice)",
          "laymanExplanation": "Baar-baar `sudo` type karna boring aur unsafe hota hai. Hum apne standard user (`ec2-user`) ko `docker` group me add karenge.",
          "consoleAction": "Terminal command execution.",
          "command": "sudo usermod -aG docker $USER && newgrp docker",
          "commandExplanation": "`usermod -aG docker $USER` appends current user to the docker group. `newgrp docker` activates the group membership in current session without logout.",
          "expectedOutput": "[User added to docker group without errors]",
          "verification": "Run `docker ps` WITHOUT sudo. If no permission denied error appears, permissions are configured correctly!"
        },
        {
          "stepNum": 4,
          "title": "Inspect Docker System Configuration & Storage Driver",
          "laymanExplanation": "Check karna ki Docker ka storage driver (Overlay2) aur cgroup driver theek se configure huye hain.",
          "consoleAction": "Terminal inspection.",
          "command": "docker info",
          "commandExplanation": "Outputs comprehensive diagnostic metrics: Storage Driver (overlay2), Logging Driver (json-file), Cgroup Version, and Total Memory.",
          "expectedOutput": "Server Version: 24.0.7\n Storage Driver: overlay2\n Cgroup Driver: systemd\n Plugins:\n  Volume: local\n  Network: bridge host ipvlan macvlan null overlay",
          "verification": "Confirm Storage Driver is 'overlay2' and Cgroup is active."
        }
      ],
      "simulator": {
        "welcomeMessage": "Docker EC2 Installation Sandbox Terminal",
        "commands": {
          "sudo yum install -y docker": "Resolving Dependencies...\nPackage docker-24.0.7-1.amzn2023.x86_64 installed.\nComplete!",
          "sudo systemctl start docker && sudo systemctl enable docker": "Created symlink /etc/systemd/system/multi-user.target.wants/docker.service.\n[OK] docker.service active (running).",
          "sudo usermod -aG docker $USER && newgrp docker": "[OK] User added to docker group. Sudo-less docker commands enabled!",
          "docker info": "Server Version: 24.0.7\nStorage Driver: overlay2\nLogging Driver: json-file\nCgroup Driver: systemd\nDocker Root Dir: /var/lib/docker",
          "docker ps": "CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES\n(0 running containers)"
        }
      },
      "troubleshooting": [
        {
          "issue": "Got permission denied while trying to connect to the Docker daemon socket",
          "cause": "Your current shell session has not loaded the updated supplementary group permissions.",
          "solution": "Run `newgrp docker` or log out from SSH and reconnect (`exit` and re-ssh)."
        }
      ],
      "cleanup": [
        "sudo systemctl stop docker",
        "sudo yum remove -y docker (If terminating or cleaning up EC2)"
      ]
    }
  },
  {
    "id": 4,
    "lecNum": 4,
    "videoId": "ZGnHJzPJdd0",
    "youtubeUrl": "https://www.youtube.com/watch?v=ZGnHJzPJdd0",
    "rawTitle": "What is Docker and how to Install it | How to start and stop a Container in AWS | Docker in Hindi",
    "title": "Lec 4: Installing Docker on AWS EC2 & Container Lifecycle Hands-On",
    "cleanTitle": "Installing Docker on AWS EC2 & Container Lifecycle Hands-On",
    "duration": "52:14",
    "moduleId": 2,
    "moduleName": "Docker Architecture & Linux/AWS EC2 Setup",
    "moduleBadge": "Architecture & Setup",
    "color": "#38BDF8",
    "icon": "server",
    "hindiSummary": "Is lecture me AWS EC2 instance (Amazon Linux 2) launch karke Docker install karna sikhaya gaya hai. 'yum install docker -y' ke baad service ko start aur enable kiya jata hai. Non-root user (ec2-user) ko 'docker' group me add karne se bar-bar 'sudo' lagane ki zarurat nahi padti. Phir Ubuntu, CentOS aur Nginx ke containers launch karke, unke andar bash shell access karna, exit karna, detach karna (Ctrl+P+Q) aur container ko stop/start/delete karna practical hands-on karke dikhaya gaya hai.",
    "englishSummary": "Hands-on installation and container management on AWS Cloud infrastructure. Launching an EC2 instance, package repository configuration, installing Docker Engine (`yum install docker -y`), systemd service management (`systemctl start docker`), and user group permission configuration (`usermod -aG docker ec2-user`). Comprehensive practice of container lifecycle CLI operations.",
    "keyConcepts": [
      "EC2 Deployment: Running Docker workloads on cloud compute instances with appropriate security groups.",
      "Linux Permissions: Managing the /var/run/docker.sock permission by appending non-root user to the 'docker' group (`usermod -aG docker $USER`).",
      "Interactive Containers: Using `-it` flags (`-i` interactive stdin, `-t` pseudo-TTY terminal) to enter container shells.",
      "Detached vs Exited Containers: Exiting an interactive container with `exit` stops the main process and kills container; detaching with `Ctrl+P followed by Ctrl+Q` leaves container executing in the background.",
      "Cleanup Hygiene: Removing stopped containers (`docker rm`) and unused images (`docker rmi`)."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 04 - Hands-On Commands)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "52:14",
      "summary": "बोर्ड पर सभी ज़रूरी लिनक्स और डॉकर कमांड्स का स्टेप-बाय-स्टेप फ्लोचार्ट बनाकर समझाया गया, जो हर क्लाउड और डेवॉप्स इंजीनियर को जुबानी याद होना चाहिए।",
      "sections": [
        {
          "heading": "1. Installation Steps on AWS EC2 (Amazon Linux 2)",
          "hindiNote": "AWS EC2 पर डॉकर सेटअप करने के 4 सुनहरे नियम:",
          "points": [
            "Step 1: sudo yum update -y (सिस्टम पैकेज अपडेट करें)",
            "Step 2: sudo yum install docker -y (डॉकर पैकेज इंस्टॉल करें)",
            "Step 3: sudo systemctl start docker && sudo systemctl enable docker (सर्विस शुरू और ऑटो-स्टार्ट करें)",
            "Step 4: sudo usermod -aG docker ec2-user (ec2-user को बिना sudo के डॉकर चलाने की अनुमति दें)"
          ],
          "diagram": "[ AWS EC2 Instance ]\n       |\n       +--> sudo yum install docker -y\n       +--> sudo systemctl start docker\n       +--> sudo usermod -aG docker ec2-user\n       +--> exit & reconnect SSH ===> Docker Ready without sudo!"
        },
        {
          "heading": "2. Essential Container Management Commands Flow",
          "hindiNote": "कंटेनर को रन करने से लेकर डिलीट करने तक का पूरा चक्र:",
          "points": [
            "docker images : लोकल में कौन-कौन सी इमेजेस मौजूद हैं।",
            "docker run -it --name my_ubuntu ubuntu /bin/bash : इंटरैक्टिव मोड में नया कंटेनर खोलें।",
            "docker ps : केवल चल रहे (Running) कंटेनर्स देखने के लिए।",
            "docker ps -a : सभी (Running + Stopped) कंटेनर्स देखने के लिए।",
            "docker stop <id> : कंटेनर को सुरक्षित बंद करने के लिए (SIGTERM).",
            "docker rm <id> : बंद कंटेनर को मिटाने के लिए।",
            "docker rm -f <id> : चल रहे कंटेनर को जबरन बंद करके मिटाने के लिए (SIGKILL)."
          ],
          "diagram": "+-------------------------------------------------------------+\n|                  CONTAINER LIFECYCLE FLOW                   |\n+-------------------------------------------------------------+\n| [ Image ] ----> (docker run -it) ----> [ Running Container ]|\n|                                              |              |\n|                                         (docker stop)       |\n|                                              v              |\n|                                        [ Stopped Container ]|\n|                                              |              |\n|                                         (docker rm)         |\n|                                              v              |\n|                                          [ DELETED ]        |\n+-------------------------------------------------------------+"
        }
      ]
    },
    "architecture": "AWS EC2 (Amazon Linux) ---> dockerd (systemd) ---> [docker run -it ubuntu:latest] ---> Attached TTY (/bin/bash)",
    "commandsOrSteps": [
      "sudo yum install docker -y",
      "sudo systemctl start docker && sudo systemctl enable docker",
      "sudo usermod -aG docker ec2-user",
      "docker run -it --name test-os ubuntu /bin/bash",
      "docker ps -a",
      "docker stop test-os && docker rm test-os"
    ],
    "examTips": "Exam Trap: If you run 'docker run ubuntu' without '-it' or a long-running process, the container will instantly exit with status code 0 because PID 1 finishes immediately.",
    "interviewQuestions": "Q: How do you exit an interactive Docker container without stopping it?\nA: Press the key sequence 'Ctrl + P' followed immediately by 'Ctrl + Q'. This detaches the TTY session while allowing the container to continue executing in the background.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Container Lifecycle Mastery (Run, Stop, Restart, Exec, Remove)",
      "scenario": "Ek hotel room me jab guest aata hai, room book hota hai (Create/Run). Jab guest ghumne jata hai, room lock hota hai (Stop). Jab wapas aata hai, unlock hota hai (Start). Aur jab checkout hota hai, room clean karke naye guest ke liye ready kiya jata hai (Remove). Container ka lifecycle bhi theek aisa hi hota hai!",
      "objective": "Master complete container state transitions: Created -> Running -> Paused -> Stopped -> Deleted. Run a persistent Nginx web server, forward host port 8080 to container port 80, view logs, and cleanly tear down.",
      "duration": "20 Mins",
      "cost": "100% Free",
      "difficulty": "Complete Beginner",
      "diagram": "+--------------------------------------------------------------+\n| Container Lifecycle State Machine                            |\n|                                                              |\n|        [ docker create ] --------+                           |\n|                 |                |                           |\n|                 v                v                           |\n|       +------------------------------------+                 |\n|       |        RUNNING (Status: Up)        |                 |\n|       +------------------------------------+                 |\n|            |                          ^                      |\n|       docker pause                docker unpause             |\n|            v                          |                      |\n|       [ PAUSED ] ---------------------+                      |\n|            |                                                 |\n|       docker stop (SIGTERM -> SIGKILL)                       |\n|            v                                                 |\n|       [ STOPPED (Exited) ]                                   |\n|            |                                                 |\n|       docker rm                                              |\n|            v                                                 |\n|       [ DESTROYED / REMOVED ]                                |\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Launch a Detached Nginx Web Server with Port Forwarding",
          "laymanExplanation": "Nginx web server ko background me start karna aur bahar se aane wale traffic ko port 8080 se container ke port 80 par redirect karna.",
          "consoleAction": "Docker Desktop -> Images -> Search 'nginx' -> Run -> Host Port: 8080, Container Port: 80.",
          "command": "docker run -d --name web-server -p 8080:80 nginx:alpine",
          "commandExplanation": "-d: Detached mode (runs in background so you get your prompt back).\n--name web-server: Gives a human-friendly name.\n-p 8080:80: Maps host port 8080 to container internal port 80.\nnginx:alpine: Ultra-lightweight 23MB web server.",
          "expectedOutput": "7489a234b67e890...\n[Container ID returned]",
          "verification": "Run `docker ps` and check STATUS column says 'Up X seconds' and PORTS shows '0.0.0.0:8080->80/tcp'."
        },
        {
          "stepNum": 2,
          "title": "Test Web Access in Browser or Terminal",
          "laymanExplanation": "Test karna ki container sach me live web traffic handle kar raha hai ya nahi.",
          "consoleAction": "Open web browser and navigate to `http://localhost:8080` (or `http://<ec2-public-ip>:8080`).",
          "command": "curl http://localhost:8080",
          "commandExplanation": "`curl` sends an HTTP GET request to port 8080. Docker forwards the packet to container port 80 where Nginx returns the default HTML page.",
          "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n<title>Welcome to nginx!</title>\n</head>\n<body>\n<h1>Welcome to nginx!</h1>\n</body>\n</html>",
          "verification": "See the 'Welcome to nginx!' HTML response."
        },
        {
          "stepNum": 3,
          "title": "Stream Real-Time Container Access Logs",
          "laymanExplanation": "Jaise security guard diary me aane jaane walo ki entry likhta hai, waise hi Nginx ke access logs live terminal par stream karna.",
          "consoleAction": "In Docker Desktop -> Click container 'web-server' -> 'Logs' tab.",
          "command": "docker logs -f web-server",
          "commandExplanation": "`docker logs` prints container STDOUT/STDERR. Adding `-f` (follow) streams logs in real-time as requests hit the server.",
          "expectedOutput": "172.17.0.1 - - [25/Sep/2026:12:00:01 +0000] \"GET / HTTP/1.1\" 200 615 \"-\" \"curl/7.88.1\"",
          "verification": "Press Ctrl+C to exit log streaming."
        },
        {
          "stepNum": 4,
          "title": "Pause, Unpause, and Stop Container",
          "laymanExplanation": "Container ko temporarily freeze (pause) karna bina use band kiye, fir unfreeze karna aur aakhir me gracefully stop karna.",
          "consoleAction": "Docker Desktop UI action buttons (Pause / Stop).",
          "command": "docker pause web-server && docker ps && docker unpause web-server && docker stop web-server",
          "commandExplanation": "`pause` uses Linux cgroups freezer to freeze all processes. `stop` sends SIGTERM (10s graceful shutdown) followed by SIGKILL.",
          "expectedOutput": "web-server\n[Status: Up (Paused)]\nweb-server\n[Status: Up]\nweb-server\n[Status: Exited (0)]",
          "verification": "Run `docker ps` (it won't show up). Run `docker ps -a` (shows status 'Exited (0)')."
        },
        {
          "stepNum": 5,
          "title": "Clean Up Container Completely",
          "laymanExplanation": "Stopped container ko disk se permanently delete karna taaki storage clean rahe.",
          "consoleAction": "Docker Desktop -> Containers -> Click trash can icon.",
          "command": "docker rm web-server",
          "commandExplanation": "`docker rm` permanently removes the container metadata and read-write layer from disk.",
          "expectedOutput": "web-server",
          "verification": "Run `docker ps -a`. The container 'web-server' is completely gone."
        }
      ],
      "simulator": {
        "welcomeMessage": "Docker Container Lifecycle Sandbox",
        "commands": {
          "docker run -d --name web-server -p 8080:80 nginx:alpine": "7489a234b67e890123456789abcdef0123456789abcdef0123456789abcdef\n[OK] Started 'web-server' on port 8080.",
          "docker ps": "CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                  NAMES\n7489a234b67e   nginx:alpine   \"/docker-entrypoint.…\"   10 seconds ago  Up 9 seconds   0.0.0.0:8080->80/tcp   web-server",
          "curl http://localhost:8080": "<!DOCTYPE html>\n<html><head><title>Welcome to nginx!</title></head>\n<body><h1>Welcome to nginx!</h1><p>Running inside Docker container!</p></body></html>",
          "docker stop web-server": "web-server\n[OK] Gracefully stopped web-server (SIGTERM).",
          "docker rm web-server": "web-server\n[OK] Container web-server removed."
        }
      },
      "troubleshooting": [
        {
          "issue": "Error response from daemon: Conflict. The container name \"/web-server\" is already in use",
          "cause": "A container with the same name already exists (either running or stopped).",
          "solution": "Either remove the existing container using `docker rm -f web-server` or pick a different name (e.g. `--name web-server-2`)."
        }
      ],
      "cleanup": [
        "docker rm -f web-server",
        "docker rmi nginx:alpine"
      ]
    }
  },
  {
    "id": 5,
    "lecNum": 5,
    "videoId": "vEv0IxPEsW0",
    "youtubeUrl": "https://www.youtube.com/watch?v=vEv0IxPEsW0",
    "rawTitle": "Dockerfile creation-Hindi/urdu | what is docker and how it works | what is docker file | Docker diff",
    "title": "Lec 5: Dockerfile Creation, Image Layering & Docker Diff",
    "cleanTitle": "Dockerfile Creation, Image Layering & Docker Diff",
    "duration": "1:08:04",
    "moduleId": 3,
    "moduleName": "Dockerfile & Custom Image Construction",
    "moduleBadge": "Image Building",
    "color": "#F59E0B",
    "icon": "file-code",
    "hindiSummary": "Dockerfile ek plain-text file hoti hai jisme step-by-step instructions hote hain jinki madad se custom Docker Images banai jati hain. Is lecture me FROM, RUN, COPY, ADD, WORKDIR, ENV, EXPOSE, aur CMD vs ENTRYPOINT ka practical use karke custom Web Server image banayi gayi hai. Saath hi image caching mechanism, 'docker diff' (container ke andar filesystem changes dekhna: A = Added, C = Changed, D = Deleted) aur 'docker commit' (container se nayi image create karna) ko bariki se samjhaya gaya hai.",
    "englishSummary": "Deep dive into declarative infrastructure and custom image authoring using Dockerfile. Dissecting essential instructions (FROM, MAINTAINER/LABEL, RUN, COPY, ADD, WORKDIR, ENV, EXPOSE, CMD, ENTRYPOINT). Understanding immutable filesystem layers and layer cache optimization. Inspecting ephemeral runtime modifications via `docker diff` and persisting state into fresh images using `docker commit`.",
    "keyConcepts": [
      "Dockerfile Purpose: An automated blueprint script that compiles base images into reproducible, immutable application packages.",
      "Layered Architecture: Each instruction (FROM, RUN, COPY) generates a read-only intermediate cached layer, accelerating subsequent builds.",
      "CMD vs ENTRYPOINT: CMD defines default parameters that can be overridden at runtime; ENTRYPOINT defines an immutable executable command.",
      "COPY vs ADD: COPY is preferred for copying local files; ADD can automatically unpack local tar archives and download remote HTTP URLs.",
      "Docker Diff: Auditing filesystem modifications on top of image layers (A = File/Dir Added, C = File/Dir Changed, D = File/Dir Deleted).",
      "Docker Commit: Snapshotting a modified container into a brand new reusable Docker image."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 05 - Dockerfile & Layers)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "1:08:04",
      "summary": "बोर्ड पर एक वास्तविक Dockerfile लिखकर दिखाई गई और बताया गया कि डॉकर हर लाइन को कैसे एक लेयर (Layer) के रूप में कैश करता है।",
      "sections": [
        {
          "heading": "1. Anatomy of a Production Dockerfile on Board",
          "hindiNote": "बोर्ड पर लिखी गई Nginx कस्टम वेबसाइट Dockerfile:",
          "points": [
            "FROM ubuntu:latest  ==> बेस ऑपरेटिंग सिस्टम चुने (हमेशा पहली लाइन होती है)",
            "RUN apt-get update && apt-get install -y nginx  ==> इमेज बिल्ड के दौरान कमांड चलाएं",
            "COPY index.html /var/www/html/  ==> होस्ट से कोड कंटेनर में डालें",
            "EXPOSE 80  ==> पोर्ट 80 डॉक्यूमेंट करें",
            "CMD [\"nginx\", \"-g\", \"daemon off;\"]  ==> जब कंटेनर स्टार्ट हो तब यह प्रोसेस चले"
          ],
          "diagram": "+-------------------------------------------------------------+\n| DOCKERFILE CODE (Layer Cake Concept)                        |\n+-------------------------------------------------------------+\n| Layer 4: CMD [\"nginx\", \"-g\", \"daemon off;\"] (Run at start)  |\n| Layer 3: COPY index.html /var/www/html/     (Code Layer)    |\n| Layer 2: RUN apt-get install -y nginx       (Package Layer) |\n| Layer 1: FROM ubuntu:latest                 (Base OS Layer) |\n+-------------------------------------------------------------+\n       | \n     docker build -t my_web_app:v1 .\n       v\n[ Final Custom Docker Image ]"
        },
        {
          "heading": "2. Docker Diff (A, C, D Flags) on Board",
          "hindiNote": "कंटेनर के अंदर क्या बदलाव हुआ, यह देखने का बोर्ड चार्ट:",
          "points": [
            "A (Added): अगर कंटेनर के अंदर कोई नई फाइल या फोल्डर बनाया गया।",
            "C (Changed): अगर किसी पहले से मौजूद सिस्टम फाइल (जैसे /etc/hosts) में बदलाव हुआ।",
            "D (Deleted): अगर कोई फाइल मिटा दी गई।"
          ],
          "diagram": "Command: docker diff <container_id>\nOutput:\n  C /etc\n  C /etc/nginx\n  A /var/www/html/my_file.txt   <--- New file added\n  D /var/log/nginx/access.log   <--- File deleted"
        }
      ]
    },
    "architecture": "Dockerfile ---> docker build ---> Cached Read-Only Image Layers ---> Container Runtime (Writable Layer)",
    "commandsOrSteps": [
      "vim Dockerfile",
      "docker build -t custom-nginx:v1 .",
      "docker images",
      "docker run -d -p 8080:80 --name myapp custom-nginx:v1",
      "docker diff myapp",
      "docker commit myapp custom-nginx:v2"
    ],
    "examTips": "DCA Best Practice: Minimize layers and image size by chaining multiple commands using '&&' into a single RUN instruction and cleaning up cache (e.g., 'apt-get clean && rm -rf /var/lib/apt/lists/*').",
    "interviewQuestions": "Q: What is the difference between CMD and ENTRYPOINT in a Dockerfile?\nA: ENTRYPOINT specifies the fixed binary executable that will always run when the container starts. CMD specifies default arguments passed to that executable, which can be easily overridden from the command line.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Writing Production Dockerfiles, Layer Caching & Image Optimization",
      "scenario": "Sochiye aap cake bana rahe hain. Pehle base sponge banta hai, fir cream layer, fir strawberry toppings. Agar aapko strawberry badal kar chocolate karni hai, toh aap pura cake dobara shuru se nahi banate, sirf topping badalte hain. Dockerfile me bhi layers hoti hain! Agar pehli layers me koi change nahi hua, toh Docker unhe cache se uthaata hai aur build 1 second me finish ho jata hai.",
      "objective": "Build a custom production-ready Python web application container image using Dockerfile. Master FROM, WORKDIR, COPY, RUN, EXPOSE, and CMD instructions, verify layer caching, and optimize image size.",
      "duration": "25 Mins",
      "cost": "100% Free",
      "difficulty": "Intermediate",
      "diagram": "+--------------------------------------------------------------+\n| Dockerfile Layer Construction & Cache                        |\n|                                                              |\n|  [ Layer 1: FROM python:3.9-slim ]    ---> CACHED (Base OS)  |\n|  [ Layer 2: WORKDIR /app ]            ---> CACHED (Directory)|\n|  [ Layer 3: COPY requirements.txt . ]  ---> CACHED (Deps)     |\n|  [ Layer 4: RUN pip install -r req ]  ---> CACHED (Pip)      |\n|  [ Layer 5: COPY app.py . ]           ---> REBUILT (Code)    |\n|  [ Layer 6: EXPOSE 5000 ]             ---> Metadata          |\n|  [ Layer 7: CMD [\"python\",\"app.py\"] ] ---> Default Command   |\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Create Project Directory and Application Code",
          "laymanExplanation": "Ek naya folder banana aur usme Python Flask ka ek simple web code likhna jo 'Hello from Dockerized App' return kare.",
          "consoleAction": "Create a folder `my-python-app` on your computer or EC2 terminal.",
          "command": "mkdir -p my-python-app && cd my-python-app\ncat << 'EOF' > app.py\nfrom flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef hello():\n    return '<h1>Welcome to Technical Guftgu Docker Masterclass!</h1><p>Custom Dockerfile App Running Successfully.</p>'\n\nif __name__ == '__main__':\n    app.run(host='0.0.0.0', port=5000)\nEOF",
          "commandExplanation": "Creates a minimal Flask micro-web application listening on all network interfaces (`0.0.0.0`) on port 5000.",
          "expectedOutput": "[app.py created successfully]",
          "verification": "Run `cat app.py` to verify contents."
        },
        {
          "stepNum": 2,
          "title": "Create Requirements File for Dependencies",
          "laymanExplanation": "Python libraries ki list banana taaki container ko pata ho kaunsa package install karna hai.",
          "consoleAction": "Create requirements.txt file.",
          "command": "echo 'flask==2.3.3' > requirements.txt",
          "commandExplanation": "Pins Flask framework version 2.3.3 to avoid unexpected breaking changes in production builds.",
          "expectedOutput": "[requirements.txt created]",
          "verification": "Run `cat requirements.txt`."
        },
        {
          "stepNum": 3,
          "title": "Write the Production Dockerfile",
          "laymanExplanation": "Docker ke liye recipe likhna: Kaunsa base OS chahiye, code kahan copy karna hai, dependency kaise install karni hai aur app ko start kaise karna hai.",
          "consoleAction": "Create Dockerfile inside `my-python-app`.",
          "command": "cat << 'EOF' > Dockerfile\nFROM python:3.9-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY app.py .\nEXPOSE 5000\nCMD [\"python\", \"app.py\"]\nEOF",
          "commandExplanation": "FROM: Slim Linux base with Python runtime.\nWORKDIR: Sets working directory to /app.\nCOPY requirements first: Maximizes layer cache reuse when code changes.\nRUN: Installs pip dependencies.\nCMD: Executed at container startup.",
          "expectedOutput": "[Dockerfile created]",
          "verification": "Check `cat Dockerfile`."
        },
        {
          "stepNum": 4,
          "title": "Build the Custom Image with Tag",
          "laymanExplanation": "Dockerfile ko compile karke ek ready-to-run container image banana jiska naam `my-flask-app:v1` hoga.",
          "consoleAction": "Terminal command inside project directory.",
          "command": "docker build -t my-flask-app:v1 .",
          "commandExplanation": "`docker build` executes Dockerfile instructions step-by-step. `-t my-flask-app:v1` tags the image with name and version. `.` specifies current directory as build context.",
          "expectedOutput": "[+] Building 4.2s (10/10) FINISHED\n => [internal] load build definition from Dockerfile\n => [1/5] FROM docker.io/library/python:3.9-slim\n => [2/5] WORKDIR /app\n => [3/5] COPY requirements.txt .\n => [4/5] RUN pip install -r requirements.txt\n => [5/5] COPY app.py .\n => exporting to image\n => naming to docker.io/library/my-flask-app:v1",
          "verification": "Run `docker images my-flask-app:v1` to verify image exists."
        },
        {
          "stepNum": 5,
          "title": "Run Container from Custom Image and Test in Browser",
          "laymanExplanation": "Apni banayi hui brand new image se container start karke browser me test karna.",
          "consoleAction": "Terminal command execution.",
          "command": "docker run -d --name flask-container -p 5000:5000 my-flask-app:v1 && curl http://localhost:5000",
          "commandExplanation": "Runs the container in background, maps port 5000, and verifies HTTP response with curl.",
          "expectedOutput": "<h1>Welcome to Technical Guftgu Docker Masterclass!</h1><p>Custom Dockerfile App Running Successfully.</p>",
          "verification": "Confirm custom HTML response returns on port 5000."
        }
      ],
      "simulator": {
        "welcomeMessage": "Dockerfile Custom Image Build Sandbox",
        "commands": {
          "docker build -t my-flask-app:v1 .": "[+] Building 3.8s (10/10) FINISHED\n => [1/5] FROM python:3.9-slim (Pull complete)\n => [2/5] WORKDIR /app\n => [3/5] COPY requirements.txt .\n => [4/5] RUN pip install -r requirements.txt (Successfully installed Flask)\n => [5/5] COPY app.py .\n => naming to my-flask-app:v1\n[OK] Built image my-flask-app:v1",
          "docker run -d --name flask-container -p 5000:5000 my-flask-app:v1": "e49f82a1b2c3d4e5f6...\n[OK] Container 'flask-container' running on port 5000.",
          "curl http://localhost:5000": "<h1>Welcome to Technical Guftgu Docker Masterclass!</h1><p>Custom Dockerfile App Running Successfully.</p>",
          "docker rm -f flask-container": "flask-container\n[OK] Cleaned up flask-container."
        }
      },
      "troubleshooting": [
        {
          "issue": "Step 4/5 fails with 'ModuleNotFoundError: No module named flask'",
          "cause": "Flask was not installed into the container image before `CMD` was triggered, or requirements.txt had a typo.",
          "solution": "Ensure `RUN pip install -r requirements.txt` comes before `COPY app.py .` in Dockerfile."
        }
      ],
      "cleanup": [
        "docker rm -f flask-container",
        "docker rmi my-flask-app:v1",
        "cd .. && rm -rf my-python-app"
      ]
    }
  },
  {
    "id": 6,
    "lecNum": 6,
    "videoId": "OoZxPUgpUUM",
    "youtubeUrl": "https://www.youtube.com/watch?v=OoZxPUgpUUM",
    "rawTitle": "What is Docker Volume-Hindi/Urdu | How to Create Volumes | Docker Storage | Docker Volume tutorial",
    "title": "Lec 6: Docker Storage & Volumes (Data Persistence Deep Dive)",
    "cleanTitle": "Docker Storage & Volumes (Data Persistence Deep Dive)",
    "duration": "1:03:28",
    "moduleId": 4,
    "moduleName": "Docker Storage, Volumes & Data Persistence",
    "moduleBadge": "Volumes & Storage",
    "color": "#10B981",
    "icon": "database",
    "hindiSummary": "Docker Containers by default stateless aur ephemeral hote hain. Agar container crash ya delete hota hai to uske andar banaya gaya sara data (database records, uploads, logs) hamesha ke liye mit jata hai. Is samasya ko solve karne ke liye Docker Volumes ka use kiya jata hai. Volumes host machine ke '/var/lib/docker/volumes/' directory me safe store hote hain aur unka lifecycle container par depend nahi karta. Container delete ho jane ke baad bhi data 100% surakshit rehta hai aur nayi container me dobara attach kiya ja sakta hai.",
    "englishSummary": "Mastering storage persistence in containerized architectures. Exploring why containers are ephemeral by default and how the Copy-On-Write (Overlay2) filesystem operates. Comparing Docker Managed Volumes, Host Bind Mounts, and In-Memory tmpfs Mounts. Creating, inspecting, and mounting volumes using `-v` and `--mount` flags. Sharing persistent storage across multiple containers with `--volumes-from` and proving data survival across container termination.",
    "keyConcepts": [
      "Ephemeral Container Layer: The default writable layer is tightly coupled to container lifecycle; removing the container instantly destroys all stored files.",
      "Docker Volumes: Storage managed directly by Docker engine under `/var/lib/docker/volumes/<vol_name>/_data`. Completely decoupled from container lifecycle.",
      "Bind Mounts: Mapping an arbitrary file or folder on the host system (e.g. `/home/user/project`) into a container path. Highly dependent on host filesystem structure.",
      "tmpfs Mounts: Ephemeral storage allocated purely in host system memory (RAM). Never persists to disk, ensuring maximum security for tokens/keys.",
      "Volume Sharing (`--volumes-from`): Facilitates multi-container architectures where one container writes data (e.g. App) and another processes it (e.g. Log shipper or Backup agent)."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 06 - Docker Volumes)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "1:03:28",
      "summary": "भूपिंदर राजपूत जी ने डिजिटल बोर्ड पर समझाया कि कंटेनर के अंदर डेटा रखना सबसे बड़ी गलती क्यों है, और कैसे पेन ड्राइव (Pen Drive) की तरह डॉकर वॉल्यूम को कंटेनर में लगाकर डेटा को हमेशा सुरक्षित रखा जाता है।",
      "sections": [
        {
          "heading": "1. Why Containers are Stateless / Ephemeral (डेटा डिलीट क्यों होता है?)",
          "hindiNote": "बोर्ड पर इंटरनेट कैफे का शानदार उदाहरण समझाया गया:",
          "points": [
            "इंटरनेट कैफे कंप्यूटर: आप कैफे गए, डेस्कटॉप पर अपनी जरूरी फाइलें सेव कीं। कंप्यूटर बंद होते ही सब कुछ रीसेट/डिलीट हो गया!",
            "डॉकर कंटेनर भी कैफे कंप्यूटर जैसा है: कंटेनर में केवल कोड और प्रोसेस चलती है। अगर कंटेनर क्रैश हुआ तो डेटा खत्म।",
            "पेन ड्राइव (Pen Drive) का समाधान: आप अपनी पेन ड्राइव (Docker Volume) लगाते हैं, उसमें डेटा सेव करते हैं। कंप्यूटर भले टूट जाए, पेन ड्राइव में आपका डेटा सुरक्षित है!"
          ],
          "diagram": "WITHOUT VOLUME (DANGEROUS!):\n[ Container Created ] ---> [ Writes Data in Writable Layer ] ---> [ docker rm ] ===> DATA LOST FOREVER!\n\nWITH DOCKER VOLUME (SAFE & PERSISTENT):\n[ Container ] === Mount Point (/var/lib/mysql) ===> [ DOCKER VOLUME on Host Disk ]\n      |                                                        |\n [ docker rm ] (Container Dies)                                v\n                                                   DATA REMAINS 100% SAFE!"
        },
        {
          "heading": "2. 3 Types of Docker Storage on Board",
          "hindiNote": "बोर्ड पर तीनों स्टोरेज मॉडल्स की तुलना की गई:",
          "points": [
            "1. Docker Volumes (सबसे अच्छा): डॉकर खुद मैनेज करता है (/var/lib/docker/volumes/). प्रोडक्शन डेटाबेस के लिए यही रिकमेंड है।",
            "2. Bind Mounts: होस्ट मशीन का कोई भी मनचाहा फोल्डर (जैसे /home/ec2-user/code). डेवलपमेंट के समय लाइव कोडिंग के लिए बेस्ट।",
            "3. tmpfs Mounts: रैम (RAM) में स्टोर होता है, हार्ड डिस्क पर कभी नहीं लिखा जाता। पासवर्ड और कीज के लिए बेस्ट।"
          ],
          "diagram": "+-------------------------------------------------------------------------+\n| HOST SYSTEM STORAGE HIERARCHY                                           |\n+-------------------------------------------------------------------------+\n| [ Docker Volumes ] ===> /var/lib/docker/volumes/my_data/_data (Managed) |\n| [ Bind Mounts ]    ===> /home/user/app (Direct Host Folder)             |\n| [ tmpfs Mounts ]   ===> System Memory (RAM) (Non-Persistent)            |\n+-------------------------------------------------------------------------+"
        },
        {
          "heading": "3. Volume Persistence Proof & Sharing (--volumes-from)",
          "hindiNote": "बोर्ड पर प्रैक्टिकल टेस्ट का फ्लो:",
          "points": [
            "Step 1: वॉल्यूम बनाएं: docker volume create my_data",
            "Step 2: कंटेनर A में वॉल्यूम लगाएं और उसमें file1.txt लिखें।",
            "Step 3: कंटेनर A को हमेशा के लिए डिलीट (docker rm -f) कर दें।",
            "Step 4: नया कंटेनर B बनाएं और वही वॉल्यूम अटैच करें: file1.txt बिल्कुल सही सलामत मिलेगी!",
            "Step 5: दो कंटेनर्स एक ही वॉल्यूम को आपस में शेयर कर सकते हैं।"
          ],
          "diagram": "[ Container A (Writes File) ] --+ \n                                +---> [ VOLUME: my_data ] <=== [ Container B (Reads File) ]\n[ Container A Deleted! ] -------+               | \n                                                +===> Data Still Intact!"
        }
      ]
    },
    "architecture": "Host Storage (/var/lib/docker/volumes/my_vol/_data) <=== Mounted (-v my_vol:/app/data) ===> Container Writable Filesystem",
    "commandsOrSteps": [
      "docker volume create my_storage",
      "docker volume ls",
      "docker volume inspect my_storage",
      "docker run -d --name c1 -v my_storage:/data ubuntu touch /data/testfile.txt",
      "docker rm -f c1",
      "docker run -it --name c2 -v my_storage:/data ubuntu ls -la /data (Verifies testfile.txt survives!)",
      "docker volume prune -f"
    ],
    "examTips": "DCA / CKA Exam Tip: Docker will NEVER delete a Volume automatically when removing an attached container using 'docker rm <container>'. To explicitly delete associated anonymous volumes, you must pass the '-v' flag: 'docker rm -v <container>'.",
    "interviewQuestions": "Q: How do you persist database data in a MySQL or Postgres container across container restarts or upgrades?\nA: Create a named Docker Volume (e.g. 'docker volume create mysql_data') and mount it to the container's data directory (e.g. 'docker run -d -v mysql_data:/var/lib/mysql mysql:latest'). Even if the container is upgraded, re-created, or destroyed, the MySQL database files stay intact inside the volume.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Docker Storage, Named Volumes & Data Persistence",
      "scenario": "Maan lijiye aap ek hotel me stay kar rahe hain. Hotel ke drawer me rakha hua saaman checkout ke waqt room cleaning me fek diya jata hai (Ephemeral container layer). Lekin agar aap apna saaman hotel ke safe locker me rakhte hain (Docker Volume), toh chahe aap checkout karke dusre room me shift ho jayein, safe locker ka saaman hamesha safe aur intact rehta hai!",
      "objective": "Demonstrate that Docker container storage is ephemeral (lost on deletion) versus Docker Named Volumes that persist data permanently across container deletion and recreation.",
      "duration": "20 Mins",
      "cost": "100% Free",
      "difficulty": "Intermediate",
      "diagram": "+--------------------------------------------------------------+\n| Host Filesystem: /var/lib/docker/volumes/my-db-data/_data    |\n|                                                              |\n|                     [ PERSISTENT VOLUME ]                    |\n|                        (my-db-data)                          |\n|                             |                                |\n|         +-------------------+-------------------+            |\n|         |                                       |            |\n|         v                                       v            |\n|  [ Container 1 (MySQL) ]                 [ Container 2 (MySQL) ]\n|  Mount: /var/lib/mysql                   Mount: /var/lib/mysql\n|  Action: Creates User Table              Action: Reads Table!\n|  Status: DELETED & DESTROYED!            Status: DATA PRESERVED!\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Create an Independent Docker Named Volume",
          "laymanExplanation": "Host machine par ek dedicated safe locker (Volume) banana jise container ke delete hone par bhi koi chhu nahi sakta.",
          "consoleAction": "In Docker Desktop -> 'Volumes' tab -> Click 'Create'.",
          "command": "docker volume create my-db-data && docker volume ls",
          "commandExplanation": "`docker volume create` allocates a managed directory under `/var/lib/docker/volumes/` that bypasses the container storage driver.",
          "expectedOutput": "my-db-data\nDRIVER    VOLUME NAME\nlocal     my-db-data",
          "verification": "Inspect volume metadata using `docker volume inspect my-db-data`."
        },
        {
          "stepNum": 2,
          "title": "Launch Container 1 and Write Persistent Data",
          "laymanExplanation": "Pehle container ko volume ke sath jodkar uske andar ek file create karna.",
          "consoleAction": "Terminal command execution.",
          "command": "docker run -d --name writer-app -v my-db-data:/data alpine sh -c \"echo 'Production Database Record ID: 994821 - Created by Container 1' > /data/db.txt && sleep 3600\"",
          "commandExplanation": "-v my-db-data:/data: Mounts the volume `my-db-data` to `/data` path inside the container.\nsh -c: Writes sample database text to `/data/db.txt`.",
          "expectedOutput": "3b8a1c9e...\n[Container 1 running with volume mounted]",
          "verification": "Read data inside container 1: `docker exec writer-app cat /data/db.txt`."
        },
        {
          "stepNum": 3,
          "title": "Delete Container 1 Completely (Simulating Disaster/Crash)",
          "laymanExplanation": "Container 1 ko forcefully kill aur delete kar dena taaki test ho sake ki data bacha ya chala gaya.",
          "consoleAction": "In Docker Desktop -> Delete container 'writer-app'.",
          "command": "docker rm -f writer-app",
          "commandExplanation": "Forcibly stops and deletes container 1 and its read-write layer.",
          "expectedOutput": "writer-app\n[Container completely destroyed]",
          "verification": "Run `docker ps -a`. Container 1 is dead, but run `docker volume ls` - `my-db-data` is still intact!"
        },
        {
          "stepNum": 4,
          "title": "Launch a Brand New Container 2 and Verify Data Persistence",
          "laymanExplanation": "Ek naya naya container launch karke wahi volume mount karna aur check karna ki purani file waisi ki waisi milti hai ya nahi.",
          "consoleAction": "Terminal command execution.",
          "command": "docker run --rm -v my-db-data:/data alpine cat /data/db.txt",
          "commandExplanation": "Launches a brand new container, attaches the same volume `my-db-data`, reads `/data/db.txt`, and automatically removes itself (`--rm`).",
          "expectedOutput": "Production Database Record ID: 994821 - Created by Container 1",
          "verification": "The exact same data written by the destroyed Container 1 is read perfectly by Container 2! Data persistence proven!"
        }
      ],
      "simulator": {
        "welcomeMessage": "Docker Persistent Storage & Volumes Sandbox",
        "commands": {
          "docker volume create my-db-data": "my-db-data\n[OK] Named volume 'my-db-data' created at /var/lib/docker/volumes/my-db-data/_data",
          "docker run -d --name writer-app -v my-db-data:/data alpine sh -c \"echo 'Record ID: 994821' > /data/db.txt && sleep 3600\"": "3b8a1c9e78234...\n[OK] Started 'writer-app' and wrote data to /data/db.txt inside volume.",
          "docker rm -f writer-app": "writer-app\n[OK] Container 1 forcibly deleted! Its ephemeral layer is gone.",
          "docker run --rm -v my-db-data:/data alpine cat /data/db.txt": "Record ID: 994821\n[OK] Data successfully recovered by Container 2 from volume my-db-data!",
          "docker volume rm my-db-data": "my-db-data\n[OK] Volume cleaned up."
        }
      },
      "troubleshooting": [
        {
          "issue": "Error response from daemon: remove my-db-data: volume is in use",
          "cause": "A running or stopped container is still attached to the volume.",
          "solution": "Remove the attached container first (`docker rm -f <container-name>`) before deleting the volume."
        }
      ],
      "cleanup": [
        "docker rm -f writer-app",
        "docker volume rm my-db-data"
      ]
    }
  },
  {
    "id": 7,
    "lecNum": 7,
    "videoId": "p4HuoL7hwXI",
    "youtubeUrl": "https://www.youtube.com/watch?v=p4HuoL7hwXI",
    "rawTitle": "Docker port mapping,restart container,exec container and docker expose | Docker port expose",
    "title": "Lec 7: Docker Port Mapping, Container Exec & Expose Mechanics",
    "cleanTitle": "Docker Port Mapping, Container Exec & Expose Mechanics",
    "duration": "1:00:19",
    "moduleId": 5,
    "moduleName": "Docker Networking, Port Mapping & Container Operations",
    "moduleBadge": "Networking & Ops",
    "color": "#8B5CF6",
    "icon": "network-wired",
    "hindiSummary": "By default har container ek private IP address (172.17.0.x) par chalta hai jo sirf host machine ke andar reachable hota hai, bahar internet ke users use access nahi kar sakte. Is lecture me Port Mapping (-p HostPort:ContainerPort) ka practical use karke Nginx aur web apps ko public internet ke liye live kiya gaya hai. EXPOSE instruction (jo sirf metadata/documentation hai) aur runtime -p flag (jo actual iptables NAT rule banata hai) ka asali fark samjhaya gaya hai. Saath hi chalte hue container me ghusne ke liye 'docker exec -it', logs dekhne ke liye 'docker logs -f', aur restart policies (--restart always) ka prayog sikhaya gaya hai.",
    "englishSummary": "Deep architectural guide to Docker Container Networking and production operations. Dissecting default bridge network (docker0), isolated container subnet routing, and Network Address Translation (NAT). Comparing Dockerfile `EXPOSE` metadata vs runtime `-p` (Publish) iptables binding. Advanced operational CLI: entering running containers via `docker exec -it`, inspecting stdout/stderr with `docker logs -f`, configuring container restart policies, and inspecting deep JSON metadata.",
    "keyConcepts": [
      "Bridge Network (docker0): The default software bridge that acts as a virtual switch assigning private 172.17.0.0/16 IPs to containers.",
      "Port Mapping / Publishing (`-p HostPort:ContainerPort`): Configures Linux host iptables NAT forwarding to route incoming host traffic directly into the container port.",
      "EXPOSE vs -p: `EXPOSE 80` in a Dockerfile does NOT publish the port; it merely serves as documentation. Only `-p 8080:80` or `-P` binds ports to the host interface.",
      "Docker Exec: Executes a command or opens an interactive TTY shell (`docker exec -it <id> /bin/bash`) inside an already running container without restarting.",
      "Restart Policies: Managing automatic recovery using `--restart no`, `--restart on-failure`, `--restart unless-stopped`, and `--restart always`."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 07 - Port Mapping)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "1:00:19",
      "summary": "बोर्ड पर समझाया गया कि इंटरनेट से आने वाले यूजर की रिक्वेस्ट आपके लैपटॉप/EC2 के पोर्ट 80 पर आती है, और डॉकर उसे कंटेनर के अंदर कैसे भेजता है।",
      "sections": [
        {
          "heading": "1. How Docker Port Forwarding (-p) Works on Board",
          "hindiNote": "बोर्ड पर पैकेट फ्लो का नक्शा:",
          "points": [
            "User Browser: http://<EC2-Public-IP>:8080 खोलता है।",
            "Host Interface: EC2 सर्वर पोर्ट 8080 पर पैकेट रिसीव करता है।",
            "iptables NAT: डॉकर इंजन पैकेट को ट्रांसलेट करके कंटेनर के प्राइवेट IP (172.17.0.2:80) पर फॉरवर्ड कर देता है।",
            "सिंटेक्स याद रखने का तरीका: -p <बाहर का पोर्ट>:<अंदर का पोर्ट> (-p HostPort:ContainerPort)"
          ],
          "diagram": "[ Client Browser ] (HTTP Request to Public IP : 8080)\n        |\n        v\n[ AWS EC2 Host Interface : Port 8080 ]\n        |\n     (Docker iptables NAT Forwarding)\n        |\n        v\n[ Docker Container IP (172.17.0.2) : Port 80 ] ===> NGINX Web Server Responds!"
        },
        {
          "heading": "2. EXPOSE vs -p (The Classic Interview Question)",
          "hindiNote": "छात्रों को अक्सर इसमें भ्रम होता है, जिसे बोर्ड पर स्पष्ट किया गया:",
          "points": [
            "EXPOSE 80: यह सिर्फ एक लेबल या डॉक्यूमेंटेशन है। इसे लिखने से कोई पोर्ट बाहर नहीं खुलता!",
            "-p 8080:80: यह असली स्विच है। यह होस्ट पर पोर्ट बाइंड करता है और इंटरनेट से आने वाला ट्रैफिक अंदर भेजता है।"
          ],
          "diagram": "Dockerfile: EXPOSE 80    ===> Just documentation ('This container expects port 80')\nCLI:        -p 8080:80   ===> ACTUAL PORT FORWARDING ACTIVATED!"
        },
        {
          "heading": "3. Docker Exec vs Docker Run on Board",
          "hindiNote": "दोनों में क्या अंतर है:",
          "points": [
            "docker run: एक नया कंटेनर जन्म देता है और चलाता है।",
            "docker exec: पहले से चल रहे ज़िंदा कंटेनर के अंदर घुसकर नई कमांड या शेल चलाता है।"
          ],
          "diagram": "[ New Container Creation ] ===> docker run -it ubuntu /bin/bash\n[ Enter Already Running Container ] ===> docker exec -it <running_id> /bin/bash"
        }
      ]
    },
    "architecture": "External Request ---> Host Port (e.g. 8080) ---> Docker Proxy / iptables NAT ---> Container Port (80) ---> Application Process",
    "commandsOrSteps": [
      "docker run -d --name web -p 8080:80 nginx",
      "curl http://localhost:8080",
      "docker exec -it web /bin/bash",
      "docker logs -f web",
      "docker inspect web --format='{{.NetworkSettings.IPAddress}}'",
      "docker run -d --restart always nginx"
    ],
    "examTips": "DCA Tip: If you use uppercase '-P' (publish-all), Docker automatically maps all EXPOSE ports to random high-numbered ports (e.g. 32768+) on the host.",
    "interviewQuestions": "Q: What is the difference between 'docker attach' and 'docker exec'?\nA: 'docker attach' binds your terminal directly to the container's primary process (PID 1). If you exit or send Ctrl+C, you terminate the container. 'docker exec' spawns a brand new independent process inside the container, allowing safe debugging without risking container termination.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Docker Networking, Custom Bridges & Inter-Container Communication",
      "scenario": "Maan lijiye do log ek band kamre me baat kar rahe hain. Default bridge network me containers ek dusre ko sirf unke dynamic IP se bula sakte hain. Lekin custom bridge network me ek automated telephone directory (embedded DNS) hoti hai, jisse container ek dusre ko unke naam se (jaise `ping backend` ya `curl web`) direct call kar sakte hain!",
      "objective": "Create an isolated user-defined Docker bridge network, attach multiple containers (frontend and backend), demonstrate automatic DNS service discovery between containers, and map public ports.",
      "duration": "20 Mins",
      "cost": "100% Free",
      "difficulty": "Intermediate",
      "diagram": "+--------------------------------------------------------------+\n| User-Defined Custom Bridge Network: 'my-custom-net'          |\n|  Subnet: 172.20.0.0/16 | Embedded DNS: 127.0.0.11            |\n|                                                              |\n|  [ Frontend Web Container ]           [ Backend API Container]\n|  IP: 172.20.0.2                      IP: 172.20.0.3          |\n|  Name: 'frontend-app'                 Name: 'backend-api'     |\n|         |                                    ^               |\n|         | curl http://backend-api:8080       |               |\n|         +------------------------------------+               |\n|                   (DNS Resolves by Name!)                    |\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Create a User-Defined Custom Bridge Network",
          "laymanExplanation": "Apne application ke liye ek isolated private WiFi network (virtual bridge switch) create karna.",
          "consoleAction": "In Docker Desktop -> 'Networks' tab -> Click 'Create Network'.",
          "command": "docker network create my-custom-net && docker network ls",
          "commandExplanation": "`docker network create` provisions an isolated Linux software bridge with automatic DNS name resolution enabled.",
          "expectedOutput": "38a19bc042...\nNETWORK ID     NAME            DRIVER    SCOPE\n38a19bc042     my-custom-net   bridge    local",
          "verification": "Inspect subnet details with `docker network inspect my-custom-net`."
        },
        {
          "stepNum": 2,
          "title": "Launch Backend API Service Container on Custom Network",
          "laymanExplanation": "Backend service ko is private network se jodkar launch karna.",
          "consoleAction": "Terminal command execution.",
          "command": "docker run -d --name backend-api --network my-custom-net nginx:alpine",
          "commandExplanation": "--network my-custom-net: Attaches the container interface directly to our custom bridge rather than default docker0 bridge.",
          "expectedOutput": "5f1a2b3c4d...\n[Backend running on my-custom-net]",
          "verification": "Check IP assigned in network: `docker inspect backend-api -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}'`."
        },
        {
          "stepNum": 3,
          "title": "Launch Frontend Container and Test DNS Communication",
          "laymanExplanation": "Frontend container se backend ko uske IP ke bajaye direct uske naam (`backend-api`) se call karna.",
          "consoleAction": "Terminal command execution.",
          "command": "docker run --rm --network my-custom-net alpine ping -c 3 backend-api",
          "commandExplanation": "Demonstrates Docker's embedded DNS server (127.0.0.11) automatically resolving the hostname 'backend-api' to its container IP.",
          "expectedOutput": "PING backend-api (172.20.0.2): 56 data bytes\n64 bytes from 172.20.0.2: seq=0 ttl=64 time=0.082 ms\n64 bytes from 172.20.0.2: seq=1 ttl=64 time=0.075 ms\n--- backend-api ping statistics ---\n2 packets transmitted, 2 packets received, 0% packet loss",
          "verification": "Observe 0% packet loss when pinging the container by name."
        },
        {
          "stepNum": 4,
          "title": "Verify HTTP Request Routing by Container Name",
          "laymanExplanation": "Name-based HTTP communication verify karna.",
          "consoleAction": "Terminal command execution.",
          "command": "docker run --rm --network my-custom-net alpine wget -qO- http://backend-api",
          "commandExplanation": "Sends an HTTP GET request to backend-api over port 80 and prints the HTML response.",
          "expectedOutput": "<!DOCTYPE html>\n<html><head><title>Welcome to nginx!</title></head><body><h1>Welcome to nginx!</h1></body></html>",
          "verification": "Confirmed: Full inter-container communication functioning seamlessly via container names!"
        }
      ],
      "simulator": {
        "welcomeMessage": "Docker Networking Sandbox Terminal",
        "commands": {
          "docker network create my-custom-net": "38a19bc042456e7f8\n[OK] User-defined bridge network 'my-custom-net' created.",
          "docker run -d --name backend-api --network my-custom-net nginx:alpine": "5f1a2b3c4d5e...\n[OK] Started 'backend-api' attached to 'my-custom-net'.",
          "docker run --rm --network my-custom-net alpine ping -c 2 backend-api": "PING backend-api (172.20.0.2): 56 data bytes\n64 bytes from 172.20.0.2: seq=0 ttl=64 time=0.08 ms\n64 bytes from 172.20.0.2: seq=1 ttl=64 time=0.07 ms\n--- backend-api ping statistics --- 0% packet loss.",
          "docker run --rm --network my-custom-net alpine wget -qO- http://backend-api": "<!DOCTYPE html><html><head><title>Welcome to nginx!</title></head></html>\n[OK] HTTP request received and handled by backend-api!",
          "docker rm -f backend-api && docker network rm my-custom-net": "backend-api\nmy-custom-net\n[OK] Cleaned up container and custom network."
        }
      },
      "troubleshooting": [
        {
          "issue": "ping: bad address 'backend-api' on default bridge",
          "cause": "Default bridge (`docker0`) does NOT support automatic DNS name resolution; it only works on user-defined custom networks.",
          "solution": "Create a custom network using `docker network create <name>` and attach containers with `--network <name>`."
        }
      ],
      "cleanup": [
        "docker rm -f backend-api",
        "docker network rm my-custom-net"
      ]
    }
  },
  {
    "id": 8,
    "lecNum": 8,
    "videoId": "NmuQix4c69Q",
    "youtubeUrl": "https://www.youtube.com/watch?v=NmuQix4c69Q",
    "rawTitle": "I used these resources TO CREATE MY RESUME 🔥🔥",
    "title": "Lec 8: Docker & DevOps Project Resume Strategy",
    "cleanTitle": "Docker & DevOps Project Resume Strategy",
    "duration": "3:27",
    "moduleId": 5,
    "moduleName": "Docker Networking, Port Mapping & Container Operations",
    "moduleBadge": "Networking & Ops",
    "color": "#8B5CF6",
    "icon": "user-graduate",
    "hindiSummary": "Docker aur DevOps seekhne ke baad use apne resume me kaise showcase karein taaki recruiters aur interviewers impress ho sakein. Bhupinder Rajput ji is bonus video me batate hain ki sirf 'Docker' likhne ke bajaye containerization projects, multi-stage Dockerfiles, Docker Volumes, aur CI/CD integration ko action verbs ke saath kaise present karna chahiye.",
    "englishSummary": "Strategic career and resume structuring advice for cloud and DevOps engineers. How to effectively demonstrate practical Docker competency, multi-tier containerized architectures, Docker volume persistence, and deployment pipelines on your resume to stand out in technical interviews.",
    "keyConcepts": [
      "Project-Centric Resume: Emphasize practical production scenarios (e.g. 'Containerized full-stack MERN application reducing deployment time by 60%').",
      "Keywords that Matter: Dockerfile optimization, Multi-stage builds, Docker Volumes, Bridge networking, Docker Compose, CI/CD pipeline integration.",
      "GitHub Portfolio: Publishing working Dockerfiles, Compose files, and clear README architecture diagrams."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 08 - Resume)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "3:27",
      "summary": "रेज़्यूमे में डॉकर और डेवॉप्स स्किल्स को प्रभावशाली तरीके से लिखने की रणनीतियाँ।",
      "sections": [
        {
          "heading": "1. What NOT to write vs What to write",
          "hindiNote": "गलत तरीका बनाम सही तरीका:",
          "points": [
            "Don't write: 'Knowledge of Docker and Linux commands.' (यह बहुत बेसिक लगता है)",
            "Do write: 'Built multi-stage Docker images reducing production container size from 800MB to 45MB using Alpine Linux.'",
            "Do write: 'Implemented persistent Docker Volumes for MySQL database ensuring zero data loss across container lifecycle.'"
          ],
          "diagram": "[ Weak Resume Point ]   ===> 'Knows Docker commands'\n[ Strong Resume Point ] ===> 'Containerized 3-tier web architecture with Docker Volumes & custom bridge networks, cutting build times by 40%'"
        }
      ]
    },
    "architecture": "Student Skills ---> Practical Hands-on Projects ---> GitHub Repositories ---> Polished DevOps Resume ---> High-Package Job",
    "commandsOrSteps": [
      "Prepare clean GitHub repository containing your custom Dockerfile and sample app",
      "Write concise bullet points emphasizing business impact and performance gains"
    ],
    "examTips": "Interview Tip: Be prepared to draw Docker architecture (Client, Daemon, Registry) and explain Docker Volumes on the whiteboard in interview rounds.",
    "interviewQuestions": "Q: Can you describe a Docker project you implemented?\nA: Highlight containerizing a multi-tier web application, separating frontend and backend into isolated containers, mapping ports for external access, and utilizing Docker Named Volumes for persistent database storage.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Production Container Debugging (Exec, Inspect, Stats & Restart Policies)",
      "scenario": "Jab koi airplane hawa me ud raha hota hai, engineers use zameen par utare bina real-time sensors (telemetry) se check karte hain ki engine ka temperature aur fuel consumption kaisa hai. Is lab me hum ek live chalte hue container ke andar bina use roke ghusenge (Exec), uske resource metrics monitor karenge (Stats), aur auto-recovery (Restart Policy) test karenge.",
      "objective": "Perform enterprise container operations: Open an interactive bash shell in a running container via `docker exec`, extract deep JSON metadata via `docker inspect --format`, monitor live CPU/Memory utilization with `docker stats`, and verify self-healing restart policies.",
      "duration": "20 Mins",
      "cost": "100% Free",
      "difficulty": "Intermediate to Advanced",
      "diagram": "+--------------------------------------------------------------+\n| Host Engine                                                  |\n|                                                              |\n|  [ User Terminal ]                                           |\n|         |                                                    |\n|         +---> docker exec -it prod-web sh                    |\n|         |     (Spawns new child process inside container)    |\n|         |                                                    |\n|         v                                                    |\n|  [ Running Container: prod-web ]                             |\n|  Policy: --restart unless-stopped                            |\n|         |                                                    |\n|         +---> If process crashes (kill -9 1)                 |\n|         |                                                    |\n|         v                                                    |\n|  [ Docker Daemon Auto-Restarts Container Immediately! ]      |\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Launch a Container with Production Auto-Restart Policy",
          "laymanExplanation": "Container ko aisi setting ke sath start karna ki agar wo crash ho jaye ya server restart ho, toh Docker use turant khud-b-khud dobara start kar de.",
          "consoleAction": "Terminal command execution.",
          "command": "docker run -d --name prod-web --restart unless-stopped -p 8080:80 nginx:alpine",
          "commandExplanation": "--restart unless-stopped: Automatically restarts container if it crashes or if Docker daemon reboots, unless manually stopped by admin.",
          "expectedOutput": "9a8b7c6d5e...\n[Container running with restart policy]",
          "verification": "Inspect restart policy: `docker inspect prod-web --format '{{.HostConfig.RestartPolicy.Name}}'` returns 'unless-stopped'."
        },
        {
          "stepNum": 2,
          "title": "Spawn an Interactive Troubleshooting Shell with Exec",
          "laymanExplanation": "Chalti hui gadi me andar jakar live settings check karna bina gadi ko roke.",
          "consoleAction": "Terminal execution.",
          "command": "docker exec -it prod-web sh",
          "commandExplanation": "`docker exec` forks a new process inside existing namespaces. `-it` connects terminal stdin/stdout.",
          "expectedOutput": "/ # ls -la /usr/share/nginx/html\n-rw-r--r-- 1 root root 615 index.html\n/ # exit",
          "verification": "Type `exit` to leave the container shell without stopping Nginx."
        },
        {
          "stepNum": 3,
          "title": "Query Precise Container Metadata Using Go Templates",
          "laymanExplanation": "Container ki 200 lines ki JSON file me se sirf kaam ki cheez (jaise container ka IP address ya start time) extract karna.",
          "consoleAction": "Terminal command execution.",
          "command": "docker inspect prod-web --format 'IP: {{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}} | Status: {{.State.Status}} | StartedAt: {{.State.StartedAt}}'",
          "commandExplanation": "`docker inspect` dumps all low-level configuration. `--format` uses Go templates to extract only desired fields.",
          "expectedOutput": "IP: 172.17.0.2 | Status: running | StartedAt: 2026-09-25T12:00:00Z",
          "verification": "Observe clean single-line output."
        },
        {
          "stepNum": 4,
          "title": "Monitor Live CPU, Memory & Network I/O Streams",
          "laymanExplanation": "Live dashboard dekhna ki container kitni RAM aur CPU use kar raha hai.",
          "consoleAction": "Terminal command.",
          "command": "docker stats --no-stream prod-web",
          "commandExplanation": "`docker stats` displays real-time resource utilization. Adding `--no-stream` prints a single snapshot and exits.",
          "expectedOutput": "CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O          BLOCK I/O\n9a8b7c6d5e1f   prod-web   0.00%     4.12MiB / 7.647GiB    0.05%     1.2kB / 600B     0B / 0B",
          "verification": "Notice Nginx uses only ~4MB of RAM! In a VM this would take 1GB+."
        },
        {
          "stepNum": 5,
          "title": "Simulate a Crash and Witness Automated Self-Healing",
          "laymanExplanation": "Container ke andar Nginx process ko forcibly kill karke dekhna ki Docker restart policy use 1 second me wapas zinda karti hai ya nahi.",
          "consoleAction": "Terminal command execution.",
          "command": "docker kill -s 9 prod-web && sleep 2 && docker ps",
          "commandExplanation": "`docker kill -s 9` abruptly kills the container process. The daemon detects unexpected exit and immediately restarts it due to `--restart unless-stopped`.",
          "expectedOutput": "prod-web\n[2 seconds delay...]\nCONTAINER ID   IMAGE          STATUS                     NAMES\n9a8b7c6d5e1f   nginx:alpine   Up Less than a second     prod-web",
          "verification": "Notice STATUS shows 'Up Less than a second' - Docker automatically recovered the crashed service!"
        }
      ],
      "simulator": {
        "welcomeMessage": "Docker Operations & Debugging Sandbox",
        "commands": {
          "docker run -d --name prod-web --restart unless-stopped -p 8080:80 nginx:alpine": "9a8b7c6d5e1f...\n[OK] Started 'prod-web' with policy 'unless-stopped'.",
          "docker exec -it prod-web sh": "Connected to prod-web shell: / # nginx -v\nnginx version: nginx/1.25.3\n/ # [Exited cleanly]",
          "docker stats --no-stream prod-web": "CONTAINER ID   NAME       CPU %   MEM USAGE / LIMIT    MEM %   NET I/O\n9a8b7c6d5e1f   prod-web   0.01%   4.12MiB / 7.64GiB    0.05%   1.2kB / 600B",
          "docker kill -s 9 prod-web": "prod-web\n[CRASH DETECTED] Daemon auto-restarting container according to policy...\n[OK] Container auto-recovered! Status: Up 1 second.",
          "docker rm -f prod-web": "prod-web\n[OK] Cleaned up prod-web."
        }
      },
      "troubleshooting": [
        {
          "issue": "Container keeps restarting continuously (Restart loop)",
          "cause": "The primary process (PID 1) crashes immediately upon launch due to a bad config or missing file.",
          "solution": "Inspect failure logs using `docker logs prod-web` to identify the stack trace."
        }
      ],
      "cleanup": [
        "docker rm -f prod-web"
      ]
    }
  }
];

window.DOCKER_CHEATSHEETS = {
  "comparisons": [
    {
      "id": "vm-vs-container",
      "title": "Virtual Machines (VM) vs Docker Containers",
      "description": "Essential comparison between hardware-level hypervisor virtualization and operating-system-level containerization.",
      "headers": [
        "Feature",
        "Virtual Machine (VM)",
        "Docker Container"
      ],
      "rows": [
        [
          "Virtualization Level",
          "Hardware Level (Hypervisor)",
          "OS Level (Linux Kernel)"
        ],
        [
          "Guest Operating System",
          "Requires complete Guest OS per VM (Windows/Linux)",
          "No Guest OS; shares Host Linux Kernel"
        ],
        [
          "Startup Time",
          "Minutes (Full OS boot cycle)",
          "Milliseconds to seconds"
        ],
        [
          "Resource Overhead",
          "Heavy (GBs of RAM, 20GB+ disk per VM)",
          "Extremely lightweight (MBs of RAM and disk)"
        ],
        [
          "Isolation Boundary",
          "Strong hardware isolation",
          "Process-level isolation via Namespaces & Cgroups"
        ],
        [
          "Density / Scalability",
          "Low (10-20 VMs per physical host)",
          "Very High (hundreds of containers per host)"
        ],
        [
          "Portability",
          "Harder to migrate across clouds",
          "100% Portable (Build Once, Run Anywhere)"
        ]
      ]
    },
    {
      "id": "storage-types",
      "title": "Docker Volumes vs Bind Mounts vs tmpfs Mounts",
      "description": "Detailed comparison of the three primary Docker storage persistence mechanisms.",
      "headers": [
        "Feature",
        "Docker Volume",
        "Bind Mount",
        "tmpfs Mount"
      ],
      "rows": [
        [
          "Host Storage Location",
          "/var/lib/docker/volumes/<name>/_data",
          "Any user-specified host path (e.g. /home/user/app)",
          "Host System RAM (Memory only)"
        ],
        [
          "Lifecycle Management",
          "Managed entirely by Docker Engine",
          "Managed by host operating system/user",
          "Destroyed when container stops"
        ],
        [
          "Decoupled from Container?",
          "Yes (100% persistent across deletion)",
          "Yes (Files remain on host disk)",
          "No (Lost when container is stopped)"
        ],
        [
          "Best Use Case",
          "Production databases, stateful apps, shared storage",
          "Source code live reload during development",
          "Sensitive tokens, passwords, session keys"
        ],
        [
          "Performance",
          "Native high I/O throughput on Linux",
          "Fast on Linux, slower on Mac/Windows file sharing",
          "Ultra-fast in-memory read/write speed"
        ],
        [
          "CLI Creation",
          "docker volume create <name>",
          "Direct host folder path",
          "--tmpfs flag"
        ]
      ]
    },
    {
      "id": "cmd-vs-entrypoint",
      "title": "CMD vs ENTRYPOINT in Dockerfile",
      "description": "Understanding container execution instructions, override mechanics, and production best practices.",
      "headers": [
        "Aspect",
        "CMD Instruction",
        "ENTRYPOINT Instruction"
      ],
      "rows": [
        [
          "Primary Purpose",
          "Provides default command or arguments",
          "Configures the fixed executable binary for container"
        ],
        [
          "Overridable from CLI?",
          "Yes, completely replaced by CLI arguments",
          "No, CLI arguments are appended as parameters"
        ],
        [
          "Shell Form",
          "CMD npm start (runs inside /bin/sh -c)",
          "ENTRYPOINT npm start"
        ],
        [
          "Exec Form (Preferred)",
          "CMD [\"npm\", \"start\"]",
          "ENTRYPOINT [\"npm\", \"start\"]"
        ],
        [
          "Best Practice Pairing",
          "Use CMD for default flags: CMD [\"--port\", \"80\"]",
          "Use ENTRYPOINT for the binary: ENTRYPOINT [\"nginx\"]"
        ]
      ]
    },
    {
      "id": "copy-vs-add",
      "title": "COPY vs ADD Instructions in Dockerfile",
      "description": "Differences between file copying instructions in image layer construction.",
      "headers": [
        "Feature",
        "COPY",
        "ADD"
      ],
      "rows": [
        [
          "Local File Copying",
          "Yes (Copies files from build context to image)",
          "Yes (Copies files from build context to image)"
        ],
        [
          "Auto-Extraction of Tarballs",
          "No (Copies tar file as-is)",
          "Yes (Automatically extracts local tar.gz archives)"
        ],
        [
          "Remote URL Download",
          "No",
          "Yes (Can download remote HTTP URLs directly)"
        ],
        [
          "Recommended Best Practice",
          "Always preferred for transparency and predictability",
          "Only used when auto-tarball extraction is explicitly desired"
        ]
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": 101,
      "question": "A DevOps engineer needs to run a MySQL database inside a Docker container. They want to ensure that all database records persist even if the container is upgraded or deleted. Which solution is recommended?",
      "options": [
        "Store the data directly inside the default container writable layer.",
        "Create a Named Docker Volume and mount it to /var/lib/mysql in the container.",
        "Use tmpfs mount so the database writes to host memory for high speed.",
        "Run 'docker commit' every minute using a cron job."
      ],
      "correct": 1,
      "explanation": "Docker Named Volumes (stored in /var/lib/docker/volumes/) are decoupled from container lifecycle. When a container is removed, the volume and its database files remain completely intact and can be attached to a new container."
    },
    {
      "id": 102,
      "question": "You execute 'docker run -d -p 8080:80 nginx'. What does the '-p 8080:80' flag achieve?",
      "options": [
        "It allocates 8080MB of memory and 80% CPU to the container.",
        "It maps host machine port 8080 to container internal port 80 using iptables NAT.",
        "It exposes port 8080 only to other containers on the bridge network.",
        "It limits container networking bandwidth to 8080 packets per second."
      ],
      "correct": 1,
      "explanation": "The '-p HostPort:ContainerPort' flag instructs Docker to publish the container's port to the host system by configuring host iptables forwarding, allowing external internet traffic hitting host port 8080 to reach container port 80."
    },
    {
      "id": 103,
      "question": "What is the key architectural difference between OS-level virtualization (Docker) and Hardware virtualization (Hypervisors)?",
      "options": [
        "Docker containers require their own dedicated Guest OS kernel, whereas VMs do not.",
        "Docker containers share the host Linux kernel, eliminating the overhead of running a full Guest OS.",
        "Hypervisors can only run Linux operating systems, while Docker can only run Windows.",
        "Docker containers cannot communicate over TCP/IP networks."
      ],
      "correct": 1,
      "explanation": "Docker provides OS-level virtualization by running isolated processes directly on the host Linux kernel using Namespaces and Cgroups, whereas VMs virtualize physical hardware and require a complete Guest OS for each instance."
    },
    {
      "id": 104,
      "question": "You have an already running container named 'prod-api'. You want to start a bash terminal session inside it for live troubleshooting without stopping or restarting the container. Which command should you run?",
      "options": [
        "docker run -it prod-api /bin/bash",
        "docker exec -it prod-api /bin/bash",
        "docker attach prod-api",
        "docker inspect prod-api /bin/bash"
      ],
      "correct": 1,
      "explanation": "'docker exec -it <container> /bin/bash' spawns a new interactive shell process inside an already running container. 'docker run' would create a brand new container, while 'docker attach' connects to PID 1."
    },
    {
      "id": 105,
      "question": "In a Dockerfile, what happens if you specify both ENTRYPOINT [\"nginx\"] and CMD [\"-g\", \"daemon off;\"]?",
      "options": [
        "The build fails because CMD and ENTRYPOINT cannot be combined.",
        "CMD overrides ENTRYPOINT, so only CMD executes.",
        "ENTRYPOINT executes the binary 'nginx' and CMD provides the default arguments '-g daemon off;'.",
        "Both run simultaneously in separate background containers."
      ],
      "correct": 2,
      "explanation": "When combined, ENTRYPOINT defines the immutable binary executable ('nginx') and CMD defines default arguments ('-g daemon off;'). This is a standard Dockerfile best practice allowing users to optionally override CMD arguments from the CLI."
    }
  ]
};
