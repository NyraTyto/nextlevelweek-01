import knex from 'knex';
import path from 'path'; // une caminhos baseado no S.O.

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true
});

export default connection;

// Migrations = Histórico do banco de dados