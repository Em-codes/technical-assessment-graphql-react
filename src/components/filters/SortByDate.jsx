import React from 'react';
import SelectBox from './SelectBox';
import { GET_INVOICES } from '../../queries/invoiceQueries'
import { useQuery } from '@apollo/client'


const SortByDate = ({ filteredData, setFilteredData }) => {
    const { loading, error, data } = useQuery(GET_INVOICES)
    // const all = data.invoices.map(val => val.groupedInvoices)

    // const cv = filteredData.map(obj => {
    //     return {...obj, date: new Date(obj.date)};
    //   })
    //   console.log('asc',cv.sort(  (objA, objB) => Number(objA.date) - Number(objB.date)))
    //   console.log('desc',cv.sort( (objB, objA) => Number(objB.date) - Number(objA.date)))










      
    const options = [
        { option: 'Default'},
        { option: 'Ascending' },
        { option: 'Descending' },
    ]

    const onClick = (val) => {
        let filteredInvoices = []

        // const defaultSort = val.option === "Default"
        const SortByAscendingOrder = val.option === "Ascending"
        const SortByDescendingOrder = val.option === "Descending"

        SortByAscendingOrder && filteredInvoices.push(...filteredData.sort((a, b) => new Date(a.date) - new Date(b.date)))
        SortByDescendingOrder &&  filteredInvoices.push(...filteredData.sort((a, b) => new Date(b.date) - new Date(a.date)))

        
        // SortByAscendingOrder && filteredInvoices.push(...cv.sort(  (objA, objB) => Number(objA.date) - Number(objB.date)))
        // SortByDescendingOrder &&  filteredInvoices.push(...cv.sort( (objA, objB) => Number(objB.date) - Number(objA.date)))
        

        // SortByAscendingOrder && filteredInvoices.push(...filteredData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
        // SortByDescendingOrder &&  filteredInvoices.push(...filteredData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        // defaultSort && filteredInvoices.push(...all)

        // SortByAscendingOrder && filteredInvoices.push(...filteredData.sort((a, b) => ( a.firstName.localeCompare(b.firstName) )))
        // SortByDescendingOrder && filteredInvoices.push(...filteredData.sort((a, b) => ( b.firstName.localeCompare(a.firstName) )))
        // defaultSort && filteredInvoices.push(...all)

        setFilteredData(filteredInvoices)
        console.log(filteredData)
        
    }

    return (
        <div>
            <SelectBox options={options} onClick={onClick} newSelected={'Default'} label={'Date'}/>
        </div>
    );
};

export default SortByDate;