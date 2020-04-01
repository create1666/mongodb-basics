var http = require('http');
var fs = require('fs');
​
​
http.createServer(function (req, res) {
  if (req.method === 'POST'){
    let message ='';
    req.on('data', (data)=>{
      message += data;
    });
    req.on('end', ()=>{
      fs.writeFile('message.txt', message, (err)=>{
        if(err) throw err;
      });
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<form action="/message"    method="POST">
    <input type="text" name="Message" placeholder="Message" id=""><br>
    <button class="btn btn-success">Submit</button>
    </form>`)
    res.end()
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<form action="/message"    method="POST">
    <input type="text" name="Message" placeholder="Message" id=""><br>
    <button class="btn btn-success">Submit</button>
    </form>`)
    res.end()
}}).listen(8080)