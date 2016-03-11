class DeleteItemButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }

    render() {
        return <button className="delete-todo-item" onClick={this.handleClick}>&times;</button>;
    }
}
