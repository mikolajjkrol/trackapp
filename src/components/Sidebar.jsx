import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/uiSlice";

export default function Sidebar(){
    const selectedIndex = useSelector(state => state.ui.selectedIndex);
    const isMenuVisible = useSelector(state => state.ui.isMenuVisible);

    const dispatch = useDispatch();

    const toggleSelected = (index) => {
        dispatch(uiActions.changeSelected(index))
    };
    return (
        <>
        <div className={`sidebar ${isMenuVisible ? 'display' : 'dontdisplay'}`}>
            <div className="highlight" style={{ top: `${selectedIndex * 90}px` }} />
        
            <button onClick={() => {toggleSelected(0)}}>📈</button>
            <button onClick={() => {toggleSelected(1)}}>👟</button>
            <button onClick={() => {toggleSelected(2)}}>💪</button>
            <button onClick={() => {toggleSelected(3)}}>🤸‍♀️</button>
        </div>
        </>
    )
}