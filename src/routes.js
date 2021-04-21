// Add a two routes 1. Load html page with form field 
// Send form data to 
const routeHandler = (req, res) => {
const url = req.url
const method = req.method
if(url === '/') {
    res.setHeader('Context-Type', 'text/html')
    res.write('<html>')
    res.write('<title> Hello </title>')
    res.write('<body>')
    res.write('<h1>Enter a user name</h1>')
    res.write('<form action="/user" method="POST"><input type= "text" name="message"><button type= "submit">Send</button>')
    res.write('</body>')
    res.write('</html>')
    res.statusCode = 200
    res.end()
}
if(url=== '/user' && method === 'POST'){
    const body = []
    req.on('data', (chunk) => {
        console.log(chunk)
        body.push(chunk)
    })
    return req.on('end', () => {
        const parseBody = Buffer.concat(body).toString
        const userName = parseBody.split('=')
        console.log(userName)
        res.setHeader('Context-Type', 'text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>User name list </h1>')
        res.write('<li>')
        res.write(`${userName}`)
        res.write('</li>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    })
}
}

module.exports= routeHandler