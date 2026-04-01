function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let msg = document.getElementById("formMsg");

    if (name === "" || email === "" || message === "") {
        msg.innerText = "Please fill all fields!";
        msg.style.color = "red";
    } else {
        msg.innerText = "Message sent successfully!";
        msg.style.color = "green";


        document.getElementById("contactForm").reset();
    }
});