1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    map, filter and reduce are methods that do not have side effects, or mutate the existing array. they return a new array. object.assign is used to create a new object based on another object's properties. it does not change the original object. a spread operator can be used to do the same thing.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions contain an action type property and a payload property. reducers use actions to update the state based on the data in the action.
    reducers are functions that use the current state and an action to create the new version of state. they take the current state from the store, the action type tells the reducer what to do and the action payload tells the reducer what part of the state needs to be updated.
    store is where the state for the application is stored. store is read only. we pass a reducer into the store in order to change the state of the application.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    application state is global and in redux, store is used to hold the application state. any component in the app can access the application state.
    component state is specific to each component. it can only be updated within it's own component and passed to children through props.
    when we add a new friend to our friends app, we are updating the state of the friends component by adding a new object to the array of friends.
    when we login to an application and access a protected page we are accessing the application state.

1.  What is middleware?
    middleware is a function that returns a function that returns a function.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect links components to the store.
