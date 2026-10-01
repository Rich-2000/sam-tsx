type Product = {
  name: string
  label: string
  image: string
  imageAlt: string
  color: string
}

// Descriptors and the BeaconOS screenshot come from the products and appetite
// page; the other three reuse photographs already in the brand library.
const products: Product[] = [
  {
    name: 'Maddy Memo',
    label: 'Internal communications',
    image: '/images/brand/software-collaboration-mizuno-k-12899191.jpg',
    imageAlt: 'Colleagues working together on a shared document',
    color: '#131116',
  },
  {
    name: 'Maddy Security Ops',
    label: 'Investigation and OSINT',
    image: '/images/brand/security-analyst-kampus-8204353.jpg',
    imageAlt: 'An analyst reviewing security data on screen',
    color: '#26222e',
  },
  {
    name: 'MaddyOps',
    label: 'Industrial operations',
    image: '/images/brand/industrial-automation-freek-wolsink-34222005.jpg',
    imageAlt: 'Automated industrial equipment on a production line',
    color: '#393442',
  },
  {
    name: 'BeaconOS',
    label: 'HR platform',
    image: '/images/beacon-os.png',
    imageAlt: 'The BeaconOS dashboard',
    color: '#f6f5f7',
  },
]

// The gallery is a flat list so a product can contribute more than one picture
// later without changing the rows above. A row opens the first entry that
// names it.
type Shot = {
  product: string
  title: string
  desc: string
  url: string
}

const shots: Shot[] = products.map((product) => ({
  product: product.name,
  title: product.name,
  desc: product.label,
  url: product.image,
}))

const rowShotIndex = (name: string) =>
  shots.findIndex((shot) => shot.product === name)

// The dialog renders the first shot server side so it is never empty before
// the script runs. Indexed access is checked, hence the fallback.
const firstShot: Shot = shots[0] ?? {
  product: '',
  title: '',
  desc: '',
  url: '',
}

// Hover: the panel and the badge trail the pointer on their own easing, the
// way gsap.quickTo does in the original. Because the panel lags behind the
// pointer, the gap between the two drives the tilt, so the picture leans into
// the direction of travel and springs level once it catches up.
const hoverBehavior = `
(function () {
  var root = document.querySelector('[data-product-showcase]');
  if (!root) return;
  if (!window.matchMedia || !window.matchMedia('(hover: hover)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var panel = root.querySelector('[data-product-panel]');
  var tilt = root.querySelector('[data-product-tilt]');
  var stack = root.querySelector('[data-product-stack]');
  var badge = root.querySelector('[data-product-badge]');
  var rows = root.querySelectorAll('[data-product-row]');
  if (!panel || !tilt || !stack || !badge || !rows.length) return;

  var ROTATION = 6;
  var STIFFNESS = 26.7;
  var DAMPING = 4.1;
  var MASS = 0.2;
  var STEP = 1 / 60;

  var layers = [
    { node: panel, ease: 0.11, x: 0, y: 0 },
    { node: badge, ease: 0.17, x: 0, y: 0 }
  ];
  var rot = { x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0 };
  var targetX = 0;
  var targetY = 0;
  var running = false;
  var placed = false;

  function spring(value, velocity, target) {
    var accel = (-STIFFNESS * (value - target) - DAMPING * velocity) / MASS;
    return velocity + accel * STEP;
  }

  function clampHalf(value) {
    return value < -0.5 ? -0.5 : value > 0.5 ? 0.5 : value;
  }

  function frame() {
    var moving = false;

    for (var i = 0; i < layers.length; i++) {
      var layer = layers[i];
      layer.x += (targetX - layer.x) * layer.ease;
      layer.y += (targetY - layer.y) * layer.ease;
      if (Math.abs(targetX - layer.x) > 0.5 || Math.abs(targetY - layer.y) > 0.5) {
        moving = true;
      }
      layer.node.style.transform =
        'translate3d(' + layer.x + 'px, ' + layer.y + 'px, 0) translate(-50%, -50%)';
    }

    var rect = panel.getBoundingClientRect();
    if (rect.width && rect.height) {
      rot.tx = clampHalf((targetX - layers[0].x) / rect.width);
      rot.ty = clampHalf((targetY - layers[0].y) / rect.height);
    }

    rot.vx = spring(rot.x, rot.vx, rot.tx);
    rot.vy = spring(rot.y, rot.vy, rot.ty);
    rot.x += rot.vx * STEP;
    rot.y += rot.vy * STEP;

    if (Math.abs(rot.vx) > 0.001 || Math.abs(rot.vy) > 0.001) moving = true;

    tilt.style.transform =
      'perspective(1000px) rotateX(' + (-rot.y * 2 * ROTATION).toFixed(3) +
      'deg) rotateY(' + (rot.x * 2 * ROTATION).toFixed(3) + 'deg)';

    if (moving) {
      window.requestAnimationFrame(frame);
    } else {
      running = false;
    }
  }

  function start() {
    if (!running) {
      running = true;
      window.requestAnimationFrame(frame);
    }
  }

  window.addEventListener('mousemove', function (event) {
    targetX = event.clientX;
    targetY = event.clientY;
    if (!placed) {
      placed = true;
      for (var i = 0; i < layers.length; i++) {
        layers[i].x = targetX;
        layers[i].y = targetY;
      }
    }
    start();
  }, { passive: true });

  for (var i = 0; i < rows.length; i++) {
    (function (row, index) {
      row.addEventListener('mouseenter', function () {
        stack.style.transform = 'translateY(' + index * -100 + '%)';
        root.setAttribute('data-active', 'true');
        start();
      });
      row.addEventListener('mouseleave', function () {
        root.removeAttribute('data-active');
      });
    })(rows[i], i);
  }
})();
`

