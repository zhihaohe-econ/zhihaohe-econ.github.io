// ============================================================
//  网站内容配置（唯一需要修改的文件）
//  Website content configuration (the ONLY file you normally
//  need to edit).
//
//  以后要改简历、论文、联系方式、个人简介等内容，都在这一个文件里改，
//  不用再去别的文件找。程序逻辑（assets/scripts/scripts.js、
//  data/navbar.js）不需要跟着改。
// ============================================================


// ------------------------------------------------------------
// 1. 全局设置 General settings
//    - navbarLinks：控制导航栏显示哪些页面（true=显示，false=隐藏）
//    - globalData：头像、地址、电话、邮箱、Google Scholar、Orcid 等
// ------------------------------------------------------------
const navbarLinks = {
  home: true,
  publications: true,
  cv: false, // CV 页面已删除，下载按钮已移到 Contact 页面，这里保持 false
  jobs: false, // 没有 jobs.html，保持 false
  contact: true,
};

const globalData = {
  image: "/files/profile.jpg",
  enAddress: "Beijing; Hong Kong",
  zhAddress: "北京；香港",
  phone: "+86 18811209280",
  email: "hezhihao@ruc.edu.cn; zhihao.he@my.cityu.edu.hk",
  googleScholarTitle: "Google Scholar",
  googleScholar: "https://scholar.google.com/citations?user=ixFT8ZQAAAAJ&hl=en",
  orcidTitle: "Orcid",
  orcid: "https://orcid.org/0009-0008-2695-137X",
};


// ------------------------------------------------------------
// 2. 英文内容 English content
// ------------------------------------------------------------

// ---------- 导航栏 Navbar titles
const enNavbarData = {
  title: " Zhihao He ",
  Home: "Home",
  publications: "Publications",
  cv: "CV",
  Jobs: "Jobs",
  Contact: "Contact",
};

// ---------- 首页 Home page data
const enHomePageData = {
  name: "Zhihao He",
  jobTitle: "Ph.D. Candidate",
  home_title: "About me",
  home_content: `
  <div>
    <p>Hello, I'm Zhihao He (贺志浩), a PhD candidate jointly enrolled in the Department of Land and Real Estate Management at the School of Public Administration and Policy, Renmin University of China, and the Department of Economics and Finance at the College of Business, City University of Hong Kong.</p>
    <p>I am currently on the job market and expect to graduate in Jun 2027.</p>
    <h2 class="title">Research interests</h2>
    <p>Urban Economics; Real Estate Economics; Land Economics.</p>
  </div>
  `,
};

