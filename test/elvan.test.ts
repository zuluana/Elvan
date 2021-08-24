/**
 * Copyright (C) Oranda - All Rights Reserved (January 2019 - January 2021)
 */

import * as Elvan from "../src/elvan";
import { expect } from "chai";

describe("Elvan", () => {

  it("should load a module from URL.", async () => {

    //  TODO:  Remove the token once public
    const myModule: any = await Elvan.loadFromUrl("https://raw.githubusercontent.com/CodalReef/Elvan/master/test/FishFeeder.js?token=ANUDGQ2H7INTXI7L5ACGA4DADXFRY", { food: "tasty speckles" });
    const name = myModule.feedFish();
    expect(name).equals("You fed the fish tasty speckles!");
  });

  it("should load a module from a string.", async () => {

    const js = "exports = ({ food }) => { return { feedFish: () => `You fed the fish ${ food }!` } }";

    //  TODO:  Remove the token once public
    const myModule: any = await Elvan.loadFromString(js, { food: "tasty speckles" });
    const name = myModule.feedFish();
    expect(name).equals("You fed the fish tasty speckles!");
  });
});
