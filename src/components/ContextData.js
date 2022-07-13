import React, { useState } from 'react'
import SortByDate from './filters/SortByDate'
import Invoices from './Invoices'


export const ContextData = ({ searchTerm, groupArrays, loading, error }) => {
    const [allData, setAllData] = useState(groupArrays)
    const [filteredData, setFilteredData] = useState(allData)

    return (
        <>
            <div className='filter-group'>
                <SortByDate filteredData={allData} setFilteredData={setFilteredData} />
                <SortByDate filteredData={allData} setFilteredData={setFilteredData} />
                <SortByDate filteredData={allData} setFilteredData={setFilteredData} />
                <SortByDate filteredData={allData} setFilteredData={setFilteredData} />
                {/* <SortByPaymentStatus filteredData={filteredData} setFilteredData={setFilteredData} /> */}
                {/* <SortByName filteredData={filteredData} setFilteredData={setFilteredData} /> */}
            </div>
            {!loading && !error &&
                <div>
                    {filteredData.map((invoice, i) => (
                        <Invoices setFilteredData={setFilteredData} setAllData={setAllData} invoice={invoice && invoice} key={i} searchTerm={searchTerm} allData={allData} />
                    ))}
                </div>
            }
        </>
    )
}
