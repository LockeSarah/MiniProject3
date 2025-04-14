import { useState } from 'react';
import { categories } from '../Model/Categories.json';
import { MovieAdd } from '../Services/MovieService';

export default function MovieAdmin() {
    const [logged, setLogged] = useState(0);
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [producer, setProducer] = useState("");
    const [done, setDone] = useState(0);
    const [category, setCategory] = useState("");

    async function addMovie() {
        var movie = {"title":title, "director":director, "producer":producer, "category_id":category};
        await MovieAdd(movie);
        // alert("Movie Added");
        setDone(1);
    };

    var categorySelect = categories.map((cat, index)=>{return <option value={cat.id}>{cat.category}</option>});

    if(done == 1) {
        return(<Navigate to = "/movies" />);
    } else if(sessionStorage.getItem("logValue") == 0 || sessionStorage.getItem("logValue") == 1) {
        return(<Navigate to = "/movies" />);
    } else {

        return(
            <div className="px-100 py-5 text-center">
                <h1>Add New Movie</h1> <br/>
                <div className="flex justify-center">
                    <table className="border-2 text-center px-20 py-20">
                        <tr>
                            <td className="border-2 px-2 py-2 text-sm">Please Enter Movie Title</td>
                            <td className="border-2 px-2 py-2"> <input type ="text" className="border-2 px-2 py-2" defaultValue={title} 
                            onChange={(e)=>{setTitle(e.target.value)}}></input></td>
                        </tr>
                        <tr>
                            <td className="border-2 px-2 py-2 text-sm">Please Enter Movie Director</td>
                            <td className="border-2 px-2 py-2"> <input type ="text" className="border-2 px-2 py-2" defaultValue={director} 
                            onChange={(e)=>{setDirector(e.target.value)}}></input></td>
                        </tr>
                        <tr>
                            <td className="border-2 px-2 py-2 text-sm">Please Enter Movie Producer</td>
                            <td className="border-2 px-2 py-2"> <input type ="text" className="border-2 px-2 py-2" defaultValue={producer} 
                            onChange={(e)=>{setProducer(e.target.value)}}></input></td>
                        </tr>
                        <tr>
                            <td className="border-2 px-2 py-2 text-sm">Please Choose Movie Category</td>
                            <td className="border-2 px-2 py-2 text-sm"> <select value={category} onChange={(e)=>{setCategory(e.target.value)}}>{categorySelect}</select></td>
                        </tr>
                    </table>
                </div>
                {/* <br/> <input type="button" value="Add Movie" className="border-2 p-2" onClick={(addMovie)=>{alert("Movie Added")}}></input> */}
                <br/> <input type="button" value="Add Movie" className="border-2 p-2" onClick={addMovie}></input>
            </div>
        );
    }
};