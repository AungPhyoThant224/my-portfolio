import {
  freelancer,
  github,
  githubWhite,
  linkedIn,
  mail,
  mailRed500,
  telegram,
} from "../assets/images";

const heroText = {
  hello: `Hello, I am`,
  name: `Aung <span className="red-text bold-text">Phyo</span> Thant.`,
  about: `I am a <span className="red-text">full-stack developer</span> who creates seamless user experiences, responsive designs, robust APIs, and scalable server-side solutions.`,
};

const socials = [
  { name: "github", image: github, url: "https://github.com/AungPhyoThant224" },
  {
    name: "linkedIn",
    image: linkedIn,
    url: "https://www.linkedin.com/in/aung-phyo-thant-b0806a250",
  },
  {
    name: "freelancer",
    image: freelancer,
    url: "https://www.freelancer.com/u/aungphyo1sZz?frm=aungphyo1sZz&sb=t",
  },
  { name: "telegram", image: telegram, url: "https://t.me/aungphyo1sZz" },
  {
    name: "mail",
    image: mail,
    url: "mailto:aungphyothant.developer@gmail.com",
  },
];

const socialsDark = [
  {
    name: "github",
    image: githubWhite,
    url: "https://github.com/AungPhyoThant224",
  },
  {
    name: "linkedIn",
    image: linkedIn,
    url: "https://www.linkedin.com/in/aung-phyo-thant-b0806a250",
  },
  {
    name: "freelancer",
    image: freelancer,
    url: "https://www.freelancer.com/u/aungphyo1sZz?frm=aungphyo1sZz&sb=t",
  },
  { name: "telegram", image: telegram, url: "https://t.me/aungphyo1sZz" },
  {
    name: "mail",
    image: mailRed500,
    url: "mailto:aungphyothant.developer@gmail.com",
  },
];

const terminal = {
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
};

export { heroText, socials, socialsDark, terminal };
