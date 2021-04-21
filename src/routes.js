
const routeHandler = (req, res) => {
const url = req.url
const method = req.method
if(url === '/') {
    res.setHeader('Context-Type', 'text/html')
    res.write('<html>')
    res.write('<title> Hello </title>')
    res.write('<body>')
    res.write('<h1>Hello Test 1</h1>')
    res.write('</body>')
    res.write('</html>')
    res.end()
}
if(url=== '/user'){
    res.setHeader('Context-Type', 'text/html')
    res.write('<html>')
    res.write('<body>')
    res.write('<h1>Users List</h1>')
    res.write('</body>')
    res.write('</html>')
    res.end()
}
}

module.exports= routeHandler