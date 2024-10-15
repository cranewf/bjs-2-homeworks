"use strict"

function solveEquation(a, b, c) {
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		return [];
	}

	if (discriminant === 0) {
		let root = -b / (2 * a);
		return [root];
	}

	if (discriminant > 0) {
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [root1, root2];
	}

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	percent = parseFloat(percent);
	contribution = parseFloat(contribution);
	amount = parseFloat(amount);
	countMonths = parseFloat(countMonths);

	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}

	let rateConversion = (percent / 100) / 12;

	let loanBody = amount - contribution;

	let monthlyPayment = loanBody * (rateConversion + (rateConversion / (((1 + rateConversion) ** countMonths) - 1)));

	let totalAmount = rateConversion * countMonths + contribution;

	return Number(totalAmount.toFixed(2));

}