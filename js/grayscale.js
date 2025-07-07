/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        // console.log($($anchor.attr('href')).offset());
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});


// --- Gallery Modal Functionality ---
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("gallery-modal");
    const modalImg = document.getElementById("gallery-modal-img");
    const captionText = document.getElementById("gallery-caption");
    const closeBtn = document.querySelector(".gallery-close");

    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.textContent = this.getAttribute("data-caption") || this.alt || "";
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
        modalImg.src = "";
        captionText.textContent = "";
    };

    // Close modal on click outside image
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
            modalImg.src = "";
            captionText.textContent = "";
        }
    };

    // Close modal on ESC key
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
            modalImg.src = "";
            captionText.textContent = "";
        }
    });
});