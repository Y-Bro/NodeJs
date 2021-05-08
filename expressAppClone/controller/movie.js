import {v4 as uuid} from "uuid";

let movies = [];

export const getMovies = (req,res)=>{

    res.status(200).send(movies);

}

export const addMovies = (req,res) =>
{
    let movie = req.body;
    console.log(req.body);
    let id = uuid();
    movies.push({...movie,id:id});
    res.sendStatus(201);
}

export const getMovieById = (req,res) =>{
    let movie = movies.find(e =>{
        return e.id === req.params.id;
    })
    res.status(200).send(movie);
}

export const deleteMovieById = (req,res) =>{
    movies = movies.filter(x => {
        return x.id !== req.params.id;
    })
    res.sendStatus(201);
}

export const updateMovieById = (req,res) =>{
    movies = movies.map(x => {
       if(x.id === req.params.id)
       {
           x.Name = req.body.Name;
           x.Year = req.body.Year;
       }
       return x;
    })
    res.sendStatus(201);
}