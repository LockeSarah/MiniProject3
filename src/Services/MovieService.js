import axios from 'axios';
var host="http://localhost:3000";

async function GetMovie() {
    const res = await axios.get(host+"/browse/movie",{ headers: {
        'Content-Type': 'text/html',"Access-Control-Allow-Origin":host,
        "Access-Control-Allow-Headers": "Origin, X-Requested-With"
    }}, { withCredentials: true });
    let list=[];
    res.data.rows.map((tmp,index)=>{
        var book={"id":tmp.id,"title":tmp.title,"director":tmp.director,"producer":tmp.producer,"category_id":tmp.category_id};
        list.push(movie);
    })
    console.log(list);
    return list;
};

async function DeleteMovie(id, setMovie, setLength) {
    const res = await axios.get(host+"/browse/movie?id"+id,{ headers: {
        'Content-Type': 'text/html',"Access-Control-Allow-Origin":host,
        "Access-Control-Allow-Headers": "Origin, X-Requested-With"
    }}, { withCredentials: true });
    setMovie([]);
    setLength(0);
};

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
    const res = await axios.post(host+'/browse/addMovie', json,{ headers: {
       'Content-Type': 'application/json',"Access-Control-Allow-Origin":host,
       "Access-Control-Allow-Headers": "Origin, X-Requested-With"
    }}, { withCredentials: true });
    console.log(res);
};

export {GetMovie, DeleteMovie, MovieUpdate, MovieAdd}

