import { LitElement,css, html } from 'lit';
import {map} from 'lit/directives/map.js';
export class SimpleComponent extends LitElement {
  static get properties() {
    return {
      tasks: { type: Array },
      inputText: { type: String },
    };
  }

  constructor() {
    super();
    this.tasks = [];
    this.inputText = '';
  }

  nuevaTarea() {
    if (this.inputText) {
      this.tasks = [...this.tasks, { text: this.inputText, done: false,timeAdded:Date.now()}];
      this.inputText = '';
    }
  }

  marcarTarea(index) {
    this.tasks = this.tasks.map((task, i) => {
      if (i === index) {
        return { ...task, done: !task.done };
      }
      return task;
    });
  }

  render() {
    return html`
      <input
        type="text"
        .value=${this.inputText}
        @keyup=${(e) => e.key === 'Enter' && this.nuevaTarea()}
        @input=${(e) => (this.inputText = e.target.value)}
      />
      <ul>
        ${this.tasks.map(
          (task, i) =>
            html`
              <li style="text-decoration: ${task.done ? 'line-through' : 'none'};
               color: ${task.done ? 'gray' : 'black'}; 
               background-color: ${Date.now() - task.timeAdded > 5000 ? 'red' : 'green'};">
                <input
                  type="checkbox"
                  .checked=${task.done}
                  @change=${() => this.marcarTarea(i)}
                />
                ${task.text}
              </li>
            `
        )}
      </ul>
    `;
  }
}
customElements.define('simple-component', SimpleComponent);