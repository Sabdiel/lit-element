import { LitElement,css, html } from 'lit';
import {map} from 'lit/directives/map.js';
export class SimpleComponent extends LitElement {
  static properties = {
    things: {state: true},
  };
_deleteThing() {
    this.things = /*this.things.pop((_, i) => i !== index)*/ console.log('enter');
  }
  constructor() {
    super();
    this.lista = ['Lista', ];
  }
  render() {
    return html`
      <input @keyup="${this.agregarElemento}">
      <ul>
        ${this.lista.map(item => html`<li>${item}</li>`)}
      </ul>
    `;
  }

  agregarElemento(e) {
    if (e.key === 'Enter') {
      this.lista = [...this.lista, e.target.value];
      e.target.value = '';
    }
  }

}
customElements.define('simple-component', SimpleComponent);
