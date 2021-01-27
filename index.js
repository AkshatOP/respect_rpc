var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Hello test !!",
assets : {
large_image : "disk_neon",
large_text : "PUBG" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "mayb" , url : "https://google.com"},{label : "mayb2",url : "https://youtube.com"}]
}
})
})
client.login({ clientId : "803859542961029170" }).catch(console.error);