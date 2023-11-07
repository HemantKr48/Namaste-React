/**
 *
 *
 *   <div id="parent">
 *        <div id="child">
 *           <h1>He is my Hero</h1>
 *           <h2>He is not my Hero</h2>
 *        </div>
 *         <div id="child">
 *           <h1>He is my Hero</h1>
 *           <h2>He is not my Hero</h2>
 *        </div>
 *
 *   <div/>
 *
 *
 * ReactElement(Object) => HTML(Browser Understands)
 *
 * */
//header2 and header1  are objects.
// If we will write like this then there is no advantage of using react so we use JSX.
const header2 = React.createElement(
	"div",
	{ id: "parent" },
	[React.createElement("div", { id: "child" }, [
		React.createElement("h1", {}, "He is my Hero"),
		React.createElement("h2", {}, "He is not my Hero"),
	]),React.createElement("div", { id: "child" }, [
		React.createElement("h1", {}, "He is my Hero"),
		React.createElement("h2", {}, "He is not my Hero"),
	])]
);

//JSX

const header1 = React.createElement(
	"h1",
	{
		id: "heading1",
		hem: "hemant",
	},
	"Hello World from React"
);

console.log(header1);
const rootdiv = ReactDOM.createRoot(document.getElementById("root"));
rootdiv.render(header2);
