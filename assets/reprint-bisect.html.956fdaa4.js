import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as s,b as e,d as n,f as c,r as d}from"./app.835d1638.js";const l={},r=s("h1",{id:"bisect-命令教程",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#bisect-命令教程","aria-hidden":"true"},"#"),e(" bisect 命令教程")],-1),p=s("p",null,'它的原理很简单，就是将代码提交的历史，按照两分法不断缩小定位。所谓"两分法"，就是将代码历史一分为二，确定问题出在前半部分，还是后半部分，不断执行这个过程，直到范围缩小到某一次代码提交。',-1),b={href:"https://github.com/bradleyboy/bisectercise",target:"_blank",rel:"noopener noreferrer"},u=c(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone git@github.com:bradleyboy/bisectercise.git
$ <span class="token builtin class-name">cd</span> bisectercise
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>这个库是一个网页<code>index.html</code>，在浏览器打开这个网页。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">open</span> index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><img src="https://www.wangbase.com/blogimg/asset/201812/bg2018122401.png" alt="img" loading="lazy"></p><p>网页上是一个计数器，有两个按钮。点击<code>+</code>号按钮，可以看到计数器没有递增，反而递减，这说明代码有问题。</p><p>现在，就要来查找，到底哪一次代码提交，引入了错误。首先，检查一下代码提交历史。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>可以看到，这个库一共有101次提交。最早的第一次提交的哈希是<code>4d83cf</code>。</p><p><code>git bisect start</code>命令启动查错，它的格式如下。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> bisect start <span class="token punctuation">[</span>终点<span class="token punctuation">]</span> <span class="token punctuation">[</span>起点<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>上面代码中，&quot;终点&quot;是最近的提交，&quot;起点&quot;是更久以前的提交。它们之间的这段历史，就是差错的范围。</p><p>这个例子中，我们选择全部的代码历史。起点是第一次提交<code>4d83cf</code>，终点是最近一次的<code>HEAD</code>。当然，指定其他范围也可以。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> bisect start HEAD 4d83cf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>执行上面的命令以后，代码库就会切换到这段范围正当中的那一次提交，本例是第51次提交。</p><p>现在刷新浏览器，点击<code>+</code>按钮，发现可以正常递增。使用<code>git bisect good</code>命令，标识本次提交（第51次）没有问题。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> bisect good
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>既然第51次提交没有问题，就意味着错误是在代码历史的后半段引入的。执行上面的命令，Git 就自动切换到后半段的中点（第76次提交）。</p><p>现在刷新浏览器，点击<code>+</code>按钮，发现不能正常递增。使用<code>git bisect bad</code>命令，标识本次提交（第76）有问题。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> bisect bad
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>执行上面的命令以后，Git 就自动切换到第51次到第76次的中点（第63次提交）。</p><p>接下来，不断重复这个过程，直到成功找到出问题的那一次提交为止。这时，Git 会给出如下的提示。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>b47892 is the first bad commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>`,22),g={href:"https://github.com/bradleyboy/bisectercise/commit/b47892adec22ee3b0330aff37cbc5e695dfb99d6",target:"_blank",rel:"noopener noreferrer"},m=c(`<p>然后，使用<code>git bisect reset</code>命令，退出查错，回到最近一次的代码提交。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> bisect reset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>现在就可以开始修复错误了。</p><p>（完）</p>`,4);function h(v,k){const a=d("ExternalLinkIcon");return t(),o("div",null,[r,p,s("p",null,[e("本文通过一个实例，解释如何使用这个命令。下面是一个"),s("a",b,[e("代码库"),n(a)]),e("，请将它克隆到本地。")]),u,s("p",null,[e("既然找到那个有问题的提交，就可以"),s("a",g,[e("检查代码"),n(a)]),e("，确定具体是什么错误。")]),m])}const q=i(l,[["render",h],["__file","reprint-bisect.html.vue"]]);export{q as default};