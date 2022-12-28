const User = require('../models/users')

exports.login = async(req, res)=>{

    let reqData = req.body

    const consulta = await User.findOne({
        attributes:['id','name','password'],
        where:{
            email:reqData.email
        }
    })

    if(consulta == null){
        res.status(400).json({
            mensagem:'E-mail ou senha invalidos, verifique seus dados!'
        })
    }else{
        if(reqData.password == consulta.password){
            res.status(200).json({
                mensagem:'Login Realizado com sucesso!'
            })
        }else{
            res.status(400).json({
                mensagem:'E-mail ou senhados invalidos, verifique seus dados!'
            })
        }
    }
}