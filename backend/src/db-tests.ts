import { pool } from "./config/database";

async function testConnection() {
  try {
    const result = await pool.query(`
            SELECT 
                NOW() AS current_time,
                current_database() AS database,
                current_user AS connected_user;
                `);
    console.log(result.rows[0], result);
  } catch (e) {
    console.error("Datanse connection failed:", e);
  } finally {
    await pool.end();
  }
}

testConnection();
