import { useSelector, useDispatch } from "react-redux"
import { updateData } from "../scripts/http";
import { getData } from '../store/dataSlice';

export default function Section({title, content, meta}){
    const data = useSelector(state => state.data)
    const dispatch = useDispatch(); 

    const filtered = data.filter(item => item.desc === meta);
    const youngest = filtered.reduce((latest, item) => 
        item.date > (latest?.date ?? 0) ? item : latest, null);

    // Extract day and month if youngest exists
    let day = '--';
    let month = '--';
    if (youngest) {
    const dateObj = new Date(youngest.date * 1000);
    day = String(dateObj.getUTCDate())
    month = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ][dateObj.getUTCMonth()];
    }   

    const update = async () => {
        try {
            await updateData({ desc: meta, date: Math.floor(Date.now() / 1000) }); 
            console.log("Updated successfully!");
        } catch (err) {
            console.error(err);
        }

        dispatch(getData());
    }

    return (
        <div className="section">
            <div className="text">
                <div className="title">{title}</div>
                <div className="sub">Click to save a workout!</div>
            </div>
            <div className="plus" onClick={update}>+</div>
            <div className="stat">
                <div className="sub">
                    Latest {content}: <br />
                    <i>{day} {month}</i>
                </div>
                <div className="card">
                    <div className="day">{day}</div>
                    <div className="month">{month}</div>
                </div>
            </div>
        </div>
    )
}