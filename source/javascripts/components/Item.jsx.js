class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.delete = this.delete.bind(this);
    }

    delete() {
        this.props.onDelete(this.props.index)
    }

    render() {
        return <li className="item">
            <span className="item-name">
                {this.props.itemName}
            </span>
            <DeleteItemButton onClick={this.delete} />
        </li>;
    }
}
