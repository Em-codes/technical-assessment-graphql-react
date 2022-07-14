import React from 'react';
import SelectBox from './SelectBox';
import { GET_INVOICES } from '../../queries/invoiceQueries'
import { useQuery } from '@apollo/client'


const SortByName = ({ filteredData, setFilteredData }) => {
    const { loading, error, data } = useQuery(GET_INVOICES)

    const options = [
        { option: 'Default'},
        { option: 'Ascending' },
        { option: 'Descending' },
    ]

    var av = filteredData.map((val) => val.groupedInvoices)

    const gg = av.sort(function(a, b){
        return a[1].firstName.localeCompare(b[1].firstName);
    });
    
    // console.log(gg);

    // console.log(av)

    const onClick = (val) => {
        let filteredInvoices = []

        // const defaultSort = val.option === "Default"
        const SortByAscendingOrder = val.option === "Ascending"
        const SortByDescendingOrder = val.option === "Descending"

        // SortByAscendingOrder && filteredInvoices.push(filteredData.date.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
        // SortByDescendingOrder &&  filteredInvoices.push(filteredData.date.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        // defaultSort && filteredInvoices.push(...all)

        // SortByAscendingOrder && filteredInvoices.push(...tt.sort((a, b) => ( a.firstName.localeCompare(b.firstName) )))
        // SortByDescendingOrder && filteredInvoices.push(...tt.sort((a, b) => ( b.firstName.localeCompare(a.firstName) )))
        // defaultSort && filteredInvoices.push(...all)

        // setFilteredData(filteredInvoices)
        
    }

    return (
        <div>
            <SelectBox options={options} onClick={onClick} newSelected={'Default'} label={'Name'}/>
        </div>
    );
};

export default SortByName;