
var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('bignumber.js');

var Config = async function(accounts) {
    
    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0x47f6C91903aeF294118324f3566d9581AD32B036",
        "0xeBd0e6FD53ba03F2FbC71C59Ef4fff6cb4e6Be01",
        "0xFbcc9DdeF32ad71Ad12e89Ee0C6962120c61F674",
        "0xB6d019f7E8fEcE9dd5cF40190ececD00Be2C8E14",
        "0x30d0921789a39A934653e21EbB8040Bf95E54dcE",
        "0x333b997D79a4d926FdC9F0a6A6f1bDC21F60a188",
        "0x200B2FA4E04F380Da4fBcFDF0cc707aaa5048749",
        "0xdFA6A85ce11a8421b4C640cAaDAF9ea47ACDc0e8",
        "0x6B04120DA9ca2dDe75f9f28e3aE96C763829C7AB"
    ];


    let owner = accounts[0];
    let firstAirline = accounts[1];

    let flightSuretyData = await FlightSuretyData.new();
    let flightSuretyApp = await FlightSuretyApp.new(flightSuretyData.address);

    
    return {
        owner: owner,
        firstAirline: firstAirline,
        weiMultiple: (new BigNumber(10)).pow(18),
        testAddresses: testAddresses,
        flightSuretyData: flightSuretyData,
        flightSuretyApp: flightSuretyApp
    }
}

module.exports = {
    Config: Config
};