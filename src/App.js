import './App.css';
import { useState } from 'react';
import { GET_INVOICES } from './queries/invoiceQueries';
import { useQuery } from '@apollo/client';
import DarkMode from './components/Header';
import Invoices from './components/Invoices';
import Loader from './components/Loader';


function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const { loading, error, data } = useQuery(GET_INVOICES)
  if (loading) return <Loader />
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
      <section>
        <DarkMode />
        <section className='main-wrapper'>
          <input type="text" className='search-bar' placeholder={'search by name, email & payment status'} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <Invoices searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            groupArrays={groupArrays}
            loading={loading}
            error={error}
          />
        </section>
      </section>
    </>
  );
}

export default App;
