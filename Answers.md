1. What problem does the context API help solve?

<!-- Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. It gives us a new way to pass data around in between our components, and it provides the ability to acess props anywhere in the app.  -->

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

<!-- actions tell the reducer how to update the state. The reducers are the ones that have the ability to update the state. The store is where the state data is stored.
Store is known as the single source of truth because that is where the data that is used for the application lives.  -->


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

<!-- application state is passed top-down (parent to child) via props and it is considered a global since it can be accessed from any component in the app. 
component state is data that lives in a particular component and can be passed around to the children component via props.
I prefere to use application state when there is some information being fetched through an API because we need to pass around the information quite often throughout the app, but if something is being built locally, I would prefer to use Component state.  -->


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

<!-- Actions in Redux are packets of information that contain an action type and associated data. It allows us to perform and handle an asynchronous action function. Actions are passed into the reducer function as an argument. When our reducer recieves an action, it will update the state according to the type and payload on the action. -->

1. What is your favorite state management system you've learned and this sprint? Please explain why!

<!-- I'd like to say Redux because I believe that understanding the different ways to have a functional application will open many doors in the industry. However, Context API is a much simpler / quicker way to store and manage your data.  -->