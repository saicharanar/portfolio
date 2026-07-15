const topOfPage: ScrollToOptions = {
  top: 0,
  left: 0,
  behavior: 'auto',
};

function scrollToTop() {
  window.scrollTo(topOfPage);
}

export function resetInitialHashNavigation() {
  if (!window.location.hash) return;

  const previousScrollRestoration = window.history.scrollRestoration;
  const locationWithoutHash = `${window.location.pathname}${window.location.search}`;

  window.history.scrollRestoration = 'manual';
  window.history.replaceState(window.history.state, '', locationWithoutHash);
  scrollToTop();
  window.requestAnimationFrame(scrollToTop);

  const finishReset = () => {
    scrollToTop();
    window.history.scrollRestoration = previousScrollRestoration;
  };

  if (document.readyState === 'complete') {
    window.requestAnimationFrame(finishReset);
    return;
  }

  window.addEventListener('load', finishReset, { once: true });
}
