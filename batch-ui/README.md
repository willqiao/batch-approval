# Batch UI

### React Key Notes
* install node js
* npm i -g create-react-app



### Redux Key Notes

This is just test.


### Visual Studio Code tips

1. set up credentials
```
git config --global credential.helper cache
set to 36000 seconds, 10 hours. 
git config --global credential.helper 'cache --timeout=36000'
```

### create-react-app command outpout

if we want to keep non-standard html attributes, have data- as prefix.
  <li data-react-is-awesome="true">React is awesome!</li>
  use {...this.properties} to apply all properties.

	ECMAScript 7 - from 2016

  arrow function in ES6
  const x = (x, y) => { return x * y };

  1. initialize state by assigning object
  2. update state elsewhere : setState({oneproperty:value}, callbackfunction) 
  3. we can move state value to top component, and pass it to child (stateless) component through properties. Stateless component is better defined as function to avoid adding state.
  4. React is one way binding, we need onChange event to setState for user input.
  5. functional component, you can pass props through function. 
  6. Redux
    - Provider for root component
    - connect(mapStatetoProps, mapDispatchtoProps) (ComponentName)
    - mapState to props, just return a {name: state.somevalue, ... }
    - mapDispatch, just return a { method1: (somedata)=>dispatch({type:something,data:somedata}) }
  


### ES 6 2015 cheat sheets
https://github.com/azat-co/cheatsheets/tree/master/es6