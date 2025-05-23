export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Divyanshu was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Carl Johnson',
      position: 'Owner of Bonjour Cafe',
      img: 'assets/review2.png',
      review:
        'Divyanshu’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Owner of Book Store',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Divyanshu. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Divyanshu was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      // Original project 1 (ReKindle) data, with title/desc/subdesc changed for "Friday"
      title: 'Friday - AI Agent',
      desc: 'Developed an AI Agent in Next.js 15 using LangChain, LangGraph, and Convex, enabling multi-tool orchestration (e.g., Searching through Google Books or Retrieving Customer Data ) with real-time response streaming and prompt caching for performance optimization.',
      subdesc: 'Built with Next.js 15, LangChain, LangGraph, and Convex for advanced AI capabilities and performance.',
      href: 'https://alumni-association-ss.vercel.app/', // Kept from original project 1
      texture: '/textures/project/project1.mp4', // Kept from original project 1
      logo: '/assets/project-logo1.png', // Kept from original project 1
      logoStyle: { // Kept from original project 1
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png', // Kept from original project 1
      tags: [ // Kept from original project 1
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Appwrite',
          path: '/assets/Appwrite.png',
        },
        {
          id: 4,
          name: 'ChartJS',
          path: '/assets/chart-js-logo.png',
        },
      ],
    },
    {
      // Original project 2 (HiLink) data, with title/desc/subdesc changed for "PDFQuery"
      title: 'PDFQuery - PDF to Quiz/Summary App',
      desc: 'Built PDFQuery, an app that processes PDFs to generate 5-question quizzes for self-assessment or provides AI-generated summaries.',
      subdesc: 'Processes PDFs to create quizzes or summaries, enhancing self-assessment and information extraction.',
      href: 'https://divyanshu832.github.io/Coming-Soon/', // Kept from original project 2
      texture: '/textures/project/project2.mp4', // Kept from original project 2
      logo: '/assets/project-logo2.png', // Kept from original project 2
      logoStyle: { // Kept from original project 2
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png', // Kept from original project 2
      tags: [ // Kept from original project 2
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Appwrite',
          path: '/assets/Appwrite.png',
        },
        {
          id: 4,
          name: 'ShadCN',
          path: '/assets/shadcn.png',
        },
      ],
    },
    {
      // Original project 3 (CarePulse) data, with title/desc/subdesc from original project 2 ("HiLink")
      title: 'HiLink - One Stop Camping Destination', // From original project 2
      desc: 'HiLink is a powerful service app that makes life of a camper a lot exciting. It provides all services of a camping that a camper ever needs, It supports millions of businesses simultaneously, ensuring that we surve best experience for any camping tourist', // From original project 2
      subdesc: 'With HiLink, users can experience the best of camping, where a camper can have 3 tiers of subscription, and can avail multiple services accordingly', // From original project 2
      href: 'https://pdfquery.netlify.app/', // Kept from original project 3
      texture: '/textures/project/project3.mp4', // Kept from original project 3
      logo: '/assets/project-logo3.png', // Kept from original project 3
      logoStyle: { // Kept from original project 3
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png', // Kept from original project 3
      tags: [ // Kept from original project 3
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      // Original project 4 (FreshGroce/Horizon) data, with title/desc/subdesc from original project 3 ("CarePulse")
      title: 'CarePulse - Health Management System', // From original project 3
      desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.', // From original project 3
      subdesc: 'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.', // From original project 3
      href: 'https://divyanshu832.github.io/Coming-Soon/', // Kept from original project 4
      texture: '/textures/project/project4.mp4', // Kept from original project 4
      logo: '/assets/project-logo4.png', // Kept from original project 4
      logoStyle: { // Kept from original project 4
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png', // Kept from original project 4
      tags: [ // Kept from original project 4
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      // Original project 5 (Textile Truce) data, with title/desc/subdesc changed for "FreshGroce"
      title: 'FreshGroce - Farm to Home Veggies',
      desc: 'Built an e-commerce platform in React JS and Appwrite to deliver fresh veggies from farm to home, with real-time order and review management.',
      subdesc: 'An e-commerce platform using React JS and Appwrite for delivering fresh vegetables, featuring real-time order and review management.',
      href: 'https://divyanshu832.github.io/Textile-Truce/', // Kept from original project 5
      texture: '/textures/project/project5.mp4', // Kept from original project 5
      logo: '/assets/project-logo5.png', // Kept from original project 5
      logoStyle: { // Kept from original project 5
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png', // Kept from original project 5
      tags: [ // Kept from original project 5
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/JS.png',
        },
        {
          id: 4,
          name: 'Appwrite',
          path: '/assets/Appwrite.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];