const btnThapnen = document.querySelector(".btnThapnen");
const btnThoinen = document.querySelector(".btnThoinen");

const con = document.querySelector(".container");
const fire2 = document.querySelector(".fire2");
const fire4 = document.querySelector(".fire4");


btnThapnen.onclick = () => {
    con.style.backgroundColor = "black";
    fire2.style.display = "block";
    fire4.style.display = "block";

};


btnThoinen.onclick = () => {
    con.style.backgroundColor = "#FFE6E6";
    fire2.style.display = "none";
    fire4.style.display = "none";
};