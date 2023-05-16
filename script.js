function calculate() {
    loanterm();
    document.getElementById('table-div').style.display = 'block';
    var amount = document.getElementById('principal-amount').value;
    var interest_rate = document.getElementById('interest-rate').value;
    var total = (interest_rate / 12) / 100;
    var loan_term = document.getElementById('loan-term').value;
    var emi = (amount * total * Math.pow(1 + total, loan_term)) / (Math.pow(1 + total, loan_term) - 1);
    document.getElementById('answer').value = Math.round(emi);
    var total_interest = (emi * loan_term) - amount;
    document.getElementById('interest').value = Math.round(total_interest);
    var payable_value = amount;
    var table = document.getElementById('emi-table');
    var table_body = table.getElementsByTagName('tbody')[0];
    table_body.innerHTML = "";
    if(amount == ''){
        alert('please enter amount');
    }
    if(interest_rate == ''){
        alert('please enter interest rate');
    }
    if(loan_term == ''){
        alert('please enter loan term');
    }
    for (var i = 1; i <= loan_term; i++) {
        var interest = payable_value * (total);
        var principal = emi - interest;
        payable_value -= principal;
        var row = table_body.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = i;
        cell2.innerHTML = Math.round(principal);
        cell3.innerHTML = Math.round(interest);
        cell4.innerHTML = Math.round(emi);
        cell5.innerHTML = Math.round(payable_value);
    }
}

function loanterm() {
    var year = document.getElementById('year');
    var month = document.getElementById('month');
    var loan_term = document.getElementById('loan-term');
    loan_term.disabled = true;
    if (year.checked == true) {
        loan_term.disabled = false;
        var x = (loan_term.value) * 12;
        loan_term.value = x;
        loan_term.placeholder = 'Enter loan term in years';
    } else if (month.checked == true) {
        loan_term.disabled = false;
        loan_term.placeholder = 'Enter loan term in months';
    }
}

