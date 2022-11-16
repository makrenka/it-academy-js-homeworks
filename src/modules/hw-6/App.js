import { Component } from "../../core/Component";
import './Menu';
import './Button';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            menuItems: [
                {
                    label: "link 1",
                    href: "Google.com"
                }
            ]
        };
    };

    render() {
        return `
        <my-button>Click</my-button>
        <my-menu items="${JSON.stringify(this.state.menuItems)}"></my-menu>
        `
    }
}

customElements.define('my-app', App);