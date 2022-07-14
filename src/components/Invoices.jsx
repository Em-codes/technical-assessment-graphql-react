import React, { useState } from 'react'
import SortByDate from './filters/SortByDate'
import SortByName from './filters/SortByName'
import Invoice from './Invoice'


const Invoices = ({ searchTerm, groupArrays, loading, error }) => {
  const [allData, setAllData] = useState(groupArrays)
  const [filteredData, setFilteredData] = useState(allData)

  return (
    <>
      <div className='filter-group'>
        <SortByDate filteredData={filteredData} allData={allData} setFilteredData={setFilteredData} />
        <SortByName filteredData={filteredData} allData={allData} setFilteredData={setFilteredData} />
      </div>
      {!loading && !error &&
        <div>
          {filteredData.map((invoice, i) => (
            <Invoice
              setFilteredData={setFilteredData}
              setAllData={setAllData}
              filteredData={filteredData}
              invoice={invoice && invoice}
              searchTerm={searchTerm}
              allData={allData} />
          ))}
        </div>
      }
    </>
  )
}

export default Invoices;
