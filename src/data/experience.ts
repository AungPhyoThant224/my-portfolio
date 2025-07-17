import { bag, bagWhite, book, bookWhite } from "../assets/images";

export default {
  title: "My <span className='red-text bold-text'>Experiences</span>",
  steps: [
    {
      company: "code2LAB",
      position: "Full-stack Developer (November 2024 - Current )",
      icon: {
        light: bag,
        dark: bagWhite,
        alt: "bag",
      },
      details: [
        "Collaborated with Operation Team to understand the project and real life problem from the clients.",
        "Developed and maintained features for SX-Foodcourt, SX-KTV, and SX-Restaurant POS systems, enhancing second display functionality (shop name, slim scroll, discount display).",
        "Implemented comprehensive inventory reporting, including tracking closing, sold, void, and waste quantities, and generating reports on shift open/close.",
        "Improved customer management by adding queue-based customer assignment, booking time integration, and fixing update errors.",
        "Enhanced payment processing by addressing credit payment calculation issues across shifts and adding features for discount, FOC (Free of Charge), and split payment for credit sales.",
        "Introduced menu item auditing and price change reporting, ensuring data integrity and traceability for menu modifications.",
        "Refactored database schemas to improve data handling, such as changing valid time columns in menus from time to datetime format.",
      ],
    },
    {
      company: "Varoon Valley Ltd",
      position: "Full-stack Developer (May 2023 - May 2024)",
      icon: {
        light: bag,
        dark: bagWhite,
        alt: "bag",
      },
      details: [
        "Developed several web applications using React and TypeScript for the front-end and Laravel for the back-end.",
        "Collaborated with cross-functional teams on full project lifecycles, from research and planning to UI/UX design and database structuring.",
        "Contributed to creating Varoon Valley's portfolio site, improving service presentation and customer engagement.",
        "Contributed to the development of OMNI Zae, a POS system designed to streamline retail operations.",
        "Collaborated on an AI training project, enabled by our founder's connections in the USA, to enhance user prompt responses and improve grammatical accuracy.",
      ],
    },
    {
      company: "Unity Power Technology Co.,Ltd",
      position: "Front-end Developer (Oct 2022 - Feb 2023)",
      icon: {
        light: bag,
        dark: bagWhite,
        alt: "bag",
      },
      details: [
        "Developed responsive and maintainable web applications using Vue.js and JavaScript.",
        "Collaborated closely with team members, designers, and project managers to ensure development aligned with business goals and met user expectations.",
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
        "Developed and deployed multiple mobile applications using Flutter.",
        "Successfully launched Doctor Link (version 1.0) for both Android and iOS, enabling seamless communication and job information sharing among hospitals, clinics, and doctors.",
        "Attended daily meetings at 9:00 AM to discuss workflows and receive guidance from senior developers for task allocation.",
        "Notable projects include:",
        [
          "<span className='red-text'>Doctor Link</span>: Facilitated connections and job information sharing among hospitals, clinics, and doctors.",
          "<span className='red-text'>Connect GRX</span>: Designed for professional taxi drivers.",
          "<span className='red-text'>Connect 365</span>: A multipurpose mobile application for time tracking, collaboration, productivity, and e-learning for employees, members, and organizations.",
        ],
      ],
    },
    {
      company: "Mogok Foundation + Tastysoft Software Co.,Ltd",
      position: "Professional Programming Class (Aug 2019 - May 2022)",
      icon: {
        light: book,
        dark: bookWhite,
        alt: "book",
      },
      details: [
        "Basic programming with Java.",
        "Fundamental web development with HTML, CSS, JavaScript, and Bootstrap.",
        "Mobile app development with Dart and Flutter.",
      ],
    },
  ],
};
