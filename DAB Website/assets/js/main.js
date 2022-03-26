/**
 * Template Name: FlexStart - v1.9.0
 * Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  ("use strict");

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach((e) => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 10;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper(".clients-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120,
      },
    },
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          aos_init();
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfokio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".team-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  });
  /**
   * Home-slider
   */

  new Swiper(".home-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      1200: {
        slidesPerView: 1,
      },
    },
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  });

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
})();

const team = document.querySelectorAll(".teams");
const teamMember = document.querySelectorAll(".teamMember");
const teamInfo = document.querySelectorAll(".member-info");
$(function () {
  $(team[0]).click(function (e) {
    $(teamMember[1]).hide();
    $(teamMember[2]).hide();
    $(teamMember[3]).hide();
    team[0].classList.remove("col-lg-3");
    team[0].classList.remove("col-md-6");
    $(team[0]).animate({
      width: "100%",
      height: "730px",
    });
    teamInfo[0].children[2].innerText =
      "Mr. Dereje Getu, has M.Sc. in Economic Policy Analysis from Addis Ababa University and M.Sc. in Globalization and Development from University of Antwerp, Belgium, and is the co-founder, managing director and principal coordinator of consultancy works at DAB DRT. He possesses more than ten years of experience in research and consultancy. His previous experiences include Lecturer, Research and Community Development Coordinator at Debre Markos University, Researcher at Korea Trade and Investment Agency, Sasakawa Global 2000, and International Food Policy Research Institute (IFPRI). Mr. Dereje also has extensive experience in qualitative research and in collaboration with Wageningen and Groningen University evaluation teams. He evaluated a number of Dutch government-funded NGOs in Ethiopia by using a process-tracing approach, a contemporary technique in qualitative evaluation. He also coordinated an end-line survey of Dutch government-funded MDG projects in Afar, Oromia, and Benishangul regions";
    teamInfo[0].children[2].style.width = "80%";
    teamInfo[0].children[2].style.textAlign = "center";
    teamInfo[0].children[2].style.paddingLeft = "10%";
    e.stopPropagation();
  });
  $(team[1]).click(function (e) {
    $(teamMember[0]).hide();
    $(teamMember[2]).hide();
    $(teamMember[3]).hide();
    team[1].classList.remove("col-lg-3");
    team[1].classList.remove("col-md-6");
    $(team[1]).animate({
      width: "100%",
      height: "730px",
    });
    teamInfo[1].children[2].innerText =
      "Mr. Dereje Getu, has M.Sc. in Economic Policy Analysis from Addis Ababa University and M.Sc. in Globalization and Development from University of Antwerp, Belgium, and is the co-founder, managing director and principal coordinator of consultancy works at DAB DRT. He possesses more than ten years of experience in research and consultancy. His previous experiences include Lecturer, Research and Community Development Coordinator at Debre Markos University, Researcher at Korea Trade and Investment Agency, Sasakawa Global 2000, and International Food Policy Research Institute (IFPRI). Mr. Dereje also has extensive experience in qualitative research and in collaboration with Wageningen and Groningen University evaluation teams. He evaluated a number of Dutch government-funded NGOs in Ethiopia by using a process-tracing approach, a contemporary technique in qualitative evaluation. He also coordinated an end-line survey of Dutch government-funded MDG projects in Afar, Oromia, and Benishangul regions";
    teamInfo[1].children[2].style.width = "80%";
    teamInfo[1].children[2].style.textAlign = "center";
    teamInfo[1].children[2].style.paddingLeft = "10%";
    e.stopPropagation();
  });
  $(team[2]).click(function (e) {
    $(teamMember[0]).hide();
    $(teamMember[1]).hide();
    $(teamMember[3]).hide();
    team[2].classList.remove("col-lg-3");
    team[2].classList.remove("col-md-6");
    $(team[2]).animate({
      width: "100%",
      height: "730px",
    });
    teamInfo[2].children[2].innerText =
      "As Marketing and Project Manager at DAB-Development Research & Training PLC, Yonatan handles the company’s internal affairs, design operations strategies, and help human resources build out core teams.He holds two masters of art degrees in Marketing Management and Logistics & Supplies Chain Management from Mekelle and Addis Ababa universities. He also has been awarded first-level Kaizen [5S Master and 5S Leader] Certificate from Ethiopian Kaizen Institute with TechnoServe.In his four years at DAB-DRT, Yonatan has practical experience of maintaining and monitoring project plans, project schedules, budgets, and expenditures. He has also been working on organizing, attending and participating in training; preparing necessary presentation materials; delivering training to the clients as needed; coordinating the projects with the project implementation team; supervising large scale survey’s; and supporting the gathering of data to feed into a data system, and. He has been undertaking project tasks as required and providing administrative support as needed.Before joining DAB, Yonatan has worked as Facilitation Manager, Junior Market Data Officer, and Business Development Officer at Ethiopian Airports Enterprise, Ethiopian Commodity Exchange, and Fortune Engineering Plc, respectively. Working at these organizations, he was responsible for provides guidance and support to the airport community, represents airports interests with various stakeholders, and encourages industry collaboration to identify improvements in passenger processes and the overall seamless travel experience.He develops business and marketing plans; assists in the company’s branding and media communication activities; research the market; approach, follow up, and close the business deals with prospective clients.He is a lecturer at Hawassa University College of Business & Economics [Department of Marketing Management] since 2017.";
    teamInfo[2].children[2].style.width = "80%";
    teamInfo[2].children[2].style.textAlign = "center";
    teamInfo[2].children[2].style.paddingLeft = "10%";
    e.stopPropagation();
  });
  $(team[3]).click(function (e) {
    $(teamMember[0]).hide();
    $(teamMember[1]).hide();
    $(teamMember[2]).hide();
    team[3].classList.remove("col-lg-3");
    team[3].classList.remove("col-md-6");
    $(team[3]).animate({
      width: "100%",
      height: "730px",
    });
    teamInfo[3].children[2].innerText =
      "Mr. Dereje Getu, has M.Sc. in Economic Policy Analysis from Addis Ababa University and M.Sc. in Globalization and Development from University of Antwerp, Belgium, and is the co-founder, managing director and principal coordinator of consultancy works at DAB DRT. He possesses more than ten years of experience in research and consultancy. His previous experiences include Lecturer, Research and Community Development Coordinator at Debre Markos University, Researcher at Korea Trade and Investment Agency, Sasakawa Global 2000, and International Food Policy Research Institute (IFPRI). Mr. Dereje also has extensive experience in qualitative research and in collaboration with Wageningen and Groningen University evaluation teams. He evaluated a number of Dutch government-funded NGOs in Ethiopia by using a process-tracing approach, a contemporary technique in qualitative evaluation. He also coordinated an end-line survey of Dutch government-funded MDG projects in Afar, Oromia, and Benishangul regions";
    teamInfo[3].children[2].style.width = "80%";
    teamInfo[3].children[2].style.textAlign = "center";
    teamInfo[3].children[2].style.paddingLeft = "10%";
    e.stopPropagation();
  });
  $("body").click(function () {
    for (let teamMem of teamMember) {
      $(teamMem).show();
    }
    const windowWidth = $(window);
    for (let teamMem of team) {
      if ($(window).width() <= 1010 && $(window).width() >= 560) {
        $(teamMem).animate({
          width: "50%",
          height: "400px",
        });
      } else if ($(window).width() <= 560) {
        $(teamMem).animate({
          width: "100%",
          height: "400px",
        });
      } else {
        $(teamMem).animate({
          width: "25%",
          height: "400px",
        });
      }
      for (let teamP of teamInfo) {
        teamP.children[2].innerText = "";
      }
    }
  });
});
