class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            title: "My Todo List (0 Items)"
        };

        this.addItem = this.addItem.bind(this);

        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(itemName) {
        var items, title;

        items = this.state.items.slice();

        items.push(itemName);

        title = "My Todo List (" + items.length.toString() + " Items)";

        this.setState({
            items: items,
            title: title
        });
    }

    deleteItem(index) {
        var items, title;

        items = this.state.items.slice();

        items.splice(index, 1);

        title = "My Todo list (" + items.length.toString() + " Items)";

        this.setState({
            items: items,
            title: title
        });
    }

    render() {
        return <div className="todo-app">
            <h1>{this.state.title}</h1>
            <AddItem onAddItem={this.addItem} />
            <ItemList items={this.state.items} onDeleteItem={this.deleteItem} />
        </div>;
    }
}
