import{o as s,a,z as e}from"./vue-libs.ed3d9812.js";const n={class:"van-doc-markdown-body"},d=e(`<h1>Calendar</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Calendar component for selecting dates or date ranges.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Calendar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Calendar</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="select-single-date" tabindex="-1">Select Single Date</h3><p>The <code>confirm</code> event will be emitted after the date selection is completed.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Select Single Date&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;date&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> date = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatDate</span> = (<span class="hljs-params">date</span>) =&gt; <span class="hljs-string">\`<span class="hljs-subst">\${date.getMonth() + <span class="hljs-number">1</span>}</span>/<span class="hljs-subst">\${date.getDate()}</span>\`</span>;
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">value</span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      date.<span class="hljs-property">value</span> = <span class="hljs-title function_">formatDate</span>(value);
    };

    <span class="hljs-keyword">return</span> {
      date,
      show,
      onConfirm,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="select-multiple-date" tabindex="-1">Select Multiple Date</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Select Multiple Date&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;multiple&quot;</span> @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">dates</span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      text.<span class="hljs-property">value</span> = <span class="hljs-string">\`\u9009\u62E9\u4E86 <span class="hljs-subst">\${dates.length}</span> \u4E2A\u65E5\u671F\`</span>;
    };

    <span class="hljs-keyword">return</span> {
      text,
      show,
      onConfirm,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="select-date-range" tabindex="-1">Select Date Range</h3><p>You can select a date range after setting <code>type</code> to<code>range</code>. In range mode, the date returned by the <code>confirm</code> event is an array, the first item in the array is the start time and the second item is the end time.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Select Date Range&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;date&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> date = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatDate</span> = (<span class="hljs-params">date</span>) =&gt; <span class="hljs-string">\`<span class="hljs-subst">\${date.getMonth() + <span class="hljs-number">1</span>}</span>/<span class="hljs-subst">\${date.getDate()}</span>\`</span>;
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">values</span>) =&gt; {
      <span class="hljs-keyword">const</span> [start, end] = values;
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      date.<span class="hljs-property">value</span> = <span class="hljs-string">\`<span class="hljs-subst">\${formatDate(start)}</span> - <span class="hljs-subst">\${formatDate(end)}</span>\`</span>;
    };

    <span class="hljs-keyword">return</span> {
      date,
      show,
      onConfirm,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="quick-select" tabindex="-1">Quick Select</h3><p>Set <code>show-confirm</code> to <code>false</code> to hide the confirm button. In this case, the <code>confirm</code> event will be emitted immediately after the selection is completed.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:show-confirm</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3><p>Use <code>color</code> prop to custom calendar color.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-date-range" tabindex="-1">Custom Date Range</h3><p>Use <code>min-date</code> and <code>max-date</code> to custom date range.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span> <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">return</span> {
      show,
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2010</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2010</span>, <span class="hljs-number">0</span>, <span class="hljs-number">31</span>),
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-confirm-text" tabindex="-1">Custom Confirm Text</h3><p>Use <code>confirm-text</code> and <code>confirm-disabled-text</code> to custom confirm text.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span>
  <span class="hljs-attr">confirm-text</span>=<span class="hljs-string">&quot;OK&quot;</span>
  <span class="hljs-attr">confirm-disabled-text</span>=<span class="hljs-string">&quot;Select End Time&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-day-text" tabindex="-1">Custom Day Text</h3><p>Use <code>formatter</code> to custom day text.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">day</span>) =&gt; {
      <span class="hljs-keyword">const</span> month = day.<span class="hljs-property">date</span>.<span class="hljs-title function_">getMonth</span>() + <span class="hljs-number">1</span>;
      <span class="hljs-keyword">const</span> date = day.<span class="hljs-property">date</span>.<span class="hljs-title function_">getDate</span>();

      <span class="hljs-keyword">if</span> (month === <span class="hljs-number">5</span>) {
        <span class="hljs-keyword">if</span> (date === <span class="hljs-number">1</span>) {
          day.<span class="hljs-property">topInfo</span> = <span class="hljs-string">&#39;Labor Day&#39;</span>;
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (date === <span class="hljs-number">4</span>) {
          day.<span class="hljs-property">topInfo</span> = <span class="hljs-string">&#39;Youth Day&#39;</span>;
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (date === <span class="hljs-number">11</span>) {
          day.<span class="hljs-property">text</span> = <span class="hljs-string">&#39;Today&#39;</span>;
        }
      }

      <span class="hljs-keyword">if</span> (day.<span class="hljs-property">type</span> === <span class="hljs-string">&#39;start&#39;</span>) {
        day.<span class="hljs-property">bottomInfo</span> = <span class="hljs-string">&#39;In&#39;</span>;
      } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (day.<span class="hljs-property">type</span> === <span class="hljs-string">&#39;end&#39;</span>) {
        day.<span class="hljs-property">bottomInfo</span> = <span class="hljs-string">&#39;Out&#39;</span>;
      }

      <span class="hljs-keyword">return</span> day;
    };

    <span class="hljs-keyword">return</span> {
      formatter,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-position" tabindex="-1">Custom Position</h3><p>Use <code>position</code> to custom popup position, can be set to <code>top</code>\u3001<code>left</code>\u3001<code>right</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="max-range" tabindex="-1">Max Range</h3><p>When selecting a date range, you can use the <code>max-range</code> prop to specify the maximum number of selectable days.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> <span class="hljs-attr">:max-range</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;500px&#39; }&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-first-day-of-week" tabindex="-1">Custom First Day Of Week</h3><p>Use <code>first-day-of-week</code> to custom the start day of week</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">first-day-of-week</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="tiled-display" tabindex="-1">Tiled display</h3><p>Set <code>poppable</code> to <code>false</code>, the calendar will be displayed directly on the page instead of appearing as a popup</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Calendar&quot;</span>
  <span class="hljs-attr">:poppable</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">:show-confirm</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;500px&#39; }&quot;</span>
/&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Type, can be set to <code>range</code> <code>multiple</code></td><td><em>string</em></td><td><code>single</code></td></tr><tr><td>title</td><td>Title of calendar</td><td><em>string</em></td><td><code>Calendar</code></td></tr><tr><td>color</td><td>Color for the bottom button and selected date</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>min-date</td><td>Min date</td><td><em>Date</em></td><td>Today</td></tr><tr><td>max-date</td><td>Max date</td><td><em>Date</em></td><td>Six months after the today</td></tr><tr><td>default-date</td><td>Default selected date</td><td><em>Date | Date[] | null</em></td><td>Today</td></tr><tr><td>row-height</td><td>Row height</td><td><em>number | string</em></td><td><code>64</code></td></tr><tr><td>formatter</td><td>Day formatter</td><td><em>(day: Day) =&gt; Day</em></td><td>-</td></tr><tr><td>poppable</td><td>Whether to show the calendar inside a popup</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lazy-render</td><td>Whether to enable lazy render</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-mark</td><td>Whether to show background month mark</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-title</td><td>Whether to show title</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-subtitle</td><td>Whether to show subtitle</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-confirm</td><td>Whether to show confirm button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>readonly</td><td>Whether to be readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>confirm-text</td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td>confirm-disabled-text</td><td>Confirm button text when disabled</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td>first-day-of-week</td><td>Set the start day of week</td><td><em>0-6</em></td><td><code>0</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="calendar-poppable-props" tabindex="-1">Calendar Poppable Props</h3><p>Following props are supported when the poppable is true</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:show</td><td>Whether to show calendar</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>position</td><td>Popup position, can be set to <code>top</code> <code>right</code> <code>left</code></td><td><em>string</em></td><td><code>bottom</code></td></tr><tr><td>round</td><td>Whether to show round corner</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-popstate</td><td>Whether to close when popstate</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-overlay</td><td>Whether to close when overlay is clicked</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>safe-area-inset-top</td><td>Whether to enable top safe area adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>safe-area-inset-bottom</td><td>Whether to enable bottom safe area adaptation</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>teleport</td><td>Specifies a target element where Calendar will be mounted</td><td><em>string | Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="calendar-range-props" tabindex="-1">Calendar Range Props</h3><p>Following props are supported when the type is range</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>max-range</td><td>Number of selectable days</td><td><em>number | string</em></td><td>Unlimited</td></tr><tr><td>range-prompt</td><td>Error message when exceeded max range</td><td><em>string</em></td><td><code>Choose no more than xx days</code></td></tr><tr><td>show-range-prompt</td><td>Whether prompt error message when exceeded max range</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>allow-same-day</td><td>Whether the start and end time of the range is allowed on the same day</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="calendar-multiple-props" tabindex="-1">Calendar Multiple Props</h3><p>Following props are supported when the type is multiple</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>max-range</td><td>Max count of selectable days</td><td><em>number | string</em></td><td>Unlimited</td></tr><tr><td>range-prompt</td><td>Error message when exceeded max count</td><td><em>string</em></td><td><code>Choose no more than xx days</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="data-structure-of-day" tabindex="-1">Data Structure of Day</h3><table><thead><tr><th>Key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>date</td><td>Date</td><td><em>Date</em></td></tr><tr><td>type</td><td>Type, can be set to <code>selected</code>\u3001<code>start</code>\u3001<code>middle</code>\u3001<code>end</code>\u3001<code>disabled</code></td><td><em>string</em></td></tr><tr><td>text</td><td>Text</td><td><em>string</em></td></tr><tr><td>topInfo</td><td>Top info</td><td><em>string</em></td></tr><tr><td>bottomInfo</td><td>Bottom info</td><td><em>string</em></td></tr><tr><td>className</td><td>Extra className</td><td><em>string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>select</td><td>Emitted when date is selected</td><td><em>value: Date | Date[]</em></td></tr><tr><td>confirm</td><td>Emitted after date selection is complete, if <code>show-confirm</code> is <code>true</code>, it is Emitted after clicking the confirm button</td><td><em>value: Date | Date[]</em></td></tr><tr><td>open</td><td>Emitted when opening Popup</td><td>-</td></tr><tr><td>close</td><td>Emitted when closing Popup</td><td>-</td></tr><tr><td>opened</td><td>Emitted when Popup is opened</td><td>-</td></tr><tr><td>closed</td><td>Emitted when Popup is closed</td><td>-</td></tr><tr><td>unselect</td><td>Emitted when unselect date when type is multiple</td><td><em>value: Date</em></td></tr><tr><td>month-show</td><td>Emitted when a month enters the visible area</td><td><em>value: { date: Date, title: string }</em></td></tr><tr><td>over-range</td><td>Emitted when exceeded max range</td><td>-</td></tr><tr><td>click-subtitle <code>v3.1.3</code></td><td>Emitted when clicking the subtitle</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>title</td><td>Custom title</td><td>-</td></tr><tr><td>subtitle <code>v3.1.3</code></td><td>Custom subtitle</td><td><em>{ text: string, date?: Date }</em></td></tr><tr><td>footer</td><td>Custom footer</td><td>-</td></tr><tr><td>confirm-text <code>v3.2.6</code></td><td>Custom confirm text</td><td><em>{ disabled: boolean }</em></td></tr><tr><td>top-info <code>v3.0.17</code></td><td>Custom top info of day</td><td><em>day: Day</em></td></tr><tr><td>bottom-info <code>v3.0.17</code></td><td>Custom bottom info of day</td><td><em>day: Day</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get Calendar instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>reset</td><td>Reset selected date, will reset to default date when no params passed</td><td><em>date?: Date | Date[]</em></td><td>-</td></tr><tr><td>scrollToDate</td><td>Scroll to date</td><td><em>date: Date</em></td><td>-</td></tr><tr><td>getSelectedDate</td><td>get selected date</td><td>-</td><td><em>Date | Date[] | null</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">CalendarType</span>,
  <span class="hljs-title class_">CalendarProps</span>,
  <span class="hljs-title class_">CalendarDayItem</span>,
  <span class="hljs-title class_">CalendarDayType</span>,
  <span class="hljs-title class_">CalendarInstance</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>CalendarInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CalendarInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> calendarRef = ref&lt;<span class="hljs-title class_">CalendarInstance</span>&gt;();

calendarRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">reset</span>();
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-calendar-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-calendar-popup-height</td><td><em>80%</em></td><td>-</td></tr><tr><td>--van-calendar-header-shadow</td><td><em>0 2px 10px rgba(125, 126, 128, 0.16)</em></td><td>-</td></tr><tr><td>--van-calendar-header-title-height</td><td><em>44px</em></td><td>-</td></tr><tr><td>--van-calendar-header-title-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-calendar-header-subtitle-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-calendar-weekdays-height</td><td><em>30px</em></td><td>-</td></tr><tr><td>--van-calendar-weekdays-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-calendar-month-title-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-calendar-month-mark-color</td><td><em>fade(var(--van-gray-2), 80%)</em></td><td>-</td></tr><tr><td>--van-calendar-month-mark-font-size</td><td><em>160px</em></td><td>-</td></tr><tr><td>--van-calendar-day-height</td><td><em>64px</em></td><td>-</td></tr><tr><td>--van-calendar-day-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-calendar-day-margin-bottom</td><td><em>4px</em></td><td>-</td></tr><tr><td>--van-calendar-range-edge-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-calendar-range-edge-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-calendar-range-middle-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-calendar-range-middle-background-opacity</td><td><em>0.1</em></td><td>-</td></tr><tr><td>--van-calendar-selected-day-size</td><td><em>54px</em></td><td>-</td></tr><tr><td>--van-calendar-selected-day-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-calendar-info-font-size</td><td><em>var(--van-font-size-xs)</em></td><td>-</td></tr><tr><td>--van-calendar-info-line-height</td><td><em>var(--van-line-height-xs)</em></td><td>-</td></tr><tr><td>--van-calendar-selected-day-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-calendar-day-disabled-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-calendar-confirm-button-height</td><td><em>36px</em></td><td>-</td></tr><tr><td>--van-calendar-confirm-button-margin</td><td><em>7px 0</em></td><td>-</td></tr></tbody></table></div>`,28),l=[d],i={__name:"README",setup(o,{expose:t}){return t({frontmatter:{}}),(p,c)=>(s(),a("div",n,l))}};export{i as default};
