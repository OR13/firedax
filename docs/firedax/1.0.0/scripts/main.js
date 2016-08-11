

var connectToIpfsGateway = function (host, port) {
    return window.ipfs = window.IpfsApi(host, port);
}

var promptIpfsSetup = function () {

    var has_ipfs_installed, has_configured_access_controll_allow_origin;
    has_ipfs_installed = confirm("IPFS is required. Cancel to Install. Ok to Configure.")

    if (has_ipfs_installed) {

        prompt("Configure Access Control", 'ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"http://docs.firedax.com\"]"');

        var ipfs_host_port = prompt('Enter your IPFS node HOST:PORT', "127.0.0.1:5001");

        connectToIpfsGateway(ipfs_host_port.split(":")[0], ipfs_host_port.split(":")[1])

    } else {
        window.location.href = 'https://ipfs.io/docs/install';
    }
}

setTimeout(function () {

    var ipfs = connectToIpfsGateway('127.0.0.1', '5001')

    ipfs.id()
        .then(function (id) {
            console.log('my id is: ', id)
        })
        .catch(function (err) {
            console.log('Fail: ', err)
            promptIpfsSetup();
        })

}, 1 * 1000);