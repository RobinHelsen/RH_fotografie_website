/* Dorpelstudio — shared behaviour for every page.
   Mobile navigation, scroll progress, header state and reveal-on-scroll. */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Mobile navigation ------------------------------------------------- */

  var toggle = document.getElementById('menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  if (toggle && mobileNav) {
    var setMenu = function (open) {
      mobileNav.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Sluit menu' : 'Open menu');
    };

    toggle.addEventListener('click', function () {
      setMenu(mobileNav.hidden);
    });

    mobileNav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !mobileNav.hidden) {
        setMenu(false);
        toggle.focus();
      }
    });

    // A resize past the desktop breakpoint leaves the panel stranded open.
    var desktop = window.matchMedia('(min-width: 880px)');
    if (typeof desktop.addEventListener === 'function') {
      desktop.addEventListener('change', function (event) {
        if (event.matches) setMenu(false);
      });
    }
  }

  /* --- Reveal on scroll -------------------------------------------------- */

  var revealTargets = document.querySelectorAll('[data-reveal], [data-reveal-group]');

  if (revealTargets.length) {
    if ('IntersectionObserver' in window && !reduceMotion) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });

      revealTargets.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      revealTargets.forEach(function (el) {
        el.classList.add('is-visible');
      });
    }
  }

  /* --- Scroll progress + header state ------------------------------------ */

  var progress = document.getElementById('scroll-progress');
  var header = document.querySelector('.site-header');
  var ticking = false;

  function onScroll() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (progress) {
      var scrollable = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = scrollable > 0 ? Math.min(scrollTop / scrollable, 1) : 0;
      progress.style.transform = 'scaleX(' + ratio + ')';
    }

    if (header) header.classList.toggle('is-scrolled', scrollTop > 8);

    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(onScroll);
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });
  onScroll();

  /* --- Footer year ------------------------------------------------------- */

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