// Click: the picture opens in a dialog with a dock of every shot along the
// bottom. The dock can be dragged out of the way. Escape, focus trapping and
// the backdrop come from the dialog element itself.
const galleryBehavior = `
(function () {
  var dialog = document.getElementById('product-gallery');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  var frame = dialog.querySelector('[data-pg-frame]');
  var image = dialog.querySelector('[data-pg-image]');
  var title = dialog.querySelector('[data-pg-title]');
  var desc = dialog.querySelector('[data-pg-desc]');
  var dock = dialog.querySelector('[data-pg-dock]');
  var thumbs = dialog.querySelectorAll('[data-pg-index]');
  var shots = [];
  try {
    shots = JSON.parse(dialog.getAttribute('data-pg-shots'));
  } catch (error) {
    return;
  }
  var current = -1;

  function show(index) {
    if (index < 0 || index >= shots.length || index === current) return;
    current = index;
    var shot = shots[index];
    image.setAttribute('src', shot.url);
    image.setAttribute('alt', shot.title);
    title.textContent = shot.title;
    desc.textContent = shot.desc;
    for (var i = 0; i < thumbs.length; i++) {
      if (i === index) {
        thumbs[i].setAttribute('data-pg-current', 'true');
      } else {
        thumbs[i].removeAttribute('data-pg-current');
      }
    }
    // Restart the entrance animation on every change of picture.
    frame.classList.remove('is-entering');
    void frame.offsetWidth;
    frame.classList.add('is-entering');
  }

  function open(index) {
    show(index);
    if (!dialog.open) dialog.showModal();
  }

  var triggers = document.querySelectorAll('[data-gallery-index]');
  for (var t = 0; t < triggers.length; t++) {
    (function (trigger) {
      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        open(parseInt(trigger.getAttribute('data-gallery-index'), 10));
      });
    })(triggers[t]);
  }

  for (var k = 0; k < thumbs.length; k++) {
    (function (thumb) {
      thumb.addEventListener('click', function (event) {
        event.stopPropagation();
        show(parseInt(thumb.getAttribute('data-pg-index'), 10));
      });
    })(thumbs[k]);
  }

  // Clicking the empty stage around the picture dismisses the gallery, the way
  // a backdrop click would. The stage fills the dialog, so testing for the
  // dialog itself would only catch clicks on the very edge of the viewport.
  // The picture itself is not a dismiss target: it is the thing being looked
  // at, so a click on it must not throw the viewer out.
  dialog.addEventListener('click', function (event) {
    var node = event.target;
    if (node && node.closest && (
      node.closest('[data-pg-frame]') ||
      node.closest('[data-pg-dock]') ||
      node.closest('form')
    )) {
      return;
    }
    dialog.close();
  });

  dialog.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      show((current + 1) % shots.length);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      show((current - 1 + shots.length) % shots.length);
    }
  });

  // Drag the dock anywhere in the dialog.
  var offsetX = 0;
  var offsetY = 0;
  var startX = 0;
  var startY = 0;
  var dragging = false;

  dock.addEventListener('pointerdown', function (event) {
    if (event.target.closest('[data-pg-index]')) return;
    dragging = true;
    startX = event.clientX - offsetX;
    startY = event.clientY - offsetY;
    dock.setPointerCapture(event.pointerId);
    dock.setAttribute('data-pg-dragging', 'true');
  });

  dock.addEventListener('pointermove', function (event) {
    if (!dragging) return;
    offsetX = event.clientX - startX;
    offsetY = event.clientY - startY;
    dock.style.transform =
      'translate(calc(-50% + ' + offsetX + 'px), ' + offsetY + 'px)';
  });

  function endDrag(event) {
    if (!dragging) return;
    dragging = false;
    dock.releasePointerCapture(event.pointerId);
    dock.removeAttribute('data-pg-dragging');
  }

  dock.addEventListener('pointerup', endDrag);
  dock.addEventListener('pointercancel', endDrag);
})();
`

