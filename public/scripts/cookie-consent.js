// Cookie choice banner. Nothing optional runs until the visitor allows it.
//
// To add an optional script later, load it only when its category is allowed:
//   document.addEventListener('maddy:consent', function (event) {
//     if (event.detail.analytics) { /* load the analytics script here */ }
//   })
// window.maddyConsent holds the same { decided, analytics, marketing } value,
// and Google's consent mode signals are kept in step for Google tags.
;(function () {
  var banner = document.querySelector('[data-cookie-banner]')
  if (!banner) return

  var KEY = 'maddy-cookie-consent'
  // Ask again after six months, as EU regulators recommend.
  var MAX_AGE = 180 * 24 * 60 * 60 * 1000
  var options = banner.querySelector('[data-cookie-options]')
  var manage = banner.querySelector('[data-cookie-manage]')
  var switches = {
    analytics: banner.querySelector('[data-cookie-category="analytics"]'),
    marketing: banner.querySelector('[data-cookie-category="marketing"]'),
  }

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  function signals(choice) {
    var ads = choice.marketing ? 'granted' : 'denied'
    return {
      analytics_storage: choice.analytics ? 'granted' : 'denied',
      ad_storage: ads,
      ad_user_data: ads,
      ad_personalization: ads,
    }
  }

  function stored() {
    try {
      var choice = JSON.parse(window.localStorage.getItem(KEY))
      if (!choice || typeof choice.analytics !== 'boolean') return null
      if (Date.now() - choice.at > MAX_AGE) return null
      return { analytics: choice.analytics, marketing: choice.marketing === true, at: choice.at }
    } catch {
      return null
    }
  }

  function publish(choice) {
    window.maddyConsent = {
      decided: Boolean(choice),
      analytics: Boolean(choice && choice.analytics),
      marketing: Boolean(choice && choice.marketing),
    }
    if (choice) gtag('consent', 'update', signals(choice))
    document.dispatchEvent(new CustomEvent('maddy:consent', { detail: window.maddyConsent }))
  }

  function choose(analytics, marketing) {
    var choice = { analytics: analytics, marketing: marketing, at: Date.now() }
    try {
      window.localStorage.setItem(KEY, JSON.stringify(choice))
    } catch {
      // Storage is unavailable (private mode); the choice lasts for this page only.
    }
    banner.hidden = true
    publish(choice)
  }

  function showOptions(open) {
    options.hidden = !open
    manage.setAttribute('aria-expanded', String(open))
    banner.classList.toggle('is-managing', open)
  }

  function show(withOptions) {
    var choice = stored()
    switches.analytics.checked = Boolean(choice && choice.analytics)
    switches.marketing.checked = Boolean(choice && choice.marketing)
    showOptions(withOptions)
    banner.hidden = false
  }

  gtag('consent', 'default', signals({}))
  var existing = stored()
  publish(existing)
  if (!existing) show(false)

  banner.addEventListener('click', function (event) {
    var target = event.target
    if (target.closest('[data-cookie-accept]')) choose(true, true)
    else if (target.closest('[data-cookie-reject]')) choose(false, false)
    else if (target.closest('[data-cookie-save]')) {
      choose(switches.analytics.checked, switches.marketing.checked)
    } else if (target.closest('[data-cookie-manage]')) showOptions(options.hidden)
  })

  // The footer's "Cookies" link reopens the banner so the choice can be changed.
  document.addEventListener('click', function (event) {
    if (!event.target.closest('[data-cookie-settings]')) return
    event.preventDefault()
    show(true)
    banner.focus()
  })
})()
