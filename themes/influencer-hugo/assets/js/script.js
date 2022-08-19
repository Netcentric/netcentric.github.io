(() => {
  const _$ = {};

  function _setElements() {
    _$.mobileToggle = document.querySelector('.navbar-toggler');
    _$.navbarCollapse = document.querySelector('.navbar-collapse');
  }

  function _toggleMobileNav() {
    const ariaExpanded = _$.mobileToggle.getAttribute('aria-expanded') === "true"
    _$.mobileToggle.setAttribute("aria-expanded", !ariaExpanded);
    _$.navbarCollapse.classList.toggle('show');
  }

  function _setEventListeners() {
    _$.mobileToggle.addEventListener('click', _toggleMobileNav);
  }

  function _init() {
    _setElements();
   _setEventListeners();

   // Syntax highlighter
   hljs.highlightAll();
  }

  _init();
})();
