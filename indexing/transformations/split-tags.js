'use strict';

const fields = [
  'tags',
  'tags_vision'
]

module.exports = function(state, metadata) {
  fields.forEach(field => {
    const value = metadata[field];
    console.log('value', value);
    if(typeof(value) === 'string' && value !== '') {
      metadata[field] = value.split(',');
    } else {
      metadata[field] = [];
    }
  });
  return metadata;
};
