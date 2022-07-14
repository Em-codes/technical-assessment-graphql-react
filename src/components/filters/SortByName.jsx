import React, { useState, useEffect } from 'react';
import SelectBox from './SelectBox';

const SortByName = ({ filteredData, allData, setFilteredData }) => {
    const [el, setEl] = useState('')
    const [top, setTop] = useState('')


    useEffect(() => {
        const p2 = filteredData.map((val) => (val.groupedInvoices)); setEl(...p2)
        const p8 = filteredData.map((val) => (val.date)); setTop(...p8)
    }, [])


    const options = [
        { option: 'Default' },
        { option: 'A-Z' },
        { option: 'Z-A' },
    ]

    const onClick = (val) => {
        let filteredInvoices = []

        const defaultSort = val.option === "Default"
        const SortByAscendingOrder = val.option === "A-Z"
        const SortByDescendingOrder = val.option === "Z-A"

        filteredData && SortByAscendingOrder && filteredInvoices.push(...el.sort((a, b) => (a.firstName.localeCompare(b.firstName))))
        filteredData && SortByDescendingOrder && filteredInvoices.push(...el.sort((a, b) => (b.firstName.localeCompare(a.firstName))))
        defaultSort && filteredInvoices.push(...allData)

        let arr = [];
        const obj = { date: top, groupedInvoices: filteredInvoices }
        defaultSort ? setFilteredData(filteredInvoices) : setFilteredData([...arr, obj])

    }

    return (
        <div>
            <SelectBox options={options} onClick={onClick} newSelected={'Default'} label={'Name'} />
        </div>
    );
};

export default SortByName;