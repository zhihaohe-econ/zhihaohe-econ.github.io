// ---------- Navbar titles
const enNavbarData = {
  title: " Zhihao He ",
  Home: "Home",
  publications: "Publications",
  cv: "CV",
  Jobs: "Jobs",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: "Zhihao He",
  jobTitle: "Ph.D. Candidate",
  home_title: "About me",
  home_content: `
  <div>
    <p>Hello, I'm Zhihao He (贺志浩), a PhD candidate jointly enrolled in the Department of Land and Real Estate Management at the School of Public Administration and Policy, Renmin University of China, and the Department of Economics and Finance at the College of Business, City University of Hong Kong.</p>
    <p>I am currently on the job market and expect to graduate in December 2026.</p>
    <h2 class="title">Research interests</h2>
    <p>Urban Economics; Real Estate Economics; Land Economics.</p>
    <h2 class="title">Research advisers</h2>
    <p>ZHANG Yuesong (RUC); LEUNG Ka Yui Charles (CityU HK).</p>
  </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Journal Papers",

  type_one_items: [
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
      replication: "https://doi.org/10.7910/DVN/7MZRIL",
      News: "https://www.cssn.cn/zzx/zzx_rdjj/202504/t20250404_5866949.shtml",
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
      journal: "Under Review",
      status: "",
      abstract: `This paper explores macroprudential policy implementation within a hierarchical government structure, focusing on the fiscal effects on local governments when the Chinese government restricts financing for real estate developers to address property market risks. Our difference-in-differences approach across Chinese prefecture-level cities provides causal evidence that financing constraints significantly elevate local government debt risk, driven by increased corporate bankruptcies and weakened land markets that reduce primary revenue sources. In response, local governments boost bond issuance, improve non-tax revenue collection, and collaborate with state-owned enterprises to stabilize land markets. Policy implications are also considered.`,
      presentations: [
        "HKU-CUHK Real Estate Doctoral Symposium",
      ],
      date: "2025",
      link: "",
      replication: "",
      writers: ["Zhihao He", "Ka Yui Charles Leung", "Qilin Zhang*"],
    },
    {
      title: `The Paradox of Fulfilled Preference: Son Preference and Subjective Well-being in China`,
      journal: "Journal of Happiness Studies",
      status: "Reject and Resubmit",
      abstract: `Does fulfilling a culturally prescribed preference improve subjective well-being (SWB)? This paper investigates a striking case in which the answer is no. Using the quasi-random assignment of firstborn gender and pooled data from four waves of the China Family Panel Studies (2016 to 2022), we estimate the causal effect of having a firstborn son on five dimensions of parental SWB and a composite SWB index, finding that fulfilling the culturally prescribed preference for sons significantly reduces parental SWB across multiple dimensions. This penalty is concentrated among mothers, rural residents, and parents with lower educational attainment, intensifies as firstborn children approach marriage age, and dissipates once they marry. Having a son delivers a genuine cultural psychological reward, but this benefit is progressively eroded by the housing obligations and labor supply intensification that son preference activates, with the resulting financial burden further amplified in counties with more imbalanced sex ratios where marriage-market competition is fiercer. These findings challenge the equation of revealed preference with experienced utility and illuminate the hidden SWB costs of cultural conformity.`,
      date: "2025",
      link: "",
      replication: "",
      writers: ["Zhihao He", "Yinghao Pan"],
    },
    {
      title: `Corruption Signals and Public Response: Experimental Evidence from China`,
      journal: "Public Administration and Development",
      status: "Revise and Resubmit",
      abstract: `Despite extensive transparency initiatives, a persistent gap exists between anti-corruption messaging and public accountability responses. This experimental study of 963 Chinese citizens examines how corruption information affects citizen willingness to engage in government oversight. Results reveal that direct corruption experiences significantly reduce accountability motivation, with passive bribery recipients showing strongest reluctance. Conversely, media coverage enhances citizen engagement, with data-driven reporting outperforming narrative approaches. Public service satisfaction moderates these relationships—satisfied citizens show reduced responsiveness to transparency initiatives. Paradoxically, both corruption experiences and anti-corruption media initially reduce government fairness perceptions while increasing accountability motivation. For practitioners, findings indicate anti-corruption communications should emphasize quantitative achievements over narratives, and transparency programs must address service delivery problems to maximize citizen oversight engagement.`,
      date: "2025",
      link: "",
      replication: "",
      writers: ["Guanyun Cui", "Xing Ni", "Hui Cui", "Zhihao He*"],
    },
  ],
  type_three_title: "Others",
};

// ---------- CV page data
const enCVPageData = {
  title: "Curriculum Vitae",
  download_text: "You can also download a PDF copy of my CV in",
  download_english_text: "English",
  download_chinese_text: "Chinese",
  download_english_link: "/files/resumee.pdf",
  download_chinese_link: "/files/resume.pdf",
  
  sections: [
    {
      title: "Education",
      items: [
        {
          degree: "Ph.D, Economics",
          institution: "College of Business, City University of Hong Kong",
          supervisor: "Prof. Charles Leung",
          date: "Sep. 2024 - Dec. 2026 (expected)",
        },
        {
          degree: "Ph.D, Land and Real Estate Management",
          institution: "School of Public Administration and Policy, Renmin University of China",
          supervisor: "Prof. Yuesong Zhang",
          date: "Sep. 2023 - Dec. 2026 (expected)",
        },
        {
          degree: "M.A., Economics",
          institution: "School of Economics, University of Chinese Academy of Social Science",
          date: "2020-2023",
        },
        {
          degree: "M.A., Economics",
          institution: "Institute of Investment Research, Academy of Macroeconomic Research (AMR), NDRC",
          supervisor: "Prof. Rongrong Ren",
          date: "2020-2023",
        },
        {
          degree: "B.S., Industrial Design",
          institution: "College of Agricultural Engineering and Food Science,  Shandong University of Technology",
          date: "2016-2020",
        },
        {
          degree: "B.A., Finance",
          institution: "School of Economics, Shandong University of Technology",
          date: "2017-2020",
        }
      ]
    },
    {
      title: "Teaching Experiences",
      items: [
        {
          role: "RA to Prof. Charles Leung",
          course: "City University of Hong Kong",
          date: "Nov.2025-Dec.2025"
        },   
        {
          role: "RA to Prof. Yinghao Pan",
          course: "Renmin University of China",
          date: "Sep.2023-Present"
        },   
        {
          role: "TA to Prof. Charles Leung",
          course: "Urban and Real Estate Economics",
          date: "Spring 2025"
        },
        {
          role: "TA to Prof. Yinghao Pan",
          course: "Advanced Econometrics",
          date: "Fall 2024"
        },
      ]
    },
    {
      title: "Professional Services",
      items: [
        {
          description: "Referee services for: Journal of Real Estate Finance and Economics, Journal of Real Estate Research, Pacific Economic Review, European Financial Management, Humanities & Social Sciences Communications, Scientific Reports"
        },
      ]
    },
    {
      title: "Awards",
      items: [
        "National Scholarship of the Ministry of Education, 2025",
        "Outstanding Graduates of Beijing, Outstanding Graduates of UCASS, 2023",
        "Best Paper, Lin Zengjie Land Science Development Fund, 2023",
        "First Prize, Outstanding Research of the Academy of Macroeconomic Research (NDRC), 2022",
      ]
    },
    {
      title: "Grants",
      items: [
        "Outstanding Innovative Talents Cultivation Funded Programs 2024 of Renmin University of China",
      ]
    },
    {
      title: "Skills",
      items: [
        "STATA, Python, LaTeX"
      ]
    },
    {
      title: "Languages",
      items: [
        "Chinese (native), English (fluent)"
      ]
    }
  ]
};
