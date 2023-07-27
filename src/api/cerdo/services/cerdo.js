'use strict';

/**
 * cerdo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cerdo.cerdo');
