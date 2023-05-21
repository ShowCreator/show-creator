/*
 * @Author: sfy
 * @Date: 2023-05-21 13:27:58
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-21 13:31:12
 * @FilePath: /sc-cli/src/service/WebpackService.ts
 * @Description: update here
 */

import { Context } from "../core/Context";

class WebpackService extends Context {
  constructor() {
    super();
    super.registerCommandModules('build')
  }
}


export default WebpackService