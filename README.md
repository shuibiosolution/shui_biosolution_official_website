# Instructions for Collaboration and Future Maintenance

1. Fork this repository, or directly pull from the repository if you're a collaboartor.

2. Clone it to keep a local copy.

3. `cd` into the project directory.

4. Make sure you have [Node.js](https://nodejs.org/en/) installed in your environment.

5. Run the following commands in terminal:

   ```shell
   // Install react, react-dom, antd, and other necessary packages.
   npm i
   // Install webpack and babel to compile your JSX code.
   npm i -D

6. Make changes.
7. To effectuate all changes, run `npm test`.
8. Alternatively, to effectuate only changes associated with React.js, run `npm run build`, which triggers the webpack bundling. To initiate the Express.js server, run `npm run start`.
9. If you're using a local environment, the console shall log a success message "Web app listening at http://localhost:3000". Copy this address and open it in the browser the see the homepage.
10. Submit a commit or pull request.

