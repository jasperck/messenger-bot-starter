'use strict';

/**
 * Attachment handler
 * @param {any} id
 * @param {any} attachment
 * @returns
 */
module.exports = (id, attachment) => (
  {
    recipient: { id },
    message: attachment
  }
);