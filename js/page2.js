
// Carryin Ids
document.getElementById("nextPage").onclick = function(){
    
    alert("loading..")

    var id = "carlos12345";

    window.location.href = "index.html" + "?" + id;
}

// on hover
document.getElementById("nextPage").onmouseover = function(){
    document.getElementById("nextPage").style.backgroundColor ="transparent";
}