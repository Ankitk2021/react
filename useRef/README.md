When we use `useState` to update a variable like `count`, the component re-renders every time the state changes. But what if we want to keep a variable that doesn't trigger re-renders and retains its value across all renders?

This is where the `useRef` hook comes into play.