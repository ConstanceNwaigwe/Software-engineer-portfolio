import surveyPic from "./images/socialmediasurvey.png";
import AandMPic from "./images/adviceandlaugh.png";
// import calculator from "./images/calculator.png";
// import resturantPic from "./images/krustykrabui.png";
import bakery from "./images/bakery.png";
import dataPic from "./images/krustykrabbackend.png";

const projectsData = [
  {
    image: bakery,
    name: "Sweet Eats Bakery",
    description:
      "A website created for a fake bakery where users can view menu items and book a table.",
    skills: "React SCSS JavaScript",
    uipage: "https://sweeteatbakery.netlify.app/",
    code: "https://github.com/ConstanceNwaigwe/Sweet-Eats-Bakery",
  },
  {
    image: AandMPic,
    name: "Advice and Memes",
    description:
      "An advice generator where developer can get helpful advice and also laugh at programming memes.",
    skills: "React CSS JavaScript",
    uipage: "https://memesandadvice.netlify.app/",
    code: "https://github.com/ConstanceNwaigwe/Advice-and-Memes",
  },
  {
    image: surveyPic,
    name: "Social Media Survey",
    description:
      "A survey page made to collect infomation about how long user spend on social media.",
    skills: "React CSS JavaScript",
    uipage: "https://socialmediasurvey.netlify.app/",
    code: "https://github.com/ConstanceNwaigwe/new-social-media-survey",
  },
  {
    image: dataPic,
    name: "Krusty Krab Backend data",
    description:
      "The backend server for the krusty krab that holds user information and the recipes used.",
    skills: "Node Sequelize Express",
    uipage: "https://github.com/ConstanceNwaigwe/Spongebob-Recipes",
    code: "https://github.com/ConstanceNwaigwe/Spongebob-Recipes",
  },
];

export { projectsData };
