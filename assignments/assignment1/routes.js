const routeHandler = (req, res) => {
const url = req.url
const method = req.method
if(url === '/') {
    res.setHeader('Context-Type', 'text/html')
    res.write('<html>')
    res.write('<title> Hello </title>')
    res.write('<body>')
    res.write('<h1>Enter a user name</h1>')
    res.write('<form action="/create-user" method="POST"><input type= "text" name="message"><button type= "submit">Send</button>')
    res.write('<ul><li>Test user 1</li>')
    res.write('<li>Test user 2</li>')
    res.write('<li> Test user 3</li></ul>')
    res.write('</body>')
    res.write('</html>')
    res.statusCode = 200
    res.end()
}
if(url === '/user') {
    res.setHeader('Context-Type', 'text/html')
    res.write('<html>')
    res.write('<title> users </title>')
    res.write('<body>')
    res.write('<h1>User list</h1>')
    res.write('<ul><li>Test user 1</li>')
    res.write('<li>Test user 2</li>')
    res.write('<li> Test user 3</li></ul>')
    res.write('</body>')
    res.write('</html>')
    res.statusCode = 200
    res.end()
}
if(url=== '/create-user' && method === 'POST'){
    const body = []
    req.on('data', (chunk) => {
       // console.log(chunk)
        body.push(chunk)
    })
    return req.on('end', () => {
        const parseBody = Buffer.concat(body).toString()
        const userName = parseBody.split('=')
        console.log(userName[1])
        res.setHeader('Context-Type', 'text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>User name list </h1>')
        res.write('<h3>')
        res.write('<li>')
        res.write(`${userName[1]}`)
        res.write('</li>')
        res.write('</h3>')
        res.write('</body>')
        res.write('</html>')
        res.statusCode = 302
        res.end()
    })
}
}

module.exports= routeHandler