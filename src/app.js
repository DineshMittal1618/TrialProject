const path=require('path');
const express=require('express');
const app=express();
const port=process.env.PORT || 3000;

const pathName=path.join(__dirname,'../Public');
const viewPath=path.join(__dirname,'../templates/views');

app.use(express.static(pathName));


app.set('view engine','hbs');
app.set('views',viewPath);


app.get('',(req,res)=>{

    res.render('index');

})


app.listen(port,()=>{
    console.log('Server started on port '+port);
})