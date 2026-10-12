document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully.");
});
$(document).ready(function () {
    $("main").hide().fadeIn(700);
    $(".btn").hover(
        function () {
            $(this).css("opacity", "0.85");
        },
        function () {
            $(this).css("opacity", "1");
        }
    );
    $("#contactForm").submit(function (event) {
        event.preventDefault();
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let message = $("#message").val().trim();
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all the fields.");
            return;
        }
        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        alert(
            "Thank you, " +
            name +
            "! Your message has been submitted."
        );
        $("#contactForm")[0].reset();
    });
});