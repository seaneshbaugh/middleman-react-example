class AddItemNameInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return <input type="text" value={this.props.itemName} onChange={this.handleChange} />;
    }
}
