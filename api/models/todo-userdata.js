const db = require('./database.js');

class TodoUserData{
  getAll(callback){
    const sql = 'SELECT * FROM user';
    var datas = [];

    db.query(sql, (err,results)=>{
      if (err) {
        callback(true);
        return;
      }

      results.forEach((e)=>{ datas.push(e); });
      callback(false, datas);
    });
  };
 
  deleteone(id, callback) {
    const sql = 'DELETE from user where userid = ?';

    db.query(sql, [id], (err, results)=>{
      if (err){
        callback(true);
        return;
      }
      callback(false, results);
    });
  }
};

module.exports = TodoUserData;
