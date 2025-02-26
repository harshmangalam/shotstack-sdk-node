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
    define(['ApiClient', 'model/Destinations', 'model/Poster', 'model/Range', 'model/Size', 'model/Thumbnail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Destinations'), require('./Poster'), require('./Range'), require('./Size'), require('./Thumbnail'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.Output = factory(root.ShotstackSdk.ApiClient, root.ShotstackSdk.Destinations, root.ShotstackSdk.Poster, root.ShotstackSdk.Range, root.ShotstackSdk.Size, root.ShotstackSdk.Thumbnail);
  }
}(this, function(ApiClient, Destinations, Poster, Range, Size, Thumbnail) {
  'use strict';



  /**
   * The Output model module.
   * @module model/Output
   * @version v1
   */

  /**
   * Constructs a new <code>Output</code>.
   * The output format, render range and type of media to generate.
   * @alias module:model/Output
   * @class
   * @param format {module:model/Output.FormatEnum} The output format and type of media file to generate. <ul>   <li>`mp4` - mp4 video file</li>   <li>`gif` - animated gif</li>   <li>`jpg` - jpg image file</li>   <li>`png` - png image file</li>   <li>`bmp` - bmp image file</li>   <li>`mp3` - mp3 audio file (audio only)</li> </ul>
   */
  var exports = function(format) {
    var _this = this;

    _this['format'] = format;
  };

  /**
   * Constructs a <code>Output</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Output} obj Optional instance to populate.
   * @return {module:model/Output} The populated <code>Output</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('resolution')) {
        obj['resolution'] = ApiClient.convertToType(data['resolution'], 'String');
      }
      if (data.hasOwnProperty('aspectRatio')) {
        obj['aspectRatio'] = ApiClient.convertToType(data['aspectRatio'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = Size.constructFromObject(data['size']);
      }
      if (data.hasOwnProperty('fps')) {
        obj['fps'] = ApiClient.convertToType(data['fps'], 'Number');
      }
      if (data.hasOwnProperty('scaleTo')) {
        obj['scaleTo'] = ApiClient.convertToType(data['scaleTo'], 'String');
      }
      if (data.hasOwnProperty('quality')) {
        obj['quality'] = ApiClient.convertToType(data['quality'], 'String');
      }
      if (data.hasOwnProperty('repeat')) {
        obj['repeat'] = ApiClient.convertToType(data['repeat'], 'Boolean');
      }
      if (data.hasOwnProperty('range')) {
        obj['range'] = Range.constructFromObject(data['range']);
      }
      if (data.hasOwnProperty('poster')) {
        obj['poster'] = Poster.constructFromObject(data['poster']);
      }
      if (data.hasOwnProperty('thumbnail')) {
        obj['thumbnail'] = Thumbnail.constructFromObject(data['thumbnail']);
      }
      if (data.hasOwnProperty('destinations')) {
        obj['destinations'] = ApiClient.convertToType(data['destinations'], [Destinations]);
      }
    }
    return obj;
  }

  /**
   * The output format and type of media file to generate. <ul>   <li>`mp4` - mp4 video file</li>   <li>`gif` - animated gif</li>   <li>`jpg` - jpg image file</li>   <li>`png` - png image file</li>   <li>`bmp` - bmp image file</li>   <li>`mp3` - mp3 audio file (audio only)</li> </ul>
   * @member {module:model/Output.FormatEnum} format
   */
  exports.prototype['format'] = undefined;
  /**
   * The output resolution of the video or image. <ul>   <li>`preview` - 512px x 288px @ 15fps</li>   <li>`mobile` - 640px x 360px @ 25fps</li>   <li>`sd` - 1024px x 576px @ 25fps</li>   <li>`hd` - 1280px x 720px @ 25fps</li>   <li>`1080` - 1920px x 1080px @ 25fps</li> </ul>
   * @member {module:model/Output.ResolutionEnum} resolution
   */
  exports.prototype['resolution'] = undefined;
  /**
   * The aspect ratio (shape) of the video or image. Useful for social media output formats. Options are: <ul>   <li>`16:9` - regular landscape/horizontal aspect ratio (default)</li>   <li>`9:16` - vertical/portrait aspect ratio</li>   <li>`1:1` - square aspect ratio</li>   <li>`4:5` - short vertical/portrait aspect ratio</li>   <li>`4:3` - legacy TV aspect ratio</li> </ul>
   * @member {module:model/Output.AspectRatioEnum} aspectRatio
   */
  exports.prototype['aspectRatio'] = undefined;
  /**
   * @member {module:model/Size} size
   */
  exports.prototype['size'] = undefined;
  /**
   * Override the default frames per second. Useful for when the source footage is recorded at 30fps, i.e. on  mobile devices. Lower frame rates can be used to add cinematic quality (24fps) or to create smaller file size/faster render times or animated gifs (12 or 15fps). Default is 25fps. <ul>   <li>`12` - 12fps</li>   <li>`15` - 15fps</li>   <li>`24` - 24fps</li>   <li>`23.976` - 23.976fps</li>   <li>`25` - 25fps</li>   <li>`29.97` - 29.97fps</li>   <li>`30` - 30fps</li> </ul>
   * @member {module:model/Output.FpsEnum} fps
   */
  exports.prototype['fps'] = undefined;
  /**
   * Override the resolution and scale the video or image to render at a different size. When using scaleTo the asset should be edited at the resolution dimensions, i.e. use font sizes that look best at HD, then use scaleTo to output the file at SD and the text will be scaled to the correct size. This is useful if you want to create multiple asset sizes. <ul>   <li>`preview` - 512px x 288px @ 15fps</li>   <li>`mobile` - 640px x 360px @ 25fps</li>   <li>`sd` - 1024px x 576px @25fps</li>   <li>`hd` - 1280px x 720px @25fps</li>   <li>`1080` - 1920px x 1080px @25fps</li> </ul>
   * @member {module:model/Output.ScaleToEnum} scaleTo
   */
  exports.prototype['scaleTo'] = undefined;
  /**
   * Adjust the output quality of the video, image or audio. Adjusting quality affects  render speed, download speeds and storage requirements due to file size. The default `medium` provides the most optimized choice for all three  factors. <ul>   <li>`low` - slightly reduced quality, smaller file size</li>   <li>`medium` - optimized quality, render speeds and file size</li>   <li>`high` - slightly increased quality, larger file size</li> </ul>
   * @member {module:model/Output.QualityEnum} quality
   * @default 'medium'
   */
  exports.prototype['quality'] = 'medium';
  /**
   * Loop settings for gif files. Set to `true` to loop, `false` to play only once.
   * @member {Boolean} repeat
   * @default true
   */
  exports.prototype['repeat'] = true;
  /**
   * @member {module:model/Range} range
   */
  exports.prototype['range'] = undefined;
  /**
   * @member {module:model/Poster} poster
   */
  exports.prototype['poster'] = undefined;
  /**
   * @member {module:model/Thumbnail} thumbnail
   */
  exports.prototype['thumbnail'] = undefined;
  /**
   * @member {Array.<module:model/Destinations>} destinations
   */
  exports.prototype['destinations'] = undefined;


  /**
   * Returns The output format and type of media file to generate. <ul>   <li>`mp4` - mp4 video file</li>   <li>`gif` - animated gif</li>   <li>`jpg` - jpg image file</li>   <li>`png` - png image file</li>   <li>`bmp` - bmp image file</li>   <li>`mp3` - mp3 audio file (audio only)</li> </ul>
   * @return {module:model/Output.FormatEnum}
   */
  exports.prototype.getFormat = function() {
    return this['format'];
  }

  /**
   * Sets The output format and type of media file to generate. <ul>   <li>`mp4` - mp4 video file</li>   <li>`gif` - animated gif</li>   <li>`jpg` - jpg image file</li>   <li>`png` - png image file</li>   <li>`bmp` - bmp image file</li>   <li>`mp3` - mp3 audio file (audio only)</li> </ul>
   * @param {module:model/Output.FormatEnum} format The output format and type of media file to generate. <ul>   <li>`mp4` - mp4 video file</li>   <li>`gif` - animated gif</li>   <li>`jpg` - jpg image file</li>   <li>`png` - png image file</li>   <li>`bmp` - bmp image file</li>   <li>`mp3` - mp3 audio file (audio only)</li> </ul>
   */
  exports.prototype.setFormat = function(format) {
    this['format'] = format;
    return this;
  }


  /**
   * Returns The output resolution of the video or image. <ul>   <li>`preview` - 512px x 288px @ 15fps</li>   <li>`mobile` - 640px x 360px @ 25fps</li>   <li>`sd` - 1024px x 576px @ 25fps</li>   <li>`hd` - 1280px x 720px @ 25fps</li>   <li>`1080` - 1920px x 1080px @ 25fps</li> </ul>
   * @return {module:model/Output.ResolutionEnum}
   */
  exports.prototype.getResolution = function() {
    return this['resolution'];
  }

  /**
   * Sets The output resolution of the video or image. <ul>   <li>`preview` - 512px x 288px @ 15fps</li>   <li>`mobile` - 640px x 360px @ 25fps</li>   <li>`sd` - 1024px x 576px @ 25fps</li>   <li>`hd` - 1280px x 720px @ 25fps</li>   <li>`1080` - 1920px x 1080px @ 25fps</li> </ul>
   * @param {module:model/Output.ResolutionEnum} resolution The output resolution of the video or image. <ul>   <li>`preview` - 512px x 288px @ 15fps</li>   <li>`mobile` - 640px x 360px @ 25fps</li>   <li>`sd` - 1024px x 576px @ 25fps</li>   <li>`hd` - 1280px x 720px @ 25fps</li>   <li>`1080` - 1920px x 1080px @ 25fps</li> </ul>
   */
  exports.prototype.setResolution = function(resolution) {
    this['resolution'] = resolution;
    return this;
  }


  /**
   * Returns The aspect ratio (shape) of the video or image. Useful for social media output formats. Options are: <ul>   <li>`16:9` - regular landscape/horizontal aspect ratio (default)</li>   <li>`9:16` - vertical/portrait aspect ratio</li>   <li>`1:1` - square aspect ratio</li>   <li>`4:5` - short vertical/portrait aspect ratio</li>   <li>`4:3` - legacy TV aspect ratio</li> </ul>
   * @return {module:model/Output.AspectRatioEnum}
   */
  exports.prototype.getAspectRatio = function() {
    return this['aspectRatio'];
  }

  /**
   * Sets The aspect ratio (shape) of the video or image. Useful for social media output formats. Options are: <ul>   <li>`16:9` - regular landscape/horizontal aspect ratio (default)</li>   <li>`9:16` - vertical/portrait aspect ratio</li>   <li>`1:1` - square aspect ratio</li>   <li>`4:5` - short vertical/portrait aspect ratio</li>   <li>`4:3` - legacy TV aspect ratio</li> </ul>
   * @param {module:model/Output.AspectRatioEnum} aspectRatio The aspect ratio (shape) of the video or image. Useful for social media output formats. Options are: <ul>   <li>`16:9` - regular landscape/horizontal aspect ratio (default)</li>   <li>`9:16` - vertical/portrait aspect ratio</li>   <li>`1:1` - square aspect ratio</li>   <li>`4:5` - short vertical/portrait aspect ratio</li>   <li>`4:3` - legacy TV aspect ratio</li> </ul>
   */
  exports.prototype.setAspectRatio = function(aspectRatio) {
    this['aspectRatio'] = aspectRatio;
    return this;
  }


  /**
   * @return {module:model/Size}
   */
  exports.prototype.getSize = function() {
    return this['size'];
  }

  /**
   * @param {module:model/Size} size
   */
  exports.prototype.setSize = function(size) {
    this['size'] = size;
    return this;
  }


  /**
   * Returns Override the default frames per second. Useful for when the source footage is recorded at 30fps, i.e. on  mobile devices. Lower frame rates can be used to add cinematic quality (24fps) or to create smaller file size/faster render times or animated gifs (12 or 15fps). Default is 25fps. <ul>   <li>`12` - 12fps</li>   <li>`15` - 15fps</li>   <li>`24` - 24fps</li>   <li>`23.976` - 23.976fps</li>   <li>`25` - 25fps</li>   <li>`29.97` - 29.97fps</li>   <li>`30` - 30fps</li> </ul>
   * @return {module:model/Output.FpsEnum}
   */
  exports.prototype.getFps = function() {
    return this['fps'];
  }

  /**
   * Sets Override the default frames per second. Useful for when the source footage is recorded at 30fps, i.e. on  mobile devices. Lower frame rates can be used to add cinematic quality (24fps) or to create smaller file size/faster render times or animated gifs (12 or 15fps). Default is 25fps. <ul>   <li>`12` - 12fps</li>   <li>`15` - 15fps</li>   <li>`24` - 24fps</li>   <li>`23.976` - 23.976fps</li>   <li>`25` - 25fps</li>   <li>`29.97` - 29.97fps</li>   <li>`30` - 30fps</li> </ul>
   * @param {module:model/Output.FpsEnum} fps Override the default frames per second. Useful for when the source footage is recorded at 30fps, i.e. on  mobile devices. Lower frame rates can be used to add cinematic quality (24fps) or to create smaller file size/faster render times or animated gifs (12 or 15fps). Default is 25fps. <ul>   <li>`12` - 12fps</li>   <li>`15` - 15fps</li>   <li>`24` - 24fps</li>   <li>`23.976` - 23.976fps</li>   <li>`25` - 25fps</li>   <li>`29.97` - 29.97fps</li>   <li>`30` - 30fps</li> </ul>
   */
  exports.prototype.setFps = function(fps) {
    this['fps'] = fps;
    return this;
  }


  /**
   * Returns Override the resolution and scale the video or image to render at a different size. When using scaleTo the asset should be edited at the resolution dimensions, i.e. use font sizes that look best at HD, then use scaleTo to output the file at SD and the text will be scaled to the correct size. This is useful if you want to create multiple asset sizes. <ul>   <li>`preview` - 512px x 288px @ 15fps</li>   <li>`mobile` - 640px x 360px @ 25fps</li>   <li>`sd` - 1024px x 576px @25fps</li>   <li>`hd` - 1280px x 720px @25fps</li>   <li>`1080` - 1920px x 1080px @25fps</li> </ul>
   * @return {module:model/Output.ScaleToEnum}
   */
  exports.prototype.getScaleTo = function() {
    return this['scaleTo'];
  }

  /**
   * Sets Override the resolution and scale the video or image to render at a different size. When using scaleTo the asset should be edited at the resolution dimensions, i.e. use font sizes that look best at HD, then use scaleTo to output the file at SD and the text will be scaled to the correct size. This is useful if you want to create multiple asset sizes. <ul>   <li>`preview` - 512px x 288px @ 15fps</li>   <li>`mobile` - 640px x 360px @ 25fps</li>   <li>`sd` - 1024px x 576px @25fps</li>   <li>`hd` - 1280px x 720px @25fps</li>   <li>`1080` - 1920px x 1080px @25fps</li> </ul>
   * @param {module:model/Output.ScaleToEnum} scaleTo Override the resolution and scale the video or image to render at a different size. When using scaleTo the asset should be edited at the resolution dimensions, i.e. use font sizes that look best at HD, then use scaleTo to output the file at SD and the text will be scaled to the correct size. This is useful if you want to create multiple asset sizes. <ul>   <li>`preview` - 512px x 288px @ 15fps</li>   <li>`mobile` - 640px x 360px @ 25fps</li>   <li>`sd` - 1024px x 576px @25fps</li>   <li>`hd` - 1280px x 720px @25fps</li>   <li>`1080` - 1920px x 1080px @25fps</li> </ul>
   */
  exports.prototype.setScaleTo = function(scaleTo) {
    this['scaleTo'] = scaleTo;
    return this;
  }


  /**
   * Returns Adjust the output quality of the video, image or audio. Adjusting quality affects  render speed, download speeds and storage requirements due to file size. The default `medium` provides the most optimized choice for all three  factors. <ul>   <li>`low` - slightly reduced quality, smaller file size</li>   <li>`medium` - optimized quality, render speeds and file size</li>   <li>`high` - slightly increased quality, larger file size</li> </ul>
   * @return {module:model/Output.QualityEnum}
   */
  exports.prototype.getQuality = function() {
    return this['quality'];
  }

  /**
   * Sets Adjust the output quality of the video, image or audio. Adjusting quality affects  render speed, download speeds and storage requirements due to file size. The default `medium` provides the most optimized choice for all three  factors. <ul>   <li>`low` - slightly reduced quality, smaller file size</li>   <li>`medium` - optimized quality, render speeds and file size</li>   <li>`high` - slightly increased quality, larger file size</li> </ul>
   * @param {module:model/Output.QualityEnum} quality Adjust the output quality of the video, image or audio. Adjusting quality affects  render speed, download speeds and storage requirements due to file size. The default `medium` provides the most optimized choice for all three  factors. <ul>   <li>`low` - slightly reduced quality, smaller file size</li>   <li>`medium` - optimized quality, render speeds and file size</li>   <li>`high` - slightly increased quality, larger file size</li> </ul>
   */
  exports.prototype.setQuality = function(quality) {
    this['quality'] = quality;
    return this;
  }


  /**
   * Returns Loop settings for gif files. Set to `true` to loop, `false` to play only once.
   * @return {Boolean}
   */
  exports.prototype.getRepeat = function() {
    return this['repeat'];
  }

  /**
   * Sets Loop settings for gif files. Set to `true` to loop, `false` to play only once.
   * @param {Boolean} repeat Loop settings for gif files. Set to `true` to loop, `false` to play only once.
   */
  exports.prototype.setRepeat = function(repeat) {
    this['repeat'] = repeat;
    return this;
  }


  /**
   * @return {module:model/Range}
   */
  exports.prototype.getRange = function() {
    return this['range'];
  }

  /**
   * @param {module:model/Range} range
   */
  exports.prototype.setRange = function(range) {
    this['range'] = range;
    return this;
  }


  /**
   * @return {module:model/Poster}
   */
  exports.prototype.getPoster = function() {
    return this['poster'];
  }

  /**
   * @param {module:model/Poster} poster
   */
  exports.prototype.setPoster = function(poster) {
    this['poster'] = poster;
    return this;
  }


  /**
   * @return {module:model/Thumbnail}
   */
  exports.prototype.getThumbnail = function() {
    return this['thumbnail'];
  }

  /**
   * @param {module:model/Thumbnail} thumbnail
   */
  exports.prototype.setThumbnail = function(thumbnail) {
    this['thumbnail'] = thumbnail;
    return this;
  }


  /**
   * @return {Array.<module:model/Destinations>}
   */
  exports.prototype.getDestinations = function() {
    return this['destinations'];
  }

  /**
   * @param {Array.<module:model/Destinations>} destinations
   */
  exports.prototype.setDestinations = function(destinations) {
    this['destinations'] = destinations;
    return this;
  }


  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "mp4"
     * @const
     */
    "mp4": "mp4",
    /**
     * value: "gif"
     * @const
     */
    "gif": "gif",
    /**
     * value: "mp3"
     * @const
     */
    "mp3": "mp3",
    /**
     * value: "jpg"
     * @const
     */
    "jpg": "jpg",
    /**
     * value: "png"
     * @const
     */
    "png": "png",
    /**
     * value: "bmp"
     * @const
     */
    "bmp": "bmp"  };

  /**
   * Allowed values for the <code>resolution</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ResolutionEnum = {
    /**
     * value: "preview"
     * @const
     */
    "preview": "preview",
    /**
     * value: "mobile"
     * @const
     */
    "mobile": "mobile",
    /**
     * value: "sd"
     * @const
     */
    "sd": "sd",
    /**
     * value: "hd"
     * @const
     */
    "hd": "hd",
    /**
     * value: "1080"
     * @const
     */
    "1080": "1080"  };

  /**
   * Allowed values for the <code>aspectRatio</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AspectRatioEnum = {
    /**
     * value: "16:9"
     * @const
     */
    "16:9": "16:9",
    /**
     * value: "9:16"
     * @const
     */
    "9:16": "9:16",
    /**
     * value: "1:1"
     * @const
     */
    "1:1": "1:1",
    /**
     * value: "4:5"
     * @const
     */
    "4:5": "4:5",
    /**
     * value: "4:3"
     * @const
     */
    "4:3": "4:3"  };

  /**
   * Allowed values for the <code>fps</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.FpsEnum = {
    /**
     * value: 12
     * @const
     */
    "12": 12,
    /**
     * value: 15
     * @const
     */
    "15": 15,
    /**
     * value: 23.976
     * @const
     */
    "23.976": 23.976,
    /**
     * value: 24
     * @const
     */
    "24": 24,
    /**
     * value: 25
     * @const
     */
    "25": 25,
    /**
     * value: 29.97
     * @const
     */
    "29.97": 29.97,
    /**
     * value: 30
     * @const
     */
    "30": 30  };

  /**
   * Allowed values for the <code>scaleTo</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScaleToEnum = {
    /**
     * value: "preview"
     * @const
     */
    "preview": "preview",
    /**
     * value: "mobile"
     * @const
     */
    "mobile": "mobile",
    /**
     * value: "sd"
     * @const
     */
    "sd": "sd",
    /**
     * value: "hd"
     * @const
     */
    "hd": "hd",
    /**
     * value: "1080"
     * @const
     */
    "1080": "1080"  };

  /**
   * Allowed values for the <code>quality</code> property.
   * @enum {String}
   * @readonly
   */
  exports.QualityEnum = {
    /**
     * value: "low"
     * @const
     */
    "low": "low",
    /**
     * value: "medium"
     * @const
     */
    "medium": "medium",
    /**
     * value: "high"
     * @const
     */
    "high": "high"  };


  return exports;
}));


