document.addEventListener('DOMContentLoaded', function () {

  // Menu on mobile 
  const menuBtn = document.querySelector('.js-menu-btn'),
        menu = document.querySelector('.js-menu'),
        menuList = document.querySelector('.js-menu-list'),
        header = document.querySelector('.js-header');
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      const menuHeight = menuList.clientHeight;
      if (header.classList.contains('opened')) {
        header.classList.remove('opened');
        menu.style.height = '0';
      } else {
        header.classList.add('opened');
        menu.style.height = menuHeight + 'px';
      }
    });
  }
  window.addEventListener('scroll', function(event) {
    if (header.classList.contains('opened')) {
      header.classList.remove('opened');
      menu.style.height = '0';
    }
  })
  document.addEventListener('click', function (e) {
    const clickInside = menu.contains(e.target)
    if (header.classList.contains('opened')) {
        if (!clickInside && (e.target.closest('.js-menu-btn') !== menuBtn)) {
            header.classList.remove('opened');
            menu.style.height = '0';
        }
    }
  })


  // Language menu

  const languageBtns = document.querySelectorAll('.js-language-btn'),
        desktopLanguageBtn = document.querySelector('.mobile-invisible .js-language-btn'),
        mobileLanguageBtn = document.querySelector('.mobile-visible .js-language-btn'),
        mobileLanguageMenu = document.querySelector('.mobile-visible .js-language'),
        desktopLanguageMenu = document.querySelector('.mobile-invisible .js-language');
        
  if (languageBtns) {
    languageBtns.forEach((btn) => {
      openDropdownMenu (btn);
    })

    closeDropdownMenu(mobileLanguageBtn, '.mobile-visible .js-language-btn', mobileLanguageMenu);
    closeDropdownMenu(desktopLanguageBtn, '.mobile-invisible .js-language-btn', desktopLanguageMenu);
  }

    
  const userBtn = document.querySelector('.js-user-btn'),
        userMenu = document.querySelector('.js-user-menu');

  if (userBtn) {
    openDropdownMenu (userBtn);
    closeDropdownMenu(userBtn, '.js-user-btn', userMenu);
  }


  function openDropdownMenu (btn) {
    btn.addEventListener('click', function () {
      btn.nextElementSibling.classList.toggle('active');
    });
  }

  function closeDropdownMenu (btn, btnClass, dropdown) {
    document.addEventListener('click', function (e) {
      const clickInside = dropdown.contains(e.target)
      if (dropdown.classList.contains('active')) {
          if (!clickInside && (e.target.closest(btnClass) !== btn)) {
            dropdown.classList.remove('active')
          }
      }
    })
  }
});


