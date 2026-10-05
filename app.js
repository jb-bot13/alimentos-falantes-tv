let videos = [];
let categoria = "Todos";

async function carregarVideos() {

  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .eq("published", true);

  if (error) {
    console.error(error);
    return;
  }

  videos = data;

  render(videos);

  document.querySelector("#popular").innerHTML =
    videos.slice(0, 4)
    .map(v => `
      <article class="card">
        <div class="thumb">
          🎬
        </div>
        <div class="info">
          <b>${v.title}</b>
          <div class="meta">
            ${v.views || 0} visualizações
          </div>
        </div>
      </article>
    `)
    .join("");
}

function render(lista = videos) {

  const grid = document.querySelector("#grid");

  grid.innerHTML = lista.map(v => `
    <article class="card">
      <div class="thumb">
        🎬
      </div>

      <div class="info">
        <b>${v.title}</b>

        <div class="meta">
          ${v.category || "Sem categoria"}
          •
          ${v.views || 0} visualizações
        </div>
      </div>
    </article>
  `).join("");

  document.querySelector("#count").textContent =
    `${lista.length} vídeos`;
}

function filtrar() {

  const q =
    document.querySelector("#search")
    .value
    .toLowerCase();

  let lista = videos.filter(v =>
    (categoria === "Todos" ||
     v.category === categoria)
    &&
    (
      !q ||
      v.title.toLowerCase().includes(q)
    )
  );

  render(lista);
}

function buscar() {
  filtrar();
}

document.querySelectorAll(".chips button")
.forEach(btn => {

  btn.addEventListener("click", () => {

    document
      .querySelectorAll(".chips button")
      .forEach(x => x.classList.remove("active"));

    btn.classList.add("active");

    categoria = btn.dataset.cat;

    filtrar();

  });

});

document
  .querySelector("#search")
  .addEventListener("input", filtrar);

carregarVideos();
