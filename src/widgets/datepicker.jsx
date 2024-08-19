import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/datepicker.css'
const CustomDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log('선택된 날짜:', date);
    };

    return (
        <div className='datePicker'>
            <h4>접종 날짜</h4>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd"  // 원하는 날짜 형식으로 설정
                placeholderText="날짜를 선택하세요"  // 날짜 선택 전 표시될 텍스트
            />
        </div>
    );
};

export default CustomDatePicker;
