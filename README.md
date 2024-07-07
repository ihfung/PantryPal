Run the backend: ```  npm run local```
Run the frontend ``` npm start ```


DB_USER=labber
DB_NAME=finalterm
DB_PASSWORD=labber

psql
>DROP DATABASE finalterm;
>CREATE DATABASE finalterm;
>ALTER DATABASE finalterm OWNER TO labber;
>\list  

For database reset run the following command:
>npm run db:reset
or 
>http://localhost:8080/api/debug/reset

psql -U labbers -d finalterm
