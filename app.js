$("#fade-out-button").click(function(){
    $("#fade-out-p").fadeOut()
})

$("#fade-in-button").click(function(){
    $("#fade-out-p").fadeIn()
})

$("#add-class-button").click(function(){
    $("#fade-out-p").toggleClass("flower")
})

$("#append-button").click(function(){
    $("#append-p").append("<p> Hello guys, Jquery is faster and easier! </p>")
})

$("#change-color-button").click(function(){
    $("#change-color-p").css("color","red")
})

// $("#slide-up-button").click(function(){
//     $("#slide-p").slideUp(3000,function(){
//         $("#slide-p").text("Helloo!")
//     })
// })

$("#slide-down-button").click(function(){
    $("#slide-p").slideDown(3000,function(){
        $("#slide-p").text("Byee!")
    });
    
})



$("#hide").click(function(){
    $("#footer-heading").hide()
})

$("#show").click(function(){
    $("#footer-heading").show()
})

$("#footer-input").keyup(function(e){
    $("#footer-heading").html(e.target.value)
})
