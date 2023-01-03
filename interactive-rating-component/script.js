const ratings = document.querySelectorAll(".rate");
const sendButton = document.getElementById("send");
const ratingContainer = document.querySelector(".rating-container");
let selectedRating = 0;

// add 'active' class on each rates whenever they are clicked
ratings.forEach((rating) =>
  rating.addEventListener("click", (e) => {
    removeActive();
    e.target.classList.add("active");
    selectedRating = e.target.innerHTML;
  })
);
// changes display after clicking submit
sendButton.addEventListener("click", () => {
  console.log(anyRatingActive());

  if (!anyRatingActive()) return;
  ratingContainer.classList.remove("start-article");
  ratingContainer.classList.add("end-article");
  ratingContainer.innerHTML = `
    <img class="end-img" src="./images/illustration-thank-you.svg" alt="" />
    <p class="selected-rating">You selected ${selectedRating} out of 5</p>
    <h1 class="end-h1">Thank you!</h1>
    <p class="we-appreciate">We appreciate you taking the time to give a rating. If
    you ever need more support, don’t hesitate to get in touch!</p>
    `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}

// check if a rating has an 'active' class
function anyRatingActive() {
  for (const rating of ratings) {
    {
      if (rating.classList.contains("active")) {
        return true;
      }
    }
  }
}
// check if script is working
// console.log("working..");
