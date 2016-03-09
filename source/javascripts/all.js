function onReady(completed) {
    if (document.readyState === "complete") {
        setTimeout(completed);
    } else {
        document.addEventListener("DOMContentLoaded", completed, false);
    }
}

onReady(function(){
    ReactDOM.render(React.createElement(TodoApp), document.getElementById("react-middleman-example"));
});
