import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './home';

import IncomeOnceOff from './income/onceoff';
import IncomeDaily from './income/daily';
import IncomeWeekly from './income/weekly';
import IncomeMonthly from './income/monthly';
import IncomeYearly from './income/yearly';

import ExpenseDaily from './expenses/daily';
import ExpenseWeekly from './expenses/weekly';
import ExpenseMonthly from './expenses/monthly';
import ExpenseYearly from './expenses/yearly';

import ReportDaily from './report/daily';
import ReportWeekly from './report/weekly';
import ReportMonthly from './report/weekly';
import ReportYearly from './report/monthly';

import TodoPrevious from './todo/previous';
import TodoToday from './todo/today';
import TodoComming from './todo/comming';





class MyRoutes extends Component{
  render(){
    return (
        <Router>
           
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
           
          </Router>
      );
  }
}

export default MyRoutes;
