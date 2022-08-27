const Transaction = require('../Models/transaction.model')
const Icon = require('../Models/icon.model');
const Category = require('../Models/category.model')

module.exports={
    addTransaction: async(req,res,next)=>{
        const transaction= new Transaction({
            wallet:req.body.wallet,
            amount:req.body.amount,
            category:req.body.category,
            date:req.body.date,
            note:req.body.note
        })
        await transaction.save(err => {
            if(err){
                throw err
            }

            res.status(200).json({success:true,data:transaction})
        })
    },
    listTransaction: async (req,res,next)=>{
        const transaction = await Transaction.find()
        res.json({success:true,data:transaction})
    },
    listTransactionUser: async (req,res,next)=>{
      const list = await Transaction.find({user:req.body.user}).populate('category')
        res.json({success:true,data:list})
    },
    listCategory: async (req,res,next)=>{
        const category = await Category.find();
        res.json({success:true,data:category})
    },
    listExpense: async(req,res,nex)=>{
        const category = await Category.find({type:'EXPENSE'})
        res.json({success:true,data:category})
    },
    listIncome: async (req,res,next)=>{
        const category = await Category.find({type:'INCOME'})
        res.json({success:true,data:category})
    },

}