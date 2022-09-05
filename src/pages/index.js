import "../pages/index.css";
import Popup from "../components/Popup.js";

const popup = new Popup({
  popupSelector: "#popup",
  button: "#button1",
  buttonClose: ".popup__button",
});

const popup2 = new Popup({
  popupSelector: "#popup2",
  button: "#button2",
  buttonClose: "#button3",
});

popup.fillInfo(
  "Ani Petrichor",
  "Data Analyst",
  "Ani Petrichor is a Brooklyn-based data analyst. She has a background in operations & logistics in the sustainability food sector, primarily working to bring locally farmed ingredients to urban residents. She believes that big data can be used to effect good in the world."
);

popup2.fillUserInfo(
  "Kurtney Joseph",
  "Software Engineer",
  "Kurtney Joseph is an Orlando based software engineer who aims to provide companies and local businesses with effective solutions though web development."
);

popup.setEventListeners();
popup2.setEventListeners();
