/**
 * Add solid background to fixed to top navigation bar
 */

export default (() => {
  const navbar = document.querySelector('.navbar.fixed-top')

  if (navbar == null) return

  const navbarClass = navbar.classList
  const scrollOffset = 20

  const navbarStuck = (e) => {
    if (e.currentTarget.pageYOffset > scrollOffset) {
      navbarClass.add('navbar-stuck')
    } else {
      navbarClass.remove('navbar-stuck')
    }
  }

  // On load
  window.addEventListener('load', (e) => {
    navbarStuck(e)
  })

  // On scroll
  window.addEventListener('scroll', (e) => {
    navbarStuck(e)
  })
})()

// Docs Sidebar + Components Menu + Account Sidebar
document.addEventListener('DOMContentLoaded', function () {
  const menuIds = ['components-menu-items', 'docs-sidebar', 'sidebarAccount']
  const currentPage = window.location.pathname.split('/').pop()

  menuIds.forEach(id => {
    const menu = document.getElementById(id)
    if (!menu) return

    const links = menu.querySelectorAll('a')
    let activeLink = null

    links.forEach(link => {
      const href = link.getAttribute('href')

      if (href === currentPage) {
        link.classList.add('active', 'text-primary')
        activeLink = link

        const li = link.closest('li')
        if (li) li.classList.add('active')
      }
    })

    // Scroll menu container to active item
    if (activeLink) {
      const offset =
        activeLink.offsetTop - menu.clientHeight / 2

      menu.scrollTo({
        top: offset,
        // behavior: 'smooth'
      })
    }
  })
})



// Topnav Active Menu
const pageUrl = window.location.href.split(/[?#]/)[0];
const navbarLinks = Array.from(document.querySelectorAll('#navbar a'));

navbarLinks.forEach((link) => {
  if (link.href === pageUrl) {
    link.classList.add('active');

    const parentMenu = link.parentElement.parentElement.parentElement.parentElement.parentElement;
    if (parentMenu?.classList.contains('nav-item')) {
      const dropdownElement = parentMenu.querySelector('.hs-dropdown-toggle');
      dropdownElement?.classList.add('active');
    }

    const parentParentMenu = link.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    if (parentParentMenu?.classList.contains('nav-item')) {
      const dropdownElement = parentParentMenu.querySelector('.hs-dropdown-toggle');
      dropdownElement?.classList.add('active');
    }

    // Traverse up to the closest dropdown toggle
    let parentDropdown = link.closest(".hs-dropdown");
    if (parentDropdown) {
      const dropdownToggle = parentDropdown.querySelector(".hs-dropdown-toggle");

      // Add 'active' class to the dropdown toggle
      if (dropdownToggle) {
        dropdownToggle.classList.add("active");
      }
    }
  }
});

// Sticky Navbar
function windowScroll() {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (document.body.scrollTop >= 75 || document.documentElement.scrollTop >= 75) {
      navbar.classList.add("bg-white", "shadow-sm", "dark:bg-[#121519]");

    } else {
      navbar.classList.remove("bg-white", "shadow-sm", "dark:bg-[#121519]");
    }
  }
}
window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});

