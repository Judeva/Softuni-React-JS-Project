const cors = (req, res, next)=>{
    res.setHeaders('Access-Controll-Allow-Origin', 'http://localhost:3001/');
    res.setHeaders('Access-Controll-Allow-Methods', 'OPTIONS', 'GET','POST','PUT', 'PATCH','DELETE');
    res.setHeaders('Access-Controll-Allow-Headers', 'Content-Type, Authorization');
}

module.exports = cors;