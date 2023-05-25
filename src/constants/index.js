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
  docker,
  soporte,
  henry,
  btp,
  gcf,
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
    name: "Node JS",
    icon: nodejs,
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
  {
    name: "docker",
    icon: docker,
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
