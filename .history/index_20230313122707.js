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

if(fire2.style.top === "36vh"){
  btnThapnen.style.display = "none"
}

btnThapnen.onclick = () => {
  btnThoinen.style.display = "flex";
  btnThapnen.style.display = "none";
  con.style.backgroundColor = "black";
  fire2.style.display = "block";
  fire4.style.display = "block";
};

btnThoinen.onclick = () => {
  btnThoinen.style.display = "none";
  btnThapnen.style.display = "flex";
  con.style.backgroundColor = "#FFE6E6";
  fire2.style.display = "none";
  fire4.style.display = "none";
  modal.style.display = "block";
  loichuc.style.display = "block";
};
