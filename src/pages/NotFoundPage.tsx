const css = `
:root { color-scheme: dark; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }

.nf-main {
  position: relative;
  min-height: 100svh;
  background: #000;
  overflow-x: hidden;
  font-family: 'PP Mori', 'Helvetica Neue', Arial, sans-serif;
  color: #fff;
}

/* Background video: lowest layer, no overlay/tint of any kind */
.nf-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  background: #000;
}

/* Brand logo, centered at the top */
.nf-logo {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: block;
  line-height: 0;
}
.nf-logo img {
  display: block;
  height: 40px;
  width: auto;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.45));
}

/* Centered content group */
.nf-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 483px;
  max-width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
}

/* Large 404 with a top-light text gradient */
.nf-404 {
  margin: 0;
  padding-bottom: 0.05em;
  font-weight: 600;
  font-variation-settings: "wght" 600;
  font-size: clamp(92px, 15vw, 188px);
  line-height: 1;
  letter-spacing: -0.06em;
  /* Maddy-blue gradient fill — complementary to the orange sunset, so it reads
     strongly. A white outline keeps it legible over the video's darker areas. */
  background: linear-gradient(
    247.3282658084845deg,
    #7a80ea 2.5334%,
    #232a8c 93.612%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: #3a40b0; /* fallback if background-clip: text is unsupported */
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2.5px #ffffff;
  paint-order: stroke fill;
  text-shadow:
    0 3px 16px rgba(0, 0, 0, 0.28),
    0 0 3px rgba(255, 255, 255, 0.35);
}

/* Thin divider with a subtle centre dot (as in the reference) */
.nf-divider {
  position: relative;
  width: 425px;
  max-width: 100%;
  height: 1px;
  background: #fff;
  border: 0;
}
.nf-divider::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #fff;
  transform: translate(-50%, -50%);
}

.nf-msg {
  margin: 0;
  max-width: 36ch;
  min-height: 2.8em;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Localized navy chip so white body text always has a dark surface behind it */
  padding: 9px 18px;
  border-radius: 14px;
  background: rgba(1, 5, 53, 0.24);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  font-weight: 600;
  font-variation-settings: "wght" 600;
  font-size: 17px;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: #fff;
  text-shadow: 0 1px 3px rgba(1, 5, 53, 0.7);
}

/* Typewriter caret while the message is being typed out */
.nf-msg.is-typing::after {
  content: "";
  display: inline-block;
  width: 0.55ch;
  height: 1.05em;
  margin-left: 2px;
  vertical-align: -0.15em;
  background: #fff;
  animation: nf-caret 0.9s steps(1) infinite;
}

@keyframes nf-caret {
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
}

/* Actions: primary Home + ghost Go Back */
.nf-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}
.nf-btn {
  display: inline-flex;
  align-items: center;
  gap: 0;
  height: 44px;
  padding: 0 22px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-family: inherit;
  font-weight: 600;
  font-variation-settings: "wght" 600;
  font-size: 15px;
  letter-spacing: -0.01em;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.nf-btn--primary {
  background: #fff;
  color: #000;
  border-color: #fff;
}
.nf-btn--primary:hover,
.nf-btn--primary:focus-visible {
  background: rgba(255, 255, 255, 0.85);
  outline: none;
}
.nf-btn--ghost {
  /* Same background treatment as the message chip */
  background: rgba(1, 5, 53, 0.24);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  color: #fff;
  text-shadow: 0 1px 3px rgba(1, 5, 53, 0.55);
}
.nf-btn--ghost:hover,
.nf-btn--ghost:focus-visible {
  background: rgba(1, 5, 53, 0.36);
  border-color: #fff;
  outline: none;
}
.nf-arrow {
  width: 16px;
  height: 16px;
  flex: none;
}
/* Go Back: arrow stays collapsed (button sized like Home), then expands in
   beside the text on hover/focus. */
.nf-btn--ghost .nf-arrow {
  max-width: 0;
  margin-right: 0;
  opacity: 0;
  overflow: hidden;
  transform: translateX(4px);
  transition:
    max-width 0.28s ease,
    opacity 0.22s ease,
    margin-right 0.28s ease,
    transform 0.28s ease;
}
.nf-btn--ghost:hover .nf-arrow,
.nf-btn--ghost:focus-visible .nf-arrow {
  max-width: 16px;
  margin-right: 6px;
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 640px) {
  .nf-logo { top: 32px; }
  .nf-logo img { height: 30px; } /* 75% of desktop */
  .nf-content {
    width: min(100% - 40px, 360px);
    gap: 20px;
  }
  .nf-404 {
    height: auto;
    min-height: 0;
    font-size: clamp(104px, 40vw, 160px);
    letter-spacing: -0.07em;
    padding-bottom: 0.04em;
  }
  .nf-divider { width: 100%; }
  .nf-msg {
    font-size: clamp(15px, 4vw, 17px);
    letter-spacing: -0.02em;
  }
  .nf-actions { gap: 10px; }
  .nf-btn { height: 42px; padding: 0 18px; font-size: 14px; }
}
`

const pageScript = `
(function () {
  var b = document.getElementById('nf-back');
  if (b) {
    b.addEventListener('click', function () {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = '/';
      }
    });
  }

  // Typewriter for the message. The full text is rendered server-side (so it
  // shows with no JS / for crawlers); we clear it and type it back out.
  var msg = document.getElementById('nf-msg');
  if (!msg) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var full = (msg.textContent || '').trim();
  if (reduce || !full) return;
  msg.textContent = '';
  msg.classList.add('is-typing');
  var i = 0;
  function tick() {
    msg.textContent = full.slice(0, i);
    if (i < full.length) {
      i++;
      window.setTimeout(tick, 34);
    } else {
      msg.classList.remove('is-typing');
    }
  }
  window.setTimeout(tick, 250);
})();
`

function ArrowLeft() {
  return (
    <svg className="nf-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function NotFoundDocument() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <title>{"404 — Page not found | Maddy Group Ltd"}</title>
        <link rel="icon" href="/images/maddy-logo-icon.jpg" type="image/jpeg" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              `@font-face{font-family:'PP Mori';font-style:normal;font-weight:400 700;font-display:swap;` +
              `src:url('/vendor/fonts/6627b50ad2ace3686c70ddf8_PPMori-Variable-482ff0665d.ttf') format('truetype');}` +
              css,
          }}
        />
      </head>
      <body>
        <main className="nf-main">
          <video
            className="nf-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            {/* Drop an optimised 720p source above the full-size one when you have it:
                <source src="/images/error404-720.webm" type="video/webm" />
                <source src="/images/error404-720.mp4" type="video/mp4" /> */}
            <source src="/images/error404.mp4" type="video/mp4" />
          </video>

          <a className="nf-logo" href="/" aria-label="Maddy Group — back to home">
            <img src="/images/maddy-group-horizontal-white.png" alt="Maddy Group" width={200} height={40} />
          </a>

          <div className="nf-content">
            <h1 className="nf-404">{"404"}</h1>
            <hr className="nf-divider" aria-hidden="true" />
            <p className="nf-msg" id="nf-msg">
              {"Somewhere across the Ghanaian savannah, you wandered off the map."}
            </p>
            <div className="nf-actions">
              <button id="nf-back" type="button" className="nf-btn nf-btn--ghost">
                <ArrowLeft />
                {"Go Back"}
              </button>
              <a href="/" className="nf-btn nf-btn--primary">
                {"Home"}
              </a>
            </div>
          </div>
        </main>
        <script dangerouslySetInnerHTML={{ __html: pageScript }} />
      </body>
    </html>
  )
}
