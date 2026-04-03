module.exports = (app)=>{

    app.get('/:id',(req,res,next)=>{
        const students = [
            {id:1,name:"aya"},
            {id:2,name:"sami"},
            {id:3,name:"sara"},
            {id:4,name:"ahmed"},
            {id:5,name:"mohamed"},
            {id:6,name:"ali"},
            {id:7,name:"omar"},
            {id:8,name:"aya"},
            {id:9,name:"sara"},
        ]
        res.json(students.find(student=>student.id==(req.params.id)));
        
        
    })
    
}