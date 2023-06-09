import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  figma,
  vue,
  pinia,
  sass,
  express,
  soporte,
  henry,
  btp,
  gcf,
  pokemonStatic,
  rickAndMorty,
  spotifu,
  batataBit,
  calendar,
  countrySearch,
  ecommerce,
  inmobilApp,
  foodRecipes,
  triviaChallenge,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Vue 3",
    icon: vue,
  },
  {
    name: "Pinia",
    icon: pinia,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    id: "soporte",
    title: "IT Support Specialist",
    company_name: "Soporte S.A",
    icon: soporte,
    iconBg: "#2b122b",
  },
  {
    id: "henryTA",
    title:
      "[Academic] Bootcamp Assistant (TA) for Full-Stack Development students",
    company_name: "Henry",
    icon: henry,
    iconBg: "#000",
  },
  {
    id: "btp",
    title: "Full stack Developer",
    company_name: "BTP Aquaforjas",
    icon: btp,
    iconBg: "#123247",
  },
  {
    id: "gcf",
    title: "Frontend Developer",
    company_name: "GCF Aprende Libre",
    icon: gcf,
    iconBg: "#FFF",
  },
].reverse();

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    id: "pokemon",
    name: "Pokemon Static",
    tags: [
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "CanvasConfetti",
        color: "pink-text-gradient",
      },
    ],
    image: pokemonStatic,
    deploy_link: "https://pokemon-static-gold.vercel.app/",
    source_code_link: "https://github.com/babaquero07/pokemon-static-NextJS",
  },
  {
    id: "rick-and-morty",
    name: "Rick and Morty - Vanilla JS",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: rickAndMorty,
    deploy_link: "https://babaquero07.github.io/taller-unidad-1-2/home.html",
    source_code_link: "https://github.com/babaquero07/taller-unidad-1-2",
  },
  {
    id: "spotifu",
    name: "Spotifu",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "FlexBox",
        color: "pink-text-gradient",
      },
    ],
    image: spotifu,
    deploy_link: "https://babaquero07.github.io/Spotifu/",
    source_code_link: "https://github.com/babaquero07/Spotifu",
  },
  {
    id: "batata-bit",
    name: "BatataBit",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "BEM",
        color: "pink-text-gradient",
      },
    ],
    image: batataBit,
    deploy_link: "https://babaquero07.github.io/batata-bit/",
    source_code_link: "https://github.com/babaquero07/Spotifu",
  },
  {
    id: "calendar",
    name: "Calendar",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "GRID",
        color: "pink-text-gradient",
      },
    ],
    image: calendar,
    deploy_link: "https://babaquero07.github.io/calendario/",
    source_code_link: "https://github.com/babaquero07/calendario",
  },
  {
    id: "country-search",
    name: "Country Search",
    tags: [
      {
        name: "ApolloClient",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Graphql",
        color: "pink-text-gradient",
      },
    ],
    image: countrySearch,
    deploy_link: "https://kimchechallenge-umber.vercel.app",
    source_code_link: "https://github.com/babaquero07/kimchechallenge",
  },
  {
    id: "e-commerce",
    name: "E-commerce",
    tags: [
      {
        name: "Node Js",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "white",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "white",
      },
    ],
    image: ecommerce,
    deploy_link:
      "https://www.linkedin.com/posts/carla-faes_buenas-tardes-quiero-compartirles-el-video-ugcPost-6920831465534427136-VD5k?utm_source=share&utm_medium=member_desktop",
    source_code_link: "https://github.com/E-commerce-pf",
  },
  {
    id: "food-recipes",
    name: "Food Recipes",
    tags: [
      {
        name: "Node Js",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Sequelize",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "white",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "white",
      },
    ],
    image: foodRecipes,
    deploy_link: "https://food-recipes-one.vercel.app/",
    source_code_link: "https://github.com/InmobilApp",
  },
  {
    id: "inmobil-app",
    name: "InmobilApp",
    tags: [
      {
        name: "Node Js",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongoose",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "white",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "white",
      },
    ],
    image: inmobilApp,
    deploy_link: "https://inmobilapp.vercel.app/login",
    source_code_link: "https://github.com/InmobilApp",
  },
  {
    id: "trivia-challenge",
    name: "Trivia Challenge",
    tags: [
      {
        name: "Node Js",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongoose",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "white",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "white",
      },
    ],
    image: triviaChallenge,
    deploy_link: "https://trivia-challenge-ten.vercel.app/",
    source_code_link: "https://github.com/babaquero07/trivia-challenge-client",
  },
];

export { services, technologies, experiences, testimonials, projects };
