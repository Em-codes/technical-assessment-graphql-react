import React from 'react';
import SelectBox from './SelectBox';

const SortByDate = ({ filteredData, setFilteredData, allData }) => {

    const options = [
        { option: 'Default'},
        { option: 'Ascending' },
        { option: 'Descending' },
    ]

    const onClick = (val) => {
        let filteredInvoices = []

        const defaultSort = val.option === "Default"
        const SortByAscendingOrder = val.option === "Ascending"
        const SortByDescendingOrder = val.option === "Descending"

        SortByAscendingOrder && filteredInvoices.push(...filteredData.sort((a, b) => new Date(a.date) - new Date(b.date)))
        SortByDescendingOrder &&  filteredInvoices.push(...filteredData.sort((a, b) => new Date(b.date) - new Date(a.date)))
        defaultSort && filteredInvoices.push(...allData)

        setFilteredData(prev => filteredInvoices)
    }

    return (
        <div>
            <SelectBox options={options} onClick={onClick} newSelected={'Default'} label={'Date'}/>
        </div>
    );
};

export default SortByDate;