const btnThapnen = document.querySelector(".btnThapnen");
const btnThoinen = document.querySelector(".btnThoinen");

const con = document.querySelector(".container");
const fire2 = document.querySelector(".fire2");
const fire4 = document.querySelector(".fire4");

const batden = document.querySelector(".batden");
const moden = document.querySelector(".moden");
const audioHpbd = document.querySelector(".audioHpbd");
const loichuc = document.querySelector(".loichuc");
const modal = document.querySelector(".modal");



batden.onclick = () => {
  moden.style.display = "none";
  audioHpbd.play();
};



btnThapnen.onclick = () => {
  btnThoinen.style.display = "flex";
  btnThapnen.style.display = "none";
  con.style.backgroundColor = "black";
  fire2.style.display = "block";
  fire4.style.display = "block";
};

btnThoinen.onclick = () => {
  const canvas = document.getElementById("canvas");
  btnThoinen.style.display = "none";
  btnThapnen.style.display = "flex";
  con.style.backgroundColor = "#CFFDE1";
  fire2.style.display = "none";
  fire4.style.display = "none";
  modal.style.display = "block";
  loichuc.style.display = "block";
  canvas.classList.add("showed")
  audioHpbd.pause();
};
