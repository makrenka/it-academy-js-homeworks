import { Component } from "../../core/Component";

export class Button extends Component {


    render() {
        return `
            <button type="button">Click</button>
        `
    }
}

customElements.define('my-button', Button);