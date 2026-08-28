$(document).ready(function () {
  var currentLang = localStorage.getItem("lang") || "en";
  var activeNavbarData = currentLang === "zh" ? zhNavbarData : enNavbarData;

  const navbar_data = {
    title: activeNavbarData.title,
    navbar_links: [
      {
        active: navbarLinks.home ? true : false,
        title: activeNavbarData.Home,
        url: "/",
      },
      {
        active: navbarLinks.publications ? true : false,
        title: activeNavbarData.publications,
        url: "/publications.html",
      },
      {
        active: navbarLinks.cv ? true : false,
        title: activeNavbarData.cv,
        url: "/cv.html",
      },
      {
        active: navbarLinks.jobs ? true : false,
        title: activeNavbarData.Jobs,
        url: "/jobs.html",
      },
      {
        active: navbarLinks.contact ? true : false,
        title: activeNavbarData.Contact,
        url: "/contact.html",
      },
    ],
  };

  function navbarData() {
    document.getElementById("navbar_title").innerHTML = navbar_data.title;
    document.getElementById("navbar_title").href = "/";
    document.getElementById("navbar_links").innerHTML = navbar_data.navbar_links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li class="nav-item">
              <a 
              ${
                window.location.pathname === link.url
                  ? "class='nav-link active'"
                  : "class='nav-link'"
              }
              href=${link.url}
              >${link.title}</a>
            </li>`
      )
      .join("");

    // 语言切换按钮：点击后在中英文之间切换，并刷新当前页面
    var languageEl = document.getElementById("language");
    if (languageEl) {
      languageEl.innerText = currentLang === "zh" ? "EN" : "中文";
      languageEl.onclick = function () {
        localStorage.setItem("lang", currentLang === "zh" ? "en" : "zh");
        window.location.reload();
      };
    }
  }
  navbarData();
});
