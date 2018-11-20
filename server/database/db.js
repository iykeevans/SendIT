const { Pool } = require('pg')
const connectionString = 'postgres://llpnbyof:HUFvsf1NQYcfy_OjhtdC8N4Hg7zLOTbn@stampy.db.elephantsql.com:5432/llpnbyof'

const pool = new Pool({
  connectionString: connectionString,
})

module.exports = pool;
