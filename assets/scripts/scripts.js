var pathname = window.location.pathname.replace(".html", "");

$(document).ready(function () {
  // 当前语言：默认英文，可通过导航栏的语言切换按钮切换为中文并保存在 localStorage 中
  var currentLang = localStorage.getItem("lang") || "en";

  // 网站目前为从左到右排版（中英文均适用）
  document.getElementById("content_wrapper").classList.add("ltr_wrapper");

  // Home page data
  const activeHomePageData = currentLang === "zh" ? zhHomePageData : enHomePageData;

  const home_data = {
    image: globalData.image,
    links: [
      {
        name: globalData.whatsapp,
        active: globalData.whatsapp ? true : false,
        img: "../assets/images/icons/whatsapp.png",
      },
      {
        name: globalData.twitter,
        active: globalData.twitter ? true : false,
        img: "../assets/images/icons/twitter.png",
      },
      {
        name: globalData.linkedin,
        active: globalData.linkedin ? true : false,
        img: "../assets/images/icons/linkedin.png",
      },
      {
        name: globalData.github,
        active: globalData.github ? true : false,
        url: "/",
        img: "../assets/images/icons/github.png",
      },
      {
        name: globalData.resume,
        active: globalData.resume ? true : false,
        url: "/",
        img: "../assets/images/icons/resume.png",
      },
    ],
  };

  function homeData() {
    document.getElementById("page_title").innerText = activeHomePageData.name;

    document.getElementById("home_image").src = home_data.image
      ? home_data.image
      : "";
    document.getElementById("home_name").innerText = activeHomePageData.name;
    document.getElementById("home_job_title").innerText = activeHomePageData.jobTitle;
    document.getElementById("home_links").innerHTML = home_data.links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li>
              <a href=${link.name} target='_blank'><img src=${link.img} alt=${link.name} /> </a>
            </li>`
      )
      .join("");

    document.getElementById("home_title").innerText = activeHomePageData.home_title;
    document.getElementById("home_content").innerHTML = activeHomePageData.home_content;
  }

  if (pathname === "/" || pathname === "/index") {
    homeData();
  }

  // Publications page data
  const replicationLabel = currentLang === "zh" ? "复制数据" : "Replication";
  const newsLabel = currentLang === "zh" ? "相关报道" : "News";

  const setPublicationData = (id, data) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = (data || [])
      .map((publication) => {
        const footerItems = [
          publication.replication
            ? `<li><a href=${publication.replication} target="_blank">${replicationLabel}</a></li>`
            : "",
          publication.News
            ? `<li><a href=${publication.News} target="_blank">${newsLabel}</a></li>`
            : "",
        ]
          .filter(Boolean)
          .join("");

        return `
        <div class='publications_item'>
        <div class='publications_header'>
          ${
            publication.writers.length > 0
              ? publication.writers
                  .map((writer) => `<span>${writer}</span>`)
                  .join(", ")
              : ""
          }
          ${publication.date ? `<span>(${publication.date}).</span>` : ""}
          <h2>${publication.title}</h2>
          ${
            publication.journal
              ? `<p class='publication_journal'><em>${
                  publication.link
                    ? `<a href=${publication.link} target="_blank">${publication.journal}</a>`
                    : publication.journal
                }</em>${publication.status ? `, ${publication.status}` : ""}</p>`
              : ""
          }
          ${
            publication.presentations && publication.presentations.length > 0
              ? `<p class='publication_presentations'><strong>Selected Presentations:</strong> ${publication.presentations.join(
                  "; "
                )}</p>`
              : ""
          }
        </div>
        <p>${publication.abstract || ""}</p>
        ${footerItems ? `<ul class='publications_footer'>${footerItems}</ul>` : ""}
      </div>
     `;
      })
      .join("");
  };

  function publicationsData() {
    const activePublicationsPageData =
      currentLang === "zh" ? zhPublicationsPageData : enPublicationsPageData;

    document.getElementById("page_title").innerText =
      activePublicationsPageData.type_one_title || "Publications";

    const sections = [
      {
        titleId: "publications_type_one_title",
        dataId: "publications_type_one_data",
        title: activePublicationsPageData.type_one_title,
        items: activePublicationsPageData.type_one_items,
      },
      {
        titleId: "publications_type_two_title",
        dataId: "publications_type_two_data",
        title: activePublicationsPageData.type_two_title,
        items: activePublicationsPageData.type_two_items,
      },
      {
        titleId: "publications_type_three_title",
        dataId: "publications_type_three_data",
        title: activePublicationsPageData.type_three_title,
        items: activePublicationsPageData.type_three_items,
      },
      {
        titleId: "publications_type_four_title",
        dataId: "publications_type_four_data",
        title: activePublicationsPageData.type_four_title,
        items: activePublicationsPageData.type_four_items,
      },
    ];

    sections.forEach((section) => {
      const titleEl = document.getElementById(section.titleId);
      const hasItems = section.items && section.items.length > 0;
      if (titleEl) {
        titleEl.innerHTML = hasItems ? section.title || "" : "";
      }
      setPublicationData(section.dataId, hasItems ? section.items : []);
    });
  }

  if (pathname === "/publications") {
    publicationsData();
  }

  // Jobs page data
  function jobsData() {
    const activeJobsPageData = currentLang === "zh" && typeof zhJobsPageData !== "undefined" ? zhJobsPageData : enJobsPageData;

    document.getElementById("page_title").innerText = "Jobs";

    document.getElementById("jobs_title").innerHTML = activeJobsPageData.title;

    document.getElementById("jobs_data").innerHTML = activeJobsPageData.items
      .map(
        (job) =>
          `<div class='job_item'>
            <div class='job_header'>
              <div>
                <h1>${job.title},</h1>
                <h2> ${job.company}</h2>
              </div>
              <div>
                <span>${job.startData} - ${job.endDate ? job.endDate : "Now"}</span>
                <span class='job_location'>${job.location}</span>
              </div>
            </div>
            <p>${job.abstract}</p>
            ${
              job.achievements.length > 0
                ? `<div class="job_achievements">
                  <ul>
                    ${job.achievements
                      .map((achievement) => `<li>${achievement}</li>`)
                      .join("")}
                  </ul>
                </div>`
                : ""
            }
        </div>`
      )
      .join("");
  }

  if (pathname === "/jobs") {
    jobsData();
  }

  // Contact page data
  const contact_data = {
    contact_title: currentLang === "zh" ? "联系方式" : "Contact",
    contact_items: [
      {
        img: "../assets/images/icons/location.png",
        title: globalData.enAddress,
        active: globalData.enAddress ? true : false,
      },
      {
        img: "../assets/images/icons/phone.png",
        title: globalData.phone,
        active: globalData.phone ? true : false,
      },
      {
        img: "../assets/images/icons/mail.png",
        title: globalData.email,
        active: globalData.email ? true : false,
      },
      {
        img: "../assets/images/icons/twitter.png",
        url: globalData.twitter,
        name: globalData.twitterTitle,
        active: globalData.twitter ? true : false,
      },
      {
        img: "../assets/images/icons/whatsapp.png",
        url: globalData.whatsapp,
        name: globalData.whatsappTitle,
        active: globalData.whatsapp ? true : false,
      },
      {
        img: "../assets/images/icons/google-scholar.png",
        url: globalData.googleScholar,
        name: globalData.googleScholarTitle,
        active: globalData.googleScholar ? true : false,
      },
      {
        img: "../assets/images/icons/orcid.png",
        url: globalData.orcid,
        name: globalData.orcidTitle,
        active: globalData.orcid ? true : false,
      },
      {
        img: "../assets/images/icons/github.png",
        url: globalData.github,
        name: globalData.githubTitle,
        active: globalData.github ? true : false,
      },
      {
        img: "../assets/images/icons/linkedin.png",
        url: globalData.linkedin,
        name: globalData.linkedinTitle,
        active: globalData.linkedin ? true : false,
      },
    ],
  };

  function contactData() {
    const activeCVPageData = currentLang === "zh" ? zhCVPageData : enCVPageData;

    document.getElementById("page_title").innerHTML =
      contact_data.contact_title;
    document.getElementById("contact_title").innerHTML =
      contact_data.contact_title;
    document.getElementById("contact_data").innerHTML =
      contact_data.contact_items
        .filter((item) => item.active)
        .map(
          (link) =>
            `<li>
              <img src=${link.img} alt=${link.title} /> 
              ${
                link.url
                  ? `<a href=${link.url} target='_blank'>
                      ${link.name ? link.name : link.url} 
                    </a>`
                  : `<p>${link.title}</p>`
              }
            </li>`
        )
        .join("");

    const cvDownloadEl = document.getElementById("contact_cv_download");
    if (cvDownloadEl) {
      cvDownloadEl.innerHTML = "";
    }

    const contactDataEl = document.getElementById("contact_data");
    if (contactDataEl && activeCVPageData && activeCVPageData.download_text) {
      contactDataEl.insertAdjacentHTML(
        "beforeend",
        `<li>
          <img src="../assets/images/icons/cv.png" alt="CV" />
          <p>
            ${activeCVPageData.download_text} 
            <a href="${activeCVPageData.download_english_link}" target="_blank">${activeCVPageData.download_english_text}</a> 
            ${activeCVPageData.download_join_text || "or in"} 
            <a href="${activeCVPageData.download_chinese_link}" target="_blank">${activeCVPageData.download_chinese_text}</a>.
          </p>
        </li>`
      );
    }
  }

  if (pathname === "/contact") {
    contactData();
  }
});
