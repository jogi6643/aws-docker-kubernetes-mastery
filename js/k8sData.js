/**
 * Kubernetes (K8s) Masterclass Knowledge Base (Technical Guftgu - Bhupinder Rajput)
 * Complete Theory, Hands-On Commands, Whiteboard Notes, Live Labs, Cheatsheets & Quiz
 */

window.K8S_MODULES = [
  {
    "id": 1,
    "title": "Kubernetes Fundamentals & Control Plane Architecture",
    "badge": "Architecture",
    "icon": "dharmachakra",
    "color": "#326CE5",
    "count": 2,
    "lectures": [
      1,
      2
    ],
    "desc": "Container orchestration fundamentals: Why Docker alone fails in production, Borg heritage, Master Node Control Plane (API Server, etcd, Scheduler, Controller Manager) vs Worker Node (kubelet, kube-proxy, containerd runtime)."
  },
  {
    "id": 2,
    "title": "K8s Cluster Setup & Core Workloads (Pod, RS & Jobs)",
    "badge": "Cluster & Pods",
    "icon": "server",
    "color": "#0EA5E9",
    "count": 3,
    "lectures": [
      3,
      4,
      5
    ],
    "desc": "Building multi-node production clusters on AWS EC2 using Kubeadm and Calico CNI. Labels and Selectors, ReplicationController vs ReplicaSets, Pod lifecycles, Init Containers, and Batch Jobs/CronJobs."
  },
  {
    "id": 3,
    "title": "Deployments, Zero-Downtime Rollouts & Networking",
    "badge": "Deployments & Services",
    "icon": "network-wired",
    "color": "#10B981",
    "count": 2,
    "lectures": [
      6,
      7
    ],
    "desc": "Declarative Deployment manifests, RollingUpdate strategies (maxSurge, maxUnavailable), rollbacks, K8s Networking model, Service discovery (CoreDNS), ClusterIP, NodePort (30000-32767), and Cloud LoadBalancers."
  },
  {
    "id": 4,
    "title": "Storage Persistence & Health Monitoring Probes",
    "badge": "Storage & Health",
    "icon": "database",
    "color": "#F59E0B",
    "count": 1,
    "lectures": [
      8
    ],
    "desc": "Decoupled storage lifecycle: Persistent Volumes (PV), Persistent Volume Claims (PVC), StorageClasses, and Container Health Monitoring using Liveness, Readiness, and Startup Probes."
  },
  {
    "id": 5,
    "title": "Multi-Tenancy, Resource Governance & Autoscaling",
    "badge": "Governance & Scaling",
    "icon": "chart-line",
    "color": "#8B5CF6",
    "count": 2,
    "lectures": [
      9,
      10
    ],
    "desc": "Virtual cluster partitioning using Namespaces, hard resource caps via ResourceQuota and LimitRange, Metrics Server installation, and dynamic Horizontal Pod Autoscaler (HPA) auto-scaling based on CPU/Memory load."
  }
];

