function prompts() {
    var firstName = "",
        lastName = "",
        age = "";
    for ( ; firstName == ""; ) {
        firstName = prompt("Please enter your first name.");
    }
    for ( ; lastName == ""; ) {
        lastName = prompt("Please enter your last name.");
    }
    for ( ; age == ""; ) {
        age = prompt("Please enter your age.");
    }
    alert("My name is " + firstName + " " + lastName + " and I am " + age + ".");
}