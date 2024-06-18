export default function PUT(req,res){
    if(req.method == "PUT")
    res.status(200).json({msg: "updated"})
}