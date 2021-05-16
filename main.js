function loadContent(){
    var contentDiv = document.getElementById("app");
    contentDiv.innerHTML = location.hash;
}

if(!location.hash) {
    location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent);
