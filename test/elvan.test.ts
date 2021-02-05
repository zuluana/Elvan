/**
 * Copyright (C) Oranda - All Rights Reserved (January 2019 - January 2021)
 */

import * as Elvan from '../src/elvan';
import expect = require("expect");

describe("Elvan", () => {

  it("should load an external module.", async () => {

    //  TODO:  Remove the token once public
    const myModule: any = await Elvan.load("https://raw.githubusercontent.com/CodalReef/Elvan/master/test/FishFeeder.js?token=ANUDGQ7FXK53DVVZJ3A2NJTADXAZA", { food: "tasty speckles" })
    const name = myModule.feedFish();
    expect(name).toEqual("You fed the fish tasty speckles!");
  });
});
