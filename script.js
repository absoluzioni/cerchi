const q = document.querySelector(".disegno--q");
const menus = document.querySelectorAll(".disegno__menu");
const grafica = document.querySelector(".grafica");
const firstVoice = document.querySelector(".disegno__menu--first");
const pulsante = document.querySelector(".pulsante");

q.addEventListener("mouseenter", (e) => visualizzaMenu(e));
q.addEventListener("touchstart", (e) => visualizzaMenu(e));
grafica.addEventListener("mouseleave", (e) => nascondiMenu(e));
grafica.addEventListener("touchend", (e) => nascondiMenu(e));

firstVoice.addEventListener("mouseenter", (e) => ruotaDisegno(e));
firstVoice.addEventListener("touchstart", (e) => ruotaDisegno(e));
firstVoice.addEventListener("mouseleave", (e) => ruotaDisegno(e));
firstVoice.addEventListener("touchend", (e) => ruotaDisegno(e));

setTimeout(() => {
  pulsante.classList.remove("dn");
}, 1500);

function visualizzaMenu(e) {
  let disegno = e.target;
  const circonferenza = disegno.querySelector(".circonferenza");
  const testo = disegno.querySelector(".circonferenza__testo");
  const trapezio = disegno.querySelector(".trapezio");
  const pulsante = disegno.querySelector(".pulsante");

  circonferenza.classList.add("yellow-border");
  trapezio.classList.add("yellow-bg");
  pulsante.classList.add("dn");
  testo.classList.remove("dn");

  console.log(menus);

  menus.forEach((menu) => {
    menu.classList.remove("dn");
  });
}

function nascondiMenu(e) {
  let disegno = e.target;
  const circonferenza = disegno.querySelector(".circonferenza");
  const testo = disegno.querySelector(".circonferenza__testo");
  const trapezio = disegno.querySelector(".trapezio");
  const pulsante = disegno.querySelector(".pulsante");

  circonferenza.classList.remove("yellow-border");
  trapezio.classList.remove("yellow-bg");
  pulsante.classList.remove("dn");
  testo.classList.add("dn");

  menus.forEach((menu) => {
    menu.classList.add("dn");
  });
}

function ruotaDisegno(e) {
  let circonferenza = e.target.parentElement.querySelector(".circonferenza");
  circonferenza.classList.toggle("active");
}

