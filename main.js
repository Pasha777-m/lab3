function openContent(numberItem) {
    var i, item, item0;
    item = document.getElementsByClassName("item");
    for (i = 0; i < item.length; i++) {
        item[i].style.display = "none";
    }
    item0 = document.getElementsByClassName("item0");
    for (i = 0; i < item0.length; i++) {
        item0[i].className = item0[i].className.replace(" active", "");
    }
    document.getElementById(numberItem).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();