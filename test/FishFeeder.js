//  MAYBE we can set up a file that we grab BEFORE running the Plugin that tells us what to inject!  BASICALLY what the dependencies are!? HM!

// import { ElvanLoader } from "../src";

// declare var loader: any;
exports = ({ food }) => {
  return {
    feedFish: () => `You fed the fish ${ food }!`
  }
}

// const MyRNModule = ({api, React, ReactNative }: { api: any, React: any, ReactNative: any }) => {
//   const { View, Text } = ReactNative;
//   return {
//     MyComponent: (
//       <View>
//         <Text style={{ backgroundColor: 'white' }}>Hello World, I'm a Module!</Text>
//       </View>
//     )
//   }
// }

// loader.register(ExampleFactory);

