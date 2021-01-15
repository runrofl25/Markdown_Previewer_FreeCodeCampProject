function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // <!-- Recieved help from 
// Dylan Israel from youtube https://www.youtube.com/watch?v=N7Mrj0WrvnM&ab_channel=DylanIsrael massive credit goes to him -->

// <!-- Recieved more help from Florin Pop youtube channel https://www.youtube.com/watch?v=CJt7uZD_iK0&t=180s&ab_channel=FlorinPop on how to structure the Markdown Previewer Major credit goes to him --> */

const initialState = `
This is a paragraph

**This is bolded text**

> Block Quotes!

# Heading
## heading 2

- list item 1
- list item 2
- list item 3

[Visit my website](https://linkedin.com)

This is an inline \`<div></div>\`

This is a block of code

\`\`\`
let x = 1;
let y = 2;
let z = x+ y;
\`\`\`

![React](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)

`;

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",


    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {
    const { text } = this.state;

    const markdown = marked(text, { breaks: true });

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", { className: "text-center m-4" }, "Convert your Markdown"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h5", null, " Enter your markdown here:"), /*#__PURE__*/
      React.createElement("textarea", { className: "form-control", id: "editor", value: text, onChange: this.handleChange })), /*#__PURE__*/


      React.createElement("div", { className: "col-6 preview" }, /*#__PURE__*/
      React.createElement("h5", null, "See the result:"), /*#__PURE__*/
      React.createElement("div", { className: "preview rounded", dangerouslySetInnerHTML: { __html: markdown }, id: "preview" })))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));