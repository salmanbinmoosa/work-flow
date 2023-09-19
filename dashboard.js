const projectLists1 = document.querySelector(".list-left-top-right  p:nth-child(1)")
        const projectLists2 = document.querySelector(".list-left-top-right  p:nth-child(2)")
        const projectLists3 = document.querySelector(".list-left-top-right  p:nth-child(3)")

        function underline(a) {
            a.classList.add("underlines")
        }
        projectLists1.addEventListener("click", () => {
            underline(projectLists1)

        })
        projectLists2.addEventListener("click", () => {
            underline(projectLists2)
        })
        projectLists3.addEventListener("click", () => {
            underline(projectLists3)
        })