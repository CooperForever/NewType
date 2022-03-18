import{d as a}from"./app.a06faa6e.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";var s="/NewType/images/lifecycle.png",e="/NewType/images/init.jpg",t="/NewType/images/unmount.jpg";const p={},c=a('<h1 id="\u7EC4\u4EF6\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u7EC4\u4EF6\u751F\u547D\u5468\u671F</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6B64\u5904\u53EA\u8BA8\u8BBAvue2\u751F\u547D\u5468\u671F\uFF0Cvue3\u751F\u547D\u5468\u671F\u6709\u8C03\u6574\uFF0C\u4EE5\u540E\u5728Vue3\u4E2D\u6574\u7406\u3002</p></div><h2 id="\u5355\u4E2A\u7EC4\u4EF6\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u5355\u4E2A\u7EC4\u4EF6\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u5355\u4E2A\u7EC4\u4EF6\u751F\u547D\u5468\u671F</h2><p>\u501F\u7528Vue\u5B98\u7F51\u751F\u547D\u5468\u671F\u56FE\u793A \u9700\u8981\u6CE8\u610F\u7684\u73AF\u8282\uFF1A</p><ol><li><code>created</code>\u94A9\u5B50\u8C03\u7528\u540E\uFF0C\u6B64\u65F6data\u5DF2\u7ECF\u5B8C\u6210\u54CD\u5E94\u5F0F\u5904\u7406\uFF0C\u540E\u7EED\u8FDB\u884Ctemplate\u7684\u7F16\u8BD1\u5904\u7406\u3002</li><li><code>mounted</code>\u624D\u662F\u6302\u8F7D\u5B8C\u6210\u9636\u6BB5\uFF0CVue\u5B98\u7F51\u662F\u8FD9\u6837\u8BF4\u7684\uFF1A \u7236\u7EA7\u7EC4\u4EF6\u4E0D\u4F1A\u4FDD\u8BC1\u6240\u6709\u5B50\u7EC4\u4EF6\u90FD\u88AB\u6302\u8F7D\u5B8C\u6210\uFF08mounted\uFF09\uFF0C\u5982\u679C\u5E0C\u671B\u7B49\u5230\u6574\u4E2A\u89C6\u56FE\u90FD\u6E32\u67D3\u5B8C\u6BD5\uFF0C\u9700\u8981\u5728<code>mounted</code>\u5185\u90E8\u4F7F\u7528<code>vm.$nextTick</code>\u3002</li><li>watchers\u3001\u5B50\u7EC4\u4EF6\u4E0E\u76D1\u542C\u4E8B\u4EF6\u5728<code>destoryed</code>\u4E4B\u524D\u88AB\u9500\u6BC1 <img src="'+s+`" alt="avatar"></li></ol><h2 id="\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u5173\u7CFB" aria-hidden="true">#</a> \u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u5173\u7CFB</h2><p>\u901A\u8FC7Example\u5177\u4F53\u6F14\u793A\u7236\u5B50\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\u8C03\u7528\u987A\u5E8F\uFF0C\u4EE3\u7801\u4E0E\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// \u7236\u7EC4\u4EF6
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComponentB</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ComponentB</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

// \u5B50\u7EC4\u4EF6
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComponentC</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ComponentC</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

// \u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u6267\u884C\u7ED3\u679C\u5982\u4E0B
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img src="`+e+'" alt="avatar"><img src="'+t+'" alt="avatar"><br><strong>\u603B\u7ED3\uFF1A</strong> \u6302\u8F7D\u9636\u6BB5\uFF1A\u7236\u7EC4\u4EF6\u7684<code>create</code>\u94A9\u5B50\u5148\u89E6\u53D1\u5B8C\u6210\uFF0C\u5728\u89E6\u53D1\u5B8C\u7236\u7EC4\u4EF6\u7684<code>beforeMount</code>\u540E\uFF0C\u5F80\u4E0B\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684<code>create</code>\u76F8\u5173\u94A9\u5B50\uFF0C\u9010\u5C42\u6DF1\u5165\u3002\u5728\u6700\u6DF1\u5B50\u7EC4\u4EF6<code>created</code>\u94A9\u5B50\u89E6\u53D1\u5B8C\u6210\u540E\uFF0C\u4ECE\u8BE5\u7EC4\u4EF6\u7684<code>mounted</code>\u94A9\u5B50\u5F00\u59CB\u9010\u5C42\u5411\u4E0A\u89E6\u53D1\u5404\u7EA7\u7EC4\u4EF6\u7684<code>mounted</code>\u94A9\u5B50\u3002<br> \u5378\u8F7D\u9636\u6BB5\uFF1A\u89E6\u53D1\u5F53\u524D\u7EC4\u4EF6<code>beforeUpdate</code>\u94A9\u5B50\uFF0C\u5411\u4E0B\u9010\u5C42\u89E6\u53D1<code>beforeUnmount</code>\u94A9\u5B50\uFF0C\u5728\u6700\u6DF1\u8282\u5411\u4E0A\u89E6\u53D1<code>unmounted</code>\u94A9\u5B50\uFF0C\u6700\u540E\u89E6\u53D1\u7EC4\u4EF6<code>updated</code>\u94A9\u5B50\u3002</p><h2 id="\u7EC4\u4EF6\u52A0\u8F7D\u65F6\u672A\u7ED1\u5B9A\u7684\u8BA1\u7B97\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u52A0\u8F7D\u65F6\u672A\u7ED1\u5B9A\u7684\u8BA1\u7B97\u5C5E\u6027" aria-hidden="true">#</a> \u7EC4\u4EF6\u52A0\u8F7D\u65F6\u672A\u7ED1\u5B9A\u7684\u8BA1\u7B97\u5C5E\u6027</h2><p>\u4F1A\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684setter\uFF0C\u4F46\u662F\u4E0D\u4F1A\u89E6\u53D1getter\uFF0C\u5373computed\u5185\u90E8\u5B9A\u4E49\u7684\u5176\u4ED6\u51FD\u6570\u4E0D\u4F1A\u6267\u884C\u3002</p><h2 id="\u7EC4\u4EF6\u521A\u521D\u59CB\u5316\u5B8C\u6210\u65F6watch\u662F\u5426\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u521A\u521D\u59CB\u5316\u5B8C\u6210\u65F6watch\u662F\u5426\u6267\u884C" aria-hidden="true">#</a> \u7EC4\u4EF6\u521A\u521D\u59CB\u5316\u5B8C\u6210\u65F6watch\u662F\u5426\u6267\u884C</h2><p>\u9996\u6B21\u52A0\u8F7D\u7EC4\u4EF6\uFF0Cwatch\u4E0D\u6267\u884C, \u5728created/mounted\u7B49\u94A9\u5B50\u51FD\u6570\u4E2D\u4FEE\u6539watch\u5C5E\u6027\u4F1A\u89E6\u53D1watch\u3002</p>',13);function o(l,r){return c}var u=n(p,[["render",o]]);export{u as default};
