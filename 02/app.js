const element1 = React.createElement("h1",{style: {backgroundColor:"Red"}}, "Hello");
const element2 = React.createElement("h1",{style: {backgroundColor:"Red"}}, "Hi");

const div1 = React.createElement("div", {className: "container", id: "d"}, [element1, element2])
const ReactRoot = ReactDOM.createRoot(document.getElementById("root"))
ReactRoot.render(div1);