// ---------- 论文发表 Publications page data
// 这份是英文界面专用的数据，跟下面的中文界面数据完全独立维护，互不影响。
const enPublicationsPageData = {
  type_one_title: "Journal Papers",
  type_one_items: [
    {
      title: `When Policies Complement: Low-Carbon and Digital Infrastructure Pilots in China`,
      journal: "Environmental and Sustainability Indicators",
      status: "",
      date: "2026",
      link: "https://doi.org/10.1016/j.indic.2026.101448",
      replication: "",
      writers: ["Sishu Zhou", "Yinhong Guo", "Anteneh Bizualem Asefa*", "Zhihao He*"],
    },
    {
      title: `Smart Governance as a Driver of Institutional Efficiency: Evidence from Urban Business Environment Performance`,
      journal: "International Review of Economics and Finance",
      status: "",
      date: "2026",
      link: "https://doi.org/10.1016/j.iref.2026.105607",
      replication: "",
      writers: ["Sishu Zhou", "Zhihao He*", "Lu Song*"],
    },
    {
      title: `Does Industrial Land Bias Crowd Out Social Public Services? Evidence from China`,
      journal: "Land Use Policy",
      status: "",
      date: "2026",
      link: "https://doi.org/10.1016/j.landusepol.2026.108232",
      replication: "",
      writers: ["Zekun Fan", "Zhihao He", "Weidong Qu*"],
    },
    {
      title: `When Land Expropriation Increases Income: Evidence from China's Structural Transformation`,
      journal: "Journal of Development Studies",
      status: "",
      date: "2026",
      link: "https://doi.org/10.1080/00220388.2026.2671779",
      replication: "",
      writers: ["Zhihao He", "Yinghao Pan*"],
    },
    {
      title: `A Dataset of the Smart Governance Index for Chinese Cities`,
      journal: "Scientific Data",
      status: "",
      date: "2026",
      link: "https://www.nature.com/articles/s41597-025-06510-7",
      replication: "",
      writers: ["Lu Song", "Zhihao He", "Yinghao Pan", "Haijun Yue*"],
    },
    {
      title: `Sex Imbalances of Children and Housing Demand: Evidence from China`,
      journal: "Cities",
      status: "",
      date: "2025",
      link: "https://www.sciencedirect.com/science/article/pii/S026427512500469X?via%3Dihub",
      replication: "",
      writers: ["Zhihao He", "Yuesong Zhang", "Xueqiang Ji", "Yinghao Pan*"],
    },
    {
      title: `From cost to creativity: Tracing the impact of housing affordability on innovation and entrepreneurship in urban China`,
      journal: "Habitat International",
      status: "",
      date: "2025",
      link: "https://www.sciencedirect.com/science/article/pii/S0197397525000980?via%3Dihub",
      replication: "",
      writers: ["Zhihao He", "Zhuoqun Li*", "Guanyun Cui", "Ziyan Xu"],
    },
    {
      title: `Bequest motives in the housing wealth effect: A new perspective from China`,
      journal: "Cities",
      status: "",
      date: "2024",
      link: "https://www.sciencedirect.com/science/article/pii/S0264275123005838?via%3Dihub",
      replication: "",
      writers: ["Zhihao He", "Qilin Zhang", "Yinghao Pan*"],
    },
  ],

  type_two_title: "Working Papers",
  type_two_items: [
    {
      title: `Macroprudential Policies Under Fiscal Federalism? Evidence from China`,
      journal: "",
      status: "Under Review",
      abstract: `This paper explores macroprudential policy implementation within a hierarchical government structure, focusing on the fiscal effects on local governments when the Chinese government restricts financing for real estate developers to address property market risks. Our difference-in-differences approach across Chinese prefecture-level cities provides causal evidence that financing constraints significantly elevate local government debt risk, driven by increased corporate bankruptcies and weakened land markets that reduce primary revenue sources. In response, local governments boost bond issuance, improve non-tax revenue collection, and collaborate with state-owned enterprises to stabilize land markets. Policy implications are also considered.`,
      presentations: ["HKU-CUHK Real Estate Doctoral Symposium"],
      date: "2025",
      link: "",
      replication: "",
      writers: ["Zhihao He", "Ka Yui Charles Leung", "Qilin Zhang*"],
    },
  ],

  // 英文界面不需要"中文论文"栏目，所以第三栏留空（不会显示）。
  type_three_title: "Others",
};

// ---------- 简历 CV page data (used on the Contact page)
const enCVPageData = {
  title: "Curriculum Vitae",
  download_text: "CV in",
  download_join_text: "or in",
  download_english_text: "English",
  download_chinese_text: "Chinese",
  download_english_link: "/files/resumee.pdf",
  download_chinese_link: "/files/resume.pdf",

};


// ------------------------------------------------------------
// 3. 中文内容 Chinese content
// ------------------------------------------------------------

// ---------- 导航栏 Navbar titles
const zhNavbarData = {
  title: " 贺志浩 ",
  Home: "首页",
  publications: "论文发表",
  cv: "简历",
  Jobs: "求职信息",
  Contact: "联系方式",
};

// ---------- 首页 Home page data
const zhHomePageData = {
  name: "贺志浩",
  jobTitle: "博士研究生",
  home_title: "个人简介",
  home_content: `
  <div>
    <p>您好，我是贺志浩，中国人民大学公共管理学院土地与房地产管理系与香港城市大学商学院经济及金融系联合培养的博士研究生。</p>
    <p>我目前正在求职中，预计于2027年6月毕业。</p>
    <h2 class="title">研究方向</h2>
    <p>城市经济学；房地产经济学；土地经济学。</p>
  </div>
  `,
};

