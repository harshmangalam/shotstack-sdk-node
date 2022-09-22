/**
 * Shotstack
 * Shotstack is a video, image and audio editing service that allows for the automated generation of videos, images and audio using JSON and a RESTful API.  You arrange and configure an edit and POST it to the API which will render your media and provide a file  location when complete.  For more details visit [shotstack.io](https://shotstack.io) or checkout our [getting started](https://shotstack.io/docs/guide/) documentation.  There are two main API's, one for editing and generating assets (Edit API) and one for managing hosted assets (Serve API).  The Edit API base URL is: <b>https://api.shotstack.io/{version}</b>  The Serve API base URL is: <b>https://api.shotstack.io/serve/{version}</b> 
 *
 * The version of the OpenAPI document: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/QueuedResponseData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./QueuedResponseData'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.QueuedResponse = factory(root.ShotstackSdk.ApiClient, root.ShotstackSdk.QueuedResponseData);
  }
}(this, function(ApiClient, QueuedResponseData) {
  'use strict';



  /**
   * The QueuedResponse model module.
   * @module model/QueuedResponse
   * @version v1
   */

  /**
   * Constructs a new <code>QueuedResponse</code>.
   * The response received after a [render request](#render-asset) or [template render](#render-template) is submitted. The render task is queued for rendering and a unique render id is returned.
   * @alias module:model/QueuedResponse
   * @class
   * @param success {Boolean} `true` if successfully queued, else `false`.
   * @param message {String} `Created`, `Bad Request` or an error message.
   * @param response {module:model/QueuedResponseData} 
   */
  var exports = function(success, message, response) {
    var _this = this;

    _this['success'] = success;
    _this['message'] = message;
    _this['response'] = response;
  };

  /**
   * Constructs a <code>QueuedResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QueuedResponse} obj Optional instance to populate.
   * @return {module:model/QueuedResponse} The populated <code>QueuedResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('response')) {
        obj['response'] = QueuedResponseData.constructFromObject(data['response']);
      }
    }
    return obj;
  }

  /**
   * `true` if successfully queued, else `false`.
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;
  /**
   * `Created`, `Bad Request` or an error message.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {module:model/QueuedResponseData} response
   */
  exports.prototype['response'] = undefined;


  /**
   * Returns `true` if successfully queued, else `false`.
   * @return {Boolean}
   */
  exports.prototype.getSuccess = function() {
    return this['success'];
  }

  /**
   * Sets `true` if successfully queued, else `false`.
   * @param {Boolean} success `true` if successfully queued, else `false`.
   */
  exports.prototype.setSuccess = function(success) {
    this['success'] = success;
    return this;
  }


  /**
   * Returns `Created`, `Bad Request` or an error message.
   * @return {String}
   */
  exports.prototype.getMessage = function() {
    return this['message'];
  }

  /**
   * Sets `Created`, `Bad Request` or an error message.
   * @param {String} message `Created`, `Bad Request` or an error message.
   */
  exports.prototype.setMessage = function(message) {
    this['message'] = message;
    return this;
  }


  /**
   * @return {module:model/QueuedResponseData}
   */
  exports.prototype.getResponse = function() {
    return this['response'];
  }

  /**
   * @param {module:model/QueuedResponseData} response
   */
  exports.prototype.setResponse = function(response) {
    this['response'] = response;
    return this;
  }



  return exports;
}));


