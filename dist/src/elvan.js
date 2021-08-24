"use strict";
/**
 * Copyright (C) Oranda - All Rights Reserved (January 2019 - February 2021)
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cross_fetch_1 = __importDefault(require("cross-fetch"));
//  CONSIDER:  Build Plugins or (more functions) for various loaders to resolve various module types, like AMD / CommonJS, etc...
//  CONSIDER:  Use a single object as the param set so it can be modified.
//  CONSIDER:  Add Registers so users can build Plugins like Webpack.
//  TODO:  Make this "Pluggable" with Registers and similar Plugin Oriented Design (POD) principles.
exports.loadFromUrl = function (url, imports) { return __awaiter(void 0, void 0, void 0, function () {
    var response, js;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cross_fetch_1.default(url)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.text()];
            case 2:
                js = _a.sent();
                return [4 /*yield*/, exports.loadFromString(js, imports)];
            case 3: 
            //  Load From String
            return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.loadFromString = function (js, imports) { return __awaiter(void 0, void 0, void 0, function () {
    var module;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //  Run the Loaded Plugin in "this" Context
                eval(js);
                return [4 /*yield*/, exports(imports)];
            case 1:
                module = _a.sent();
                //  Return the Module
                return [2 /*return*/, module];
        }
    });
}); };
//# sourceMappingURL=elvan.js.map