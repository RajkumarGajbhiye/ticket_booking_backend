const mongoose = require('mongoose');


//create schema
const movieSchema = new mongoose.Schema({
  
movie_name:{
type: String,
required:[true,'Title is mandatory'],
    },
    description:{
    type: String,   
    },
    actor_name:{
        type: String,   
        },
        directed_by:{
            type: String,   
            },
            release_date:{
                type: String,   
                },
                language:{
                    type: String,   
                    }

    
})

//set model:
const Movie = mongoose.model('movie', movieSchema, 'movies')

module.exports = Movie