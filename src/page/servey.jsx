import RadioButtonGroup from '../widgets/radiobutton'
import InputTextWidget from '../widgets/inputText'
import React, { useState } from 'react';
import CustomDatePicker from '../widgets/datepicker'
import '../css/main.css'
const ServeyPage = () => {
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedVaccine, setselectedVaccine] = useState('');
    const [selectedmedicationOptions, setselectedmedicationOptions] = useState('');

    const genderOptions = [
        { label: '남성', value: 'male' },
        { label: '여성', value: 'female' },
    ];
    const vaccineOptions = [
        { label: '아스트라제네카', value: 'astrazeneca' },
        { label: '화이자', value: 'Pfizer' },
        { label: '모더나', value: 'Moderna' },
        { label: '모르겠음', value: 'not' },
    ];
    const medicationOptions = [
        { label: '고혈압', value: '1' },
        { label: '당뇨', value: '2' },
        { label: '이상지질혈증', value: '3' },
        { label: '심장뇌혈관', value: '4' },
    ];

    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
    };
    const handleVaccineChange = (e) => {
        setselectedVaccine(e.target.value);
    };
    const handleMedicationChange = (e) => {
        setselectedmedicationOptions(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // 서버로 데이터를 전송하는 로직을 추가합니다.
        // 예를 들어, fetch 또는 axios를 사용하여 API 호출을 할 수 있습니다.
        console.log('선택된 성별:', selectedGender);

        // 서버에 데이터를 저장하는 예제 (axios 사용)
        // axios.post('/api/save-gender', { gender: selectedGender })
        //     .then(response => {
        //         console.log('서버 응답:', response.data);
        //     })
        //     .catch(error => {
        //         console.error('서버 오류:', error);
        //     });
    };

    return(
        <div className="serveyPage">
            <h4 className="serveytitle">기본 신체 정보와 백신 접종 정보</h4>
            <InputTextWidget inputTextName={"생년"} placeholder={"생년을 입력해주세요."}/>
                <form onSubmit={handleSubmit}>
           
            <RadioButtonGroup
                name="gender"
                options={genderOptions}
                selectedOption={selectedGender}
                onChange={handleGenderChange}
                radioFromName="성별"
            />
               <InputTextWidget inputTextName={"체중"} placeholder={"체중을 입력해주세요."}/>
               <RadioButtonGroup
                name="vaccine"
                options={vaccineOptions}
                selectedOption={selectedVaccine}
                onChange={handleVaccineChange}
                radioFromName="접종 백신"
            />
             <CustomDatePicker />
             <RadioButtonGroup
                name="vaccine"
                options={medicationOptions}
                selectedOption={selectedmedicationOptions}
                onChange={handleMedicationChange}
                radioFromName="현재 복용 중 약물"
            />
            <button type="submit" className='submit-button'>제출</button>
        </form>
        </div>
    )
}

export default ServeyPage;