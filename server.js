const express=require('express');
const {graphqlHTTP}=require('express-graphql');
const cors=require('cors');
const schema=require('./schema')
const path=require('path')


const app=express();
app.use(cors());
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.use(express.static('public'))

app.get('*',(req,res)=>{
   res.sendFile(path.resolve(__dirname,'public','index.html'))
})
const PORT=process.env.PORT||4000
app.listen(PORT,()=>{
    console.log('4000端口正在启动')
})
