import Invoice from './Invoice'
import { useEffect } from 'react';


const Invoices = ({ searchTerm, invoice, setFilteredData, setAllData }) => {

  
    // useEffect(() => {
    //     let result = [];
    //     result = invoice && invoice.groupedInvoices.filter((val) =>
    //         val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         val.createdAt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         val.paymentStatus.toLowerCase().includes(searchTerm.toLowerCase())
    //     )
        
    
    //     const groups = (result).reduce((groups, invoice) => {
    //       const date = invoice.createdAt.split('T')[0];
    //       if (!groups[date]) {
    //         groups[date] = [];
    //       }
    //       groups[date].push(invoice);
    //       return groups;
    //     }, {});
      
    //     const groupArrays = Object.keys(groups).map((date) => {
    //       return {
    //         date,
    //         groupedInvoices: groups[date]
    //       };
    //     });
    
    //     // console.log(groups)
    //     // console.log(groupArrays)
    
    //     setFilteredData(prev => groupArrays)
    //     console.log(result)
    // }, [searchTerm])
 
  return (
    <>
      <Invoice invoice={invoice && invoice} searchTerm={searchTerm} setFilteredData={setFilteredData}/>
    </>
  ) 
}

export default Invoices;