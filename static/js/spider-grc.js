document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popupBackground");
    const openPopup = document.getElementById("openPopup");
    const closePopup = document.getElementById("closePopup");

    openPopup.onclick = function () {
        popup.style.display = "block";
    }

    closePopup.onclick = function () {
        popup.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    }
});
