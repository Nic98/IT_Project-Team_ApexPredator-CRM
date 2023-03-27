function removeContact(){
    // var a = document.getElementById("new flexbox contact--card");
   
    this.parentElement.parentElement.remove();
}



function addContact(){
    
    var div = document.createElement('form');
    div.action = "/contact/addContact";
    div.method = "POST";

    //name
    var name = document.createElement("input");
    name.className = "text--center";
    name.placeholder = "name";
    name.name = "name";
    name.defaultValue = "name";
    div.appendChild(name);

    //email
    var email = document.createElement("input");
    email.className = "text--center";
    email.name = "email_address";
    email.placeholder = "email";
    div.appendChild(email);

    //phone number
    var phone = document.createElement("input");
    phone.className = "text--center";
    phone.defaultValue = "000";
    phone.placeholder = "111";
    phone.name = "phone_number";
    div.appendChild(phone);

    //address
    // var address = document.createElement("input");
    // address.className = "text--center";
    // address.placeholder = "address";
    // address.name = "address";
    // div.appendChild(address);

    // var description = document.createElement("");
    // description.className = "text--center";
    // description.placeholder = "description";
    // description.name = "description";

    var priority_input = document.createElement("select");
    priority_input.name = "priority";
    var p1 = document.createElement("option");
    p1.value = "1";
    p1.innerHTML = "1";
    p1.className = "text--center";

    var p2 = document.createElement("option");
    p2.value = "2";
    p2.innerHTML = "2";
    p2.className = "text--center";

    var p3 = document.createElement("option");
    p3.value = "3";
    p3.innerHTML = "3";
    p3.className = "text--center";
    // p1.className = "text--center";
    priority_input.appendChild(p1);
    priority_input.appendChild(p2);
    priority_input.appendChild(p3);
    
    priority_input.className = "width20";
    div.appendChild(priority_input);
    
    //action buttons
    var action = document.createElement("div");
    action.className = "text--center action--container";

    //submit btn
    var submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "btn--noborder";
    var editicon = document.createElement("i");
    editicon.className = "fas fa-check";
    submit.appendChild(editicon);
    action.appendChild(submit);

    // //show contact detail btn
    // var showall = document.createElement("button");
    // showall.className = "btn--noborder";
    // var showallicon = document.createElement("i");
    // showallicon.className = "fas fa-address-book";
    // showall.appendChild(showallicon);
    // action.appendChild(showall);

    //remove the contact btn
    var remove = document.createElement("button");
    remove.className = "btn--noborder";
    remove.onclick = removeContact;
    var removeicon = document.createElement("i");
    removeicon.className = "fas fa-trash";
    remove.appendChild(removeicon);
    action.appendChild(remove);


    div.appendChild(action);

    

    div.id = "new flexbox contact--card"
    div.className = "flexbox contact--card addcontact--card"
    document.getElementById("addcontact").appendChild(div);
}