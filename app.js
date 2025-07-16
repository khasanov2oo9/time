setInterval(() => {
  let time = new Date();

  let soat = document.getElementById("soat");
  let min = document.getElementById("min");
  let sek = document.getElementById("sek");

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  soat.innerText = hours.toString().padStart(2, "0");
  min.innerText = minutes.toString().padStart(2, "0");
  sek.innerText = seconds.toString().padStart(2, "0");

}, 1000);
