// ============================================================
//  页面渲染逻辑 Page rendering logic
//  内容请改 data/content.js，这个文件通常不需要动。
// ============================================================

(function () {
  "use strict";

  // ---------- 工具函数 ----------
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function byId(id) {
    return document.getElementById(id);
  }

  var currentLang = localStorage.getItem("lang") === "zh" ? "zh" : "en";
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";

  // 当前页面：/ 、/publications 、/contact 、/jobs 、/cv
  var page = window.location.pathname.replace(/\.html$/, "");
  if (page === "/index" || page === "") page = "/";

  // ---------- 首页 Home ----------
  function renderHome() {
    var data = currentLang === "zh" ? zhHomePageData : enHomePageData;
    var firstEmail = (globalData.email || "").split(";")[0].trim();

    var links = [
      { url: firstEmail ? "mailto:" + firstEmail : "", img: "/assets/images/icons/mail.png", label: "Email" },
      { url: globalData.googleScholar, img: "/assets/images/icons/google-scholar.png", label: globalData.googleScholarTitle || "Google Scholar" },
      { url: globalData.orcid, img: "/assets/images/icons/orcid.png", label: globalData.orcidTitle || "ORCID" },
      { url: globalData.github, img: "/assets/images/icons/github.png", label: globalData.githubTitle || "GitHub" },
      { url: globalData.linkedin, img: "/assets/images/icons/linkedin.png", label: globalData.linkedinTitle || "LinkedIn" },
      { url: globalData.twitter, img: "/assets/images/icons/twitter.png", label: globalData.twitterTitle || "X" },
      { url: globalData.whatsapp, img: "/assets/images/icons/whatsapp.png", label: globalData.whatsappTitle || "WhatsApp" },
    ];

    document.title = data.name + " | " + data.jobTitle;

    var img = byId("home_image");
    if (img) {
      img.src = globalData.image || "";
      img.alt = data.name;
    }

    if (byId("home_name")) byId("home_name").textContent = data.name;
    if (byId("home_job_title")) byId("home_job_title").textContent = data.jobTitle;

    var linksEl = byId("home_links");
    if (linksEl) {
      linksEl.innerHTML = links
        .filter(function (l) {
          return !!l.url;
        })
        .map(function (l) {
          var external = l.url.indexOf("mailto:") !== 0;
          return (
            '<li><a href="' + esc(l.url) + '"' +
            (external ? ' target="_blank" rel="noopener noreferrer"' : "") +
            ' title="' + esc(l.label) + '">' +
            '<img src="' + esc(l.img) + '" alt="' + esc(l.label) + '" /></a></li>'
          );
        })
        .join("");
    }

    if (byId("home_title")) byId("home_title").textContent = data.home_title;
    if (byId("home_content")) byId("home_content").innerHTML = data.home_content;
  }

  // ---------- 论文页 Publications ----------
  function publicationHtml(p, labels) {
    var footer = [
      p.replication
        ? '<li><a href="' + esc(p.replication) + '" target="_blank" rel="noopener noreferrer">' + labels.replication + "</a></li>"
        : "",
      p.News
        ? '<li><a href="' + esc(p.News) + '" target="_blank" rel="noopener noreferrer">' + labels.news + "</a></li>"
        : "",
    ]
      .filter(Boolean)
      .join("");

    var writers = (p.writers || [])
      .map(function (w) {
        return "<span>" + esc(w) + "</span>";
      })
      .join(", ");

    // 有期刊名就按期刊渲染；没有期刊名（如工作论文）只渲染状态，
    // 用中性样式，避免看起来像一本真实存在的期刊。
    var journal = "";
    if (p.journal) {
      var inner = p.link
        ? '<a href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer">' + esc(p.journal) + "</a>"
        : esc(p.journal);
      journal =
        '<p class="publication_journal"><em>' + inner + "</em>" +
        (p.status ? ", " + esc(p.status) : "") + "</p>";
    } else if (p.status) {
      var statusText = p.link
        ? '<a href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer">' + esc(p.status) + "</a>"
        : esc(p.status);
      journal = '<p class="publication_status">' + statusText + "</p>";
    }

    var presentations =
      p.presentations && p.presentations.length
        ? '<p class="publication_presentations"><strong>' + labels.presentations + ":</strong> " +
          p.presentations.map(esc).join("; ") + "</p>"
        : "";

    return (
      '<div class="publications_item">' +
      '<div class="publications_header">' +
      writers +
      (p.date ? " <span>(" + esc(p.date) + ").</span>" : "") +
      " <h2>" + esc(p.title) + "</h2> " +
      journal +
      presentations +
      "</div>" +
      (p.abstract ? "<p>" + p.abstract + "</p>" : "") +
      (footer ? '<ul class="publications_footer">' + footer + "</ul>" : "") +
      "</div>"
    );
  }

  function renderPublications() {
    var data = currentLang === "zh" ? zhPublicationsPageData : enPublicationsPageData;
    var labels =
      currentLang === "zh"
        ? { replication: "复制数据", news: "相关报道", presentations: "会议报告" }
        : { replication: "Replication", news: "News", presentations: "Selected Presentations" };

    document.title =
      (currentLang === "zh" ? "论文发表" : "Publications") +
      " | " +
      (currentLang === "zh" ? zhHomePageData.name : enHomePageData.name);

    ["one", "two", "three", "four"].forEach(function (key) {
      var titleEl = byId("publications_type_" + key + "_title");
      var dataEl = byId("publications_type_" + key + "_data");
      var items = data["type_" + key + "_items"] || [];
      var has = items.length > 0;

      if (titleEl) titleEl.textContent = has ? data["type_" + key + "_title"] || "" : "";
      if (dataEl) {
        dataEl.innerHTML = has
          ? items
              .map(function (p) {
                return publicationHtml(p, labels);
              })
              .join("")
          : "";
      }
    });
  }

  // ---------- 联系页 Contact ----------
  function renderContact() {
    var cv = currentLang === "zh" ? zhCVPageData : enCVPageData;
    var title = currentLang === "zh" ? "联系方式" : "Contact";
    var name = currentLang === "zh" ? zhHomePageData.name : enHomePageData.name;

    document.title = title + " | " + name;
    if (byId("contact_title")) byId("contact_title").textContent = title;

    var rows = [];

    if (globalData.enAddress) {
      rows.push(
        '<li><img src="/assets/images/icons/location.png" alt="Address" /><p>' +
          esc(currentLang === "zh" && globalData.zhAddress ? globalData.zhAddress : globalData.enAddress) +
          "</p></li>"
      );
    }

    if (globalData.phone) {
      rows.push(
        '<li><img src="/assets/images/icons/phone.png" alt="Phone" />' +
          '<p><a href="tel:' + esc(globalData.phone.replace(/\s+/g, "")) + '">' +
          esc(globalData.phone) + "</a></p></li>"
      );
    }

    if (globalData.email) {
      var mails = globalData.email
        .split(";")
        .map(function (m) {
          return m.trim();
        })
        .filter(Boolean)
        .map(function (m) {
          return '<a href="mailto:' + esc(m) + '">' + esc(m) + "</a>";
        })
        .join("<br />");
      rows.push(
        '<li><img src="/assets/images/icons/mail.png" alt="Email" /><p>' + mails + "</p></li>"
      );
    }

    [
      ["googleScholar", "google-scholar.png"],
      ["orcid", "orcid.png"],
      ["github", "github.png"],
      ["linkedin", "linkedin.png"],
      ["twitter", "twitter.png"],
      ["whatsapp", "whatsapp.png"],
    ].forEach(function (pair) {
      var url = globalData[pair[0]];
      if (!url) return;
      var label = globalData[pair[0] + "Title"] || pair[0];
      rows.push(
        '<li><img src="/assets/images/icons/' + pair[1] + '" alt="' + esc(label) + '" />' +
          '<p><a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' +
          esc(label) + "</a></p></li>"
      );
    });

    if (cv && cv.download_text) {
      rows.push(
        '<li><img src="/assets/images/icons/cv.png" alt="CV" /><p>' +
          esc(cv.download_text) + " " +
          '<a href="' + esc(cv.download_english_link) + '" target="_blank" rel="noopener noreferrer">' +
          esc(cv.download_english_text) + "</a> " +
          esc(cv.download_join_text || "or in") + " " +
          '<a href="' + esc(cv.download_chinese_link) + '" target="_blank" rel="noopener noreferrer">' +
          esc(cv.download_chinese_text) + "</a>" + (currentLang === "zh" ? "。" : ".") + "</p></li>"
      );
    }

    if (byId("contact_data")) byId("contact_data").innerHTML = rows.join("");
    var cvBox = byId("contact_cv_download");
    if (cvBox) cvBox.innerHTML = "";
  }

  // ---------- 启动 ----------
  function renderPage() {
    try {
      if (page === "/") renderHome();
      else if (page === "/publications") renderPublications();
      else if (page === "/contact") renderContact();
    } catch (err) {
      // 渲染出错时至少不要让页面停留在空白状态
      console.error("Page render failed:", err);
    }

    // 动画初始化。AOS 会把 [data-aos] 元素从 opacity:0 显示出来，
    // 所以即使 AOS 加载失败也必须把这些属性去掉，否则整页看不见。
    if (typeof AOS !== "undefined") {
      AOS.init({ duration: 600, once: true });
    } else {
      Array.prototype.forEach.call(document.querySelectorAll("[data-aos]"), function (el) {
        el.removeAttribute("data-aos");
      });
    }
  }

  function loadNavbar() {
    var slot = byId("include_navbar");
    if (!slot || typeof $ === "undefined") return;
    $(slot).load("/utils/navbar.html", function (response, status) {
      if (status === "error") console.error("Navbar failed to load.");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      renderPage();
      loadNavbar();
    });
  } else {
    renderPage();
    loadNavbar();
  }
})();
