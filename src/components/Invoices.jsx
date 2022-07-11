import { useQuery } from '@apollo/client'
import Invoice from './Invoice'
import { GET_INVOICES } from '../queries/invoiceQueries'

const Invoices = ({ searchTerm }) => {

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
      {!loading && !error &&
        <div>
          {groupArrays.map((invoice, i) => (
            <Invoice invoice={invoice && invoice} key={i} searchTerm={searchTerm} />
          ))}
        </div>
      }
    </>
  )
}

export default Invoices