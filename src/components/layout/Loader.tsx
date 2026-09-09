export function Loader() {
  return (
    <div className="maddy-loader" id="maddy-loader" aria-hidden="true" aria-busy="true">
      <img
        className="maddy-loader__logo"
        src="/images/maddy_group_animated_fixed.svg"
        width={240}
        height={57}
        alt="Maddy Group"
      />
    </div>
  )
}

export function LoaderRuntime() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function () {
  var loader = document.getElementById('maddy-loader');
  if (!loader) return;

  var minVisibleMs = 1800;
  var maxWaitMs = 2600;
  var startedAt = Date.now();
  var finished = false;

  function criticalImages() {
    var nodes = document.querySelectorAll(
      '.logo-img, .hero-media__image, .maddy-loader__logo'
    );
    return Array.prototype.slice.call(nodes);
  }

  function whenImageReady(img) {
    if (img.complete) {
      return Promise.resolve();
    }
    return new Promise(function (resolve) {
      var done = function () {
        img.removeEventListener('load', done);
        img.removeEventListener('error', done);
        resolve();
      };
      img.addEventListener('load', done);
      img.addEventListener('error', done);
    });
  }

  function waitForCritical() {
    var images = criticalImages().map(whenImageReady);
    var timeout = new Promise(function (resolve) {
      window.setTimeout(resolve, maxWaitMs);
    });
    return Promise.race([Promise.all(images), timeout]);
  }

  function hideLoader() {
    if (finished) return;
    finished = true;
    document.documentElement.classList.remove('is-page-loading');
    var node = document.getElementById('maddy-loader') || loader;
    if (!node) return;
    node.classList.add('is-done');
    node.setAttribute('aria-busy', 'false');
    node.style.pointerEvents = 'none';
    window.setTimeout(function () {
      if (node && node.parentNode) node.parentNode.removeChild(node);
    }, 420);
  }

  function finishWhenReady() {
    var elapsed = Date.now() - startedAt;
    var remaining = Math.max(0, minVisibleMs - elapsed);
    window.setTimeout(hideLoader, remaining);
  }

  waitForCritical().then(finishWhenReady);

  document.addEventListener(
    'click',
    function (event) {
      var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
      if (!link) return;
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.target && link.target !== '_self') return;

      var href = link.getAttribute('href');
      if (!href || href.charAt(0) === '#' || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) {
        return;
      }

      var url;
      try {
        url = new URL(href, window.location.href);
      } catch (error) {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) {
        return;
      }

      document.documentElement.classList.add('is-page-loading');
      if (!document.getElementById('maddy-loader')) {
        var clone = loader.cloneNode(true);
        clone.classList.remove('is-done');
        clone.id = 'maddy-loader';
        clone.setAttribute('aria-busy', 'true');
        document.body.insertBefore(clone, document.body.firstChild);
      } else {
        loader.classList.remove('is-done');
        loader.style.display = '';
      }
    },
    true
  );

  window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
      document.documentElement.classList.remove('is-page-loading');
      var existing = document.getElementById('maddy-loader');
      if (existing) existing.classList.add('is-done');
    }
  });
})();

// Scroll-reactive hero: full-bleed at the top, settles into a rounded inset
// card as you scroll. Drives --hero-inset (0 -> 1) via a smoothstep, per frame.
(function () {
  var heroes = document.querySelectorAll(
    '.section.is-hero-section, .section.is-why-flow-hero, ' +
      '.section.is-products-hero, .section.is-why-about-hero'
  );
  if (!heroes.length) return;

  var reduce =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    for (var i = 0; i < heroes.length; i++) {
      heroes[i].style.setProperty('--hero-inset', '1');
    }
    return;
  }

  var RANGE = 260; // px of scroll to fully settle into the card
  var ticking = false;
  var last = -1;

  function update() {
    ticking = false;
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    var p = Math.min(1, Math.max(0, y / RANGE));
    var e = p * p * (3 - 2 * p); // smoothstep
    if (e === last) return;
    last = e;
    for (var i = 0; i < heroes.length; i++) {
      heroes[i].style.setProperty('--hero-inset', e.toFixed(4));
    }
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
})();
`,
      }}
    />
  )
}
