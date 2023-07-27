'use strict';

/**
 * vegetal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vegetal.vegetal');
