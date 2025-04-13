import axios from 'axios';
var host="http://localhost:3000";

async function GetMovie() {
    const res = await axios.get(host+"/movie",{ headers: {
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

async function DeleteMovie(id, setMovie, setLength) {
    const res = await axios.get(host+"/movie?id"+id,{ headers: {
        'Content-Type': 'text/html',"Access-Control-Allow-Origin":host,
        "Access-Control-Allow-Headers": "Origin, X-Requested-With"
    }}, { withCredentials: true });
    setMovie([]);
    setLength(0);
};

async function MovieUpdate(movie) {
    const json = JSON.stringify(movie);
    const res = await axios.post(host+'/updateMovie', json,{ headers: {
       'Content-Type': 'application/json',"Access-Control-Allow-Origin":host,
       "Access-Control-Allow-Headers": "Origin, X-Requested-With"
    }}, { withCredentials: true });
    console.log(res);
};

async function MovieAdd(movie) {
    const json = JSON.stringify(movie);
    const res = await axios.post(host+'/addMovie', json,{ headers: {
       'Content-Type': 'application/json',"Access-Control-Allow-Origin":host,
       "Access-Control-Allow-Headers": "Origin, X-Requested-With"
    }}, { withCredentials: true });
    console.log(res);
};

export {GetMovie, DeleteMovie, MovieUpdate, MovieAdd}

