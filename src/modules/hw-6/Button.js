import { Component } from "../../core/Component";

export class Button extends Component {
    constructor() {
        super();
    }

    
    onClick() {
        this.dispatch(this.props.togglemenu);        
    }

    static get observedAttributes () {
        return ['togglemenu'];
    }

    componentDidMount() {
        this.addEventListener('click', this.onClick);
        
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick);
    }

    render() {
        return `
            <button type="button">Click</button>
        `
    }
}

customElements.define('my-button', Button);