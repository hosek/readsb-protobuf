/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.IdxType');
goog.provide('proto.IdxType.Description');
goog.provide('proto.IdxType.EngineType');
goog.provide('proto.IdxType.WTC');

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
proto.IdxType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IdxType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IdxType.displayName = 'proto.IdxType';
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
proto.IdxType.prototype.toObject = function(opt_includeInstance) {
  return proto.IdxType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IdxType} msg The msg instance to transform.
 * @return {!Object}
 */
proto.IdxType.toObject = function(includeInstance, msg) {
  var f, obj = {
    designator: msg.getDesignator(),
    engineType: msg.getEngineType(),
    description: msg.getDescription(),
    wtc: msg.getWtc()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.IdxType} The clone.
 */
proto.IdxType.prototype.cloneMessage = function() {
  return /** @type {!proto.IdxType} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string designator = 1;
 * @return {string}
 */
proto.IdxType.prototype.getDesignator = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.IdxType.prototype.setDesignator = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional EngineType engine_type = 2;
 * @return {!proto.IdxType.EngineType}
 */
proto.IdxType.prototype.getEngineType = function() {
  return /** @type {!proto.IdxType.EngineType} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {!proto.IdxType.EngineType} value  */
proto.IdxType.prototype.setEngineType = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional Description description = 3;
 * @return {!proto.IdxType.Description}
 */
proto.IdxType.prototype.getDescription = function() {
  return /** @type {!proto.IdxType.Description} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {!proto.IdxType.Description} value  */
proto.IdxType.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional WTC wtc = 4;
 * @return {!proto.IdxType.WTC}
 */
proto.IdxType.prototype.getWtc = function() {
  return /** @type {!proto.IdxType.WTC} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {!proto.IdxType.WTC} value  */
proto.IdxType.prototype.setWtc = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.IdxType.EngineType = {
  NO_ENGINE: 0,
  PISTON: 1,
  TURBOSHAFT: 2,
  JET: 3,
  ELECTRIC: 4,
  ROCKET: 5
};

/**
 * @enum {number}
 */
proto.IdxType.Description = {
  UNKNOWN_DESC: 0,
  LANDPLANE: 1,
  SEAPLANE: 2,
  AMPHIBIAN: 3,
  HELICOPTER: 4,
  GYROCOPTER: 5,
  TILTWING: 6,
  TILTROTOR: 7,
  GROUNDVEHICLE: 8,
  TOWER: 9,
  DRONE: 10,
  BALLOON: 11,
  PARAGLIDER: 12
};

/**
 * @enum {number}
 */
proto.IdxType.WTC = {
  UNKNOWN_WTC: 0,
  LIGHT: 1,
  MEDIUM: 2,
  HEAVY: 3
};

