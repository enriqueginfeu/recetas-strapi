'use strict';

/**
 * pollo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pollo.pollo');
