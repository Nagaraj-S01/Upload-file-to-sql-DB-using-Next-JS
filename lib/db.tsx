import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: '127.0.0.1',
    port: 3306,
    database: 'images',
    user: 'root',
    password: ''
  }
});
export async function excuteQuery({q, file}: any) {
  try {
    const results = await db.query(`INSERT INTO Image VALUES(?,?);`, [2, file]);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}

export async function getQuery() {
  try {
    const results = await db.query(`SELECT * FROM Image`);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
