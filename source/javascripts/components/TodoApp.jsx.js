class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);

        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(itemName) {
        var items;

        items = this.state.items.slice();

        items.push(itemName);

        this.setState({
            items: items
        });
    }

    deleteItem(index) {
        var items;

        items = this.state.items.slice();

        items.splice(index, 1);

        this.setState({
            items: items
        });
    }

    render() {
        var title;

        title = "My Todo list (" + this.state.items.length.toString() + " Items)";

        return <div className="todo-app">
            <h1 className="title">{title}</h1>
            <AddItem onAddItem={this.addItem} />
            <ItemList items={this.state.items} onDeleteItem={this.deleteItem} />
        </div>;
    }
}
