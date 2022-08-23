"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[8565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const o={id:"intro",title:"Introduction"},l="Basic Concepts",r={unversionedId:"documentation/sdk/arduino/intro",id:"documentation/sdk/arduino/intro",title:"Introduction",description:"The basic concepts behind the SimpleIOT platform are defined in the introduction.",source:"@site/docs/documentation/sdk/arduino/intro.md",sourceDirName:"documentation/sdk/arduino",slug:"/documentation/sdk/arduino/intro",permalink:"/docs/documentation/sdk/arduino/intro",draft:!1,tags:[],version:"current",frontMatter:{id:"intro",title:"Introduction"},sidebar:"theSidebar",previous:{title:"Introduction",permalink:"/docs/documentation/sdk/intro"},next:{title:"Class Reference",permalink:"/docs/documentation/sdk/arduino/classref"}},s={},d=[{value:"Arduino Classic",id:"arduino-classic",level:2},{value:"Arduino IDE 2.0",id:"arduino-ide-20",level:2},{value:"Arduino CLI",id:"arduino-cli",level:2},{value:"Board Manager",id:"board-manager",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Device Provisioning",id:"device-provisioning",level:2},{value:"Connecting to the cloud",id:"connecting-to-the-cloud",level:2},{value:"IOT Endpoint",id:"iot-endpoint",level:3},{value:"Security Certificates",id:"security-certificates",level:3},{value:"SimpleIOT Settings",id:"simpleiot-settings",level:3},{value:"Wifi Settings",id:"wifi-settings",level:3},{value:"Assembling the parts",id:"assembling-the-parts",level:2},{value:"Initialization",id:"initialization",level:2},{value:"onConnectionReady",id:"onconnectionready",level:3},{value:"onDataFromCloud",id:"ondatafromcloud",level:3}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-concepts"},"Basic Concepts"),(0,a.kt)("p",null,"The basic concepts behind the SimpleIOT platform are defined in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/intro"},"introduction"),"."),(0,a.kt)("p",null,"Under the Arduino system, the configuration will look like this:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/simpleiot-build/img/arduino/arduino-app.png",width:"60%"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The Sketch will include SimpleIOT as an additional library and provide certain items (detailed below) to configure and provision the device. Once compiled and flashed, the sketch will securely connect to AWS IOT and allow send/receive of data to the cloud."),(0,a.kt)("p",null,"The type of information that can be exchanged is totally up to you. You can define key/values in the description of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/documentation/cli/model"},"Model")," and send data to the cloud via a call like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  iot->set("temperature", 78.9);\n')),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Installing SimpleIOT SDK can either be done using the ",(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/software"},"Arduino Classic App"),", the ",(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/software"},"Arduino IDE 2.0")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/pro/cli"},"Arduino Command-Line-Interface"),"."),(0,a.kt)("h2",{id:"arduino-classic"},"Arduino Classic"),(0,a.kt)("p",null,"Go into the Library Manager, search for ",(0,a.kt)("inlineCode",{parentName:"p"},"simpleiot"),", and install it from there: "),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/simpleiot-build/img/arduino/manage-library-app.png",width:"90%"})),(0,a.kt)("br",null),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/simpleiot-build/img/arduino/manage-library-app-install.png",width:"80%"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"arduino-ide-20"},"Arduino IDE 2.0"),(0,a.kt)("p",null,"Click on the Library Manager Icon, search for 'simpleiot', and click on Install:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/simpleiot-build/img/arduino/manage-library-ide.png",width:"80%"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"arduino-cli"},"Arduino CLI"),(0,a.kt)("p",null,"If using the Command Line Interface, you can use this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> arduino-cli lib install simpleiot\n")),(0,a.kt)("p",null,"If you prefer to install the latest version of the SDK from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/simpleiot-arduino"},"Github repository"),", you can use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> arduino-cli lib install --git-url https://github.com/awslabs/simpleiot-arduino.git\n")),(0,a.kt)("h2",{id:"board-manager"},"Board Manager"),(0,a.kt)("p",null,"The code has been tested with ESP32-based devices. To add support for these, you may need to add them to your development tool manually. Instructions from Espressif ",(0,a.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html"},"are provided here"),"."),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"The SimpleIOT SDK and its examples and demos rely on the following SDKs. The IDEs and CLIs should automatically install these. The CLI will install these if it is installed via the ",(0,a.kt)("inlineCode",{parentName:"p"},"iot toolchain install")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"arduino-cli config set board_manager.additional_urls https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json\narduino-cli config set library.enable_unsafe_install true\narduino-cli core update-index\narduino-cli core install esp32:esp32\narduino-cli lib install ArduinoJson\narduino-cli lib install ArduinoMqttClient\narduino-cli lib install FastLED\narduino-cli lib install TinyGPSPlus-ESP32\narduino-cli lib install --git-url https://github.com/m5stack/M5Core2.git\narduino-cli lib install --git-url https://github.com/m5stack/UNIT_ENV.git\narduino-cli lib install --git-url https://github.com/m5stack/UNIT_ENCODER.git\narduino-cli lib install --git-url https://github.com/aws-samples/arduino-aws-greengrass-iot.git\narduino-cli lib install --git-url https://github.com/awslabs/simpleiot-arduino.git\n")),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"Once installed, you can create a ",(0,a.kt)("em",{parentName:"p"},"HelloWorld")," and a ",(0,a.kt)("em",{parentName:"p"},"SensorDemo")," project from the IDE's SimpleIOT ",(0,a.kt)("inlineCode",{parentName:"p"},"Examples")," menu. These examples are designed to work with the ",(0,a.kt)("a",{parentName:"p",href:"https://shop.m5stack.com/products/m5stack-core2-esp32-iot-development-kit"},"M5Stack Core2 ESP32")," or ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/iot/edukit/"},"AWS IOT EduKit")," devices."),(0,a.kt)("p",null,"Alternately, you can purchase the ",(0,a.kt)("a",{parentName:"p",href:"https://m5stack.com"},"SimpleIOT Starter Kit"),", which contains all the devices and sensors to build the sensor demo example."),(0,a.kt)("h2",{id:"device-provisioning"},"Device Provisioning"),(0,a.kt)("p",null,"Each ",(0,a.kt)("strong",{parentName:"p"},"Device")," in the SimpleIOT universe must be registered in the system. This is done by using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/documentation/cli/device#iot-device-add"},"iot device add")," command in the SimpleIOT CLI and providing a unique serial number, as well as the associated Model, Project, and Team values. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> iot device add --team="{team-name} --project="{my-project}" --model="{my-model}" --serial="unique-serial"\n')),(0,a.kt)("p",null,"Behind the scenes, this command creates and provisions the certificates, policies, and roles needed by AWS IOT and downloads the certificates to the local development machine. "),(0,a.kt)("p",null,"The command then outputs two critical pieces of information:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The directory where the certificate files are stored on the local machine."),(0,a.kt)("li",{parentName:"ol"},"The IOT endpoint URL for this back-end.")),(0,a.kt)("p",null,"This information will be needed in the next section."),(0,a.kt)("h2",{id:"connecting-to-the-cloud"},"Connecting to the cloud"),(0,a.kt)("p",null,"You will need the following information to connect your firmware to the cloud. It may seem daunting, but once you've provisioned a device (above), you already have all the necessary information."),(0,a.kt)("h3",{id:"iot-endpoint"},"IOT Endpoint"),(0,a.kt)("p",null,"When you create a back-end instance of SimpleIOT, the IOT subsystem sets up a URL where connections specific to the installation can be made. This URL is generated during installation and is saved in the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.simpleiot/{team-name}/config.json")," file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"iot_endpoint")," key. "),(0,a.kt)("p",null,"All client device firmware will need to pass this URL to the SDK to be able to connect to the proper IOT endpoint."),(0,a.kt)("h3",{id:"security-certificates"},"Security Certificates"),(0,a.kt)("p",null,"AWS IOT supports two types of security:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Secure Enclave chip"),(0,a.kt)("li",{parentName:"ol"},"Embedded Certificates")),(0,a.kt)("p",null,"The former assumes the hardware has a supported embedded security chip on board, properly connected so the firmware can communicate with it directly."),(0,a.kt)("p",null,"However, there are many devices and designs that do not have the hardware. The certificates can be embedded inside the firmware and presented as needed. SimpleIOT SDK aims to work with a wide range of products and assumes the target device does not have an additional security chip. "),(0,a.kt)("p",null,"However, if designing your hardware from scratch, you may want to consider including an embedded security chip made by vendors like ",(0,a.kt)("a",{parentName:"p",href:"https://www.microchip.com/en-us/products/security/security-ics/cryptoauthentication-family/use-case-archives/aws-iot-atecc608a"},"Microchip"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.infineon.com/cms/en/about-infineon/press/market-news/2019/INFDSS201905-070.html"},"Infineon"),", or ",(0,a.kt)("a",{parentName:"p",href:"https://newsroom.st.com/media-center/press-item.html/t4445.html"},"ST"),"."),(0,a.kt)("p",null,"AWS IOT uses ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html"},"X.509 private/public key certificates")," to authenticate devices. This means that only devices registered to connect to AWS are allowed to send data to the cloud. In addition, all data coming and going to the device will be end-to-end encrypted via ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/iot/latest/developerguide/transport-security.html"},"TLS 1.2"),"."),(0,a.kt)("p",null,"Three separate files are generated each time a single device is registered for the authentication system to work. These are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Root Certificate of Authority"),(0,a.kt)("li",{parentName:"ul"},"Device Certificate"),(0,a.kt)("li",{parentName:"ul"},"Device Private Key")),(0,a.kt)("p",null,"If a device is created using the ",(0,a.kt)("inlineCode",{parentName:"p"},"iot device add")," command, all registration is automatically performed, and the certificates are downloaded into the following local directory path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/.simpleiot\n   {team-name}\n      projects\n        {project-naem}\n           models\n             {model-name}\n               devices\n                 {device-serial-number}\n                 \n~/.simpleiot/{team}/projects/{project}/models/{model}/devices/{device-serial}\n")),(0,a.kt)("p",null,"Inside this directory, there will be several files, each prefixed with the serial number of the device:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{serial-number}_rootca.pem"),": Root Certificate file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{serial-number}_cert.pem"),": Device Certificate file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{serial-number}_private.pem"),": Private key file.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please make sure these files are kept secure. Any device with access to these files can connect to your AWS IOT instance and send and receive data.")),(0,a.kt)("p",null,"These files are in a text ",(0,a.kt)("a",{parentName:"p",href:"https://knowledge.digicert.com/quovadis/ssl-certificates/ssl-general-topics/what-is-pem-format.html#:~:text=PEM%20or%20Privacy%20Enhanced%20Mail,very%20distinct%20headers%20and%20footers."},"PEM format"),". They can be opened with a text editor and copy/pasted into the sketch source."),(0,a.kt)("p",null,"For example, the Root Certificate looks something like this (truncated):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\nMIIDQTCCAingAwIBAgITBmyfz5m/jAo54vB4ikPmljZbyjANBgkqhkiG9w0BAQsF\nADA5MQsaCQYDVQQGEwJVUzEPMA0GA1UEChMGQW1hem9uMRkwFwYDVQQDExBBbWF6\nb24gUm9vdCBDQSAxMB4XDTE1MDUyNjAwMDAwMFoXDTM4MDExNzAwMDAwMFowOTEL\nMAkGA1UEBhMCVVMxDzANBgNVBAoTBkFtYXpvbjEZMBcGA1UEAxMQQW1hem9uIFJv\nb3QgQ0EgMTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALJ4gHHKeNXj\nca9HgFB0fW7Y14h29Jlo91ghYPl0hAEvrAIthtOgQ3pOsqTQNroBvo3bSMgHFzZM\n...\nU5PMCCjjmCXPI6T53iHTfIUJrU6adTrCC2qJeHZERxhlbI1Bjjt/msv0tadQ1wUs\nN+gDS63pYaACbvXy8MWy7Vu33PqUXHeeE6V/Uq2V8viTO96LXFvKWlJbYK8U90vv\no/ufQJVtMVT8QtPHRh8jrdkPSHCa2XV4cdFyQzR1bldZwgJcJmApzyMZFo6IQ6XU\n5MsI+yMRQ+hDKXJioaldXgjUkK642M4UwtBV8ob2xJN5d2ZhwLnoQdeXeGADbkpy\nrqXRfboQnoZsG4q5WTP468SQvvP5\n-----END CERTIFICATE-----\n")),(0,a.kt)("p",null,"The Device Certificate might look like this (truncated):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\nMIIDWTCCAkGgAwIBAgIUa8AkrtBf1rxI77Be6vanfIaeZNkwDQYJKoZIhvcNAQEL\nBQAwTTFLMEkGA1UECwxCQW1hem9uIFdlYiBTZXJ2aWNlcyBPPUFtYXpvbi5jb20g\nSW5jLiBMPVNlYXR0bGUgU1Q9V2FzaGluZ3RvbiBDPVVTMB4XDTIxMDkxNzAwMjUw\nM9oXDTQ5MTIzMTIzNTk1OVowHjEcMBoGA1UEAwwTQAdTIElvVCBDZXJ0aWZpY2F0\nZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOg7PHKq0SnDF123L5Uj\n54dBPgwQWoq8hoXEGygn+KBZ4O+5q+737wgFR/Olke2sbN1+Fn+o6YhDvA21jq04\n...\nOy2LCRPDoorhXDuCndOF4xih4ljGKC5R1fvWlzixyx6Cv/9LPlXx4YdpXQR4rzde\nUL+kkUmakdxbzoeovba1SDTvFe1ontNYflJ+ZtpCY86eaYbfwVk8W9/8WBd0K6JM\n1xghOMg3oYYONPjJ/ZJHXY/fwdOBgXsAY3E++m4pAilTx4bpXuNK4jSx9IyCcY6H\n+UJqFs5PesRk3AYLUHhm5qJpQfEG62NaZMkDDBGhBiZlwHriqJOWMyKJ0ru=\n-----END CERTIFICATE-----\n")),(0,a.kt)("p",null,"The Private Certificate may look like this (truncated):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCXQEA6Ds8cqrRKcMXXbcvlSPnh0E+DBBairyGhcQbKCf4oFng77mr\n7vfvCAVH86WR7axs3X4Wf6jpiEO8DbWOrThQr43uz5/CMJGz+P+5GgZvcdeMKVnC\nw9Bflbx82jTItYcroiiBxZD1/qs3zb+M1yzyXyJkHqE7Lcn+G8M9kZxktxjnMwwL\nPd/txDqmkyup/fQFER8Sw5rc9Rf33MOZhaWDPHkhHCW+1tnotEqs/ITOgVrcU9OX\ny7JY4zQ7nfh2S4Pco0UXdMHgNsYS5tVcRxFkHULDYuDwSRTYJTqGeLoYHBptlbKw\nr/hxfuFnvFKrixCN2xrWqZQC2AhFtHR7Q5APAwIDAQABAoIBACe7wtrnqQPZMk1B\n...\njV9I0Fc0RmHrkQrhNvIuCj65tB7uIjJX/SzhAIjKPjRyOTv+iqHD/ojBaWkmQNjF\nc5jHCwNCr9CcvOWlbnuxQQKBgDmKrEZh7ss/F1xBx2cZbrBECc+f4aycTpy/ibxO\ntGDB2LQRIF+1X0zP2MspS/Gihyk8IYl5TKk4rKY5cOgGgQX1t7F2DTfsOI3v9a4S\nJQz/dqQT4eRaI1k/NK6eXp/XFNjA11rquABl0btrV4XSWElywXudkPBPsXI5TXh+\ns98hAoGAbkEeEcy0rf0Zn2Z8Bsq23trIBdYvpxK9X8a6dQVgnECLOQVz4AzGFPGb\nf5icLV+lkFSQ18piTbXR5LZQCei1vUrl56174awDp5pdHIWTLhRf2WwuxMudleaA\nYL/tpz7br/7RTQFZXOO2sQITRv3/Y6PR7QTtQpUE2j1e7gvQAS8=\n-----END RSA PRIVATE KEY-----\n")),(0,a.kt)("h3",{id:"simpleiot-settings"},"SimpleIOT Settings"),(0,a.kt)("p",null,"For each device provisioned, you will also need to provide the following names:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Project"),(0,a.kt)("li",{parentName:"ul"},"Model, and "),(0,a.kt)("li",{parentName:"ul"},"Device (serial number)"),(0,a.kt)("li",{parentName:"ul"},"Firmware version number in Semantic Version format. When in doubt, use ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0.0"),".")),(0,a.kt)("p",null,"You define these using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/documentation/cli/intro"},"iot cli")," by creating a ",(0,a.kt)("strong",{parentName:"p"},"Project"),", a ",(0,a.kt)("strong",{parentName:"p"},"Model"),", and a ",(0,a.kt)("strong",{parentName:"p"},"Device"),"."),(0,a.kt)("h3",{id:"wifi-settings"},"Wifi Settings"),(0,a.kt)("p",null,"A connected device needs to be able to connect to the internet via local Wi-Fi or Cellular modems."),(0,a.kt)("p",null,"The subject of provisioning at runtime and establishing network credentials is beyond the scope of this tutorial. However, to get the firmware to connect, you need to connect to your local WiFi router using ",(0,a.kt)("em",{parentName:"p"},"WiFi SSID name")," and ",(0,a.kt)("em",{parentName:"p"},"WIFI SSID password")," credentials. These must be passed on to the initialization routine to establish a connection."),(0,a.kt)("p",null,"There are several other WiFi Provisioning schemes ",(0,a.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/provisioning/wifi_provisioning.html"},"covered here"),". "),(0,a.kt)("h2",{id:"assembling-the-parts"},"Assembling the parts"),(0,a.kt)("p",null,"To summarize, you will need the following items:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IOT Endpoint URL"),(0,a.kt)("li",{parentName:"ul"},"Root Certificate of Authority"),(0,a.kt)("li",{parentName:"ul"},"Device Certificate"),(0,a.kt)("li",{parentName:"ul"},"Device Private Key"),(0,a.kt)("li",{parentName:"ul"},"Project name"),(0,a.kt)("li",{parentName:"ul"},"Model name"),(0,a.kt)("li",{parentName:"ul"},"Device serial number"),(0,a.kt)("li",{parentName:"ul"},"Firmware version"),(0,a.kt)("li",{parentName:"ul"},"WiFi router SSID name"),(0,a.kt)("li",{parentName:"ul"},"WiFi router SSID password")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/simpleiot-build/img/arduino/basic-layout.png",width:"80%"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"In the example apps, the files are configured as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Arduino Sketch Name Directory"),(0,a.kt)("td",{parentName:"tr",align:null},"Sketch Name"),(0,a.kt)("td",{parentName:"tr",align:null},"The IDE and CLI both assume a sketch is inside a directory of the same name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sketch file"),(0,a.kt)("td",{parentName:"tr",align:null},".ino file"),(0,a.kt)("td",{parentName:"tr",align:null},"Source to the Sketch (in C++)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"iot-secrets.h"),(0,a.kt)("td",{parentName:"tr",align:null},".h include file"),(0,a.kt)("td",{parentName:"tr",align:null},"Contains the IOT endpoint and sources to certificates")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wifi-settings.h"),(0,a.kt)("td",{parentName:"tr",align:null},".h include file"),(0,a.kt)("td",{parentName:"tr",align:null},"Contains the WiFi SSID and password        \\ ")))),(0,a.kt)("p",null,"The directory layout will typically look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  {arduino-sketch-name-directory}\n      |\n      +-- {arduino-sketch-name}.ino\n      +-- iot-secrets.h\n      +-- wifi-settings.h\n      +-- {miscellaneous files}\n")),(0,a.kt)("p",null,"There are provided template files for both the ",(0,a.kt)("inlineCode",{parentName:"p"},"iot-secrets.h")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"wifi-settings.h")," files. You can copy/paste the values you've collected above into these files, then compile and flash the binary to the device."),(0,a.kt)("p",null,"When the device boots up, it executes the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup()")," function to set up any devices/connections, then repeatedly calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"loop()")," function. The loop function can obtain values from sensors, then send them to the cloud. "),(0,a.kt)("p",null,"Under the SimpleIOT SDK, you may also provide a callback handler that is called when there is data transmitted from the cloud. "),(0,a.kt)("p",null,"More on this later..."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"iot-secrets.h")," template looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'/*\n * \xa9 2022 Amazon Web Services, Inc. or its affiliates. All Rights Reserved.\n * \n * These are AWS IOT credentials. This is for the SimpleIOT demo program.\n * Not for production use.\n */\n\n#ifndef __SIMPLEIOT_SECRETS__\n#define __SIMPLEIOT_SECRETS__\n\n#include <pgmspace.h>\n\n// Not really a secret, but all project-dependent values can be defined here.\n//\n#define SIMPLEIOT_IOT_ENDPOINT "{{ iot_endpoint }}"\n\n\n// Root CA file\n//\nstatic const char SIMPLE_IOT_ROOT_CA[] PROGMEM = R"EOF(\n{{ simpleiot_root_ca }}\n)EOF";\n\n// Device Certificate\n//\nstatic const char SIMPLE_IOT_DEVICE_CERT[] PROGMEM = R"KEY(\n{{ simpleiot_device_cert }}\n)KEY";\n\n// Device Private Key\n//\nstatic const char SIMPLE_IOT_DEVICE_PRIVATE_KEY[] PROGMEM = R"KEY(\n{{ simpleiot_device_private_key }}\n)KEY";\n\n#endif /* __SIMPLEIOT_SECRETS__ */\n')),(0,a.kt)("p",null,"You can copy-paste the IOT endpoint, Root Certificate, Device Certificate, and Private key values in place of the elements marked in between the ",(0,a.kt)("inlineCode",{parentName:"p"},"{{")," ",(0,a.kt)("inlineCode",{parentName:"p"},"}}")," brackets."),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"wifi-settings.h"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'/*\n * \xa9 2022 Amazon Web Services, Inc. or its affiliates. All Rights Reserved.\n * \n * Update these with your own WiFi credentials\n */\n\n#ifndef __SIMPLEIOT_WIFI_SETTINGS__\n#define __SIMPLEIOT_WIFI_SETTINGS__\n\n\nconst char WIFI_SSID[]="{{ wifi_ssid }}";\nconst char WIFI_PASSWORD[]="{{ wifi_password }}";\n\n\n#endif /* __SIMPLEIOT_WIFI_SETTINGS__ */\n')),(0,a.kt)("p",null,"You can insert your own Wifi SSID and Password in place of the fields surrounded by ",(0,a.kt)("inlineCode",{parentName:"p"},"{{")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"}}")," brackets."),(0,a.kt)("p",null,"Inside your Arduino sketch file, you can now include and set the following values near the top of the file, where global settings are placed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n#include "iot-secrets.h"\n#include "wifi-settings.h"\n#include <SimpleIOT.h>\n\n#define IOT_PROJECT "{my-project}"\n#define IOT_MODEL   "{my-model}"\n#define IOT_SERIAL  "{my-device-serial}"\n#define IOT_FW_VERSION "{firmware-version}"\n')),(0,a.kt)("p",null,"As you can see, the ",(0,a.kt)("inlineCode",{parentName:"p"},"#include")," directives import the values from inside the ",(0,a.kt)("inlineCode",{parentName:"p"},".h")," files. By using ",(0,a.kt)("inlineCode",{parentName:"p"},"#define")," C/C++ directives, you can make the code more readable and modular."),(0,a.kt)("p",null,"By now, you have used all the data items assembled above. Next, let us look at the part where we connect to the cloud and initialize SimpleIOT."),(0,a.kt)("h2",{id:"initialization"},"Initialization"),(0,a.kt)("p",null,"If you have set up your ",(0,a.kt)("inlineCode",{parentName:"p"},".ino")," sketch files like above, you can now create an instance of a SimpleIOT object and initialize it inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup()")," function. The SimpleIOT object should be a global singleton value so all functions can access it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'...\nSimpleIOT* iot = NULL; // global instance\n...\n\nvoid setup() {\n... // other initializations\n\n  iot = SimpleIOT::create(WIFI_SSID, WIFI_PASSWORD, SIMPLEIOT_IOT_ENDPOINT, \n                          SIMPLE_IOT_ROOT_CA, SIMPLE_IOT_DEVICE_CERT, SIMPLE_IOT_DEVICE_PRIVATE_KEY);\n  iot->config(IOT_PROJECT, IOT_MODEL, IOT_SERIAL, IOT_FW_VERSION, \n              onConnectionReady, \n              onDataFromCloud);\n\n  Serial.println("SimpleIOT configuration initialized");\n}\n...\n')),(0,a.kt)("p",null,"In the above section, the ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleIOT::create")," function creates a singleton instance of the SimpleIOT object. You pass to it the ",(0,a.kt)("inlineCode",{parentName:"p"},"#define")," values defined inside the ",(0,a.kt)("inlineCode",{parentName:"p"},".h")," files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wifi SSID"),(0,a.kt)("li",{parentName:"ul"},"Wifi Password"),(0,a.kt)("li",{parentName:"ul"},"IOT Endpoint URL"),(0,a.kt)("li",{parentName:"ul"},"Text of Root Certificate"),(0,a.kt)("li",{parentName:"ul"},"Text of Device Certificate"),(0,a.kt)("li",{parentName:"ul"},"Text of Device Private Key")),(0,a.kt)("p",null,"The next call, ",(0,a.kt)("inlineCode",{parentName:"p"},"iot->config"),", starts the configuration of the SimpleIOT subsystem to work with this specific project/model/device."),(0,a.kt)("p",null,"The process is asynchronous since WiFi connection and establishing credentials may take a few seconds. The SDK provides a way for you to get notified when the configuration has been completed."),(0,a.kt)("p",null,"Notice the two extra parameters ",(0,a.kt)("inlineCode",{parentName:"p"},"onConnectionReady")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onDataFromCloud"),"? When an event occurs, these callback handlers are called. ",(0,a.kt)("inlineCode",{parentName:"p"},"onConnectionReady")," is called once the\nsecure connection to the cloud has been established. You can use this as a signal that the connection is open and data can be sent/received from the cloud."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"You should not attempt any cloud interactions until the ",(0,a.kt)("inlineCode",{parentName:"p"},"onConnectionReady")," callback has been invoked with a successful status. "),(0,a.kt)("p",{parentName:"admonition"},"Any other status indicates a problem. For example, an invalid Wifi configuration or wrong security credentials. In these cases, the firmware should signal a problem to the user (if possible) and stop all connection/networking operations.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onDataFromCloud")," callback is invoked if data is received from the cloud. These could be sent via API calls or the SimpleIOT CLI ",(0,a.kt)("inlineCode",{parentName:"p"},"iot data set")," command."),(0,a.kt)("h3",{id:"onconnectionready"},"onConnectionReady"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onConnectionReady")," function expects the following parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  void onConnectionReady(int status, String message) {\n  \n    ...\n  \n  }\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," value will be ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," if everything works, otherwise, it will return a code and an optional string ",(0,a.kt)("inlineCode",{parentName:"p"},"message.")),(0,a.kt)("h3",{id:"ondatafromcloud"},"onDataFromCloud"),(0,a.kt)("p",null,"When data is sent from the cloud, the SDK will receive the notification and a payload. Then, the SDK extracts the relevant information to the application and passes it on to this callback."),(0,a.kt)("p",null,"The format of the handler is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nvoid onDataFromCloud(SimpleIOT *iot, String name, String value, SimpleIOTType type) {\n\n   ...\n\n}\n")),(0,a.kt)("p",null,"Notice that the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," is assumed to be String. Behind the scenes, SimpleIOT coerces all data values into a common string format for easier debugging and storage. When defining a Datatype, you can indicate the actual value. That type is passed on to the callback handler so you can decide how to convert the value best."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," value can be one of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IOT_INT"),(0,a.kt)("li",{parentName:"ul"},"IOT_FLOAT"),(0,a.kt)("li",{parentName:"ul"},"IOT_DOUBLE"),(0,a.kt)("li",{parentName:"ul"},"IOT_STRING"),(0,a.kt)("li",{parentName:"ul"},"IOT_BOOLEAN")),(0,a.kt)("p",null,"What the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," return is entirely up to you. But it is assumed to be defined as ",(0,a.kt)("strong",{parentName:"p"},"DataType")," fields in a ",(0,a.kt)("strong",{parentName:"p"},"Model"),"."),(0,a.kt)("p",null,"For example, in the terminal, you can remotely set the value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> iot data set --project=HelloProject --serial=HW5-0001 --name=color --value=red\n")),(0,a.kt)("p",null,"The device with serial number ",(0,a.kt)("inlineCode",{parentName:"p"},"HW5-0001")," will receive a live notification with the following settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'void onDataFromCloud(SimpleIOT *iot, String name, String value, SimpleIOTType type)\n{\n  if (name.equalsIgnoreCase("color")) {\n    if (value.equalsIgnoreCase("red")) {\n      setCurrentColor(PLANET_RED);\n    } else\n    if (value.equalsIgnoreCase("green")) {\n      setCurrentColor(PLANET_GREEN);\n    } else\n    if (value.equalsIgnoreCase("blue")) {\n      setCurrentColor(PLANET_BLUE);\n    } else\n    if (value.equalsIgnoreCase("off")) {\n        setCurrentColor(PLANET_ORIGINAL);\n    }\n    updateDisplay(currentButton);\n  }\n}\n')),(0,a.kt)("p",null,"Both items are wrapped in Arduino ",(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"},"String")," objects for easier conversion and processing."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Behind the scenes, certain callbacks will be reserved for future internal SDK use. The ones with data values will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"onDataFromCloud")," function so the application can process them as needed.")),(0,a.kt)("h1",{id:"examples"},"Examples"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("em",{parentName:"p"},"Examples")," provided by SimpleIOT SDK in the Arduino IDEs and create a basic ",(0,a.kt)("em",{parentName:"p"},"HelloWorld")," and ",(0,a.kt)("em",{parentName:"p"},"SensorDemo")," example."),(0,a.kt)("p",null,"But the easiest way to see the SDK with completed parameters is to use the CLI code generator and create a fully-functional sketch. To do this, please visit the ",(0,a.kt)("a",{parentName:"p",href:"/docs/workshops/"},"Workshops")," section."),(0,a.kt)("p",null,"The versions of ",(0,a.kt)("em",{parentName:"p"},"HelloWorld")," and ",(0,a.kt)("em",{parentName:"p"},"SensorDemo")," generated there will come with filled-out certificates, WiFi settings, and project attributes."))}p.isMDXComponent=!0}}]);