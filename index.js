'use strict'

const
    _ = new WeakMap(),
    _private = (instance) => _.has(instance) ? _.get(instance) : (_.set(instance, {})).get(instance)

module.exports = _private
