const fs = require('fs');

const requestHandler = (req,res)=>{
    console.log('req.url', req.url);
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write("<head><title>Enter Message</title></head>");
        res.write(
            `
            <body>
                <form action="/message" method="POST">
                    <label for="name">Nama :</label>
                    <input type = "text" name="nama"/><br>
                    <label for="email">E-mail :</label>
                    <input type = "text" email="message"/><br>
                    <label for="job">Pekerjaan :</label>
                    <input type="text" job="message"/><br>
                    <button type ="submit">
                     submit
                    </button>
                </form>
            </body>
            `,
        );
        res.end();
    }

    if (url === "/message" && method === "POST"){
        const body = [];
        req.on("data", chunk => {
            console.log('chunk', chunk);
            body.push(chunk);
        });
        

        return req.on ('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err =>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
};

module.exports = {
    requestHandler,
};
// console.log('routes. js');

// module.exports = {
//     someText: 'ini someText',
// };