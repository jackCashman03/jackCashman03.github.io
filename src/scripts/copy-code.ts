// Adds a "Copy" button to every code block. Runs on the client after the
// post renders. No styling here — see `.code-block .copy-btn` in global.css.
function setupCopyButtons() {
  const blocks = document.querySelectorAll<HTMLPreElement>('.post-content pre');

  blocks.forEach((pre) => {
    if (pre.parentElement?.classList.contains('code-block')) return; // already wrapped

    const wrapper = document.createElement('div');
    wrapper.className = 'code-block';
    pre.parentNode?.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy code to clipboard');
    wrapper.appendChild(btn);

    btn.addEventListener('click', async () => {
      const code = pre.querySelector('code')?.innerText ?? pre.innerText;
      try {
        await navigator.clipboard.writeText(code);
        btn.textContent = 'Copied';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 1600);
      } catch {
        btn.textContent = 'Failed';
        setTimeout(() => (btn.textContent = 'Copy'), 1600);
      }
    });
  });
}

setupCopyButtons();
