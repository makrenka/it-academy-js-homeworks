import { Component } from "../../core/Component";

export class Menu extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
    };

    render() {
        return `
        <ul class="${this.state.isOpen ? "open" : "closed"}">${this.props.map(item => `<li>${item.label}</li>`)}</ul>
        `
    }
}