const element = React.createElement("h1", {color:"Red"}, "Hello");
const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));

ReactRoot.render(element);