import '../css/inputTextWidget.css'

const InputTextWidget = ({inputTextName, placeholder}) => {
    return(
        <div className='InputTextWidgetBody'>
            <p>{inputTextName}</p>
            <input type="text" class="input-field" placeholder={placeholder} />
        </div>
    )
}

export default InputTextWidget;