export function ProductsHighlightSection() {
  return (
    <section className="section is-investors-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="product-showcase__head">
          <h2 className="is-space-24">
            {"Software "}
            <br />
            {"products"}
          </h2>
          <p className="is-font-size-body-m is-color-grey-600 product-showcase__intro">
            {"Our own platforms sit alongside custom build work. Ask for a demo or quote for any product below."}
          </p>
        </div>

        <div className="product-showcase" data-product-showcase="true">
          <div className="product-showcase__rows">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.image}
                className="product-row"
                data-product-row="true"
                data-gallery-index={rowShotIndex(product.name)}
                data-no-page-transition="true"
                aria-label={`${product.name}. View the picture`}
              >
                <span className="product-row__name">{product.name}</span>
                <span className="product-row__label is-font-size-body-m">
                  {product.label}
                </span>
              </a>
            ))}
          </div>

          <div
            className="product-showcase__panel"
            data-product-panel="true"
            aria-hidden="true"
          >
            <div className="product-showcase__tilt" data-product-tilt="true">
              <div className="product-showcase__stack" data-product-stack="true">
                {products.map((product) => (
                  <div
                    key={product.name}
                    className="product-showcase__slide"
                    style={{ backgroundColor: product.color }}
                  >
                    <img src={product.image} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="product-showcase__badge"
            data-product-badge="true"
            aria-hidden="true"
          >
            {"View"}
          </div>
        </div>

        <div className="is-text-center" style={{ marginTop: '3rem' }}>
          <a href="/software-products" className="button w-inline-block">
            <p>{"Explore software products"}</p>
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"
              alt=""
              className="button-arrow"
            />
          </a>
        </div>
      </div>

      <dialog
        id="product-gallery"
        className="pg"
        aria-label="Software product pictures"
        data-pg-shots={JSON.stringify(shots)}
      >
        <form method="dialog">
          <button className="pg__close" aria-label="Close">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </form>

        <div className="pg__stage">
          <figure className="pg__frame is-entering" data-pg-frame="true">
            <img
              className="pg__image"
              data-pg-image="true"
              src={firstShot.url}
              alt={firstShot.title}
            />
            <figcaption className="pg__caption">
              <h3 className="pg__title" data-pg-title="true">
                {firstShot.title}
              </h3>
              <p className="pg__desc" data-pg-desc="true">
                {firstShot.desc}
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="pg__dock" data-pg-dock="true">
          <div className="pg__dock-inner">
            {shots.map((shot, index) => (
              <button
                key={shot.url}
                type="button"
                className="pg__thumb"
                data-pg-index={index}
                aria-label={shot.title}
              >
                <img src={shot.url} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </dialog>

      <script dangerouslySetInnerHTML={{ __html: hoverBehavior }} />
      <script dangerouslySetInnerHTML={{ __html: galleryBehavior }} />
    </section>
  )
}
