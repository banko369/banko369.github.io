import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as a,a as e,b as l,d as c,f as s,r as o}from"./app.0c5269f2.js";const r={},t=s(`<h1 id="gitignore文件规范" tabindex="-1"><a class="header-anchor" href="#gitignore文件规范" aria-hidden="true">#</a> gitignore文件规范</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><code>.gitignore</code>文件指明 Git 需要忽略的文件，并且对已经跟踪的文件不起作用。</p><p><code>.gitignore</code>文件中的每行指定一条匹配规则。</p><p>Git 通常按照以下顺序检查<code>.gitignore</code>匹配规则：</p><ul><li><p>命令行</p></li><li><p>当前目录的<code>.gitignore</code>文件，或父级目录（直至顶层目录），底层匹配规则覆盖上级。匹配规则以<code>.gitignore</code>文件所在目录为初始目录。</p></li><li><p><code>$GIT_DIR/info/exclude</code></p></li><li><p>配置变量<code>core.excludesFile</code>指定的文件，变量内容保存于<code>~/.gitconfig</code>文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置全局忽略规则文件</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> core.excludesFile ~/.gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>匹配规则写在什么地方：</p><ul><li>需要管理起来，并克隆到其它仓库的匹配规则（即所有人都需要的匹配规则），写到<code>.gitignore</code>文件</li><li>特定一个用户需要的匹配规则，写到<code>$GIT_DIR/info/exclude</code>文件</li><li>特定一个用户需要的匹配规则，并且应用于所有项目，写到配置变量<code>core.excludesFile</code>指定的文件</li></ul><h2 id="匹配规则" tabindex="-1"><a class="header-anchor" href="#匹配规则" aria-hidden="true">#</a> 匹配规则</h2><ul><li><p>所有空行或者以 <code>#</code> 开头的行都会被 Git 忽略。</p></li><li><p>空格会被忽略，除非被<code>\\</code>包裹。</p></li><li><p>开头或中间（或两者）存在<code>/</code>，匹配规则以<code>.gitignore</code>所在目录为根目录进行匹配。如果结尾存在<code>/</code>，匹配规则将以<code>.gitignore</code>所在目录及其下任意层级子目录为根目录进行匹配。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 可匹配 doc/frotz 文件夹，但不能匹配 a/doc/frotz 文件夹
doc/frotz/

# 效果同上
/doc/frotz/

# 可匹配 frotz 和 a/frotz 文件夹
frotz/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>以<code>/</code>结尾，只匹配目录。否则匹配文件和目录。</p></li><li><p><code>*</code>匹配零个或多个任意字符，<code>/</code>除外。</p></li><li><p><code>?</code>匹配任意一个字符，<code>/</code>除外。</p></li><li><p><code>[a-zA-Z]</code>匹配范围内任意一个字符。</p></li><li><p>以<code>!</code>开头，表示不忽略匹配到的文件或目录。<strong>如果父目录被忽略，以<code>!</code>开头不起作用</strong>。<code>!</code>可以使用<code>\\</code>转义。</p></li><li><p>以<code>**/</code>开头，表示匹配任意层级目录。</p></li><li><p>以<code>/**</code>结尾，表示以<code>.gitignore</code>所在目录为根目录，匹配其下任意文件或目录。</p></li><li><p><code>/**/</code>存在中间位置，表示匹配零个或多个层级目录。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 可匹配 foo 和 a/foo
**/foo

# 效果同上
foo

# 可匹配 abc 文件夹下任意文件或目录，但不能匹配 a/abc 文件夹下
abc/**

# 可匹配 a/b 和 a/x/b 和 a/x/y/b
a/**/b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 忽略所有的 .a 文件
*.a

# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a

# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

# 忽略任何目录下名为 build 的文件夹
build/

# 忽略 foo/test.json，但不忽略 foo/bar/hello.c，因为 * 不匹配 / 符号
foo/*

# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt

# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><p>对管理中的文件解除跟踪，可使用以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,16),v={href:"https://git-scm.com/docs/gitignore",target:"_blank",rel:"noopener noreferrer"};function u(p,b){const i=o("ExternalLinkIcon");return d(),a("div",null,[t,e("p",null,[e("a",v,[l("Git - gitignore Documentation (git-scm.com)"),c(i)])])])}const h=n(r,[["render",u],["__file","gitignore.html.vue"]]);export{h as default};
