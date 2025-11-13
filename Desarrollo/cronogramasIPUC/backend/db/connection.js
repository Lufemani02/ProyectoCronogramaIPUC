import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',     
  user: 'root',          
  password: '**',    
  database: '**',  
  port: 3306            
});

connection.connect(err => {
  if (err) {
    console.error('❌ Error al conectar con MySQL:', err);
    return;
  } else {
    console.log('✅ Conexión exitosa con MySQL');
  }
});

export default connection;