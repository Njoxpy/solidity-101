const path = require("path")
const fs = require("fs")
const solc = require("solc")

const InboxPath = path.resolve(__dirname, "contracts", "Inbox.sol")
const source = fs.readFileSync(InboxPath, "utf-8")

// console.log(source)

console.log(solc.compile(source, 1));