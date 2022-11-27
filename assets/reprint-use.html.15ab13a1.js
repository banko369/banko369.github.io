import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as e,b as s,d as a,f as i,r as l}from"./app.646c7c26.js";const r={},d=e("h1",{id:"git-使用规范流程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-使用规范流程","aria-hidden":"true"},"#"),s(" Git 使用规范流程")],-1),m=e("p",null,"团队开发中，遵循一个合理、清晰的Git使用流程，是非常重要的。",-1),u=e("p",null,"否则，每个人都提交一堆杂乱无章的commit，项目很快就会变得难以协调和维护。",-1),p={href:"https://github.com/thoughtbot/guides/tree/master/protocol/git",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,[e("img",{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015080501.png",alt:"img",loading:"lazy"})],-1),b=e("h2",{id:"第一步-新建分支",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第一步-新建分支","aria-hidden":"true"},"#"),s(" 第一步：新建分支")],-1),v={href:"https://www.ruanyifeng.com/blog/2012/07/git.html",target:"_blank",rel:"noopener noreferrer"},g=i(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取主干最新代码</span>
$ <span class="token function">git</span> checkout master
$ <span class="token function">git</span> pull

<span class="token comment"># 新建一个开发分支myfeature</span>
$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> myfeature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="第二步-提交分支commit" tabindex="-1"><a class="header-anchor" href="#第二步-提交分支commit" aria-hidden="true">#</a> 第二步：提交分支commit</h2><p>分支修改后，就可以提交commit了。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">--all</span>
$ <span class="token function">git</span> status
$ <span class="token function">git</span> commit <span class="token parameter variable">--verbose</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>git add 命令的all参数，表示保存所有变化（包括新建、修改和删除）。从Git 2.0开始，all是 git add 的默认参数，所以也可以用 git add . 代替。</p><p>git status 命令，用来查看发生变动的文件。</p>`,6),k={href:"https://www.ruanyifeng.com/blog/2012/08/how_to_read_diff.html",target:"_blank",rel:"noopener noreferrer"},f=i(`<h2 id="第三步-撰写提交信息" tabindex="-1"><a class="header-anchor" href="#第三步-撰写提交信息" aria-hidden="true">#</a> 第三步：撰写提交信息</h2><p>提交commit时，必须给出完整扼要的提交信息，下面是一个范本。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Present-tense summary under <span class="token number">50</span> characters

* More information about commit <span class="token punctuation">(</span>under <span class="token number">72</span> characters<span class="token punctuation">)</span>.
* More information about commit <span class="token punctuation">(</span>under <span class="token number">72</span> characters<span class="token punctuation">)</span>.

http://project.management-system.com/ticket/123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>第一行是不超过50个字的提要，然后空一行，罗列出改动原因、主要变动、以及需要注意的问题。最后，提供对应的网址（比如Bug ticket）。</p><h2 id="第四步-与主干同步" tabindex="-1"><a class="header-anchor" href="#第四步-与主干同步" aria-hidden="true">#</a> 第四步：与主干同步</h2><p>分支的开发过程中，要经常与主干保持同步。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> fetch origin
$ <span class="token function">git</span> rebase origin/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="第五步-合并commit" tabindex="-1"><a class="header-anchor" href="#第五步-合并commit" aria-hidden="true">#</a> 第五步：合并commit</h2><p>分支开发完成后，很可能有一堆commit，但是合并到主干的时候，往往希望只有一个（或最多两三个）commit，这样不仅清晰，也容易管理。</p><p>那么，怎样才能将多个commit合并呢？这就要用到 git rebase 命令。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> rebase <span class="token parameter variable">-i</span> origin/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>git rebase命令的i参数表示互动（interactive），这时git会打开一个互动界面，进行下一步操作。</p>`,12),_={href:"https://robots.thoughtbot.com/git-interactive-rebase-squash-amend-rewriting-history",target:"_blank",rel:"noopener noreferrer"},q=i(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pick 07c5abd Introduce OpenPGP and teach basic usage
pick de9b1eb Fix PostChecker::Post<span class="token comment">#urls</span>
pick 3e7ee36 Hey kids, stop all the highlighting
pick fa20af3 <span class="token function">git</span> interactive rebase, squash, amend

<span class="token comment"># Rebase 8db7e8b..fa20af3 onto 8db7e8b</span>
<span class="token comment">#</span>
<span class="token comment"># Commands:</span>
<span class="token comment">#  p, pick = use commit</span>
<span class="token comment">#  r, reword = use commit, but edit the commit message</span>
<span class="token comment">#  e, edit = use commit, but stop for amending</span>
<span class="token comment">#  s, squash = use commit, but meld into previous commit</span>
<span class="token comment">#  f, fixup = like &quot;squash&quot;, but discard this commit&#39;s log message</span>
<span class="token comment">#  x, exec = run command (the rest of the line) using shell</span>
<span class="token comment">#</span>
<span class="token comment"># These lines can be re-ordered; they are executed from top to bottom.</span>
<span class="token comment">#</span>
<span class="token comment"># If you remove a line here THAT COMMIT WILL BE LOST.</span>
<span class="token comment">#</span>
<span class="token comment"># However, if you remove everything, the rebase will be aborted.</span>
<span class="token comment">#</span>
<span class="token comment"># Note that empty commits are commented out</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面的互动界面，先列出当前分支最新的4个commit（越下面越新）。每个commit前面有一个操作命令，默认是pick，表示该行commit被选中，要进行rebase操作。</p><p>4个commit的下面是一大堆注释，列出可以使用的命令。</p>`,3),x=e("li",null,"pick：正常选中",-1),P=e("li",null,"reword：选中，并且修改提交信息；",-1),y={href:"https://schacon.github.io/gitbook/4_interactive_rebasing.html",target:"_blank",rel:"noopener noreferrer"},w=e("li",null,"squash：选中，会将当前commit与上一个commit合并",-1),T=e("li",null,"fixup：与squash相同，但不会保存当前commit的提交信息",-1),$=e("li",null,"exec：执行其他shell命令",-1),G=i(`<p>上面这6个命令当中，squash和fixup可以用来合并commit。先把需要合并的commit前面的动词，改成squash（或者s）。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pick 07c5abd Introduce OpenPGP and teach basic usage
s de9b1eb Fix PostChecker::Post<span class="token comment">#urls</span>
s 3e7ee36 Hey kids, stop all the highlighting
pick fa20af3 <span class="token function">git</span> interactive rebase, squash, amend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>这样一改，执行后，当前分支只会剩下两个commit。第二行和第三行的commit，都会合并到第一行的commit。提交信息会同时包含，这三个commit的提交信息。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># This is a combination of 3 commits.</span>
<span class="token comment"># The first commit&#39;s message is:</span>
Introduce OpenPGP and teach basic usage

<span class="token comment"># This is the 2nd commit message:</span>
Fix PostChecker::Post<span class="token comment">#urls</span>

<span class="token comment"># This is the 3rd commit message:</span>
Hey kids, stop all the highlighting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>如果将第三行的squash命令改成fixup命令。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pick 07c5abd Introduce OpenPGP and teach basic usage
s de9b1eb Fix PostChecker::Post<span class="token comment">#urls</span>
f 3e7ee36 Hey kids, stop all the highlighting
pick fa20af3 <span class="token function">git</span> interactive rebase, squash, amend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>运行结果相同，还是会生成两个commit，第二行和第三行的commit，都合并到第一行的commit。但是，新的提交信息里面，第三行commit的提交信息，会被注释掉。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># This is a combination of 3 commits.</span>
<span class="token comment"># The first commit&#39;s message is:</span>
Introduce OpenPGP and teach basic usage

<span class="token comment"># This is the 2nd commit message:</span>
Fix PostChecker::Post<span class="token comment">#urls</span>

<span class="token comment"># This is the 3rd commit message:</span>
<span class="token comment"># Hey kids, stop all the highlighting</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,8),I={href:"https://ponyfoo.com/articles/git-github-hacks",target:"_blank",rel:"noopener noreferrer"},C=i(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> reset HEAD~5
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&quot;Here&#39;s the bug fix that closes #28&quot;</span>
$ <span class="token function">git</span> push <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>squash和fixup命令，还可以当作命令行参数使用，自动合并commit。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">--fixup</span>  
$ <span class="token function">git</span> rebase <span class="token parameter variable">-i</span> <span class="token parameter variable">--autosquash</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,3),H={href:"https://fle.github.io/git-tip-keep-your-branch-clean-with-fixup-and-autosquash.html",target:"_blank",rel:"noopener noreferrer"},O=i(`<h2 id="第六步-推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#第六步-推送到远程仓库" aria-hidden="true">#</a> 第六步：推送到远程仓库</h2><p>合并commit后，就可以推送当前分支到远程仓库了。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push <span class="token parameter variable">--force</span> origin myfeature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>`,3),B={href:"http://willi.am/blog/2014/08/12/the-dark-side-of-the-force-push/",target:"_blank",rel:"noopener noreferrer"},F=e("h2",{id:"第七步-发出pull-request",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第七步-发出pull-request","aria-hidden":"true"},"#"),s(" 第七步：发出Pull Request")],-1),E=e("p",null,"提交到远程仓库以后，就可以发出 Pull Request 到master分支，然后请求别人进行代码review，确认可以合并到master。",-1),L=e("p",null,"（完）",-1);function N(M,V){const n=l("ExternalLinkIcon");return o(),c("div",null,[d,m,u,e("p",null,[s("下面是"),e("a",p,[s("ThoughtBot"),a(n)]),s(" 的Git使用规范流程。我从中学到了很多，推荐你也这样使用Git。")]),h,b,e("p",null,[s("首先，每次开发新功能，都应该新建一个单独的分支（这方面可以参考"),e("a",v,[s("《Git分支管理策略》"),a(n)]),s("）。")]),g,e("p",null,[s("git commit 命令的verbose参数，会列出 "),e("a",k,[s("diff"),a(n)]),s(" 的结果。")]),f,e("p",null,[s("下面采用"),e("a",_,[s("Tute Costa"),a(n)]),s("的例子，来解释怎么合并commit。")]),q,e("blockquote",null,[e("ul",null,[x,P,e("li",null,[s("edit：选中，rebase时会暂停，允许你修改这个commit（参考"),e("a",y,[s("这里"),a(n)]),s("）")]),w,T,$])]),G,e("p",null,[e("a",I,[s("Pony Foo"),a(n)]),s("提出另外一种合并commit的简便方法，就是先撤销过去5个commit，然后再建一个新的。")]),C,e("p",null,[s("这个用法请参考"),e("a",H,[s("这篇文章"),a(n)]),s("，这里就不解释了。")]),O,e("p",null,[s("git push命令要加上force参数，因为rebase以后，分支历史改变了，跟远程分支不一定兼容，有可能要强行推送（参见"),e("a",B,[s("这里"),a(n)]),s("）。")]),F,E,L])}const S=t(r,[["render",N],["__file","reprint-use.html.vue"]]);export{S as default};
