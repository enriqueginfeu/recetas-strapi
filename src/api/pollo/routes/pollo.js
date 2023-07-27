'use strict';

/**
 * pollo router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pollo.pollo');
