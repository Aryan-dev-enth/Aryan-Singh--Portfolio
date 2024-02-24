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
      title: "Next Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "NodeJS Developer",
      icon: backend,
    },
    {
      title: "Problem Solving",
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
      title: "10th Standard",
      company_name: "St. Joseph's College, Prayagraj",
      icon: "/img/sjc.png",
      iconBg: "#4CAF50",
      date: "2019",
      points: [
        "Completed 10th standard with distinction.",
        "Secured a perfect 100 in Computer Science",
        "Marks: 91.2%",
      ],
    },
    {
      title: "12th Standard",
      company_name: "St. Joseph's College, Prayagraj",
      icon: "/img/sjc.png",
      iconBg: "#FFC107",
      date: "2021",
      points: [
        "Completed 12th standard with a strong academic performance.",
        "Secured 98 marks in Computer Science",
        "Marks: 91.2%",
      ],
    },
    {
      title: "B.Tech. CSE - DSAI",
      company_name: "SRMUH (Delhi - NCR)",
      icon: "/img/srm.png",
      iconBg: "#2196F3",
      date: "2022 - Present",
      points: [
        "Currently pursuing B.Tech in Computer Science with specialization in Data Science and Artificial Intelligence.",
        "Currently in my 4th Semester",
        "Current CGPA: 9.2",
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
      name: "Authorization App",
      description:
        "A full-stack authentication app that can be implementd to any frontend application.",
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
        {
          name: "jwt-auth",
          color: "blue-text-gradient",
        },
        {
          name: "nodemailer",
          color: "green-text-gradient",
        },
        {
          name: "salt-pepper-hashing",
          color: "pink-text-gradient",
        },
      ],
      image: "/img/Auth.png",
      source_code_link: "https://github.com/Aryan-dev-enth/2-Factor-Authentication",
    },
    {
      name: "Connext-X",
      description:
        "A full-stack web-appplication which is currently under development that will provide you with high resolution video conferencing.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "web-rtc",
          color: "pink-text-gradient",
        },
        {
          name: "socket.io",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },

      ],
      image: "/img/Connect-X.png",
      source_code_link: "https://github.com/Aryan-dev-enth/Connect-X",
    },
    {
      name: "Daily-News",
      description:
        "A subtle web-app that feeds you with the latest news of all possible trending genres.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "newsapi",
          color: "green-text-gradient",
        },
        {
          name: "api-integration",
          color: "pink-text-gradient",
        },
      ],
      image: "/img/Daily-News.png",
      source_code_link: "https://github.com/Aryan-dev-enth/Daily-News",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };