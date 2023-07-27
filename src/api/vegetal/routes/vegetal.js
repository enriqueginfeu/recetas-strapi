'use strict';

/**
 * vegetal router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::vegetal.vegetal');
