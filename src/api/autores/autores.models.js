const mongoose = require("mongoose");


const autorSchema = mongoose.Schema(
    {
        name:{type:String, require:true, unique:true},
        age:{type:Number, require:true},
        photo:{type:String, require:true},
        genre:{type:String, enum:["Novela policiaca","Novela Romantica","Terror","Cuentos para niños"]},
        libros:[{type: mongoose.Types.ObjectId, ref:"libros"}]
    }
)

const Autor = mongoose.model("autores", autorSchema);
module.exports= Autor;