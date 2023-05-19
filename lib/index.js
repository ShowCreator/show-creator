"use strict";
/*
 * @Author: sfy
 * @Date: 2023-05-19 15:55:31
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-19 23:31:04
 * @FilePath: /sc-cli/src/index.ts
 * @Description: update here
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
module.exports = function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("22");
    });
};
