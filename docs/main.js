/* Dorpelstudio — shared behaviour for every page.
   Menu sheet, the photo stage, fitted wordmarks, reveal-on-scroll and the mail composer. */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var desktop = window.matchMedia('(min-width: 960px)');

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    /* --- Menu sheet (phone) ---------------------------------------------- */

    var sheet = document.getElementById('menu');
    var openBtn = document.querySelector('[aria-controls="menu"]');

    if (sheet && openBtn) {
      var setMenu = function (open) {
        sheet.hidden = !open;
        openBtn.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
        if (open) sheet.querySelector('[data-close]').focus();
        else openBtn.focus();
      };

      openBtn.addEventListener('click', function () { setMenu(true); });
      sheet.querySelector('[data-close]').addEventListener('click', function () { setMenu(false); });
      sheet.addEventListener('click', function (event) {
        if (event.target.closest('a')) setMenu(false);
      });
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !sheet.hidden) setMenu(false);
      });
      // From 1360px the page names are in the header, so an open menu would be stranded.
      window.matchMedia('(min-width: 1360px)').addEventListener('change', function (event) {
        if (event.matches && !sheet.hidden) setMenu(false);
      });
    }

    /* --- The stage: the photograph that matches what you are reading ----- */

    var stage = document.querySelector('[data-stage]');
    var shots = {};
    var triggers = [];

    if (stage) {
      stage.querySelectorAll('.shot').forEach(function (el) { shots[el.dataset.shot] = el; });
      triggers = Array.prototype.slice.call(document.querySelectorAll('.flow [data-shot]'));
    }

    var current = stage && stage.querySelector('.shot.is-on');
    var order = stage ? Array.prototype.slice.call(stage.querySelectorAll('.shot')) : [];
    var scrollPick = null;

    function show(name) {
      var next = shots[name];
      if (!next || next === current) return;
      // Scrolling back up plays the wipe in reverse: the current photo slides down and away,
      // uncovering the earlier one, which is put in place underneath without a wipe of its own.
      var back = current && order.indexOf(next) < order.indexOf(current);
      order.forEach(function (el) { el.classList.remove('was-on', 'is-leaving', 'is-under'); });
      if (current) {
        // A photo that fills the column narrows to the incoming photo's width while it is
        // wiped over, so the picture area glides to its new shape instead of jumping.
        if (!back && current.classList.contains('shot--fill')) {
          var incoming = next.querySelector('img').getBoundingClientRect().width;
          var frame = current.getBoundingClientRect().width;
          current.style.setProperty('--trim', Math.max(0, frame - incoming) + 'px');
        }
        current.classList.remove('is-on');
        current.classList.add(back ? 'is-leaving' : 'was-on');
      }
      if (back) next.classList.add('is-under');
      next.classList.add('is-on');
      current = next;
    }

    function markRow(row) {
      triggers.forEach(function (el) { el.classList.toggle('is-on', el === row); });
    }

    function pickByScroll() {
      if (!desktop.matches || !triggers.length) return;
      var line = window.innerHeight * 0.5;
      var hit = null;
      // The innermost trigger crossing the middle of the screen wins.
      triggers.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom >= line) hit = el;
      });
      if (hit && hit !== scrollPick) {
        scrollPick = hit;
        markRow(hit);
        show(hit.dataset.shot);
      }
    }

    // Scroll decides the photograph; keyboard focus may too. Hover does not, so the picture never
    // jumps to whatever row happens to pass under a resting pointer.
    triggers.forEach(function (el) {
      if (el.matches('.hero')) return;
      el.addEventListener('focusin', function () {
        if (!desktop.matches) return;
        markRow(el);
        show(el.dataset.shot);
      });
    });

    /* --- Fitted wordmarks ------------------------------------------------ */

    var fitted = document.querySelectorAll('[data-fit]');

    function fit() {
      fitted.forEach(function (el) {
        var span = el.firstElementChild;
        var box = el.parentElement;
        var cs = getComputedStyle(box);
        var target = box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
        // On desktop the hero name reaches back over the photograph, unless the page says not to.
        if (el.dataset.fit === 'hero' && el.dataset.cross !== 'no' && desktop.matches) {
          target = box.clientWidth - parseFloat(cs.paddingRight) + window.innerWidth * 0.09;
        }
        var size = parseFloat(getComputedStyle(el).fontSize);
        var width = span.offsetWidth;
        if (width > 0 && target > 0) el.style.fontSize = (size * target / width) + 'px';
      });
      alignHeader();
    }

    /* --- The spread header shares the intro text's left and right edges --- */

    var spread = document.querySelector('.site-header--spread');
    var intro = document.querySelector('.hero__body');

    // A whole (uncropped) photo can be narrower than its column. The intro is then centred
    // between the photo's visible right edge and the right side of the screen, not just in the
    // right half; the header follows because it is measured from the intro below.
    function centreIntro() {
      if (!intro) return;
      var img = document.querySelector('.shot[data-shot-default] img');
      var hero = intro.closest('.hero');
      intro.style.translate = '';
      if (!img || !hero || !desktop.matches) return;
      // offsets, not the bounding box: the photo briefly scales while it settles in
      var shot = img.parentElement.getBoundingClientRect();
      var photoRight = shot.left + img.offsetLeft + img.offsetWidth;
      var gap = hero.getBoundingClientRect().left - photoRight;
      if (gap > 1) intro.style.translate = (-gap / 2) + 'px 0';
    }

    function alignHeader() {
      centreIntro();
      if (!spread || !intro) return;
      var h = spread.getBoundingClientRect();
      var b = intro.getBoundingClientRect();
      spread.style.setProperty('--align-x', (b.left - h.left) + 'px');
      spread.style.setProperty('--align-w', b.width + 'px');
      spread.classList.add('is-aligned');
    }

    /* --- Scroll and resize ----------------------------------------------- */

    var ticking = false;
    // A photo marked .shot--pan fills its column and is panned from its top to its foot,
    // finishing where the next photo takes over (or where the photo column stops being pinned).
    var pan = document.querySelector('.shot--pan');
    function panPhoto() {
      if (!pan || !desktop.matches || reduceMotion) return;
      var split = pan.closest('.split').getBoundingClientRect();
      var range = split.height - window.innerHeight;
      for (var i = 0; i < triggers.length; i++) {
        if (triggers[i].dataset.shot !== pan.dataset.shot) {
          var handover = triggers[i].getBoundingClientRect().top - split.top - window.innerHeight * 0.5;
          range = Math.min(range, handover);
          break;
        }
      }
      var p = range > 0 ? Math.min(1, Math.max(0, -split.top / range)) : 1;
      pan.style.setProperty('--pan', (p * 100).toFixed(2) + '%');
    }

    function onFrame() {
      ticking = false;
      pickByScroll();
      panPhoto();
    }
    function request() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(onFrame);
    }

    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', function () { fit(); request(); }, { passive: true });
    fit();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    var heroImg = document.querySelector('.shot[data-shot-default] img');
    if (heroImg && !heroImg.complete) heroImg.addEventListener('load', fit);
    pickByScroll();
    panPhoto();

    /* --- Reveal on scroll, once ------------------------------------------ */

    var reveal = document.querySelectorAll('[data-reveal], [data-reveal-group]');

    document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child, i) {
        child.style.transitionDelay = (i * 70) + 'ms';
      });
    });

    if ('IntersectionObserver' in window && !reduceMotion) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });
      reveal.forEach(function (el) { observer.observe(el); });
    } else {
      reveal.forEach(function (el) { el.classList.add('is-in'); });
    }

    /* --- The composer: a sentence that writes the email ------------------ */

    var composer = document.querySelector('[data-composer]');

    if (composer) {
      var what = composer.querySelector('select');
      var when = composer.querySelector('input[type="date"]');
      var send = composer.querySelector('[data-send]');
      var form = composer.querySelector('form');
      var gmail = composer.querySelector('[data-gmail]');

      var update = function () {
        var subject = 'Shootaanvraag: ' + what.value;
        var line = 'Hallo,\n\nIk zoek een fotograaf voor ' + what.value.toLowerCase();
        if (when.value) {
          var date = new Date(when.value + 'T12:00:00');
          line += ' rond ' + date.toLocaleDateString('nl-BE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
        }
        line += '.\n\nOver het idee:\n\n';
        send.href = 'mailto:dorpelstudio@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(line);
        // the same mail, written in Gmail in the browser, for visitors without a mail app
        if (gmail) gmail.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=dorpelstudio@gmail.com&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(line);
      };

      what.addEventListener('change', update);
      when.addEventListener('change', update);
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = send.href;
      });

      document.querySelectorAll('[data-pick]').forEach(function (link) {
        link.addEventListener('click', function () {
          what.value = link.dataset.pick;
          update();
        });
      });

      update();
    }

    /* --- Home: already on the homepage, jump straight to the top -------- */

    if (document.body.classList.contains('home')) {
      document.querySelectorAll('[data-home]').forEach(function (link) {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'instant' });
          request();
        });
      });
    }

    /* --- Footer year ----------------------------------------------------- */

    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  });
})();
