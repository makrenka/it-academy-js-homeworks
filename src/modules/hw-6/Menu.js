import { Component } from "../../core/Component";

export class Menu extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
    };

    toggleMenu() {
        this.setState((state) => {
            return {
                isOpen: state.isOpen ? false : true,
            }
        })
    }

    componentDidMount() {
        this.addEventListener('toggle-menu', this.toggleMenu);
    }

    componentWillUnmount() {
        this.removeEventListener('toggle-menu', this.toggleMenu);
    }

    render() {
        return `
            <ul class="${this.state.isOpen ? "open" : "closed"}">
                ${this.props.map(item => `<li>${item.label}</li>`)}
            </ul>
        `
    }
}

customElements.define('my-menu', Menu);

