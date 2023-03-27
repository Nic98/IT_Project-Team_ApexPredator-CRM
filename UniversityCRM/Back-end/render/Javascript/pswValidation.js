function check(input) {
    var psw1 = document.getElementById('psw1').value;
    var psw2 = document.getElementById('psw2').value;
    if (psw1 != psw2) {
        input.setCustomValidity('Two Passwords Must be Matching.');
    } else {
        input.setCustomValidity('');
    }
}