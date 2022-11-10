let theInput = document.querySelector(".add-plan input");
let theAddButton = document.querySelector(".add-plan .plus");
let plansContainer = document.querySelector(".plans-content");
let plansCount = document.querySelector(".plans-count span");
let plansCompleted = document.querySelector(".plans-completed span");
window.onload = function() {
    theInput.focus();
};
theAddButton.onclick = function() {
    if (theInput.value === "") console.log("No Value");
    else {
        let noplansMsg = document.querySelector(".no-plans-message");
        if (document.body.contains(document.querySelector(".no-plans-message"))) noplansMsg.remove();
        let mainSpan = document.createElement("span");
        let deleteElement = document.createElement("span");
        let text = document.createTextNode(theInput.value);
        let deleteText = document.createTextNode("Ta bort");
        mainSpan.appendChild(text);
        mainSpan.className = "plan-box";
        deleteElement.appendChild(deleteText);
        deleteElement.className = "delete";
        mainSpan.appendChild(deleteElement);
        plansContainer.appendChild(mainSpan);
        theInput.value = "";
        theInput.focus();
        calculateplans();
    }
};
document.addEventListener("click", function(e) {
    if (e.target.className == "delete") {
        e.target.parentNode.remove();
        if (plansContainer.childElementCount == 0) createNoplans();
    }
    if (e.target.classList.contains("plan-box")) e.target.classList.toggle("finished");
    calculateplans();
});
function createNoplans() {
    let msgSpan = document.createElement("span");
    let msgText = document.createTextNode("No plans To Show");
    msgSpan.appendChild(msgText);
    msgSpan.className = "no-plans-message";
    plansContainer.appendChild(msgSpan);
}
function calculateplans() {
    plansCount.innerHTML = document.querySelectorAll(".plans-content .plan-box").length;
    plansCompleted.innerHTML = document.querySelectorAll(".plans-content .finished").length;
}

//# sourceMappingURL=index.f2a3eb3f.js.map
