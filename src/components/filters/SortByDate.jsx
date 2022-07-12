import React from 'react';
import SelectBox from './SelectBox';
import { GET_INVOICES } from '../../queries/invoiceQueries'
import { useQuery } from '@apollo/client'


const SortByDate = ({ filteredData, setFilteredData }) => {
    const { loading, error, data } = useQuery(GET_INVOICES)
    // const all = data.invoices.map(val => val.groupedInvoices)


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

        SortByAscendingOrder && filteredInvoices.push(...filteredData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
        SortByDescendingOrder &&  filteredInvoices.push(...filteredData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        // defaultSort && filteredInvoices.push(...all)

        setFilteredData(filteredInvoices)
        
    }

    return (
        <div>
            <SelectBox options={options} onClick={onClick} newSelected={'Default'} label={'Date'}/>
        </div>
    );
};

export default SortByDate;