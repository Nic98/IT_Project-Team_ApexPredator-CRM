
fetch('/mode/getMode')
.then(function (response) {
    return response.json();
})
.then(function (mode) {
    rendorCurrentMode(mode);
})
.catch(function (err) {
    console.log('error: ' + err);
});

function rendorCurrentMode(mode){
    if(mode == "light"){
        // //switch background
        // var element = document.body;
        // element.classList.remove("darkmode");
    }else if(mode == 'dark'){
        document.getElementById("modeicon").className = "fas fa-sun";


        //switch background
        var element = document.body;
        element.classList.add("darkmode");

        //switch header
        var header = document.querySelector(".workspaceheader--container");
        header.classList.toggle("darkmode--toheadergray");

        var headericon = document.querySelector(".fa-sun");
        headericon.classList.toggle("darkmode--towhite");

        var overview_p = document.querySelector(".font--welcometext");
        if (overview_p != null){
            overview_p.classList.toggle("darkmode--towhite");
        }

        var overview_hi = document.querySelector(".font--hi");
        if (overview_hi != null){
            overview_hi.classList.toggle("darkmode--towhite");
        }

        var overview_name = document.querySelector(".font--name");
        if (overview_name != null){
            overview_name.classList.toggle("darkmode--towhite");
        }
       

        var headercalendar = document.querySelector(".fa-calendar-week");
        headercalendar.classList.toggle("darkmode--towhite");

        var headerlogout = document.querySelector(".fa-sign-out-alt");
        headerlogout.classList.toggle("darkmode--towhite");

        //overview card
        var overview_card = document.querySelectorAll(".recentcard--container");
        var overview_card_n = overview_card.length;
        if(overview_card != null){
            for(i = 0; i < overview_card_n; i++){
                overview_card[i].classList.toggle("darkmode--contactcontainer");
            }
        }
        

        var eventcard = document.querySelector(".recentcard--eventcontainer");
        if(eventcard != null){
            eventcard.classList.toggle("darkmode--contactcontainer");
        }
    

        // switch input label
        var p = document.querySelectorAll(".label");
        var p_n = p.length;
        for(i = 0; i < p_n; i++){
            p[i].classList.toggle("darkmode--towhite");
        }

        // switch page title
        var title = document.querySelectorAll(".font--overview");
        var title_n = title.length;
        for(i = 0; i < title_n; i++){
            title[i].classList.toggle("darkmode--towhite");
        }

        // switch the inputs
        var input = document.querySelectorAll(".profile--input");
        var input_n = input.length;
        for(i = 0; i < input_n; i++){
            input[i].classList.toggle("darkmode--input");
        
        }

        // switch save changes btn
        var savechangesbtn = document.querySelectorAll(".btn--savechanges");
        var savechangesbtn_n = savechangesbtn.length;
        for(i = 0; i < savechangesbtn_n; i++){
            savechangesbtn[i].classList.toggle("darkmode--savechangesbtn");
        
        }

        // switch line btn
        var linebtn = document.querySelectorAll(".btn--addContact");
        var linebtn_n = linebtn.length;
        if(linebtn != null){
            for(i=0; i < linebtn_n; i++){
                linebtn[i].classList.toggle("darkmode--linebtn");
            }
        }
    
   

        // switch solid btn
        var solidbtn = document.querySelectorAll(".btn--sort");
        var solidbtn_n = solidbtn.length;
        if(solidbtn != null){
            for(i = 0; i < solidbtn_n; i++){
                solidbtn[i].classList.toggle("darkmode--solidbtn");
            }
        }
  


        // switch page card/ container
        var contact_container = document.querySelector(".contact--container");
        if(contact_container != null){
            contact_container.classList.toggle("darkmode--contactcontainer");
        }
    

        var task_container = document.querySelectorAll(".task--card");
        var task_container_n = task_container.length;
        if(task_container != null){
            
            for(i = 0; i < task_container_n; i++){
                // console.log("!!!");
                task_container[i].classList.toggle("darkmode--contactcontainer");
            }
        }

    

        //switch header text
        var headertxt = document.querySelectorAll(".font--contactHeader");
        var headertxt_n = headertxt.length;
        for(i = 0; i < headertxt_n; i++){
            headertxt[i].classList.toggle("darkmode--headertxt");
        }

        // switch contact cards
        var contact_card = document.querySelectorAll(".contact--card");
        var contact_card_n = contact_card.length;
        if(contact_card != null){
            for(i=0; i < contact_card_n; i++){
                contact_card[i].classList.toggle("darkmode--contactcard");
            }
        }

    // switch task cards
    var task_card = document.querySelectorAll(".task--taskcard");
    var task_card_n = task_card.length;
    if(task_card != null){
        // console.log("!!!");
        for(i=0; i < task_card_n; i++){
            task_card[i].classList.toggle("darkmode--contactcard");
        }
    }

        // switch overview cards
        var overview_card = document.querySelectorAll(".taskcard--container");
        var overview_card_n = overview_card.length;
        if(overview_card != null){
            for(i=0; i < overview_card_n; i++){
                overview_card[i].classList.toggle("darkmode--contactcard");
            }
        }

        var overview_card = document.querySelectorAll(".onerecentcantact");
        var overview_card_n = overview_card.length;
        if(overview_card != null){
            for(i=0; i < overview_card_n; i++){
                overview_card[i].classList.toggle("darkmode--contactcard");
            }
        }



        // switch project name
        var projectname = document.querySelectorAll(".font--projectName");
        var projectname_n = projectname.length;
        if(projectname != null){
            for(i = 0; i < projectname_n; i++){
                projectname[i].classList.toggle("darkmode--projectname");
            }
        }

        

    }
}

