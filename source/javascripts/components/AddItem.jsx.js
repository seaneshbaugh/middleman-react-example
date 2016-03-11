class AddItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: ""
        };

        this.updateItemName = this.updateItemName.bind(this);

        this.addItem = this.addItem.bind(this);
    }

    updateItemName(itemName) {
        this.setState({
            itemName: itemName
        });
    }

    addItem() {
        this.props.onAddItem(this.state.itemName);

        this.setState({
            itemName: ""
        });
    }

    render() {
        return <div className="add-item">
            <AddItemNameInput itemName={this.state.itemName} onChange={this.updateItemName} />
            <AddItemButton disabled={this.state.itemName.length === 0} onClick={this.addItem} />
        </div>;
    }
}
