/*! For license information please see 8959.24f5ac1f.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["8959"],{91008:function(n,t,s){"use strict";s.r(t);var a=s("69298");let d=["innerHTML"];t.default={setup:()=>({html:""}),render:()=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Pagination \u5206\u9875</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u6570\u636E\u91CF\u8FC7\u591A\u65F6\uFF0C\u91C7\u7528\u5206\u9875\u7684\u5F62\u5F0F\u5C06\u6570\u636E\u5206\u9694\uFF0C\u6BCF\u6B21\u53EA\u52A0\u8F7D\u4E00\u4E2A\u9875\u9762\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pagination</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Pagination</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u901A\u8FC7 <code>v-model</code> \u6765\u7ED1\u5B9A\u5F53\u524D\u9875\u7801\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage&quot;</span> <span class="hljs-attr">:total-items</span>=<span class="hljs-string">&quot;24&quot;</span> <span class="hljs-attr">:items-per-page</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> currentPage = <span class="hljs-title function_">ref</span>(<span class="hljs-number">1</span>);\n    <span class="hljs-keyword">return</span> { currentPage };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jian-dan-mo-shi" tabindex="-1">\u7B80\u5355\u6A21\u5F0F</h3>\n<p>\u5C06 <code>mode</code> \u8BBE\u7F6E\u4E3A <code>simple</code> \u6765\u5207\u6362\u5230\u7B80\u5355\u6A21\u5F0F\uFF0C\u6B64\u65F6\u5206\u9875\u5668\u4E0D\u4F1A\u5C55\u793A\u5177\u4F53\u7684\u9875\u7801\u6309\u94AE\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage&quot;</span> <span class="hljs-attr">:page-count</span>=<span class="hljs-string">&quot;12&quot;</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;simple&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="xian-shi-sheng-lue-hao" tabindex="-1">\u663E\u793A\u7701\u7565\u53F7</h3>\n<p>\u8BBE\u7F6E <code>force-ellipses</code> \u540E\u4F1A\u5C55\u793A\u7701\u7565\u53F7\u6309\u94AE\uFF0C\u70B9\u51FB\u540E\u53EF\u4EE5\u5FEB\u901F\u8DF3\u8F6C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pagination</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage&quot;</span>\n  <span class="hljs-attr">:total-items</span>=<span class="hljs-string">&quot;125&quot;</span>\n  <span class="hljs-attr">:show-page-size</span>=<span class="hljs-string">&quot;3&quot;</span>\n  <span class="hljs-attr">force-ellipses</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-an-niu" tabindex="-1">\u81EA\u5B9A\u4E49\u6309\u94AE</h3>\n<p>\u901A\u8FC7 <code>prev-text</code>\u3001<code>next-text</code> \u7B49\u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u5206\u9875\u6309\u94AE\u7684\u5185\u5BB9\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage&quot;</span> <span class="hljs-attr">:total-items</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:show-page-size</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prev-text</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;arrow-left&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">next-text</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;arrow&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">page</span>=<span class="hljs-string">&quot;{ text }&quot;</span>&gt;</span>{{ text }}<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-pagination</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>\u5F53\u524D\u9875\u7801</td>\n<td><em>number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>mode</td>\n<td>\u663E\u793A\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>simple</code></td>\n<td><em>string</em></td>\n<td><code>multi</code></td>\n</tr>\n<tr>\n<td>prev-text</td>\n<td>\u4E0A\u4E00\u9875\u6309\u94AE\u6587\u5B57</td>\n<td><em>string</em></td>\n<td><code>\u4E0A\u4E00\u9875</code></td>\n</tr>\n<tr>\n<td>next-text</td>\n<td>\u4E0B\u4E00\u9875\u6309\u94AE\u6587\u5B57</td>\n<td><em>string</em></td>\n<td><code>\u4E0B\u4E00\u9875</code></td>\n</tr>\n<tr>\n<td>page-count</td>\n<td>\u603B\u9875\u6570</td>\n<td><em>number | string</em></td>\n<td>\u6839\u636E\u9875\u6570\u8BA1\u7B97</td>\n</tr>\n<tr>\n<td>total-items</td>\n<td>\u603B\u8BB0\u5F55\u6570</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>items-per-page</td>\n<td>\u6BCF\u9875\u8BB0\u5F55\u6570</td>\n<td><em>number | string</em></td>\n<td><code>10</code></td>\n</tr>\n<tr>\n<td>show-page-size</td>\n<td>\u663E\u793A\u7684\u9875\u7801\u4E2A\u6570</td>\n<td><em>number | string</em></td>\n<td><code>5</code></td>\n</tr>\n<tr>\n<td>force-ellipses</td>\n<td>\u662F\u5426\u663E\u793A\u7701\u7565\u53F7</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-prev-button <code>v4.2.1</code></td>\n<td>\u662F\u5426\u5C55\u793A\u4E0A\u4E00\u9875\u6309\u94AE</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>show-next-button <code>v4.2.1</code></td>\n<td>\u662F\u5426\u5C55\u793A\u4E0B\u4E00\u9875\u6309\u94AE</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>\u9875\u7801\u6539\u53D8\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u63CF\u8FF0</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>page</td>\n<td>\u81EA\u5B9A\u4E49\u9875\u7801</td>\n<td><em>{ number: number, text: string, active: boolean }</em></td>\n</tr>\n<tr>\n<td>prev-text</td>\n<td>\u81EA\u5B9A\u4E49\u4E0A\u4E00\u9875\u6309\u94AE\u6587\u5B57</td>\n<td>-</td>\n</tr>\n<tr>\n<td>next-text</td>\n<td>\u81EA\u5B9A\u4E49\u4E0B\u4E00\u9875\u6309\u94AE\u6587\u5B57</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PaginationMode</span>, <span class="hljs-title class_">PaginationProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-pagination-height</td>\n<td><em>40px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-pagination-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-pagination-item-width</td>\n<td><em>36px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-pagination-item-default-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-pagination-item-disabled-color</td>\n<td><em>var(--van-gray-7)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-pagination-item-disabled-background</td>\n<td><em>var(--van-background)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-pagination-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-pagination-desc-color</td>\n<td><em>var(--van-gray-7)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-pagination-disabled-opacity</td>\n<td><em>var(--van-disabled-opacity)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,d))}}}]);