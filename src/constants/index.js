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
 
  verbum,
  daba,
  everest,
  esthub,
 
  threejs,
  clothMe,
  astha,
  cryptocapitial,
  cwito,
  datafest,
  everestMobility,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Career",
    title: "Career",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "blog",
    title: "Blog",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Content Writer",
    icon: backend,
  },
  {
    title: "Blockchain Enthusiat",
    icon: creator,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Verbum Networks Limited",
    icon: verbum,
    iconBg: "#383E56",
    date: "August 2022 - August 2023",
    points: [
      "Creating web applications using HTML, CSS, Javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Frontend Developer",
    company_name: "Everest",
    icon: everest,
    iconBg: "#E6DEDD",
    date: "May 2023 ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Web Developer",
    company_name: "esthub",
    icon: esthub,
    iconBg: "#383E56",
    date: "August 2023 - Dec 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Nextjs Developer",
    company_name: "daba",
    icon: daba,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
];

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
    name: "Astha Website",
    description:
      "A charity focused website that focuses on helping widows and orphans be the most that they can be",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: astha,
    live_link: "https://astha-theta.vercel.app/",
    source_code_link: "https://github.com/juverasworld/Astha/",
  },
  {
    name: "Cloth Me",
    description:
      "A clothing animation website that allows users to customize the design of their cloth and the logo the cloth could have so that they go ahead and just print out that style",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: clothMe,
    live_link: "animation-learning.vercel.app",
    source_code_link: "https://github.com/juverasworld/AnimationLearning/",
  },
  {
    name: "C.hub",
    description:
      "A mini website to show an easy way to save and invest in crypto  currency to encourage cryptocurrency trading",
    tags: [
      {
        name: "Chakara UI",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: cryptocapitial,
    live_link:"https://crypto-capitial.vercel.app/",
    source_code_link: "https://github.com/juverasworld/C.HUB",
  },
  {
    name: "Information Website",
    description:
      "An information website about all you need to know about Datafest summit, starting from how to register for the event to how to volunteer for the event ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "animate on scroll",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: datafest,
    live_link:"https://dsunnsumit-juverasworld.vercel.app/",
    source_code_link: "https://github.com/juverasworld/dsunnsumit",
  },
  {
    name: "Cwito Website",
    description:
      "A Crypto website  that ensures effortless conversion of your cryptocurrencies into naira instantly..",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cwito,
    live_link: "https://staging.cwito.com/",
    source_code_link: "https://github.com/Digital-Abundance-Ltd/cwito-landing",
  },
 
  {
    name: "Everest mobility",
    description:
      "An Online mobility platform for people to ride and earn and have the benefit of  earning  cryptocurrencies.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: everestMobility,
    live_link: "https://vercel.com/juverasworld/everest/55SeDScEYgPWcAWzq1JEpNPx5eWn",
    source_code_link: "https://github.com/juverasworld/Everest",
  },

];

export { services, technologies, experiences, testimonials, projects };
