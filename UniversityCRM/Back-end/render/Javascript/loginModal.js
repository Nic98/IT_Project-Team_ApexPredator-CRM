function getLoginModal(){
    document.getElementById('login--modal').style.display = "block";
    document.querySelector("body").style.position = "fixed";
}

function closeLoginModal(){
    document.getElementById('login--modal').style.display = "none";
    document.querySelector("body").style.position = "static";
}

function getCalendarModal(){
    
    if(document.getElementById('calendarModal').style.display == "block"){
        document.getElementById('calendarModal').style.display = "none";
    }else{
        document.getElementById('calendarModal').style.display = "block";
    }
}

function closeCalendarModal(){
    var modal = document.getElementById('calendarModal');
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none";
        }
    }
}