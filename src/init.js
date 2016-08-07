
module.exports = function (config) {

    if (config) {
        this.config = config;
    } else {
        this.config = {
            type: 'env'
        }
    }
    
}
