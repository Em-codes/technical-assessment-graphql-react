import Invoice from './Invoice'
import SortByDate from './filters/SortByDate'
import { useState } from 'react'
import SortByName from './filters/SortByName'
import SortByPaymentStatus from './filters/SortByPayementStatus'

const Invoices = ({ searchTerm, groupArrays, loading, error }) => {
  const [allData] = useState(groupArrays)
  const [filteredData, setFilteredData] = useState(allData)
  // console.log(filteredData)
  

  return (
    <>
    <SortByDate filteredData={allData} setFilteredData={setFilteredData}/>
    {/* <SortByPaymentStatus filteredData={filteredData} setFilteredData={setFilteredData} /> */}
    {/* <SortByName filteredData={filteredData} setFilteredData={setFilteredData} /> */}
      {!loading && !error &&
        <div>
          {filteredData.map((invoice, i) => (
            <Invoice invoice={invoice && invoice} key={i} searchTerm={searchTerm} />
          ))}
        </div>
      }
    </>
  )
}

export default Invoices