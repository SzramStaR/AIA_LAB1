const addBtn = document.querySelector(".add-btn")

addBtn.onclick = function(){
    const newRow = document.createElement('div')
    newRow.className = 'row'
    const authorDiv = document.createElement('div')
    authorDiv.className = "author-div"
    const titleDiv = document.createElement('div')
    titleDiv.className = "title-div"
    const buttonDiv = document.createElement('div')
    buttonDiv.className = "buttons"

    const authorInput = document.createElement('input')
    const titleInput = document.createElement('input')

    const saveBtn = document.createElement("button")
    const removeBtn = document.createElement("button")

    saveBtn.textContent = "Save"
    saveBtn.onclick = function(){
        this.textContent = "Edit"
        const authorText = document.createTextNode(authorInput.value)
        const titleText = document.createTextNode(titleInput.value)

        authorInput.replaceWith(authorText)
        titleInput.replaceWith(titleText)


        this.onclick = function(){
            // Edit function
            if(this.innerText.toLowerCase() == "edit"){
                this.textContent = "Save"
                authorDiv.replaceChild(authorInput, authorDiv.firstChild)
                titleDiv.replaceChild(titleInput, titleDiv.firstChild)
            } else{
                this.textContent = "Edit"
                const authorText = document.createTextNode(authorInput.value)
                const titleText = document.createTextNode(titleInput.value)

                authorInput.replaceWith(authorText)
                titleInput.replaceWith(titleText)
            }
        }
    }
    removeBtn.textContent = "Remove"
    removeBtn.onclick = function(){
        //remove function
        newRow.parentNode.removeChild(newRow)
    }

    authorDiv.append(authorInput)
    titleDiv.append(titleInput)
    buttonDiv.append(saveBtn)
    buttonDiv.append(removeBtn)

    newRow.append(authorDiv)
    newRow.append(titleDiv)
    newRow.append(buttonDiv)
    
    document.querySelector(".table").append(newRow)
}
