
## React App -Graphql__
A simple data management interface using graphql API.

## The Challenge
Implementing a simple app with a provided wireframe design that
shows a view of a mock dataset grouped by their date of creation
and can be filtered by their types or status of data with a 
specific filter component and also can be searched through with
a search box.

## How do I get setup ?
- frontend
1. Clone Project and `cd` to project directory >> `client`
2. Run `yarn install` in root folder to install dependencies
3. Type `yarn start` in the root folder to initialise project on local dev. env.
4. Navigate to your browser http://localhost: [your port in dev.env] e.g. http://localhost:3000
5. To run tests cases, type  `yarn test` in your terminal/ssh client

- link to live `[https://technical-assessment-graphql-react.vercel.app/](https://technical-assessment-graphql-react.vercel.app/)

- backend
1. Clone Project and `cd` to project directory >> `server`
2. Run `npm install` in root folder to install dependencies
3. Type `npm run devStart` in the root folder to initialise project on local dev. env.
4. Navigate to your browser http://localhost:5000 sited on the `server.js`file. 


## API Reference

#### Get all items

```http
  GET localhost:5000
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `invoices` | `string` | **Required**. null |