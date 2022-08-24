#### Understanding Events

- Create a react boilerplate
- Using JSX do the following..

1.

- Create a button with text `Click Me`
- Handle a event of type `click` on the button
- When user click on the button `alert` a message saying `Hello React Event`

2.

- Create another button with text `How can I help you?`
- Handle a event of type `click`
- When user clicks `alert` three different messages as given below
  - To learn React use https://reactjs.org
  - React and ReactDOM works together
  - Babel helps in writing JSX

3.

- Create three button with text `Arya`, `John` and `Bran`
- When clicked on any button alert message with the name like `Hello Arya|John|Bran`
- Don't write three different click handler function
- One function should be able to handle this.

4.

- Do the same this you did above in (3) but use `class` component to do this

5.

- Use the data given below

```js
let fruits = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];
```

- Map over the data and create button for each
- Each button should have different text based on the value
- When user clicks on the button display the name of fruit in `alert`
- Don't forget to use `key` when you are using `map` on array
