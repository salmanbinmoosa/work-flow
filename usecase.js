
// add new list toggle starts //

const hideUSeCase = document.getElementById("hide-use-case")
const addNewListBtn = document.getElementById("add-new-list-btn")

hideUSeCase.addEventListener("click", () => {
    hideUSeCase.style.display = "none"
    console.log("add new use btn Clicked");

    addNewListBtn.style.display = "flex"
})

// add new list toggle ends //


// on click new element //
const listsParent = document.getElementById("lists-parent")
const addList = document.getElementById("add-list")
const listInput = document.getElementById("listInput")
const cloneUsecase = document.getElementById("clone-usecase")
addList.addEventListener("click", () => {
    if (listInput.value !== "") {
        addNewListBtn.style.display = "none"


        const newElement = document.createElement("div")
        listsParent.appendChild(newElement)
        newElement.classList.add("list")

        const listHtwo = document.createElement("h2")
        newElement.appendChild("listHtwo")
        listHtwo.innerText = "new element"


    }

})

addList.addEventListener("click", () => {

    const clonedUsecase = cloneUsecase.cloneNode(true);
    listsParent.appendChild(clonedUsecase)
    return clonedUsecase
})
