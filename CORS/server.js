require('http').createServer((req, res) => {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': 'http://localhost:8080'
  })
  res.end("这是你要的数据：11111")
}).listen(3002, '127.0.0.1')

console.log("启动服务， 监听127.0.0.1:3002")