/* Creating a nested html structure with multiple children

<div id="parent">
    <div id="child1">
        <h1>I am heading1</h1>
        <h2>I am Heading 2</h2>
    </div>
    <div id="child2">
        <h1>I am heading1</h1>
        <h2>I am Heading 2</h2>
    </div>
</div>

 */

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am heading 1"),
        React.createElement("h2", {}, "I am heading 2")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am heading 1"),
        React.createElement("h2", {}, "I am heading 2")
    ])

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);