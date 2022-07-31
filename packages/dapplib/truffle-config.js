require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name regret often coconut install light army gather'; 
let testAccounts = [
"0x495cb3d99089356cea1ab32253c1043a31322cacfdcaa68de83356939bf9390c",
"0x73277d827a4159c0830c126f0a4aa37f2fe220118af8444f7b7ac88183578ff0",
"0xa94f11aa7749f76250fe9bd4c8c506dac01e00dd71b6dfd65038e2c5442446a4",
"0xf0321ea0be03bba1b034b8cee158510ec802578c2af632d16caac73fe58ebf28",
"0x76fcbae1ac56124a41394275d7bd4c055523466333489484cfa83b2e6fd1d6af",
"0x125625741c6e5d500ea35b3639dd852dfc564fbc77950f2ef45a71cf27ef6a3b",
"0x87cb6e807c611eae6a3eefe4117d27675a7a8c4cf0bb4be01e73169f12e0914e",
"0x0e29a9be7f941f5518ade756a8561c96c558f2d4753cfaf05232a419994a5999",
"0xef12891364e43c62087ba7d7c410b5776062510b1084491ed08f8fced922308b",
"0x1476435f24018fbee55df7f7de058adf78aa09fe97e2abb7aa078c004edca2d2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

