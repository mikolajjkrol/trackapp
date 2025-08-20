import { useSelector } from "react-redux";

export default function Calendar() {
  const data = useSelector(state => state.data) || [];

  const now = new Date();
  const month = now.getUTCMonth();
  const year = now.getUTCFullYear();
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();

  return (
    <div className="cal">
      <div className="calendar">
        {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;

            // find all trainings for this day
            const trainings = data
            .filter(item => {
                const date = new Date(item.date * 1000); // convert UNIX timestamp
                return (
                date.getMonth() === month &&
                date.getDate() === day &&
                date.getFullYear() === year
                );
            })
            .map(item => item.desc)
            .join(", "); // join multiple trainings

            return (
            <div
                className={`cday ${trainings ? "c" : ""}`}
                key={day}
            >
                {day}
                {trainings && <span className="ondayhover">{trainings}</span>}
            </div>
            );
        })}
        </div>
      {now.toLocaleString("en-US", { month: "long" })}, {year}
    </div>
  );
}