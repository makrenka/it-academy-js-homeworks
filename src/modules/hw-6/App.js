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
                    href: "Google.com",
                },                               
            ]
        };
    };

    render() {
        return `        
        <my-menu 
            items="${this.state.menuItems.map(item => item.label)}" 
            href="${this.state.menuItems.map(item => item.href)}"
            togglemenu="toggle-menu"
            class="my-menu">
        </my-menu>
        `
    }
}

customElements.define('my-app', App);