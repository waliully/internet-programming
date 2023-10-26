function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var success = document.getElementById("success");

    error.textContent = "";
    success.style.display = "none";

    if (name.trim() === "") {
        error.textContent = "Name can't be empty";
        return;
    }

    if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters long";
        return;
    }

    // Display success message
    success.textContent = "Success! Form submitted.";
    success.style.display = "block";
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var passwordToggle = document.querySelector(".password-toggle");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        passwordToggle.textContent = "👁️";
    }
}

var userForm = document.getElementById("userForm");
userForm.addEventListener("submit", validateForm);
