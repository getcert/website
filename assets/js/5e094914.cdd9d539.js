"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[393],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>g});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),c=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,h=p["".concat(o,".").concat(g)]||p[g]||u[g]||l;return a?t.createElement(h,i(i({ref:n},d),{},{components:a})):t.createElement(h,i({ref:n},d))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3037:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"703.1 Virtual Machine Deployment (weight: 4)",sidebar_position:2,tags:["partial"]},i=void 0,s={unversionedId:"701-100-lpic-devops/703-1",id:"701-100-lpic-devops/703-1",title:"703-1",description:"Key Knowledge Areas:",source:"@site/docs/701-100-lpic-devops/703-1.mdx",sourceDirName:"701-100-lpic-devops",slug:"/701-100-lpic-devops/703-1",permalink:"/701-100-lpic-devops/703-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/701-100-lpic-devops/703-1.mdx",tags:[{label:"partial",permalink:"/tags/partial"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"703.1 Virtual Machine Deployment (weight: 4)",sidebar_position:2,tags:["partial"]},sidebar:"tutorialSidebar",previous:{title:"Index",permalink:"/701-100-lpic-devops/"},next:{title:"Index",permalink:"/PCAP-31-0x-associate-in-python/"}},o={},c=[{value:"Key Knowledge Areas:",id:"key-knowledge-areas",level:2},{value:"Understand Vagrant architecture and concepts, including storage and networking",id:"understand-vagrant-architecture-and-concepts-including-storage-and-networking",level:3},{value:"Retrieve and use boxes from Atlas",id:"retrieve-and-use-boxes-from-atlas",level:3},{value:"Create and run Vagrantfiles",id:"create-and-run-vagrantfiles",level:3},{value:"Access Vagrant virtual machines",id:"access-vagrant-virtual-machines",level:3},{value:"Share and synchronize folder between a Vagrant virtual machine and the host system",id:"share-and-synchronize-folder-between-a-vagrant-virtual-machine-and-the-host-system",level:3},{value:"Understand Vagrant provisioning, including File, Shell, Ansible and Docker",id:"understand-vagrant-provisioning-including-file-shell-ansible-and-docker",level:3},{value:"Understand multi-machine setup",id:"understand-multi-machine-setup",level:3},{value:"Quiz Vagrant:",id:"quiz-vagrant",level:2},{value:"Quiz Packer:",id:"quiz-packer",level:2},{value:"Hands On Vagrant:",id:"hands-on-vagrant",level:2},{value:"Installing Vagrant on CentOS",id:"installing-vagrant-on-centos",level:3},{value:"Install Vagrant",id:"install-vagrant",level:4},{value:"Create a Vagrantfile",id:"create-a-vagrantfile",level:4},{value:"Deploy a Ghost Blog",id:"deploy-a-ghost-blog",level:4},{value:"Using Vagrant and Docker to Build a Dev Environment",id:"using-vagrant-and-docker-to-build-a-dev-environment",level:3},{value:"Create a Dockerfile",id:"create-a-dockerfile",level:4},{value:"Create a Vagrantfile",id:"create-a-vagrantfile-1",level:4},{value:"Run Dev Environment",id:"run-dev-environment",level:4},{value:"Extrafiles",id:"extrafiles",level:4},{value:"Hands On Packer",id:"hands-on-packer",level:2},{value:"Using Packer to Create an AMI",id:"using-packer-to-create-an-ami",level:3},{value:"Install Packer on the Cloud9 EC2 Instance",id:"install-packer-on-the-cloud9-ec2-instance",level:4},{value:"Create a packer.json File",id:"create-a-packerjson-file",level:4},{value:"Build an AMI Using packer.json",id:"build-an-ami-using-packerjson",level:4},{value:"Build an EC2 Instance Using the AMI",id:"build-an-ec2-instance-using-the-ami",level:4},{value:"Hands On Ansible",id:"hands-on-ansible",level:2},{value:"Exchange SSH Keys and Run Ansible Playbooks",id:"exchange-ssh-keys-and-run-ansible-playbooks",level:3},{value:"Create the SSH Keys for Exchanging between Master and Client Servers",id:"create-the-ssh-keys-for-exchanging-between-master-and-client-servers",level:4},{value:"Install the Elinks Package on the Remote Client Server",id:"install-the-elinks-package-on-the-remote-client-server",level:4},{value:"Hands On Docker",id:"hands-on-docker",level:2},{value:"Creating a Dockerfile",id:"creating-a-dockerfile",level:3},{value:"Clone the Application from GitHub",id:"clone-the-application-from-github",level:4},{value:"Build the Docker Image",id:"build-the-docker-image",level:4}],d={toc:c};function u(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"key-knowledge-areas"},"Key Knowledge Areas:"),(0,r.kt)("h3",{id:"understand-vagrant-architecture-and-concepts-including-storage-and-networking"},"Understand Vagrant architecture and concepts, including storage and networking"),(0,r.kt)("h3",{id:"retrieve-and-use-boxes-from-atlas"},"Retrieve and use boxes from Atlas"),(0,r.kt)("h3",{id:"create-and-run-vagrantfiles"},"Create and run Vagrantfiles"),(0,r.kt)("h3",{id:"access-vagrant-virtual-machines"},"Access Vagrant virtual machines"),(0,r.kt)("h3",{id:"share-and-synchronize-folder-between-a-vagrant-virtual-machine-and-the-host-system"},"Share and synchronize folder between a Vagrant virtual machine and the host system"),(0,r.kt)("h3",{id:"understand-vagrant-provisioning-including-file-shell-ansible-and-docker"},"Understand Vagrant provisioning, including File, Shell, Ansible and Docker"),(0,r.kt)("h3",{id:"understand-multi-machine-setup"},"Understand multi-machine setup"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"quiz-vagrant"},"Quiz Vagrant:"),(0,r.kt)("h2",{id:"quiz-packer"},"Quiz Packer:"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"hands-on-vagrant"},"Hands On Vagrant:"),(0,r.kt)("h3",{id:"installing-vagrant-on-centos"},"Installing Vagrant on CentOS"),(0,r.kt)("h4",{id:"install-vagrant"},"Install Vagrant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum -y install https://releases.hashicorp.com/vagrant/2.0.3/vagrant_2.0.3_x86_64.rpm\n")),(0,r.kt)("h4",{id:"create-a-vagrantfile"},"Create a Vagrantfile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby",metastring:'title="./vagranfile"',title:'"./vagranfile"'},'Vagrant.configure("2") do |config|\n    config.vm.provider "docker" do |d|\n    d.image = "ghost:4.10.0"\n    d.ports = ["80:2368"]\n  end\nend\n')),(0,r.kt)("h4",{id:"deploy-a-ghost-blog"},"Deploy a Ghost Blog"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# startup\nvagrant up\n\ncurl localhost\n")),(0,r.kt)("h3",{id:"using-vagrant-and-docker-to-build-a-dev-environment"},"Using Vagrant and Docker to Build a Dev Environment"),(0,r.kt)("h4",{id:"create-a-dockerfile"},"Create a Dockerfile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="./dockerfile"',title:'"./dockerfile"'},'FROM node:alpine\nCOPY code /code\nWORKDIR /code\nRUN npm install --production\nEXPOSE 3000\nCMD ["node", "app.js"]\n')),(0,r.kt)("h4",{id:"create-a-vagrantfile-1"},"Create a Vagrantfile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby",metastring:'title="./vagrantfile"',title:'"./vagrantfile"'},'ENV[\'VAGRANT_DEFAULT_PROVIDER\'] = \'docker\'\nVagrant.configure("2") do |config|\n  config.vm.provider "docker" do |d|\n    #d.image = "ubuntu"\n    d.build_dir = "."\n    d.ports = ["80:3000"]\n  end\n  config.vm.synced_folder ".", "/vagrant"\nend\n')),(0,r.kt)("h4",{id:"run-dev-environment"},"Run Dev Environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# startup \nvagrant up\n\n#make change and reload\nvagrant reload\n\ncurl http://localhost\n")),(0,r.kt)("h4",{id:"extrafiles"},"Extrafiles"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lab/app.js"',title:'"lab/app.js"'},"const express = require('express')\nconst app = express()\n\napp.get('/', (req, res) => res.send('Hello World!'))\n\napp.set('port', process.env.PORT || 3000)\napp.listen(app.get('port'), () => console.log('Example app listening on port ' + app.ge\nt('port') + '!'))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="lab/package.json"',title:'"lab/package.json"'},'{\n  "name": "hello-node",\n  "version": "1.0.0",\n  "description": "A simple NodeJS app.",\n  "main": "app.js",\n  "dependencies": {\n    "express": "^4.4.17.1",\n    "package.json": "^2.0.1"\n  },\n  "devDependencies": {},\n  "scripts": {\n    "start": "node app.js",\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/rivethead42/hello-node.git"\n  },\n  "author": "Travis N. Thomsen",\n  "license": "ISC",\n  "bugs": {    "url": "https://github.com/rivethead42/hello-node/issues"\n  },\n  "homepage": "https://github.com/rivethead42/hello-node#readme"\n}\n')),(0,r.kt)("h2",{id:"hands-on-packer"},"Hands On Packer"),(0,r.kt)("h3",{id:"using-packer-to-create-an-ami"},"Using Packer to Create an AMI"),(0,r.kt)("h4",{id:"install-packer-on-the-cloud9-ec2-instance"},"Install Packer on the Cloud9 EC2 Instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# 1.  In the Cloud9 terminal, become the\xa0`root`\xa0user:\nsudo su\n    \n# 2.  Change directory to\xa0`/usr/local/bin`:\ncd /usr/local/bin\n    \n# 3.  Download the Packer installer, replacing\xa0`<PACKER_LINK>`\xa0with the one you copied earlier: \nwget <PACKER_LINK>\n    \n# 4.  Extract the file:\nunzip packer_1.5.5_linux_amd64.zip\n    \n# 5.  Remove the Packer ZIP file:\nrm packer_1.5.5_linux_amd64.zip\n    \n# 6.  Exit the\xa0`root`\xa0user session:\nexit\n    \n# 7.  Verify Packer works:\npacker --version\n")),(0,r.kt)("h4",{id:"create-a-packerjson-file"},"Create a packer.json File"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='./packer.json'",title:"'./packer.json'"},'{\n  "variables": {\n    "instance_size": "t2.small",\n    "ami_name": "ami-<USERNAME>",\n    "base_ami": "ami-1853ac65",\n    "ssh_username": "ec2-user",\n    "vpc_id": "",\n    "subnet_id": ""\n  },\n  "builders": [\n    {\n      "type": "amazon-ebs",\n      "region": "us-east-1",\n      "source_ami": "{{user `base_ami`}}",\n      "instance_type": "{{user `instance_size`}}",\n      "ssh_username": "{{user `ssh_username`}}",\n      "ssh_timeout": "20m",\n      "ami_name": "{{user `ami_name`}}",\n      "ssh_pty" : "true",\n      "vpc_id": "{{user `vpc_id`}}",\n      "subnet_id": "{{user `subnet_id`}}",\n      "tags": {\n        "Name": "App Name",\n        "BuiltBy": "Packer"\n      }\n    }\n  ],\n  "description": "AWS image",\n  "provisioners": [\n    {\n      "type": "shell",\n      "inline": [\n        "sudo yum update -y",\n        "sudo yum install -y git"\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# validate\npacker validate packer.json\n")),(0,r.kt)("h4",{id:"build-an-ami-using-packerjson"},"Build an AMI Using packer.json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# change the <VALUES> that come from AWS\npacker build -var 'ami_name=ami-<USERNAME>' -var 'base_ami=<AMI_ID>' -var 'vpc_id=<VPC_ID>' -var 'subnet_id=<SUBNET_ID>' packer.json\n")),(0,r.kt)("h4",{id:"build-an-ec2-instance-using-the-ami"},"Build an EC2 Instance Using the AMI"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click\xa0",(0,r.kt)("strong",{parentName:"li"},"Launch"),"."),(0,r.kt)("li",{parentName:"ol"},"Check the box to select a\xa0",(0,r.kt)("strong",{parentName:"li"},"t2.small"),"\xa0instance type."),(0,r.kt)("li",{parentName:"ol"},"Click\xa0",(0,r.kt)("strong",{parentName:"li"},"Next: Configure Instance Details"),"\xa0>\xa0",(0,r.kt)("strong",{parentName:"li"},"Next: Add Storage"),"\xa0>\xa0",(0,r.kt)("strong",{parentName:"li"},"Next: Add Tags"),"."),(0,r.kt)("li",{parentName:"ol"},"Add a tag:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Key"),":\xa0",(0,r.kt)("strong",{parentName:"li"},"Name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Value"),":\xa0",(0,r.kt)("strong",{parentName:"li"},"test-ami")))),(0,r.kt)("li",{parentName:"ol"},"Click\xa0",(0,r.kt)("strong",{parentName:"li"},"Next: Configure Security Group"),"\xa0>\xa0",(0,r.kt)("strong",{parentName:"li"},"Review and Launch"),"\xa0>\xa0",(0,r.kt)("strong",{parentName:"li"},"Launch"),"."),(0,r.kt)("li",{parentName:"ol"},"Choose\xa0",(0,r.kt)("strong",{parentName:"li"},"Proceed without a key pair"),"\xa0and check the box to acknowledge."),(0,r.kt)("li",{parentName:"ol"},"Click\xa0",(0,r.kt)("strong",{parentName:"li"},"Launch Instances"),"."),(0,r.kt)("li",{parentName:"ol"},'On the next screen, you should see a green box saying "Your instances are now launching". Click the\xa0',(0,r.kt)("strong",{parentName:"li"},"instance ID"),'\xa0number provided next to the text "The following instance launches have been initiated:"'),(0,r.kt)("li",{parentName:"ol"},'Watch your AMI progress to a "Running" instance state. You may need to click the refresh icon in the top-right to show the updated state.')),(0,r.kt)("h2",{id:"hands-on-ansible"},"Hands On Ansible"),(0,r.kt)("h3",{id:"exchange-ssh-keys-and-run-ansible-playbooks"},"Exchange SSH Keys and Run Ansible Playbooks"),(0,r.kt)("h4",{id:"create-the-ssh-keys-for-exchanging-between-master-and-client-servers"},"Create the SSH Keys for Exchanging between Master and Client Servers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Create a new user called\xa0`ansible`\xa0and set the password.\nadduser ansible passwd ansible\n\n# Add the\xa0`ansible`\xa0user to the\xa0`sudoers`\xa0file and make sure that it can use\xa0`sudo`\xa0without a password.\nvisudo\n\n# While logged in as\xa0`ansible`\xa0user, create the necessary keys.\nssh-keygen\n\n# Exchange the key with the remote client server.\nssh-copy-id 10.0.1.101\n\n# Add the client to the Ansible host file.\nvi /etc/ansible/hosts\n\n")),(0,r.kt)("h4",{id:"install-the-elinks-package-on-the-remote-client-server"},"Install the Elinks Package on the Remote Client Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Run the playbook on the master.\nansible-playbook /home/cloud_user/playbook.yml\n\n# Once the software is installed (it should show a success message), log in to the remote system and run the following:\nelinks\n\n# You should see an\xa0_About_\xa0screen on your console.\n")),(0,r.kt)("h2",{id:"hands-on-docker"},"Hands On Docker"),(0,r.kt)("h3",{id:"creating-a-dockerfile"},"Creating a Dockerfile"),(0,r.kt)("h4",{id:"clone-the-application-from-github"},"Clone the Application from GitHub"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"")),(0,r.kt)("h4",{id:"build-the-docker-image"},"Build the Docker Image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"")))}u.isMDXComponent=!0}}]);