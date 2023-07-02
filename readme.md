This is part of project based learning backend.

You will need to host a DB and send the connection link to DATABASE_URL evnvironment variable for this project to work

Folder structure is inspired from: https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/


# Important commands related to flyctl which will help

-> Proxy db so we can connect using pgadmin and view data
--> fly proxy 15432:5432 -a <db-name>

-> Forgot password
--> fly ssh console -a <db-name>
--> echo $OPERATOR_PASSWORD