// ---------- 论文发表 Publications page data
// 中文界面的论文列表跟英文界面完全独立维护：这里是单独的一份数据，
// 增加、删除、修改论文都只会影响中文界面，不会影响英文界面（反之亦然）。
// 论文标题、期刊名称按学术惯例保留英文原文即可，不需要翻译。
const zhPublicationsPageData = {
  type_one_title: "期刊论文",
  type_one_items: [
    {
      title: `When Policies Complement: Low-Carbon and Digital Infrastructure Pilots in China`,
      journal: "Environmental and Sustainability Indicators",
      status: "",
      date: "2026",
      link: "https://doi.org/10.1016/j.indic.2026.101448",
      replication: "",
      writers: ["Sishu Zhou", "Yinhong Guo", "Anteneh Bizualem Asefa*", "Zhihao He*"],
    },
    {
      title: `Smart Governance as a Driver of Institutional Efficiency: Evidence from Urban Business Environment Performance`,
      journal: "International Review of Economics and Finance",
      status: "",
      date: "2026",
      link: "https://doi.org/10.1016/j.iref.2026.105607",
      replication: "",
      writers: ["Sishu Zhou", "Zhihao He*", "Lu Song*"],
    },
    {
      title: `Does Industrial Land Bias Crowd Out Social Public Services? Evidence from China`,
      journal: "Land Use Policy",
      status: "",
      date: "2026",
      link: "https://doi.org/10.1016/j.landusepol.2026.108232",
      replication: "",
      writers: ["Zekun Fan", "Zhihao He", "Weidong Qu*"],
    },
    {
      title: `When Land Expropriation Increases Income: Evidence from China's Structural Transformation`,
      journal: "Journal of Development Studies",
      status: "",
      date: "2026",
      link: "https://doi.org/10.1080/00220388.2026.2671779",
      replication: "",
      writers: ["Zhihao He", "Yinghao Pan*"],
    },
    {
      title: `A Dataset of the Smart Governance Index for Chinese Cities`,
      journal: "Scientific Data",
      status: "",
      date: "2026",
      link: "https://www.nature.com/articles/s41597-025-06510-7",
      replication: "",
      writers: ["Lu Song", "Zhihao He", "Yinghao Pan", "Haijun Yue*"],
    },
    {
      title: `Sex Imbalances of Children and Housing Demand: Evidence from China`,
      journal: "Cities",
      status: "",
      date: "2025",
      link: "https://www.sciencedirect.com/science/article/pii/S026427512500469X?via%3Dihub",
      replication: "",
      writers: ["Zhihao He", "Yuesong Zhang", "Xueqiang Ji", "Yinghao Pan*"],
    },
    {
      title: `From cost to creativity: Tracing the impact of housing affordability on innovation and entrepreneurship in urban China`,
      journal: "Habitat International",
      status: "",
      date: "2025",
      link: "https://www.sciencedirect.com/science/article/pii/S0197397525000980?via%3Dihub",
      replication: "",
      writers: ["Zhihao He", "Zhuoqun Li*", "Guanyun Cui", "Ziyan Xu"],
    },
    {
      title: `Bequest motives in the housing wealth effect: A new perspective from China`,
      journal: "Cities",
      status: "",
      date: "2024",
      link: "https://www.sciencedirect.com/science/article/pii/S0264275123005838?via%3Dihub",
      replication: "",
      writers: ["Zhihao He", "Qilin Zhang", "Yinghao Pan*"],
    },
  ],

  type_two_title: "工作论文",
  type_two_items: [
    {
      title: `Macroprudential Policies Under Fiscal Federalism? Evidence from China`,
      journal: "",
      status: "Under Review",
      abstract: `This paper explores macroprudential policy implementation within a hierarchical government structure, focusing on the fiscal effects on local governments when the Chinese government restricts financing for real estate developers to address property market risks. Our difference-in-differences approach across Chinese prefecture-level cities provides causal evidence that financing constraints significantly elevate local government debt risk, driven by increased corporate bankruptcies and weakened land markets that reduce primary revenue sources. In response, local governments boost bond issuance, improve non-tax revenue collection, and collaborate with state-owned enterprises to stabilize land markets. Policy implications are also considered.`,
      presentations: ["HKU-CUHK Real Estate Doctoral Symposium"],
      date: "2025",
      link: "",
      replication: "",
      writers: ["Zhihao He", "Ka Yui Charles Leung", "Qilin Zhang*"],
    },
  ],

  // 中文论文栏目：只在中文界面显示，英文界面不会出现。
  // 请把下面的示例条目替换成你真实的中文论文信息，需要几篇就复制几份 { ... } 结构。
  type_three_title: "中文论文",
  type_three_items: [
    {
      title: `智慧治理水平对城市空气污染的影响及作用机制`,
      journal: "中国环境科学",
      status: "",
      date: "2026",
      link: "",
      replication: "",
      writers: ["贺志浩", "宋鹭", "殷赏"],
    },
    {
      title: `省域新质生产力发展水平测度、时空特征及其影响因素`,
      journal: "经济地理",
      status: "",
      date: "2026",
      link: "",
      replication: "",
      writers: ["吉雪强", "贺志浩", "李卓群", "张跃松"],
    },
    {
      title: `城市收入租金比如何驱动创新创业`,
      journal: "山西财经大学学报",
      status: "",
      date: "2026",
      link: "",
      replication: "",
      writers: ["李卓群", "贺志浩", "张跃松"],
    },
  ],
};

// ---------- 简历 CV page data (Contact 页面上的下载按钮用)
const zhCVPageData = {
  title: "个人简历",
  download_text: "简历",
  download_join_text: "或",
  download_english_text: "英文版",
  download_chinese_text: "中文版",
  download_english_link: "/files/resumee.pdf",
  download_chinese_link: "/files/resume.pdf",

};
