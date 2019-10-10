<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    public function index(){
         return Task::all(); 
    }

    public function show($id){
        return Task::find($id);
    }

    public function store(Request $request){

        $task = new Task;

        $task->expenseName = $request->expenseName;
        $task->expenseDescription = $request->expenseDescription;
        $task->expenseType = $request->expenseType;
        $task->expensePeriod = $request->expensePeriod;
        $task->expenseDateFrom = $request->expenseDateFrom;
        $task->expenseDateTo = $request->expenseDateTo;
        $task->expenseAmount = $request->expenseAmount;

        $task->save();

        return $task;
    }

    public function update($id, Request $request){

        $task = Task::findOrfail($id);
        $task->expenseName = $request->expenseName;
        $task->expenseDescription = $request->expenseDescription;
        $task->expenseType = $request->expenseType;
        $task->expensePeriod = $request->expensePeriod;
        $task->expenseDateFrom = $request->expenseDateFrom;
        $task->expenseDateTo = $request->expenseDateTo;
        $task->expenseAmount = $request->expenseAmount;
        $task->save();


        return $task;

    }


    public function delete(Request $request, $id){
        $task = Task::findOrfail($id);
        $task->delete();

        return 204;


        
    }   

}
