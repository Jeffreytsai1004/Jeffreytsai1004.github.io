import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as c,c as r,a,f as e,b as i,e as o}from"./app-BXCS-6s_.js";const p={},d=o('<h1 id="unrealgamesync-build-publish-4-27-2" tabindex="-1"><a class="header-anchor" href="#unrealgamesync-build-publish-4-27-2"><span>UnrealGameSync Build &amp; Publish 4.27.2</span></a></h1><hr><h2 id="created-2024-03-11t22-08-30-utc-08-00-tags-source-https-ac-virtuosgames-com-8443-pages-viewpage-action-pageid-307855392author-cai-jianbo" tabindex="-1"><a class="header-anchor" href="#created-2024-03-11t22-08-30-utc-08-00-tags-source-https-ac-virtuosgames-com-8443-pages-viewpage-action-pageid-307855392author-cai-jianbo"><span>created: 2024-03-11T22:08:30 (UTC +08:00) tags: [] source: https://ac.virtuosgames.com:8443/pages/viewpage.action?pageId=307855392 author: Cai Jianbo</span></a></h2><h1 id="unrealgamesync-build-publish-4-27-2-ta-knowledge" tabindex="-1"><a class="header-anchor" href="#unrealgamesync-build-publish-4-27-2-ta-knowledge"><span>UnrealGameSync Build &amp; Publish （4.27.2） - TA Knowledge -</span></a></h1><blockquote><h2 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt"><span>Excerpt</span></a></h2><p>https://github.com/EpicGames/UnrealEngine/archive/refs/tags/4.27.2-release.zip</p></blockquote><hr><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-38-58.png?version=1&amp;modificationDate=1709494907679&amp;api=v2" alt="" loading="lazy"></span></a></h1><h1 id="download" tabindex="-1"><a class="header-anchor" href="#download"><span>Download</span></a></h1>',8),l={href:"https://github.com/EpicGames/UnrealEngine/archive/refs/tags/4.27.2-release.zip",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/EpicGames/UnrealEngine/releases/download/4.27.2-release/Commit.gitdeps.xml",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/EpicGames/UnrealEngine/releases/download/4.27.2-release/Commit.gitdeps.xml",target:"_blank",rel:"noopener noreferrer"},h=o('<h1 id="modified-setp-bat" tabindex="-1"><a class="header-anchor" href="#modified-setp-bat"><span>Modified Setp.bat</span></a></h1><p>Add command &quot;--threads=20 --cache=%~dp0UE_Source_Cache&quot; after &quot;–prompt&quot;</p><figure><img src="https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-15-1.png?version=1&amp;modificationDate=1709494907446&amp;api=v2" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Click Setup.bat</p><p>Click GenerateProjectFile.bat</p><h1 id="build" tabindex="-1"><a class="header-anchor" href="#build"><span>Build</span></a></h1><p>Build &amp; Check the dependence</p><h1 id="modify" tabindex="-1"><a class="header-anchor" href="#modify"><span>Modify</span></a></h1><p>UnrealGameSync/DeploymentSettings.cs<br><img src="https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/889acdfc-3eff-4464-a1bc-4ac5a17b0b9a" alt="image" loading="lazy"></p><p>MetadataServer/Web.Debug.config</p><p>MetadataServer/Web.Release.config</p>',11),u={href:"https://ac.virtuosgames.com:8443/pages/viewpage.action?pageId=307855392#",target:"_blank",rel:"noopener noreferrer"},v=a("table",{border:"0",cellpadding:"0",cellspacing:"0"},[a("tbody",null,[a("tr",null,[a("td",{class:"code"},[a("div",{class:"container",title:"Hint: double-click to select code"},[a("div",{class:"line number1 index0 alt2","data-bidi-marker":"true"},[a("code",{class:"java plain"},"<connectionStrings>")]),a("div",{class:"line number2 index1 alt1","data-bidi-marker":"true"},[a("code",{class:"java spaces"},"  "),a("code",{class:"java plain"},"<add add="),a("code",{class:"java string"},'""'),e(),a("code",{class:"java plain"},"name="),a("code",{class:"java string"},'"ConnectionString"')]),a("div",{class:"line number3 index2 alt2","data-bidi-marker":"true"},[a("code",{class:"java spaces"},"    "),a("code",{class:"java plain"},"connectionString="),a("code",{class:"java string"},'"server=MySQLserverID;port=3306;user id=USERNAME;password=PASSWORD;"')]),a("div",{class:"line number4 index3 alt1","data-bidi-marker":"true"},[a("code",{class:"java spaces"},"    "),a("code",{class:"java plain"},"providerName="),a("code",{class:"java string"},'"MySql.Data.MySqlClient"')]),a("div",{class:"line number5 index4 alt2","data-bidi-marker":"true"},[a("code",{class:"java spaces"},"    "),a("code",{class:"java plain"},"xdt:Transform="),a("code",{class:"java string"},'"SetAttributes"'),e(),a("code",{class:"java plain"},"xdt:Locator="),a("code",{class:"java string"},'"Match(name)"'),a("code",{class:"java plain"},"/>")]),a("div",{class:"line number6 index5 alt1","data-bidi-marker":"true"},[a("code",{class:"java plain"},"</connectionStrings>")])])])])])],-1),f=a("p",null,"MetadataServer/Web.template.config",-1),b=a("p",null,"MetadataServer/Web.config",-1),_={href:"https://ac.virtuosgames.com:8443/pages/viewpage.action?pageId=307855392#",target:"_blank",rel:"noopener noreferrer"},y=a("table",{border:"0",cellpadding:"0",cellspacing:"0"},[a("tbody",null,[a("tr",null,[a("td",{class:"code"},[a("div",{class:"container",title:"Hint: double-click to select code"},[a("div",{class:"line number1 index0 alt2","data-bidi-marker":"true"},[a("code",{class:"java plain"},"<connectionStrings>")]),a("div",{class:"line number2 index1 alt1","data-bidi-marker":"true"},[a("code",{class:"java spaces"},"  "),a("code",{class:"java plain"},"<add add="),a("code",{class:"java string"},'""'),e(),a("code",{class:"java plain"},"name="),a("code",{class:"java string"},'"ConnectionString"'),e(),a("code",{class:"java plain"},"connectionString="),a("code",{class:"java string"},'"server=MySQLserverID;port=3306;user id=USERNAME;password=PASSWORD;"'),e(),a("code",{class:"java plain"},"providerName="),a("code",{class:"java string"},'"MySql.Data.MySqlClient"'),e(),a("code",{class:"java plain"},"/>")]),a("div",{class:"line number3 index2 alt2","data-bidi-marker":"true"},[a("code",{class:"java plain"},"</connectionStrings>")])])])])])],-1),w=o('<p>New a folder MetadataServer/NotForLicensees and copy MetadataServer/Web.config into MetadataServer/NotForLicensees</p><h1 id="ugs-publish-click-once" tabindex="-1"><a class="header-anchor" href="#ugs-publish-click-once"><span>UGS Publish (Click Once)</span></a></h1><figure><img src="https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-29-2.png?version=1&amp;modificationDate=1709494907521&amp;api=v2" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-29-40.png?version=1&amp;modificationDate=1709494907537&amp;api=v2" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-31-49.png?version=1&amp;modificationDate=1709494907555&amp;api=v2" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><img src="https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-32-22.png?version=1&amp;modificationDate=1709494907570&amp;api=v2" alt="" loading="lazy"><img src="https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-33-32.png?version=1&amp;modificationDate=1709494907586&amp;api=v2" alt="" loading="lazy"></p><p><img src="https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-34-0.png?version=1&amp;modificationDate=1709494907602&amp;api=v2" alt="" loading="lazy"><img src="https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-34-43.png?version=1&amp;modificationDate=1709494907616&amp;api=v2" alt="" loading="lazy"></p><p><img src="https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-35-53.png?version=1&amp;modificationDate=1709494907634&amp;api=v2" alt="" loading="lazy"><img src="https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-36-19.png?version=1&amp;modificationDate=1709494907654&amp;api=v2" alt="" loading="lazy"></p><figure><img src="https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-37-12.png?version=1&amp;modificationDate=1709494907666&amp;api=v2" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>View the publish webUI for check</p><figure><img src="https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-38-58.png?version=1&amp;modificationDate=1709494907679&amp;api=v2" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',11);function S(x,D){const t=s("ExternalLinkIcon");return c(),r("div",null,[d,a("p",null,[a("a",l,[e("https://github.com/EpicGames/UnrealEngine/archive/refs/tags/4.27.2-release.zip"),i(t)])]),a("p",null,[a("a",m,[e("https://github.com/EpicGames/UnrealEngine/releases/download/4.27.2-release/Commit.gitdeps.xml"),i(t)])]),a("p",null,[e("copy "),a("a",g,[e("Commit.gitdeps.xml"),i(t)]),e(" overwrite into Engine\\Build\\Commit.gitdeps.xml")]),h,a("p",null,[a("a",u,[e("?"),i(t)])]),v,f,b,a("p",null,[a("a",_,[e("?"),i(t)])]),y,w])}const U=n(p,[["render",S],["__file","0001.html.vue"]]),E=JSON.parse('{"path":"/posts/UnrealEngine/0001.html","title":"UnrealGameSync Build & Publish 4.27.2","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-03-11T00:00:00.000Z","category":["UnrealEngine"],"tag":["UnrealEngine","DevOps","UnrealGameSync"],"star":true,"description":"UnrealGameSync Build & Publish 4.27.2 created: 2024-03-11T22:08:30 (UTC +08:00) tags: [] source: https://ac.virtuosgames.com:8443/pages/viewpage.action?pageId=307855392 author: ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/UnrealEngine/0001.html"}],["meta",{"property":"og:site_name","content":"CGNICO Blog"}],["meta",{"property":"og:title","content":"UnrealGameSync Build & Publish 4.27.2"}],["meta",{"property":"og:description","content":"UnrealGameSync Build & Publish 4.27.2 created: 2024-03-11T22:08:30 (UTC +08:00) tags: [] source: https://ac.virtuosgames.com:8443/pages/viewpage.action?pageId=307855392 author: ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-38-58.png?version=1&modificationDate=1709494907679&api=v2"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-11T14:10:58.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"UnrealEngine"}],["meta",{"property":"article:tag","content":"DevOps"}],["meta",{"property":"article:tag","content":"UnrealGameSync"}],["meta",{"property":"article:published_time","content":"2022-03-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-11T14:10:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UnrealGameSync Build & Publish 4.27.2\\",\\"image\\":[\\"https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-38-58.png?version=1&modificationDate=1709494907679&api=v2\\",\\"https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-15-1.png?version=1&modificationDate=1709494907446&api=v2\\",\\"https://github.com/Jeffreytsai1004/Jeffreytsai1004.github.io/assets/109943015/889acdfc-3eff-4464-a1bc-4ac5a17b0b9a\\",\\"https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-29-2.png?version=1&modificationDate=1709494907521&api=v2\\",\\"https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-29-40.png?version=1&modificationDate=1709494907537&api=v2\\",\\"https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-31-49.png?version=1&modificationDate=1709494907555&api=v2\\",\\"https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-32-22.png?version=1&modificationDate=1709494907570&api=v2\\",\\"https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-33-32.png?version=1&modificationDate=1709494907586&api=v2\\",\\"https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-34-0.png?version=1&modificationDate=1709494907602&api=v2\\",\\"https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-34-43.png?version=1&modificationDate=1709494907616&api=v2\\",\\"https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-35-53.png?version=1&modificationDate=1709494907634&api=v2\\",\\"https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-36-19.png?version=1&modificationDate=1709494907654&api=v2\\",\\"https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-37-12.png?version=1&modificationDate=1709494907666&api=v2\\",\\"https://ac.virtuosgames.com:8443/download/attachments/307855392/image-2024-3-4_3-38-58.png?version=1&modificationDate=1709494907679&api=v2\\"],\\"datePublished\\":\\"2022-03-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-11T14:10:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"created: 2024-03-11T22:08:30 (UTC +08:00)tags: []source: https://ac.virtuosgames.com:8443/pages/viewpage.action?pageId=307855392author: Cai Jianbo","slug":"created-2024-03-11t22-08-30-utc-08-00-tags-source-https-ac-virtuosgames-com-8443-pages-viewpage-action-pageid-307855392author-cai-jianbo","link":"#created-2024-03-11t22-08-30-utc-08-00-tags-source-https-ac-virtuosgames-com-8443-pages-viewpage-action-pageid-307855392author-cai-jianbo","children":[]}],"git":{"createdTime":1710162600000,"updatedTime":1710166258000,"contributors":[{"name":"Jeffreytsai1004","email":"109943015+Jeffreytsai1004@users.noreply.github.com","commits":6}]},"readingTime":{"minutes":2.33,"words":698},"filePathRelative":"posts/UnrealEngine/0001.md","localizedDate":"2022年3月11日","excerpt":"\\n<hr>\\n<h2>created: 2024-03-11T22:08:30 (UTC +08:00)\\ntags: []\\nsource: https://ac.virtuosgames.com:8443/pages/viewpage.action?pageId=307855392\\nauthor: Cai Jianbo</h2>\\n<h1>UnrealGameSync Build &amp; Publish （4.27.2） - TA Knowledge -</h1>\\n<blockquote>\\n<h2>Excerpt</h2>\\n<p>https://github.com/EpicGames/UnrealEngine/archive/refs/tags/4.27.2-release.zip</p>\\n</blockquote>","autoDesc":true}');export{U as comp,E as data};