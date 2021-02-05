/**
 * Copyright (C) Oranda - All Rights Reserved (January 2019 - January 2021)
 */

import * as Elvan from '../src/elvan';
import expect = require("expect");

describe("Elvan", () => {

  it("should load an external module.", async () => {

    //  TODO:  Remove the token once public!
    const myModule: any = await Elvan.load("https://raw.githubusercontent.com/CodalReef/Elvan/master/test/my_module.tsx?token=ANUDGQ4NUKXCCF2IDQUJMTDADW52A")
    const name = myModule.getName();
    expect(name).toEqual("MyModule");
  });
});

