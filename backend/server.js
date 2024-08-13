import express from 'express'
import cors from 'cors'
const server = express();


server.use(cors());

server.get('/api/special', (req,res)=>{
    console.log("jzfhiushg N")
    res.json({
        sucess: true,
        message:"hey guys i am fine"
    })
}
 )

 server.listen(process.env.PORT || 4000, () => {
    console.log(`⚙️ Server is running at port :4000`);
})