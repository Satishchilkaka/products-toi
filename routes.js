const fs = require('fs')
const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.setHeader('Context-Type', 'text/html')
        res.write('<html>')
        res.write('<header><title> express rest </title></header>')
        res.write('<body><h1>')
        res.write('<form action="/message" method="POST"><input type= "text" name="message"><button type= "submit">Send</button>')
        res.write('</body>')
        res.write('</html>')
        res.statusCode = 200
        return res.end()
    }
    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString()
            console.log(parseBody)
            const userMessage = parseBody.split('=')
            console.log(userMessage[1])
            fs.writeFile('message.text', userMessage, (err) => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                res.end()
                if (err) {
                    throw err
                }
            });
        });
    }
    res.setHeader('Context-Type', 'text/html')
    res.write('<html>')
    res.write('<header><title>Test</title></header>')
    res.write('<body><h1>')
    res.write('<form action="/message" method="POST"><input type= "text" name="message"><button type= "submit">Send</button>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
}
module.exports = requestHandler;
/* module.exports.requestHandler = requestHandler
module.exports.text = 'some tets' */