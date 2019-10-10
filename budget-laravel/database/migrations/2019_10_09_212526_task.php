<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Task extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('expenseName')->default('');
            $table->string('expenseDescription')->default('');
            $table->string('expenseType')->default('');
            $table->string('expensePeriod')->default('');
            $table->string('expenseDateFrom')->default('');
            $table->string('expenseDateTo')->default('');
            $table->string('expenseAmount')->default('');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
