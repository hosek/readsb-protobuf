/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.Receiver');

goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Receiver = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Receiver, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Receiver.displayName = 'proto.Receiver';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Receiver.prototype.toObject = function(opt_includeInstance) {
  return proto.Receiver.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Receiver} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Receiver.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: msg.getVersion(),
    refresh: msg.getRefresh(),
    latitude: msg.getLatitude(),
    longitude: msg.getLongitude(),
    history: msg.getHistory()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.Receiver} The clone.
 */
proto.Receiver.prototype.cloneMessage = function() {
  return /** @type {!proto.Receiver} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.Receiver.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.Receiver.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional float refresh = 2;
 * @return {number}
 */
proto.Receiver.prototype.getRefresh = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.Receiver.prototype.setRefresh = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional double latitude = 3;
 * @return {number}
 */
proto.Receiver.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.Receiver.prototype.setLatitude = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional double longitude = 4;
 * @return {number}
 */
proto.Receiver.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.Receiver.prototype.setLongitude = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 history = 15;
 * @return {number}
 */
proto.Receiver.prototype.getHistory = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 15, 0));
};


/** @param {number} value  */
proto.Receiver.prototype.setHistory = function(value) {
  jspb.Message.setField(this, 15, value);
};


