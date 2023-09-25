module.exports = (app)=>{

    app.get('/users', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users:[{
                name:'Luiz Henrique',
                emai:'contato@luiz.com.br',
                id:1
            }]
        });
    
    });
    
    app.get('/users/admin', (req, res)=> {
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users:[]
        });
    
    })
};