window.addEventListener('load', function() {
            if (typeof web3 !== 'undefined') {
                console.log("Web3 fallando"+ web3.currentProvider.constructor.name);
                window.web3 = new Web3(Web3.currentProvider);
            }else{
                console.log("Web3 exitoso");
                //url=this.prompt("Ingrese la direccion del servidor");
                window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
                // window.web3 = new Web3(new Web3.providers.HttpProvider("localhost:8545"));

            }
        })
