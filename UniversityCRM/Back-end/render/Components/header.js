class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="flexbox workspaceheader--container">
      <div class="flexbox searchbar--container">
        <div class = "show--mobile">
            <i class="fas fa-bars " id="btn" onclick="expandSideBar()"></i>
        </div>
 
        <input placeholder="search contacts, tasks..." class="login--input seachbar" type="text">
     
          

          
      </div>
      <div class="flexbox settingbar--container">
          <form class="columnflex" method="POST" action="/mode/setMode">
            <button type="submit" class="btn--noborder light" onclick="">
                <i id="modeicon" class="fas fa-moon"></i>
            </button >
          </form>
          <button onclick="getCalendarModal()" class="btn--noborder">
              <i class="fas fa-calendar-week"></i>
          </button>
          <form class="columnflex" action="/user/logout" method="GET">
            <button class="btn--noborder">
                
                <i class="fas fa-sign-out-alt"></i>
                
            </button>
          </form>
          
          
       

      </div>
      


  </div>
  <div onclick="closeCalendarModal()"  id = "calendarModal">
            <div class="calendarContainer">
                <div class="col-md-12">
                    <div class="content w-100">
                    <div class="calendar-container">
                        <div class="calendar"> 
                        <div class="year-header"> 
                            <span class="left-button fa fa-chevron-left" id="prev"> </span> 
                            <span class="year" id="label"></span> 
                            <span class="right-button fa fa-chevron-right" id="next"> </span>
                        </div> 
                        <table class="months-table w-100"> 
                            <tbody>
                            <tr class="months-row">
                                <td class="month">Jan</td> 
                                <td class="month">Feb</td> 
                                <td class="month">Mar</td> 
                                <td class="month">Apr</td> 
                                <td class="month">May</td> 
                                <td class="month">Jun</td> 
                                <td class="month">Jul</td>
                                <td class="month">Aug</td> 
                                <td class="month">Sep</td> 
                                <td class="month">Oct</td>          
                                <td class="month">Nov</td>
                                <td class="month">Dec</td>
                            </tr>
                            </tbody>
                        </table> 
                        
                        <table class="days-table w-100"> 
                            <td class="day">Sun</td> 
                            <td class="day">Mon</td> 
                            <td class="day">Tue</td> 
                            <td class="day">Wed</td> 
                            <td class="day">Thu</td> 
                            <td class="day">Fri</td> 
                            <td class="day">Sat</td>
                        </table> 
                        <div class="frame"> 
                            <table class="dates-table w-100"> 
                            <tbody class="tbody">             
                            </tbody> 
                            </table>
                        </div> 
                        <button class="button" id="add-button">Add Event</button>
                        </div>
                    </div>
                    <div class="events-container">
                    </div>
                    <div class="dialog" id="dialog">
                        <h2 class="dialog-header"> Add New Event </h2>
                        <form class="form" id="form">
                            <div class="form-container" align="center">
                            <label class="form-label" id="valueFromMyButton" for="name">Event Name</label>
                            <input class="input" type="text" id="name" maxlength="36">
                            <label class="form-label" id="valueFromMyButton" for="count">Hours may spend</label>
                            <input class="input" type="number" id="count" min="0" max="1000000" maxlength="7">
                            <input type="button" value="Cancel" class="button" id="cancel-button">
                            <input type="button" value="OK" class="button button-white" id="ok-button">
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>    

        </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);