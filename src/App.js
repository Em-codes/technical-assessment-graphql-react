import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Invoices from './components/Invoices';
import { useState } from 'react';
import SortByDate from './components/filters/SortByDate';


const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
})



function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <ApolloProvider client={client}>
        <div>
          <input type="text"  placeholder={'search item'} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <div>
            {/* <SortByDate  /> */}
          </div>
         <Invoices searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
