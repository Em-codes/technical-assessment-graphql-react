import Invoice from './Invoice'


const Invoices = ({ searchTerm, invoice, setFilteredData, setAllData }) => {
  return (
    <>
      <Invoice invoice={invoice && invoice} searchTerm={searchTerm} setAllData={setAllData}/>
    </>
  )
}

export default Invoices;