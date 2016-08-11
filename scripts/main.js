


setTimeout(function () {

    var ipfs = window.IpfsApi();

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

}, 1 * 500);