 const input = document.getElementById("taskbox");
 const addbtn = document.querySelector(".plussign");
 const list = document.querySelector(".todo-list")

 addbtn.addEventListener("click", function(){
    const text = input.value.trim();
    if (text === "") {
        return;
    }
    
    const li = document.createElement("li");
    li.classList.add("todo-item");
    
    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");

    const span = document.createElement("span");
    span.classList.add("text");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "✖";
    
    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.prepend(li);

    input.value = "";

});
