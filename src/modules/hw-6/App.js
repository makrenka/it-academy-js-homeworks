import { Component } from "../../core/Component";
import './Menu';

export class App extends Component {
    constructor() {
        super();
        this.props = {
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
        <button>Click</button>
        <my-menu items="${JSON.stringify(this.state.menuItems)}"></my-menu>
        `
    }
}