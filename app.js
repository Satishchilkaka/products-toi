const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {

    //  console.log(req.url, req.method, req.headers)
    //  process.exit()
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
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString()
            console.log(parseBody)
            const userMessage = parseBody.split('=')
            console.log(userMessage[1])
            fs.writeFileSync('message.text', userMessage)
            res.statusCode = 302
            res.setHeader('Location', '/')
            res.end()
        })
        /*  res.setHeader('Context-Type', 'text/html')
         res.write('<html>')
         res.write('<header><title> express rest </title></header>')
         res.write('<body><h1>')
         res.write('<form action="/message" method="POST"><input type= "text" name="message"><button type= "submit">Send</button>')
         
         res.write('</body>')
         res.write('</html>')
      return  res.end() */
    }
})

server.listen(3000)
