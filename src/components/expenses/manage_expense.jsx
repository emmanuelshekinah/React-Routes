import axios from 'axios';

export const getExpenses = () => {
    return axios
    .get('/api/tasks', {
        headers: {'Content-Type': 'aplication/json'}
    })
    .then(res => {
        return res.data;
    })
}


export const addExpense = (expenseName, expenseDescription, expensePeriod, expenseDateFrom, expenseDateTo, expenseAmount) =>{
    return axios
    .post('/api/tasks',
    {
       expenseName: expenseName,
       expenseDescription: expenseDescription,
       expensePeriod: expensePeriod,
       expenseDateFrom: expenseDateFrom,
       expenseDateTo: expenseDateTo,
       expenseAmount: expenseAmount,
       expenseType: 'jjj'
    },{
        headers: {'Content-Type': 'aplication/json'}
    })
    .then(res => {
        console.log(res.data)
    })
}

export const deleteExpense = id => {
    axios
   .delete('/api/tasks/'+id,
   {
        headers: {'Content-Type': 'aplication/json'}
    })
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err)
    })
}


export const updateExpense = (id,expenseName, expenseDescription, expensePeriod, expenseDateFrom, expenseDateTo, expenseAmount) => {
    return axios
    .put('/api/tasks/'+id,
    {
        expenseName: expenseName,
        expenseDescription: expenseDescription,
        expensePeriod: expensePeriod,
        expenseDateFrom: expenseDateFrom,
        expenseDateTo: expenseDateTo,
        expenseAmount: expenseAmount,
        expenseType: 'jjj'
    },
    {
         headers: {'Content-Type': 'aplication/json'}
     })
     .then(res => {
         console.log('Updated')
         console.log(res.data)
     })
     .catch(err => {
         console.log(err)
     })
 }