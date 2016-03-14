class ItemList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(index) {
        this.props.onDeleteItem(index);
    }

    render() {
        var items;

        items = this.props.items.map((function(self) {
            return function(itemName, index) {
                return <Item itemName={itemName} index={index} onDelete={self.deleteItem} key={"todo-item-" + index.toString()} />;
            };
        })(this));

        return <ul className="item-list">
            {items}
        </ul>;
    }
}
