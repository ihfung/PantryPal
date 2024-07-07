Run the backend: ```  npm run local```
Run the frontend ``` npm start ```


DB_USER=myuser
DB_NAME=finalterm
DB_PASSWORD=mypassword

psql
>CREATE DATABASE finalterm;
>CREATE USER myuser WITH PASSWORD 'mypassword';
>GRANT ALL PRIVILEGES ON DATABASE finalterm TO myuser;
>\list  

For TRY is it still working or not 
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
     email VARCHAR(100) UNIQUE NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );

psql -U myuser -d finalterm