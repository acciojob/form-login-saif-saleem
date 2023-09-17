function getFormvalue() {
    // Get all form elements on the page
    let forms = document.getElementsByTagName("form");

    // Initialize an empty string to store the form values
    let formValues = "";

    // Loop through each form element
    for (let form of forms) {
        // Get all the input elements within the current form
        let inputs = form.getElementsByTagName("input");

        // Loop through each input element within the form
        for (let input of inputs) {
            // Check if the input element has a value and is not a button or submit
            if (input.type !== "button" && input.type !== "submit") {
                formValues += input.value + " ";
            }
        }
    }

    // Display the concatenated form values in an alert
    alert(formValues);
}
