(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile menu
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('hidden') === false;
      mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Reveal on scroll
  const revealTargets = document.querySelectorAll('.reveal, .reveal-group');
  if (revealTargets.length) {
    if ('IntersectionObserver' in window && !reduceMotion) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      revealTargets.forEach((el) => io.observe(el));
    } else {
      revealTargets.forEach((el) => el.classList.add('in-view'));
    }
  }

  // Scroll progress bar + parallax glows (rAF-throttled)
  const progress = document.getElementById('scroll-progress');
  const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'));
  let ticking = false;

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
    if (progress) progress.style.transform = 'scaleX(' + ratio + ')';
    if (!reduceMotion && parallaxEls.length) {
      const viewCenter = window.innerHeight / 2;
      for (const el of parallaxEls) {
        const speed = parseFloat(el.dataset.parallax) || 0.2;
        const host = el.parentElement;
        const rect = host.getBoundingClientRect();
        const hostCenter = rect.top + rect.height / 2;
        const offset = (viewCenter - hostCenter) * speed;
        el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
      }
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  // Interactive spotlight glow that follows the cursor over cards
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.spotlight').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 100;
        const my = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mx', mx + '%');
        card.style.setProperty('--my', my + '%');
      });
    });
  }
})();
