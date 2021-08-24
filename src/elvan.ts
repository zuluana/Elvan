/**
 * Copyright (C) Oranda - All Rights Reserved (January 2019 - February 2021)
 */

import fetch from "cross-fetch";
export type ModuleFactory = (imports: any) => any;

export interface ElvanLoader {
  register: (factory: ModuleFactory) => void;
}

//  CONSIDER:  Build Plugins or (more functions) for various loaders to resolve various module types, like AMD / CommonJS, etc...
//  CONSIDER:  Use a single object as the param set so it can be modified.
//  CONSIDER:  Add Registers so users can build Plugins like Webpack.
//  TODO:  Make this "Pluggable" with Registers and similar Plugin Oriented Design (POD) principles.

export const loadFromUrl = async (url: string, imports?: any) => {

  //  Get the Code
  const response = await fetch(url);
  const js = await response.text();

  //  Load From String
  return await loadFromString(js, imports);
};

export const loadFromString = async (js: string, imports?: any) => {

  //  Run the Loaded Plugin in "this" Context
  eval(js);

  //  Build the Module
  const module = await exports(imports);

  //  Return the Module
  return module;
};
