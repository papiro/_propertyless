'use strict'

const
    _ = new WeakMap(),
    _propertypool = (instance) => _.has(instance) ? _.get(instance) : (_.set(instance, {})).get(instance)

module.exports = _propertypool
