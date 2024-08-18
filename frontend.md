## React Assignment

1. How can you implement shared functionality across a component tree?\
Answer: We can implement shared functionality across a component tree in several way, like, by using Context Api, creating custom hook, by using state management libraries like Redux, or by wrapping component in higher order component.

2. Why is the `useState` hook appropriate for handling state in a complex component?
Answer: The `useState` hook is appropriate for handling state in a complex component for several reasons:\
1. Local State Management: It allows us to manage local state within a functional component. This is useful for components that need to manage their own internal state independently of other components.

2. Simplicity and Readability: It provides a straight forward API for managing state, making it easy to understand and use.

3. Functional Updates: It supports functional updates, which can be helpful when the new state depends on previous state.

4. Encapsulation of State Logic: It can be used withing custom hooks to encapsulate state logic that can be shared across multiple components.

5. Component Re-rendering: When the state managed by useState changes, the component re-renders, allowing the UI to stay in sync with the current state. 

3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
