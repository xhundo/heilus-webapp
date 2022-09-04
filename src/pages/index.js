import "../pages/index.css";
import Popup from "../components/Popup.js";

const popup = new Popup({ popupSelector: "#popup", button: "#button1" });
popup.fillInfo(
  "Ani Petrichor",
  "Data Analyst",
  "Ani Petrichor is a Brooklyn-based data analyst. She has a background in operations & logistics in the sustainability food sector, primarily working to bring locally farmed ingredients to urban residents. She believes that big data can be used to effect good in the world."
);

const popup2 = new Popup({
  popupSelector: "#popup",
  button: "#button2",
});
popup2.fillInfo("Jo");

popup.setEventListeners();
popup2.setEventListeners();
