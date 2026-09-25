#!/usr/bin/env python3
"""
enhance_docker_labs.py
Generates comprehensive, beginner-friendly live labs for all 8 Docker lectures.
"""

import json

DOCKER_LABS = {
    1: {
        "title": "Hands-On Lab: Your First Container Run & Lifecycle Inspection",
        "scenario": "Sochiye aap ek nayi car chalana seekh rahe hain. Pehle din aap car ke engine ko kholne ke bajaye sirf ignition on karke test drive lete hain. Is lab me hum bina kisi complex setup ke Docker ka pehla container run karenge aur dekhenge ki Docker background me images aur containers ko kaise manage karta hai.",
        "objective": "Verify Docker installation, pull the official 'hello-world' and 'alpine' images, run your first isolated container, inspect its execution lifecycle, and verify exit status codes.",
        "duration": "10-15 Mins",
        "cost": "100% Free (Runs on local laptop or AWS Free Tier EC2)",
        "difficulty": "Complete Beginner",
        "diagram": """+-------------------------------------------------------------+
| Your Host Machine (Laptop or EC2)                           |
|                                                             |
|  [ User Terminal ]                                          |
|         |                                                   |
|         | 1. 'docker run hello-world'                       |
|         v                                                   |
|  [ Docker Daemon (dockerd) ]                                |
|         |                                                   |
|         +---> Check local cache: Not found                  |
|         +---> 2. Pull layer from Docker Hub (hub.docker.com)|
|         +---> 3. Instantiate isolated container             |
|         +---> 4. Print message to stdout                    |
|         +---> 5. Exit cleanly with status code 0            |
+-------------------------------------------------------------+""",
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
    },
    2: {
        "title": "Hands-On Lab: Comparing VM vs Container Resource Footprint & Linux Namespaces",
        "scenario": "Maan lijiye aapke paas 10 dost aa rahe hain. Agar har dost ke liye ek alag 3-bedroom flat rent par lenge (VM with full OS), toh kharcha aur maintenance bohot zyada hoga. Lekin agar ek hi bade hall me 10 alag-alag study table laga diye jayein (Docker Containers with shared OS Kernel), toh sabka kaam 5 minute me aur 95% kam kharche me ho jayega!",
        "objective": "Demonstrate OS-level virtualization by comparing memory footprint between VM and Docker, inspect process isolation using Linux PID namespaces, and explore official images on Docker Hub.",
        "duration": "15-20 Mins",
        "cost": "100% Free",
        "difficulty": "Complete Beginner",
        "diagram": """+--------------------------------------------------------------+
| Host Kernel: PID Space                                       |
|  Host PID 12450: dockerd                                     |
|  Host PID 12890: container-shim                              |
|         |                                                    |
|         +---> [ Container PID Namespace ]                    |
|                     |                                        |
|                     +---> Inside Container: PID 1 (sh)       |
|                     +---> Isolated filesystem (Alpine 5MB)   |
|                     +---> Zero Guest OS overhead             |
+--------------------------------------------------------------+""",
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
    },
    3: {
        "title": "Hands-On Lab: Installing & Hardening Docker Engine on AWS EC2 (Amazon Linux 2023 / Ubuntu)",
        "scenario": "Aapne AWS par ek naya blank server (EC2) hire kiya hai. Jaise ek naye computer me sabse pehle OS ke baad software install karte hain, waise hi hum EC2 instance par Docker Engine install karenge, non-root user permissions configure karenge taaki bina `sudo` ke docker chal sake, aur service ko boot-persistent banayenge.",
        "objective": "Install Docker Engine from official repositories on an AWS EC2 instance, manage the systemd daemon service, configure Linux user group permissions for ec2-user/ubuntu, and verify automated restart on reboot.",
        "duration": "15 Mins",
        "cost": "100% Free Tier (t2.micro / t3.micro)",
        "difficulty": "Beginner to Intermediate",
        "diagram": """+--------------------------------------------------------------+
| AWS EC2 Instance (Amazon Linux 2023 / Ubuntu 22.04)          |
|                                                              |
|  [ User: ec2-user / ubuntu ]                                 |
|         |                                                    |
|         +---> Added to 'docker' Linux Group                  |
|         |                                                    |
|         v                                                    |
|  [ /var/run/docker.sock (UNIX Socket - rw-rw----) ]          |
|         |                                                    |
|         v                                                    |
|  [ systemd: docker.service (ENABLED at boot) ]               |
|         |                                                    |
|         v                                                    |
|  [ dockerd Daemon Engine ]                                   |
+--------------------------------------------------------------+""",
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
    },
    4: {
        "title": "Hands-On Lab: Container Lifecycle Mastery (Run, Stop, Restart, Exec, Remove)",
        "scenario": "Ek hotel room me jab guest aata hai, room book hota hai (Create/Run). Jab guest ghumne jata hai, room lock hota hai (Stop). Jab wapas aata hai, unlock hota hai (Start). Aur jab checkout hota hai, room clean karke naye guest ke liye ready kiya jata hai (Remove). Container ka lifecycle bhi theek aisa hi hota hai!",
        "objective": "Master complete container state transitions: Created -> Running -> Paused -> Stopped -> Deleted. Run a persistent Nginx web server, forward host port 8080 to container port 80, view logs, and cleanly tear down.",
        "duration": "20 Mins",
        "cost": "100% Free",
        "difficulty": "Complete Beginner",
        "diagram": """+--------------------------------------------------------------+
| Container Lifecycle State Machine                            |
|                                                              |
|        [ docker create ] --------+                           |
|                 |                |                           |
|                 v                v                           |
|       +------------------------------------+                 |
|       |        RUNNING (Status: Up)        |                 |
|       +------------------------------------+                 |
|            |                          ^                      |
|       docker pause                docker unpause             |
|            v                          |                      |
|       [ PAUSED ] ---------------------+                      |
|            |                                                 |
|       docker stop (SIGTERM -> SIGKILL)                       |
|            v                                                 |
|       [ STOPPED (Exited) ]                                   |
|            |                                                 |
|       docker rm                                              |
|            v                                                 |
|       [ DESTROYED / REMOVED ]                                |
+--------------------------------------------------------------+""",
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
    },
    5: {
        "title": "Hands-On Lab: Writing Production Dockerfiles, Layer Caching & Image Optimization",
        "scenario": "Sochiye aap cake bana rahe hain. Pehle base sponge banta hai, fir cream layer, fir strawberry toppings. Agar aapko strawberry badal kar chocolate karni hai, toh aap pura cake dobara shuru se nahi banate, sirf topping badalte hain. Dockerfile me bhi layers hoti hain! Agar pehli layers me koi change nahi hua, toh Docker unhe cache se uthaata hai aur build 1 second me finish ho jata hai.",
        "objective": "Build a custom production-ready Python web application container image using Dockerfile. Master FROM, WORKDIR, COPY, RUN, EXPOSE, and CMD instructions, verify layer caching, and optimize image size.",
        "duration": "25 Mins",
        "cost": "100% Free",
        "difficulty": "Intermediate",
        "diagram": """+--------------------------------------------------------------+
| Dockerfile Layer Construction & Cache                        |
|                                                              |
|  [ Layer 1: FROM python:3.9-slim ]    ---> CACHED (Base OS)  |
|  [ Layer 2: WORKDIR /app ]            ---> CACHED (Directory)|
|  [ Layer 3: COPY requirements.txt . ]  ---> CACHED (Deps)     |
|  [ Layer 4: RUN pip install -r req ]  ---> CACHED (Pip)      |
|  [ Layer 5: COPY app.py . ]           ---> REBUILT (Code)    |
|  [ Layer 6: EXPOSE 5000 ]             ---> Metadata          |
|  [ Layer 7: CMD ["python","app.py"] ] ---> Default Command   |
+--------------------------------------------------------------+""",
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
    },
    6: {
        "title": "Hands-On Lab: Docker Storage, Named Volumes & Data Persistence",
        "scenario": "Maan lijiye aap ek hotel me stay kar rahe hain. Hotel ke drawer me rakha hua saaman checkout ke waqt room cleaning me fek diya jata hai (Ephemeral container layer). Lekin agar aap apna saaman hotel ke safe locker me rakhte hain (Docker Volume), toh chahe aap checkout karke dusre room me shift ho jayein, safe locker ka saaman hamesha safe aur intact rehta hai!",
        "objective": "Demonstrate that Docker container storage is ephemeral (lost on deletion) versus Docker Named Volumes that persist data permanently across container deletion and recreation.",
        "duration": "20 Mins",
        "cost": "100% Free",
        "difficulty": "Intermediate",
        "diagram": """+--------------------------------------------------------------+
| Host Filesystem: /var/lib/docker/volumes/my-db-data/_data    |
|                                                              |
|                     [ PERSISTENT VOLUME ]                    |
|                        (my-db-data)                          |
|                             |                                |
|         +-------------------+-------------------+            |
|         |                                       |            |
|         v                                       v            |
|  [ Container 1 (MySQL) ]                 [ Container 2 (MySQL) ]
|  Mount: /var/lib/mysql                   Mount: /var/lib/mysql
|  Action: Creates User Table              Action: Reads Table!
|  Status: DELETED & DESTROYED!            Status: DATA PRESERVED!
+--------------------------------------------------------------+""",
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
    },
    7: {
        "title": "Hands-On Lab: Docker Networking, Custom Bridges & Inter-Container Communication",
        "scenario": "Maan lijiye do log ek band kamre me baat kar rahe hain. Default bridge network me containers ek dusre ko sirf unke dynamic IP se bula sakte hain. Lekin custom bridge network me ek automated telephone directory (embedded DNS) hoti hai, jisse container ek dusre ko unke naam se (jaise `ping backend` ya `curl web`) direct call kar sakte hain!",
        "objective": "Create an isolated user-defined Docker bridge network, attach multiple containers (frontend and backend), demonstrate automatic DNS service discovery between containers, and map public ports.",
        "duration": "20 Mins",
        "cost": "100% Free",
        "difficulty": "Intermediate",
        "diagram": """+--------------------------------------------------------------+
| User-Defined Custom Bridge Network: 'my-custom-net'          |
|  Subnet: 172.20.0.0/16 | Embedded DNS: 127.0.0.11            |
|                                                              |
|  [ Frontend Web Container ]           [ Backend API Container]
|  IP: 172.20.0.2                      IP: 172.20.0.3          |
|  Name: 'frontend-app'                 Name: 'backend-api'     |
|         |                                    ^               |
|         | curl http://backend-api:8080       |               |
|         +------------------------------------+               |
|                   (DNS Resolves by Name!)                    |
+--------------------------------------------------------------+""",
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
    },
    8: {
        "title": "Hands-On Lab: Production Container Debugging (Exec, Inspect, Stats & Restart Policies)",
        "scenario": "Jab koi airplane hawa me ud raha hota hai, engineers use zameen par utare bina real-time sensors (telemetry) se check karte hain ki engine ka temperature aur fuel consumption kaisa hai. Is lab me hum ek live chalte hue container ke andar bina use roke ghusenge (Exec), uske resource metrics monitor karenge (Stats), aur auto-recovery (Restart Policy) test karenge.",
        "objective": "Perform enterprise container operations: Open an interactive bash shell in a running container via `docker exec`, extract deep JSON metadata via `docker inspect --format`, monitor live CPU/Memory utilization with `docker stats`, and verify self-healing restart policies.",
        "duration": "20 Mins",
        "cost": "100% Free",
        "difficulty": "Intermediate to Advanced",
        "diagram": """+--------------------------------------------------------------+
| Host Engine                                                  |
|                                                              |
|  [ User Terminal ]                                           |
|         |                                                    |
|         +---> docker exec -it prod-web sh                    |
|         |     (Spawns new child process inside container)    |
|         |                                                    |
|         v                                                    |
|  [ Running Container: prod-web ]                             |
|  Policy: --restart unless-stopped                            |
|         |                                                    |
|         +---> If process crashes (kill -9 1)                 |
|         |                                                    |
|         v                                                    |
|  [ Docker Daemon Auto-Restarts Container Immediately! ]      |
+--------------------------------------------------------------+""",
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
