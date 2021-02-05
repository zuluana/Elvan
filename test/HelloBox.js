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