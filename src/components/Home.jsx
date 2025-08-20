import Calendar from "./Calendar"
import { useSelector } from "react-redux";

export default function Home(){
    const data = useSelector(state => state.data)

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const thisMonthWorkouts = data.filter(item => {
        const workoutDate = new Date(item.date * 1000);
        return (
            workoutDate.getMonth() === currentMonth &&
            workoutDate.getFullYear() === currentYear
        );
    });

    return(
        <div className="home">
            <div className="text">
                <div className="title">Your activity</div>
                <div className="sub">Orange days mean training days.</div>
            </div>
            <div className="stat">
                <Calendar />
            </div>
            <div className="stat">
                <div className="sub">Summary: you have done <br /> {thisMonthWorkouts.length} training{thisMonthWorkouts.length > 1 && 's'} this month!</div>
                <div className="number">{thisMonthWorkouts.length}</div>
            </div>
        </div>
    )
}