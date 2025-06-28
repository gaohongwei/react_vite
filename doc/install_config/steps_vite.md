# Steps

- npm create vite@latest
- npm install vite-tsconfig-paths --save-dev
- update vite.config.ts
  - define alias
  - define port
- npm i antd @ant-design/pro-card @ant-design/pro-table

## postgresql server

```
# 2️⃣ Install PostgreSQL
brew install postgresql

# 3️⃣ Start PostgreSQL as a service
brew services start postgresql

# 4️⃣ Verify installation
psql --version

CREATE USER kwei WITH PASSWORD 'your_secure_password';

# 5️⃣ Create a database and user
createdb letterai_db
psql -d letterai_db -c "CREATE USER myuser WITH PASSWORD 'mypassword';"
psql -d letterai_db -c "GRANT ALL PRIVILEGES ON DATABASE letterai_db TO kwei;"

# 6️⃣ Connect to your database
psql -d letterai_db -U kwei


```
