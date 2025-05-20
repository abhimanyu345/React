const element = React.createElement("h1",{style: {backgroundColor:"Red"}}, "Hello");
const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));

ReactRoot.render(element);