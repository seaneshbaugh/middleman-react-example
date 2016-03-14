class AddItemButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }

    render() {
        return <button className="add-item-button" disabled={this.props.disabled} onClick={this.handleClick}>Add Item</button>;
    }
}
