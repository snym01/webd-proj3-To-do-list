const input = document.getElementById("taskbox");
const addbtn = document.querySelector(".plussign");
const list = document.querySelector(".todo-list");
const todoItems = document.querySelectorAll(".todo-item");
const remainingText = document.getElementById("remaining");


addbtn.addEventListener("click", function () {
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

    updateRemaining()

    input.value = "";
});

list.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        updateRemaining()
    }

    if (e.target.classList.contains("check-btn")) {
        e.target.parentElement.classList.toggle("completed");
        updateRemaining()
    }

});

function updateRemaining() {
    const completedTasks = document.querySelectorAll(".todo-item.completed").length;
    const totalTasks = document.querySelectorAll(".todo-item").length;
    const remaining = totalTasks - completedTasks;
    remainingText.textContent = "Your remaining tasks : " + remaining;

}

input.addEventListener("keydown", function(e){
    if (e.key === "Enter"){
        addbtn.click();
    }
})

