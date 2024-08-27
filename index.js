const container = document.getElementById("container");
// container.innerHTML = "";
for (let i = 0; i < 14; i++) {
  container.innerHTML += `<div class="card">
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
        </div>
      </div>`;
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    container.innerHTML = "";
    data.forEach((item) => {
      container.innerHTML += `<div class="card">
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
      </div>`;
    });
  });
