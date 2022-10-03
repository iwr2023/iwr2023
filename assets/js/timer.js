class AppCountdown extends HTMLElement {

  // Can define constructor arguments if you wish.
  constructor() {
    // If you define a constructor, always call super() first!
    // This is specific to CE and required by the spec.
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this.timerDisplay = document.createElement("span");
    this._shadowRoot.appendChild(this.timerDisplay);
    this.timerId = undefined;
    this.targetDate = new Date().getTime()+2003030;
  }
  connectedCallback() {
    this.updateTargetDate(this.getAttribute('target-date'));
    this.startTimer();
  }
  startTimer(){
    this.timerId = setInterval(() => {
      const now = new Date().getTime();

      const distance = this.targetDate - now;
      if (distance < 0) {
        clearInterval(this.timerId);
        this.timerId=undefined;
        this.timerDisplay.innerHTML = "ARRIVED";
      }else{
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.timerDisplay.innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ";
      }
    }, 1000);
  }
  static get observedAttributes() { console.log("obser");return ['target-date']; }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if(name=="target-date"){
      this.updateTargetDate(newValue);
    }
  }

  updateTargetDate(inp){
    try{
      this.targetDate=new Date(inp).getTime();
      if(!this.timerId){
        this.startTimer();
      }
    }catch(e){
      console.error(`Could not parse Date "${inp}"`);
      this.targetDate=0;
    }
  }
  
  disconnectedCallback() {
    console.log("disconnected");
    clearInterval(this.timerId);
  }
  toggleDrawer() {
  }
}

customElements.define('app-countdown', AppCountdown);