const http = require('http');
const app = require('./src/config/custom-express');

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
