# What is the difference between Component and PureComponent? Give an example where it might break my app.

Both Component and PureComponent are building blocks for React but the difference between them is that a normal Component re-renders when its parent re-renders or its state or props have changed but a Pure component is not affected by a re-rende of its parent provided its props or state haven't changed. In terms of performance, pure components are better even though React is optimized. In summary, a Pure component is a component that gaurantees the same output or ui, if given the same input.


# Context + ShouldComponentUpdate might be dangerous. Why is that?

Context is used for state management  in React applications, while shouldComponentUpdate allows you to handle the re-rendering of a component or not. If these two are used together it would cause some issues because when an update is made to the state of a context, all components that depends on the context re-renders. ShouldComponentUpdate coupouled with a context becomes ineffective since the rerending of the component won't depend on its state of props alone but also on the context.


# Describe 3 ways to pass information from a component to its PARENT.
Context: Both the parent and children have access to the context when wrapped in the Provider.

Props: A parent can pass props in form of a callback function to a child to get value from it

Ref: We can pass ref from a parent to a child also in form of props to receive a reference of the child and get data from it


# Give 2 ways to prevent components from re-rendering.
shouldComponentUpdate or useEffect with an empty dependency array.
Memoizing HOC: When a component is wrapped  with React.memo, it will only render if the props or state change.


# What is a fragment and why do we need it? Give an example where it might break my app.
A fragment is just a syntatic wrapper that we use as an alternative way of grouping elements together if we don't want to introduce any additional html element to the dom like adiv. I don't think it can actually break the app if used correctly however, if mistaken for div or a button, you can't add styling or perform any function on it like onclick.


# Give 3 examples of the HOC pattern.
A HOF is simply a wrapper around another function. Example is context Provider, memo and suspense.


# What's the difference in handling exceptions in promises, callbacks and async...await?
Error handling in promise is done in the chained .catch block but in async await we use the try and catch block to handle error.

# How many arguments does setState take and why is it async.
it takes 2 arguments, the state object and a callback function that is called after state has updated. It is async because it is not done immediately as it is queued until it is ready.

# List the steps needed to migrate a Class to Function Component.
1. Convert class fuction to a normal function declaration.
2. Convert the lifecycles to useEffect equivalent
3. Make use of hooks where necessary


# List a few ways styles can be used with components.
Through className, style attribute, inline  or Styled components.

# How to render an HTML string coming from the server.
I have used a library in the past called react-html parser
