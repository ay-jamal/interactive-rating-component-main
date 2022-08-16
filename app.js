let button = document.querySelectorAll(".btn");
let container = document.querySelector(".container");
let submitBtn = document.getElementById("btn");

// button.addEventListener("click", () => {
//   console.log("ayhem");
// });

let count = 0;

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    count = document.getElementsByClassName("active").length;
    console.log(count);
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  container.innerHTML = `
    <div class="container card">
    <img src="images/illustration-thank-you.svg" alt="" />
    <span>You Selected ${count} out of 5</span>

    <div class="text">
      <p>Thank you!</p>

      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
    </div>
  </div>
    
  
    `;
});
