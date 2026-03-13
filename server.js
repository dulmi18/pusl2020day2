//port config
const port = 3001;
//express config
const exp = requre('express');
//config the server application
const app =exp();

app.use(exp.json());

//declare variables
//constants
let name ="dulmi";
let batch ="25.1";

//old way
//app.listen(port,function(){
//    console.log("$(port)");
//});

app.get('/',(req,res)=>{
    res.json({message:"Hello"})
})



app.listen(port, () => {
    console.log(`Server Started At Port: ${port}. \n Enter Ctrl+C to stop the server`);
    console.log(`name: ${name} \n batch: ${batch}`);
});