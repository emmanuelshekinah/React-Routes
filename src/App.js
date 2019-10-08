import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MyRoutes from './components/routes';
import Header from './components/header';
import Navbar from  './components/nav';

import Home from './components/home';

import IncomeOnceOff from './components/income/onceoff';
import IncomeDaily from './components/income/daily';
import IncomeWeekly from './components/income/weekly';
import IncomeMonthly from './components/income/monthly';
import IncomeYearly from './components/income/yearly';

import ExpenseDaily from './components/expenses/daily';
import ExpenseWeekly from './components/expenses/weekly';
import ExpenseMonthly from './components/expenses/monthly';
import ExpenseYearly from './components/expenses/yearly';

import ReportDaily from './components/report/daily';
import ReportWeekly from './components/report/weekly';
import ReportMonthly from './components/report/monthly';
import ReportYearly from './components/report/yearly';

import TodoPrevious from './components/todo/previous';
import TodoToday from './components/todo/today';
import TodoComming from './components/todo/comming';

import './App.css';

function App() {
  return (
    <Router>
        <div>
          <Navbar />
          <div id="right-panel" className="right-panel">
          <Header />        
          
           
           <Switch>
               <Route exact path='/' component={Home} />

               <Route exact path='/income_once_off' component={IncomeOnceOff} />
               <Route exact path='/income_daily' component={IncomeDaily} />
               <Route exact path='/income_weekly' component={IncomeWeekly} />
               <Route exact path='/income_monthly' component={IncomeMonthly} />
               <Route exact path='/income_yearly' component={IncomeYearly} />

               <Route exact path='/expense_daily' component={ExpenseDaily} />
               <Route exact path='/expense_weekly' component={ExpenseWeekly} />
               <Route exact path='/expense_monthly' component={ExpenseMonthly} />
               <Route exact path='/expense_yearly' component={ExpenseYearly} />
              
               <Route exact path='/report_daily' component={ReportDaily} />
               <Route exact path='/report_weekly' component={ReportWeekly} />
               <Route exact path='/report_monthly' component={ReportMonthly} />
               <Route exact path='/report_yearly' component={ReportYearly} />
              
               <Route exact path='todo_previous' component={TodoPrevious} />
               <Route exact path='todo_today' component={TodoToday} />
               <Route exact path='todo_comming' component={TodoComming} />
              
              
           </Switch>
        
       
        </div>
       </div>
       
      </Router>
  );
}

export default App;
