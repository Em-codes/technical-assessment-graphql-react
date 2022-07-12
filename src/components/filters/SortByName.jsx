import React from 'react';
import SelectBox from './SelectBox';
import { GET_INVOICES } from '../../queries/invoiceQueries'
import { useQuery } from '@apollo/client'


const SortByName = ({ filteredData, setFilteredData }) => {
    const { loading, error, data } = useQuery(GET_INVOICES)
    // const all = data.invoices.map(val => val.groupedInvoices)

    // const cc = {...filteredData}
    // console.log(cc.date)

    const mm = [
        {name:'emma', state:'imo'},
        {name:'kekeu', state:'abia'},
        {name:'popop', state:'uyo'},
    ]
    const tt = mm.map((val) => val.groupedInvoices)
    console.log(...tt)

 


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

        // SortByAscendingOrder && filteredInvoices.push(filteredData.date.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
        // SortByDescendingOrder &&  filteredInvoices.push(filteredData.date.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        // defaultSort && filteredInvoices.push(...all)

        SortByAscendingOrder && filteredInvoices.push(...tt.sort((a, b) => ( a.firstName.localeCompare(b.firstName) )))
        SortByDescendingOrder && filteredInvoices.push(...tt.sort((a, b) => ( b.firstName.localeCompare(a.firstName) )))
        // defaultSort && filteredInvoices.push(...all)

        setFilteredData(filteredInvoices)
        
    }

    return (
        <div>
            <SelectBox options={options} onClick={onClick} newSelected={'Default'} label={'Name'}/>
        </div>
    );
};

export default SortByName;