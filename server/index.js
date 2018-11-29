import express from 'express'
import expressWs from 'express-ws'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// WebSocket用のエンドポイントを追加
expressWs(app)

let store = {};

app.ws('/ws', function(ws, req) {
    ws.on('message', function(msg) {
        console.log('RECIEVE')
        var item = JSON.parse(msg)
        item.count++
        store = item
        ws.send(JSON.stringify(store))
        console.log(store)
    })
})

// 起動
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port)