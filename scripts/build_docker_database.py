import json

DOCKER_MODULES = [
  {
    "id": 1,
    "title": "Docker Fundamentals & OS-Level Virtualization",
    "badge": "Fundamentals",
    "icon": "cubes",
    "color": "#0DB7ED",
    "count": 2,
    "lectures": [1, 2],
    "desc": "Software evolution: Bare Metal -> VMs -> Containers. Monolithic vs Microservices architecture, Dependency hell solution, OS-level virtualization vs Hypervisor, Linux Namespaces & Cgroups, and Docker Hub base images."
  },
  {
    "id": 2,
    "title": "Docker Architecture & Linux/AWS EC2 Setup",
    "badge": "Architecture & Setup",
    "icon": "server",
    "color": "#38BDF8",
    "count": 2,
    "lectures": [3, 4],
    "desc": "Docker Client-Server Engine (Client, REST API, dockerd Daemon), Object models (Images, Containers, Registries), installing Docker on AWS EC2 Amazon Linux, systemctl management, user permissions, and basic container lifecycle commands."
  },
  {
    "id": 3,
    "title": "Dockerfile & Custom Image Construction",
    "badge": "Image Building",
    "icon": "file-code",
    "color": "#F59E0B",
    "count": 1,
    "lectures": [5],
    "desc": "Writing production-grade Dockerfiles: FROM, RUN, COPY vs ADD, WORKDIR, ENV, EXPOSE, CMD vs ENTRYPOINT. Image layer caching mechanism, docker build optimization, docker diff, and docker commit."
  },
  {
    "id": 4,
    "title": "Docker Storage, Volumes & Data Persistence",
    "badge": "Volumes & Storage",
    "icon": "database",
    "color": "#10B981",
    "count": 1,
    "lectures": [6],
    "desc": "Deep dive into Docker Storage: Ephemeral container layer (Overlay2/CoW) vs Persistent Storage. Creating & inspecting Docker Volumes, Bind Mounts vs tmpfs, mounting syntax (-v and --mount), sharing volumes across containers, and verifying persistence across container deletion."
  },
  {
    "id": 5,
    "title": "Docker Networking, Port Mapping & Container Operations",
    "badge": "Networking & Ops",
    "icon": "network-wired",
    "color": "#8B5CF6",
    "count": 2,
    "lectures": [7, 8],
    "desc": "Docker container networking (Default bridge network docker0, isolated container IPs), Port Forwarding with -p, EXPOSE instruction mechanics, docker exec interactive shell, real-time logging, container restart policies, inspect metadata, and DevOps career advice."
  }
]

DOCKER_LECTURES = [
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
    "hasWhiteboard": True,
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
    "interviewQuestions": "Q: What problem does Docker solve in DevOps?\nA: Docker eliminates environment inconsistency and dependency drift across development, staging, and production environments, enabling true 'Build Once, Run Anywhere' CI/CD pipelines."
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
    "hasWhiteboard": True,
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
    "interviewQuestions": "Q: What is the fundamental architectural difference between Docker containers and Virtual Machines?\nA: VMs virtualize the physical hardware layer and require a complete Guest OS for each instance. Containers virtualize the operating system layer, running directly as isolated processes sharing the host Linux kernel."
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
    "hasWhiteboard": True,
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
    "interviewQuestions": "Q: What is the relationship between Docker Image and Docker Container?\nA: A Docker Image is a read-only, immutable template built from layered filesystems. A Container is a stateful, runtime instance of an image with an added top writable layer."
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
    "hasWhiteboard": True,
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
    "interviewQuestions": "Q: How do you exit an interactive Docker container without stopping it?\nA: Press the key sequence 'Ctrl + P' followed immediately by 'Ctrl + Q'. This detaches the TTY session while allowing the container to continue executing in the background."
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
    "hasWhiteboard": True,
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
    "interviewQuestions": "Q: What is the difference between CMD and ENTRYPOINT in a Dockerfile?\nA: ENTRYPOINT specifies the fixed binary executable that will always run when the container starts. CMD specifies default arguments passed to that executable, which can be easily overridden from the command line."
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
    "hasWhiteboard": True,
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
    "interviewQuestions": "Q: How do you persist database data in a MySQL or Postgres container across container restarts or upgrades?\nA: Create a named Docker Volume (e.g. 'docker volume create mysql_data') and mount it to the container's data directory (e.g. 'docker run -d -v mysql_data:/var/lib/mysql mysql:latest'). Even if the container is upgraded, re-created, or destroyed, the MySQL database files stay intact inside the volume."
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
    "hasWhiteboard": True,
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
    "interviewQuestions": "Q: What is the difference between 'docker attach' and 'docker exec'?\nA: 'docker attach' binds your terminal directly to the container's primary process (PID 1). If you exit or send Ctrl+C, you terminate the container. 'docker exec' spawns a brand new independent process inside the container, allowing safe debugging without risking container termination."
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
    "hasWhiteboard": True,
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
    "interviewQuestions": "Q: Can you describe a Docker project you implemented?\nA: Highlight containerizing a multi-tier web application, separating frontend and backend into isolated containers, mapping ports for external access, and utilizing Docker Named Volumes for persistent database storage."
  }
]

