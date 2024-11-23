'use strict';

/**
 * tour-guide service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tour-guide.tour-guide');
