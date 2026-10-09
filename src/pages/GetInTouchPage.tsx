import { Footer } from '../components/layout/Footer.js'
import { SiteDocument } from '../components/layout/SiteDocument.js'
import { SiteIcons } from '../components/layout/SiteIcons.js'
import { sitePageCode } from '../content/sitePageCode.js'

function PageHead() {
  return (
    <>
      <meta charSet={'utf-8'} />
      <link
        href={'https://assets-global.website-files.com'}
        rel={'preconnect'}
        crossOrigin={'anonymous'}
      />
      <title>{'Contact Maddy Group Ltd | Accra, Ghana'}</title>
      <meta
        content={
          'Contact Maddy Group Ltd in Accra for cybersecurity, software development and technology services. Call 0551111551 or email info@maddygroupltd.com.'
        }
        name={'description'}
      />
      <meta content={'Contact Maddy Group Ltd | Accra, Ghana'} property={'og:title'} />
      <meta
        content={
          'Contact Maddy Group Ltd in Accra for cybersecurity, software development and technology services. Call 0551111551 or email info@maddygroupltd.com.'
        }
        property={'og:description'}
      />
      <meta content={'Contact Maddy Group Ltd | Accra, Ghana'} name={'twitter:title'} />
      <meta
        content={
          'Contact Maddy Group Ltd in Accra for cybersecurity, software development and technology services. Call 0551111551 or email info@maddygroupltd.com.'
        }
        name={'twitter:description'}
      />
      <meta property={'og:type'} content={'website'} />
      <meta content={'summary_large_image'} name={'twitter:card'} />
      <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
      <link href={'/styles/webflow.css'} rel={'stylesheet'} type={'text/css'} />
      <link href={'/styles/maddy-theme.css'} rel={'stylesheet'} type={'text/css'} />
      <style dangerouslySetInnerHTML={{ __html: sitePageCode.getInTouch[0] }} />
      <script
        type={'text/javascript'}
        dangerouslySetInnerHTML={{ __html: sitePageCode.getInTouch[1] }}
      />
      <SiteIcons />
    </>
  )
}

