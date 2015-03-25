cordova.define("cordova.demo.echo.EchoProxy", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

var sugar = require('cordova/platform');
var cordova = require('cordova');
var bus = require('cordova/sugar/bus');

var sugar_model = null;

bus.listen();

function updateModel(err, result) {
  if (!err) {
    sugar_result = result;

  } else {
    return err;
  }
}


module.exports = {
  getResult: function (success, error, args) {
    alert(args[0]);
    bus.sendMessage("activity.cordova",['Echo','sugar_model',[args[0]]], updateModel);
    setTimeout(function () {
      success({
        result: sugar_result
      });
    }, 5000);
  }
};

require("cordova/sugar/commandProxy").add("Echo", module.exports);

});
