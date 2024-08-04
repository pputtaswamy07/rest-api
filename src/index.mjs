import { findLocation } from "./location.mjs";

const search_form = document.querySelector(".header_form");

search_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = document.querySelector("#search").value;
  findLocation(value);
});
