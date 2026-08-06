import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Zain Mehmood",
  title: "Hi all, I'm Zain Mehood",
  description:
    "I'm a passionate Full-Stack JavaScript Developer with experience building scalable web applications using Next.js, React.js, Node.js, Express.js, GraphQL, MongoDB, and Material UI. I enjoy learning new technologies, writing clean and maintainable code, solving real-world problems, and collaborating with teams to deliver high-quality software.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "Zaingithubit",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "zainmehmood986@gmail.com",
  linkedin: "https://www.linkedin.com/in/zain-mehmood-a42213277/",
  github: "https://github.com/Zaingithubit",
  instagram: "https://www.instagram.com/zainmehmood_786",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building scalable, responsive, and high-performance web applications using Next.js and React.js"),
        emoji("⚡ Developing RESTful APIs and GraphQL APIs with Node.js, Express.js, and MongoDB"),
        emoji("⚡ Creating modern, user-friendly interfaces with Material UI, Bootstrap, JavaScript, and jQuery"),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript-icon",
        },
        {
          skillName: "React.js",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Next.js",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Node.js",
          iconifyTag: "logos:nodejs-icon",
        },
        {
          skillName: "Express.js",
          iconifyTag: "simple-icons:express",
        },
        {
          skillName: "GraphQL",
          iconifyTag: "logos:graphql",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb-icon",
        },
        {
          skillName: "Material UI",
          iconifyTag: "logos:material-ui",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "logos:bootstrap",
        },
        {
          skillName: "Git",
          iconifyTag: "logos:git-icon",
        },
        {
          skillName: "GitHub",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "jQuery",
          iconifyTag: "logos:jquery",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Allama Iqbal Open University",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "December 2020 - July 2023",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Frontend Developer",
    company: "DevArx",
    companyLogo: "https://www.devarx.org/assets/logo.svg",
    date: "Aug 2022 - Present",
    desc: "Developed responsive and modern frontend applications using Next.js, React.js, JavaScript, Material UI, Bootstrap, and jQuery. Built reusable UI components, integrated REST and GraphQL APIs, optimized application performance, and collaborated with cross-functional teams to deliver intuitive, scalable, and user-friendly web experiences.",
  },
  {
    role: "Full Stack Developer",
    company: "Pixako Technologies (Pvt.) Ltd.",
    companyLogo:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABnRSTlMAAAAAAABupgeRAAADN0lEQVR4AWKgOfhPYzDcLPhHJoBoJWwBVCmg2XKAESuIouidP1O3cVLbblSERdxGdRvWtm3btm23a9u2bfvtn+x0bU1Ovue+d/8wP7+uaRbk5eXn5lJFmWLlAUqr52Vk5CSn5Kam1kBK8Tel5WSY0oag1OVrOsZbWX3p3/9rjx5fevYkvlbNlx49vvbq9XvcOIt583yvXUsNCFCGlCZK505kxcV97tfvKfACeE7HmqBvngFPdF536mi9bFlGWJjKlZSh2jY/J4eORtOnPwJeCvGCsVryUtPoe4KCPQTedusW8f17cQzdh+6gJKDbsWP3gRft2j3j/LkQtYG+fMYYOZbQE8rvEdMi//0jQUoaxbnn5tHR78mTm8Bd4A4d68ID4InGHwOSJ5zfB9707JkVH08mIDtyXmamzZYtJosXmy9darZ4idmSGqBvJAazZr0fPvwWcF/ngX58yPkNwPXsWTKB0sOkfoX+g+vFizcZu8O0O/IHaNo1xr5OmUKyKN1H6dN6IBvzy9Rpl4FbnN8EKNhV4MWQIWUc5OXk1I/crCxS+DpjxnngGhckfZWxi8CTQYNIu3Emu8Bv3y61b3+RsUtAMRo7A7ycMIHyhhzZGbGxDpcv1wPLI0c+z5p1FiDFcyVc4PwoYLprFymDPNIpyt7+MFAPDgFHgNM6p3ROM3ZS4+c6dUoKCKDsIYdYtLPzCS5OcF5rROmL4wBxDDihaccZ2wM43r5NsnnZ2ZABopyc6ueAOAJ2RNOOCXGE873AAcYs9RFAytQGkAEinZ33A3Vln34k0V3ANmAHcHPSpCAjI6VOF1AByFc59mraPiH2cb6PiyoR4nCXLpdGjXq/bJn3jx+yy0hNKv8dRDg77QQUuzS+ETA5ezbe3z/a0zPO17dK/PxSo6JKr1py3KmlVAVwJo+SrcB2ztcATq9e1X4okA5Jl1ql9aIChDs7bwYUWzhfBdg+fkyWaaDSsQYq6FYSYIsQiq3t2q0Wwu7ZM3olB0o9ixpooQ4OSwHFMmAhYHn/Pr3Kzc5uUADZJkkRER+2bvuwTWfr1o/bt7/etCnE3l6ufK17Z6e2FDmZmeVQHa5BAZq6FAHMlfu+SdTMfQAAAABJRU5ErkJggg==",
    date: "Nov 2024 - Aug 2026",
    desc: "Crafted scalable and high-performance full-stack web applications using Next.js, React.js, Node.js, Express.js, GraphQL, MongoDB, and Material UI. Focused on developing responsive user interfaces, robust backend APIs, and maintainable code while collaborating with cross-functional teams to deliver reliable, user-centric software solutions. Passionate about learning new technologies, solving real-world problems, and continuously improving development practices.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/Zaingithubit/zain-mehmood-portfolio",
    link: "", // developer-portfolio-1hanzla100.vercel.app
  },
  {
    name: "URL Shortener",
    desc: "A full-stack URL Shortener application built with Node.js, Express.js, MongoDB, and React.js. It allows users to generate short URLs from long links, redirect instantly, track click analytics, and manage URLs through a clean and responsive interface.",
    github: "https://github.com/Zaingithubit/URL-Shortener",
  },
  {
    name: "Spotify Clone",
    desc: "A responsive Spotify-inspired music streaming interface built using HTML, CSS, and JavaScript. The project recreates the look and feel of Spotify with a modern UI, interactive music controls, playlist sections, and a seamless user experience while demonstrating front-end development fundamentals.",
    github: "https://github.com/Zaingithubit/spotyfy-clone",
  },
  {
    name: "Uber Clone",
    desc: "A full-stack Uber Clone built with React.js, Node.js, Express.js, and MongoDB. It features user and driver authentication, ride booking, real-time location integration, trip management, fare estimation, and a responsive interface that simulates the core functionality of a modern ride-hailing platform.",
    github: "https://github.com/Zaingithubit/Uber-Clone-MERN-Stack",
  },
  {
    name: "Fleet Management System",
    desc: "A full-stack fleet management application built with Next.js, GraphQL, Node.js, MongoDB (Mongoose), and Material UI. It features reusable common components for Vehicle, Driver, and Contact management, dynamic forms with validation, CRUD operations, GraphQL APIs, and a responsive, scalable architecture for efficient data management.",
    github: "https://github.com/Zaingithubit/crud-in-type-script-common-componets",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Muhammad Talha",
    role: "Frontend Developer at DevArx Software",
    feedback:
      "   You have been a wonderful addition to our team, Alhamdulillah. I’m truly impressed by your technical abilities, professionalism, and work ethic. You approach challenges with a unique perspective and consistently ask thoughtful questions that lead to better solutions. Finding a teammate like Hanzla is rare. He has made valuable contributions to the growth of our organization and continues to add value every day. May Allah bless you with success, happiness, and everything you aspire to achieve.",
  },
  {
    name: "Muhammad Basit",
    role: "Software Engineer",
    feedback:
      "Zain Mehmood has a strong understanding of modern web development technologies and consistently applies them to build scalable, secure, and high-performance web applications. He is proficient in Next.js, React.js, Node.js, Express.js, GraphQL, MongoDB, and Material UI, delivering clean, maintainable, and user-focused solutions. Throughout his career, Zain has contributed to projects of varying complexity, demonstrating excellent problem-solving skills, professionalism, and the ability to collaborate effectively within cross-functional teams. He is dependable, quick to learn, and always strives to deliver high-quality results. Zain is a pleasure to work with, and I have no doubt that he will be a valuable asset to any team or organization. I highly recommend him for any Full-Stack JavaScript development role and wish him continued success in all his future endeavors.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Zain Mehmood",
  description: greetings.description,
  author: "Zain Mehmood",
  image: "https://avatars.githubusercontent.com/u/134782085?s=96&amp;v=4",
  url: "", // add vercel url link
  keywords: [
    "Hanzla",
    "Zain Mehmood",
    "@Zaingithubit",
    "Zaingithubit",
    "Portfolio",
    "Zain Portfolio ",
    "Zain Mehmood Portfolio",
  ],
};
