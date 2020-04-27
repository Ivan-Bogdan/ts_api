const AUTHOR = require('../database/mongo/author');

exports.newAuthor = async (req:any, res:any) => {
    let author = new AUTHOR(req.body)
    author.save().then((err:any,result:any) =>{
        if(err){
            return res.status(400).json(err)
        }else{
            return res.status(200).json(result)
        }
    })
};
exports.authorToBooks = async (req:any, res:any) => {}
exports.getAuthorToBooks = async(req:any,res:any) =>{

}