function GetInTouchContent() {
  return (
    <div>
      <div className={'page-wrapper dark-wrapper is-overflow-hidden'}>
        <section className={'section is-get-in-touch-section is-contact-hero'}>
          <div className={'hero-media'} aria-hidden={'true'}>
            <video
              className={'hero-media__video'}
              poster={'/images/brand/contact-bg-poster.jpg'}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={'/images/brand/contact-bg.webm'} type={'video/webm'} />
              <source src={'/images/brand/contact-bg.mp4'} type={'video/mp4'} />
            </video>
            <video
              className={'hero-media__video-whole'}
              aria-hidden={'true'}
              tabIndex={-1}
              muted
              loop
              playsInline
              preload={'none'}
            >
              <source src={'/images/brand/contact-bg.webm'} type={'video/webm'} />
              <source src={'/images/brand/contact-bg.mp4'} type={'video/mp4'} />
            </video>
            <div className={'contact-bg-overlay'}></div>
          </div>
          <div
            className={'w-layout-blockcontainer container hero-description-container w-container'}
          >
            <div className={'git-hero'}>
              <div data-w-id={'d6ec158b-413a-2252-c730-9e6331badb22'} className={'git-left'}>
                <div className={'git-intro-block'}>
                  <h1 data-w-id={'5688d7d9-6d15-3f37-8131-e8be09b8e9fa'} className={'is-h2'}>
                    {'Contact us'}
                  </h1>
                  <p className={'is-md-font-size-body-l is-bottom-48 is-sm-bottom-32 git-intro'}>
                    {
                      'Cybersecurity, software development and technology services for organisations across Africa. Tell us what you need and we will get back to you promptly.'
                    }
                  </p>
                </div>
                <div className={'git-details-block'}>
                  <div className={'text-with-icon is-bottom-24'}>
                    <span className={'phone-icon'} aria-hidden={'true'}>
                      <svg
                        width={'20'}
                        height={'20'}
                        viewBox={'0 0 24 24'}
                        fill={'none'}
                        stroke={'currentColor'}
                        strokeWidth={'2'}
                        strokeLinecap={'round'}
                        strokeLinejoin={'round'}
                      >
                        <path
                          d={
                            'M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384'
                          }
                        />
                      </svg>
                    </span>
                    <div className={'mail-wrapper'}>
                      <p className={'is-font-size-body-m'}>
                        <span className={'is-opacity-60'}>{'Phone '}</span>
                        {'- '}
                        <a href={'tel:0551111551'} className={'link-on-dark'}>
                          {'0551111551'}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className={'text-with-icon is-bottom-24'}>
                    <span className={'at-icon'} aria-hidden={'true'}>
                      <svg
                        width={'20'}
                        height={'20'}
                        viewBox={'0 0 24 24'}
                        fill={'none'}
                        stroke={'currentColor'}
                        strokeWidth={'2'}
                        strokeLinecap={'round'}
                        strokeLinejoin={'round'}
                      >
                        <circle
                          className={'at-icon__circle'}
                          cx={'12'}
                          cy={'12'}
                          r={'4'}
                          pathLength={1}
                        />
                        <path
                          className={'at-icon__path'}
                          d={'M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8'}
                          pathLength={1}
                        />
                      </svg>
                    </span>
                    <div className={'mail-wrapper'}>
                      <p className={'is-font-size-body-m'}>
                        <span className={'is-opacity-60'}>{'Email '}</span>
                        {'- '}
                        <a href={'mailto:info@maddygroupltd.com'} className={'link-on-dark'}>
                          {'info@maddygroupltd.com'}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className={'text-with-icon'}>
                    <span className={'pin-icon'} aria-hidden={'true'}>
                      <svg
                        width={'20'}
                        height={'20'}
                        viewBox={'0 0 24 24'}
                        fill={'none'}
                        stroke={'currentColor'}
                        strokeWidth={'2'}
                        strokeLinecap={'round'}
                        strokeLinejoin={'round'}
                      >
                        <path
                          d={
                            'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0'
                          }
                        />
                        <circle
                          className={'pin-icon__circle'}
                          cx={'12'}
                          cy={'10'}
                          r={'3'}
                          pathLength={1}
                        />
                      </svg>
                    </span>
                    <div className={'mail-wrapper'}>
                      <p className={'is-font-size-body-m'}>
                        <span className={'is-opacity-60'}>{'Office '}</span>
                        {'- GD-219-3654, Adjiriganor, Accra'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={'git-right'}>
                <div className={'form-block w-form'}>
                  <form
                    id={'email-form'}
                    name={'email-form'}
                    data-name={'Email Form'}
                    method={'post'}
                    action={'/get-in-touch'}
                    className={'form'}
                  >
                    <input
                      className={'text-field w-input'}
                      maxLength={256}
                      name={'name'}
                      data-name={'Name'}
                      placeholder={'Full name'}
                      type={'text'}
                      id={'name'}
                      required
                    />
                    <input
                      className={'text-field w-input'}
                      maxLength={256}
                      name={'email'}
                      data-name={'E-mail'}
                      placeholder={'E-mail address'}
                      type={'email'}
                      id={'E-mail'}
                      required
                    />
                    <input
                      className={'text-field w-input'}
                      maxLength={256}
                      name={'company'}
                      data-name={'Company name'}
                      placeholder={'Company name'}
                      type={'text'}
                      id={'Company-name'}
                      required
                    />
                    <div className={'form-select-row'}>
                      <select
                        id={'Enquiry-type'}
                        name={'enquiry'}
                        data-name={'Enquiry type'}
                        required
                        className={'text-field select-field w-select'}
                      >
                        <option value={''}>{'How can we help?'}</option>
                        <option value={'Cybersecurity'}>{'Cybersecurity'}</option>
                        <option value={'Software development'}>{'Software development'}</option>
                        <option value={'Software products'}>{'Software products'}</option>
                        <option value={'UAV / IoT / procurement'}>
                          {'UAV, IoT or ICT procurement'}
                        </option>
                        <option value={'Training'}>{'Training'}</option>
                        <option value={'Request a quote'}>{'Request a quote'}</option>
                        <option value={'Other'}>{'Other'}</option>
                      </select>
                      <select
                        id={'Where-did-you-hear-about-us'}
                        name={'source'}
                        data-name={'Where did you hear about us?'}
                        className={'text-field select-field w-select'}
                      >
                        <option value={''}>{'How did you find us?'}</option>
                        <option value={'Referral'}>{'Referral'}</option>
                        <option value={'Search'}>{'Search'}</option>
                        <option value={'Event'}>{'Event'}</option>
                        <option value={'Other'}>{'Other'}</option>
                      </select>
                    </div>
                    <textarea
                      required
                      placeholder={'Message'}
                      maxLength={5000}
                      id={'Text-Message'}
                      name={'message'}
                      data-name={'Text Message'}
                      className={'text-field message-area w-input'}
                    ></textarea>
                    <input
                      type={'submit'}
                      data-wait={'Please wait...'}
                      className={'button submit-button w-button'}
                      value={'Request a quote'}
                    />
                  </form>
                  <div className={'success-message w-form-done'}>
                    <div>
                      {'Thank you. We have received your message and will be in touch shortly.'}
                    </div>
                  </div>
                  <div className={'error-message w-form-fail'}>
                    <div>
                      {
                        'Something went wrong while sending the form. Please try again or email info@maddygroupltd.com.'
                      }
                    </div>
                  </div>
                </div>
                <div
                  data-w-id={'0c45a849-9c8e-3fe9-b20e-34dfaac634ba'}
                  className={'git-right-bg'}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={'page-wrapper is-overflow-hidden is-no-padding'}>
        <Footer />
      </div>
    </div>
  )
}

/**
 * Replaces the look of the contact form's <select>s with a custom glass
 * dropdown (chevron that turns, staggered option list, check on the chosen
 * option). The native <select> stays in place, invisible, under the new button:
 * it still carries the value for submit and still receives reportValidity()'s
 * focus and message, so validation keeps working as before.
 */
const glassSelectScript = `
(function () {
  var selects = document.querySelectorAll('.is-contact-hero select.select-field');
  if (!selects.length) return;
  var CHEVRON = '<svg class="glass-select__chevron" viewBox="0 0 12 8" aria-hidden="true" focusable="false"><path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var CHECK = '<svg class="glass-select__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var openOne = null;

  Array.prototype.forEach.call(selects, function (select) {
    var wrap = document.createElement('div');
    wrap.className = 'glass-select';
    select.parentNode.insertBefore(wrap, select);
    wrap.appendChild(select);
    select.tabIndex = -1;

    var listId = select.id + '-listbox';
    var trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'text-field glass-select__trigger';
    trigger.setAttribute('role', 'combobox');
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', listId);
    if (select.required) trigger.setAttribute('aria-required', 'true');
    trigger.innerHTML = '<span class="glass-select__value"></span>' + CHEVRON;
    var valueEl = trigger.firstChild;

    var menu = document.createElement('ul');
    menu.className = 'glass-select__menu';
    menu.id = listId;
    menu.setAttribute('role', 'listbox');

    var placeholder = '';
    var items = [];
    Array.prototype.forEach.call(select.options, function (option) {
      if (option.value === '') {
        placeholder = option.textContent;
        return;
      }
      var item = document.createElement('li');
      item.className = 'glass-select__option';
      item.id = listId + '-' + items.length;
      item.setAttribute('role', 'option');
      item.dataset.value = option.value;
      item.style.setProperty('--i', String(items.length));
      item.innerHTML = '<span class="glass-select__label"></span>' + CHECK;
      item.firstChild.textContent = option.textContent;
      menu.appendChild(item);
      items.push(item);
    });

    wrap.appendChild(trigger);
    // The list lives on <body> so the hero card's overflow clip can't cut it
    // off; it is positioned against the field whenever it opens.
    document.body.appendChild(menu);

    var active = -1;
    var api = { close: close, place: place, owns: owns };

    function isOpen() {
      return menu.classList.contains('is-open');
    }

    function owns(node) {
      return wrap.contains(node) || menu.contains(node);
    }

    // Below the field, or above it when there is more room there (never under
    // the fixed navbar). Page coordinates, so the list scrolls with the page.
    function place() {
      var box = trigger.getBoundingClientRect();
      var navbar = document.querySelector('.navbar');
      var top = navbar ? navbar.getBoundingClientRect().bottom : 0;
      menu.style.minWidth = box.width + 'px';
      var height = menu.offsetHeight;
      var width = menu.offsetWidth;
      var below = window.innerHeight - box.bottom - 12;
      var above = box.top - top - 12;
      var up = height > below && above > below;
      menu.classList.toggle('opens-up', up);
      var row = wrap.parentElement.getBoundingClientRect();
      var left = box.left + width > row.right ? box.right - width : box.left;
      menu.style.left = left + window.scrollX + 'px';
      menu.style.top = (up ? box.top - 6 - height : box.bottom + 6) + window.scrollY + 'px';
    }

    function sync() {
      var option = select.options[select.selectedIndex];
      var chosen = select.value ? option.textContent : '';
      valueEl.textContent = chosen || placeholder;
      wrap.classList.toggle('is-placeholder', !chosen);
      trigger.setAttribute('aria-label', placeholder + (chosen ? ': ' + chosen : ''));
      items.forEach(function (item) {
        item.setAttribute('aria-selected', String(item.dataset.value === select.value));
      });
      if (chosen) wrap.classList.remove('is-invalid');
    }

    function setActive(index) {
      active = index;
      items.forEach(function (item, i) {
        item.classList.toggle('is-active', i === index);
      });
      if (index >= 0) {
        trigger.setAttribute('aria-activedescendant', items[index].id);
      } else {
        trigger.removeAttribute('aria-activedescendant');
      }
    }

    function open(fromKeyboard) {
      if (openOne && openOne !== api) openOne.close();
      place();
      wrap.classList.add('is-open');
      menu.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
      var selected = items.findIndex(function (item) { return item.dataset.value === select.value; });
      // Highlight only for keyboard use; on click/tap a highlight reads as selected.
      setActive(fromKeyboard ? Math.max(selected, 0) : -1);
      openOne = api;
    }

    function close() {
      wrap.classList.remove('is-open');
      menu.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
      setActive(-1);
      if (openOne === api) openOne = null;
    }

    function choose(item) {
      select.value = item.dataset.value;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      close();
      trigger.focus();
    }

    trigger.addEventListener('click', function () {
      isOpen() ? close() : open(false);
    });

    trigger.addEventListener('keydown', function (event) {
      var key = event.key;
      if (key === 'ArrowDown' || key === 'ArrowUp') {
        event.preventDefault();
        if (!isOpen()) return open(true);
        var step = key === 'ArrowDown' ? 1 : -1;
        if (active < 0) setActive(step > 0 ? 0 : items.length - 1);
        else setActive((active + step + items.length) % items.length);
      } else if ((key === 'Home' || key === 'End') && isOpen()) {
        event.preventDefault();
        setActive(key === 'Home' ? 0 : items.length - 1);
      } else if (key === 'Enter' || key === ' ') {
        // Handled here (not by the button's click) so Space's keyup can't reopen it.
        event.preventDefault();
        if (isOpen() && active >= 0) choose(items[active]);
        else if (!isOpen()) open(true);
      } else if (key === 'Escape' && isOpen()) {
        event.preventDefault();
        close();
      } else if (key === 'Tab') {
        close();
      }
    });
    trigger.addEventListener('keyup', function (event) {
      if (event.key === ' ') event.preventDefault();
    });

    menu.addEventListener('mousemove', function (event) {
      var item = event.target.closest('.glass-select__option');
      if (item) setActive(items.indexOf(item));
    });
    menu.addEventListener('click', function (event) {
      var item = event.target.closest('.glass-select__option');
      if (item) choose(item);
    });

    select.addEventListener('change', sync);
    select.addEventListener('invalid', function () {
      wrap.classList.add('is-invalid');
    });

    sync();
  });

  document.addEventListener('click', function (event) {
    if (openOne && !openOne.owns(event.target)) openOne.close();
  });
  window.addEventListener('resize', function () {
    if (openOne) openOne.place();
  });
})();
`

/**
 * Phones only: a second copy of the background clip, shown whole at the bottom
 * of the card so the mascots are never cropped (see maddy-theme.css). Desktop
 * and tablet never need it, so it is not loaded there (preload="none"); it
 * starts when the viewport is phone-sized and stops if it grows past that.
 */
const wholeVideoScript = `
(function () {
  var video = document.querySelector('.hero-media__video-whole');
  if (!video || !window.matchMedia) return;
  var phone = window.matchMedia('(max-width: 767px)');
  function sync() {
    if (phone.matches) {
      var started = video.play();
      if (started && started.catch) started.catch(function () {});
    } else {
      video.pause();
    }
  }
  if (phone.addEventListener) phone.addEventListener('change', sync);
  else phone.addListener(sync);
  sync();
})();
`

function PageRuntime() {
  return (
    <>
      <script
        src={'/vendor/jquery.js'}
        type={'text/javascript'}
        integrity={'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0='}
        crossOrigin={'anonymous'}
      ></script>
      <script src={'/vendor/webflow.js'} type={'text/javascript'}></script>
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.getInTouch[2] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.getInTouch[3] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.getInTouch[4] }} />
      <script dangerouslySetInnerHTML={{ __html: glassSelectScript }} />
      <script dangerouslySetInnerHTML={{ __html: wholeVideoScript }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  var form = document.getElementById('email-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    var data = new FormData(form);
    var lines = [];
    data.forEach(function (value, key) {
      if (String(value).trim()) lines.push(key + ': ' + value);
    });
    var body = lines.join('\\n');
    var subject = encodeURIComponent('Website enquiry from ' + (data.get('name') || 'Maddy Group site'));
    window.location.href = 'mailto:info@maddygroupltd.com?subject=' + subject + '&body=' + encodeURIComponent(body);
    var done = form.parentElement && form.parentElement.querySelector('.w-form-done');
    var fail = form.parentElement && form.parentElement.querySelector('.w-form-fail');
    if (done) {
      form.style.display = 'none';
      done.style.display = 'block';
    }
    if (fail) fail.style.display = 'none';
  });
})();
`,
        }}
      />
    </>
  )
}

export function GetInTouchDocument() {
  return (
    <SiteDocument
      currentPath={'/get-in-touch'}
      pageId={'6627b50ad2ace3686c70ddbd'}
      head={<PageHead />}
      runtime={<PageRuntime />}
    >
      <GetInTouchContent />
    </SiteDocument>
  )
}
