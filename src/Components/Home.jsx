import {useContext, useState} from "react";
import { DataContext } from "../App";

export default function Home(){

    const [name,setName]=useState("");
    const [ptr, setPtr] = useState(null);
    const {movieList} = useContext(DataContext);
    function nameHandler(e){
        setName(e.target.value);
    }
    return (
        <div className="flex justify-center">
            <div className="w-1/2 p-4 border-2 border-amber-900 ">
                <ul>
                    {movieList.map((movies, index) => (
                        <li key={index}
                        onMouseEnter={() => setPtr(movies)}
                        onMouseLeave={() => setPtr(null)}
                        className="cursor-pointer"
                        >
                            {movies.title}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-1/2 p-4 border-2 border-amber-900">
                {ptr ? (
                    <div >
                        <h2>{ptr.title}</h2>
                        <p>Director: {ptr.director}</p>
                        <p>Producer: ${ptr.producer}</p>
                        <p>Category: {ptr.category_id}</p>
                    </div>
                ) : (
                    <p>Hover over a movie to see more details</p>
                )}
            </div>
        </div>
    )
}