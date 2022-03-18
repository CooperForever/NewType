import{d as n}from"./app.9371e739.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u73AF\u5F62\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5F62\u94FE\u8868" aria-hidden="true">#</a> \u73AF\u5F62\u94FE\u8868</h1><p><img src="https://img.shields.io/badge/leetcode-141-blue" alt="leetcode" title="leetcode"> <img src="https://img.shields.io/badge/-easy-green" alt="leetcode" title="leetcode"><br> \u89E3\u9898\u601D\u8DEF\uFF1A\u5FEB\u6162\u6307\u9488\u904D\u5386\u94FE\u8868\uFF0C\u76F8\u9047\u5373\u6709\u73AF</p><h2 id="code-part" tabindex="-1"><a class="header-anchor" href="#code-part" aria-hidden="true">#</a> Code Part</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">hasCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> p1 <span class="token operator">=</span> head
    <span class="token keyword">let</span> p2 <span class="token operator">=</span> head
    <span class="token keyword">while</span><span class="token punctuation">(</span>p1 <span class="token operator">&amp;&amp;</span> p2 <span class="token operator">&amp;&amp;</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
        p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next
        p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
        <span class="token keyword">if</span><span class="token punctuation">(</span>p1 <span class="token operator">===</span> p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//\u65F6\u95F4\u590D\u6742\u5EA6On</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,4);function p(t,o){return e}var r=s(a,[["render",p]]);export{r as default};
