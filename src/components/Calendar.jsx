import React, { useEffect, useState } from 'react'
import { DatePicker, Select, Space, TimePicker } from 'antd';
const { Option } = Select;
const PickerWithType = ({ type, onChange }) => {
    if (type === 'time') return <TimePicker onChange={onChange} />;
    if (type === 'date') return <DatePicker onChange={onChange} />;
    return <DatePicker picker={type} onChange={onChange} />;
};


function Calendarr() {
    const [time, setTime] = useState("time");
    const [date, setDate] = useState("date");
    
    console.log(time,date)


    console.log(time, date)
    return (
        <Space>
            <Select value={time} onChange={setTime}>
                <Option value="time">Time</Option>
            </Select>
            <PickerWithType type={time} onChange={(value) => console.log(value)} />

            <Select value={date} onChange={setDate}>
                <Option value="time">Date</Option>
            </Select>
            <PickerWithType type={date} onChange={(value) => console.log(value)} />

        </Space>
    );
}

export default Calendarr