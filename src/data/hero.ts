import {
  freelancer,
  github,
  githubWhite,
  linkedIn,
  mail,
  mailRed500,
  telegram,
} from "../assets/images";

export default {
  text: {
    hello: `Hello, I am`,
    name: `Aung <span className="red-text bold-text">Phyo</span> Thant.`,
    about: `I am a <span className="red-text">full-stack developer</span> who creates seamless user experiences, responsive designs, robust APIs, and scalable server-side solutions.`,
  },
  socials: [
    {
      image: {
        light: github,
        dark: githubWhite,
        alt: "Github",
      },
      url: "https://github.com/AungPhyoThant224",
    },
    {
      image: {
        light: linkedIn,
        dark: linkedIn,
        alt: "LinkedIn",
      },
      url: "https://www.linkedin.com/in/aung-phyo-thant-b0806a250",
    },
    {
      image: {
        light: freelancer,
        dark: freelancer,
        alt: "Freelancer",
      },
      url: "https://www.freelancer.com/u/aungphyo1sZz?frm=aungphyo1sZz&sb=t",
    },
    {
      image: {
        light: telegram,
        dark: telegram,
        alt: "Telegram",
      },
      url: "https://t.me/aungphyo1sZz",
    },
    {
      image: {
        light: mail,
        dark: mailRed500,
        alt: "Mail",
      },
      url: "mailto:aungphyothant.developer@gmail.com",
    },
  ],
  terminal: {
    title: "about.js",
    code: `apt@123 desktop % node about.js
{
  name: <span className="green-text">'Aung Phyo Thant'</span>,
  skills: [ <span className="green-text">'React'</span>, <span className="green-text">'Vue'</span>, <span className="green-text">'Laravel'</span>, <span className="green-text">'MySQL'</span>, <span className="green-text">'ChakraUI'</span> ],
  gmail: <span className="green-text">'aungphyothant.developer@gmail.com'</span>,
  phone: <span className="green-text">'+959767377426'</span>,
  quickLearner: <span className="dark-yellow-text">true</span>,
  lifestyle: [ <span className="green-text">'Code'</span>, <span className="green-text">'Eat'</span>, <span className="green-text">'Sleep'</span>, <span className="green-text">'Repeat'</span> ]
}
apt@123 desktop %`,
  },
};
