import { useState, useContext, useEffect } from "react";
import { DataContext } from "../App";
import { categories } from "../Model/Categories.json";
import { GetMovie, DeleteMovie, MovieUpdate } from "../Services/MovieService";

export default function Movies() {
    const { movieList, logStatus } = useContext(DataContext);
    const [ movie, setMovie ] = useState([]);
    // const [ length, setLength ] = useState(movieList.length);
    const [ length, setLength ] = useState(-1);

    async function getList() {
        try {
            var list = await GetMovie();
            console.log("Fetched Movies:", list); // Debugging: Check if data is fetched
            setMovie(list);
            setLength(list.length);
        } catch (error) {
            console.error("Error fetching movies:", error); // Log any errors
            alert("Failed to fetch movies. Please check the backend connection.");
        }
    }

    useEffect(() => {getList();
        
    }, [logStatus, length]);

    async function deleteMovie(e) {
        var ind = e.target.value;
        await DeleteMovie(movie[ind].id, setMovie, setLength);
        alert("Movie #" + ind + " Deleted from the Database.");
    };
    async function updateMovie(e) {
        var ind = e.target.value;
        var myMovie = movie[ind];
        await MovieUpdate(myMovie);
        alert("Movie #" + ind + " Updated in the Database.");
    };
    function currUpdate(e, element, id) {
        var movie = movie.find(mov => mov.id = id);
        var val = e.target.value;
        if(element == 1) {movie.title=val;}
        else if(element == 2) {movie.title=val;}
        else if(element == 3) {movie.title=val;}
        else if(element == 4) {movie.title=val;}
    };

    return (
        <div>
            <h1 className="text-3xl">Future Home of Movies</h1>
            <h3 className="text-xl">Total Movies: {length}</h3>
            <div id ="tableContainer" className="h-[100vh] px-50 overflow-y-scroll flex justify-center bg-indigo-300">
                <table className="text-sm">
                    <thead>
                        <tr>
                            <th className="border-2 text-center">Title</th>
                            <th className="border-2 text-center">Director</th>
                            <th className="border-2 text-center">Producer</th>
                            <th className="border-2 text-center">Category</th>
                            {sessionStorage.getItem("admin")==1? <th className="border-2 text-center">Delete</th>:""}
                            {sessionStorage.getItem("admin")==1? <th className="border-2 text-center">Update</th>:""}
                        </tr>
                    </thead>
                    <tbody>
                        { movie.map((movie, index) => (
                                <tr key={index}>
                                    <td className="border-2"> <input type="text" defaultValue={movie.title} onChange={(e)=>{currUpdate(e, 1, movie.id)}}/> </td>
                                    <td className="border-2"> <input type="text" defaultValue={movie.director} onChange={(e)=>{currUpdate(e, 2, movie.id)}}/> </td>
                                    <td className="border-2"> <input type="text" defaultValue={movie.producer} onChange={(e)=>{currUpdate(e, 3, movie.id)}}/> </td>
                                    <td className="border-2">
                                        <select value={movie.category_id} onChange={(e)=>{currUpdate(e, 4, movie.id)}}>
                                            { categories.map((cat, index2) => {
                                                    if(movie.category_id==cat.id){
                                                        return ( <option value={cat.id} selected>{cat.category}</option> );
                                                    } else { return ( <option value={cat.id}>{cat.category}</option> ); }
                                                })}
                                        </select>
                                    </td>
                                    {sessionStorage.getItem("admin")==1? <td className="border-2 p-2">
                                        <button value={index} onClick={deleteMovie}>Delete</button></td>:""}
                                    {sessionStorage.getItem("admin")==1? <td className="border-2 p-2">
                                        <button value={index} onClick={updateMovie}>Update</button></td>:""}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}