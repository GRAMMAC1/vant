/*! For license information please see 262.a41e00a9.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["262"],{51362:function(e,n,t){"use strict";t.r(n);var i=t("69298");let o=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,i.openBlock)(),(0,i.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Contribution Guide</h1>\n<div class="van-doc-card"><h3 id="introduction" tabindex="-1">Introduction</h3>\n<p>Thank you for using Vant.</p>\n<p>Below are the guidelines for submitting feedback or code to Vant. Please take a few minutes to read the following before submitting an issue or PR to Vant.</p>\n</div><div class="van-doc-card"><h3 id="issue-specification" tabindex="-1">Issue Specification</h3>\n<ul>\n<li>If you encountered a problem, please first confirm whether the problem has been recorded in the issue or has been fixed.</li>\n<li>When submitting an issue, please describe the problem you encountered in a short language, and add the environment and reproduction steps when the problem occurs.</li>\n</ul>\n</div><h2 id="participate-in-development" tabindex="-1">Participate in development</h2>\n<div class="van-doc-card"><h3 id="local-development" tabindex="-1">Local development</h3>\n<p>Before developing locally, please make sure that <a href="https://nodejs.org" target="_blank">Node.js &gt;= 18</a> is installed in your development environment.</p>\n<p>Follow the steps below to develop Vant components locally.</p>\n<pre><code class="language-bash"><span class="hljs-comment"># Clone repository</span>\ngit <span class="hljs-built_in">clone</span> git@github.com:vant-ui/vant.git\n\n<span class="hljs-comment"># Enable pnpm package manager</span>\ncorepack <span class="hljs-built_in">enable</span>\n\n<span class="hljs-comment"># Install dependencies</span>\npnpm i\n\n<span class="hljs-comment"># Start development</span>\npnpm dev\n</code></pre>\n<p>Different branches of the repository correspond to different Vant versions, please switch to the appropriate branch for development:</p>\n<ul>\n<li>The main branch corresponds to the Vant 4 version, suitable for Vue 3</li>\n<li>3.x branch corresponds to Vant 3 version, suitable for Vue 3</li>\n<li>2.x branch corresponds to Vant 2 version, suitable for Vue 2</li>\n</ul>\n</div><div class="van-doc-card"><h3 id="mirror-repository" tabindex="-1">Mirror repository</h3>\n<p>If GitHub cloning is slow, you can also directly clone Vant\'s <a href="https://gitee.com/vant-contrib/vant" target="_blank">mirror repository</a> directly on gitee:</p>\n<pre><code class="language-bash">git <span class="hljs-built_in">clone</span> git@gitee.com:vant-contrib/vant.git\n</code></pre>\n<p>The mirror repository is only used to speed up local access, please do not submit issues and pull requests to the mirror repository.</p>\n</div><div class="van-doc-card"><h3 id="directory-structure" tabindex="-1">Directory Structure</h3>\n<p>Vant uses monorepo for code management, and all subpackages are in the <code>packages/vant</code> directory:</p>\n<pre><code>root\n\u2514\u2500 packages\n   \u251C\u2500 vant        # Component library\n   \u251C\u2500 vant-cli    # Scaffolding\n   \u251C\u2500 vant-icons  # Icon library\n   \u251C\u2500 vant-use    # Composition API\n   \u2514\u2500 ....        # Other npm packages\n</code></pre>\n<p>Among them, the <code>packages/vant</code> directory is the core code of the component library:</p>\n<pre><code>vant\n\u251C\u2500 docs             # Documentation\n\u251C\u2500 src              # Component source code\n\u251C\u2500 test             # Test utils\n\u2514\u2500 vant.config.mjs  # Document configuration\n</code></pre>\n<p>The <code>packages/vant/src</code> directory contains the source code of each component, and each folder corresponds to a component:</p>\n<pre><code>src\n\u2514\u2500 button\n   \u251C\u2500 demo             # Demo code\n   \u251C\u2500 test             # Unit test\n   \u251C\u2500 Component.tsx    # Component\n   \u251C\u2500 index.ts         # Component entry\n   \u251C\u2500 index.less       # Styles\n   \u251C\u2500 README.md        # English document\n   \u2514\u2500 README.zh-CN.md  # Chinese document\n</code></pre>\n</div><div class="van-doc-card"><h3 id="code-specification" tabindex="-1">Code Specification</h3>\n<p>When writing code, please note:</p>\n<ul>\n<li>Make sure the code can pass the repository\'s ESLint check.</li>\n<li>Make sure the code format is standardized, use prettier for code formatting.</li>\n<li>Make sure you don\'t use incompatible APIs like <code>async</code>, <code>await</code>.</li>\n</ul>\n</div><h2 id="submitting-a-pull-request" tabindex="-1">Submitting a Pull Request</h2>\n<div class="van-doc-card"><h3 id="reference-guide" tabindex="-1">Reference Guide</h3>\n<p>If this is your first time submitting a pull request on GitHub, you can learn from the following article:</p>\n<ul>\n<li><a href="https://github.com/firstcontributions/first-contributions" target="_blank">First participation in open source</a></li>\n</ul>\n</div><div class="van-doc-card"><h3 id="pull-request-specification" tabindex="-1">Pull Request Specification</h3>\n<p>When submitting a Pull Request, please note:</p>\n<ul>\n<li>Keep your PRs small enough that a PR only addresses a single issue or adds a single feature.</li>\n<li>When adding new components or modifying original components, remember to add or modify the corresponding unit tests to ensure the stability of the code.</li>\n<li>Please include an appropriate description in the PR, and link related issues.</li>\n</ul>\n</div><div class="van-doc-card"><h3 id="pull-request-process" tabindex="-1">Pull Request Process</h3>\n<ol>\n<li>Fork the main repository. If you have already forked, please synchronize the latest code from the main repository.</li>\n<li>Create a new branch based on the main branch of the repository after the fork, such as <code>feature/button_color</code>.</li>\n<li>Develop on the new branch. When development is complete, submit a pull request to the main branch of the main repository.</li>\n<li>The pull request is merged into the main repository after the review is approved.</li>\n<li>Wait for Vant to release a new version, usually once a week.</li>\n</ol>\n</div><div class="van-doc-card"><h3 id="pull-request-title-format" tabindex="-1">Pull Request Title Format</h3>\n<p>The title of the Pull Request should be in the following format:</p>\n<pre><code class="language-bash"><span class="hljs-built_in">type</span>(ComponentName?)\uFF1Acommit message\n</code></pre>\n<p>Example\uFF1A</p>\n<ul>\n<li>docs: fix typo in quickstart</li>\n<li>build: optimize build speed</li>\n<li>fix(Button): incorrect style</li>\n<li>feat(Button): add color prop</li>\n</ul>\n<p>Allowed Types:</p>\n<ul>\n<li>fix</li>\n<li>feat</li>\n<li>docs</li>\n<li>perf</li>\n<li>test</li>\n<li>types</li>\n<li>style</li>\n<li>build</li>\n<li>chore</li>\n<li>release</li>\n<li>refactor</li>\n<li>breaking change</li>\n<li>revert:</li>\n</ul>\n</div><div class="van-doc-card"><h3 id="synchronize-the-latest-code" tabindex="-1">Synchronize the latest code</h3>\n<p>Before submitting a Pull Request, please synchronize the latest code of the main repository according to the following process:</p>\n<pre><code class="language-bash"><span class="hljs-comment"># Add the main repository to remote</span>\ngit remote add upstream git@github.com:vant-ui/vant.git\n\n<span class="hljs-comment"># Pull the latest code from the main repository</span>\ngit fetch upstream\n\n<span class="hljs-comment"># Switch to the main branch</span>\ngit checkout main\n\n<span class="hljs-comment"># Merge the code from the main repository</span>\ngit merge upstream/main\n</code></pre>\n</div>'},null,8,o))}}}]);