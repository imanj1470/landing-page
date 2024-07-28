
// smooth scroll
$(document).ready(function(){
    $(this).scrollTop(0);
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
    
});
function copy_email_to_clipboard(){
    navigator.clipboard.writeText("imanj1470@gmail.com");
    /* alert("Email copied to clipboard: imanj1470@gmail.com"); */
    showAlertBox("imanj1470@gmail.com");

}
function openresume(){
    window.open('assets/files/CV.pdf', '_blank')
}
// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


/* function showAlertBox(message) {
    const alertBox = document.getElementById('alert-box');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.textContent = message;
    alertBox.classList.add('show');
    setTimeout(() => {
      alertBox.classList.remove('show');
    }, 3000);
  }
  
  function closeAlertBox() {
    const alertBox = document.getElementById('alert-box');
    alertBox.classList.remove('show');
  } */


/*     function showAlertBox(message) {
        const alertBox = document.getElementById('alert-box');
        const alertMessage = document.getElementById('alert-message');
        alertMessage.textContent = message;
        alertBox.style.display = 'block';  
        alertBox.classList.add('show');
        setTimeout(() => {
            alertBox.classList.remove('show');
            alertBox.style.display = 'none';  
        }, 3000);
    }
    
    function closeAlertBox() {
        const alertBox = document.getElementById('alert-box');
        alertBox.classList.remove('show');
        alertBox.style.display = 'none';  
    }
    
    // Example usage
    function copy_email_to_clipboard() {
        navigator.clipboard.writeText('imanj1470@gmail.com').then(function() {
            showAlertBox('Email copied to clipboard!');
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    } 
 */




    function showAlertBox(message) {
        const alertBox = document.getElementById('alert-box');
        const alertMessage = document.getElementById('alert-message');
    
        alertMessage.textContent = message;
    
        // Reset visibility and opacity to ensure smooth re-trigger
        alertBox.style.display = 'block'; // Ensure it's visible for transition
        alertBox.classList.remove('hide'); // Remove hide class if present
    
        // Force reflow to restart the animation
        void alertBox.offsetWidth;
    
        alertBox.classList.add('show');
    
        // Hide the alert box after the animation ends
        setTimeout(() => {
            alertBox.classList.remove('show');
            alertBox.classList.add('hide');
            // Add a slight delay before setting display to none to match the CSS transition
            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 500); // Match this timeout with the CSS transition duration
        }, 3000); // Duration to show the alert
    }
    
    function closeAlertBox() {
        const alertBox = document.getElementById('alert-box');


        alertBox.classList.remove('show');
        alertBox.classList.add('hide');
        // Add a slight delay before setting display to none
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 500); // Match this timeout with the CSS transition duration 


    }
    

    function copy_email_to_clipboard() {
       
       

        navigator.clipboard.writeText('imanj1470@gmail.com').then(function() {
            showAlertBox('Email copied to clipboard!');
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
        
    }
    