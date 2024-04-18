import { Route, Link, Routes, Outlet } from "react-router-dom";
import { Section1 } from "./Section1.js";
import { Section2 } from "./Section2.js";
import { Section3 } from "./Section3.js";
import { Section4 } from "./Section4.js";
import { Lesson1Layouts } from "./Lesson1Layouts.js";
import { Section0 } from "./Section0.js";

export function Lesson1Routes() {
    return (
        <>
            <Routes>
                <Route element={<Lesson1Layouts />}>
                    <Route index element={<Section0 />} />    
                    <Route path="Section1" element={<Section1 />} />
                    <Route path="Section2" element={<Section2 />} />
                    <Route path="Section3" element={<Section3 />} />
                    <Route path="Section4" element={<Section4 />} />
                </Route>
            </Routes>
        </>
    );
}