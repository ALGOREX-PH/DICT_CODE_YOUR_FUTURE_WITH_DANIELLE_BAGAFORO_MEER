// -*- coding: utf-8 -*-
/*
Created on Tue Mar 21 10:55:51 2023

@author: danielle meer
*/
const readline = require('./readline-stdin');

// Constant values
const LOWER_INCOME_MAX = 24164;
const UPPER_INCOME_MIN = 144984;

// Variables
var total_bill = 0;
var food_percentage = 0;
var water_percentage = 0;
var electricity_percentage = 0;
var transportation_percentage = 0;
var savings = 0;
var income_class = "";


//Inputs
var income = parseFloat(readline.question(""));
var food = parseFloat(readline.question(""));
var water = parseFloat(readline.question(""));
var electricity = parseFloat(readline.question(""));
var transportation = parseFloat(readline.question(""));

// Compute the total bill
total_bill = food + water + electricity + transportation;
// Determine the percentages of each category
food_percentage = (food / total_bill) * 100;
water_percentage = (water / total_bill) * 100;
electricity_percentage = (electricity / total_bill) * 100;
transportation_percentage = (transportation / total_bill) * 100;

// Determine the difference of income and total bill
savings = income - total_bill;

// If income is lower than x
if (income <= LOWER_INCOME_MAX) { income_class = "Lower income class"; }
// If income is greater than x (lower) but less than y (upper)
else if (income > LOWER_INCOME_MAX && income < UPPER_INCOME_MIN) {income_class = "Middle income class"; }
else { income_class = "Upper income class"; }

// Print the summary. Make sure to convert the float into strings and format the percentages to 2 decimal places.
food_percentage.toPrecision(2);
console.log("SUMMARY");
console.log("Income: " + income + " - " + income_class);
console.log("Food: " + food + " PHP (" + food_percentage.toFixed(2); + "%)");
console.log("Water: " + water + " PHP (" + water_percentage.toFixed(2) + "%)");
console.log("Electricity: " + electricity + " PHP (" + electricity_percentage.toFixed(2) + "%)");
console.log("Transportation: " + transportation + " PHP (" + transportation_percentage.toFixed(2) + "%)");
console.log("Total bill: " + total_bill + " PHP");
if (savings >= 0) { console.log("You are in budget and you saved " + savings + " PHP."); }
// Make sure to make it a positive by multiplying to -1
else { console.log("You are in short of budget. You need " + (savings * -1) + " PHP."); }