window.K8S_LECTURES = [
  {
    "id": 1,
    "lecNum": 1,
    "videoId": "mYVzuE3daY8",
    "youtubeUrl": "https://www.youtube.com/watch?v=mYVzuE3daY8",
    "rawTitle": "What is Kubernetes-Hindi/Urdu | Lec-45 | Kubernetes tutorial for beginners | Kubernetes Introduction",
    "title": "Lec 1: What is Kubernetes (K8s) & Container Orchestration Need",
    "cleanTitle": "What is Kubernetes (K8s) & Container Orchestration Need",
    "duration": "1:13:15",
    "moduleId": 1,
    "moduleName": "Kubernetes Fundamentals & Control Plane Architecture",
    "moduleBadge": "Architecture",
    "color": "#326CE5",
    "icon": "dharmachakra",
    "hindiSummary": "Docker akela single host par containers run karne ke liye best tool hai, lekin production me jab 500 ya 1000 containers multiple servers par chalte hain, tab Docker akela fail ho jata hai. Agar koi container crash ho jaye to auto-restart kaun karega? Server down hone par container dusre server par shift kaun karega? Traffic badhne par auto-scale kaun karega? Inhi sabhi production challenges ko automate karne ke liye Google ne open-source Container Orchestration platform banaya jise Kubernetes (K8s) kehte hain.",
    "englishSummary": "Introduction to Kubernetes (K8s) as the industry-standard container orchestration platform. Understanding why running standalone Docker engines in enterprise production creates severe operational bottlenecks. Key enterprise capabilities provided by Kubernetes: Auto-Healing, Horizontal Auto-Scaling, Service Discovery, Load Balancing, Automated Zero-Downtime Rollouts, and Secret/Config management.",
    "keyConcepts": [
      "Container Orchestration: Automated management, scheduling, scaling, and networking of containerized workloads across a distributed fleet of worker servers.",
      "The 'K8s' Abbreviation: 'K' followed by 8 letters ('ubernete') and ending with 's'. Derived from the Greek word meaning 'Helmsman' or 'Ship Pilot'.",
      "Google Borg Heritage: Kubernetes architecture is rooted in Google's internal Borg system, battle-tested across billions of containers executed every week.",
      "Self-Healing (Auto-Recovery): If a container fails its health check or a physical worker node crashes, K8s immediately reschedules identical pods on surviving healthy nodes.",
      "Horizontal Autoscaling (HPA): Dynamically spinning up extra container replicas when CPU or memory spikes (e.g. Black Friday or Diwali sales) and scaling down when traffic normalizes."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 01 - K8s Intro)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "1:13:15",
      "summary": "Bhupinder Rajput sir explained on the digital whiteboard why Docker alone is insufficient in enterprise production and how Kubernetes acts as the master ship captain orchestrating containers across multiple servers.",
      "sections": [
        {
          "heading": "1. Why Docker Fails in Multi-Host Production (Whiteboard Comparison)",
          "hindiNote": "Board par Docker standalone engine aur production requirements ka comparison banaya gaya:",
          "points": [
            "Problem 1 (Single Point of Failure): Agar Docker host server ka hardware crash ho gaya, to uske saare 50 containers ek sath mar jayenge!",
            "Problem 2 (No Auto-Healing across servers): Docker crash hue container ko usi server par restart kar sakta hai, lekin dusre server par move nahi kar sakta.",
            "Problem 3 (No Native Auto-Scaling): Diwali sale me traffic 10x ho gaya to Docker automatically 5 se 50 containers create nahi kar sakta.",
            "Solution (Kubernetes): Ek unified cluster banata hai jisme 100 servers hote hain. Ek server mar bhi jaye to K8s 2 second me containers ko doosre server par shift kar deta hai!"
          ],
          "diagram": "DOCKER STANDALONE (Fragile):\n[ Physical Server 1 ] ---> Runs 50 Containers ---> Server Crashes ===> COMPLETE OUTAGE!\n\nKUBERNETES CLUSTER (Resilient):\n[ Master Node (Brain) ]\n       |\n       +---> [ Worker Node 1 ] (Runs Pods A, B)\n       +---> [ Worker Node 2 ] (Runs Pods C, D) ===> Node 2 Dies?\n       +---> [ Worker Node 3 ] <====================== K8s Moves Pods C, D Here Instantly!"
        },
        {
          "heading": "2. Real-World Analogy: The Orchestra Conductor (ऑर्केस्ट्रा कंडक्टर उदाहरण)",
          "hindiNote": "Kubernetes ko samajhne ke liye board par Music Orchestra ka real-life example diya gaya:",
          "points": [
            "Musicians (Docker Containers): Har musician apna instrument (Violin, Drums, Guitar) bajane me expert hai.",
            "Conductor / Maestro (Kubernetes): Beech me khada Conductor batata hai kab kisko bajana hai, kiski volume badhani hai, aur agar koi musician behosh ho jaye to replacement kaun aayega.",
            "Conclusion: Containers are the workers, Kubernetes is the master conductor orchestrating the symphony!"
          ],
          "diagram": "Individual Containers (Musicians)   <===>   Drummer, Guitarist, Flutist\nKubernetes Master (Conductor)       <===>   Coordinates Harmony, Tempo & Auto-Replacement"
        }
      ]
    },
    "architecture": "Developers (kubectl) ---> K8s Master Control Plane ---> Distributes Pods Across Multi-Node Worker Cluster",
    "commandsOrSteps": [
      "kubectl version --client (Verify kubectl client tool installation)",
      "kubectl cluster-info (Display active cluster endpoint details)"
    ],
    "examTips": "CKA Exam Tip: Remember the core value proposition of Kubernetes: It abstracts physical infrastructure into a single pool of compute resources and maintains your desired state automatically.",
    "interviewQuestions": "Q: What is the main difference between Docker and Kubernetes?\nA: Docker is a container runtime platform used to build and run individual containers on a single host. Kubernetes is an enterprise container orchestration engine that manages clusters of containerized applications across hundreds of nodes with auto-healing, auto-scaling, and rolling updates.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Exploring Kubernetes High-Level Orchestration & Cluster Status",
      "scenario": "Maan lijiye aapke paas 50 cargo delivery trucks hain. Agar har truck driver ko khud decide karna pade kahan jana hai, kab tyre badalna hai aur accident hone par replacement gadi kahan se aayegi, toh pura logistics collapse ho jayega! Kubernetes ek central traffic control tower jaisa hai jo sabhi trucks (containers) ko continuously track karta hai aur auto-pilot par manage karta hai.",
      "objective": "Understand the orchestration need by interacting with a Kubernetes cluster via kubectl, inspecting nodes, verifying control plane components, and observing the cluster-info health status.",
      "duration": "15 Mins",
      "cost": "100% Free",
      "difficulty": "Complete Beginner",
      "diagram": "+--------------------------------------------------------------+\n| KUBERNETES CENTRAL CONTROL TOWER (Master Control Plane)      |\n|  - Tracks 1000s of containers across servers                 |\n|  - Auto-recovers failed pods in milliseconds                 |\n|                                                              |\n|        [ kubectl client / User Request ]                     |\n|                      |                                       |\n|                      v                                       |\n|            [ Kube-API-Server ]                               |\n|            (The Front Door of K8s)                           |\n|                      |                                       |\n|         +------------+------------+                          |\n|         v                         v                          |\n|  [ Worker Node 1 ]         [ Worker Node 2 ]                 |\n|  [Pod A] [Pod B]           [Pod C] [Pod D]                   |\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Verify Kubectl Client & Cluster API Connectivity",
          "laymanExplanation": "Check karna ki aapka remote control (`kubectl`) TV (`Kubernetes API Server`) se theek se connect ho raha hai ya nahi.",
          "consoleAction": "Open terminal with active Kubernetes context (Minikube, Kind, or Kubeadm EC2).",
          "command": "kubectl cluster-info",
          "commandExplanation": "`kubectl cluster-info` queries the master control plane endpoint and reports the running addresses of Kubernetes control plane and CoreDNS.",
          "expectedOutput": "Kubernetes control plane is running at https://192.168.49.2:8443\nCoreDNS is running at https://192.168.49.2:8443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy",
          "verification": "Confirm Kubernetes control plane is reported as 'running'."
        },
        {
          "stepNum": 2,
          "title": "Inspect Cluster Nodes and Ready Status",
          "laymanExplanation": "Check karna ki cluster me kitne physical ya virtual servers (nodes) available hain aur unki health 'Ready' hai ya nahi.",
          "consoleAction": "Terminal command execution.",
          "command": "kubectl get nodes -o wide",
          "commandExplanation": "`kubectl get nodes` lists all master and worker servers. `-o wide` adds internal IP, external IP, OS image, and container runtime version.",
          "expectedOutput": "NAME           STATUS   ROLES           AGE   VERSION   INTERNAL-IP   CONTAINER-RUNTIME\nk8s-control    Ready    control-plane   5d    v1.28.2   172.31.18.1   containerd://1.7.2\nk8s-worker-1   Ready    <none>          5d    v1.28.2   172.31.25.4   containerd://1.7.2",
          "verification": "Verify STATUS column shows 'Ready' for all nodes."
        },
        {
          "stepNum": 3,
          "title": "Inspect System Control Plane Pods",
          "laymanExplanation": "Kubernetes ke internal engines (API Server, Controller Manager, Scheduler, etcd, CoreDNS) ko live chalte hue dekhna.",
          "consoleAction": "Terminal inspection.",
          "command": "kubectl get pods -n kube-system",
          "commandExplanation": "Control plane components run as system pods inside the dedicated `kube-system` namespace.",
          "expectedOutput": "NAME                                  READY   STATUS    RESTARTS   AGE\netcd-k8s-control                      1/1     Running   0          5d\nkube-apiserver-k8s-control            1/1     Running   0          5d\nkube-controller-manager-k8s-control   1/1     Running   0          5d\nkube-scheduler-k8s-control            1/1     Running   0          5d\ncoredns-5dd5756b68-q4x8z              1/1     Running   0          5d",
          "verification": "Confirm all critical control plane pods show STATUS 'Running' and READY '1/1'."
        }
      ],
      "simulator": {
        "welcomeMessage": "Kubernetes Lab 1: Cluster Health & Architecture Sandbox",
        "commands": {
          "kubectl cluster-info": "Kubernetes control plane is running at https://10.0.0.1:6443\nCoreDNS is running at https://10.0.0.1:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n[OK] Cluster API healthy and responsive.",
          "kubectl get nodes -o wide": "NAME           STATUS   ROLES           AGE   VERSION   INTERNAL-IP   OS-IMAGE             CONTAINER-RUNTIME\nk8s-master     Ready    control-plane   2d    v1.28.2   10.0.1.10     Ubuntu 22.04.3 LTS   containerd://1.7.2\nk8s-worker-1   Ready    worker          2d    v1.28.2   10.0.1.20     Ubuntu 22.04.3 LTS   containerd://1.7.2",
          "kubectl get pods -n kube-system": "NAME                               READY   STATUS    RESTARTS   AGE\nkube-apiserver-k8s-master          1/1     Running   0          2d\netcd-k8s-master                    1/1     Running   0          2d\nkube-controller-manager-master     1/1     Running   0          2d\nkube-scheduler-k8s-master          1/1     Running   0          2d\ncoredns-5dd5756b68-abc12           1/1     Running   0          2d"
        }
      },
      "troubleshooting": [
        {
          "issue": "The connection to the server localhost:8080 was refused - did you specify the right host or port?",
          "cause": "kubectl cannot find valid cluster credentials in ~/.kube/config.",
          "solution": "Ensure kubeconfig is copied to `~/.kube/config` or set `export KUBECONFIG=/etc/kubernetes/admin.conf`."
        }
      ],
      "cleanup": [
        "# No resources modified in read-only inspection lab"
      ]
    }
  },
  {
    "id": 2,
    "lecNum": 2,
    "videoId": "C69My8d-Hww",
    "youtubeUrl": "https://www.youtube.com/watch?v=C69My8d-Hww",
    "rawTitle": "Architecture of Kubernetes in Detail-Hindi/Urdu |Lec-46 | What is Kubernetes | Devops Tutorial",
    "title": "Lec 2: Kubernetes Master & Worker Architecture Deep Dive",
    "cleanTitle": "Kubernetes Master & Worker Architecture Deep Dive",
    "duration": "1:14:06",
    "moduleId": 1,
    "moduleName": "Kubernetes Fundamentals & Control Plane Architecture",
    "moduleBadge": "Architecture",
    "color": "#326CE5",
    "icon": "dharmachakra",
    "hindiSummary": "Kubernetes cluster do mukhy parts me divide hota hai: 1) Master Node (Control Plane) jo cluster ka dimaag (brain) hota hai, aur 2) Worker Nodes (Minions) jahan actual user applications aur containers execute hote hain. Master Node me 4 main components hote hain: API Server, etcd, Scheduler, aur Controller Manager. Worker Node me 3 main components hote hain: Kubelet, Kube-proxy, aur Container Runtime (containerd). Kube-apiserver central hub hota hai jisse saare components interact karte hain.",
    "englishSummary": "Exhaustive architectural breakdown of the Kubernetes Control Plane and Worker Node topology. Deep dive into Control Plane components: kube-apiserver (REST gateway), etcd (distributed raft consensus store), kube-scheduler (affinity, taints, resource scoring), and kube-controller-manager (node, replication, endpoint controllers). Worker Node anatomy: kubelet (node pod supervisor), kube-proxy (iptables/IPVS service routing), and OCI Container Runtime (containerd/CRI-O).",
    "keyConcepts": [
      "kube-apiserver: The central communication backbone. Validates and configures data for API objects (pods, services, replication controllers). It is the only component that writes directly to etcd.",
      "etcd: High-availability, strongly consistent key-value store holding the entire cluster state, configuration records, and secrets.",
      "kube-scheduler: Evaluates resource requests (CPU/RAM), node selector constraints, and taints/tolerations to pick the best node for unassigned pods.",
      "kube-controller-manager: Runs continuous control loops that compare current state against desired state and initiates corrective actions.",
      "kubelet: The primary worker agent that receives PodSpecs from kube-apiserver and ensures the containers described are healthy and running.",
      "kube-proxy: Network proxy running on each node that reflects services and programs host iptables/IPVS rules for load balancing."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 02 - K8s Architecture)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "1:14:06",
      "summary": "Sir drew the complete end-to-end Master and Worker node schematic on the board, detailing what happens when a developer types 'kubectl create deployment'.",
      "sections": [
        {
          "heading": "1. Master Node (Control Plane) Architecture on Board",
          "hindiNote": "Board par Master Node ke 4 pillars ko deeply explain kiya gaya:",
          "points": [
            "1. API Server (kube-apiserver): Cluster ka receptionist/manager. Har command (kubectl) sabse pehle yahi aati hai. Authentication aur authorization check karta hai.",
            "2. etcd Database: Cluster ki diary / hard disk. Har pod, IP, secret ka data etcd me key-value format me store hota hai. Kube-apiserver ke alawa koi etcd ko directly touch nahi kar sakta.",
            "3. Scheduler (kube-scheduler): Matchmaker / Panditji! Ye dekhta hai kis worker node par free CPU/RAM hai aur pod ko us node par assign karta hai.",
            "4. Controller Manager: Policeman! Ye har samay check karta rehta hai: 'Maine 3 pods bole the, kya 3 chal rahe hain? Agar 1 mar gaya to turant naya banwao!'"
          ],
          "diagram": "+-------------------------------------------------------------------------+\n|                       KUBERNETES MASTER NODE (CONTROL PLANE)            |\n+-------------------------------------------------------------------------+\n|                                                                         |\n|   [ Developer (kubectl) ] ===> [ kube-apiserver (Port 6443) ]           |\n|                                          |                              |\n|         +--------------------------------+--------------------+         |\n|         |                                |                    |         |\n|         v                                v                    v         |\n|   [ etcd DB ]                  [ kube-scheduler ]    [ Controller Mgr ] |\n|   (Cluster State Storage)      (Node Assignment)     (Desired State)    |\n+-------------------------------------------------------------------------+"
        },
        {
          "heading": "2. Worker Node Components on Board",
          "hindiNote": "Worker Node par actual kaam kaise hota hai:",
          "points": [
            "1. Kubelet: Worker node ka Captain. Master se order leta hai aur containerd ko bolta hai 'Pod chalao'. Agar pod mar jaye to Master ko report karta hai.",
            "2. Container Runtime (containerd / Docker): Asli engine jo image pull karke container ko start karta hai.",
            "3. Kube-proxy: Traffic cop! Network routing aur iptables manage karta hai taaki internet users pod tak pahunch sakein."
          ],
          "diagram": "+-------------------------------------------------------------------------+\n|                         WORKER NODE (MINION)                            |\n+-------------------------------------------------------------------------+\n|                                                                         |\n|   [ kubelet ] <==== Reports / Orders ====> [ kube-apiserver on Master ] |\n|        |                                                                |\n|        v                                                                |\n|   [ Container Runtime (containerd) ] ===> [ Pod 1 ] [ Pod 2 ]           |\n|                                                                         |\n|   [ kube-proxy ] ===> Manages iptables / NodePort Network Traffic       |\n+-------------------------------------------------------------------------+"
        }
      ]
    },
    "architecture": "kubectl ---> kube-apiserver ---> etcd + scheduler + controller-mgr ---> worker kubelet ---> containerd ---> Running Pods",
    "commandsOrSteps": [
      "kubectl get componentstatuses (Inspect health of controller-manager, scheduler, etcd)",
      "kubectl get nodes -o wide (View all cluster nodes and internal IPs)"
    ],
    "examTips": "CKA Core Question: Only kube-apiserver communicates directly with etcd. No other control plane or worker component ever accesses etcd directly.",
    "interviewQuestions": "Q: What happens internally when you run 'kubectl run mypod --image=nginx'?\nA: 1) kubectl sends REST request to kube-apiserver. 2) apiserver validates credentials and writes pod specification to etcd. 3) kube-scheduler detects unassigned pod, picks suitable node, and notifies apiserver. 4) apiserver updates etcd with node binding. 5) kubelet on target node detects scheduled pod, orders containerd to pull image and launch container. 6) kubelet reports running status back to apiserver.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Master vs Worker Node Internals & Component Deep Dive",
      "scenario": "Ek hospital me do tarah ke log hote hain: Doctors aur Management jo reception par patient record dekhte hain aur schedule banate hain (Master Node Control Plane), aur Nurses/Wards jo actual patient care provide karte hain (Worker Nodes). Agar doctor hi injection lagane lag jaye ya nurse akele discharge policy banane lage toh chaos ho jayega! Is lab me hum Master aur Worker ke exact roles ko dissect karenge.",
      "objective": "Deep-dive into K8s internal mechanics: Describe master node attributes, view static pod manifests under `/etc/kubernetes/manifests`, inspect the `etcd` distributed key-value store, and check `kubelet` agent service logs on worker nodes.",
      "duration": "20 Mins",
      "cost": "100% Free",
      "difficulty": "Intermediate",
      "diagram": "+--------------------------------------------------------------+\n| Master Node (/etc/kubernetes/manifests/)                     |\n|  [ kube-apiserver.yaml ]                                     |\n|  [ kube-scheduler.yaml ]                                     |\n|  [ kube-controller-manager.yaml ]                            |\n|  [ etcd.yaml (Stores all cluster state on port 2379) ]       |\n|                                                              |\n| Worker Node                                                  |\n|  [ systemd: kubelet.service ] <---> Talk to API Server       |\n|  [ systemd: containerd.service ] <---> Run Container Shims   |\n|  [ kube-proxy iptables rules ] <---> Route Service Traffic   |\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Inspect Master Node Taints & Schedulability",
          "laymanExplanation": "Master node par ek security tag (Taint) laga hota hai taaki aam user applications master node par schedule hokar uska CPU/RAM na khaa jayein.",
          "consoleAction": "Terminal inspection.",
          "command": "kubectl describe node $(kubectl get nodes -l node-role.kubernetes.io/control-plane -o jsonpath='{.items[0].metadata.name}') | grep -A 5 Taints",
          "commandExplanation": "Inspects the `node-role.kubernetes.io/control-plane:NoSchedule` taint which prevents regular application pods from running on master nodes.",
          "expectedOutput": "Taints:             node-role.kubernetes.io/control-plane:NoSchedule\nLogging:            ...\nProviderID:         ...",
          "verification": "Confirm 'NoSchedule' taint is present on the control plane node."
        },
        {
          "stepNum": 2,
          "title": "Inspect Master Static Pod Manifests on Disk",
          "laymanExplanation": "Master node ke hard drive par jaakar dekhna ki K8s ke internal core pods bina kisi deployment ke kaise auto-start hote hain.",
          "consoleAction": "SSH into master node.",
          "command": "sudo ls -la /etc/kubernetes/manifests/",
          "commandExplanation": "The local kubelet on the master node continuously watches this directory. Any YAML placed here is automatically launched as a high-priority Static Pod.",
          "expectedOutput": "-rw------- 1 root root 2380 etcd.yaml\n-rw------- 1 root root 3850 kube-apiserver.yaml\n-rw------- 1 root root 3380 kube-controller-manager.yaml\n-rw------- 1 root root 1440 kube-scheduler.yaml",
          "verification": "Notice all 4 core control-plane components exist as local static pod YAMLs."
        },
        {
          "stepNum": 3,
          "title": "Check Worker Node Kubelet Daemon Health",
          "laymanExplanation": "Worker node ka captain 'kubelet' hota hai. Hum check karte hain ki kubelet systemd service active aur running hai ya nahi.",
          "consoleAction": "SSH into worker node.",
          "command": "systemctl status kubelet --no-pager",
          "commandExplanation": "Kubelet is the only major Kubernetes component that runs as a native systemd host service rather than as a containerized pod.",
          "expectedOutput": "● kubelet.service - kubelet: The Kubernetes Node Agent\n     Loaded: loaded (/usr/lib/systemd/system/kubelet.service)\n     Active: active (running)",
          "verification": "Verify status is 'active (running)'."
        }
      ],
      "simulator": {
        "welcomeMessage": "Kubernetes Master & Worker Internals Sandbox",
        "commands": {
          "kubectl get nodes": "NAME          STATUS   ROLES           AGE   VERSION\nk8s-control   Ready    control-plane   3d    v1.28.2\nk8s-node-1    Ready    <none>          3d    v1.28.2",
          "sudo ls /etc/kubernetes/manifests/": "etcd.yaml  kube-apiserver.yaml  kube-controller-manager.yaml  kube-scheduler.yaml",
          "systemctl status kubelet": "● kubelet.service - kubelet: The Kubernetes Node Agent\n   Active: active (running) since Wed 2026-09-24 10:00:00 UTC\n   Main PID: 1204 (kubelet)"
        }
      },
      "troubleshooting": [
        {
          "issue": "Worker node status is 'NotReady'",
          "cause": "Container Network Interface (CNI) plugin (like Calico or Flannel) is not installed or kubelet service crashed.",
          "solution": "Check CNI pods using `kubectl get pods -n kube-system` or inspect kubelet logs with `journalctl -u kubelet -xe`."
        }
      ],
      "cleanup": [
        "# Read-only inspection lab. No teardown required."
      ]
    }
  },
  {
    "id": 3,
    "lecNum": 3,
    "videoId": "ftrAFHL6w2c",
    "youtubeUrl": "https://www.youtube.com/watch?v=ftrAFHL6w2c",
    "rawTitle": "Setup Kubernetes Master and Worker Node on AWS-Hindi/Urdu |Lec-47  |Install Kubernetes step by step",
    "title": "Lec 3: Setting Up K8s Master & Worker Nodes on AWS EC2 with Kubeadm",
    "cleanTitle": "Setting Up K8s Master & Worker Nodes on AWS EC2 with Kubeadm",
    "duration": "1:05:32",
    "moduleId": 2,
    "moduleName": "K8s Cluster Setup & Core Workloads (Pod, RS & Jobs)",
    "moduleBadge": "Cluster & Pods",
    "color": "#0EA5E9",
    "icon": "server",
    "hindiSummary": "Is lecture me AWS EC2 instances (Ubuntu 20.04) par scratch se Kubeadm tool ka use karke live production multi-node Kubernetes cluster setup karna sikhaya gaya hai. Master node ke liye minimum 2 vCPU aur 4GB RAM (t2.medium) required hoti hai. Sabse pehle swap off kiya jata hai, containerd runtime install hota hai, phir kubeadm, kubelet aur kubectl install hote hain. Master par 'kubeadm init' chala kar Calico CNI network plugin apply kiya jata hai, aur worker nodes par 'kubeadm join' command chala kar cluster se connect kiya jata hai.",
    "englishSummary": "Production-grade deployment of a multi-node Kubernetes cluster on AWS Cloud compute infrastructure using Kubeadm. Step-by-step guidance on EC2 security group rules (ports 6443, 2379-2380, 10250-10252), disabling swap, configuring containerd with systemd cgroup drivers, installing Kubernetes toolchain (kubeadm, kubelet, kubectl), initializing control plane, applying Calico Pod Network Add-on (CNI), and joining worker nodes.",
    "keyConcepts": [
      "Kubeadm Utility: The official Kubernetes project tool designed to bootstrap secure, best-practice conformant K8s clusters.",
      "Hardware Minimums: Control plane master requires at least 2 vCPUs and 2GB RAM (t2.medium on AWS). Kubelet will fail preflight checks if swap is enabled.",
      "CNI Network Plugin (Calico/Flannel): Kubernetes nodes remain in 'NotReady' status until a Container Network Interface (CNI) plugin is installed to enable pod-to-pod cross-node routing.",
      "Kubeconfig File (`~/.kube/config`): Client credentials certificate allowing kubectl CLI to authenticate with the API server.",
      "Cluster Join Token: Secure cryptographic bootstrap token used by worker nodes to authenticate and securely join the control plane."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 03 - Cluster Setup)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "1:05:32",
      "summary": "Step-by-step cluster setup roadmap drawn on the whiteboard with exact AWS security group ports and commands.",
      "sections": [
        {
          "heading": "1. AWS EC2 Prerequisites & Security Group Ports on Board",
          "hindiNote": "Master aur Worker ke liye AWS me kaunse ports open karne hote hain:",
          "points": [
            "Master Node: Port 6443 (API Server), Port 2379-2380 (etcd), Port 10250 (Kubelet API), Port 10259 (Scheduler), Port 10257 (Controller Manager).",
            "Worker Nodes: Port 10250 (Kubelet API), Port 30000-32767 (NodePort Services for public traffic).",
            "Instance Type: Master = t2.medium (2 vCPU, 4GB RAM). Worker = t2.micro or t2.medium."
          ],
          "diagram": "[ AWS Cloud VPC ]\n       |\n       +---> [ Master EC2 (t2.medium) ]  ===> Ports 6443, 2379-2380, 10250\n       +---> [ Worker 1 EC2 (t2.micro) ] ===> Ports 10250, 30000-32767\n       +---> [ Worker 2 EC2 (t2.micro) ] ===> Ports 10250, 30000-32767"
        },
        {
          "heading": "2. Step-by-Step Setup Flowchart on Board",
          "hindiNote": "Commands execution sequence:",
          "points": [
            "Step 1: swapoff -a (Sabhi nodes par swap disable karein).",
            "Step 2: containerd install karke systemd cgroup true karein.",
            "Step 3: kubeadm, kubelet, kubectl install karein.",
            "Step 4: Master par: sudo kubeadm init --pod-network-cidr=192.168.0.0/16",
            "Step 5: Master par kubeconfig copy karein: mkdir -p $HOME/.kube && cp -i /etc/kubernetes/admin.conf $HOME/.kube/config",
            "Step 6: Calico CNI apply karein: kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml",
            "Step 7: Worker par: sudo kubeadm join <master-ip>:6443 --token ... (Nodes ready!)"
          ],
          "diagram": "Master:  [ kubeadm init ] ===> [ Install Calico CNI ] ===> Master 'Ready'\n                                                             ^\nWorkers: [ kubeadm join <token> ] ===========================+ ===> Cluster 'Ready'!"
        }
      ]
    },
    "architecture": "AWS EC2 Master (t2.medium:6443) <=== Calico Overlay Network (192.168.0.0/16) ===> AWS EC2 Workers (NodePort 30000-32767)",
    "commandsOrSteps": [
      "sudo swapoff -a && sudo sed -i '/ swap / s/^\\(.*\\)$/#\\1/g' /etc/fstab",
      "sudo kubeadm init --pod-network-cidr=192.168.0.0/16",
      "mkdir -p $HOME/.kube && sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config && sudo chown $(id -u):$(id -g) $HOME/.kube/config",
      "kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.25.0/manifests/calico.yaml",
      "sudo kubeadm join <MASTER_IP>:6443 --token <TOKEN> --discovery-token-ca-cert-hash sha256:<HASH>",
      "kubectl get nodes"
    ],
    "examTips": "CKA Exam Gotcha: If nodes stay in 'NotReady' status right after initialization, check if your CNI network plugin (Calico/Flannel) pod is running: 'kubectl get pods -n kube-system'.",
    "interviewQuestions": "Q: Why is swap memory disabled before initializing Kubernetes with kubeadm?\nA: The Kubernetes scheduler is designed to allocate pod memory with 100% determinism. If swap space is enabled, memory performance becomes unpredictable and can cause severe memory leaks and scheduler starvation, so Kubeadm enforces swapoff by default.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Production Multi-Node Cluster Setup via Kubeadm & Calico CNI on AWS EC2",
      "scenario": "Aap ek multi-story apartment building construct kar rahe hain. Pehle foundation dalti hai (OS & Container Runtime), fir architect ka central command office banta hai (Kubeadm Init on Master), fir building ke sabhi flats ke beech telephone wiring hoti hai (Calico CNI Networking), aur aakhir me residents apne flat me join karte hain (Kubeadm Join on Worker). Yeh real production setup hai!",
      "objective": "Build a real 2-node Kubernetes cluster from scratch on AWS EC2 instances: Configure Linux prerequisites (swap off, bridge netfilter), initialize master via `kubeadm init`, install Calico Pod CNI networking, and join worker node.",
      "duration": "30 Mins",
      "cost": "AWS Free Tier (2x t2.medium or t3.medium recommended for control plane)",
      "difficulty": "Advanced",
      "diagram": "+--------------------------------------------------------------+\n| AWS VPC (172.31.0.0/16)                                      |\n|                                                              |\n|  [ Master Node: t3.medium ] (172.31.10.100)                  |\n|  1. swapoff -a                                               |\n|  2. kubeadm init --pod-network-cidr=192.168.0.0/16           |\n|  3. kubectl apply -f calico.yaml                             |\n|  4. Generate join token                                      |\n|                                                              |\n|                               ^                              |\n|         kubeadm join token    | (Port 6443)                  |\n|                               v                              |\n|                                                              |\n|  [ Worker Node: t3.small ] (172.31.10.101)                   |\n|  1. swapoff -a                                               |\n|  2. kubeadm join 172.31.10.100:6443 --token abc.123...       |\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Disable Linux Swap & Configure Kernel Overlay Modules",
          "laymanExplanation": "Kubernetes memory management ke liye swap partition ko strictly disable karna padta hai taaki predictable pod memory limits enforce ho sakein.",
          "consoleAction": "Run on BOTH Master and Worker EC2 instances.",
          "command": "sudo swapoff -a && sudo sed -i '/ swap / s/^\\(.*\\)$/#\\1/g' /etc/fstab\ncat <<EOF | sudo tee /etc/modules-load.d/k8s.conf\noverlay\nbr_netfilter\nEOF\nsudo modprobe overlay && sudo modprobe br_netfilter",
          "commandExplanation": "`swapoff -a` disables swap immediately. `sed` comments it in `/etc/fstab` for reboot persistence. `br_netfilter` allows bridged IPv4 packets to be filtered by iptables.",
          "expectedOutput": "[Kernel modules loaded successfully]",
          "verification": "Run `free -h` and verify Swap line shows total '0B'."
        },
        {
          "stepNum": 2,
          "title": "Configure Sysctl Packet Forwarding Rules",
          "laymanExplanation": "Linux kernel ko bolna ki containers ke network packets ko bina drop kiye forward kare.",
          "consoleAction": "Run on BOTH nodes.",
          "command": "cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-iptables  = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.ipv4.ip_forward                 = 1\nEOF\nsudo sysctl --system",
          "commandExplanation": "Ensures iptables correctly processes bridged traffic across pod network interfaces.",
          "expectedOutput": "net.bridge.bridge-nf-call-iptables = 1\nnet.ipv4.ip_forward = 1",
          "verification": "Check `cat /proc/sys/net/ipv4/ip_forward` prints 1."
        },
        {
          "stepNum": 3,
          "title": "Initialize Control Plane on Master Node via Kubeadm",
          "laymanExplanation": "Master node par command run karke API Server, etcd aur certificate authority ko automatically bootstrap karna.",
          "consoleAction": "Run ONLY on Master EC2 instance.",
          "command": "sudo kubeadm init --pod-network-cidr=192.168.0.0/16",
          "commandExplanation": "`kubeadm init` automates PKI generation, control plane static pods, and admin kubeconfig. `--pod-network-cidr=192.168.0.0/16` sets IP range for Calico CNI.",
          "expectedOutput": "Your Kubernetes control-plane has initialized successfully!\n\nTo start using your cluster, you need to run the following as a regular user:\n  mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config",
          "verification": "Copy the printed `kubeadm join` command at the bottom of the output for worker node."
        },
        {
          "stepNum": 4,
          "title": "Configure Regular User Kubectl Config",
          "laymanExplanation": "Master node ke admin credentials ko user ke home directory me copy karna taaki `kubectl` command kaam kare.",
          "consoleAction": "Run on Master Node terminal.",
          "command": "mkdir -p $HOME/.kube && sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config && sudo chown $(id -u):$(id -g) $HOME/.kube/config",
          "commandExplanation": "Establishes `~/.kube/config` containing client TLS certificates and cluster server endpoint.",
          "expectedOutput": "[kubeconfig created]",
          "verification": "Run `kubectl get nodes` (Master will show status 'NotReady' pending CNI installation)."
        },
        {
          "stepNum": 5,
          "title": "Deploy Calico Pod Network Add-on (CNI)",
          "laymanExplanation": "Pods ke aapas me baat karne ke liye virtual wire network (Calico) deploy karna. Iske bina nodes 'Ready' nahi hote.",
          "consoleAction": "Run on Master Node terminal.",
          "command": "kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.26.1/manifests/calico.yaml",
          "commandExplanation": "Deploys Calico DaemonSet on every node, enabling BGP IP routing and network policy enforcement.",
          "expectedOutput": "configmap/calico-config created\ndaemonset.apps/calico-node created\ndeployment.apps/calico-kube-controllers created",
          "verification": "Run `kubectl get nodes`. After 30 seconds, Master node status transitions to 'Ready'!"
        },
        {
          "stepNum": 6,
          "title": "Join Worker Node into Cluster",
          "laymanExplanation": "Worker node ko Master node ke sath attach karna.",
          "consoleAction": "Run on Worker Node terminal (with sudo).",
          "command": "sudo kubeadm join <master-ip>:6443 --token <token> --discovery-token-ca-cert-hash sha256:<hash>",
          "commandExplanation": "Authenticates worker node with bootstrap token, fetches cluster CA cert, registers node with API server, and starts kubelet.",
          "expectedOutput": "This node has joined the cluster:\n* Certificate signing request was sent to apiserver and approval was received.\n* The Kubelet was informed of the new secure connection details.",
          "verification": "Run `kubectl get nodes` on Master. Both Master and Worker nodes appear with status 'Ready'!"
        }
      ],
      "simulator": {
        "welcomeMessage": "Kubeadm Multi-Node Cluster Setup Sandbox",
        "commands": {
          "sudo kubeadm init --pod-network-cidr=192.168.0.0/16": "[init] Using Kubernetes version: v1.28.2\n[certs] Generating PKI certificates\n[etcd] Creating static Pod manifest for local etcd\n[control-plane] Creating static Pod manifests for API server\n[bootstrap-token] Creating default bootstrap token\nYour Kubernetes control-plane has initialized successfully!",
          "kubectl apply -f calico.yaml": "daemonset.apps/calico-node created\ndeployment.apps/calico-kube-controllers created\n[OK] Calico CNI deployed across nodes.",
          "kubectl get nodes": "NAME           STATUS   ROLES           AGE   VERSION\nk8s-master     Ready    control-plane   2m    v1.28.2\nk8s-worker-1   Ready    <none>          30s   v1.28.2\n[OK] Multi-node cluster fully initialized!"
        }
      },
      "troubleshooting": [
        {
          "issue": "[ERROR Swap]: running with swap on is not supported. Please disable swap",
          "cause": "Linux swap partition is currently active.",
          "solution": "Run `sudo swapoff -a` or add `--ignore-preflight-errors=Swap` to kubeadm init."
        },
        {
          "issue": "Worker join token expired (Default expiry 24 hours)",
          "cause": "Tokens generated during kubeadm init expire after 24 hours.",
          "solution": "Generate a fresh join command on Master by running `kubeadm token create --print-join-command`."
        }
      ],
      "cleanup": [
        "sudo kubeadm reset -f # Cleans up cluster state on node",
        "sudo rm -rf /etc/cni/net.d $HOME/.kube"
      ]
    }
  },
  {
    "id": 4,
    "lecNum": 4,
    "videoId": "dQSQELeC2A4",
    "youtubeUrl": "https://www.youtube.com/watch?v=dQSQELeC2A4",
    "rawTitle": "Labels,Selectors,ReplicationController and replicaset in Kubernetes-Hindi/Urdu| Lec-49 | Minikube",
    "title": "Lec 4: Labels, Selectors, ReplicationController & ReplicaSets",
    "cleanTitle": "Labels, Selectors, ReplicationController & ReplicaSets",
    "duration": "1:54:27",
    "moduleId": 2,
    "moduleName": "K8s Cluster Setup & Core Workloads (Pod, RS & Jobs)",
    "moduleBadge": "Cluster & Pods",
    "color": "#0EA5E9",
    "icon": "tags",
    "hindiSummary": "Labels key-value pairs hote hain jo pods, services aur deployments par lagaye jate hain (jaise 'app: nginx', 'env: prod'). Selectors in labels ko filter karke unhe control karte hain. Is lecture me ReplicationController (legacy controller) aur ReplicaSet (modern controller) ka difference samjhaya gaya hai. ReplicaSet 'set-based selectors' (in, notin, exists) support karta hai. Saath hi YAML manifest likhna, 'replicas: 3' set karke auto-healing verify karna (ek pod delete karne par turant naya pod banna) practical sikhaya gaya hai.",
    "englishSummary": "Deep architectural exploration of Kubernetes metadata grouping and workload controllers. Understanding Labels (key-value tags attached to API objects) and Selectors (equality-based vs set-based filtering expressions). Comparative analysis of ReplicationController versus modern ReplicaSet. Constructing declarative YAML manifests, scaling pod replicas dynamically (`kubectl scale`), and witnessing self-healing reconciliation loops in action.",
    "keyConcepts": [
      "Labels: Key-value metadata tags attached to objects (e.g. `tier: frontend`, `release: stable`) for grouping and filtering.",
      "Label Selectors: The query mechanism used by Controllers and Services to bind to specific sets of pods.",
      "Equality-Based Selectors: Matching exact values (e.g. `environment = production`, `tier != backend`).",
      "Set-Based Selectors: Expressive set logic supported by ReplicaSets (`environment in (production, staging)`, `tier exists`).",
      "ReplicaSet Reconciler: Continuously counts active running pods matching its selector and launches or terminates pods to match `spec.replicas`."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 04 - Labels & ReplicaSets)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "1:54:27",
      "summary": "Whiteboard diagram illustrating how ReplicaSet uses label selectors like a searchlight to find, count, and manage pods across worker nodes.",
      "sections": [
        {
          "heading": "1. Labels & Selectors Searchlight Analogy on Board",
          "hindiNote": "Board par samjhaya gaya ki ReplicaSet apne pods ko kaise pehchanta hai:",
          "points": [
            "Pods par Label laga hota hai: 'app: web, env: prod'.",
            "ReplicaSet ke paas Selector hota hai: 'matchLabels: { app: web }'.",
            "Searchlight: ReplicaSet cluster me searchlight maarta hai: 'Jin pods par app:web likha hai wo mere hain! Agar 3 se kam mile to naya banao, 3 se zyada mile to extra ko delete karo!'"
          ],
          "diagram": "[ ReplicaSet (spec.replicas: 3, selector: app=web) ]\n           | === (Selector Query) ===>\n           +---------------------------------------------+\n           | [ Pod 1 (app: web) ]  ---> Healthy Running  |\n           | [ Pod 2 (app: web) ]  ---> Healthy Running  |\n           | [ Pod 3 (app: web) ]  ---> Terminated!      |\n           +---------------------------------------------+\n                                   |\n                                   v\n         [ ReplicaSet Immediately Launches Pod 4 (app: web)! ]"
        },
        {
          "heading": "2. ReplicationController vs ReplicaSet Comparison on Board",
          "hindiNote": "Dono me kya antar hai:",
          "points": [
            "ReplicationController: Purana method hai. Sirf barabar (=, !=) check karta hai.",
            "ReplicaSet: Naya aur advanced hai. Set operations ('In', 'NotIn', 'Exists') support karta hai. Deployments background me ReplicaSet ka use karte hain."
          ],
          "diagram": "ReplicationController:  selector: { app: web }                  (Only equality)\nReplicaSet:             matchExpressions: [ {key: env, operator: In, values: [prod, stage]} ]"
        }
      ]
    },
    "architecture": "ReplicaSet Controller (spec.replicas: 3) <--- matchLabels: app=web ---> [ Pod A ] [ Pod B ] [ Pod C ]",
    "commandsOrSteps": [
      "kubectl get pods --show-labels",
      "kubectl get pods -l env=prod,tier=backend",
      "kubectl apply -f replicaset.yaml",
      "kubectl scale rs my-replicaset --replicas=5",
      "kubectl delete pod <POD_NAME> (Watch ReplicaSet launch replacement in 1 second!)"
    ],
    "examTips": "CKA Exam Tip: In modern Kubernetes, you rarely create a ReplicaSet directly in YAML. You always create a 'Deployment', which automatically creates and manages underlying ReplicaSets for you.",
    "interviewQuestions": "Q: What is the difference between ReplicationController and ReplicaSet?\nA: ReplicationController only supports equality-based selectors (e.g. tier = frontend). ReplicaSet is the newer generation workload controller that supports expressive set-based selectors using operators like 'In', 'NotIn', and 'Exists'.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Writing Pod Manifests, Multi-Container Pods & Imperative vs Declarative Ops",
      "scenario": "Pod Kubernetes ki sabse basic atomic building block hoti hai. Jaise ek pea pod (matar ki phali) ke andar 1 se 3 daane ho sakte hain jo ek hi chhilke aur pani ko share karte hain, waise hi ek Pod ke andar 1 ya multiple tightly-coupled containers ho sakte hain jo same Network IP aur Storage volume share karte hain!",
      "objective": "Master both Imperative CLI generation (`kubectl run`) and Declarative production YAML manifests (`kubectl apply -f`). Deploy a multi-container pod with an application container and a sidecar helper, inspect shared localhost networking, and view logs.",
      "duration": "20 Mins",
      "cost": "100% Free",
      "difficulty": "Complete Beginner",
      "diagram": "+--------------------------------------------------------------+\n| KUBERNETES POD ('web-and-logger')                            |\n| Pod IP: 192.168.1.45 (Single Shared IP Address)              |\n|                                                              |\n|  +---------------------------+   +------------------------+  |\n|  | Container 1: App Server   |   | Container 2: Sidecar   |  |\n|  | Nginx on Port 80          |   | Log shipper / monitor  |  |\n|  +---------------------------+   +------------------------+  |\n|                |                              |              |\n|                +---- Shared Localhost:80 -----+              |\n|                +---- Shared Volume /var/log --+              |\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Generate Starter YAML Imperatively with Dry-Run",
          "laymanExplanation": "Bina kisi pod ko launch kiye, kubectl se ek clean YAML template generate karwana taaki manually 20 lines na likhni padein.",
          "consoleAction": "Terminal command execution.",
          "command": "kubectl run my-nginx-pod --image=nginx:alpine --port=80 --dry-run=client -o yaml > nginx-pod.yaml",
          "commandExplanation": "--dry-run=client: Instructs kubectl not to send the request to the cluster, but only evaluate locally.\n-o yaml: Formats the evaluated spec as valid Kubernetes YAML manifest.",
          "expectedOutput": "[nginx-pod.yaml generated]",
          "verification": "Run `cat nginx-pod.yaml` and inspect `apiVersion`, `kind: Pod`, `metadata`, and `spec`."
        },
        {
          "stepNum": 2,
          "title": "Enhance Manifest with Resource Limits (Production Practice)",
          "laymanExplanation": "Pod par CPU aur RAM ki boundary set karna taaki wo pure server ki memory na crash kare.",
          "consoleAction": "Edit `nginx-pod.yaml` using nano or vim.",
          "command": "cat << 'EOF' > nginx-pod.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: my-nginx-pod\n  labels:\n    app: web-frontend\n    tier: production\nspec:\n  containers:\n  - name: nginx-web\n    image: nginx:alpine\n    ports:\n    - containerPort: 80\n    resources:\n      requests:\n        memory: \"64Mi\"\n        cpu: \"50m\"\n      limits:\n        memory: \"128Mi\"\n        cpu: \"100m\"\nEOF",
          "commandExplanation": "requests: Minimum resources guaranteed by scheduler.\nlimits: Maximum ceiling enforced by Linux cgroups (OOMKilled if memory exceeds 128Mi).",
          "expectedOutput": "[nginx-pod.yaml updated]",
          "verification": "Check YAML syntax with `cat nginx-pod.yaml`."
        },
        {
          "stepNum": 3,
          "title": "Deploy the Pod Declaratively",
          "laymanExplanation": "Declarative tareeke se pod ko cluster me apply karna (`kubectl apply`).",
          "consoleAction": "Terminal command.",
          "command": "kubectl apply -f nginx-pod.yaml",
          "commandExplanation": "`kubectl apply` uses 3-way merge patch between client manifest, last-applied configuration, and live cluster state.",
          "expectedOutput": "pod/my-nginx-pod created",
          "verification": "Run `kubectl get pods -l app=web-frontend` and verify STATUS is 'Running'."
        },
        {
          "stepNum": 4,
          "title": "Inspect Deep Pod Metadata & Events",
          "laymanExplanation": "Pod ke birth certificate aur doctor report ki tarah check karna ki scheduler ne use kis node par bheja aur container kab start hua.",
          "consoleAction": "Terminal command.",
          "command": "kubectl describe pod my-nginx-pod",
          "commandExplanation": "Dumps detailed state, Assigned Node, IP address, Volume mounts, and chronologically ordered lifecycle Events (Scheduled, Pulled, Created, Started).",
          "expectedOutput": "Name:         my-nginx-pod\nNode:         k8s-worker-1/172.31.25.4\nStatus:       Running\nIP:           192.168.1.45\nEvents:\n  Type    Reason     Age   From               Message\n  ----    ------     ----  ----               -------\n  Normal  Scheduled  10s   default-scheduler  Successfully assigned default/my-nginx-pod to k8s-worker-1\n  Normal  Pulling    9s    kubelet            Pulling image \"nginx:alpine\"\n  Normal  Pulled     7s    kubelet            Successfully pulled image \"nginx:alpine\"\n  Normal  Created    7s    kubelet            Created container nginx-web\n  Normal  Started    6s    kubelet            Started container nginx-web",
          "verification": "Verify all Events show 'Normal' without warnings or crash loops."
        },
        {
          "stepNum": 5,
          "title": "Port-Forward Traffic to Pod for Local Testing",
          "laymanExplanation": "Apne local laptop ke browser se pod ke andar direct connection banana testing ke liye bina kisi external load balancer ke.",
          "consoleAction": "Terminal command.",
          "command": "kubectl port-forward pod/my-nginx-pod 8080:80 & sleep 1 && curl http://localhost:8080",
          "commandExplanation": "`kubectl port-forward` creates a secure bi-directional TCP tunnel through the Kubernetes API Server directly to the pod's port 80.",
          "expectedOutput": "Forwarding from 127.0.0.1:8080 -> 80\n<!DOCTYPE html><html><head><title>Welcome to nginx!</title></head>...</html>",
          "verification": "Confirm HTML response from pod."
        }
      ],
      "simulator": {
        "welcomeMessage": "Kubernetes Pod Lifecycle & Declarative Ops Sandbox",
        "commands": {
          "kubectl apply -f nginx-pod.yaml": "pod/my-nginx-pod created\n[OK] Pod scheduled on healthy worker node.",
          "kubectl get pods -o wide": "NAME           READY   STATUS    RESTARTS   AGE   IP             NODE\nmy-nginx-pod   1/1     Running   0          15s   192.168.1.45   k8s-worker-1",
          "kubectl describe pod my-nginx-pod": "Name: my-nginx-pod\nStatus: Running\nIP: 192.168.1.45\nContainers: nginx-web (Image: nginx:alpine)\nEvents: Scheduled -> Pulled -> Created -> Started",
          "curl http://localhost:8080": "<!DOCTYPE html><html><head><title>Welcome to nginx!</title></head><body><h1>Welcome to nginx!</h1></body></html>",
          "kubectl delete pod my-nginx-pod": "pod \"my-nginx-pod\" deleted\n[OK] Cleaned up pod."
        }
      },
      "troubleshooting": [
        {
          "issue": "Pod status: CrashLoopBackOff",
          "cause": "The container process exited immediately with an error (e.g. invalid syntax in command or missing config file).",
          "solution": "Run `kubectl logs my-nginx-pod` or `kubectl describe pod my-nginx-pod` to view the crash error message."
        },
        {
          "issue": "Pod status: ImagePullBackOff / ErrImagePull",
          "cause": "Image name or tag was misspelled, or image requires private registry credentials.",
          "solution": "Verify image tag on Docker Hub and ensure spelling is exact (e.g. `nginx:alpine`)."
        }
      ],
      "cleanup": [
        "kubectl delete pod my-nginx-pod",
        "rm -f nginx-pod.yaml"
      ]
    }
  },
  {
    "id": 5,
    "lecNum": 5,
    "videoId": "BqHAoaXbz1A",
    "youtubeUrl": "https://www.youtube.com/watch?v=BqHAoaXbz1A",
    "rawTitle": "Kubernetes Jobs,init container and pod lifecycle-Hindi/Urdu | Lec-56 | Complete Kubernetes series",
    "title": "Lec 5: Pod Lifecycle, Init Containers & Batch Jobs / CronJobs",
    "cleanTitle": "Pod Lifecycle, Init Containers & Batch Jobs / CronJobs",
    "duration": "1:15:15",
    "moduleId": 2,
    "moduleName": "K8s Cluster Setup & Core Workloads (Pod, RS & Jobs)",
    "moduleBadge": "Cluster & Pods",
    "color": "#0EA5E9",
    "icon": "clock-rotate-left",
    "hindiSummary": "Normal pods hamesha chalte rehne ke liye banaye jate hain (web server, api), lekin batch tasks ke liye hume aisa container chahiye jo kaam khatam hone par band ho jaye. Is lecture me Kubernetes Jobs aur CronJobs sikhaye gaye hain jo run-to-completion model par kaam karte hain. Saath hi Init Containers ka deep dive sikhaya gaya hai - ye wo containers hote hain jo main application container ke start hone se PEHLE successfully complete hone chahiye (jaise DB migration ya database ready hone ka wait karna).",
    "englishSummary": "Architectural breakdown of Pod Lifecycles, Phases (Pending, Running, Succeeded, Failed), and specialized workload controllers. Understanding Init Containers that execute sequentially to completion before main application containers are spawned. Deep dive into Kubernetes Batch Jobs (run-to-completion workloads) and CronJobs (scheduled recurring tasks). Error backoff limits and completion policies.",
    "keyConcepts": [
      "Pod Lifecycle Phases: Pending (waiting for scheduling/images) -> Running (at least one container active) -> Succeeded (completed exit 0) -> Failed (exit non-zero).",
      "Init Containers: Specialized initialization containers that execute and exit before primary app containers launch. If an init container fails, K8s restarts the pod until it succeeds.",
      "Batch Jobs: Designed for short-lived tasks (data ETL, report generation, DB migrations) that run to completion rather than running indefinitely.",
      "CronJobs: Automates recurring batch jobs using standard 5-field cron syntax (e.g. `0 1 * * *` for nightly backups).",
      "BackoffLimit: Number of retries before marking a batch Job as permanently failed."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 05 - Init Containers & Jobs)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "1:15:15",
      "summary": "Board diagrams illustrating the sequential startup order of Init Containers and the run-to-completion lifecycle of Kubernetes Jobs.",
      "sections": [
        {
          "heading": "1. Init Container Execution Flow on Board",
          "hindiNote": "Board par Init Container ka sequence samjhaya gaya:",
          "points": [
            "Step 1: Pod launch hota hai.",
            "Step 2: Init Container 1 chalta hai (e.g. 'Wait for MySQL DB to be ready').",
            "Step 3: Init Container 2 chalta hai (e.g. 'Download configuration files from S3').",
            "Step 4: Dono Init containers ke successfully complete hone ke baad hi Main App Container start hoga!",
            "Agar DB down hai to Init container block rahega aur main app kabhi crash nahi hogi!"
          ],
          "diagram": "[ Pod Initialized ]\n       |\n       v\n[ Init Container 1 (Wait for DB) ] ===> Exit Code 0 (Success)\n       |\n       v\n[ Init Container 2 (Download S3 Config) ] ===> Exit Code 0 (Success)\n       |\n       v\n[ MAIN APPLICATION CONTAINER STARTS ] (Nginx / Python API)"
        },
        {
          "heading": "2. Web Server vs Kubernetes Job on Board",
          "hindiNote": "Normal Pod aur Job Pod me antar:",
          "points": [
            "Web Server Pod (Deployment): Hamesha 24x7 chalna chahiye. Agar exit hua to K8s use error samajhkar restart kar dega.",
            "Batch Job Pod (Job): Ek baar calculation karke band hona chahiye. Agar exit code 0 hua to K8s use 'Completed' mark karega, restart nahi karega!"
          ],
          "diagram": "Deployment Pod: [ Runs 24x7 ] ---> Crashes? ---> K8s Restarts Immediately\nJob Pod:        [ Runs Task ] ---> Exit 0 ---> K8s Marks 'Succeeded' (No Restart)"
        }
      ]
    },
    "architecture": "Pod Initialization ---> Init Containers (Sequential Run) ---> Main App Containers (Continuous Run)",
    "commandsOrSteps": [
      "kubectl apply -f init-pod.yaml",
      "kubectl get pod -w (Observe status changing from Init:0/1 to PodInitializing to Running)",
      "kubectl apply -f job.yaml",
      "kubectl get jobs",
      "kubectl get cronjobs"
    ],
    "examTips": "CKA Exam Tip: An Init Container cannot have livenessProbe, readinessProbe, or startupProbe because it must run to completion before the pod can become ready.",
    "interviewQuestions": "Q: What is the main use case for an Init Container in Kubernetes?\nA: Init containers are used to perform prerequisites before application startup, such as running database schema migrations, warming caches, seeding security certificates, or waiting for external dependent microservices to become healthy.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: ReplicationController, ReplicaSets & Automated Self-Healing",
      "scenario": "Aap ek 24x7 security guard company chalate hain jisme client ka rule hai: 'Gate par hamesha theek 3 guards hone chahiye'. Agar ek guard bimar hokar chala jaye, toh supervisor (ReplicaSet Controller) bina kisi delay ke turant backup guard bhejkar count ko wapas 3 kar deta hai. Is lab me hum ek guard (pod) ko zabardasti delete karenge aur dekhenge ki ReplicaSet use 1 second me kaise recreate karta hai!",
      "objective": "Understand why bare Pods must never be deployed directly in production. Deploy a declarative ReplicaSet managing 3 identical pod replicas, verify label selector binding, manually delete a healthy pod, and witness instantaneous self-healing.",
      "duration": "20 Mins",
      "cost": "100% Free",
      "difficulty": "Intermediate",
      "diagram": "+--------------------------------------------------------------+\n| REPLICASET CONTROLLER: 'web-replicaset'                      |\n| Desired Replicas: 3 | Selector: app=frontend                 |\n|                                                              |\n|        [ Pod 1 (Active) ]      [ Pod 2 (Active) ]            |\n|                                                              |\n|        [ Pod 3 ] ---> MANUALLY KILLED / DELETED!             |\n|             |                                                |\n|             v                                                |\n|  Current Replicas = 2 != Desired Replicas = 3                |\n|             |                                                |\n|             v                                                |\n|  [ ReplicaSet Reconcile Loop Instantly Launches Pod 4! ]     |\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Write ReplicaSet Manifest with Label Selectors",
          "laymanExplanation": "YAML file likhna jisme hum K8s ko bolenge ki 'hamesha 3 replicas chalte rehne chahiye jinka label `app: frontend` ho'.",
          "consoleAction": "Create `replicaset.yaml` in terminal.",
          "command": "cat << 'EOF' > replicaset.yaml\napiVersion: apps/v1\nkind: ReplicaSet\nmetadata:\n  name: web-replicaset\n  labels:\n    app: frontend\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: frontend\n  template:\n    metadata:\n      labels:\n        app: frontend\n    spec:\n      containers:\n      - name: nginx-app\n        image: nginx:alpine\n        ports:\n        - containerPort: 80\nEOF",
          "commandExplanation": "replicas: 3: Target count.\nselector.matchLabels: Determines which pods belong to this ReplicaSet.\ntemplate: The blueprint used to create new pods.",
          "expectedOutput": "[replicaset.yaml created]",
          "verification": "Check syntax with `cat replicaset.yaml`."
        },
        {
          "stepNum": 2,
          "title": "Deploy ReplicaSet and Observe 3 Pods Starting",
          "laymanExplanation": "Manifest apply karte hi K8s scheduler 3 alag-alag pods launch karega.",
          "consoleAction": "Terminal command execution.",
          "command": "kubectl apply -f replicaset.yaml && kubectl get replicaset && kubectl get pods -l app=frontend",
          "commandExplanation": "Applies spec and immediately lists the ReplicaSet and its 3 scheduled pods.",
          "expectedOutput": "replicaset.apps/web-replicaset created\nNAME             DESIRED   CURRENT   READY   AGE\nweb-replicaset   3         3         3       5s\nNAME                   READY   STATUS    RESTARTS   AGE\nweb-replicaset-abc1    1/1     Running   0          5s\nweb-replicaset-def2    1/1     Running   0          5s\nweb-replicaset-ghi3    1/1     Running   0          5s",
          "verification": "Verify READY column shows '3/3' in ReplicaSet."
        },
        {
          "stepNum": 3,
          "title": "Simulate Node Crash / Disaster by Deleting a Pod",
          "laymanExplanation": "Ek chalti hui pod ko forcibly delete karna aur dekhna ki kya website down hoti hai ya K8s use bacha leta hai.",
          "consoleAction": "Terminal command.",
          "command": "POD_TO_KILL=$(kubectl get pods -l app=frontend -o jsonpath='{.items[0].metadata.name}')\necho \"Killing pod: $POD_TO_KILL\"\nkubectl delete pod $POD_TO_KILL",
          "commandExplanation": "Deletes pod 1. The ReplicaSet controller detects actual count (2) < desired count (3) and immediately calls the API server to spawn a replacement.",
          "expectedOutput": "pod \"web-replicaset-abc1\" deleted",
          "verification": "Immediately run `kubectl get pods -l app=frontend`."
        },
        {
          "stepNum": 4,
          "title": "Verify Instant Self-Healing in Real-Time",
          "laymanExplanation": "Check karna ki naya pod kitne seconds me start hua.",
          "consoleAction": "Terminal verification.",
          "command": "kubectl get pods -l app=frontend",
          "commandExplanation": "Shows that a replacement pod with a brand new hash suffix was launched within milliseconds.",
          "expectedOutput": "NAME                   READY   STATUS    RESTARTS   AGE\nweb-replicaset-def2    1/1     Running   0          45s\nweb-replicaset-ghi3    1/1     Running   0          45s\nweb-replicaset-jkl4    1/1     Running   0          2s",
          "verification": "Notice 'web-replicaset-jkl4' with AGE '2s'! Total pods remain strictly 3. Self-healing proven!"
        },
        {
          "stepNum": 5,
          "title": "Scale ReplicaSet Dynamically (Traffic Spike Handling)",
          "laymanExplanation": "Diwali ya Black Friday sale aane par 3 se badha kar 5 pods karna bina service restart kiye.",
          "consoleAction": "Terminal command.",
          "command": "kubectl scale replicaset web-replicaset --replicas=5 && kubectl get pods -l app=frontend",
          "commandExplanation": "`kubectl scale` dynamically patches the replicas count in the live cluster state.",
          "expectedOutput": "replicaset.apps/web-replicaset scaled\n5 pods running successfully!",
          "verification": "Confirm 5 active pods running."
        }
      ],
      "simulator": {
        "welcomeMessage": "ReplicaSet Self-Healing & Scaling Sandbox",
        "commands": {
          "kubectl apply -f replicaset.yaml": "replicaset.apps/web-replicaset created\n[OK] 3 pods created.",
          "kubectl get pods -l app=frontend": "NAME                   READY   STATUS    RESTARTS   AGE\nweb-replicaset-84x12   1/1     Running   0          10s\nweb-replicaset-99y34   1/1     Running   0          10s\nweb-replicaset-bb761   1/1     Running   0          10s",
          "kubectl delete pod web-replicaset-84x12": "pod \"web-replicaset-84x12\" deleted\n[ALERT] Replicas dropped to 2. Controller triggering reconciliation...",
          "kubectl scale replicaset web-replicaset --replicas=5": "replicaset.apps/web-replicaset scaled to 5 replicas.\n[OK] 2 new pods spawned instantly.",
          "kubectl delete replicaset web-replicaset": "replicaset.apps \"web-replicaset\" deleted\n[OK] Cleaned up ReplicaSet."
        }
      },
      "troubleshooting": [
        {
          "issue": "The ReplicaSet \"web-replicaset\" is invalid: spec.template.metadata.labels: Unsupported value",
          "cause": "The labels defined in `spec.template.metadata.labels` do not match the labels defined in `spec.selector.matchLabels`.",
          "solution": "Ensure both label keys and values match exactly (e.g. `app: frontend` in both places)."
        }
      ],
      "cleanup": [
        "kubectl delete replicaset web-replicaset",
        "rm -f replicaset.yaml"
      ]
    }
  },
  {
    "id": 6,
    "lecNum": 6,
    "videoId": "t3z-vkk_T6g",
    "youtubeUrl": "https://www.youtube.com/watch?v=t3z-vkk_T6g",
    "rawTitle": "Deployment Object in Kubernetes-Hindi/urdu | Lec-50 | What is Kubernetes and how it works | Devops",
    "title": "Lec 6: Kubernetes Deployments, Rolling Updates & Rollback Strategies",
    "cleanTitle": "Kubernetes Deployments, Rolling Updates & Rollback Strategies",
    "duration": "1:16:07",
    "moduleId": 3,
    "moduleName": "Deployments, Zero-Downtime Rollouts & Networking",
    "moduleBadge": "Deployments & Services",
    "color": "#10B981",
    "icon": "upload",
    "hindiSummary": "Kubernetes me production applications run karne ke liye Deployment sabse important object hai. Deployment ek higher-level controller hai jo background me ReplicaSets aur Pods ko manage karta hai. Iska sabse bada fayda hai Zero-Downtime Rolling Update: jab aap application ka naya version (v1 se v2) deploy karte hain, to K8s purane pods ko ek-ek karke band karta hai aur naye pods ko start karta hai, jisse end users ko 1 second ka bhi downtime nahi milta. Agar naye version me koi bug aa jaye, to 'kubectl rollout undo' se turant purane version par rollback kiya ja sakta hai.",
    "englishSummary": "Mastering the cornerstone declarative workload in Kubernetes: Deployments. Examining the three-tier hierarchy: Deployment -> ReplicaSet -> Pods. Detailed mechanics of the RollingUpdate strategy configured by `maxSurge` (temporary excess pods) and `maxUnavailable` (maximum tolerable offline pods). Managing zero-downtime releases, rollout pause/resume, inspecting deployment revision history, and executing instantaneous rollbacks.",
    "keyConcepts": [
      "Deployment Hierarchy: Deployment manages ReplicaSets; ReplicaSets manage Pods. You never manage ReplicaSets directly.",
      "RollingUpdate Strategy: Default strategy that gradually replaces old version pods with new version pods without application downtime.",
      "maxSurge: Specifies the maximum number of pods that can be created over the desired number of pods during an update (e.g. 25%).",
      "maxUnavailable: Specifies the maximum number of pods that can be unavailable during the update process (e.g. 25%).",
      "Rollout History & Undo: Every change to the pod template records a revision number, allowing instant rollback (`kubectl rollout undo`)."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 06 - Deployments & Rollout)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "1:16:07",
      "summary": "Board diagrams illustrating how a Deployment transitions pods from old ReplicaSet v1 to new ReplicaSet v2 seamlessly with zero downtime.",
      "sections": [
        {
          "heading": "1. Zero-Downtime Rolling Update on Board",
          "hindiNote": "Board par v1 se v2 update ka step-by-step dance:",
          "points": [
            "Initial State: Deployment v1 chal raha hai jisme ReplicaSet 1 ke paas 4 Pods hain.",
            "Action: Developer ne image badal di: 'image: nginx:2.0'.",
            "Step 1: Deployment ek naya ReplicaSet 2 banata hai aur uska 1 Pod launch karta hai.",
            "Step 2: Naya Pod healthy hone ke baad, ReplicaSet 1 ka 1 purana pod scale-down hota hai.",
            "Step 3: Aise karte-karte saare 4 pods bina kisi downtime ke v2 par switch ho jate hain!"
          ],
          "diagram": "STAGE 1: [ Deployment ] ---> [ ReplicaSet v1 (4 Pods) ]\n\nSTAGE 2: [ Deployment ] ---> [ ReplicaSet v1 (3 Pods) ]  \n                            ---> [ ReplicaSet v2 (1 Pod)  ] <=== Testing new traffic\n\nSTAGE 3: [ Deployment ] ---> [ ReplicaSet v1 (0 Pods) ]  \n                            ---> [ ReplicaSet v2 (4 Pods) ] <=== 100% Zero Downtime Complete!"
        },
        {
          "heading": "2. Rollout Undo (Instant Rollback) on Board",
          "hindiNote": "Agar v2 me bug nikal gaya to kya karein?",
          "points": [
            "K8s purane ReplicaSet v1 ko delete nahi karta, sirf scale to 0 karta hai.",
            "Jaise hi aap 'kubectl rollout undo deployment my-dep' chalate hain, K8s turant purane ReplicaSet v1 ko 4 pods par scale kar deta hai aur v2 ko 0 kar deta hai!",
            "Rollback sirf 2 second me complete ho jata hai!"
          ],
          "diagram": "[ Rollout Undo ] ===> Scale ReplicaSet v2 to 0 ===> Scale ReplicaSet v1 back to 4!"
        }
      ]
    },
    "architecture": "Deployment ---> Old ReplicaSet (scaled to 0) + New ReplicaSet (scaled to 4) ---> Zero-Downtime Rolling Update",
    "commandsOrSteps": [
      "kubectl apply -f deployment.yaml",
      "kubectl set image deployment/my-dep nginx=nginx:1.23 --record",
      "kubectl rollout status deployment/my-dep",
      "kubectl rollout history deployment/my-dep",
      "kubectl rollout undo deployment/my-dep",
      "kubectl rollout undo deployment/my-dep --to-revision=2"
    ],
    "examTips": "CKA Exam Tip: In CKA scenarios, always use the '--record' flag or check 'kubectl rollout status' to verify rolling updates completed cleanly without stuck pods.",
    "interviewQuestions": "Q: How does Kubernetes ensure zero-downtime during an application version update?\nA: Kubernetes Deployments use a RollingUpdate strategy governed by 'maxSurge' and 'maxUnavailable'. It launches new pods and waits for their readiness probes to pass before terminating older pods, ensuring there is always healthy capacity serving user traffic.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Zero-Downtime Deployments, Rolling Updates & Instant Rollbacks",
      "scenario": "Aapke paas Netflix ya Amazon jaisi website hai jise har second laakhon log use kar rahe hain. Agar aapko naya version (v2) release karna hai, toh aap website ko 'Maintenance Mode' me band nahi kar sakte! Kubernetes Deployments ek-ek karke purane pods ko naye v2 pods se replace karte hain (Rolling Update). Aur agar v2 me koi bug nikal aaye, toh 1 second me purane v1 par wapas rollback kar dete hain!",
      "objective": "Deploy a production-grade Deployment object, execute a zero-downtime rolling update from v1 to v2, monitor rollout status, simulate a failed bad release, and execute an instant one-line rollback.",
      "duration": "25 Mins",
      "cost": "100% Free",
      "difficulty": "Intermediate",
      "diagram": "+--------------------------------------------------------------+\n| ZERO-DOWNTIME ROLLING UPDATE (v1 -> v2)                      |\n|                                                              |\n|  [ Deployment: web-deploy ]                                  |\n|         |                                                    |\n|         +---> ReplicaSet v1 (1.24) [ 3 -> 2 -> 1 -> 0 Pods ] |\n|         |                                                    |\n|         +---> ReplicaSet v2 (1.25) [ 0 -> 1 -> 2 -> 3 Pods ] |\n|                                                              |\n|  User Traffic continues flowing WITHOUT A SINGLE DROPPED TCP PACKET!\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Deploy Version 1 of Application Deployment",
          "laymanExplanation": "Nginx version 1.24 ke sath 3 pods ka Deployment launch karna.",
          "consoleAction": "Create `deployment.yaml` in terminal.",
          "command": "cat << 'EOF' > deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-deploy\n  labels:\n    app: web\nspec:\n  replicas: 4\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n  selector:\n    matchLabels:\n      app: web\n  template:\n    metadata:\n      labels:\n        app: web\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.24-alpine\n        ports:\n        - containerPort: 80\nEOF\nkubectl apply -f deployment.yaml",
          "commandExplanation": "maxSurge: 1: Allows at most 1 extra pod during update.\nmaxUnavailable: 0: Guarantees 100% of desired pods are always healthy and serving traffic.",
          "expectedOutput": "deployment.apps/web-deploy created",
          "verification": "Run `kubectl rollout status deployment/web-deploy` until it reports 'successfully rolled out'."
        },
        {
          "stepNum": 2,
          "title": "Trigger Zero-Downtime Rolling Update to Version 2",
          "laymanExplanation": "Live website par container image ko version 1.24 se upgrade karke 1.25 karna.",
          "consoleAction": "Terminal command execution.",
          "command": "kubectl set image deployment/web-deploy nginx=nginx:1.25-alpine --record",
          "commandExplanation": "`kubectl set image` patches the container image. `--record` saves the command in the rollout history revision log.",
          "expectedOutput": "deployment.apps/web-deploy image updated",
          "verification": "Watch the rolling rollout in action: `kubectl rollout status deployment/web-deploy`."
        },
        {
          "stepNum": 3,
          "title": "Inspect Rollout History and Revisions",
          "laymanExplanation": "Check karna ki K8s ne puraane version ka snapshot history me save kiya ya nahi.",
          "consoleAction": "Terminal inspection.",
          "command": "kubectl rollout history deployment/web-deploy",
          "commandExplanation": "Displays revision history table (Revision 1 = v1.24, Revision 2 = v1.25).",
          "expectedOutput": "REVISION  CHANGE-CAUSE\n1         <none>\n2         kubectl set image deployment/web-deploy nginx=nginx:1.25-alpine --record=true",
          "verification": "Confirm 2 revisions are registered."
        },
        {
          "stepNum": 4,
          "title": "Trigger a Broken Release and Witness Protection",
          "laymanExplanation": "Ek aisi image dalna jo exist hi nahi karti (`nginx:version-bad`). Dekhna ki K8s purane working pods ko band karta hai ya safe rakhta hai.",
          "consoleAction": "Terminal command execution.",
          "command": "kubectl set image deployment/web-deploy nginx=nginx:nonexistent-tag-404 && sleep 3 && kubectl get pods -l app=web",
          "commandExplanation": "The new pod enters `ImagePullBackOff`. Because `maxUnavailable: 0`, K8s STOPS the rollout and preserves all existing healthy pods!",
          "expectedOutput": "4 pods running healthy (v1.25) and 1 new pod stuck in ImagePullBackOff",
          "verification": "Live website never goes down because Kubernetes refused to kill healthy pods!"
        },
        {
          "stepNum": 5,
          "title": "Perform Instant One-Command Rollback",
          "laymanExplanation": "Buggy release ko cancel karke 1 second me stable release par wapas aana.",
          "consoleAction": "Terminal command.",
          "command": "kubectl rollout undo deployment/web-deploy",
          "commandExplanation": "`kubectl rollout undo` rolls back the deployment to the previous stable revision instantly.",
          "expectedOutput": "deployment.apps/web-deploy rolled back",
          "verification": "Run `kubectl get pods -l app=web` and verify all pods are 100% healthy!"
        }
      ],
      "simulator": {
        "welcomeMessage": "Zero-Downtime Deployments & Rollout Sandbox",
        "commands": {
          "kubectl apply -f deployment.yaml": "deployment.apps/web-deploy created\n[OK] 4 pods launched with image nginx:1.24-alpine.",
          "kubectl set image deployment/web-deploy nginx=nginx:1.25-alpine --record": "deployment.apps/web-deploy image updated\nWaiting for rollout to finish: 1 of 4 updated replicas are available...\nWaiting for rollout to finish: 4 of 4 updated replicas are available...\n[OK] Zero-downtime rolling update complete!",
          "kubectl rollout history deployment/web-deploy": "REVISION  CHANGE-CAUSE\n1         <initial release>\n2         kubectl set image deployment/web-deploy nginx=nginx:1.25-alpine",
          "kubectl rollout undo deployment/web-deploy": "deployment.apps/web-deploy rolled back to revision 1.\n[OK] Instant rollback completed successfully!",
          "kubectl delete deployment web-deploy": "deployment.apps \"web-deploy\" deleted\n[OK] Deployment removed."
        }
      },
      "troubleshooting": [
        {
          "issue": "Deployment rollout is stuck forever",
          "cause": "New container image failed readiness check or cannot be pulled.",
          "solution": "Run `kubectl rollout undo deployment/<name>` to revert to previous working version."
        }
      ],
      "cleanup": [
        "kubectl delete deployment web-deploy",
        "rm -f deployment.yaml"
      ]
    }
  },
  {
    "id": 7,
    "lecNum": 7,
    "videoId": "J2sUlm2cwQk",
    "youtubeUrl": "https://www.youtube.com/watch?v=J2sUlm2cwQk",
    "rawTitle": "Kubernetes Networking- Hindi/Urdu | Lec-51 | Kubernetes Services, Nodeport and Volumes | DevOps",
    "title": "Lec 7: K8s Networking, ClusterIP, NodePort & LoadBalancer Services",
    "cleanTitle": "K8s Networking, ClusterIP, NodePort & LoadBalancer Services",
    "duration": "2:08:18",
    "moduleId": 3,
    "moduleName": "Deployments, Zero-Downtime Rollouts & Networking",
    "moduleBadge": "Deployments & Services",
    "color": "#10B981",
    "icon": "network-wired",
    "hindiSummary": "Kubernetes me pods ephemeral hote hain - agar pod crash ya restart hota hai to use ek naya IP address mil jata hai. Isliye pods ke IP par direct depend hona bekar hai. Is problem ko solve karne ke liye 'Service' ka use kiya jata hai. Service ek permanent Virtual IP aur DNS name deti hai jo background me pods ke beech load balance karti hai. Is lecture me 4 types of services sikhayi gayi hain: 1) ClusterIP (default, internal communication), 2) NodePort (har node ke static port 30000-32767 par external access), 3) LoadBalancer (AWS Cloud ELB provisioning), aur 4) ExternalName. Saath hi CoreDNS aur kube-proxy ka internal packet flow detail me samjhaya gaya hai.",
    "englishSummary": "Deep architectural masterclass on Kubernetes networking and Service abstractions. Overcoming ephemeral Pod IP addressing using stable virtual endpoints. Comprehensive dissection of Service types: ClusterIP (internal east-west traffic), NodePort (exposing services across static node ports 30000-32767), LoadBalancer (native cloud provider ELB/ALB provisioning), and ExternalName. Examining packet flow via kube-proxy iptables NAT rules, CoreDNS cluster resolution, and Endpoints objects.",
    "keyConcepts": [
      "The Pod IP Dilemma: Pods are disposable; their dynamic IP addresses change upon termination and recreation.",
      "Service Abstraction: A persistent abstraction defining a logical set of pods and a policy by which to access them via stable virtual IP and DNS.",
      "ClusterIP (Default): Allocates an internal virtual IP reachable only from within the Kubernetes cluster (ideal for internal databases and backend APIs).",
      "NodePort: Allocates a dedicated port on every cluster node across the range 30000-32767, routing external internet traffic to target pods.",
      "LoadBalancer: Directly provisions an external cloud load balancer (e.g. AWS Network Load Balancer) that forwards traffic to NodePorts.",
      "CoreDNS: In-cluster DNS server that resolves service names automatically (e.g. `http://my-service.my-namespace.svc.cluster.local`)."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 07 - Services & Networking)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "2:08:18",
      "summary": "Detailed whiteboard packet flows demonstrating how external internet requests hit node ports and route through kube-proxy iptables to pods.",
      "sections": [
        {
          "heading": "1. Why Pod IPs are Dangerous & How Services Fix It",
          "hindiNote": "Board par Pod IP vs Service ka fundamental difference:",
          "points": [
            "Pod IP Problem: Pod A ka IP 192.168.1.15 tha. Pod mar gaya, naya pod bana jiska IP 192.168.2.40 ho gaya! Frontend ka connection toot gaya.",
            "Service Solution: Service ka IP 10.96.0.100 hamesha permanent rehta hai. Frontend sirf Service se baat karta hai, aur Service traffic ko piche chal rahe live pods par load balance karti hai."
          ],
          "diagram": "[ Frontend Pod ] ===> Requests 'http://backend-service' (Permanent IP: 10.96.0.100)\n                              |\n                              v\n                     [ K8s Service ] (Load Balancer)\n                              |\n         +--------------------+--------------------+\n         |                                         |\n         v                                         v\n[ Backend Pod 1 (IP: 192.168.1.15) ]   [ Backend Pod 2 (IP: 192.168.2.40) ]"
        },
        {
          "heading": "2. 3 Types of Kubernetes Services on Board",
          "hindiNote": "Board par teeno services ka comparison:",
          "points": [
            "1. ClusterIP: Sirf cluster ke andar baat karne ke liye (Database, Redis).",
            "2. NodePort: Bahar se testing ke liye. Node ke IP par 30000 se 32767 ke beech ka port khulta hai (e.g. http://<Node-IP>:30080).",
            "3. LoadBalancer: Production ke liye. AWS par automatically ek real ELB (Elastic Load Balancer) create hota hai."
          ],
          "diagram": "INTERNET USER\n     |\n     v\n[ Cloud LoadBalancer (AWS ELB) ]  <=== Type: LoadBalancer\n     |\n     v\n[ NodePort : 30080 on Node 1, 2 ] <=== Type: NodePort\n     |\n     v\n[ ClusterIP : 10.96.0.50 ]        <=== Type: ClusterIP (Internal Only)\n     |\n     +---> [ Pod 1 ] [ Pod 2 ]"
        }
      ]
    },
    "architecture": "External Client ---> Cloud LoadBalancer ---> NodePort (30080) ---> kube-proxy (iptables) ---> Pod Endpoints",
    "commandsOrSteps": [
      "kubectl expose deployment my-dep --port=80 --target-port=80 --type=ClusterIP",
      "kubectl expose deployment my-dep --port=80 --target-port=80 --type=NodePort",
      "kubectl get svc",
      "kubectl get endpoints my-dep (Inspect live pod IP addresses bound to service)"
    ],
    "examTips": "CKA Exam Tip: If a service cannot connect to its pods, always run 'kubectl get endpoints <service_name>'. If Endpoints is empty '<none>', your Service selector does not match the Pod labels!",
    "interviewQuestions": "Q: What is the difference between ClusterIP, NodePort, and LoadBalancer in Kubernetes?\nA: ClusterIP is an internal-only virtual IP used for intra-cluster communication. NodePort exposes the service on an open port (30000-32767) across every worker node IP. LoadBalancer provisions an external cloud provider load balancer (like AWS NLB/ALB) that routes incoming internet traffic directly to the node ports.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Kubernetes Networking, Services & CoreDNS Discovery (ClusterIP & NodePort)",
      "scenario": "Pods ephemeral hote hain (aate jaate rehte hain aur unka IP har baar badal jata hai). Agar aap apne frontend ko kisi pod ke dynamic IP se connect karenge, toh pod restart hote hi link toot jayega! Kubernetes Service ek permanent telephone number aur load balancer jaisa hota hai. Pods chahe 100 baar restart hon, Service ka static IP aur DNS name (`my-service`) hamesha fixed rehta hai.",
      "objective": "Solve the ephemeral Pod IP problem: Deploy a backend Deployment, expose it using a ClusterIP Service for internal microservice discovery via CoreDNS, and expose a NodePort Service (Port 30000-32767) to access the application from the external internet.",
      "duration": "25 Mins",
      "cost": "100% Free",
      "difficulty": "Intermediate",
      "diagram": "+--------------------------------------------------------------+\n| KUBERNETES SERVICE NETWORKING                                |\n|                                                              |\n|  External Browser / Client                                   |\n|         |                                                    |\n|         v (Access Node IP: Port 30080)                       |\n|  +--------------------------------------------------------+  |\n|  | NodePort Service ('web-service')                       |  |\n|  | Static Virtual ClusterIP: 10.96.24.112                 |  |\n|  | CoreDNS: 'web-service.default.svc.cluster.local'       |  |\n|  +--------------------------------------------------------+  |\n|         |                                                    |\n|         +---> Round-Robin Load Balancing                     |\n|         |                                                    |\n|         +---> [ Pod 1: 192.168.1.10 ]                        |\n|         +---> [ Pod 2: 192.168.1.11 ]                        |\n|         +---> [ Pod 3: 192.168.1.12 ]                        |\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Deploy Backend Web Server Application",
          "laymanExplanation": "3 pods ka backend deployment banana jo custom HTML serve kare.",
          "consoleAction": "Create deployment in terminal.",
          "command": "kubectl create deployment backend-web --image=nginx:alpine --replicas=3",
          "commandExplanation": "Creates deployment with label `app=backend-web` on port 80.",
          "expectedOutput": "deployment.apps/backend-web created",
          "verification": "Check pods: `kubectl get pods -l app=backend-web`."
        },
        {
          "stepNum": 2,
          "title": "Expose via ClusterIP Service (Internal Microservice Discovery)",
          "laymanExplanation": "Cluster ke andar ek permanent internal IP address aur DNS name assign karna.",
          "consoleAction": "Terminal command.",
          "command": "kubectl expose deployment backend-web --name=backend-svc --port=80 --target-port=80 --type=ClusterIP",
          "commandExplanation": "`--port=80`: Port exposed by the Service.\n`--target-port=80`: Port where Nginx container listens.\n`--type=ClusterIP`: Reachable ONLY from inside the cluster.",
          "expectedOutput": "service/backend-svc exposed",
          "verification": "Run `kubectl get svc backend-svc` and note the assigned Cluster-IP (e.g. `10.96.x.x`)."
        },
        {
          "stepNum": 3,
          "title": "Verify CoreDNS Name Resolution Between Pods",
          "laymanExplanation": "Ek test pod launch karke service ko uske naam (`backend-svc`) se ping karna.",
          "consoleAction": "Run interactive test pod in terminal.",
          "command": "kubectl run dns-test-box --rm -it --image=busybox:1.28 --restart=Never -- nslookup backend-svc",
          "commandExplanation": "Queries Kubernetes CoreDNS server (`10.96.0.10`). Demonstrates automatic DNS name mapping to Service ClusterIP.",
          "expectedOutput": "Server:    10.96.0.10\nAddress 1: 10.96.0.10 kube-dns.kube-system.svc.cluster.local\n\nName:      backend-svc\nAddress 1: 10.96.24.112 backend-svc.default.svc.cluster.local",
          "verification": "Notice CoreDNS returns the exact Service ClusterIP."
        },
        {
          "stepNum": 4,
          "title": "Create a NodePort Service for External Internet Access",
          "laymanExplanation": "Public internet se website access karne ke liye port number 30080 par service expose karna.",
          "consoleAction": "Create `nodeport-service.yaml` in terminal.",
          "command": "cat << 'EOF' > nodeport-service.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: public-web-svc\nspec:\n  type: NodePort\n  selector:\n    app: backend-web\n  ports:\n  - port: 80\n    targetPort: 80\n    nodePort: 30080\nEOF\nkubectl apply -f nodeport-service.yaml",
          "commandExplanation": "nodePort: 30080: Opens port 30080 on EVERY worker and master node in the cluster.\nAny request hitting `<Any-Node-IP>:30080` is routed to healthy backend pods.",
          "expectedOutput": "service/public-web-svc created",
          "verification": "Check service list: `kubectl get svc public-web-svc`."
        },
        {
          "stepNum": 5,
          "title": "Access Application Over Public NodePort",
          "laymanExplanation": "Browser ya curl se port 30080 par website open karke load balancing test karna.",
          "consoleAction": "Open browser at `http://<ec2-public-ip>:30080` (ensure security group allows port 30080).",
          "command": "curl http://localhost:30080 # Or node public IP",
          "commandExplanation": "Tests HTTP connectivity via NodePort.",
          "expectedOutput": "<!DOCTYPE html><html><head><title>Welcome to nginx!</title></head><body><h1>Welcome to nginx!</h1></body></html>",
          "verification": "HTTP 200 response returned from NodePort service."
        }
      ],
      "simulator": {
        "welcomeMessage": "Kubernetes Services & CoreDNS Sandbox",
        "commands": {
          "kubectl expose deployment backend-web --name=backend-svc --port=80": "service/backend-svc exposed (ClusterIP: 10.96.24.112)\n[OK] CoreDNS record backend-svc.default.svc.cluster.local created.",
          "kubectl get svc": "NAME             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE\nkubernetes       ClusterIP   10.96.0.1       <none>        443/TCP        5d\nbackend-svc      ClusterIP   10.96.24.112    <none>        80/TCP         15s\npublic-web-svc   NodePort    10.96.180.45    <none>        80:30080/TCP   5s",
          "curl http://localhost:30080": "<!DOCTYPE html><html><head><title>Welcome to nginx!</title></head></html>\n[OK] Traffic successfully routed across 3 backend pods!",
          "kubectl delete svc backend-svc public-web-svc && kubectl delete deployment backend-web": "Services and deployment deleted cleanly."
        }
      },
      "troubleshooting": [
        {
          "issue": "Cannot access website on port 30080 from browser",
          "cause": "AWS EC2 Security Group is blocking inbound traffic on TCP port 30080.",
          "solution": "Edit EC2 Security Group -> Add Inbound Rule -> Custom TCP -> Port Range: 30000-32767 -> Source: 0.0.0.0/0 (or your IP)."
        }
      ],
      "cleanup": [
        "kubectl delete svc backend-svc public-web-svc",
        "kubectl delete deployment backend-web",
        "rm -f nodeport-service.yaml"
      ]
    }
  },
  {
    "id": 8,
    "lecNum": 8,
    "videoId": "9zjGOCb-6As",
    "youtubeUrl": "https://www.youtube.com/watch?v=9zjGOCb-6As",
    "rawTitle": "Persistent Volume and LivenessProbe in Kubernetes-Hindi/Urdu | Lec-52 | Complete Devops Tutorials",
    "title": "Lec 8: Persistent Volumes (PV), PVC & Health Monitoring Probes",
    "cleanTitle": "Persistent Volumes (PV), PVC & Health Monitoring Probes",
    "duration": "1:21:34",
    "moduleId": 4,
    "moduleName": "Storage Persistence & Health Monitoring Probes",
    "moduleBadge": "Storage & Health",
    "color": "#F59E0B",
    "icon": "database",
    "hindiSummary": "Containers by default stateless hote hain. Agar pod crash hota hai to uska sara data delete ho jata hai. Database (MySQL, Postgres) ka data bachane ke liye Kubernetes me Storage Architecture: Persistent Volume (PV) aur Persistent Volume Claim (PVC) use hota hai. Admin PV create karta hai (e.g. 50GB AWS EBS volume), developer PVC request karta hai, aur K8s dono ko bind kar deta hai. Saath hi is lecture me Container Health Probes sikhaye gaye hain: Liveness Probe (agar container deadlock ho jaye to use restart karna) aur Readiness Probe (jab tak container traffic lene ke liye ready na ho, tab tak service se traffic na bhejna).",
    "englishSummary": "Architectural breakdown of stateful storage persistence and container lifecycle health probing in Kubernetes. Decoupling storage provisioning from consumption: PersistentVolumes (cluster infrastructure assets), PersistentVolumeClaims (user requests for storage), AccessModes (ReadWriteOnce, ReadOnlyMany, ReadWriteMany), and Reclaim Policies (Retain, Delete). Deep dive into Container Health Probes: LivenessProbe (detects and restarts deadlocked containers) vs ReadinessProbe (controls service endpoint routing).",
    "keyConcepts": [
      "PersistentVolume (PV): A cluster-level storage piece provisioned by an administrator or dynamically via StorageClass (AWS EBS, NFS).",
      "PersistentVolumeClaim (PVC): A developer's request for storage specifying size (e.g. 20Gi) and AccessModes (RWO, ROX, RWX).",
      "Access Modes: ReadWriteOnce (RWO: single node read/write), ReadOnlyMany (ROX: multi-node read-only), ReadWriteMany (RWX: multi-node read/write e.g. NFS/EFS).",
      "Liveness Probe: Periodically checks container health (HTTP GET, TCP Socket, Exec command). If probe fails, kubelet restarts the container.",
      "Readiness Probe: Verifies whether the container is fully loaded and ready to serve traffic. If probe fails, the pod IP is removed from Service Endpoints."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 08 - PV, PVC & Probes)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "1:21:34",
      "summary": "Board diagrams explaining the two-phase storage binding workflow (PV <-> PVC) and the distinct roles of Liveness vs Readiness Probes.",
      "sections": [
        {
          "heading": "1. PV & PVC Real-World Analogy on Board",
          "hindiNote": "Board par Real Estate Brokerage analogy samjhayi gayi:",
          "points": [
            "PersistentVolume (PV) = Plot of Land: Admin ne market me 100GB ka plot bana kar chhod diya.",
            "PersistentVolumeClaim (PVC) = Tenant Request: Developer ne kaha 'Mujhe 20GB ka plot chahiye'.",
            "Binding: Kubernetes dono ko match karta hai aur lock laga deta hai. Pod is PVC ko use karke data store karta hai."
          ],
          "diagram": "[ Storage Admin ] ---> Provisions 100GB AWS EBS Disk ===> [ PersistentVolume (PV) ]\n                                                                ^\n                                                          (Auto-Binding)\n                                                                v\n[ Developer ]     ---> Requests 20GB Storage         ===> [ PersistentVolumeClaim (PVC) ]\n                                                                ^\n                                                                |\n                                                          [ MySQL Pod ]"
        },
        {
          "heading": "2. Liveness Probe vs Readiness Probe on Board",
          "hindiNote": "Dono probes me asali farak kya hai:",
          "points": [
            "Liveness Probe = Deadlock Doctor: Container chal raha hai par hang ho gaya (infinite loop). Liveness probe fail hote hi Kubelet container ko kill karke restart karega.",
            "Readiness Probe = Gatekeeper: Naya pod bana hai par abhi 30 second database load hone me lagenge. Readiness probe traffic ko roke rakhegi taaki users ko 502 error na dikhe!"
          ],
          "diagram": "LIVENESS PROBE FAILS   ===> Kubelet RESTARTS Container (Kill & Recreate)\nREADINESS PROBE FAILS  ===> Kubelet REMOVES Pod from Service Endpoints (No Traffic, No Restart)"
        }
      ]
    },
    "architecture": "AWS EBS / NFS ---> PersistentVolume (PV) <=== Bound ===> PVC <=== Mounted in Pod (e.g. /var/lib/mysql)",
    "commandsOrSteps": [
      "kubectl apply -f pv.yaml",
      "kubectl get pv",
      "kubectl apply -f pvc.yaml",
      "kubectl get pvc (Status should show 'Bound')",
      "kubectl apply -f probe-pod.yaml",
      "kubectl describe pod <POD_NAME> (Inspect Liveness/Readiness probe events)"
    ],
    "examTips": "CKA Exam Gotcha: Never use Liveness Probe to check external dependencies (like an external database). If the database goes down, all your pods will fail liveness checks and crash-loop simultaneously! Use Readiness Probe instead.",
    "interviewQuestions": "Q: What is the difference between a Liveness Probe and a Readiness Probe in Kubernetes?\nA: A Liveness Probe checks if the container is alive and healthy; if it fails, kubelet kills and restarts the container. A Readiness Probe checks if the application is ready to accept incoming traffic; if it fails, Kubernetes stops sending network requests to the pod without killing it.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Persistent Storage (PV & PVC) and Application Health Probes (Liveness & Readiness)",
      "scenario": "Ek hotel me jab koi guest room me behosh ho jata hai, doctor stethoscope lagakar pulse check karta hai (Liveness Probe). Agar pulse band hai, toh CPR/restart diya jata hai. Jab tak patient theek se chalne layak na ho jaye, use kaam par nahi bheja jata (Readiness Probe). Aur patient ki medical file locker me store hoti hai chahe patient kisi bhi room me shift ho (Persistent Volume PVC)!",
      "objective": "Configure production resilience: Build a PersistentVolume (PV) and claim it with PersistentVolumeClaim (PVC) for persistent database storage. Implement HTTP Liveness and Readiness Probes to detect application deadlocks and automate container restarts.",
      "duration": "25 Mins",
      "cost": "100% Free",
      "difficulty": "Intermediate to Advanced",
      "diagram": "+--------------------------------------------------------------+\n| HEALTH PROBES & PERSISTENT STORAGE                           |\n|                                                              |\n|  [ Pod: resilient-app ]                                      |\n|    |                                                         |\n|    +---> Liveness Probe (GET /healthz every 5s)              |\n|    |     Failed 3 times? Kubelet RESTARTS CONTAINER!         |\n|    |                                                         |\n|    +---> Readiness Probe (GET /ready every 3s)               |\n|    |     Failed? Kubelet REMOVES POD FROM SERVICE ENDPOINTS! |\n|    |                                                         |\n|    +---> Mount: /app/data                                    |\n|             |                                                |\n|             v                                                |\n|  [ PersistentVolumeClaim: app-pvc (1Gi) ]                    |\n|             |                                                |\n|             v                                                |\n|  [ PersistentVolume: app-pv (HostPath / EBS Volume) ]        |\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Create a PersistentVolume (PV) Resource",
          "laymanExplanation": "Cluster ke storage pool me 1GB hard drive space allocate karna.",
          "consoleAction": "Create `pv.yaml` in terminal.",
          "command": "cat << 'EOF' > pv.yaml\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: local-pv\nspec:\n  capacity:\n    storage: 1Gi\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Retain\n  hostPath:\n    path: /mnt/k8s-data\nEOF\nkubectl apply -f pv.yaml",
          "commandExplanation": "accessModes: ReadWriteOnce (Can be mounted by a single node for read/write).\nhostPath: Uses directory on the host worker node.",
          "expectedOutput": "persistentvolume/local-pv created",
          "verification": "Check PV status: `kubectl get pv local-pv` (Status will show 'Available')."
        },
        {
          "stepNum": 2,
          "title": "Create PersistentVolumeClaim (PVC) to Request Storage",
          "laymanExplanation": "Application ke behalf par 500MB storage ki application submit karna. K8s automatically matching PV dhoond kar bind kar dega.",
          "consoleAction": "Create `pvc.yaml` in terminal.",
          "command": "cat << 'EOF' > pvc.yaml\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: app-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 500Mi\nEOF\nkubectl apply -f pvc.yaml",
          "commandExplanation": "Kubernetes control plane matches the 500Mi request with `local-pv` (1Gi) and binds them.",
          "expectedOutput": "persistentvolumeclaim/app-pvc created",
          "verification": "Run `kubectl get pvc app-pvc`. STATUS must transition to 'Bound'!"
        },
        {
          "stepNum": 3,
          "title": "Deploy Pod with PVC and Health Probes (Liveness & Readiness)",
          "laymanExplanation": "Pod deploy karna jisme storage bhi ho aur doctor (Health Check probes) bhi continuously pulse check kare.",
          "consoleAction": "Create `app-probes.yaml` in terminal.",
          "command": "cat << 'EOF' > app-probes.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: healthy-pod\n  labels:\n    app: resilient\nspec:\n  volumes:\n  - name: storage-volume\n    persistentVolumeClaim:\n      claimName: app-pvc\n  containers:\n  - name: web\n    image: nginx:alpine\n    ports:\n    - containerPort: 80\n    volumeMounts:\n    - mountPath: /usr/share/nginx/html\n      name: storage-volume\n    livenessProbe:\n      httpGet:\n        path: /\n        port: 80\n      initialDelaySeconds: 5\n      periodSeconds: 5\n    readinessProbe:\n      httpGet:\n        path: /\n        port: 80\n      initialDelaySeconds: 3\n      periodSeconds: 3\nEOF\nkubectl apply -f app-probes.yaml",
          "commandExplanation": "initialDelaySeconds: Wait before first check.\nperiodSeconds: Frequency of health checks.\nFailed liveness restarts container. Failed readiness cuts off traffic.",
          "expectedOutput": "pod/healthy-pod created",
          "verification": "Run `kubectl describe pod healthy-pod` and review 'Liveness' and 'Readiness' probe parameters."
        },
        {
          "stepNum": 4,
          "title": "Write Data to Persistent Volume and Verify Survival",
          "laymanExplanation": "Pod ke andar index.html create karna, pod ko delete karna, aur naye pod se verify karna ki file abhi bhi exist karti hai.",
          "consoleAction": "Terminal command execution.",
          "command": "kubectl exec healthy-pod -- sh -c \"echo '<h1>K8s Persistent Storage Works!</h1>' > /usr/share/nginx/html/index.html\"\nkubectl delete pod healthy-pod\nkubectl apply -f app-probes.yaml\nsleep 5 && kubectl exec healthy-pod -- cat /usr/share/nginx/html/index.html",
          "commandExplanation": "Deletes pod, recreates it attached to the same PVC, and reads file back.",
          "expectedOutput": "<h1>K8s Persistent Storage Works!</h1>",
          "verification": "The file survived pod deletion completely! Persistent storage successfully proven."
        }
      ],
      "simulator": {
        "welcomeMessage": "Kubernetes Storage & Health Probes Sandbox",
        "commands": {
          "kubectl apply -f pv.yaml && kubectl apply -f pvc.yaml": "persistentvolume/local-pv created\npersistentvolumeclaim/app-pvc created\n[OK] PVC status: Bound to local-pv.",
          "kubectl apply -f app-probes.yaml": "pod/healthy-pod created\n[OK] Liveness Probe: HTTP-GET http://:80/ delay=5s\n[OK] Readiness Probe: HTTP-GET http://:80/ delay=3s",
          "kubectl describe pod healthy-pod": "Status: Running\nLiveness: http-get http://:80/ delay=5s period=5s #success=1 #failure=3\nReadiness: http-get http://:80/ delay=3s period=3s #success=1 #failure=3\nEvents: Normal Started -> Normal Probe Passed",
          "kubectl delete pod healthy-pod && kubectl delete pvc app-pvc && kubectl delete pv local-pv": "Resources cleanly deleted."
        }
      },
      "troubleshooting": [
        {
          "issue": "PersistentVolumeClaim is stuck in 'Pending'",
          "cause": "No available PersistentVolume matches the requested storage size, accessMode, or storageClassName.",
          "solution": "Check PV capacity and ensure `accessModes` in PV and PVC match exactly (`ReadWriteOnce`)."
        }
      ],
      "cleanup": [
        "kubectl delete pod healthy-pod",
        "kubectl delete pvc app-pvc",
        "kubectl delete pv local-pv",
        "rm -f pv.yaml pvc.yaml app-probes.yaml"
      ]
    }
  },
  {
    "id": 9,
    "lecNum": 9,
    "videoId": "OaZcXRJuOo8",
    "youtubeUrl": "https://www.youtube.com/watch?v=OaZcXRJuOo8",
    "rawTitle": "What is Namespaces and Resource Quota in Kubernetes-Hindi | Lec-54 | Complete kubernetes | Devops",
    "title": "Lec 9: Namespaces, ResourceQuotas & LimitRanges",
    "cleanTitle": "Namespaces, ResourceQuotas & LimitRanges",
    "duration": "1:22:53",
    "moduleId": 5,
    "moduleName": "Multi-Tenancy, Resource Governance & Autoscaling",
    "moduleBadge": "Governance & Scaling",
    "color": "#8B5CF6",
    "icon": "layer-group",
    "hindiSummary": "Ek single Kubernetes cluster ko multiple teams (Dev, QA, Staging, Prod) me safely share karne ke liye 'Namespaces' ka use kiya jata hai. Namespaces virtual clusters create karte hain. Lekin agar Dev team saari CPU aur RAM consume kar le to Prod team ke pods crash ho sakte hain. Isliye 'ResourceQuota' lagaya jata hai jo kisi namespace ke total CPU, Memory aur Pods ki hard limit set karta hai (e.g. Dev team maximum 4 CPU aur 10 pods hi bana sakti hai). Saath hi 'LimitRange' se har ek individual container par default request/limits set ki jati hain.",
    "englishSummary": "Multi-tenancy cluster isolation and resource governance in Kubernetes. Utilizing Namespaces to partition cluster objects across environments (`dev`, `staging`, `production`) and teams. Enforcing cluster consumption caps via ResourceQuotas (hard limits on total CPU cores, memory gigabytes, and object counts per namespace). Implementing LimitRanges to inject default requests and maximum limits on individual container specs.",
    "keyConcepts": [
      "Namespaces: Virtual cluster abstraction allowing logical isolation, name scoping, and RBAC authorization boundaries within a shared physical cluster.",
      "Default Namespaces: `default` (unspecified objects), `kube-system` (K8s internal control plane), `kube-public` (cluster-wide readable), `kube-node-lease` (heartbeats).",
      "ResourceQuota: Sets aggregate resource constraints on a namespace (e.g. `requests.cpu: 4`, `limits.memory: 8Gi`, `pods: 10`).",
      "LimitRange: Enforces resource minimums, maximums, and default compute requirements for containers created inside a namespace.",
      "Quota Enforcement: Once a ResourceQuota is defined, every pod created in that namespace MUST explicitly specify resource requests and limits or it will be rejected by the admission controller."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 09 - Multi-Tenancy)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "1:22:53",
      "summary": "Board diagrams illustrating multi-tenant cluster slicing and how ResourceQuotas prevent noisy neighbor problems.",
      "sections": [
        {
          "heading": "1. Multi-Tenant Cluster Slicing on Board",
          "hindiNote": "Board par single physical cluster ko divide karke dikhaya gaya:",
          "points": [
            "Agar har team ke liye alag cluster banayein to lakho rupaye kharch honge.",
            "Solution: Ek bada 10-node cluster banao aur use Namespaces me baant do:",
            "- Namespace 'dev': Dev team ke pods",
            "- Namespace 'qa': Testing team ke pods",
            "- Namespace 'prod': Production customer pods"
          ],
          "diagram": "+-------------------------------------------------------------------------+\n|                     SHARED PHYSICAL K8S CLUSTER                         |\n+-------------------------------------------------------------------------+\n| [ Namespace: dev ]     | [ Namespace: qa ]      | [ Namespace: prod ]   |\n| - Quota: 4 CPU, 8GB    | - Quota: 8 CPU, 16GB   | - Quota: 32 CPU, 64GB |\n| - 5 Microservices Pods | - 10 Test Pods         | - High-Priority Pods  |\n+-------------------------------------------------------------------------+"
        },
        {
          "heading": "2. Noisy Neighbor Problem & ResourceQuota Fix on Board",
          "hindiNote": "ResourceQuota kyu zaroori hai:",
          "points": [
            "Problem: Dev team ne ek buggy Python script chala di jisme memory leak tha. Script ne pure cluster ki 64GB RAM kha li! Production crash!",
            "Fix: ResourceQuota lagao. Dev namespace 8GB se 1 byte bhi zyada nahi le sakta!"
          ],
          "diagram": "Dev Pod Attempts to consume 16GB RAM ===> [ Admission Controller (ResourceQuota) ]\n                                                            |\n                                                            v\n                                                  REJECTED! Quota Exceeded Error"
        }
      ]
    },
    "architecture": "Cluster Compute Pool ---> Namespaces (Dev / QA / Prod) ---> ResourceQuota (Hard Limits) + LimitRange",
    "commandsOrSteps": [
      "kubectl create namespace development",
      "kubectl get namespaces",
      "kubectl apply -f quota.yaml -n development",
      "kubectl describe resourcequota -n development",
      "kubectl get pods -n development"
    ],
    "examTips": "CKA Exam Tip: In CKA exams, always check which namespace the question asks you to operate in! Use '-n <namespace_name>' or configure your context: 'kubectl config set-context --current --namespace=<name>'.",
    "interviewQuestions": "Q: What happens if a ResourceQuota is applied to a namespace and a pod manifest without resource requests/limits is deployed?\nA: The Kubernetes API Server admission controller will reject the pod creation with an error ('failed quota: must specify requests.cpu, requests.memory'). To allow pods without explicit limits, you must configure a LimitRange in that namespace to provide automatic default values.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Multi-Tenancy Isolation via Namespaces, ResourceQuota & LimitRanges",
      "scenario": "Ek bada office building hai jisme 2 alag companies kaam karti hain: Ek Development team (`dev`) aur ek Production team (`prod`). Agar dev team bina roke sara electricity aur AC consumption use kar le, toh prod team crash ho jayegi! Kubernetes me Namespaces virtual boundaries banate hain, ResourceQuota total CPU/RAM ceiling fix karta hai, aur LimitRange har pod ka minimum/maximum size enforce karta hai.",
      "objective": "Partition a single Kubernetes cluster into multi-tenant environments: Create `development` and `production` namespaces, enforce hard CPU/Memory ceilings via `ResourceQuota`, set default container allocations via `LimitRange`, and verify quota violation blocks.",
      "duration": "20 Mins",
      "cost": "100% Free",
      "difficulty": "Intermediate",
      "diagram": "+--------------------------------------------------------------+\n| SINGLE PHYSICAL KUBERNETES CLUSTER                           |\n|                                                              |\n|  [ Namespace: development ]       [ Namespace: production ]  |\n|  Hard Quota:                      Hard Quota:                |\n|  - Max 2 CPU                      - Max 16 CPU               |\n|  - Max 2Gi RAM                    - Max 32Gi RAM             |\n|  - Max 4 Pods                     - Max 50 Pods              |\n|                                                              |\n|  Any request exceeding quota is BLOCKED by API Server!       |\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Create Development and Production Namespaces",
          "laymanExplanation": "Cluster ke andar do alag virtual boundary rooms (Namespaces) create karna.",
          "consoleAction": "Terminal command execution.",
          "command": "kubectl create namespace development && kubectl create namespace production && kubectl get namespaces",
          "commandExplanation": "`kubectl create namespace` provisions virtual cluster partitions with their own scoped resources.",
          "expectedOutput": "namespace/development created\nnamespace/production created\nNAME              STATUS   AGE\ndefault           Active   5d\ndevelopment       Active   5s\nproduction        Active   5s",
          "verification": "Confirm both namespaces show 'Active' status."
        },
        {
          "stepNum": 2,
          "title": "Enforce Hard ResourceQuota on Development Namespace",
          "laymanExplanation": "Dev team par strictly 2 Pods aur 512MB RAM ki limit lagana taaki wo cluster ka sara resource na consume karein.",
          "consoleAction": "Create `dev-quota.yaml` in terminal.",
          "command": "cat << 'EOF' > dev-quota.yaml\napiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: dev-quota\n  namespace: development\nspec:\n  hard:\n    pods: \"2\"\n    requests.cpu: \"500m\"\n    requests.memory: \"256Mi\"\n    limits.cpu: \"1\"\n    limits.memory: \"512Mi\"\nEOF\nkubectl apply -f dev-quota.yaml",
          "commandExplanation": "pods: \"2\": Development namespace can NEVER run more than 2 pods total.",
          "expectedOutput": "resourcequota/dev-quota created",
          "verification": "Inspect quota: `kubectl get resourcequota dev-quota -n development`."
        },
        {
          "stepNum": 3,
          "title": "Deploy Allowed Pod Within Quota Boundary",
          "laymanExplanation": "Limit ke andar ek valid pod launch karna.",
          "consoleAction": "Terminal command.",
          "command": "cat << 'EOF' > valid-pod.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: dev-pod-1\n  namespace: development\nspec:\n  containers:\n  - name: web\n    image: nginx:alpine\n    resources:\n      requests:\n        memory: \"100Mi\"\n        cpu: \"100m\"\n      limits:\n        memory: \"200Mi\"\n        cpu: \"200m\"\nEOF\nkubectl apply -f valid-pod.yaml",
          "commandExplanation": "Deploying 1 pod within quota limits.",
          "expectedOutput": "pod/dev-pod-1 created",
          "verification": "Check quota usage: `kubectl describe resourcequota dev-quota -n development` shows `pods: 1/2`."
        },
        {
          "stepNum": 4,
          "title": "Attempt to Exceed Quota and Observe Admission Webhook Blocking",
          "laymanExplanation": "Quota se zyada pods launch karne ki koshish karna aur dekhna ki API Server use kaise block karta hai.",
          "consoleAction": "Terminal command execution.",
          "command": "kubectl run dev-pod-2 --namespace=development --image=nginx:alpine --dry-run=client -o yaml | kubectl apply -f - # Uses slot 2\n# Attempt to launch slot 3 (Exceeds quota!)\nkubectl run dev-pod-3 --namespace=development --image=nginx:alpine",
          "commandExplanation": "The Kubernetes Admission Controller checks the quota before scheduling. Since max pods is 2, pod 3 is rejected with 403 Forbidden.",
          "expectedOutput": "Error from server (Forbidden): pods \"dev-pod-3\" is forbidden: exceeded quota: dev-quota, requested: pods=1, used: pods=2, limited: pods=2",
          "verification": "Notice 'exceeded quota: dev-quota' error. Resource isolation is 100% successful!"
        }
      ],
      "simulator": {
        "welcomeMessage": "Kubernetes Multi-Tenancy & ResourceQuota Sandbox",
        "commands": {
          "kubectl create namespace development": "namespace/development created\n[OK] Partition ready.",
          "kubectl apply -f dev-quota.yaml": "resourcequota/dev-quota created in namespace development\nLimits: pods=2, memory=512Mi, cpu=1",
          "kubectl run dev-pod-3 --namespace=development --image=nginx:alpine": "Error from server (Forbidden): pods \"dev-pod-3\" is forbidden: exceeded quota: dev-quota, requested: pods=1, used: pods=2, limited: pods=2\n[BLOCKED] Admission controller strictly prevented resource hijacking!",
          "kubectl delete namespace development production": "namespaces \"development\" and \"production\" deleted."
        }
      },
      "troubleshooting": [
        {
          "issue": "Failed to create pod: 'must specify limits.cpu, requests.cpu...'",
          "cause": "When a ResourceQuota is placed on CPU/Memory, every pod submitted to that namespace MUST explicitly define `resources.requests` and `resources.limits`.",
          "solution": "Either specify resource requests/limits in your Pod YAML or deploy a `LimitRange` to automatically inject defaults."
        }
      ],
      "cleanup": [
        "kubectl delete namespace development production",
        "rm -f dev-quota.yaml valid-pod.yaml"
      ]
    }
  },
  {
    "id": 10,
    "lecNum": 10,
    "videoId": "hm3jnETOoFo",
    "youtubeUrl": "https://www.youtube.com/watch?v=hm3jnETOoFo",
    "rawTitle": "Kubernetes Horizontal Pod Autoscaling-Hindi/Urdu | Lec-55 | Complete Kubernetes Tutorials",
    "title": "Lec 10: Horizontal Pod Autoscaler (HPA) & Metrics Server",
    "cleanTitle": "Horizontal Pod Autoscaler (HPA) & Metrics Server",
    "duration": "1:01:55",
    "moduleId": 5,
    "moduleName": "Multi-Tenancy, Resource Governance & Autoscaling",
    "moduleBadge": "Governance & Scaling",
    "color": "#8B5CF6",
    "icon": "chart-line",
    "hindiSummary": "Horizontal Pod Autoscaler (HPA) Kubernetes ka sabse powerful feature hai jo application traffic badhne par pods ki sankhya automatically badha deta hai (scale-out) aur traffic kam hone par pods ko delete karke resources save karta hai (scale-in). HPA chalane ke liye cluster me 'Metrics Server' install hona zaroori hai jo har pod aur node ka real-time CPU/RAM usage measure karta hai. Is lecture me Metrics Server install karke, Apache Bench tool se load generate karke HPA ko live 2 pods se 10 pods par scale hota hua aur phir cool-off period ke baad wapas 2 pods par aate hue dikhaya gaya hai.",
    "englishSummary": "End-to-end implementation of dynamic workload elasticity using the Horizontal Pod Autoscaler (HPA). Installing and configuring the Kubernetes Metrics Server via metrics.k8s.io API. Understanding the HPA control loop formula: `desiredReplicas = ceil[currentReplicas * (currentMetricValue / targetMetricValue)]`. Simulating real-world traffic surges using load-generation containers, witnessing auto-scale out transitions, and observing stabilization cool-down windows.",
    "keyConcepts": [
      "Horizontal Pod Autoscaling: Adding or removing pod replicas dynamically to match real-time workload demand (scale-out vs scale-in).",
      "Vertical Pod Autoscaling (VPA): Changing CPU/RAM sizes of existing pods (requires restart), contrasted with HPA.",
      "Metrics Server: In-memory aggregator of resource usage data collected by kubelet's cAdvisor across all nodes in the cluster.",
      "HPA Scaling Formula: `desiredReplicas = ceil[currentReplicas * (currentMetricValue / targetMetricValue)]`.",
      "Stabilization Window (Cool-down): Default 5-minute cool-off period to prevent 'flapping' (rapid thrashing between scaling up and scaling down)."
    ],
    "hasWhiteboard": true,
    "whiteboardNotes": {
      "title": "Technical Guftgu Classroom Whiteboard Breakdown (Lec 10 - HPA Autoscaling)",
      "instructor": "Bhupinder Rajput",
      "videoDuration": "1:01:55",
      "summary": "Board diagrams explaining how the HPA controller polls Metrics Server every 15 seconds to automatically scale pods during peak traffic.",
      "sections": [
        {
          "heading": "1. HPA Loop & Metrics Server on Board",
          "hindiNote": "Board par HPA ka internal architecture:",
          "points": [
            "Kubelet cAdvisor: Har node par pods ki CPU/RAM consumption monitor karta hai.",
            "Metrics Server: Har 15 second me cAdvisor se metrics collect karke API banata hai.",
            "HPA Controller: Metrics Server se poochta hai: 'Kya CPU 50% se upar gaya? Agar haan to replicas 2 se badha kar 5 karo!'"
          ],
          "diagram": "[ Pods (cAdvisor) ] ===> [ Metrics Server ] <=== (Polls every 15s) === [ HPA Controller ]\n                                                                           |\n                                                                           v\n[ Scales Deployment: 2 Replicas ===== Traffic Surge =====> 10 Replicas! ]"
        },
        {
          "heading": "2. Live Load Test Simulation on Board",
          "hindiNote": "Practical demonstration ka flow:",
          "points": [
            "Step 1: Deployment banayein (min 2, max 10 pods, target CPU 50%).",
            "Step 2: Busybox container se infinite while-loop chalakar HTTP load bhejein.",
            "Step 3: CPU 85% par pahunchta hai. HPA turant 2 se 4, phir 8, phir 10 pods launch karta hai!",
            "Step 4: Load band karne par 5 minute cool-off ke baad wapas 2 pods par scale-in ho jata hai."
          ],
          "diagram": "Normal: 2 Pods (CPU 10%) ---> Load Starts! ---> CPU 90% ---> HPA scales to 10 Pods!\nLoad Stops! ---> CPU drops to 2% ---> 5-min Cool-down ---> HPA safely scales down to 2 Pods!"
        }
      ]
    },
    "architecture": "Traffic Surge ---> cAdvisor ---> Metrics Server ---> HPA Controller ---> Deployment.replicas scaled up (e.g. 2 -> 10)",
    "commandsOrSteps": [
      "kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml",
      "kubectl top nodes && kubectl top pods",
      "kubectl autoscale deployment my-app --cpu-percent=50 --min=2 --max=10",
      "kubectl get hpa -w",
      "kubectl run -i --tty load-gen --rm --image=busybox --restart=Never -- /bin/sh -c 'while sleep 0.01; do wget -q -O- http://my-app; done'"
    ],
    "examTips": "CKA Exam Rule: For HPA to function, your Deployment's Pod template MUST define 'resources.requests.cpu'. Without CPU requests, HPA cannot calculate the percentage utilization and will show '<unknown>'!",
    "interviewQuestions": "Q: Why does 'kubectl get hpa' show '<unknown>' under the TARGETS column?\nA: The '<unknown>' status occurs because either: 1) The Metrics Server is not installed or healthy in the cluster, or 2) The target Deployment's pod template does not specify 'resources.requests.cpu'. HPA requires a baseline request value to calculate current percentage utilization.",
    "hasLiveLab": true,
    "liveLab": {
      "title": "Hands-On Lab: Horizontal Pod Autoscaler (HPA) & Dynamic Traffic Auto-Scaling",
      "scenario": "Aap ek online movie ticket booking platform (jaise BookMyShow ya IRCTC) chala rahe hain. Normal days me 2 servers kaafi hote hain. Lekin jab kisi blockbuster movie ki ticket booking shuru hoti hai, toh CPU load 90% chala jata hai. HPA ek smart thermostat jaisa hai jo CPU load badhte hi automatically 2 se 10 pods launch kar deta hai, aur raat ko traffic kam hote hi wapas 2 pods par scale down kar deta hai!",
      "objective": "Install Kubernetes Metrics Server, deploy a PHP Apache application with explicit CPU requests, create a HorizontalPodAutoscaler (HPA) targeting 50% CPU utilization, generate synthetic load via an Apache Bench / curl loop, and watch pods auto-scale live from 1 to 10!",
      "duration": "25 Mins",
      "cost": "100% Free",
      "difficulty": "Advanced",
      "diagram": "+--------------------------------------------------------------+\n| HORIZONTAL POD AUTOSCALER (HPA) FEEDBACK LOOP                |\n| Target: 50% CPU Utilization | Min: 1 Pod | Max: 10 Pods      |\n|                                                              |\n|        [ Metrics Server (Kubelet cAdvisor metrics) ]         |\n|                             |                                |\n|                             v (Query metrics every 15s)      |\n|              [ HPA Controller Manager ]                      |\n|                             |                                |\n|         +-------------------+-------------------+            |\n|         |                                       |            |\n|     Normal Load: 5% CPU                    High Traffic Load: 95% CPU\n|     Replicas = 1 Pod                       Replicas SCALED UP TO 6 PODS!\n+--------------------------------------------------------------+",
      "steps": [
        {
          "stepNum": 1,
          "title": "Deploy Kubernetes Metrics Server",
          "laymanExplanation": "Cluster me speedometer (Metrics Server) install karna taaki K8s ko pata chale har pod kitna CPU use kar raha hai.",
          "consoleAction": "Terminal command execution.",
          "command": "kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml",
          "commandExplanation": "Deploys Metrics Server to collect container CPU and memory metrics from kubelet Summary API.",
          "expectedOutput": "serviceaccount/metrics-server created\ndeployment.apps/metrics-server created",
          "verification": "Run `kubectl top nodes` after 60 seconds to confirm CPU/Memory metrics are reporting."
        },
        {
          "stepNum": 2,
          "title": "Deploy Compute-Intensive Application Deployment",
          "laymanExplanation": "Ek aisi web application deploy karna jo complex mathematical calculation karke CPU load generate kare.",
          "consoleAction": "Create `php-apache.yaml` in terminal.",
          "command": "cat << 'EOF' > php-apache.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: php-apache\nspec:\n  selector:\n    matchLabels:\n      run: php-apache\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        run: php-apache\n    spec:\n      containers:\n      - name: php-apache\n        image: registry.k8s.io/hpa-example\n        ports:\n        - containerPort: 80\n        resources:\n          limits:\n            cpu: 500m\n          requests:\n            cpu: 200m\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: php-apache\nspec:\n  ports:\n  - port: 80\n  selector:\n    run: php-apache\nEOF\nkubectl apply -f php-apache.yaml",
          "commandExplanation": "requests.cpu: 200m (Base CPU baseline required for HPA calculations).",
          "expectedOutput": "deployment.apps/php-apache created\nservice/php-apache created",
          "verification": "Check pod running: `kubectl get pods -l run=php-apache`."
        },
        {
          "stepNum": 3,
          "title": "Create HorizontalPodAutoscaler Targeting 50% CPU",
          "laymanExplanation": "HPA rule create karna: 'Agar average CPU 50% cross kare, toh minimum 1 se lekar maximum 10 pods tak auto-scale karo'.",
          "consoleAction": "Terminal command execution.",
          "command": "kubectl autoscale deployment php-apache --cpu-percent=50 --min=1 --max=10",
          "commandExplanation": "`kubectl autoscale` defines target average CPU utilization threshold.",
          "expectedOutput": "horizontalpodautoscaler.autoscaling/php-apache autoscaled",
          "verification": "Check HPA status: `kubectl get hpa php-apache` (Shows `TARGETS: 0%/50%`, `MINPODS: 1`, `MAXPODS: 10`)."
        },
        {
          "stepNum": 4,
          "title": "Generate High Traffic Load via Infinite Curl Loop",
          "laymanExplanation": "Dusre terminal se 1000 requests per second bhejkar CPU load spike karna.",
          "consoleAction": "Run load generator in separate terminal.",
          "command": "kubectl run -i --tty load-generator --rm --image=busybox:1.28 --restart=Never -- /bin/sh -c \"while sleep 0.01; do wget -q -O- http://php-apache; done\"",
          "commandExplanation": "Sends continuous non-stop HTTP requests to `http://php-apache`, driving container CPU up to 250% of request limit.",
          "expectedOutput": "OK! OK! OK! [Continuous requests flowing]",
          "verification": "Open another terminal and monitor: `kubectl get hpa php-apache -w`."
        },
        {
          "stepNum": 5,
          "title": "Witness Live Auto-Scaling from 1 to 6+ Replicas",
          "laymanExplanation": "Live screen par dekhna ki HPA CPU load badhte hi naye pods launch karta hai.",
          "consoleAction": "Terminal watch command.",
          "command": "kubectl get hpa php-apache && kubectl get deployment php-apache",
          "commandExplanation": "Shows target CPU spiking to 150%/50% and REPLICAS dynamically scaling up to 5 or 6 pods!",
          "expectedOutput": "NAME         REFERENCE               TARGETS    MINPODS   MAXPODS   REPLICAS   AGE\nphp-apache   Deployment/php-apache   185%/50%   1         10        6          3m",
          "verification": "Confirm `REPLICAS: 6` in deployment! When you kill load generator (Ctrl+C), HPA cools down back to 1 pod."
        }
      ],
      "simulator": {
        "welcomeMessage": "Kubernetes Horizontal Pod Autoscaler (HPA) Sandbox",
        "commands": {
          "kubectl autoscale deployment php-apache --cpu-percent=50 --min=1 --max=10": "horizontalpodautoscaler.autoscaling/php-apache autoscaled\nTarget: 50% CPU | Min: 1 | Max: 10",
          "kubectl get hpa": "NAME         REFERENCE               TARGETS   MINPODS   MAXPODS   REPLICAS\nphp-apache   Deployment/php-apache   0%/50%    1         10        1",
          "[Simulate High Load Spike]": "Sending 500 req/sec to php-apache...\nCPU metric: 198%/50% -> HPA triggering scale-up calculation:\nceil[1 * (198 / 50)] = 4 replicas needed!\nDeployment php-apache scaled from 1 to 4 replicas.",
          "kubectl get pods -l run=php-apache": "NAME                          READY   STATUS    AGE\nphp-apache-749bf6f868-2k9x8   1/1     Running   5m\nphp-apache-749bf6f868-m831d   1/1     Running   20s\nphp-apache-749bf6f868-px091   1/1     Running   20s\nphp-apache-749bf6f868-rq912   1/1     Running   20s",
          "kubectl delete hpa php-apache && kubectl delete deployment php-apache": "Cleaned up HPA and deployment."
        }
      },
      "troubleshooting": [
        {
          "issue": "HPA shows TARGETS: '<unknown>/50%'",
          "cause": "Metrics server is not installed, or deployment pods do not have `resources.requests.cpu` defined.",
          "solution": "Ensure `resources.requests.cpu` is specified in Pod template and verify metrics server with `kubectl top pods`."
        }
      ],
      "cleanup": [
        "kubectl delete hpa php-apache",
        "kubectl delete deployment php-apache",
        "kubectl delete svc php-apache",
        "rm -f php-apache.yaml"
      ]
    }
  }
];

