import { useParams } from "react-router-dom"

export function Lesson() {
    const { id } = useParams()
    return (
        <>
            <h1>Lesson {id}</h1>
            <img src="./adobe-digital-cafe/images/AdobeStock_232244890.jpg" alt="decorative"/>
        </>
    );
}
