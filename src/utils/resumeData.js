import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { AssignmentOutlined, Instagram, Language, Twitter,  YouTube } from '@mui/icons-material';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import MLCoEImage from '../assetss/images/MLCoE.png'; 
import Project2 from '../assetss/images/Project2.png';
import chatapp from '../assetss/images/chatapp.png';
import Calc from '../assetss/images/Calc.png';
import Hotel from '../assetss/images/Hotel-Booking.png';
import Admin from '../assetss/images/Admin.png';
export default {
    name:"Shubhangi Singh",
    title:"Front-End Developer",
    birthday:"March 13, 2003",
    email:"shubhangisingh0013@gmail.com",
    address:"Ghaziyabad, Uttar Pradesh",
    phone:'7755079518',
    github:"shubhangiisingh",
    socials:{
        github:{
            link:"https://github.com/shubhangiisingh", 
            text: 'shubhangiisingh',
            icon:<GitHubIcon/>,
        },
        linkedin:{
            link:"https://www.linkedin.com/in/shubhangi-singh-2b8bb7251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            text: 'Shubhangi-Singh',
            icon:<LinkedInIcon/>,
        },
     
     
       
    },
    about: "I am a passionate Front-End Developer skilled in HTML, CSS, JavaScript, React.js, Material-UI, and Bootstrap. I craft responsive, user-friendly, and visually appealing web applications with a strong focus on UI/UX, clean code, and scalability.  Proficient in React.js for dynamic interfaces and GitHub for seamless collaboration, I thrive in fast-paced environments, constantly learning and innovating. Excited to take on new challenges and build impactful web solutions!",
    experiences: [
        {
            title: "Front-End Developer – College Society Website",
            Date: "November - December 2024",
            description: "Designed and developed a responsive, user-friendly website to enhance the digital presence of the college society. Built the front-end using React.js, Material-UI and JavaScript for an engaging UI/UX experience.",
        },
        {
            title: "Event Coordinator & Participant – Technical & Cultural Events",
            Date: "2023 - Present",
            description: "Successfully organized and managed multiple team events and competitions, ensuring seamless execution. Demonstrated strong time management, organizational, and leadership abilities in high-pressure scenarios.",
        },
        // {
        //     title: "Web Developer",
        //     Date: "2022-2023",
        //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus?",
        // },
    ],
    educations: [
        {
            title: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
            Date: "2022-Present",
            description: "Ajay Kumar Garg Engineering College, Ghaziabad",
        },
        {
            title: "Higher Secondary Education (Class 12)",
            Date: "2021-2022",
            description: "Lucknow Public School, Lucknow",
        },
        {
            title: "Secondary Education (Class 10)",
            Date: "2019-2020",
            description: "Lucknow Public School, Lucknow",
        },
    ],
    services:[
{
    title:"Front-End Development",
    description:"Building and maintaining websites and web applications. It includes front-end technologies like HTML, CSS, JavaScript, and frameworks such as React.js to create dynamic, responsive user interfaces.",
    icon: <WebOutlinedIcon/>
},
{
    title:"UI/UX",
    description:" It involves understanding user needs, behaviors, and preferences to design interactive elements that are both functional and aesthetically pleasing.",
    icon: <AutoAwesomeMosaicOutlinedIcon/>},

{
    title:"Version Control",
    description:"Version Control is a system that helps developers manage and track changes to their codebase over time. It allows multiple team members to collaborate on the same project.",
    icon: <Diversity3OutlinedIcon/>
},

    ],
    skills:[
        {
        title: 'FRONT-END',
        description:[
         "React.js",
         "JavaScript",
         "TypeScript",
         "BootStrap",
         "Material UI",
        ],
    },
    // {
    //     title: "BACK-END",
    //     description: ["Node.js", "Express", ]
    // },
    // {
    //     title: "DATABASE",
    //     description: ["SQL", "MongoDB",]
    // },
    {
        title: "PROGRAMMING SKILLS",
        description: ["C/C++", "Python", "JavaScript",]
    },
    {
        title: "SOFT SKILLS",
        description: ["Problem-Solving", "Collaboration", "Management", "Communication"]
    },
    ],
    information:[
        {
            address: 'Address: Flat no. 212, tower 3, dream homes, wave city',
            phone:'7755079518',
            job:'Front-End Developer',
            email: 'shubhangisingh0013@gmail.com',
            github:'shubhangiisingh'
        }
    ],
    projects:[
        {
        tag: 'React',
        image:MLCoEImage,
        title:'MLCoE Website',
        caption:"Empowering Innovation, Advancing Intelligence. 🚀",
        description:'The MLCoE Website is a modern and responsive web platform built using React.js for a seamless and dynamic user experience. It leverages Material-UI (MUI) for an elegant and consistent design, ensuring a visually appealing interface. The website is structured to provide information about the Machine Learning Centre of Excellence, including research projects, recruitment updates, events, and learning resources. With a focus on performance and accessibility, the site is optimized for both desktop and mobile users, offering an engaging and interactive experience. 🚀',
        links:[
            {link: 'https://github.com/shubhangiisingh/MLCoE-Website', icon: <GitHubIcon/>},
            {link: 'https://ml-co-e-website-git-master-shubhangi-singhs-projects-317eb744.vercel.app', icon: <ArrowOutwardIcon/>},
            // {link: 'https//www.google.com', icon: <Language/>},
        ]
        },
        {
            tag: 'Next',
            image: Project2,
            title:'E-Commerce Website',
            caption:'Learning Clerk Authentication',
            description:"The Quick Cart e-commerce platform, built with Next.js and Tailwind CSS, delivers a seamless shopping experience with a sleek, responsive design. Featuring Clerk authentication.",
            links:[
                {link: 'https://github.com/shubhangiisingh/Quick-Cart', icon: <GitHubIcon/>},
                {link: 'https://quick-cart-jpyk-git-master-shubhangi-singhs-projects-317eb744.vercel.app', icon: <ArrowOutwardIcon/>},
                // {link: 'https//www.google.com', icon: <Language/>},
            ]
            },
            {
                tag: 'React',
                image: chatapp,
                title:'ChatBot using ReactJS',
                caption:'Hello Bot',
                description:'A sleek, responsive chatbot interface built using ReactJS and styled with custom CSS. It provides real-time interaction with users through a clean UI, mimicking human-like conversation flow and ensuring an engaging user experience.',
                links:[
                    {link: 'https://github.com/shubhangiisingh/ChatBot', icon: <GitHubIcon/>},
                    {link: 'https://chat-bot-git-master-shubhangi-singhs-projects-317eb744.vercel.app', icon: <ArrowOutwardIcon/>},
                    // {link: 'https//www.google.com', icon: <Language/>},
                ]
                },
                {
                    tag: 'React',
                    image:Calc,
                    title:'Scientific Calculator',
                    caption:'Scientific Calculator using Vite and JavaScript ',
                    description:'A sleek and efficient scientific calculator built with Vite and JavaScript. It supports advanced mathematical functions like trigonometry, logarithms and more — designed for quick, accurate calculations with a modern user experience.',
                    links:[
                        {link: 'https://github.com/shubhangiisingh/ScientificCalculator', icon: <GitHubIcon/>},
                        {link: 'https://scientific-calcul-git-f74c9f-shubhangi-singhs-projects-317eb744.vercel.app', icon: <ArrowOutwardIcon/>},
                        // {link: 'https//www.google.com', icon: <Language/>},
                    ]
                    },
                    {
                        tag: 'React',
                        image:Hotel,
                        title:'Hotel-Booking Website Frontend',
                        caption:'Book your stay in a blink.',
                        description:'A sleek and efficient hotel-booking front-end with React + Vite, pairing a sleek, mobile-first UI with Clerk-powered authentication. Guests sign in securely, browse rooms, and lock in reservations—all within an SPA that loads in milliseconds and feels as smooth as the experience of the stay itself.',
                        links:[
                            // {link: 'https//www.google.com', icon: <YouTube/>},
                            {link: 'https://github.com/shubhangiisingh/HotelBooking', icon: <GitHubIcon/>},
                             {link: 'https://hotel-booking-fro-git-3ba56f-shubhangi-singhs-projects-317eb744.vercel.app', icon: <ArrowOutwardIcon/>},
                            // {link: 'https//www.google.com', icon: <Language/>},
                        ]
                        },
                        {
                            tag: 'React',
                            image:Admin,
                            title:'React Responsive Admin Panel',
                            caption:'Admin Panel using ReactJS',
                            description:'A sleek and efficient admin panel built with ReactJS. It provides a clean and responsive interface for managing user accounts, content, and settings, ensuring a smooth user experience.',
                            links:[
                                // {link: 'https//www.google.com', icon: <YouTube/>},
                                {link: 'https://github.com/shubhangiisingh/Responsive-Admin-Pannel', icon: <GitHubIcon/>},
                                 {link: 'https://responsive-admin-pannel.vercel.app/', icon: <ArrowOutwardIcon/>},
                                // {link: 'https//www.google.com', icon: <Language/>},
                            ]
                            },
    ]
};