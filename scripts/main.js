

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

function img_create(src, alt, title) {
    var img = new Image();
    img.src = src;
    if (alt != null) img.alt = alt;
    if (title != null) img.title = title;
    return img;
}

window.getImage = function () {

    window.ipfs.cat('QmRcm8yiCYmQ1jDxhUVtsjvps4XjtjSTziVSdQsszuiRfw')
        .then(function (cat) {
            console.log('cat: ', cat.url)

            var xhr = new XMLHttpRequest();
            xhr.open("GET", cat.url);
            xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
            xhr.onload = function () {
                var blob = xhr.response;
                var reader = new FileReader();
                reader.addEventListener("loadend", function () {
                    console.log(reader.result);
                    document.getElementById("test-image").innerHTML = reader.result;
                });
                reader.readAsText(blob);
            }
            xhr.send();
        })
        .catch(function (err) {
            console.log('Fail: ', err)
        })
}

setTimeout(function () {

    var ipfs = connectToIpfsGateway('127.0.0.1', '5001')

    ipfs.id()
        .then(function (id) {
            console.log('my id is: ', id)

            window.getImage();
        })
        .catch(function (err) {
            console.log('Fail: ', err)
            promptIpfsSetup();
        })

}, 1 * 1000);