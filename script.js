(() => {
  'use strict';
  const toggle = document.getElementById('language');
  const translatable = [...document.querySelectorAll('[data-zh]')].map(node => ({ node, english: node.innerHTML, chinese: node.dataset.zh }));
  const attributes = ['alt', 'aria'].flatMap(kind => [...document.querySelectorAll(`[data-zh-${kind}]`)].map(node => ({ node, attribute: kind === 'aria' ? 'aria-label' : 'alt', english: node.getAttribute(kind === 'aria' ? 'aria-label' : 'alt'), chinese: node.getAttribute(`data-zh-${kind}`) })));
  let language = 'en';
  function applyLanguage(next) {
    language = next === 'zh' ? 'zh' : 'en';
    const chinese = language === 'zh';
    document.documentElement.lang = chinese ? 'zh-CN' : 'en';
    for (const entry of translatable) entry.node.innerHTML = chinese ? entry.chinese : entry.english;
    for (const entry of attributes) entry.node.setAttribute(entry.attribute, chinese ? entry.chinese : entry.english);
    const logo = document.getElementById('game-logo');
    logo.src = chinese ? './logo-zh.webp' : './logo-en.webp';
    logo.alt = chinese ? '咕噜物语' : 'Cozy Tales';
    toggle.textContent = chinese ? 'EN' : '中文';
    toggle.setAttribute('aria-label', chinese ? 'Switch to English' : '切换为中文');
    document.title = chinese ? '咕噜物语 · 你忙你的，冒险有我们' : 'Cozy Tales · A little adventure, always by your side';
    try { localStorage.setItem('cozy-tales-language', language); } catch { /* The site also works without persistent storage. */ }
  }
  let initial = navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  try { const saved = localStorage.getItem('cozy-tales-language'); if (saved === 'en' || saved === 'zh') initial = saved; } catch { /* Use browser language. */ }
  toggle.hidden = false;
  toggle.addEventListener('click', () => applyLanguage(language === 'en' ? 'zh' : 'en'));
  applyLanguage(initial);

  const dialog = document.getElementById('lightbox');
  const image = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-caption');
  let opener;
  if (typeof dialog.showModal === 'function') {
    for (const link of document.querySelectorAll('[data-gallery]')) {
      link.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        opener = link;
        image.src = link.href;
        image.alt = link.querySelector('img').alt;
        caption.textContent = link.querySelector('h3').textContent;
        dialog.showModal();
        document.body.classList.add('modal-open');
      });
    }
    document.getElementById('close-lightbox').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const r = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('modal-open');
      opener?.focus();
    });
  }
})();
