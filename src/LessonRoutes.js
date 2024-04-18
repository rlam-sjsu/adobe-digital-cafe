import { Route, Routes } from "react-router-dom";
import { LessonLayout } from "./LessonLayout";
import { Lesson1Routes } from "./pages/Lesson1/Lesson1Routes";
import { Lesson2 } from "./pages/Lesson2";
import { Lesson3 } from "./pages/Lesson3";
import { LessonList } from "./pages/LessonList";
import { NewLesson } from "./pages/NewLesson";

export function LessonRoutes() {
    return (
        <>
            <Routes>
            <Route path="Lesson1/*" element={<Lesson1Routes />} />
                <Route element={<LessonLayout />}>
                    <Route index element={<LessonList />} />
                    <Route path="Lesson2" element={<Lesson2 />} />
                    <Route path="Lesson3" element={<Lesson3 />} />
                    <Route path="LessonNew" element={<NewLesson />} />
                </Route>
            </Routes>
        </>
    );
}