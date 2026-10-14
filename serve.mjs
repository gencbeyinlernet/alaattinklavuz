import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const decodedRoot=path.dirname(fileURLToPath(import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.md':'text/markdown; charset=utf-8','.csv':'text/csv; charset=utf-8','.sql':'text/plain; charset=utf-8'};
http.createServer((req,res)=>{let file;try{file=path.resolve(decodedRoot,'.'+decodeURIComponent((req.url||'/').split('?')[0]));}catch{res.writeHead(400);res.end();return;}if(file===decodedRoot)file=path.join(decodedRoot,'index.html');if(!file.startsWith(decodedRoot+path.sep)){res.writeHead(403);res.end();return;}fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);res.end('Not found');return;}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'text/plain; charset=utf-8'});res.end(data);});}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
