// ===== DARK MODE INIT =====
(function() {
  const savedTheme = localStorage.getItem('mindflow_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
})();
