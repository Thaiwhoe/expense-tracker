const IncomeSchema = require('../models/incomeModel')

exports.addIncome = async(req, res) =>{
    const {title, amount, category, description, date} = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //Validations
        if (!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required'})
        }
        if (amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount incorrect'})
        }
        console.log('DOne now')
        await income.save()
        res.status(200).json({message: 'Saved Successfully'})
    } catch (error){

    }

    console.log(income)
}

server.KeepAliveTimeout = 3000