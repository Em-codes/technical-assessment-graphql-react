import React from 'react';
import SelectBox from './SelectBox';
import { GET_INVOICES } from '../../queries/invoiceQueries'
import { useQuery } from '@apollo/client'


const SortByPaymentStatus = ({ filteredData, setFilteredData }) => {
    const { loading, error, data } = useQuery(GET_INVOICES)
    // const all = data.invoices.map(val => val.groupedInvoices)

    // const cv = filteredData.map(obj => {
    //     return {...obj, date: new Date(obj.date)};
    //   })
    //   console.log('asc',cv.sort(  (objA, objB) => Number(objA.date) - Number(objB.date)))
    //   console.log('desc',cv.sort( (objB, objA) => Number(objB.date) - Number(objA.date)))


    const bh = filteredData.map(val => val.groupedInvoices)
    const hh = [].concat.apply([], bh);
    console.log(hh)







      
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


        SortByAscendingOrder && filteredInvoices.push(...hh.sort((a, b) => ( a.paymentStatus.localeCompare(b.paymentStatus) )))
        SortByDescendingOrder && filteredInvoices.push(...hh.sort((a, b) => ( b.paymentStatus.localeCompare(a.paymentStatus) )))
        // defaultSort && filteredInvoices.push(...all)

        setFilteredData(filteredInvoices)
        // console.log(filteredData)
        
    }

    return (
        <div>
            <SelectBox options={options} onClick={onClick} newSelected={'Default'} label={'PS'}/>
        </div>
    );
};

export default SortByPaymentStatus;