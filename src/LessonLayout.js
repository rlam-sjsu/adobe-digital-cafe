import { Link, Outlet } from "react-router-dom";
import "./assets/css/styles.css"
import '@spectrum-web-components/accordion/sp-accordion.js';
import '@spectrum-web-components/accordion/sp-accordion-item.js';

export function LessonLayout() {
    return (
        <>
            <Link to="/lesson-plans/Lesson1" className={"padding"}>Lesson plans 1</Link>
            <br />
            <br />
            <Link to="/lesson-plans/Lesson2" className={"padding"}>Lesson plans 2</Link>
            <br />
            <br />
            <Link to="/lesson-plans/Lesson3" className={"padding"}>Lesson plans 3</Link>
            <br />
            <br />
            <Link to="/lesson-plans/LessonNew" className={"padding"}>New lesson plans</Link>

            <Outlet />
        </>
    );
}