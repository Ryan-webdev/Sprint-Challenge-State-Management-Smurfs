1. What problem does the context API help solve?
It helped with the problem of prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? Actions replace the dispatch function and they check if something needs to happen. Reducers: this is where actions take place once the actions of what we need each piece to do it is dispatched. Store: this holds all of our state inside of it. instead of prop drilling we can grab the state from the store and put in into our component.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state can be used across components in our whole application and component state is localise to just the component itself and maybe a child using props.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? thunk alls us to inercept the data before it is rendered in our app. We can use asynchronous function calls because of this.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

I liked learning context API because it seems like it is easier than Redux. I like how you do not have state just floating everywhere in props. I like how you can call context and then you do not have to use props at all.
