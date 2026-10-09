import { useId, type CSSProperties } from 'react'

export type AccordionImage = {
  src: string
  alt: string
}

export type AccordionItem = {
  id?: string
  caption?: string
  title: string
  description: string
  color?: string
  images: AccordionImage[]
}

type AccordionProps = {
  items: AccordionItem[]
  defaultIndex?: number
  openOnHover?: boolean
  hoverDelay?: number
  onChange?: (index: number) => void
  className?: string
}

const hoverScript = `
(function () {
  if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  var roots = document.querySelectorAll('[data-acc-hover]:not([data-acc-bound])');
  for (var r = 0; r < roots.length; r++) {
    (function (root) {
      root.setAttribute('data-acc-bound', 'true');
      var delay = parseInt(root.getAttribute('data-acc-hover-delay'), 10) || 0;
      var tabs = root.querySelectorAll('.acc__tab');
      for (var i = 0; i < tabs.length; i++) {
        (function (tab) {
          var timer = 0;
          tab.addEventListener('mouseenter', function () {
            var input = document.getElementById(tab.getAttribute('for'));
            if (!input || input.checked) return;
            window.clearTimeout(timer);
            timer = window.setTimeout(function () { input.click(); }, delay);
          });
          tab.addEventListener('mouseleave', function () { window.clearTimeout(timer); });
        })(tabs[i]);
      }
    })(roots[r]);
  }
})();
`

export default function Accordion({
  items,
  defaultIndex = 0,
  openOnHover = true,
  hoverDelay = 80,
  onChange,
  className = '',
}: AccordionProps) {
  const uid = useId()

  return (
    <>
      <div
        className={`acc ${className}`}
        role="radiogroup"
        {...(openOnHover ? { 'data-acc-hover': 'true', 'data-acc-hover-delay': hoverDelay } : {})}
      >
        {items.map((item, i) => {
          const half = Math.ceil(item.images.length / 2)
          const columns = [item.images.slice(0, half), item.images.slice(half)]
          const inputId = `${uid}-tab-${i}`

          return (
            <section
              key={item.id ?? i}
              className="acc__panel"
              style={item.color ? ({ '--accent': item.color } as CSSProperties) : undefined}
            >
              <input
                type="radio"
                name={`${uid}-acc`}
                id={inputId}
                className="acc__radio"
                defaultChecked={i === defaultIndex}
                onChange={() => onChange?.(i)}
              />

              {/* The tab is always visible, open or closed */}
              <label htmlFor={inputId} className="acc__tab">
                {item.caption && <span className="acc__caption">{item.caption}</span>}
                <span className="acc__label">{item.title}</span>
              </label>

              {/* Expanding area sits next to the tab */}
              <div className="acc__content">
                <div className="acc__inner">
                  <h2 className="acc__title">{item.title}</h2>
                  <p className="acc__description">{item.description}</p>

                  <div className="acc__gallery">
                    {columns.map((col, c) => (
                      <div key={c} className={`acc__col${c === 1 ? ' acc__col--flip' : ''}`}>
                        {col.map((img) => (
                          <figure key={img.src} className="acc__img">
                            <img src={img.src} alt={img.alt} decoding="async" />
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>
      {openOnHover && <script dangerouslySetInnerHTML={{ __html: hoverScript }} />}
    </>
  )
}
