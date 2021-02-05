/**
 * Copyright (C) Oranda - All Rights Reserved (January 2019 - February 2021)
 */

import fetch from 'cross-fetch';
export type ModuleFactory = (imports: any) => any;

export interface ElvanLoader {
  register: (factory: ModuleFactory) => void;
}

//  CONSIDER:  Build Plugins or (more functions) for various loaders to resolve various module types, like AMD / CommonJS, etc...
//  CONSIDER:  Use a single object as the param set so it can be modified.
//  CONSIDER:  Add Registers so users can build Plugins like Webpack.

export const load = async (url: string, imports?: any) => {

  //  Define the Module Scope
  let exports: any;

  //  Get the Code
  const response = await fetch(url);
  const js = await response.text();

  //  Run the Loaded Plugin in "this" Context
  eval(js);

  //  Build the Module
  const module = await exports(imports);

  //  Return the Module
  return module;
}
