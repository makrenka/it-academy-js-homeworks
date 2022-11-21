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
        });
    }

    componentDidMount() {
        this.addEventListener('toggle-menu', this.toggleMenu); 
                      
    }

    componentWillUnmount() {
        this.removeEventListener('toggle-menu', this.toggleMenu);
    }

    static get observedAttributes () {
        return ['items'];
    }
    
    render() {        
        const items = JSON.parse(this.props.items);
        return `
            <my-button togglemenu="toggle-menu">Click</my-button>
            <ul class="${this.state.isOpen ? "open" : "closed"}">
                ${items.map(item => `<li><a href="${item.href}">${item.label}</a></li>`).join('')}
            </ul>
        `        
    }
}

customElements.define('my-menu', Menu);
