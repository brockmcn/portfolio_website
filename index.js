window.onload = function () {
    clearWork();
    bfm.style.display = "block";
    toggleMenu();
};

function toggleMenu() {
    var children = document.getElementById("menu-bar").children;

    if (children[0].style.display == "none") {
        for (var i = 0; i < children.length; i++) {
            children[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < children.length; i++) {
            children[i].style.display = "none";
        }
    }

}

function clearWork() {
    var bfm = document.getElementById("bfm");
    var jmu = document.getElementById("jmu");
    var chesterfield = document.getElementById("chesterfield");
    var amelia = document.getElementById("amelia");

    var workObjects = [bfm, jmu, chesterfield, amelia];

    for (var i = 0; i < workObjects.length; i++) {
        workObjects[i].style.display = "none";
    }
}

function toggleBfm() {
    if (bfm.style.display == "none") {
        clearWork();
        bfm.style.display = "block";
    }
}

function toggleJmu() {
    if (jmu.style.display == "none") {
        clearWork();
        jmu.style.display = "block";
    }
}

function toggleChesterfield() {

    var work = document.getElementById("work");

    if (chesterfield.style.display == "none") {
        clearWork();
        chesterfield.style.display = "block";
    }
}

function toggleAmelia() {

    var work = document.getElementById("work");

    if (amelia.style.display == "none") {
        clearWork();
        amelia.style.display = "block";
    }
}