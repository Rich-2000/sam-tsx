// Leadership profile pop-up on the About page: open from a card, move between profiles, close.
;(function () {
  var modal = document.querySelector('[data-leader-modal]')
  if (!modal) return

  var slides = Array.prototype.slice.call(modal.querySelectorAll('[data-leader-slide]'))
  var dots = Array.prototype.slice.call(modal.querySelectorAll('[data-leader-dot]'))
  var closeButton = modal.querySelector('[data-leader-close]')
  var current = 0
  var lastTrigger = null

  function show(index) {
    current = (index + slides.length) % slides.length
    slides.forEach(function (slide, i) {
      slide.hidden = i !== current
    })
    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === current)
      dot.setAttribute('aria-current', i === current ? 'true' : 'false')
    })
    var card = slides[current].querySelector('.leader-slide__card')
    if (card) card.scrollTop = 0
    modal.scrollTop = 0
  }

  function open(index, trigger) {
    lastTrigger = trigger
    show(index)
    modal.hidden = false
    document.documentElement.classList.add('leader-modal-open')
    closeButton.focus()
  }

  function close() {
    modal.hidden = true
    document.documentElement.classList.remove('leader-modal-open')
    if (lastTrigger) lastTrigger.focus()
  }

  document.addEventListener('click', function (event) {
    var trigger = event.target.closest('[data-leader-open]')
    if (!trigger) return
    event.preventDefault()
    open(Number(trigger.getAttribute('data-leader-open')), trigger)
  })

  modal.addEventListener('click', function (event) {
    var target = event.target
    var dot = target.closest('[data-leader-dot]')
    if (dot) return show(Number(dot.getAttribute('data-leader-dot')))
    if (target.closest('[data-leader-prev]')) return show(current - 1)
    if (target.closest('[data-leader-next]')) return show(current + 1)
    if (target.closest('[data-leader-close]')) return close()
    // A click on the dimmed area around the photo and card closes the pop-up.
    if (!target.closest('.leader-slide__photo, .leader-slide__card, .leader-modal__nav')) close()
  })

  document.addEventListener('keydown', function (event) {
    if (modal.hidden) return
    if (event.key === 'Escape') return close()
    if (event.key === 'ArrowLeft') return show(current - 1)
    if (event.key === 'ArrowRight') return show(current + 1)
    if (event.key !== 'Tab') return
    // Keep keyboard focus inside the pop-up while it is open.
    var focusable = Array.prototype.filter.call(
      modal.querySelectorAll('a[href], button'),
      function (element) {
        return element.offsetParent !== null
      },
    )
    var first = focusable[0]
    var last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  })
})()
