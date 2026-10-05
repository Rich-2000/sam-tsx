// Cookie choice banner. Nothing optional runs until the visitor accepts.
//
// To add analytics later, load it only when consent allows it:
//   document.addEventListener('maddy:consent', function (event) {
//     if (event.detail.analytics) { /* load the analytics script here */ }
//   })
// window.maddyConsent holds the same { decided, analytics } value, and Google's
// consent mode signals are kept in step for Google tags.
;(function () {
  var banner = document.querySelector('[data-cookie-banner]')
  if (!banner) return

  var KEY = 'maddy-cookie-consent'
  // Ask again after six months, as EU regulators recommend.
  var MAX_AGE = 180 * 24 * 60 * 60 * 1000

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  function signals(analytics) {
    return {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    }
  }

  function stored() {
    try {
      var choice = JSON.parse(window.localStorage.getItem(KEY))
      if (!choice || typeof choice.analytics !== 'boolean') return null
      return Date.now() - choice.at > MAX_AGE ? null : choice
    } catch {
      return null
    }
  }

  function publish(choice) {
    window.maddyConsent = {
      decided: Boolean(choice),
      analytics: Boolean(choice && choice.analytics),
    }
    if (choice) gtag('consent', 'update', signals(choice.analytics))
    document.dispatchEvent(new CustomEvent('maddy:consent', { detail: window.maddyConsent }))
  }

  function choose(analytics) {
    var choice = { analytics: analytics, at: Date.now() }
    try {
      window.localStorage.setItem(KEY, JSON.stringify(choice))
    } catch {
      // Storage is unavailable (private mode); the choice lasts for this page only.
    }
    banner.hidden = true
    publish(choice)
  }

  gtag('consent', 'default', signals(false))
  var existing = stored()
  publish(existing)
  if (!existing) banner.hidden = false

  banner.addEventListener('click', function (event) {
    if (event.target.closest('[data-cookie-accept]')) choose(true)
    else if (event.target.closest('[data-cookie-reject]')) choose(false)
  })

  // The footer's "Cookies" link reopens the banner so the choice can be changed.
  document.addEventListener('click', function (event) {
    if (!event.target.closest('[data-cookie-settings]')) return
    event.preventDefault()
    banner.hidden = false
    banner.focus()
  })
})()
