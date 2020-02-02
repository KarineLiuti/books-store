const http = require('http');
const app = require('./src/config/custom-express');

app.listen(3000, () => {
  console.log('Server started on port 3000')
})

app.get('/', (req, res) => {
  res.send(`
      <html>
          <head>
              <meta charset="utf-8">
          </head>
          <body>
              <h1> Casa do Código </h1>
          </body>
      </html>
  `)
})

app.get('/livros', (req, res) => {
  res.send(`
      <html>
          <head>
              <meta charset="utf-8">
          </head>
          <body>
              <h1> Listagem de livros </h1>
          </body>
      </html>
  `)
})
// const servidor = http.createServer(function (req, resp) {

//   let html = '';
//   if (req.url == '/') {
//     html = `
//             <html>
//                 <head>
//                     <meta charset="utf-8">
//                 </head>
//                 <body>
//                     <h1> Casa do Código </h1>
//                 </body>
//             </html>
//         `;
//   } else if (req.url == '/livros') {
//     html = `
//             <html>
//                 <head>
//                     <meta charset="utf-8">
//                 </head>
//                 <body>
//                     <h1> Listagem de livros </h1>
//                 </body>
//             </html>
//         `;
//   }

//   // outros else-if

//   resp.end(html);
// });
// servidor.listen(3000);