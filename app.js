class AloWebComponent extends HTMLElement {
  static get template() {
    const template = document.createElement('template');
    template.innerHTML = `
      This is the component initial content!
    `;
    return template;
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(
      AloWebComponent.template.content.cloneNode(true)
    );
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