// function switchMode(){
//     if (document.getElementById("modeicon").className == "fas fa-moon"){
       
//         document.getElementById("modeicon").className = "fas fa-sun";

//         //switch background
//     var element = document.body;
//     element.classList.toggle("darkmode");
//     //switch header
//     var header = document.querySelector(".workspaceheader--container");
//     header.classList.toggle("darkmode--toheadergray");

//     var headericon = document.querySelector(".fa-sun");
//     headericon.classList.toggle("darkmode--towhite");

//     var headercalendar = document.querySelector(".fa-calendar-week");
//     headercalendar.classList.toggle("darkmode--towhite");

//     var headerlogout = document.querySelector(".fa-sign-out-alt");
//     headerlogout.classList.toggle("darkmode--towhite");

//     //overview card
//     var overview_card = document.querySelectorAll(".recentcard--container");
//     var overview_card_n = overview_card.length;
//     if(overview_card != null){
//         for(i = 0; i < overview_card_n; i++){
//             overview_card[i].classList.toggle("darkmode--contactcontainer");
//         }
//     }
    

//     var eventcard = document.querySelector(".recentcard--eventcontainer");
//     if(eventcard != null){
//         eventcard.classList.toggle("darkmode--contactcontainer");
//     }
    

//     // switch input label
//     var p = document.querySelectorAll(".label");
//     var p_n = p.length;
//     for(i = 0; i < p_n; i++){
//         p[i].classList.toggle("darkmode--towhite");
//     }

//     // switch page title
//     var title = document.querySelectorAll(".font--overview");
//     var title_n = title.length;
//     for(i = 0; i < title_n; i++){
//         title[i].classList.toggle("darkmode--towhite");
//     }

//     // switch the inputs
//     var input = document.querySelectorAll(".profile--input");
//     var input_n = input.length;
//     for(i = 0; i < input_n; i++){
//         input[i].classList.toggle("darkmode--input");
      
//     }

//     // switch save changes btn
//     var savechangesbtn = document.querySelectorAll(".btn--savechanges");
//     var savechangesbtn_n = savechangesbtn.length;
//     for(i = 0; i < savechangesbtn_n; i++){
//         savechangesbtn[i].classList.toggle("darkmode--savechangesbtn");
      
//     }
//     }
//     else{
//         location.reload();
//         document.getElementById("modeicon").className = "fas fa-moon";
//     }

//     // switch line btn
//     var linebtn = document.querySelectorAll(".btn--addContact");
//     var linebtn_n = linebtn.length;
//     if(linebtn != null){
//         for(i=0; i < linebtn_n; i++){
//             linebtn[i].classList.toggle("darkmode--linebtn");
//         }
//     }
    
   

//     // switch solid btn
//     var solidbtn = document.querySelectorAll(".btn--sort");
//     var solidbtn_n = solidbtn.length;
//     if(solidbtn != null){
//         for(i = 0; i < solidbtn_n; i++){
//             solidbtn[i].classList.toggle("darkmode--solidbtn");
//         }
//     }
  


//     // switch page card/ container
//     var contact_container = document.querySelector(".contact--container");
//     if(contact_container != null){
//         contact_container.classList.toggle("darkmode--contactcontainer");
//     }
    

//     var task_container = document.querySelectorAll(".task--card");
//     var task_container_n = task_container.length;
//     if(task_container != null){
//         for(i = 0; i < task_container_n; i++){
//             task_container[i].classList.toggle("darkmode--contactcontainer");
//         }
//     }

    

//     //switch header text
//     var headertxt = document.querySelectorAll(".font--contactHeader");
//     var headertxt_n = headertxt.length;
//     for(i = 0; i < headertxt_n; i++){
//         headertxt[i].classList.toggle("darkmode--headertxt");
//     }

//     // switch contact cards
//     var contact_card = document.querySelectorAll(".contact--card");
//     var contact_card_n = contact_card.length;
//     if(contact_card != null){
//         for(i=0; i < contact_card_n; i++){
//             contact_card[i].classList.toggle("darkmode--contactcard");
//         }
//     }

//     // switch task cards
//     var task_card = document.querySelectorAll(".task--taskcard");
//     var task_card_n = task_card.length;
//     if(task_card != null){
//         for(i=0; i < task_card_n; i++){
//             task_card[i].classList.toggle("darkmode--contactcard");
//         }
//     }

//     // switch overview cards
//     var overview_card = document.querySelectorAll(".taskcard--container");
//     var overview_card_n = overview_card.length;
//     if(overview_card != null){
//         for(i=0; i < overview_card_n; i++){
//             overview_card[i].classList.toggle("darkmode--contactcard");
//         }
//     }

//     var overview_card = document.querySelectorAll(".onerecentcantact");
//     var overview_card_n = overview_card.length;
//     if(overview_card != null){
//         for(i=0; i < overview_card_n; i++){
//             overview_card[i].classList.toggle("darkmode--contactcard");
//         }
//     }



//     // switch project name
//     var projectname = document.querySelectorAll(".font--projectName");
//     var projectname_n = projectname.length;
//     if(projectname != null){
//         for(i = 0; i < projectname_n; i++){
//             projectname[i].classList.toggle("darkmode--projectname");
//         }
//     }

    
    
// }