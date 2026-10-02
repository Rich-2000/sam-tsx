import type { ReactNode } from 'react'

/** lucide-react ArrowRight, inlined so the static pages need no icon package */
export function ArrowRightIcon({ className }: { className: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  )
}

/**
 * Inner layers for the arrow-fill hover: on hover the arrow circle on the right
 * grows to fill the element, the label changes colour as the fill passes over it
 * and the arrow slides through. Put it inside an element with the `arrow-fill`
 * class; the effect is pure CSS (see .arrow-fill in maddy-theme.css) since these
 * pages ship no client React.
 */
export function ArrowFillContent({ label }: { label: ReactNode }) {
  return (
    <>
      <span className="arrow-fill__label">{label}</span>
      <span className="arrow-fill__fill" aria-hidden="true"></span>
      <span className="arrow-fill__label arrow-fill__label--filled" aria-hidden="true">{label}</span>
      <span className="arrow-fill__icon" aria-hidden="true">
        <ArrowRightIcon className="arrow-fill__arrow arrow-fill__arrow--in"/>
        <ArrowRightIcon className="arrow-fill__arrow arrow-fill__arrow--out"/>
      </span>
    </>
  )
}
