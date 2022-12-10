function CalendarItem({value, _class}){
    return (
        <td className={_class?_class:null} >
            {value}        
        </td>
    )
}

export default CalendarItem;