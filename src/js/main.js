const form = document.querySelector(".form-input");
const button = document.querySelector(".form-button");
const articles = document.querySelectorAll(".articles-item");

button.addEventListener("click", function () {
  search();
});

function search() {
  var searchRequest = form.value;
  console.log(searchRequest);
  articles.forEach((article) => {
    if (article.textContent.includes(searchRequest)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}
