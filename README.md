<!-- ![Elvan Logo]() -->

# Elvan

### TS / JS External Module Loader
>  Load Modules from External URLs

Load external modules in TS / JS apps, including React Native apps.
> 
### Define a Module
```javascript
//  fish-feeder.js
exports = ({ food }) => {
  return {
    feedFish: () => console.log(`You fed the fish ${ food }!`)
  }
}
```

###  Load the Module

```javascript
//  URL to the Module
const url = "https://my.site/fish-feeder.js";

//  Module Imports
const imports = {
  food: "tasty speckles"
}

//  Load the Module
const FishFeeder = await Elvan.load(url, imports);

//  Use the Module
FishFeeder.feedFish();  //  Console:  'You fed the fish tasty speckles!'
```


##  React Native + Typescript

### Define a TS / RN Module

Let's build a module with a custom component.

```typescript
//  hello-box.tsx
exports = ({ React, ReactNative: { View, Text } }) => {

  //  Create a Component to say "Hello"
  const HelloBox =  ({ name }: { name: string }) => (
    <View>
      <Text>Hello { name }</Text>
    </View>
  );

  //  Export the Component
  return HelloBox;
}
```

### Transpile the Module
To load the module dynamically, it needs to be transpiled to ES6.  We can use `tsc` to do that.

```javascript
"use strict";
//  hello-box.tsx
exports = ({ React, ReactNative: { View, Text } }) => {
    //  Create a Component to say "Hello"
    const HelloBox = ({ name }) => (React.createElement(View, null,
        React.createElement(Text, null,
            "Hello ",
            name)));
    //  Export the Component
    return HelloBox;
};
//# sourceMappingURL=my_module.js.map
```

### Load the Module

```typescript
import * as React from 'react';
import * as ReactNative from 'react-native';


interface MyComponentState {
  HelloBox: undefined | React.FunctionComponent<{ name: string }>;
}

class MyComponent extends React.Component<any, MyComponentState> {

  constructor (props: any) {
    super(props);
    this.state = { HelloBox: undefined };
  }
  async componentDidMount() {

    //  URL to the Module
    const url = "https://my.site/hello-box.js";

    //  Module Imports
    const imports = {
      React, ReactNative
    }

    //  Load the Component
    const HelloBox = await Elvan.load(url, imports);
    this.setState({ HelloBox });
  }

  render() {
    
    const { HelloBox } = this.state;

    return HelloBox ?
      <HelloBox name="Doug" /> :
      null
  }
}
```


## Anti-Pitch

This library is likely a band-aid until there's native support for loading via URL.  However, we are adding "Plugin Oriented Design" (POD )elements to make this library extensible.

Currently, it's only possible to load "Elvan" modules, but we hope to build core support or add Plugins for standard module types.

There's currently no integrity check on the URL.

##  Acknowledgments
Elvan is inspired by similar module tools including Webpack, Node, CommonJS, SystemJS, AMD, etc...
