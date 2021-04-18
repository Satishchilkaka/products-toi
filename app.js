const http = require('http')

const server = http.createServer((req, res) => {
  
    console.log(req.url, req.method, req.headers)
  //  process.exit()
  res.setHeader('Context-Type', 'text/html')
  res.write('<html>')
  res.write('<header><title>  test </title></header>')
  res.write('<body><h1>Sample test </h1>')
  
  res.write('</body>')
  res.write('</html>')
  res.end()
})

server.listen(3000)