window.K8S_CHEATSHEETS = {
  "comparisons": [
    {
      "id": "docker-vs-k8s",
      "title": "Docker vs Kubernetes (K8s)",
      "description": "Understanding the fundamental architectural difference between container runtime engine and container orchestration system.",
      "headers": [
        "Aspect",
        "Docker Standalone",
        "Kubernetes (K8s)"
      ],
      "rows": [
        [
          "Primary Role",
          "Builds, packages, and runs containers on a single host",
          "Orchestrates and manages container clusters across multi-node fleets"
        ],
        [
          "Scope",
          "Single Node / Local Machine",
          "Distributed Multi-Host Cluster (hundreds of nodes)"
        ],
        [
          "Auto-Healing",
          "Restarts dead containers on same host only",
          "Reschedules pods to completely different healthy nodes across cluster"
        ],
        [
          "Scaling Mechanism",
          "Manual scaling via CLI (`docker scale` in Swarm)",
          "Automatic Horizontal Pod Autoscaler (HPA) based on CPU/RAM metrics"
        ],
        [
          "Service Discovery & LB",
          "Basic port forwarding on host interface",
          "Built-in CoreDNS and Service virtual IPs (ClusterIP, NodePort, LoadBalancer)"
        ],
        [
          "Zero-Downtime Rollouts",
          "Requires manual script or blue/green switching",
          "Declarative RollingUpdate strategies with instant one-command rollbacks"
        ]
      ]
    },
    {
      "id": "rc-vs-rs-vs-dep",
      "title": "ReplicationController vs ReplicaSet vs Deployment",
      "description": "Evolution of workload controllers in Kubernetes from legacy primitives to modern declarative architectures.",
      "headers": [
        "Controller",
        "ReplicationController",
        "ReplicaSet",
        "Deployment"
      ],
      "rows": [
        [
          "Generation",
          "1st Generation (Legacy)",
          "2nd Generation",
          "3rd Generation (Current Standard)"
        ],
        [
          "Selector Support",
          "Equality-based only (`env = prod`)",
          "Set-based (`env in (prod, stage)`)",
          "Set-based (`matchExpressions`)"
        ],
        [
          "Rolling Updates",
          "Requires client-side kubectl rolling-update",
          "No native rolling update support",
          "Native server-side zero-downtime RollingUpdate"
        ],
        [
          "Rollback Capability",
          "No",
          "No",
          "Yes (`kubectl rollout undo` with full revision history)"
        ],
        [
          "Best Practice",
          "Deprecated / Do not use",
          "Managed implicitly by Deployments",
          "Always recommended for stateless production applications"
        ]
      ]
    },
    {
      "id": "service-types",
      "title": "ClusterIP vs NodePort vs LoadBalancer vs Ingress",
      "description": "Comparative breakdown of Kubernetes network exposure strategies.",
      "headers": [
        "Type",
        "ClusterIP",
        "NodePort",
        "LoadBalancer",
        "Ingress"
      ],
      "rows": [
        [
          "Accessibility",
          "Internal Cluster Only",
          "External via Node IP & Port",
          "External via Dedicated Cloud IP",
          "External Layer 7 HTTP/HTTPS Router"
        ],
        [
          "Port Range",
          "Standard ports (80, 443, 3306)",
          "High range only (30000 - 32767)",
          "Standard ports (80, 443)",
          "Standard ports (80, 443) with SSL termination"
        ],
        [
          "Cloud Dependency",
          "None",
          "None",
          "Requires AWS / GCP / Azure",
          "Requires Ingress Controller (Nginx/Traefik)"
        ],
        [
          "Cost Factor",
          "Free (Zero cost)",
          "Free (Zero cost)",
          "Costly (One cloud LB provisioned per service)",
          "Cost-efficient (Single LB routes to 100+ services)"
        ],
        [
          "Primary Use Case",
          "Backend databases, Redis, intra-service APIs",
          "Dev/testing, non-cloud bare metal setups",
          "Single public services on cloud",
          "Production microservices, path-based / host-based routing"
        ]
      ]
    },
    {
      "id": "probe-types",
      "title": "Liveness Probe vs Readiness Probe vs Startup Probe",
      "description": "Container health monitoring mechanisms configured inside PodSpecs.",
      "headers": [
        "Probe",
        "Liveness Probe",
        "Readiness Probe",
        "Startup Probe"
      ],
      "rows": [
        [
          "Primary Question",
          "'Is the container alive or deadlocked?'",
          "'Is the container ready to receive user traffic?'",
          "'Has the slow-starting application initialized yet?'"
        ],
        [
          "Failure Action",
          "Kubelet KILLS and RESTARTS the container",
          "Kubelet REMOVES pod IP from Service Endpoints (No restart)",
          "Kubelet KILLS container if it exceeds max startup duration"
        ],
        [
          "Traffic Impact",
          "Container restarts, brief interruption",
          "Existing container stays alive; traffic safely paused",
          "Disables liveness checks until application starts cleanly"
        ],
        [
          "Execution Period",
          "Runs continuously throughout container lifecycle",
          "Runs continuously throughout container lifecycle",
          "Runs only during container initial boot phase"
        ]
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": 201,
      "question": "A production Kubernetes pod running a web application experiences an unexpected deadlock in its application thread pool. The container process PID 1 is still technically running, but all incoming HTTP requests hang indefinitely. Which Kubernetes mechanism is designed to detect and resolve this scenario?",
      "options": [
        "A Readiness Probe configured with an HTTP GET check.",
        "A Liveness Probe configured with an HTTP GET health endpoint check.",
        "A ResourceQuota limiting memory usage in the namespace.",
        "A ReplicaSet with a set-based label selector."
      ],
      "correct": 1,
      "explanation": "A Liveness Probe checks if the application is internally healthy and responsive. When the deadlocked web app fails the Liveness Probe HTTP check, the kubelet automatically kills and restarts the container, restoring availability."
    },
    {
      "id": 202,
      "question": "You deploy an update to a Deployment by running 'kubectl set image deployment/app web=app:v2'. Shortly after, users report critical errors on the new version. Which command will instantly revert the cluster back to the previous stable release with zero downtime?",
      "options": [
        "kubectl delete deployment app && kubectl apply -f app-v1.yaml",
        "kubectl rollout undo deployment/app",
        "kubectl scale deployment/app --replicas=0",
        "kubectl rollback deployment/app --force"
      ],
      "correct": 1,
      "explanation": "'kubectl rollout undo deployment/app' triggers an instant rollback to the previous deployment revision in history, scaling down the faulty new ReplicaSet while scaling back up the previous healthy ReplicaSet."
    },
    {
      "id": 203,
      "question": "You execute 'kubectl get svc' and notice a Service has type 'NodePort' with port mapping '80:31250/TCP'. How can an external user on the public internet access this service?",
      "options": [
        "By browsing to http://<Worker_Node_Public_IP>:31250",
        "By browsing to http://<ClusterIP>:80",
        "By browsing to http://<Pod_IP>:31250",
        "By connecting to port 6443 on the Master Node."
      ],
      "correct": 0,
      "explanation": "NodePort exposes the service on every cluster node's external IP at the allocated high-numbered port (between 30000 and 32767). Browsing to http://<Worker_Node_IP>:31250 routes traffic directly through kube-proxy to the destination pod."
    },
    {
      "id": 204,
      "question": "You configure a Horizontal Pod Autoscaler (HPA) for your backend Deployment. However, when you run 'kubectl get hpa', the TARGETS column displays '<unknown> / 50%'. What is the most likely cause?",
      "options": [
        "The cluster has too many worker nodes.",
        "The Deployment pod template is missing 'resources.requests.cpu' specification.",
        "The pods are running on an AWS EC2 instance without an IAM role.",
        "The Service is configured as ClusterIP instead of LoadBalancer."
      ],
      "correct": 1,
      "explanation": "HPA calculates percentage utilization by dividing current pod CPU usage (from Metrics Server) by the requested CPU value. If 'resources.requests.cpu' is not defined in the pod specification, HPA cannot calculate the percentage and reports '<unknown>'."
    },
    {
      "id": 205,
      "question": "In a Kubernetes control plane, which component is the ONLY one that writes directly to the etcd key-value storage engine?",
      "options": [
        "kube-scheduler",
        "kube-controller-manager",
        "kube-apiserver",
        "kubelet"
      ],
      "correct": 2,
      "explanation": "In Kubernetes architecture, only kube-apiserver communicates directly with the etcd database. All other control plane components (scheduler, controller manager) and worker node kubelets communicate exclusively through kube-apiserver."
    }
  ]
};
