import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o,c as d,a as e,f as t,b as i,e as n}from"./app-DW5p0WWJ.js";const l={},c=e("h1",{id:"unrealgamesync-metadataserver-net-core",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#unrealgamesync-metadataserver-net-core"},[e("span",null,[e("strong",null,"UnrealGameSync MetadataServer .NET Core")])])],-1),u=e("h1",{id:"download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download"},[e("span",null,[e("strong",null,"Download")])])],-1),p={href:"https://github.com/Jeffreytsai1004/MetadataServer",target:"_blank",rel:"noopener noreferrer"},g=n('<figure><img src="https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/19690ec9-a3eb-4e61-95eb-d292888b68c7" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>This is a custom version of the metadata server (a component of UnrealGameSync ), updated to ASP.Net Core 3.1, with async/await</p><p>This is a custom version of the metadata server (a component of UnrealGameSync), updated to .Net 8.0, with async/await functionality, Updated MySQL utf8mb4 encoding format</p><figure><img src="https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/3106047e-01fc-4ce9-b7ca-aafa478ae7c2" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements"><span><strong>Requirements</strong></span></a></h2><p>.NET Runtime 8.0 Hosting Bundle or higher.</p><h2 id="deploy-steps-部署步骤" tabindex="-1"><a class="header-anchor" href="#deploy-steps-部署步骤"><span><strong>Deploy Steps 部署步骤</strong></span></a></h2>',7),m=e("li",null,"Clone this project to the local",-1),f={href:"https://dotnet.microsoft.com/zh-cn/download/dotnet/8.0",target:"_blank",rel:"noopener noreferrer"},b={href:"https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-aspnetcore-8.0.2-windows-hosting-bundle-installer",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,"Modify appsettings.json, and change MySqlConnection to the connection information of your own Mysql database",-1),v=e("li",null,"Publish the image to Dockerhub or IIS",-1),x=n(`<h2 id="publish-in-linux-ubuntu" tabindex="-1"><a class="header-anchor" href="#publish-in-linux-ubuntu"><span><strong>Publish in Linux (Ubuntu)</strong></span></a></h2><p>安装 .NET 8.0 的 SDK 和 Runtime</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir dotnet
cd dotnet
wegt https://download.visualstudio.microsoft.com/download/pr/d6d79cc3-df2f-4680-96ff-a7198f461139/df025000eaf5beb85d9137274a8c53ea/aspnetcore-runtime-8.0.2-linux-x64.tar.gz
mkdir -p $HOME/dotnet &amp;&amp; tar zxf aspnetcore-runtime-8.0.2-linux-x64.tar.gz -C $HOME/dotnet
export DOTNET_ROOT=$HOME/dotnet
export PATH=$PATH:$HOME/dotnet
rm aspnetcore-runtime-8.0.2-linux-x64.tar.gz
wget https://download.visualstudio.microsoft.com/download/pr/85bcc525-4e9c-471e-9c1d-96259aa1a315/930833ef34f66fe9ee2643b0ba21621a/dotnet-sdk-8.0.201-linux-x64.tar.gz
mkdir -p $HOME/dotnet &amp;&amp; tar zxf dotnet-sdk-8.0.201-linux-x64.tar.gz -C $HOME/dotnet
export DOTNET_ROOT=$HOME/dotnet
export PATH=$PATH:$HOME/dotnet
rm dotnet-sdk-8.0.201-linux-x64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 .NET 的SDK和RUNTIME</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>dotnet --info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>拉取 ASP .NET 8.0 镜像</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker pull mcr.microsoft.com/dotnet/aspnet:8.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回用户根目录</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cd ~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>先新建一个目录</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir MetadataServer
cd MetadataServer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>拉取该仓库</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git clone https://github.com/Jeffreytsai1004/MetadataServer ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改./MetadataServer/MetadataServer/appsettings.json 按i键编辑修改 &quot;MySqlConnection&quot;: 为你的MySQL的服务器ID和端口号，以及用户名和密码. Exit键退出编辑， ：wq 保存并退出</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>vi ./MetadataServer/MetadataServer/appsettings.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改./MetadataServer/Properties/launchSettings.json 按i键编辑修改 &quot;applicationUrl&quot;:为启动的端口号如：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;applicationUrl&quot;: &quot;http://localhost:8080&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>构建镜像（这里$DOCKERHUBUSERNAME为你的Dockerhub账号）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo docker build -t $DOCKERHUBUSERNAME/metadataserver:latest .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看构建的镜像：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>登录DokerHub（用$DOCKERHUBUSERNAME账号登录）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动镜像（这里$DOCKERHUBUSERNAME为你的Dockerhub账号,并且可以修改你的MYSQL的对应的MySqlConnection字符串</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker run -d --name metadataserver --restart always -p 8080:8080 -e MySqlConnection:&quot;server=MYSQLSERVERID;port=PORT;UserId=USERNAME;password=PASSWORD;&quot; $DOCKERHUBUSERNAME/metadataserver:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>推送镜像</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker push $DOCKERHUBUSERNAME/metadataserver:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入容器</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo docker exec -it metadataserver /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>退出容器</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>在Turn window features on or off 或者服务控制台中添加功能</strong></p><figure><img src="https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/9fb28cb4-a83b-4d37-a409-73dcbb32de18" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>新建 C:\\inetpub\\MetadtaServer，并授予Everyone/NETWORK SERVICE 权限</p><figure><img src="https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/188f49e3-0630-491d-be86-5c13f182334d" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>打开 Internet Information Services (IIS) Manager,添加站点 打开该工程，修改appsettings.json 信息为对应的数据库的信息</p><figure><img src="https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/24f092ca-cafe-4642-8b2a-a5a239fb0967" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>发布该工程到改站点</p><figure><img src="https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/b1ed764a-a33d-4499-a830-20d325a87abd" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/b19722e8-aa8b-46d2-9e9c-7f9304310090" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>查看站点 例如：http://10.72.0.1：8080 那么API地址则为 http://10.72.0.1：8080/api/latest（如图二）则显示API搭建成功</p><figure><img src="https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/b93f6e4c-2c50-4314-925c-ebbefd6e20b2" alt="image-2024-3-4_11-21-17" tabindex="0" loading="lazy"><figcaption>image-2024-3-4_11-21-17</figcaption></figure><figure><img src="https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/b7e91c2c-db45-4946-959e-f800c6b8d2a8" alt="image-2024-3-4_11-23-44" tabindex="0" loading="lazy"><figcaption>image-2024-3-4_11-23-44</figcaption></figure><p>Licensing 许可 The source code is governed by the Unreal Engine End User License Agreement. If you don&#39;t agree to those terms, as amended from time to time, you are not permitted to access or use the source code.</p><p>此源代码受 虚幻引擎最终用户许可协议的约束. 如果您不同意这些条款（经不时修订），则不允许访问或使用源代码。</p>`,45);function y(S,E){const a=r("ExternalLinkIcon");return o(),d("div",null,[c,u,e("p",null,[e("a",p,[t("Jeffreytsai1004/MetadataServer: MetadataServer For UnrealGameSync (github.com)"),i(a)])]),g,e("ol",null,[m,e("li",null,[t("Install "),e("a",f,[t(".NET 8.0 SDK"),i(a)]),t(",Install the SDK on the development PC and the Hosting Bundle on the web server")]),e("li",null,[e("a",b,[t("下载 ASP.NET Core 8.0 Runtime (v8.0.2) - Windows Hosting Bundle Installer (microsoft.com)"),i(a)])]),h,v]),x])}const _=s(l,[["render",y],["__file","0004.html.vue"]]),U=JSON.parse('{"path":"/posts/UnrealEngine/0004.html","title":"UnrealGameSync MetadataServer .NET Core","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-03-11T00:00:00.000Z","category":["UnrealEngine"],"tag":["UnrealEngine","DevOps","UnrealGameSync"],"star":true,"description":"UnrealGameSync MetadataServer .NET Core Download Jeffreytsai1004/MetadataServer: MetadataServer For UnrealGameSync (github.com) imageimage This is a custom version of the metada...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/UnrealEngine/0004.html"}],["meta",{"property":"og:site_name","content":"CGNICO Blog"}],["meta",{"property":"og:title","content":"UnrealGameSync MetadataServer .NET Core"}],["meta",{"property":"og:description","content":"UnrealGameSync MetadataServer .NET Core Download Jeffreytsai1004/MetadataServer: MetadataServer For UnrealGameSync (github.com) imageimage This is a custom version of the metada..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/19690ec9-a3eb-4e61-95eb-d292888b68c7"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-11T15:16:56.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"UnrealEngine"}],["meta",{"property":"article:tag","content":"DevOps"}],["meta",{"property":"article:tag","content":"UnrealGameSync"}],["meta",{"property":"article:published_time","content":"2022-03-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-11T15:16:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UnrealGameSync MetadataServer .NET Core\\",\\"image\\":[\\"https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/19690ec9-a3eb-4e61-95eb-d292888b68c7\\",\\"https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/3106047e-01fc-4ce9-b7ca-aafa478ae7c2\\",\\"https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/9fb28cb4-a83b-4d37-a409-73dcbb32de18\\",\\"https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/188f49e3-0630-491d-be86-5c13f182334d\\",\\"https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/24f092ca-cafe-4642-8b2a-a5a239fb0967\\",\\"https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/b1ed764a-a33d-4499-a830-20d325a87abd\\",\\"https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/b19722e8-aa8b-46d2-9e9c-7f9304310090\\",\\"https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/b93f6e4c-2c50-4314-925c-ebbefd6e20b2\\",\\"https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/b7e91c2c-db45-4946-959e-f800c6b8d2a8\\"],\\"datePublished\\":\\"2022-03-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-11T15:16:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Requirements","slug":"requirements","link":"#requirements","children":[]},{"level":2,"title":"Deploy Steps 部署步骤","slug":"deploy-steps-部署步骤","link":"#deploy-steps-部署步骤","children":[]},{"level":2,"title":"Publish in Linux (Ubuntu)","slug":"publish-in-linux-ubuntu","link":"#publish-in-linux-ubuntu","children":[]}],"git":{"createdTime":1710168922000,"updatedTime":1710170216000,"contributors":[{"name":"Jeffreytsai1004","email":"109943015+Jeffreytsai1004@users.noreply.github.com","commits":8}]},"readingTime":{"minutes":2.49,"words":748},"filePathRelative":"posts/UnrealEngine/0004.md","localizedDate":"2022年3月11日","excerpt":"\\n<h1><strong>Download</strong></h1>\\n<p><a href=\\"https://github.com/Jeffreytsai1004/MetadataServer\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Jeffreytsai1004/MetadataServer: MetadataServer For UnrealGameSync (github.com)</a></p>\\n<figure><img src=\\"https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/19690ec9-a3eb-4e61-95eb-d292888b68c7\\" alt=\\"image\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image</figcaption></figure>","autoDesc":true}');export{_ as comp,U as data};