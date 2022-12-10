import React from "react";
import CalendarItem from "./CalendarItem.js"

class Calendar extends React.Component {
    constructor(props){
        super(props);
    }
    static days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ];
    static months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ]

    tableDate(date){
        const back = date.getDate() + new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
        const currentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const future = currentMonth.getDate() + (6 - currentMonth.getDay()) - date.getDate();
        const tmp = new Date(date);
        tmp.setDate(date.getDate() - back);
        let i = 0;
        const dates = [];
        while(i < back + future){
            const line = [];
            for(let j = 0;j < 7; ++j){
                line.push([tmp.getTime(), tmp.getDate(), tmp.getMonth()])
                tmp.setDate(tmp.getDate() + 1);
                ++i;
            }
            dates.push(line);
        }
        return dates;
    }

    render(){
        const {date} = this.props;
        const dates = this.tableDate(date);
        return (
        <div  className="conteiner__calendare-block flex-column-block">
            <div className="current__calendare-block">
                <h4>{Calendar.days[date.getDay()]}</h4>
                <div className="middle-current__calendare-block flex-column-block">
                    <h2>{date.getDate()}</h2>
                    <h3>{Calendar.months[date.getMonth()]}</h3>
                    <h5>{date.getFullYear()}</h5>
                </div>
                <h6>{Calendar.months[date.getMonth()] + " " + date.getFullYear()}</h6>
            </div>
            <table>
                <colgroup>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col className="ui-datepicker-week-end"/>
                    <col className="ui-datepicker-week-end"/>
                </colgroup>
                <thead><tr key={-1}>
                    {
                        ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"].map( el =>
                            <CalendarItem value={el} key={el} _class="opacity-text"/>
                        )
                    }
                </tr>
                </thead>
                <tbody>
                {
                    dates.map((line, index) => 
                        (
                            <tr key={index}>
                               {
                                    line.map(_date => 
                                        <CalendarItem value={_date[1]} key={_date[0]} _class={_date[1]==date.getDate()?"ui-datepicker-today":_date[2]!=date.getMonth()?"opacity-text":null}/>
                                    )
                               }
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
        );
    }
  }
  
  export default Calendar ;