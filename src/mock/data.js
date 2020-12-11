import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Avinash Pipliya',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    '👦A Full Stack Developer who specializes in JavaScript Technologies across the whole stack (React, Angular, React Native, Vue, Node, Express). Plunging into JavaScript ecosystem',
  paragraphTwo:
    '💻 Technical Summary' +
    '⌾ Front End — React.js, Vue.js, Redux, React-Native, Angular, TypeScript, JavaScript (ES6, ES7), HTML5, CSS3, SASS' +
    '⌾ Back End — Node.js, Express.js, GraphQL, Spring Boot, MVC.Net and PHP' +
    '⌾ Databases — MySQL, MongoDB and Sql Server' +
    '⌾ Additional Skills — Rest APIs, Twitter Bootstrap, Material UI, Responsive Development, Git, Bitbucket, JIRA, AWS, Lodash, Ramda, jQuery, Jest/Enzyme, React Testing Library',
  paragraphThree: "✔ Let's Connect ► ✉ : avinashpipliya@gmail.com , 📞 : +91- 8962383130'",

  paragraphFour:
    ' 👀 Also interested in:' +
    '- Digital Marketing, SEO, Entrepreneurship, UX Planning and Designing, Web Security',

  paragraphFive:
    ' 🧲 My drive towards reinforced learning & continuous improvement has led me to work on side projects with peers/friends' +
    '⌾ tamannaa — https://tamannaa.herokuapp.com/ ',

  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cvlite.jpg',
    title: 'HSBC - CVLite',
    info:
      "CVlite is banker's application for documenting and logging business for relationship managers and regional relationship managers.",
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Scotiabank.jpg',
    title: 'Scotia Flex',
    info:
      'Scotia flex is car leasing platform to search and choose a car, see its price and book the car. It also have dealer portal for dealerships to add, update and manage inventories.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rbc.png',
    title: 'RBC Autovantage',
    info:
      'The Platform can be used to view consolidated credit application information, upload loan documentation, receive RBC loan payout information, including application status change information',
    info2: '',
    url: 'https://www.rbcautovantage.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'constructconnet.png',
    title: 'iSqFt – Construct Connect',
    info:
      'iSqFt is online construction software to find commercial construction leads, build relations sell more, control the bid management process.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Polaris.png',
    title: 'Polaris – GMS',
    info:
      'GMS is based on healthcare organization, which cover the complete cycle from request to delivery phase of any drug',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
