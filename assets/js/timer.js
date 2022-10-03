class LongName extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    console.log("setup2");
    this._shadowRoot = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("span");
    wrapper.innerHTML = "asdddf";
    shadow.appendChild(wrapper);
    // Element functionality written in here
  }
  connectedCallback() {
    console.info("connected");
    this.innerHTML = "Hello"; //can't be set in constructor()
  }
}
console.log("setup");
customElements.define("iwr-asdf", LongName, { extends: "div" });
