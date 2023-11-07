let _addBtn = document.getElementById("add_task_btn");
let _task_input_field = document.getElementById("task_name_1");
let _task_list = document.getElementById("task_list");

_addBtn.addEventListener("click", function(){
    //console.log(_task_input_field.value);
    if(_task_input_field.value !== "") {
        addTask(_task_input_field.value);
    }
    
});

function addTask(newTask) {
    let new_task_li = document.createElement("li");
    new_task_li.innerHTML = newTask;
    _task_list.append(new_task_li);
    _task_input_field.value = "";
}