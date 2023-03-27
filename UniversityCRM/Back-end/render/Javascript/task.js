function removeProject(){
    this.parentElement.parentElement.parentElement.remove();
}

function removeTask(){
    this.parentElement.parentElement.remove();
}

function addTask(){
    var taskcard = document.createElement("div");
    taskcard.className = "flexbox task--taskcard addtask";
    this.parentElement.parentElement.parentElement.appendChild(taskcard);

    //name
    var task_name = document.createElement("input");
    task_name.className = "task--headerchild20";
    task_name.placeholder = "name";
    taskcard.appendChild(task_name);

    //type
    var task_type = document.createElement("input");
    task_type.className = "task--headerchild20";
    task_type.placeholder = "type";
    taskcard.appendChild(task_type);

    //status
    var task_status = document.createElement("input");
    task_status.className = "task--headerchild20";
    task_status.placeholder = "status";
    taskcard.appendChild(task_status);

    //description
    var task_description = document.createElement("input");
    task_description.className = "task--headerchild30";
    task_description.placeholder = "description";
    taskcard.appendChild(task_description);

    //action
    var task_name = document.createElement("div");
    task_name.className = "task--headerchild10";

    //submit button
    var task_save = document.createElement("button");
    task_save.className = "btn--noborder";
    var saveicon = document.createElement("i");
    saveicon.className = "fas fa-check";
    task_save.appendChild(saveicon);
    task_name.appendChild(task_save);

    //remove button
    var task_remove = document.createElement("button");
    task_remove.className = "btn--noborder";
    task_remove.onclick = removeTask;
    var removeicon = document.createElement("i");
    removeicon.className = "fas fa-trash";
    task_remove.appendChild(removeicon);
    task_name.appendChild(task_remove);
 
    taskcard.appendChild(task_name);
}


function addProject(){
    //add a project card
    var projectcard = document.createElement("div");
    projectcard.className = "task--card";
    document.getElementById("project--container").appendChild(projectcard);
    

    //add project title into this card
    var projecttitle = document.createElement("div");
    projecttitle.className = "flexbox task--projectTitle";
    projectcard.appendChild(projecttitle);

    var titleinput = document.createElement("input");
    titleinput.className = "font--projectName btn--noborder";
    titleinput.placeholder = "Project Name";
    titleinput.name = "name";
    projecttitle.appendChild(titleinput);//project name input

    //container containing two btns
    var buttoncontainer = document.createElement("div");
    buttoncontainer.className = "button--container";
    projecttitle.appendChild(buttoncontainer);

    //add buttons into container
    var save = document.createElement("button");
    save.className = "btn--square btn--sort";
    save.type = "submit";
    save.innerHTML = "Save";
    
    buttoncontainer.appendChild(save);//save button

    var remove = document.createElement("button");
    remove.className = "btn--square btn--sort";
    // remove.type = "submit";
    remove.innerHTML = "Remove";
    remove.onclick = removeProject;
    buttoncontainer.appendChild(remove);

    var addtask = document.createElement("button");
    addtask.className = "btn--square btn--addContact";
    addtask.innerHTML = "Add a task";
    addtask.onclick = addTask;
    buttoncontainer.appendChild(addtask);//button to add a task
    
    // inputForm.appendChild(buttoncontainer);
    // projecttitle.appendChild(inputForm);//project name input

    //a line
    var hr = document.createElement("hr");
    projectcard.appendChild(hr);

    //container for tasks
    var taskcontainer = document.createElement("div");
    taskcontainer.className = "flexbox task--headercontainer";
    projectcard.appendChild(taskcontainer);

    //headers
    var name = document.createElement("div");
    name.className = "task--headerchild20";
    name.innerHTML = "Name";
    taskcontainer.appendChild(name);

    var type = document.createElement("div");
    type .className = "task--headerchild20";
    type .innerHTML = "Type";
    taskcontainer.appendChild(type );

    var status = document.createElement("div");
    status.className = "task--headerchild20";
    status.innerHTML = "Status";
    taskcontainer.appendChild(status);

    var description = document.createElement("div");
    description.className = "task--headerchild30";
    description.innerHTML = "Description";
    taskcontainer.appendChild(description);

    var action = document.createElement("div");
    action.className = "task--headerchild10";
    action.innerHTML = "Action";
    taskcontainer.appendChild(action);

                
    // // assign id
    // var taskCard = document.createElement("div");
    // taskCard.id = project[i]._id + "taskCard";
    // projectcard.appendChild(taskCard);

    


}