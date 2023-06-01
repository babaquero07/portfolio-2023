import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
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
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "IT Support Specialist",
    company_name: "Soporte S.A",
    icon: soporte,
    iconBg: "#2b122b",
    date: "August 2020 - February 2021",
    points: [
      "Coca-Cola FEMSA project.",
      "Addressing customer support inquiries.",
      "Managing software and technical support tools.",
      "Performing preventive and corrective maintenance of computer equipment.",
      "Escalating inquiries to the appropriate support channel.",
      "Diagnosing and resolving customer issues.",
      "Staying up-to-date on company products and services.",
    ],
  },
  {
    title:
      "[Academic] Bootcamp Assistant (TA) for Full-Stack Development students",
    company_name: "Henry",
    icon: henry,
    iconBg: "#000",
    date: "January 2022 - March 2022",
    points: [
      "Coordinating a group of students to achieve integration within the study group.",
      "Guiding students in their initial steps of the course.",
      "Assisting in exercise resolution and promoting group collaboration (Pair Programming).",
      "Proposing ideas for improving Bootcamp processes.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "BTP Aquaforjas",
    icon: btp,
    iconBg: "#123247",
    date: "April 2022 - May 2022",
    points: [
      "Developing and maintaining web applications using Next.js, Python, fastAPI, MongoDB and other related technologies.",
      "Maintenance of analytical software.",
      "Creating new functionalities based on client requirements.",
      "Proposing software improvement ideas.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "GCF Aprende Libre",
    icon: gcf,
    iconBg: "#FFF",
    date: "June 2022 - Present",
    points: [
      "Design and development of web applications: Working on the creation of web applications using tools such as HTML, CSS, JavaScript, and other programming technologies.",
      "Implementation of servers and APIs: Creating servers and APIs using technologies such as Node.js and Express to enable web applications to communicate with databases and other services",
      "Testing and debugging of applications: Identifying and fixing errors and issues in the developed applications.",
      "Collaboration with other members of the development team: Working together with other developers, designers, and technology professionals to complete projects and achieve common goals.",
    ],
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
    name: "Pokemon Static",
    description:
      "Static web application which provides users with a dynamic experience centered around a vast collection of Pokémon. Allows users to explore and engage with numerous Pokémon, enabling them to save their favorite creatures and delve into comprehensive details about each individual Pokémon's attributes and characteristics",
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
    name: "Rick and Morty - Vanilla JS",
    description:
      "The project connects with Rick and Morty API and retrieve information about 150 characters. Allows the user interact with the API-provided information by applying filters for gender, status, and species. Additionally, the project includes a page for users to add, edit, and delete comments.",
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
    name: "Spotifu",
    description:
      "Exact clone of Spotify web interface. The whole project will be adapted only by changing one font size. Made with modern layout techniques and 100% accessible.",
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
    name: "BatataBit",
    description:
      "Project developed in the Mobile First course at Platzi, which emphasizes the implementation of the BEM methodology for CSS.",
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
    name: "Calendar",
    description: "Clone of Google Calendar web interface.",
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
    deploy_link: "https://babaquero07.github.io/batata-bit/",
    source_code_link: "https://github.com/babaquero07/Spotifu",
  },
  {
    name: "Country Search",
    description:
      "Interactive experience where users can search for and explore detailed information about countries, utilizing modern technologies such as Apollo Client, React, and GraphQL to achieve a smooth and efficient user interface.",
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
    deploy_link: "http://kimchechallenge-umber.vercel.app/",
    source_code_link: "https://github.com/babaquero07/kimchechallenge",
  },
  {
    name: "E-commerce",
    description:
      "Group's bootcamp final project showcases our proficiency in a wide range of technologies, demonstrating our ability to build a fully functional eCommerce platform. With features such as payment integration, product reviews, a chatbot, and an admin panel, our platform provides a seamless and intuitive shopping experience for users while offering convenient management tools for administrators.",
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
    name: "Food Recipes",
    description:
      "User-friendly interface for exploring, discovering, and creating food recipes. With the integration of the spoonacular API, users have access to a vast collection of recipes along with relevant details. Whether searching for specific recipes, filtering and sorting results, or creating personal recipes, the application provides a seamless and engaging experience for food enthusiasts and home cooks alike.",
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
    name: "InmobilApp",
    description:
      "Group's bootcamp final project. With features such as payment integration, product reviews, and an admin panel, our platform provides a seamless and intuitive shopping experience for users while offering convenient management tools for administrators.",
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
    name: "Trivia Challenge",
    description: "FullStack [MERN] technical test. ",
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
