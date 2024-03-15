// -----about section-----
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");


function opentab(name)
{
    for(let tabLink of tabLinks)
    {
        tabLink.classList.remove("active-link");
    }
    for(let tabContent of tabContents)
    {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    let tabname =document.getElementById(name)
    tabname.classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");
function openMenu(){
    sidemenu.style.display ="block";
}
function closeMenu(){
    sidemenu.style.display="none";
}