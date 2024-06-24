import { mail, mailRed500, telegram } from "../assets/images";
import { primaryBtnBorder, telegramBtnBorder } from "../theme/colors";

export default {
  title: "Get <span className='red-text bold-text'>In</span> Touch",
  intro:
    "I'm always open to discussing new projects and creative ideas. You can contact me via Telegram for quick conversations or send me an email for more detailed inquiries. I am excited to hear about your ideas and how we can collaborate to bring them to life.",
  conclusion:
    "Looking forward to connecting with you and exploring potential collaborations!",
  buttons: [
    {
      platform: "Mail",
      label: "Send an Email",
      image: {
        light: mail,
        dark: mailRed500,
        alt: "Mail",
      },
      url: "mailto:aungphyothant.developer@gmail.com",
      color: primaryBtnBorder,
    },
    {
      platform: "Telegram",
      label: "Contact on Telegram",
      image: {
        light: telegram,
        dark: telegram,
        alt: "Telegram",
      },
      url: "https://t.me/aungphyo1sZz",
      color: telegramBtnBorder,
    },
  ],
};
