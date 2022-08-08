require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note meadow coin gesture crew force giant'; 
let testAccounts = [
"0x93721153dea6bd62561b168121de108c7c6eaf9bc8f3d7194eb307c74c259d6a",
"0x7ba47f9aad012f05049a337ba92144805c90b8560581536b60ccfe3d222899aa",
"0xb60bc0057e1e93d277e2574180f1a165d5cae5acbd45ef0d5c1b063303424240",
"0x07b7a3161c478ef63283a18ea825787607d8b99a57c6712508c06ea8ee3f9be7",
"0xc7d4eebc045bf4d550770d76eaca0d5d2017dab5a1fe4d20a15d4b84d373bc37",
"0xc4e3e2f2194c2fc7da36263fb698b9858d4bf55678d3027f3a93c11e27d72bed",
"0xf8d3ab8716fa7709f07b73788ed542b7e5498c67c6efd1f21767b927cd630229",
"0xd8f2f30bac531f29bc24323bac8243612d6de9923543c1cb52647e38ba4bc71d",
"0x92d99ae6a98b50f572145c55046aa0bc600cdf0f49dfe0a87e749b0ed6299f56",
"0x9fffeb366b25e08bda41d6db7df6f1e665c585a2d5ac8b12cb6bd7721ea66f8e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


