<!-- ![Elvan Logo]() -->

# Elvan

### TS / JS External Module Loader
>  Load Modules from External URLs

With Elvan, you can load external modules for use in your TS / JS apps, even React Native apps.

### Define a Module
```javascript
//  fish-feeder.js
exports = ({ food }) => {
  return {
    feedFish: () => console.log(`You fed the fish ${ food }!`)
  }
}
```

###  Load a Module

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

>  Currently, it's only possible to load "Elvan" modules, but we hope to build core support or Plugins for additional, standard, module types.


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
To load the module dynamically, it needs to be transpiled to ES6.  We can use `tsc` to do that.

### Load a TS / RN Module

```javascript

import * as React from 'react';
import * as ReactNative from 'react-native';

//  URL to the Module
const url = "https://my.site/hello-box.js";

//  Module Imports
const imports = {
  React, ReactNative
}

//  Load the Module
const HelloBox = await Elvan.load(url, imports);

//  Use the Component
const MyComponent = () => (
  <HelloBox name="Doug">
);
```