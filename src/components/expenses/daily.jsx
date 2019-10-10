// Daily.js

import React, { Component } from 'react';
import {getExpenses, addExpense, deleteExpense, updateExpense} from './manage_expense';

class ExpenseDaily extends Component {

  constructor(){
    super()
    this.state = {
       id: '',
       expenseName: '',
       expenseDescription: '',
       expensePeriod: '',
       expenseDateFrom: '',
       expenseDateTo: '',
       expenseAmount: '',
       editDisabled: false,
       items: []
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    
  }

  componentDidMount(){
    this.getAll()
  }

  onChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  getAll = () =>{
    getExpenses().then(data => {
      console.log(data);
      this.setState({
       expenseName: '',
       expenseDescription: '',
       expensePeriod: '',
       expenseDateFrom: '',
       expenseDateTo: '',
       expenseAmount: '',
       items: [...data]
        
      },
      () => {
        console.log(this.state.items)
      })
    })
  }

  onSubmit = e => {
    e.preventDefault()
    addExpense(this.state.expenseName, this.state.expenseDescription, this.state.expensePeriod, this.state.expenseDateFrom, this.state.expenseDateTo,this.state.expenseAmount).then(() => {
      this.getAll()
    })
    this.setState({
      expenseName: ''
    })
  }

  onUpdate = e => {
    e.preventDefault()
    updateExpense(this.state.id, this.state.expenseName, this.state.expenseDescription, this.state.expensePeriod, this.state.expenseDateFrom, this.state.expenseDateTo,this.state.expenseAmount).then(() => {
      this.getAll()
    })
    this.setState({
      expenseName: '',
      editDisabled: ''
    })
    this.getAll()
  }

  onEdit = (itemid, e) => {
    e.preventDefault()

    var data = [...this.state.items]
    data.forEach((item, index) => {
      
      if(item.id === itemid){
       
        this.setState({
          id: item.id,
          expenseName: item.expenseName,
          expenseDescription: item.expenseDescription,
          expensePeriod: item.expensePeriod,
          expenseDateFrom: item.expenseDateFrom,
          expenseDateTo: item.expenseDateTo,
          expenseAmount: item.expenseAmount,
          editDisabled: true
        })
      }
    })
  }


  onDelete = (val, e) => {
    e.preventDefault()
    deleteExpense(val)
    this.getAll()
  }


  render() {
    return (
      <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <strong className="card-title">Create Expense</strong>
                            </div>
                            <div className="card-body">
                                
                                <div id="pay-invoice">
                                    <div className="card-body">
                                      
                                        
                                        <form onSubmit={this.onSubmit} novalidate="novalidate">
                                            
                                            <div className="form-group">
                                                <label for="cc-payment" className="control-label mb-1">Expense Name</label>
                                                <input 
                                                id="expenseName"
                                                name="expenseName" 
                                                type="text" 
                                                className="form-control"
                                                value={this.state.expenseName}
                                               
                                                onChange={this.onChange.bind(this)}
                                                />
                                            </div>
                                                 <div className="form-group has-success">
                                                    <label for="cc-name" className="control-label mb-1">Expense Description</label>
                                                    <input 
                                                      id="expenseDescription"
                                                      name="expenseDescription" 
                                                      type="text" 
                                                      className="form-control" 
                                                      value={this.state.expenseDescription}
                                                      onChange={this.onChange.bind(this)}
                                                      />
                                                <span className="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true"></span>
                                                </div>
                                                <div className="form-group">
                                                    <label for="cc-number" className="control-label mb-1">Expense Period</label>
                                                    <input 
                                                      id="expensePeriod"
                                                      name="expensePeriod" 
                                                      type="text" 
                                                      className="form-control" 
                                                      value={this.state.expensePeriod}
                                                      onChange={this.onChange.bind(this)}
                                                      />
                                                    <span className="help-block" data-valmsg-for="cc-number" data-valmsg-replace="true"></span>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="form-group">
                                                            <label for="cc-exp" className="control-label mb-1">From</label>
                                                            <input 
                                                              id="expenseDateFrom"
                                                              name="expenseDateFrom" 
                                                              type="text" 
                                                              className="form-control" 
                                                              value={this.state.expenseDateFrom}
                                                              onChange={this.onChange.bind(this)}
                                                              />
                                                            <span className="help-block" data-valmsg-for="cc-exp" data-valmsg-replace="true"></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <label for="x_card_code" className="control-label mb-1">To</label>
                                                        <div className="input-group">
                                                        <input 
                                                          id="expenseDateTo"
                                                          name="expenseDateTo" 
                                                          type="text" 
                                                          className="form-control" 
                                                          value={this.state.expenseDateTo}
                                                          onChange={this.onChange.bind(this)}
                                                          />
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="cc-number" className="control-label mb-1">Amount</label>
                                                    <input 
                                                          id="expenseAmount"
                                                          name="expenseAmount" 
                                                          type="text" 
                                                          className="form-control" 
                                                          value={this.state.expenseAmount}
                                                          onChange={this.onChange.bind(this)}
                                                          />
                                                    <span className="help-block" data-valmsg-for="cc-number" data-valmsg-replace="true"></span>
                                                </div>
                                                <div>
                                                  {!this.state.editDisabled ? (
                                                      <button id="payment-button" type="submit" 
                                                      className="btn btn-lg btn-info btn-block"
                                                      onClick={this.onSubmit.bind(this)}
                                                      >
                                                      <i className="fa fa-file fa-lg"></i>&nbsp;
                                                      <span id="payment-button-amount">Create Expense</span>

                                                      </button>
                                                  ) : ('')}
                                                  {this.state.editDisabled ?(
                                                    <button id="payment-button" type="submit" 
                                                    className="btn btn-lg btn-info btn-block"
                                                    onClick={this.onUpdate.bind(this)}
                                                    >
                                                    <i className="fa fa-file fa-lg"></i>&nbsp;
                                                    <span id="payment-button-amount">Update Expense</span>

                                                    </button>
                                                  ) : ('')}
                                                   
                                                </div>
                                        </form>
                                   
                                </div>

                            </div>
                        </div> 

                    </div>
                    </div>
                   

                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-header"><strong>My Expenses</strong></div>
                            <div className="card-body card-block">
                            <div class="animated fadeIn">
                <div class="row">

                    <div class="col-md-12">
                       
                            <div class="card-body">
                                <table id="bootstrap-data-table-export" class="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Expense Name</th>
                                            <th>Expense Description</th>
                                            <th>Expense Period</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Amount</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {this.state.items.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.expenseName}</td>
                                            <td>{item.expenseDescription}</td>
                                            <td>{item.expensePeriod}</td>
                                            <td>{item.expenseDateFrom}</td>
                                            <td>{item.expenseDateTo}</td>
                                            <td>{item.expenseAmount}</td>
                                            <td>

                                            <button 
                                              className="btn ibtn-nfo mr-1"
                                              disabled={this.state.editDisabled}
                                              onClick={this.onEdit.bind(
                                                this,
                                                item.id
                                              )}
                                              >
                                                Edit
                                              </button>

                                            <button 
                                              className="btn btn-danger"
                                              disabled={this.state.editDisabled}
                                              onClick={this.onDelete.bind(
                                                this,
                                                item.id
                                              )}
                                              >
                                                Delete
                                              </button>
                                            </td>
                                        </tr>
                                      ))}
                                        
                                        
                                  
                                    </tbody>
                                </table>
                            </div>
                      
                    </div>


                </div>
            </div>  
                          </div>
                          </div>
                          
                   </div>
  </div>
    );
  }
}

export default ExpenseDaily;