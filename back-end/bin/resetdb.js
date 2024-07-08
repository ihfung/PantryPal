// load .env data into process.env
require('dotenv').config();

// other dependencies
const fs = require('fs');
const db = require('../db/connection');

// PG connection setup
// const connectionString = process.env.DATABASE_URL ||
//   `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;
// const client = new Client();

// Loads the schema files from db/schema
const runSchemaFiles = async (chalk) => {
  console.log(chalk.cyan(`-> Loading Schema Files ...`));
  const schemaFilenames = fs.readdirSync('./db/schema');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/schema/${fn}`, 'utf8');
    console.log(`\t-> Running ${chalk.green(fn)}`);
    await db.query(sql);
  }
};

const runSeedFiles = async (chalk) => {
  console.log(chalk.cyan(`-> Loading Seeds ...`));
  const schemaFilenames = fs.readdirSync('./db/seeds');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/seeds/${fn}`, 'utf8');
    console.log(`\t-> Running ${chalk.green(fn)}`);
    await db.query(sql);
  }
};

const runResetDB = async () => {
  let chalk;
  try {
    const chalkModule = await import('chalk');
    chalk = chalkModule.default;
    
    process.env.DB_HOST &&
      console.log(`-> Connecting to PG on ${process.env.DB_HOST} as ${process.env.DB_USER}...`);

    await runSchemaFiles(chalk);
    await runSeedFiles(chalk);
    process.exit();
  } catch (err) {
    if (chalk) {
      console.error(chalk.red(`Failed due to error: ${err}`));
    } else {
      console.error(`Failed due to error: ${err}`);
    }
    process.exit();
  }
};

runResetDB();
