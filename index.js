// mode = "light";
function changeMode(){
    const body = document.body;
    const btn = document.getElementById("top-right-btn");

    body.classList.toggle("darkMode");

    if (body.classList.contains("darkMode")) {
        btn.innerHTML = "Light Mode";
        btn.style.backgroundColor = "rgb(244, 244, 247)";
        btn.style.color = "rgb(8, 2, 41)";
    } else {
        btn.innerHTML = "Dark Mode";
        btn.style.backgroundColor = "rgb(3, 0, 48)";
        btn.style.color = "rgb(239, 239, 242)";
    }
}

function toggleSection(listID, arrowID){
    const list = document.getElementById(listID);
    const arrow = document.getElementById(arrowID);
    if(list.style.display == "none"){
        list.style.display = "block";
        arrow.style.transform = "rotate(90deg)";
    }
    else{
        list.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    }
}