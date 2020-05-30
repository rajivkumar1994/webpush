module.exports = {
    //i used mlab database for fast and realiable pace development enviroment
    //    mongoURI: 'mongodb://web-push:webpush123@ds213053.mlab.com:13053/web-push',
    mongoURI: "mongodb://localhost:27017/web-push",
    privateKey: 'Baq6QW0ZmY-62CSWdDJ8y_0yi3yaNyaPYkMmFijo4e8' || process.env.VAPID_PRIVATE_KEY,
    publicKey: 'BLip5q-woUT-DN2nbikmkvhxbTVIeFulw3OuzvtzjDzIh__SvMZ0x492QbNGIxSW-UdjR3wkRkCGKOlSn5AMkhw' || process.env.VAPID_PUBLIC_KEY
}