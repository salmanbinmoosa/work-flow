
// adding elements in js 
const listsParent = document.getElementById("lists-parent")
const addList = document.getElementById("add-list")
const listInput = document.getElementById("listInput")
const cloneUsecase = document.getElementById("clone-usecase")


const hideUSeCase = document.getElementById("hide-use-case")
const addNewListBtn = document.getElementById("add-new-list-btn")
// added elements

// adding eventin add use case tpggle
hideUSeCase.addEventListener("click", () => {
    hideUSeCase.style.display = "none"
    addNewListBtn.style.display = "flex"

    addList.addEventListener("click", () => {

        if (listInput.value !== "") {

            addNewListBtn.style.display = "none"

            const listTempelete = document.getElementById("list-tempelete")
            const cloneTempelete = listTempelete.cloneNode(true)

            listsParent.appendChild(cloneTempelete);

            listsParent.appendChild(hideUSeCase)
            listsParent.appendChild(addNewListBtn)
        
            hideUSeCase.style.display = "flex"

            const tempH2 = cloneTempelete.querySelector("#temp-h2");
            tempH2.textContent = listInput.value


        }
    })
})


// const cloneHideUSeCase = hideUSeCase.cloneNode(true)
// listsParent.appendChild(cloneHideUSeCase)
// cloneHideUSeCase.style.display = "flex"