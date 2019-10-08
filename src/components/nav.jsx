import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Navbar extends Component{

    render(){
        return(
            <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">

            <div className="navbar-header">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="./">Budget</a>
                <a className="navbar-brand hidden" href="./">B</a>
            </div>

            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active">
                       <a href="/"> <i className="menu-icon fa fa-dashboard"></i>Dashboard </a>
                    </li>
                   
                    <h3 className="menu-title">Navigation</h3>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th"></i>Income</a>
                        <ul className="sub-menu children dropdown-menu">
                           
                            <li><i className="menu-icon fa fa-th"></i><Link to={'/income_daily'}>Daily</Link></li>
                            <li><i className="menu-icon fa fa-th"></i><Link to={'/income_weekly'}>Weekly</Link></li>
                            <li><i className="menu-icon fa fa-th"></i><Link to={'/income_monthly'}>Monthy</Link></li>
                            <li><i className="menu-icon fa fa-th"></i><Link to={'/income_yearly'}>Yearly</Link></li>
                            <li><i className="menu-icon fa fa-th"></i><Link to={'/income_once_off'}>Once Off</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-laptop"></i>Expenses</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="fa fa-puzzle-piece"></i><Link to={'/expense_daily'}>Daily Expenses</Link></li>
                            <li><i className="fa fa-puzzle-piece"></i><Link to={'/expense_weekly'}>Weeky Expenses</Link></li>
                            <li><i className="fa fa-puzzle-piece"></i><Link to={'/expense_monthly'}>Monthy Expenses</Link></li>
                            <li><i className="fa fa-puzzle-piece"></i><Link to={'/expense_yearly'}>Yearly Expenses</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Todo</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="fa fa-table"></i><Link to={'/todo_previous'}>Previous</Link></li>
                            <li><i className="fa fa-table"></i><Link to={'/todo_today'}>Today</Link></li>
                            <li><i className="fa fa-table"></i><Link to={'/todo_comming'}>Comming</Link></li>
                        </ul>
                    </li>
                   

                    <h3 className="menu-title">Reports</h3>

                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-tasks"></i>Reports</a>
                        <ul className="sub-menu children dropdown-menu">
                            
                            <li><i className="menu-icon ti-themify-logo"></i><Link to={'/report_daily'}>Daily</Link></li>
                            <li><i className="menu-icon ti-themify-logo"></i><Link to={'/report_weekly'}>Weekly</Link></li>
                            <li><i className="menu-icon fa fa-fort-awesome"></i><Link to={'/report_monthly'}>Monthy</Link></li>
                            <li><i className="menu-icon fa fa-fort-awesome"></i><Link to={'/report_yearly'}>Yearly</Link></li>
                            
                        </ul>
                    </li>
                    {/* <li>
                        <a href="widgets.html"> <i className="menu-icon ti-email"></i>Widgets </a>
                    </li> */}
                    


                    
                </ul>
            </div>
        </nav>
    </aside>

        );
    }
}

export default Navbar;