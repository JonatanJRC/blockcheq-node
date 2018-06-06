var regulator = web3.personal.listAccounts[0];
var bank1 = web3.personal.listAccounts[1];
var bank2 = web3.personal.listAccounts[2];
var user1Addr = web3.personal.listAccounts[3];
var user2Addr = web3.personal.listAccounts[4];

console.log("Unlocking regulator");
web3.personal.unlockAccount(regulator,"",15000);
console.log("Unlocking bank 1");
web3.personal.unlockAccount(bank1,"garfield123",15000);
console.log("Unlocking bank 2");
web3.personal.unlockAccount(bank2,"garfield123",15000);
console.log("Unlocking user 1");
web3.personal.unlockAccount(user1Addr,"garfield123",15000);
console.log("Unlocking user 2");
web3.personal.unlockAccount(user2Addr,"garfield123",15000);

var blockbankAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"codeHash","type":"bytes32"}],"name":"getBankAuthorizedByHash","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_depositAccount","type":"string"},{"name":"_transactionID","type":"uint256"}],"name":"getTransactionCodelineHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"codePosition","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"codeHash","type":"bytes32"}],"name":"getBankIdHash","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBanksLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"accountHash","type":"bytes32"},{"name":"_transactionID","type":"uint256"}],"name":"getTransactionCodelineHashByHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAccountLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"}],"name":"getContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_code","type":"string"},{"name":"_name","type":"string"},{"name":"_account","type":"address"},{"name":"_contract","type":"address"}],"name":"addBank","outputs":[{"name":"id","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newRegulator","type":"address"},{"name":"_name","type":"string"}],"name":"transferRegulator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"}],"name":"getAccount","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_depositAccount","type":"string"}],"name":"getTransactionsLength","outputs":[{"name":"length","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_depositAccount","type":"string"},{"name":"_transactionID","type":"uint256"}],"name":"getTransactionContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_code","type":"string"},{"name":"_exists","type":"bool"}],"name":"setBankExistance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"}],"name":"getName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"codeHash","type":"bytes32"}],"name":"getContractByHash","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"codeHash","type":"bytes32"}],"name":"getBankExistanceByHash","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"accountHash","type":"bytes32"}],"name":"getTransactionsLengthByHash","outputs":[{"name":"length","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bankAddress","type":"address"},{"name":"codeline","type":"string"},{"name":"_depositAccount","type":"string"},{"name":"timestamp","type":"uint256"}],"name":"addTransaction","outputs":[{"name":"id","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_bankAddress","type":"address"}],"name":"getCode","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"codeLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"accountHash","type":"bytes32"},{"name":"_transactionID","type":"uint256"}],"name":"getTransactionExistanceByHash","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_depositAccount","type":"string"},{"name":"_transactionID","type":"uint256"}],"name":"getTransactionTimestamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"accountHash","type":"bytes32"},{"name":"_transactionID","type":"uint256"}],"name":"getTransactionBankCodeByHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"}],"name":"getBankAuthorized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_depositAccount","type":"string"},{"name":"_transactionID","type":"uint256"}],"name":"getTransactionBankCode","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"accountHash","type":"bytes32"},{"name":"_transactionID","type":"uint256"}],"name":"getTransactionTimestampByHash","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"codeHash","type":"bytes32"}],"name":"getCodeByHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"codeHash","type":"bytes32"}],"name":"getAccountByHash","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getAccountHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"}],"name":"getBankId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_depositAccount","type":"string"},{"name":"_transactionID","type":"uint256"}],"name":"getTransactionExistance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getBank","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"regulator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_code","type":"string"},{"name":"_name","type":"string"}],"name":"setBankName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_code","type":"string"},{"name":"_authorized","type":"bool"}],"name":"setBankAuthorized","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_code","type":"string"},{"name":"_contract","type":"address"}],"name":"setBankContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"codeHash","type":"bytes32"}],"name":"getNameByHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"accountHash","type":"bytes32"},{"name":"_transactionID","type":"uint256"}],"name":"getTransactionContractByHash","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"}],"name":"getBankExistance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRegulator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_code","type":"string"},{"name":"_account","type":"address"}],"name":"setBankAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_codePosition","type":"uint256"},{"name":"_codeLength","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"number","type":"uint256"},{"indexed":false,"name":"code","type":"string"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"bankAddress","type":"address"},{"indexed":false,"name":"contractAddress","type":"address"},{"indexed":false,"name":"authorized","type":"bool"},{"indexed":false,"name":"exists","type":"bool"}],"name":"BankChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"hashBankCode","type":"bytes32"},{"indexed":false,"name":"bankContract","type":"address"},{"indexed":false,"name":"hashCodeline","type":"bytes32"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"exists","type":"bool"}],"name":"TransactionChanged","type":"event"}];
var blockcheqAbi = [{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"checkId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"position","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"},{"name":"codeline","type":"string"}],"name":"addCheck","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"codeline","type":"string"},{"name":"amount","type":"uint256"},{"name":"date","type":"uint256"},{"name":"deliveredTo","type":"string"},{"name":"depositAccount","type":"string"},{"name":"securityCode","type":"string"}],"name":"fillAndDeliver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"codeline","type":"string"}],"name":"getStatus","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"code","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"codeline","type":"string"},{"name":"amount","type":"uint256"},{"name":"date","type":"uint256"},{"name":"deliveredTo","type":"string"},{"name":"depositAccount","type":"string"},{"name":"securityCode","type":"string"}],"name":"fill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"codeline","type":"string"},{"name":"amount","type":"uint256"}],"name":"getStatusCheck","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"codeline","type":"string"},{"name":"depositAccount","type":"string"},{"name":"securityCode","type":"string"}],"name":"accept","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ownerAccount","type":"address"}],"name":"deleteAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"checks","outputs":[{"name":"owner","type":"address"},{"name":"codeline","type":"string"},{"name":"amount","type":"uint256"},{"name":"processDate","type":"uint256"},{"name":"status","type":"uint8"},{"name":"reason","type":"string"},{"name":"depositAccount","type":"string"},{"name":"deliveredTo","type":"string"},{"name":"securityCode","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"codeline","type":"string"},{"name":"securityCode","type":"string"}],"name":"notAccept","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"codeline","type":"string"}],"name":"getReason","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"accountId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"codeline","type":"string"},{"name":"amount","type":"uint256"}],"name":"getReasonCheck","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ownerAccount","type":"address"},{"name":"numberAccount","type":"string"},{"name":"balanceAccount","type":"uint256"}],"name":"updateAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"codeline","type":"string"}],"name":"sendToHost","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"codeline","type":"string"},{"name":"status","type":"uint8"},{"name":"reason","type":"string"}],"name":"setStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ownerAccount","type":"address"}],"name":"restoreAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ownerAccount","type":"address"},{"name":"numberAccount","type":"string"},{"name":"balanceAccount","type":"uint256"}],"name":"addAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"accounts","outputs":[{"name":"owner","type":"address"},{"name":"number","type":"string"},{"name":"balance","type":"uint256"},{"name":"exists","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"codeline","type":"string"},{"name":"amount","type":"uint256"},{"name":"date","type":"uint256"},{"name":"depositAccount","type":"string"},{"name":"securityCode","type":"string"}],"name":"deposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"bankCode","type":"string"},{"name":"codePosition","type":"uint8"},{"name":"bankName","type":"string"},{"name":"decimalUnits","type":"uint8"},{"name":"tokenSymbol","type":"string"},{"name":"regulatorContract","type":"address"},{"name":"demostrator","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"accountId","type":"uint256"},{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"number","type":"string"},{"indexed":false,"name":"balance","type":"uint256"},{"indexed":false,"name":"exists","type":"bool"}],"name":"AccountChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"codeline","type":"string"},{"indexed":false,"name":"bytesCodeline","type":"bytes32"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"processDate","type":"uint256"},{"indexed":false,"name":"status","type":"uint8"},{"indexed":false,"name":"reason","type":"string"},{"indexed":false,"name":"depositAccount","type":"string"},{"indexed":false,"name":"deliveredTo","type":"string"},{"indexed":false,"name":"securityCode","type":"bytes32"}],"name":"CheckChanged","type":"event"}];

var blockbankAdrs = "0x1932c48b2bf8102ba33b4a6b545c32236e342f34";
var blockCheq1Adrs = "0xee02919a1fc709bce16f6bd13ede083f0d32449b";
var blockCheq2Adrs = "0x09ede8d9b17b522f839065ab19f60d1b8f4c7f1d";

var blockcheq1 = eth.contract(blockcheqAbi).at(blockCheq1Adrs);
var blockcheq2 = eth.contract(blockcheqAbi).at(blockCheq2Adrs);
var blockbank = eth.contract(blockbankAbi).at(blockbankAdrs);

var bank1Code = "353";
var bank2Code = "535";

var bank1Name = "BlockcheqBank-1";
var bank2Name = "BlockcheqBank-2";

var user1 = "98765432M";
var user2 = "23456789D";
