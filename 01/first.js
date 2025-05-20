const React = {
    createElement : function(tag, styles, children){
        const element = document.createElement(tag);
        if(typeof children === "object"){
            for(let val of children){
                element.append(val);
            }
        }
        else{
            element.innerText = children
        }
        for(let key in styles){
            element.style[key] = styles[key];
        }
        return element;
    }
}

const ReactDOM = {
    appendElement : function(element, root){
        root.append(element)
    }
}

const l1 = React.createElement('li',{font:"10px", backgroundColor:"red"},"HTML")
const l2 = React.createElement('li',{font:"30px", backgroundColor:"red"},"CSS")
const l3= React.createElement('li',{font:"30px", backgroundColor:"red"},"JS")
const l4= React.createElement('li',{font:"30px", backgroundColor:"red"},"GIT")
const l5= React.createElement('li',{font:"30px", backgroundColor:"red"},"TS")

const element = React.createElement('ul', {}, [l1, l2, l3, l4, l5]);
ReactDOM.appendElement(element, document.getElementById("root"))