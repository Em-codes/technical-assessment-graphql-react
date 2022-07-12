import './App.css';
import Invoices from './components/Invoices';
import { useState } from 'react';
import { GET_INVOICES } from './queries/invoiceQueries';
import { useQuery } from '@apollo/client';
import SortByDate from './components/filters/SortByDate';
import DarkMode from './components/darkmode/Darkmode';






function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const { loading, error, data } = useQuery(GET_INVOICES)
  if (loading) return 'Loading...'
  if (error) return <p>Something went wrong</p>


  const groups = (data.invoices).reduce((groups, invoice) => {
    const date = invoice.createdAt.split('T')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(invoice);
    return groups;
  }, {});

  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      groupedInvoices: groups[date]
    };
  });

  return (
    <>
        <div>
          {/* <DarkMode /> */}
          <input type="text"  placeholder={'search item'} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <div>
          </div>
         <Invoices searchTerm={searchTerm} setSearchTerm={setSearchTerm} groupArrays={groupArrays} loading={loading} error={error}/>
        </div>
    </>
  );
}

export default App;
