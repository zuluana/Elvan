/**
 * Copyright (C) Oranda - All Rights Reserved (January 2019 - January 2021)
 */

import * as Elvan from '../src/elvan';
import expect = require("expect");

// const myModule = 
describe("Elvan", () => {

  it("should load an external module.", async () => {

    //  TODO:  Remove the token once public!
    const myModule: any = await Elvan.load("https://raw.githubusercontent.com/CodalReef/Elvan/master/test/my_module.tsx?token=ANUDGQ2U7WFIFVNU6JTVVG3ADW6US")
    const name = myModule.getName();
    expect(name).toEqual("MyModule");
  });

  // it("should load an external module with props.", async () => {

  //   //  TODO:  Remove the token once public!
  //   const myModule: any = await Elvan.load("")
  //   const name = myModule.getName();
  //   expect(name).toEqual("MyModule");
  // });
});

