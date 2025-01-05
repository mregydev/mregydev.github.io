/**
 * Template Name: DevFolio
 * Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

;(function () {
  'use strict'

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body')
    const selectHeader = document.querySelector('#header')
    if (
      !selectHeader.classList.contains('scroll-up-sticky') &&
      !selectHeader.classList.contains('sticky-top') &&
      !selectHeader.classList.contains('fixed-top')
    )
      return
    window.scrollY > 100
      ? selectBody.classList.add('scrolled')
      : selectBody.classList.remove('scrolled')
  }

  document.addEventListener('scroll', toggleScrolled)
  window.addEventListener('load', toggleScrolled)

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle')

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active')
    mobileNavToggleBtn.classList.toggle('bi-list')
    mobileNavToggleBtn.classList.toggle('bi-x')
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle)

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach((navmenu) => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle()
      }
    })
  })

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach((navmenu) => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault()
      this.parentNode.classList.toggle('active')
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active')
      e.stopImmediatePropagation()
    })
  })

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader')
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    })
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top')

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add('active')
        : scrollTop.classList.remove('active')
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })

  window.addEventListener('load', toggleScrollTop)
  document.addEventListener('scroll', toggleScrollTop)

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
  }
  window.addEventListener('load', aosInit)

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed')
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    })
  }

  function handleCertifications() {
    const certificationsHtml = myData.certifications.reduce(
      (acc, certification) =>
        `${acc}<div class='col-lg-4 col-sm-12 certify-container'><div class='certify-header'><h3><i class='${certification.icon}'></i>${certification.issuer}</h3></div><div class='certify-body'><a href='${certification.link}'>${certification.name}</a><div class='card-footer'><a href='${certification.link}' class='view-btn'>View</a></div></div></div>`,
      ''
    )

    document.querySelector(
      '#certifications #certify-container'
    ).innerHTML = `<div class='row'>${certificationsHtml}</div>`
  }

  function handleCourses() {
    const coursesHtml = myData.courses.reduce(
      (acc, certification) =>
        `${acc}<div class='col-lg-4 col-sm-12 certify-container'><div class='certify-header'><h3><i class='${certification.icon}'></i>${certification.issuer}</h3></div><div class='certify-body'><a href='${certification.link}'>${certification.name}</a><div class='card-footer'><a href='${certification.link}' class='view-btn'>View</a></div></div></div>`,
      ''
    )

    document.querySelector(
      '#courses #courses-container'
    ).innerHTML = `<div class='row'>${coursesHtml}</div>`
  }

  function handleCodeSamples() {
    const codeSamples = myData.codeSamples.reduce(
      (acc, certification) =>
        `${acc}<div class='col-lg-4 col-sm-12 codeSample-container'><div class='codeSample-header'><h4><i class='${certification.icon}'></i>${certification.issuer}</h4></div><div class='codeSample-body'><a href='${certification.link}'>${certification.name}</a><div class='card-footer'><a href='${certification.link}' class='view-btn'>View</a></div></div></div>`,
      ''
    )

    document.querySelector(
      '#codeSamples #codeSamples-container'
    ).innerHTML = `<div class='row'>${codeSamples}</div>`
  }
  /**
   * Animate the skills items on reveal
   */
  function handleAnimations() {
    let skillsAnimation = document.querySelectorAll('.skills-animation')
    skillsAnimation.forEach((item) => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: function (direction) {
          let progress = item.querySelectorAll('.progress .progress-bar')
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%'
          })
        },
      })
    })
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter()

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox',
  })

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry'
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*'
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order'

    let initIsotope
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort,
      })
    })

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener(
        'click',
        function () {
          isotopeItem
            .querySelector('.isotope-filters .filter-active')
            .classList.remove('filter-active')
          this.classList.add('filter-active')
          initIsotope.arrange({
            filter: this.getAttribute('data-filter'),
          })
          if (typeof aosInit === 'function') {
            aosInit()
          }
        },
        false
      )
    })
  })

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active')
    })
  })

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll('.init-swiper').forEach(function (swiperElement) {
      let config = JSON.parse(swiperElement.querySelector('.swiper-config').innerHTML.trim())

      if (swiperElement.classList.contains('swiper-tab')) {
        initSwiperWithCustomPagination(swiperElement, config)
      } else {
        new Swiper(swiperElement, config)
      }
    })
  }

  window.addEventListener('load', initSwiper)

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash)
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth',
          })
        }, 100)
      }
    }
  })

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a')

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return
      let section = document.querySelector(navmenulink.hash)
      if (!section) return
      let position = window.scrollY + 200
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        document
          .querySelectorAll('.navmenu a.active')
          .forEach((link) => link.classList.remove('active'))
        navmenulink.classList.add('active')
      } else {
        navmenulink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', function () {
    handleSkills()
    handleExperience()
    handleCertifications()
    handleCourses()
    navmenuScrollspy()
  })
  document.addEventListener('scroll', navmenuScrollspy)

  function handleSkills() {
    const skillsHtml = myData.skills.reduce(
      (acc, skill) => `${acc}<div class="progress">
                <span class="skill"><span>${skill.name}</span> <i class="val">${skill.percentage}%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="${skill.percentage}" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                </div>
              </div>`,
      ''
    )

    document.getElementById('skills').innerHTML = skillsHtml
    handleAnimations()
  }

  function handleExperience() {
    const experienceHtml = myData.experience.reduce(
      (acc, item, index) => `${acc}<div class="resume-item">

                <h4>${item.position}</h4>
                <h5>${item.company}</h5>
                <p><h5>${item.from} - ${item.to}</h5></p>

                <p><em>${item.city} </em></p>
                <p><a data-id="${index}-tasks" onclick="toggleSection(event)" class='toggle-link' href="#">${
        document.getElementById(`${index}-tasks`)?.style.display === 'block'
          ? 'Hide'
          : 'Show responsibilites'
      } </a></p>
                <ul class='company-responsibilities' id="${index}-tasks">
                ${item.responsiblities.reduce(
                  (resAcc, responsibility) => `${resAcc}<li>${responsibility}</li>`,
                  ''
                )}
                </ul>
              </div>`,
      ''
    )

    document.getElementById('experience-section').innerHTML = experienceHtml
    /**<div class="resume-item">
                <h4>Master of Fine Arts &amp; Graphic Design</h4>
                <h5>2015 - 2016</h5>
                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                <p>
                  Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.
                  Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend
                </p>
              </div> */
  }
})()

function toggleSection(event) {
  event.preventDefault()
  const sectionId = event.target.attributes['data-id'].value

  const isHidden =
    !document.getElementById(sectionId).style.display ||
    document.getElementById(sectionId).style.display === 'none'

  document.getElementById(sectionId).style.display = isHidden ? 'block' : 'none'
  event.target.innerHTML = !isHidden ? 'Show responsiblities' : 'Hide'
}
