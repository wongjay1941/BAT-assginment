let loginForm = document.getElementById("loginForm");
let signUpForm = document.getElementById("signUpForm");

//-----------------------------------------------------------------------------------------------  Login
if(loginForm != null){
    loginForm.addEventListener("submit", (e) =>{
        e.preventDefault();

        let username = document.getElementById("loginUsername").value;
        let password = document.getElementById("loginPassword").value;

        if(username != localStorage.getItem("username")){
            alert("No such user found!");
            return;
        }
        
        if(password != localStorage.getItem("password")){
            alert("Wrong password, please check again!")
            return;
        }

        alert("Welcome back!, " + localStorage.getItem("username"));
        window.location.href = "/connections.html";
    });
}

//----------------------------------------------------------------------------------------------- Sign up
// Get selected interest
//var selected_interest = [];
var selected_interest = [];

$('.circle').on('click', function(e){
    console.log(selected_interest.length);
    let index = selected_interest.indexOf($(this).attr("id"));
    if(index <= -1){
        selected_interest.push($(this).attr("id"));
        $(this).css('border-color', '#ffcc00');
        $(this).css('transform', 'scale(1.1)');

        console.log(selected_interest);
    }
    else{
        selected_interest.splice(index, 1); // 2nd parameter means remove one item only
          
        $(this).css('border', "2px solid #333");
        console.log(selected_interest);
    }

    var interest_list = document.getElementById("interest_list");

    if(typeof(interest_list) != 'undefined' && interest_list != null){
        document.getElementById("interest_list").innerHTML = selected_interest;
    }
});

if(signUpForm != null){
    signUpForm.addEventListener("submit", (e) =>{
        e.preventDefault();

        let username = document.getElementById("signUpUsername").value;
        let email = document.getElementById("signUpEmail").value;
        let password = document.getElementById("signUpPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let profession = document.getElementById("signUpProfession").value;
        let description = document.getElementById("signUpDescription").value;
        let tAndC = document.getElementById("tAndCCheckBox");

        if(username && email && password && confirmPassword && tAndC.checked && profession && description && selected_interest){
            //Check email format
            if(email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                if(password == confirmPassword){
                    alert("Register Succesfully! Please login to your account.");

                    localStorage.username = username;
                    localStorage.email = email;
                    localStorage.password = password;
                    localStorage.profession = profession;
                    localStorage.description = description;
                    localStorage.selected_interest = selected_interest;

                    // Redirect to login page
                    window.location.href = "/index.html";

                }
                else{
                    alert("Entered passwords are not the same!");
                }
                
            }
            else{
                alert("Please check you email format!");
            }
        }
        else{
            alert("Please complete all fields!");
        }
        
    })
}

function interest_modal(){
    var modal = document.getElementById("interest-modal");
    modal.style.display = "block";
    var btn = document.getElementById("interestBtn");
    var closebtn = document.getElementById("closeBtn");

    btn.onclick = function() {
        modal.style.display = "block";
    }
    closebtn.onclick = function(){
        modal.style.display = "none";
    }
    window.onclick = function(event) {
    if (event.target == modal) 
        {
            modal.style.display = "none";
        }
    }
}

function save_changes(){
    let username = document.getElementById("username_input").value;
    let email = document.getElementById("email_input").value;
    let profession = document.getElementById("profession_input").value;
    let description = document.getElementById("description_input").value;

    localStorage.username = username;
    localStorage.email = email;
    localStorage.profession = profession;
    localStorage.description = description;
    localStorage.selected_interest = selected_interest;

    document.getElementById("interest_list").innerHTML = localStorage.selected_interest;

    $("#username_input").prop('disabled', true);
    $("#description_input").prop('disabled', true);
    $("#email_input").prop('disabled', true);
    $("#profession_input").prop('disabled', true);

    $("#interestBtn").css("display", "none");
    $("#saveBtn").css("display", "none");
}