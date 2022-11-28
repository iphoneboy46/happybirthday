const btnThapnen = document.querySelector(".btnThapnen");
const con = document.querySelector(".container");
const fire2 = document.querySelector(".fire2");
const fire4 = document.querySelector(".fire4");


btnThapnen.onclick = () => {
    con.style.backgroundColor = "black";
    fire2.style.display = "block";
    fire4.style.display = "block";

};
