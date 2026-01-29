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
  companylogo,
  tfglogo,
  aiarch,
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
    title: "Cloud Architect",
    icon: backend,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "SuperTech",
    icon: companylogo,
    iconBg: "#383E56",
    date: "Nov 2024 - Aug 2025",
    points: [
      "Developed Shopify-integrated chatbot using Remix Framework, serving 80+ merchants and increasing user engagement by 45% through personalized recommendations.",
      "Integrated 15+ Shopify APIs processing 5,000+ daily requests with excellent uptime and improving merchant productivity.",
      "Solved critical problems in a thoughtful and effective manner to ensure platform reliability and performance.",
      "Collaborated with cross-functional teams to deliver scalable solutions meeting merchant needs.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Tech for Good",
    icon: tfglogo,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Developed healthcare portal using React and Node.js, serving 1,200+ users and reducing appointment booking time by 60%.",
      "Implemented agile methodologies across 6-member team, increasing sprint velocity and team productivity.",
      "Optimized database queries and API endpoints, improving load times and system performance.",
      "Participated in code reviews and contributed to high-quality product development.",
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
    name: "AI-ARCH: Intelligent Architecture Generator",
    description:
      "AI-powered platform using HouseGAN to generate house floor plans from user-defined room connections. Features interactive Canvas-based interface with drag-and-drop functionality and real-time visualization for 10+ room types.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
    ],
    image: aiarch,
    source_code_link: "https://github.com/mashinsp/AI-ARCH",
  },
  {
    name: "Discord Clone",
    description:
      "Full-stack real-time messaging platform with voice channels, file sharing, and server management. Implemented WebSocket architecture for instant messaging, live user status, and real-time notifications.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
    ],
    image: mashupsocial,
    source_code_link: "https://github.com/mashinsp/Discord-Clone",
  },
  {
    name: "NFT Marketplace",
    description:
      "An NFT marketplace is an online platform that facilitates the buying, selling, and trading of unique digital assets known as non-fungible tokens (NFTs).",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Pinata(IPFS)",
        color: "pink-text-gradient",
      },
    ],
    image: nftmarketplace,
    source_code_link: "https://github.com/mashinsp/NFT-Marketplace",
  },
];

export { services, technologies, experiences, testimonials, projects };
