window.addEventListener('load', function() {
    if (typeof web3 !== 'undefined') {
        console.log("Web3 fallando"+ web3.currentProvider.constructor.name);
        window.web3 = new Web3(Web3.currentProvider);
    }else{
        console.log("Web3 exitoso");
        window.web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.0.8:8545"));
    }
})