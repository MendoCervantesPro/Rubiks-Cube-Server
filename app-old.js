
const http = require('http');


http.createServer((req, res) => {


    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    //res.writeHead(200, {'content-type': 'application/csv'});

    res.write('Hola mundo');

    res.end();
    
})
.listen(2000)

console.log('Server running on port', 2000);