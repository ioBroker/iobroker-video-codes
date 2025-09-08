const result = $input.first().json.val.match(/^\[(\w*)](.*)/);

return {
  json: {
    name: result[1],
    text: result[2],
  }
};
