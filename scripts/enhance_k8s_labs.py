#!/usr/bin/env python3
"""
enhance_k8s_labs.py
Generates comprehensive, beginner-friendly live labs for all 10 Kubernetes lectures.
"""

K8S_LABS = {
    1: {
        "title": "Hands-On Lab: Exploring Kubernetes High-Level Orchestration & Cluster Status",
        "scenario": "Maan lijiye aapke paas 50 cargo delivery trucks hain. Agar har truck driver ko khud decide karna pade kahan jana hai, kab tyre badalna hai aur accident hone par replacement gadi kahan se aayegi, toh pura logistics collapse ho jayega! Kubernetes ek central traffic control tower jaisa hai jo sabhi trucks (containers) ko continuously track karta hai aur auto-pilot par manage karta hai.",
        "objective": "Understand the orchestration need by interacting with a Kubernetes cluster via kubectl, inspecting nodes, verifying control plane components, and observing the cluster-info health status.",
        "duration": "15 Mins",
        "cost": "100% Free",
        "difficulty": "Complete Beginner",
        "diagram": """+--------------------------------------------------------------+
| KUBERNETES CENTRAL CONTROL TOWER (Master Control Plane)      |
|  - Tracks 1000s of containers across servers                 |
|  - Auto-recovers failed pods in milliseconds                 |
|                                                              |
|        [ kubectl client / User Request ]                     |
|                      |                                       |
|                      v                                       |
|            [ Kube-API-Server ]                               |
|            (The Front Door of K8s)                           |
|                      |                                       |
|         +------------+------------+                          |
|         v                         v                          |
|  [ Worker Node 1 ]         [ Worker Node 2 ]                 |
|  [Pod A] [Pod B]           [Pod C] [Pod D]                   |
+--------------------------------------------------------------+""",
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
    },
    2: {
        "title": "Hands-On Lab: Master vs Worker Node Internals & Component Deep Dive",
        "scenario": "Ek hospital me do tarah ke log hote hain: Doctors aur Management jo reception par patient record dekhte hain aur schedule banate hain (Master Node Control Plane), aur Nurses/Wards jo actual patient care provide karte hain (Worker Nodes). Agar doctor hi injection lagane lag jaye ya nurse akele discharge policy banane lage toh chaos ho jayega! Is lab me hum Master aur Worker ke exact roles ko dissect karenge.",
        "objective": "Deep-dive into K8s internal mechanics: Describe master node attributes, view static pod manifests under `/etc/kubernetes/manifests`, inspect the `etcd` distributed key-value store, and check `kubelet` agent service logs on worker nodes.",
        "duration": "20 Mins",
        "cost": "100% Free",
        "difficulty": "Intermediate",
        "diagram": """+--------------------------------------------------------------+
| Master Node (/etc/kubernetes/manifests/)                     |
|  [ kube-apiserver.yaml ]                                     |
|  [ kube-scheduler.yaml ]                                     |
|  [ kube-controller-manager.yaml ]                            |
|  [ etcd.yaml (Stores all cluster state on port 2379) ]       |
|                                                              |
| Worker Node                                                  |
|  [ systemd: kubelet.service ] <---> Talk to API Server       |
|  [ systemd: containerd.service ] <---> Run Container Shims   |
|  [ kube-proxy iptables rules ] <---> Route Service Traffic   |
+--------------------------------------------------------------+""",
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
    },
    3: {
        "title": "Hands-On Lab: Production Multi-Node Cluster Setup via Kubeadm & Calico CNI on AWS EC2",
        "scenario": "Aap ek multi-story apartment building construct kar rahe hain. Pehle foundation dalti hai (OS & Container Runtime), fir architect ka central command office banta hai (Kubeadm Init on Master), fir building ke sabhi flats ke beech telephone wiring hoti hai (Calico CNI Networking), aur aakhir me residents apne flat me join karte hain (Kubeadm Join on Worker). Yeh real production setup hai!",
        "objective": "Build a real 2-node Kubernetes cluster from scratch on AWS EC2 instances: Configure Linux prerequisites (swap off, bridge netfilter), initialize master via `kubeadm init`, install Calico Pod CNI networking, and join worker node.",
        "duration": "30 Mins",
        "cost": "AWS Free Tier (2x t2.medium or t3.medium recommended for control plane)",
        "difficulty": "Advanced",
        "diagram": """+--------------------------------------------------------------+
| AWS VPC (172.31.0.0/16)                                      |
|                                                              |
|  [ Master Node: t3.medium ] (172.31.10.100)                  |
|  1. swapoff -a                                               |
|  2. kubeadm init --pod-network-cidr=192.168.0.0/16           |
|  3. kubectl apply -f calico.yaml                             |
|  4. Generate join token                                      |
|                                                              |
|                               ^                              |
|         kubeadm join token    | (Port 6443)                  |
|                               v                              |
|                                                              |
|  [ Worker Node: t3.small ] (172.31.10.101)                   |
|  1. swapoff -a                                               |
|  2. kubeadm join 172.31.10.100:6443 --token abc.123...       |
+--------------------------------------------------------------+""",
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
    },
    4: {
        "title": "Hands-On Lab: Writing Pod Manifests, Multi-Container Pods & Imperative vs Declarative Ops",
        "scenario": "Pod Kubernetes ki sabse basic atomic building block hoti hai. Jaise ek pea pod (matar ki phali) ke andar 1 se 3 daane ho sakte hain jo ek hi chhilke aur pani ko share karte hain, waise hi ek Pod ke andar 1 ya multiple tightly-coupled containers ho sakte hain jo same Network IP aur Storage volume share karte hain!",
        "objective": "Master both Imperative CLI generation (`kubectl run`) and Declarative production YAML manifests (`kubectl apply -f`). Deploy a multi-container pod with an application container and a sidecar helper, inspect shared localhost networking, and view logs.",
        "duration": "20 Mins",
        "cost": "100% Free",
        "difficulty": "Complete Beginner",
        "diagram": """+--------------------------------------------------------------+
| KUBERNETES POD ('web-and-logger')                            |
| Pod IP: 192.168.1.45 (Single Shared IP Address)              |
|                                                              |
|  +---------------------------+   +------------------------+  |
|  | Container 1: App Server   |   | Container 2: Sidecar   |  |
|  | Nginx on Port 80          |   | Log shipper / monitor  |  |
|  +---------------------------+   +------------------------+  |
|                |                              |              |
|                +---- Shared Localhost:80 -----+              |
|                +---- Shared Volume /var/log --+              |
+--------------------------------------------------------------+""",
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
    },
    5: {
        "title": "Hands-On Lab: ReplicationController, ReplicaSets & Automated Self-Healing",
        "scenario": "Aap ek 24x7 security guard company chalate hain jisme client ka rule hai: 'Gate par hamesha theek 3 guards hone chahiye'. Agar ek guard bimar hokar chala jaye, toh supervisor (ReplicaSet Controller) bina kisi delay ke turant backup guard bhejkar count ko wapas 3 kar deta hai. Is lab me hum ek guard (pod) ko zabardasti delete karenge aur dekhenge ki ReplicaSet use 1 second me kaise recreate karta hai!",
        "objective": "Understand why bare Pods must never be deployed directly in production. Deploy a declarative ReplicaSet managing 3 identical pod replicas, verify label selector binding, manually delete a healthy pod, and witness instantaneous self-healing.",
        "duration": "20 Mins",
        "cost": "100% Free",
        "difficulty": "Intermediate",
        "diagram": """+--------------------------------------------------------------+
| REPLICASET CONTROLLER: 'web-replicaset'                      |
| Desired Replicas: 3 | Selector: app=frontend                 |
|                                                              |
|        [ Pod 1 (Active) ]      [ Pod 2 (Active) ]            |
|                                                              |
|        [ Pod 3 ] ---> MANUALLY KILLED / DELETED!             |
|             |                                                |
|             v                                                |
|  Current Replicas = 2 != Desired Replicas = 3                |
|             |                                                |
|             v                                                |
|  [ ReplicaSet Reconcile Loop Instantly Launches Pod 4! ]     |
+--------------------------------------------------------------+""",
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
    },
    6: {
        "title": "Hands-On Lab: Zero-Downtime Deployments, Rolling Updates & Instant Rollbacks",
        "scenario": "Aapke paas Netflix ya Amazon jaisi website hai jise har second laakhon log use kar rahe hain. Agar aapko naya version (v2) release karna hai, toh aap website ko 'Maintenance Mode' me band nahi kar sakte! Kubernetes Deployments ek-ek karke purane pods ko naye v2 pods se replace karte hain (Rolling Update). Aur agar v2 me koi bug nikal aaye, toh 1 second me purane v1 par wapas rollback kar dete hain!",
        "objective": "Deploy a production-grade Deployment object, execute a zero-downtime rolling update from v1 to v2, monitor rollout status, simulate a failed bad release, and execute an instant one-line rollback.",
        "duration": "25 Mins",
        "cost": "100% Free",
        "difficulty": "Intermediate",
        "diagram": """+--------------------------------------------------------------+
| ZERO-DOWNTIME ROLLING UPDATE (v1 -> v2)                      |
|                                                              |
|  [ Deployment: web-deploy ]                                  |
|         |                                                    |
|         +---> ReplicaSet v1 (1.24) [ 3 -> 2 -> 1 -> 0 Pods ] |
|         |                                                    |
|         +---> ReplicaSet v2 (1.25) [ 0 -> 1 -> 2 -> 3 Pods ] |
|                                                              |
|  User Traffic continues flowing WITHOUT A SINGLE DROPPED TCP PACKET!
+--------------------------------------------------------------+""",
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
    },
    7: {
        "title": "Hands-On Lab: Kubernetes Networking, Services & CoreDNS Discovery (ClusterIP & NodePort)",
        "scenario": "Pods ephemeral hote hain (aate jaate rehte hain aur unka IP har baar badal jata hai). Agar aap apne frontend ko kisi pod ke dynamic IP se connect karenge, toh pod restart hote hi link toot jayega! Kubernetes Service ek permanent telephone number aur load balancer jaisa hota hai. Pods chahe 100 baar restart hon, Service ka static IP aur DNS name (`my-service`) hamesha fixed rehta hai.",
        "objective": "Solve the ephemeral Pod IP problem: Deploy a backend Deployment, expose it using a ClusterIP Service for internal microservice discovery via CoreDNS, and expose a NodePort Service (Port 30000-32767) to access the application from the external internet.",
        "duration": "25 Mins",
        "cost": "100% Free",
        "difficulty": "Intermediate",
        "diagram": """+--------------------------------------------------------------+
| KUBERNETES SERVICE NETWORKING                                |
|                                                              |
|  External Browser / Client                                   |
|         |                                                    |
|         v (Access Node IP: Port 30080)                       |
|  +--------------------------------------------------------+  |
|  | NodePort Service ('web-service')                       |  |
|  | Static Virtual ClusterIP: 10.96.24.112                 |  |
|  | CoreDNS: 'web-service.default.svc.cluster.local'       |  |
|  +--------------------------------------------------------+  |
|         |                                                    |
|         +---> Round-Robin Load Balancing                     |
|         |                                                    |
|         +---> [ Pod 1: 192.168.1.10 ]                        |
|         +---> [ Pod 2: 192.168.1.11 ]                        |
|         +---> [ Pod 3: 192.168.1.12 ]                        |
+--------------------------------------------------------------+""",
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
    },
    8: {
        "title": "Hands-On Lab: Persistent Storage (PV & PVC) and Application Health Probes (Liveness & Readiness)",
        "scenario": "Ek hotel me jab koi guest room me behosh ho jata hai, doctor stethoscope lagakar pulse check karta hai (Liveness Probe). Agar pulse band hai, toh CPR/restart diya jata hai. Jab tak patient theek se chalne layak na ho jaye, use kaam par nahi bheja jata (Readiness Probe). Aur patient ki medical file locker me store hoti hai chahe patient kisi bhi room me shift ho (Persistent Volume PVC)!",
        "objective": "Configure production resilience: Build a PersistentVolume (PV) and claim it with PersistentVolumeClaim (PVC) for persistent database storage. Implement HTTP Liveness and Readiness Probes to detect application deadlocks and automate container restarts.",
        "duration": "25 Mins",
        "cost": "100% Free",
        "difficulty": "Intermediate to Advanced",
        "diagram": """+--------------------------------------------------------------+
| HEALTH PROBES & PERSISTENT STORAGE                           |
|                                                              |
|  [ Pod: resilient-app ]                                      |
|    |                                                         |
|    +---> Liveness Probe (GET /healthz every 5s)              |
|    |     Failed 3 times? Kubelet RESTARTS CONTAINER!         |
|    |                                                         |
|    +---> Readiness Probe (GET /ready every 3s)               |
|    |     Failed? Kubelet REMOVES POD FROM SERVICE ENDPOINTS! |
|    |                                                         |
|    +---> Mount: /app/data                                    |
|             |                                                |
|             v                                                |
|  [ PersistentVolumeClaim: app-pvc (1Gi) ]                    |
|             |                                                |
|             v                                                |
|  [ PersistentVolume: app-pv (HostPath / EBS Volume) ]        |
+--------------------------------------------------------------+""",
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
    },
    9: {
        "title": "Hands-On Lab: Multi-Tenancy Isolation via Namespaces, ResourceQuota & LimitRanges",
        "scenario": "Ek bada office building hai jisme 2 alag companies kaam karti hain: Ek Development team (`dev`) aur ek Production team (`prod`). Agar dev team bina roke sara electricity aur AC consumption use kar le, toh prod team crash ho jayegi! Kubernetes me Namespaces virtual boundaries banate hain, ResourceQuota total CPU/RAM ceiling fix karta hai, aur LimitRange har pod ka minimum/maximum size enforce karta hai.",
        "objective": "Partition a single Kubernetes cluster into multi-tenant environments: Create `development` and `production` namespaces, enforce hard CPU/Memory ceilings via `ResourceQuota`, set default container allocations via `LimitRange`, and verify quota violation blocks.",
        "duration": "20 Mins",
        "cost": "100% Free",
        "difficulty": "Intermediate",
        "diagram": """+--------------------------------------------------------------+
| SINGLE PHYSICAL KUBERNETES CLUSTER                           |
|                                                              |
|  [ Namespace: development ]       [ Namespace: production ]  |
|  Hard Quota:                      Hard Quota:                |
|  - Max 2 CPU                      - Max 16 CPU               |
|  - Max 2Gi RAM                    - Max 32Gi RAM             |
|  - Max 4 Pods                     - Max 50 Pods              |
|                                                              |
|  Any request exceeding quota is BLOCKED by API Server!       |
+--------------------------------------------------------------+""",
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
    },
    10: {
        "title": "Hands-On Lab: Horizontal Pod Autoscaler (HPA) & Dynamic Traffic Auto-Scaling",
        "scenario": "Aap ek online movie ticket booking platform (jaise BookMyShow ya IRCTC) chala rahe hain. Normal days me 2 servers kaafi hote hain. Lekin jab kisi blockbuster movie ki ticket booking shuru hoti hai, toh CPU load 90% chala jata hai. HPA ek smart thermostat jaisa hai jo CPU load badhte hi automatically 2 se 10 pods launch kar deta hai, aur raat ko traffic kam hote hi wapas 2 pods par scale down kar deta hai!",
        "objective": "Install Kubernetes Metrics Server, deploy a PHP Apache application with explicit CPU requests, create a HorizontalPodAutoscaler (HPA) targeting 50% CPU utilization, generate synthetic load via an Apache Bench / curl loop, and watch pods auto-scale live from 1 to 10!",
        "duration": "25 Mins",
        "cost": "100% Free",
        "difficulty": "Advanced",
        "diagram": """+--------------------------------------------------------------+
| HORIZONTAL POD AUTOSCALER (HPA) FEEDBACK LOOP                |
| Target: 50% CPU Utilization | Min: 1 Pod | Max: 10 Pods      |
|                                                              |
|        [ Metrics Server (Kubelet cAdvisor metrics) ]         |
|                             |                                |
|                             v (Query metrics every 15s)      |
|              [ HPA Controller Manager ]                      |
|                             |                                |
|         +-------------------+-------------------+            |
|         |                                       |            |
|     Normal Load: 5% CPU                    High Traffic Load: 95% CPU
|     Replicas = 1 Pod                       Replicas SCALED UP TO 6 PODS!
+--------------------------------------------------------------+""",
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

print(f"Loaded {len(K8S_LABS)} Kubernetes live labs!")
