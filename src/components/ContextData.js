import React, { useEffect, useState } from 'react'
import SortByDate from './filters/SortByDate'
import SortByName from './filters/SortByName'
import Invoices from './Invoices'


export const ContextData = ({ searchTerm, groupArrays, loading, error }) => {
    const [allData, setAllData] = useState(groupArrays)
    const [filteredData, setFilteredData] = useState( allData ? allData : [])

    // useEffect(() => {
    //     setFilteredData(null)
    // })
    


    return (
        <>
            <div className='filter-group'>
                <SortByDate filteredData={allData} setFilteredData={setFilteredData} />
                <SortByName filteredData={allData} setFilteredData={setFilteredData}/>
                <SortByDate filteredData={allData} setFilteredData={setFilteredData} />
                <SortByDate filteredData={allData} setFilteredData={setFilteredData} />
            </div>
            {!loading && !error &&
                <div>
                    {filteredData.map((invoice, i) => (
                        <Invoices setFilteredData={setFilteredData} setAllData={setAllData} invoice={invoice && invoice} searchTerm={searchTerm} allData={allData} />
                    ))}
                </div>
            }
        </>
    )
}