DOCKER_CHEATSHEETS = {
  "comparisons": [
    {
      "id": "vm-vs-container",
      "title": "Virtual Machines (VM) vs Docker Containers",
      "description": "Essential comparison between hardware-level hypervisor virtualization and operating-system-level containerization.",
      "headers": ["Feature", "Virtual Machine (VM)", "Docker Container"],
      "rows": [
        ["Virtualization Level", "Hardware Level (Hypervisor)", "OS Level (Linux Kernel)"],
        ["Guest Operating System", "Requires complete Guest OS per VM (Windows/Linux)", "No Guest OS; shares Host Linux Kernel"],
        ["Startup Time", "Minutes (Full OS boot cycle)", "Milliseconds to seconds"],
        ["Resource Overhead", "Heavy (GBs of RAM, 20GB+ disk per VM)", "Extremely lightweight (MBs of RAM and disk)"],
        ["Isolation Boundary", "Strong hardware isolation", "Process-level isolation via Namespaces & Cgroups"],
        ["Density / Scalability", "Low (10-20 VMs per physical host)", "Very High (hundreds of containers per host)"],
        ["Portability", "Harder to migrate across clouds", "100% Portable (Build Once, Run Anywhere)"]
      ]
    },
    {
      "id": "storage-types",
      "title": "Docker Volumes vs Bind Mounts vs tmpfs Mounts",
      "description": "Detailed comparison of the three primary Docker storage persistence mechanisms.",
      "headers": ["Feature", "Docker Volume", "Bind Mount", "tmpfs Mount"],
      "rows": [
        ["Host Storage Location", "/var/lib/docker/volumes/<name>/_data", "Any user-specified host path (e.g. /home/user/app)", "Host System RAM (Memory only)"],
        ["Lifecycle Management", "Managed entirely by Docker Engine", "Managed by host operating system/user", "Destroyed when container stops"],
        ["Decoupled from Container?", "Yes (100% persistent across deletion)", "Yes (Files remain on host disk)", "No (Lost when container is stopped)"],
        ["Best Use Case", "Production databases, stateful apps, shared storage", "Source code live reload during development", "Sensitive tokens, passwords, session keys"],
        ["Performance", "Native high I/O throughput on Linux", "Fast on Linux, slower on Mac/Windows file sharing", "Ultra-fast in-memory read/write speed"],
        ["CLI Creation", "docker volume create <name>", "Direct host folder path", "--tmpfs flag"]
      ]
    },
    {
      "id": "cmd-vs-entrypoint",
      "title": "CMD vs ENTRYPOINT in Dockerfile",
      "description": "Understanding container execution instructions, override mechanics, and production best practices.",
      "headers": ["Aspect", "CMD Instruction", "ENTRYPOINT Instruction"],
      "rows": [
        ["Primary Purpose", "Provides default command or arguments", "Configures the fixed executable binary for container"],
        ["Overridable from CLI?", "Yes, completely replaced by CLI arguments", "No, CLI arguments are appended as parameters"],
        ["Shell Form", "CMD npm start (runs inside /bin/sh -c)", "ENTRYPOINT npm start"],
        ["Exec Form (Preferred)", "CMD [\"npm\", \"start\"]", "ENTRYPOINT [\"npm\", \"start\"]"],
        ["Best Practice Pairing", "Use CMD for default flags: CMD [\"--port\", \"80\"]", "Use ENTRYPOINT for the binary: ENTRYPOINT [\"nginx\"]"]
      ]
    },
    {
      "id": "copy-vs-add",
      "title": "COPY vs ADD Instructions in Dockerfile",
      "description": "Differences between file copying instructions in image layer construction.",
      "headers": ["Feature", "COPY", "ADD"],
      "rows": [
        ["Local File Copying", "Yes (Copies files from build context to image)", "Yes (Copies files from build context to image)"],
        ["Auto-Extraction of Tarballs", "No (Copies tar file as-is)", "Yes (Automatically extracts local tar.gz archives)"],
        ["Remote URL Download", "No", "Yes (Can download remote HTTP URLs directly)"],
        ["Recommended Best Practice", "Always preferred for transparency and predictability", "Only used when auto-tarball extraction is explicitly desired"]
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
}

output_code = f"""/**
 * Docker Masterclass Knowledge Base (Technical Guftgu - Bhupinder Rajput)
 * Complete Theory, Hands-On Commands, Whiteboard Notes, Cheatsheets & Quiz
 */

window.DOCKER_MODULES = {json.dumps(DOCKER_MODULES, indent=2, ensure_ascii=False)};

window.DOCKER_LECTURES = {json.dumps(DOCKER_LECTURES, indent=2, ensure_ascii=False)};

window.DOCKER_CHEATSHEETS = {json.dumps(DOCKER_CHEATSHEETS, indent=2, ensure_ascii=False)};
"""

with open('js/dockerData.js', 'w', encoding='utf-8') as f:
    f.write(output_code)

print("Generated js/dockerData.js successfully!")
