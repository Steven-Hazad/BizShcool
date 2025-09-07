const db = require('./db');
async function test() {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    console.log('DB connected:', rows[0].result); // Should log 2
  } catch (err) {
    console.error('DB error:', err);
  }
}
test();