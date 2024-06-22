import { bag, bagWhite, book, bookWhite } from "../assets/images";

export default {
  title: "My <span className='red-text bold-text'>Experiences</span>",
  steps: [
    {
      company: "Varoon Valley Ltd",
      position: "Full-stack Developer (May 2023 - May 2024)",
      icon: {
        light: bag,
        dark: bagWhite,
        alt: "bag",
      },
      details: [
        "Developed multiple web applications using React with TypeScript for the front-end and Laravel 10 for the back-end.",
        "Collaborated with a strong team to develop applications from the ground up, including project research, planning, database design, and user interface design.",
        "Notable projects include:",
        [
          "<span className='red-text'>Varoon Valley</span>: The company’s portfolio site showcasing its services.",
          "<span className='red-text'>OMNI Zae</span>: A POS system designed to streamline retail operations.",
          "<span className='red-text'>Bee Coding AI Training</span>: We trained the AI to respond to prompts with greater accuracy, conciseness, correct grammar, etc.",
        ],
      ],
    },
    {
      company: "Unity Power Technology Co.,Ltd",
      position: "Front-end Developer (Sep 2022 - Feb 2023)",
      icon: {
        light: bag,
        dark: bagWhite,
        alt: "bag",
      },
      details: [
        "Primarily focused on developing web applications using Vue.js and vanilla JavaScript.",
        "Developed maintainable and responsive designs, ensuring seamless user experiences with guidance from skilled senior developers.",
        "Collaborated with team leaders and designers to determine project scope and requirements.",
      ],
    },
    {
      company: "Tastysoft Software Co.,Ltd",
      position: "Junior Front-end Developer (May 2022- Sep 2022)",
      icon: {
        light: bag,
        dark: bagWhite,
        alt: "bag",
      },
      details: [
        "Developed multiple mobile applications for both Android and iOS using Flutter.",
        "Attended daily meetings at 9:00 AM to discuss workflows and receive guidance from senior developers for task allocation.",
        "Gained experience in:",
        [
          "<span className='red-text'>Doctor Link</span>: Facilitated connections and job information sharing among hospitals, clinics, and doctors.",
          "<span className='red-text'>Connect GRX</span>: Designed for professional taxi drivers.",
          "<span className='red-text'>Connect 365</span>: A multipurpose mobile application for time tracking, collaboration, productivity, and e-learning for employees, members, and organizations.",
        ],
      ],
    },
    {
      company: "Tastysoft Software Co.,Ltd",
      position: "Apprenticeship (Aug 2019 - May 2022)",
      icon: {
        light: book,
        dark: bookWhite,
        alt: "book",
      },
      details: [
        "Basic programming with Java.",
        "Fundamental web development with HTML, CSS, JavaScript, and Bootstrap.",
        "Self-studied mobile app development with Dart and Flutter.",
      ],
    },
  ],
};
