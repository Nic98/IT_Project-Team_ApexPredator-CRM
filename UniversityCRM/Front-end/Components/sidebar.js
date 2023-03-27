class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    
    <div class = "sidebar ">
        <div class = "logo_content">
            <div class = "logo">
                
                <dive class = "logo_name"> ApexPredator </dive>
             
                    <i class="fas fa-bars" id="btn" onclick="expandSideBar()"></i>
            
                
                
            </div>
            
        </div>

        <ul class="nav_list">
            <li>
                <a href="#">
                    <i class="fas fa-home"></i>
                    <span class="links_name">Dashboard</span>
                </a>
                <span class = "tooltip">Dashboard</span>
            </li>

            <li>
                <a href="#">
                    <i class="fas fa-user-friends"></i>
                    <span class="links_name">Contacts</span>
                </a>
                <span class = "tooltip">Contacts</span>
            </li>

            <li>
                <a href="#">
                    <i class="fas fa-tasks"></i>
                    <span class="links_name">Tasks</span>
                </a>
                <span class = "tooltip">Tasks</span>
            </li>

          

            <li>
                <a href="#">
                    <i class="fas fa-user-circle"></i>
                    <span class="links_name">Profile</span>
                </a>
                <span class = "tooltip">Profile</span>
            </li>
                
        </ul> 
    </div>

    `;
  }
}

customElements.define('sidebar-component', Footer);