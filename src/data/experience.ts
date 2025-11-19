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
        "SX Central Dashboard: Engineered a multi-tenancy reporting dashboard using Ruby on Rails 8, utilizing an aggregator pattern to dynamically connect to distributed shop databases for real-time MMQR transaction consolidation.",
        "Payment Gateway Integration: Executed full integration of MMQR payment gateways (KBZ Merchant API) for Smart Pay and SX-Top Up, enabling real-time payment verification and dynamic QR code generation on secondary displays.",
        "Reporting & Auditing: Designed a comprehensive inventory reporting module and instituted menu item auditing with price change reporting, ensuring data integrity and maintaining a traceable history of modifications.",
        "Feature Development: Implemented advanced payment processing capabilities such as split payments, FOC transactions, and a centralized printing service for accurate receipt generation across multiple POS platforms.",
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
        "Architected and developed scalable web applications using React and TypeScript for the frontend and Laravel for the backend.",
        "Played a key role in the development of OMNI Zae, a Point of Sale (POS) system, streamlining retail operations.",
        "Built and optimized the company’s portfolio site, significantly improving service presentation and customer engagement.",
        "Collaborated on an AI training initiative to enhance user prompt responses and grammatical accuracy for US-based clients.",
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
        "Built and deployed cross-platform mobile applications using Flutter.",
        "Successfully launched Doctor Link (v1.0) for Android, facilitating seamless job sharing between hospitals and doctors.",
        "Participated in Agile workflows, daily stand-ups, and sprint planning.",
        "Collaborated on the development of Connect GRX and Connect 365 (projects by MIT), implementing specific feature sets for driver management and employee productivity.",
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
