"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[393],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>g});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),g=r,v=u["".concat(s,".").concat(g)]||u[g]||p[g]||i;return a?t.createElement(v,l(l({ref:n},c),{},{components:a})):t.createElement(v,l({ref:n},c))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3037:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=a(7462),r=(a(7294),a(3905));const i={sidebar_label:"703.1 Virtual Machine Deployment (weight: 4)",sidebar_position:2,tags:["partial"]},l=void 0,o={unversionedId:"701-100-lpic-devops/703-1",id:"701-100-lpic-devops/703-1",title:"703-1",description:"Key Knowledge Areas:",source:"@site/docs/701-100-lpic-devops/703-1.mdx",sourceDirName:"701-100-lpic-devops",slug:"/701-100-lpic-devops/703-1",permalink:"/701-100-lpic-devops/703-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/701-100-lpic-devops/703-1.mdx",tags:[{label:"partial",permalink:"/tags/partial"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"703.1 Virtual Machine Deployment (weight: 4)",sidebar_position:2,tags:["partial"]},sidebar:"tutorialSidebar",previous:{title:"Index",permalink:"/701-100-lpic-devops/"},next:{title:"Index",permalink:"/PCAP-31-0x-associate-in-python/"}},s={},d=[{value:"Key Knowledge Areas:",id:"key-knowledge-areas",level:2},{value:"Understand Vagrant architecture and concepts, including storage and networking",id:"understand-vagrant-architecture-and-concepts-including-storage-and-networking",level:3},{value:"Retrieve and use boxes from Atlas",id:"retrieve-and-use-boxes-from-atlas",level:3},{value:"Create and run Vagrantfiles",id:"create-and-run-vagrantfiles",level:3},{value:"Access Vagrant virtual machines",id:"access-vagrant-virtual-machines",level:3},{value:"Share and synchronize folder between a Vagrant virtual machine and the host system",id:"share-and-synchronize-folder-between-a-vagrant-virtual-machine-and-the-host-system",level:3},{value:"Understand Vagrant provisioning, including File, Shell, Ansible and Docker",id:"understand-vagrant-provisioning-including-file-shell-ansible-and-docker",level:3},{value:"Understand multi-machine setup",id:"understand-multi-machine-setup",level:3},{value:"Quiz Vagrant:",id:"quiz-vagrant",level:2},{value:"Hands Vagrant:",id:"hands-vagrant",level:2},{value:"Installing Vagrant on CentOS",id:"installing-vagrant-on-centos",level:3},{value:"Install Vagrant",id:"install-vagrant",level:4},{value:"Create a Vagrantfile",id:"create-a-vagrantfile",level:4},{value:"Deploy a Ghost Blog",id:"deploy-a-ghost-blog",level:4},{value:"Using Vagrant and Docker to Build a Dev Environment",id:"using-vagrant-and-docker-to-build-a-dev-environment",level:3},{value:"Create a Dockerfile",id:"create-a-dockerfile",level:4},{value:"Create a Vagrantfile",id:"create-a-vagrantfile-1",level:4},{value:"Run Dev Environment",id:"run-dev-environment",level:4},{value:"Extrafiles",id:"extrafiles",level:4}],c={toc:d};function p(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"key-knowledge-areas"},"Key Knowledge Areas:"),(0,r.kt)("h3",{id:"understand-vagrant-architecture-and-concepts-including-storage-and-networking"},"Understand Vagrant architecture and concepts, including storage and networking"),(0,r.kt)("h3",{id:"retrieve-and-use-boxes-from-atlas"},"Retrieve and use boxes from Atlas"),(0,r.kt)("h3",{id:"create-and-run-vagrantfiles"},"Create and run Vagrantfiles"),(0,r.kt)("h3",{id:"access-vagrant-virtual-machines"},"Access Vagrant virtual machines"),(0,r.kt)("h3",{id:"share-and-synchronize-folder-between-a-vagrant-virtual-machine-and-the-host-system"},"Share and synchronize folder between a Vagrant virtual machine and the host system"),(0,r.kt)("h3",{id:"understand-vagrant-provisioning-including-file-shell-ansible-and-docker"},"Understand Vagrant provisioning, including File, Shell, Ansible and Docker"),(0,r.kt)("h3",{id:"understand-multi-machine-setup"},"Understand multi-machine setup"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"quiz-vagrant"},"Quiz Vagrant:"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"hands-vagrant"},"Hands Vagrant:"),(0,r.kt)("h3",{id:"installing-vagrant-on-centos"},"Installing Vagrant on CentOS"),(0,r.kt)("h4",{id:"install-vagrant"},"Install Vagrant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum -y install https://releases.hashicorp.com/vagrant/2.0.3/vagrant_2.0.3_x86_64.rpm\n")),(0,r.kt)("h4",{id:"create-a-vagrantfile"},"Create a Vagrantfile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Vagrant.configure("2") do |config|\n    config.vm.provider "docker" do |d|\n    d.image = "ghost:4.10.0"\n    d.ports = ["80:2368"]\n  end\nend\n')),(0,r.kt)("h4",{id:"deploy-a-ghost-blog"},"Deploy a Ghost Blog"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vagrant up\n\ncurl localhost\n")),(0,r.kt)("h3",{id:"using-vagrant-and-docker-to-build-a-dev-environment"},"Using Vagrant and Docker to Build a Dev Environment"),(0,r.kt)("h4",{id:"create-a-dockerfile"},"Create a Dockerfile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'FROM node:alpine\nCOPY code /code\nWORKDIR /code\nRUN npm install --production\nEXPOSE 3000\nCMD ["node", "app.js"]\n')),(0,r.kt)("h4",{id:"create-a-vagrantfile-1"},"Create a Vagrantfile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'ENV[\'VAGRANT_DEFAULT_PROVIDER\'] = \'docker\'\nVagrant.configure("2") do |config|\n  config.vm.provider "docker" do |d|\n    #d.image = "ubuntu"\n    d.build_dir = "."\n    d.ports = ["80:3000"]\n  end\n  config.vm.synced_folder ".", "/vagrant"\nend\n')),(0,r.kt)("h4",{id:"run-dev-environment"},"Run Dev Environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vagrant up\n\nvagrant reload\n\ncurl http://localhost\n")),(0,r.kt)("h4",{id:"extrafiles"},"Extrafiles"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lab/app.js"',title:'"lab/app.js"'},"const express = require('express')\nconst app = express()\n\napp.get('/', (req, res) => res.send('Hello World!'))\n\napp.set('port', process.env.PORT || 3000)\napp.listen(app.get('port'), () => console.log('Example app listening on port ' + app.ge\nt('port') + '!'))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="lab/package.json"',title:'"lab/package.json"'},'{\n  "name": "hello-node",\n  "version": "1.0.0",\n  "description": "A simple NodeJS app.",\n  "main": "app.js",\n  "dependencies": {\n    "express": "^4.4.17.1",\n    "package.json": "^2.0.1"\n  },\n  "devDependencies": {},\n  "scripts": {\n    "start": "node app.js",\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/rivethead42/hello-node.git"\n  },\n  "author": "Travis N. Thomsen",\n  "license": "ISC",\n  "bugs": {    "url": "https://github.com/rivethead42/hello-node/issues"\n  },\n  "homepage": "https://github.com/rivethead42/hello-node#readme"\n}\n')))}p.isMDXComponent=!0}}]);