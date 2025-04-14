import axios from 'axios';
var host="http://localhost:3000";

async function GetMovie() {
    const res = await axios.get(host+"/browse/movie",{ headers: {
        'Content-Type': 'text/html',"Access-Control-Allow-Origin":host,
        "Access-Control-Allow-Headers": "Origin, X-Requested-With"
    }}, { withCredentials: true });
    let list=[];
    res.data.rows.map((tmp,index)=>{
        var movie={"id":tmp.id,"title":tmp.title,"director":tmp.director,"producer":tmp.producer,"category_id":tmp.category_id};
        list.push(movie);
    })
    console.log(list);
    return list;
};

// async function DeleteMovie(id, setMovie, setLength) {
//     const res = await axios.get(host+"/browse/movie?id"+id,{ headers: {
//         'Content-Type': 'text/html',"Access-Control-Allow-Origin":host,
//         "Access-Control-Allow-Headers": "Origin, X-Requested-With"
//     }}, { withCredentials: true });
//     setMovie([]);
//     setLength(0);
// };
async function DeleteMovie(id, setMovie, setLength) {
    try {
        const res = await axios.delete(host + `/movies/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        });

        console.log("Deleted Movie:", res.data);
        // Update the state to reflect the deletion
        setMovie((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
        setLength((prevLength) => prevLength - 1);
    } catch (error) {
        console.error("Error deleting movie:", error.response?.data || error.message);
        alert("Failed to delete movie. Please try again.");
    }
}

async function MovieUpdate(movie) {
    const json = JSON.stringify(movie);
    const res = await axios.post(host+'/browse/updateMovie', json,{ headers: {
       'Content-Type': 'application/json',"Access-Control-Allow-Origin":host,
       "Access-Control-Allow-Headers": "Origin, X-Requested-With"
    }}, { withCredentials: true });
    console.log(res);
};

async function MovieAdd(movie) {
    const json = JSON.stringify(movie);
    try {
        const res = await axios.post(host+'/browse/addMovie', json,{ headers: {
        'Content-Type': 'application/json',"Access-Control-Allow-Origin":host,
        "Access-Control-Allow-Headers": "Origin, X-Requested-With"
        }}, { withCredentials: true });
        console.log("Movie Added: ", res);
    } catch (error) {
        console.error("Error adding movie: ", error);
        alert("Failed to add movie.");
    }

};

export {GetMovie, DeleteMovie, MovieUpdate, MovieAdd}

