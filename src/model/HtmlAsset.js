/**
 * Shotstack
 * The Shotstack API is a video editing service that allows for the automated creation of videos using JSON. You can configure an edit and POST it to the Shotstack API which will render your video and provide a file location when complete. For more details check https://shotstack.io
 *
 * The version of the OpenAPI document: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.HtmlAsset = factory(root.ShotstackSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The HtmlAsset model module.
   * @module model/HtmlAsset
   * @version v1
   */

  /**
   * Constructs a new <code>HtmlAsset</code>.
   * The HtmlAsset clip type lets you create text based layout and formatting using HTML and CSS. You can also set the height and width of a bounding box for the HTML content to sit within. Text and elements will wrap within the bounding box.
   * @alias module:model/HtmlAsset
   * @class
   * @param type {String} The type of asset - set to <b>html</b> for HTML.
   * @param html {String} The HTML text string.
   */
  var exports = function(type = 'html', html) {
    var _this = this;

    _this['type'] = type;
    _this['html'] = html;
  };

  /**
   * Constructs a <code>HtmlAsset</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HtmlAsset} obj Optional instance to populate.
   * @return {module:model/HtmlAsset} The populated <code>HtmlAsset</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('html')) {
        obj['html'] = ApiClient.convertToType(data['html'], 'String');
      }
      if (data.hasOwnProperty('css')) {
        obj['css'] = ApiClient.convertToType(data['css'], 'String');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('background')) {
        obj['background'] = ApiClient.convertToType(data['background'], 'String');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'String');
      }
    }
    return obj;
  }

  /**
   * The type of asset - set to <b>html</b> for HTML.
   * @member {String} type
   * @default 'html'
   */
  exports.prototype['type'] = 'html';
  /**
   * The HTML text string.
   * @member {String} html
   */
  exports.prototype['html'] = undefined;
  /**
   * The CSS text string to apply styling to the HTML.
   * @member {String} css
   */
  exports.prototype['css'] = undefined;
  /**
   * Set the width of the HTML asset bounding box. Text will wrap to fill the bounding box.
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;
  /**
   * Set the width of the HTML asset bounding box. Text and elements will be masked if they exceed the  height of the bounding box.
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;
  /**
   * Apply a background color behind the HTML bounding box using. Set the text color using hexadecimal  color notation. Transparency is supported by setting the first two characters of the hex string  (opposite to HTML), i.e. #80ffffff will be white with 50% transparency.
   * @member {String} background
   * @default 'transparent'
   */
  exports.prototype['background'] = 'transparent';
  /**
   * Place the HTML in one of nine predefined positions within the HTML area.
   * @member {module:model/HtmlAsset.PositionEnum} position
   * @default 'center'
   */
  exports.prototype['position'] = 'center';


  /**
   * Returns The type of asset - set to <b>html</b> for HTML.
   * @return {String}
   */
  exports.prototype.getType = function() {
    return this['type'];
  }

  /**
   * Sets The type of asset - set to <b>html</b> for HTML.
   * @param {String} type The type of asset - set to <b>html</b> for HTML.
   */
  exports.prototype.setType = function(type) {
    this['type'] = type;
    return this;
  }


  /**
   * Returns The HTML text string.
   * @return {String}
   */
  exports.prototype.getHtml = function() {
    return this['html'];
  }

  /**
   * Sets The HTML text string.
   * @param {String} html The HTML text string.
   */
  exports.prototype.setHtml = function(html) {
    this['html'] = html;
    return this;
  }


  /**
   * Returns The CSS text string to apply styling to the HTML.
   * @return {String}
   */
  exports.prototype.getCss = function() {
    return this['css'];
  }

  /**
   * Sets The CSS text string to apply styling to the HTML.
   * @param {String} css The CSS text string to apply styling to the HTML.
   */
  exports.prototype.setCss = function(css) {
    this['css'] = css;
    return this;
  }


  /**
   * Returns Set the width of the HTML asset bounding box. Text will wrap to fill the bounding box.
   * @return {Number}
   */
  exports.prototype.getWidth = function() {
    return this['width'];
  }

  /**
   * Sets Set the width of the HTML asset bounding box. Text will wrap to fill the bounding box.
   * @param {Number} width Set the width of the HTML asset bounding box. Text will wrap to fill the bounding box.
   */
  exports.prototype.setWidth = function(width) {
    this['width'] = width;
    return this;
  }


  /**
   * Returns Set the width of the HTML asset bounding box. Text and elements will be masked if they exceed the  height of the bounding box.
   * @return {Number}
   */
  exports.prototype.getHeight = function() {
    return this['height'];
  }

  /**
   * Sets Set the width of the HTML asset bounding box. Text and elements will be masked if they exceed the  height of the bounding box.
   * @param {Number} height Set the width of the HTML asset bounding box. Text and elements will be masked if they exceed the  height of the bounding box.
   */
  exports.prototype.setHeight = function(height) {
    this['height'] = height;
    return this;
  }


  /**
   * Returns Apply a background color behind the HTML bounding box using. Set the text color using hexadecimal  color notation. Transparency is supported by setting the first two characters of the hex string  (opposite to HTML), i.e. #80ffffff will be white with 50% transparency.
   * @return {String}
   */
  exports.prototype.getBackground = function() {
    return this['background'];
  }

  /**
   * Sets Apply a background color behind the HTML bounding box using. Set the text color using hexadecimal  color notation. Transparency is supported by setting the first two characters of the hex string  (opposite to HTML), i.e. #80ffffff will be white with 50% transparency.
   * @param {String} background Apply a background color behind the HTML bounding box using. Set the text color using hexadecimal  color notation. Transparency is supported by setting the first two characters of the hex string  (opposite to HTML), i.e. #80ffffff will be white with 50% transparency.
   */
  exports.prototype.setBackground = function(background) {
    this['background'] = background;
    return this;
  }


  /**
   * Returns Place the HTML in one of nine predefined positions within the HTML area.
   * @return {module:model/HtmlAsset.PositionEnum}
   */
  exports.prototype.getPosition = function() {
    return this['position'];
  }

  /**
   * Sets Place the HTML in one of nine predefined positions within the HTML area.
   * @param {module:model/HtmlAsset.PositionEnum} position Place the HTML in one of nine predefined positions within the HTML area.
   */
  exports.prototype.setPosition = function(position) {
    this['position'] = position;
    return this;
  }


  /**
   * Allowed values for the <code>position</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PositionEnum = {
    /**
     * value: "top"
     * @const
     */
    "top": "top",
    /**
     * value: "topRight"
     * @const
     */
    "topRight": "topRight",
    /**
     * value: "right"
     * @const
     */
    "right": "right",
    /**
     * value: "bottomRight"
     * @const
     */
    "bottomRight": "bottomRight",
    /**
     * value: "bottom"
     * @const
     */
    "bottom": "bottom",
    /**
     * value: "bottomLeft"
     * @const
     */
    "bottomLeft": "bottomLeft",
    /**
     * value: "left"
     * @const
     */
    "left": "left",
    /**
     * value: "topLeft"
     * @const
     */
    "topLeft": "topLeft",
    /**
     * value: "center"
     * @const
     */
    "center": "center"  };


  return exports;
}));


