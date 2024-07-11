import { format } from 'date-fns'


export const getTodaysDate = () => 
{
    const dateDOM = document.querySelector('.date');
    const date = new Date();
    let output = format(date, "MM.dd.yyyy");

    dateDOM.textContent = output;
}