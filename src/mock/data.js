import { nanoid } from 'nanoid';

const name = 'Avinash Pipliya';
// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: `Hi, my name is ${name}, l am the ReactJS Developer.`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name,
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    '👦 Senior Full Stack Developer specializes in JavaScript frameworks (Reactjs, Nextjs, Node, Express).',
  paragraphTwo: [
    '💻 Technical Summary',
    '⌾ Front End — React.js, React Hooks, React hook forms, Material-ui, ag-Grids, Redux, React-Native, React-SSR, Isomorphic react app, NextJS, Gatsby, Angular, TypeScript, JavaScript (ES6, ES7), HTML5, CSS3, SASS, Ant design, Responsive Web Development',
    '⌾ Back End — Node.js, Express.js, GoLang, GraphQL, Mongoose, Spring Boot, MVC.Net and PHP',
    '⌾ Databases — MySQL, MongoDB and Sql Server',
    '⌾ Additional Skills — Git, Bitbucket, JIRA, AWS, Docker, kubernetes, Lodash, Ramda, jQuery, Jest, Enzyme, React Testing Library',
  ],
  paragraphThree: '',

  paragraphFour: [
    ' 👀 Also interested in:',
    '- Digital Marketing, SEO, Entrepreneurship, UX Planning and Designing, Web Security',
  ],

  paragraphFive: [
    ' 🧲 My drive towards reinforced learning & continuous improvement has led me to work on side projects with peers/friends',
    '⌾ Tamannaa — https://tamannaa.herokuapp.com/ ',
    '⌾ Camion — https://camion.app/entity/user ',
    '⌾ RBC — https://www.rbcautovantage.com/ ',
  ],

  resume: 'https://drive.google.com/file/d/14XTiJkGDoSXXJceObvJqVctAtRs5fcPZ/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tammana.png',
    title: 'Tammana',
    info: 'Tammana is platform to connect helper and requester',
    info2: '',
    url: 'https://tamannaa.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'camion.png',
    title: 'Camion',
    info: "Camion is Drives's application for tracking the driver and fleet.",
    info2: '',
    url: 'https://camion.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cerebrum.png',
    title: 'Iot Cerebrum',
    info: 'Hub platform to track and monitor the devices information',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
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
  email: 'avinashpipliya@gmail.com',
  paragraphOne: "✔ Let's Connect ► ✉ : avinashpipliya@gmail.com",
  phone1: '+971-585096441',
  phone2: '+91-8962383130',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/avinash-pipliya',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/avinashpipliyacode',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
