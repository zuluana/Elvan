/**
 * Copyright (C) Oranda - All Rights Reserved (January 2019 - February 2021)
 */

import fetch from 'cross-fetch';
export type ModuleFactory = (imports: any) => any;

export interface ElvanLoader {
  register: (factory: ModuleFactory) => void;
}

export interface DefaultLoadParams {
  url: string;
  imports: any;
}

//  CONSIDER:  Build Plugins or (more functions) to resolve various module types, like AMD / CommonJS, etc...

export const load = async (url: string, imports: any = {}) => {

  //  Define the Module Scope

  let exports: any;
  // let factory: any;
  // const loader: ElvanLoader = {
  //   register: (_factory: ModuleFactory) => {
  //     factory = _factory;
  //   }
  // };

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
