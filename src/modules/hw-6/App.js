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
                {
                    label: "link 2",
                    href: "Google.com",
                },                               
                {
                    label: "link 3",
                    href: "Google.com",
                },                               
                {
                    label: "link 4",
                    href: "Google.com",
                },                               
            ]
        };
    };

    render() {
        return `        
        <my-menu 
            items='${JSON.stringify(this.state.menuItems)}'             
            togglemenu="toggle-menu"
            class="my-menu">
        </my-menu>
        `
    }
}

customElements.define('my-app', App);