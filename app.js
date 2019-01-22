class AloWebComponent extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.text = this.getAttribute('text');
    this.render();
  }

  render() {
    const div = document.createElement('div');
    div.innerHTML = this.text;
    this.shadowRoot.appendChild(div);
  }
}

customElements.define('alo-web-component', AloWebComponent);
