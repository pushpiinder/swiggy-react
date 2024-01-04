import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement which is an Object => HTMLElement(render)

// using pure React
// const heading = React.createElement("h1", {id: "heading"}, "Namaste React!");
// console.log(heading);

// using JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel
// JSX => Babel transpiles it to React.createElement => ReactElement which is an Object => HTMLElement(render)
// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>
const jsxHeading = (
    <h1 className="head">
        Hellooo
    </h1>
);
console.log(jsxHeading);

const Title = () => (       //  <- React Component
    <h1 className="head" tabIndex="5">
        Namaste React using JSX!
    </h1>
);

const elem = <span>Element...</span>

const title = (       //  <- React Element
    <h1 className="head" tabIndex="5">
        {elem}
        Namaste React Element using JSX!
    </h1>
);

const number = 10000;


// React Functional Component
// const HeadingComponent = () => {
//     return <h1>Namaste React Functional Component</h1>;
// }
const HeadingComponent = () => (
    <div id="container">
        {/* below 3 are same */}
        <Title/>
        <Title></Title>
        {Title()}
        
        <h2>{number}</h2>
        <h2>{100 + 200}</h2>
        <h3>{console.log("lorem ipsum")}</h3>
        {title}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);