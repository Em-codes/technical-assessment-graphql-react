import Invoice from './Invoice'


const Invoices = ({ searchTerm, invoice, setFilteredData, setAllData }) => {
  console.log(invoice)
  return (
    <>
      <Invoice invoice={invoice && invoice} searchTerm={searchTerm} setAllData={setAllData}/>
    </>
  ) 
}

export default Invoices;