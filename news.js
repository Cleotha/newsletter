function error() {
    if (document.getElementById("mail").value == "") {
        document.getElementById("error").innerHTML = "email is required";
        return false;
    } else {
        document.getElementById("error").innerHTML = " "
            location.href = "https://succeess.netlify.app/";
            return false;
        }
    };

