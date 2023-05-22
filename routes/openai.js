const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

router.get('/openapi.yaml', async function(req, res) {
  try {
    const yamlData = fs.readFileSync(path.join(process.cwd(), 'openapi.yaml'), 'utf8');
    const jsonData = yaml.load(yamlData);
    res.json(jsonData);

  } catch(e) {
    console.log(e.message)
    res.status(500).send({ error: 'Unable to fetch manifest.' });
  }
});

router.get('/.well-known/ai-plugin.json', function(req, res) {
  res.sendFile(path.join(process.cwd(), '/.well-known/ai-plugin.json'));
});

router.get('/logo.png', function(req, res) {
  res.sendFile(path.join(process.cwd(), 'logo.png'));
})

module.exports = router;
