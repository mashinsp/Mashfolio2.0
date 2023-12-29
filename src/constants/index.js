import {
  backend,
  mobile,
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
  threejs,
  upworklogo,
  tfglogo,
  nftmarketplace,
  mashupsocial,
  renderer
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Cloud Architect",
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
    name: "Tailwind CSS",
    icon: tailwind,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Developer",
    company_name: "Upwork",
    icon: upworklogo,
    iconBg: "#383E56",
    date: "March 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Tech for good inc",
    icon: tfglogo,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Collaborated with a team of developers and designers to develop and launch a new software product focused on social impact and sustainability.",
      "Conducted market research and analysis to identify user needs and optimize the software product for success.",
      "Assisted in the creation of user personas and user stories, ensuring a user-centered approach to software development.",
      "Participated in agile development practices, including daily stand-up meetings, sprint planning, and retrospectives.",
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
    name: "NFT Marketplace",
    description:
      "An NFT marketplace is an online platform that facilitates the buying, selling, and trading of unique digital assets known as non-fungible tokens (NFTs).",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Piniata(IPFS)",
        color: "pink-text-gradient",
      },
    ],
    image: nftmarketplace,
    source_code_link: "https://github.com/mashinsp/NFT-Marketplace",
  },
  {
    name: "MashUp Social",
    description:
      "MashupSocial is a social networking website that allows users to connect and share content with friends, family, and the wider online community.",
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
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: mashupsocial,
    source_code_link: "https://github.com/mashinsp/MashUpSocial",
  },
  {
    name: "Poly Render",
    description:
      "A Poly Render is a software or hardware component that generates images or visual representations from 3D models or other digital data.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "OpenGL",
        color: "green-text-gradient",
      },
      {
        name: "CMake",
        color: "pink-text-gradient",
      },
    ],
    image: renderer,
    source_code_link: "https://github.com/mashinsp/WorkingwithOpenGl",
  },
];

export { services, technologies, experiences, testimonials, projects };
