#### Developer: [Li Fengyu](https://github.com/fengyuli2002)
#### Designer: [Liu Yueming](https://github.com/liuyuemingm)
---
# Instructions for Updates and Maintenance (Collaborator Only)

1. Make sure you have [Node.js](https://nodejs.org/en/) installed in your environment.
2. Run the following commands in the project's root directory:

   ```shell
   // Install react, mongoose, antd, and other necessary packages.
   npm i
   // Install webpack and babel to compile your JSX code.
   npm i -D

3. Make changes.
4. To effectuate all changes, run `npm test`.
5. Alternatively, to effectuate only changes associated with React.js, run `npm run build`, which triggers the webpack bundling. To initiate the Express.js server, run `npm run start`. See scripts in package.json for more.
6. The default http localhost port is 3000. The server automatically switches to `process.env.PORT` when deployed.
7. Submit a commit, then push.
8. Ideally, any push to this Github repository results in an automatic deployment on Heroku. Alternatively, try the following.
9. Make sure you have [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed.
10. Run `git push heroku HEAD:master` to deploy the main branch. If asked for username and password, contact site administrator.
11. Visit MongoDB Atlas service for incoming messages. Login using the credentials provided by the site administrator.
