export default function createWebSocketPlugin (socket) {
    return store => {
        // サーバからの返答をもってmutationする
        socket.onmessage = e => {
            console.log('RECIEVE')
            const items = JSON.parse(e.data)
            Object.keys(items).forEach(function (key) {
                store.state[key] = items[key]
            })
        };
        Object.keys(store.state).forEach(function(key) {
            store.watch(state => state[key], () => {
                socket.send(JSON.stringify(store.state));
            })
        });
    }
}