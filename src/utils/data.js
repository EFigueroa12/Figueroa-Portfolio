import frontIcon from "./../assets/images/front.png"
import backIcon from "./../assets/images/back.png"
import softIcon from "./../assets/images/soft.png"
import toolsIcon from "./../assets/images/tools.png"

export const SKILLS = [
    {
        title: "Frontend",
        icon: frontIcon,
        skills: [
            {skill: "HTML5", percentage: "80%"},
            {skill: "CSS", percentage: "70%"},
            {skill: "JavaScript", percentage: "75%"},
        ],
    },
    {
        title: "Backend",
        icon: backIcon,
        skills: [
            {skill: "Ruby on Rails", percentage: "70%"},
        ],
    },
    {
        title: "Tools & Languages",
        icon: toolsIcon,
        skills: [
            {skill: "Git & GitHub", percentage: "85%"},
            {skill: "Visual Studio Code", percentage: "70%"},
            {skill: "Google Cloud Platform", percentage: "70%"},
            {skill: "C++", percentage: "85%"},
            {skill: "Python", percentage: "80%"},
        ],
    },
    {
        title: "Soft Skills",
        icon: softIcon,
        skills: [
            {skill: "Problem Solving", percentage: "90%"},
            {skill: "Collaboration", percentage: "90%"},
            {skill: "Attention to Detail", percentage: "80%"},
            {skill: "Leadership", percentage: "85%"},
        ],
    },
];

export const WORK_EXPERIENCE = [
    {
        title: "Information Technology Computer Science Intern",
        date: "August 2023 - May 2024",
        responsibilites: [
            "Developed a frontend demo of the main student portal.",
            "Composed and debugged API requests in Microsoft Power BI to attain data from databases.",
            "Utilized the Workato Platform as an IPaaS solution for business workflows and integration.",
            "Investigated, analyzed and resolved reports of risky users, spam and phishing emails.",
            "Wrote Powershell scripts to retrieve data from on-prem Active Directory.",
        ],
    },
    {
        title: "NGTB IT Technician",
        date: "November 2021 - May 2024",
        responsibilites: [
            "Delivered IT assistance for the Gonzaga commmunity in person and via phone/video call.",
            "Assisted the IT Support Center in the computer imaging of new laptops and desktops.",
        ],
    },
    {
        title: "Xfinity On-Campus Ambassador",
        date: "September 2022 - May 2024",
        responsibilites: [
            "Drove student engagement and adoption of Xfinity services through events, marketing materials, demos, and partnerships with campus organizations.",
        ],
    },
];