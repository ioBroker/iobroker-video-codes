let text = $input.first().json.output;
if (typeof text === 'string') {
  text = text.replaceAll('```', '');
  text = text.replace(/^json/, '');
  text = JSON.parse(text);
}
return text.map(it => ({ json: it }));
