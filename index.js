const container = document.getElementById("container");

// container.innerHTML = "";
for (let i = 0; i < 14; i++) {
  container.innerHTML += `<div class="card-skeleton">
        <div class="head">
          <div class="">
            <img class="skeleton" id="img" src="" alt="" />
          </div>
          <div class="">
            <p class="skeleton skeleton_title"></p>
          </div>
        </div>
        <div class="foot">
          <p class="skeleton skeleton_paragraph"></p>
          <p class="skeleton skeleton_paragraph"></p>
          <p class="skeleton skeleton_paragraph"></p>
          <p class="skeleton skeleton_paragraph"></p>
          <p class="skeleton skeleton_paragraph"></p>
        </div>
      </div>`;
  console.log(container);
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    container.innerHTML = "";
    data.forEach((item) => {
      container.innerHTML += `<div class="card-container">
    <div class="card">
    <h1 class="item-id">Card ${item.id}</h1>
    <h3>Click to view content</h3>
    </div>
    <div class="card-backside">
      <div class="head">
        <div class="">
          <img class="skeleton" id="img" src="https://via.placeholder.com/600/771796" alt="" />
        </div>
        <div class="">
          <strong>${item.title}</strong>
        </div>
      </div>
      <div class="foot">
        <strong>${item.body}</strong>
      </div>
    </div>
    </div>`;
    });
    const cardContainer = document.querySelectorAll(".card-container");
    cardContainer.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  });

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     const string = JSON.stringify(data);
//     localStorage.setItem("data-string", string);
//   });
// const dataString = localStorage.getItem("data-string");
// const dataStringParsed = JSON.parse(dataString);
// container.innerHTML = "";
// dataStringParsed.forEach((item) => {
//   let html = `
//   <div class="card-container">
//     <div class="card">
//     <h1 class="item-id">Card ${item.id}</h1>
//     <h3>Click to view content</h3>
//     </div>
//     <div class="card-backside">
//       <div class="head">
//         <div class="">
//           <img class="skeleton" id="img" src="https://via.placeholder.com/600/771796" alt="" />
//         </div>
//         <div class="">
//           <strong>${item.title}</strong>
//         </div>
//       </div>
//       <div class="foot">
//         <strong>${item.body}</strong>
//       </div>
//     </div>
//   </div>`;
//   container.insertAdjacentHTML("beforeend", html);
// });
// const cardContainer = document.querySelectorAll(".card-container");
// cardContainer.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("active");
//   });
// });
