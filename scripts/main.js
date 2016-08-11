


setTimeout(function () {

    var ipfs = window.IpfsApi('127.0.0.1', '5001')

    console.log('hello world!', ipfs)

    ipfs.id('QmTUeRKutKfbTRmoXsgRTv4r9zKJyFVrX3NVLQctRmoa1v')
        .then(function (id) {
            console.log('my id is: ', id)
        })
        .catch(function (err) {
            console.log('Fail: ', err)
        })

    ipfs.id()
        .then(function (id) {
            console.log('my id is: ', id)
        })
        .catch(function (err) {
            console.log('Fail: ', err)
        })

}, 1 * 1000);