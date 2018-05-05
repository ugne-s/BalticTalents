function prompts() {
    var firstName = "",
        lastName = "",
        age = "";
    for ( ; firstName == ""; ) {
        var firstName = prompt("Please enter your first name.");
    }
    for ( ; lastName == ""; ) {
        var lastName = prompt("Please enter your last name.");
    }
    for ( ; age == ""; ) {
        var age = prompt("Please enter your age.");
    }
    alert("My name is " + firstName + " " + lastName + " and I am " + age + ".");
}