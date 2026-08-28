// 导航栏渲染逻辑。内容配置请改 data/content.js，不需要动这个文件。
(function () {
  function renderNavbar() {
    if (typeof navbarLinks === "undefined") return; // content.js 尚未加载

    var currentLang = localStorage.getItem("lang") === "zh" ? "zh" : "en";
    var t = currentLang === "zh" ? zhNavbarData : enNavbarData;

    // 当前路径，去掉 .html 后缀，便于和下面的 url 比较
    var here = window.location.pathname.replace(/\.html$/, "");
    if (here === "/index") here = "/";

    var links = [
      { active: !!navbarLinks.home, title: t.Home, url: "/" },
      { active: !!navbarLinks.publications, title: t.publications, url: "/publications.html" },
      { active: !!navbarLinks.cv, title: t.cv, url: "/cv.html" },
      { active: !!navbarLinks.jobs, title: t.Jobs, url: "/jobs.html" },
      { active: !!navbarLinks.contact, title: t.Contact, url: "/contact.html" },
    ];

    var titleEl = document.getElementById("navbar_title");
    if (titleEl) {
      titleEl.innerHTML = t.title;
      titleEl.href = "/";
    }

    var linksEl = document.getElementById("navbar_links");
    if (linksEl) {
      linksEl.innerHTML = links
        .filter(function (item) {
          return item.active;
        })
        .map(function (link) {
          var isActive = here === link.url.replace(/\.html$/, "");
          return (
            '<li class="nav-item">' +
            '<a class="nav-link' +
            (isActive ? " active" : "") +
            '" href="' +
            link.url +
            '"' +
            (isActive ? ' aria-current="page"' : "") +
            ">" +
            link.title +
            "</a></li>"
          );
        })
        .join("");
    }

    // 语言切换按钮：中英文互切，保存在 localStorage 后刷新页面
    var languageEl = document.getElementById("language");
    if (languageEl) {
      languageEl.textContent = currentLang === "zh" ? "EN" : "中文";
      languageEl.setAttribute(
        "aria-label",
        currentLang === "zh" ? "Switch to English" : "切换到中文"
      );
      languageEl.onclick = function () {
        localStorage.setItem("lang", currentLang === "zh" ? "en" : "zh");
        window.location.reload();
      };
    }
  }

  renderNavbar();
})();
