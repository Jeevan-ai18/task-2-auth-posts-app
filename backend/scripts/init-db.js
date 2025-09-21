require('dotenv').config();
const fs = require('fs');
const path = require('path');
const pool = require('../db');

const sql = fs.readFileSync(
  path.join(__dirname, '../migrations/001_create_users.sql'),
  'utf8'
);

(async () => {
  try {
    await pool.query(sql);
    console.log('✅ Database initialized successfully');
    process.exit(0);
  } catch (err) {
    console.error('❌ Database initialization failed:', err);
    process.exit(1);
  }
})();
