import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('my-app')
export class MyApp extends LitElement  {

    static styles = css`
        @import url('https://use.fontawesome.com/releases/v5.7.1/css/solid.css');
        @import url('https://use.fontawesome.com/releases/v5.7.1/css/fontawesome.css');

        :host {
            display: block;
            background-color: #eee;
        }
    `;

    @property({ type : Boolean }) public checked = false;
    @property({ type : Array }) public list = [
        { name: 'one' },
        { name: 'two' },
    ];
    private counter = 0;

    render() {
        return html`
            <h2>Decorator Demo</h2>
            <p>
                <h4>Am I checked?</h4>
                ${this.checked}
            </p>
            <p>
                <button id="MyButton" @click="${this.handleClick}">
                    <i class="fas fa-user fa-fw"></i> Click ME!
                </button>
            </p>
            <ul>
                ${this.list.map(i => html`<li>${i.name}</li>`)}
            </ul>
        `;
    }

    handleClick() {
        this.list.push({ name: `extra #${++this.counter}` });
        this.requestUpdate();
    }
}
