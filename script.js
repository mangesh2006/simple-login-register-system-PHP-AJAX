function signup() {
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const repass = document.getElementById("repeat").value;

    if (name === '' || username === '' || email === '' || pass === '' || repass === '') {
        alert("Please Fill All Fields");
    } else {
        if (pass != repass) {
            alert("Passwords do not match");
        } else {
            var formdata = {
                "name": name,
                "username": username,
                "email": email,
                "pass": pass,
                "repass": repass
            }

            var jsondata = JSON.stringify(formdata);

            fetch("php/signup.php", {
                method: "POST",
                body: jsondata,
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.signup == 'success') {
                        alert("Your Account Created Successfully!");
                        document.getElementById("name").value = '';
                        document.getElementById("username").value = '';
                        document.getElementById("email").value = '';
                        document.getElementById("password").value = '';
                        document.getElementById("repeat").value = '';
                    } else {
                        alert("Your Account Not Created Successfully!");
                        document.getElementById("name").value = '';
                        document.getElementById("username").value = '';
                        document.getElementById("email").value = '';
                        document.getElementById("password").value = '';
                        document.getElementById("repeat").value = '';
                    }
                })
                .catch(() => {
                    alert("Can't Create Account");
                })
        }
    }
}

function login() {
    const user = document.getElementById("login_user").value;
    const pass = document.getElementById("login_pass").value;

    if (user === '' || pass === '') {
        alert("Please Fill All Fields");
    } else {

        var formdata = {
            "user": user,
            "pass": pass
        }

        var jsondata = JSON.stringify(formdata);

        fetch("php/login.php", {
            method: "POST",
            body: jsondata,
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.login == 'success') {
                    alert("Login Successfull!");
                    window.location.href = "php/welcome.php";
                } else {
                    alert("Invalid Username or Password");
                }
            })
            .catch(() => {
                alert("Can't Login");
            })
    }
}
