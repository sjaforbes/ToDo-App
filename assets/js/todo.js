$("ul").on("click","li", function(){
    $(this).toggleClass("completed")
})


,$("ul").on("click", ".delete", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    })
    event.stopPropagation()
})

$("#newtdoinput").on("keypress", function(key){
    if (key.which === 13 ) { 
        var newtodo = $(this).val() 
        $(this).val("") 
        $("ul").append("<li> <span class=\"delete\"> <i class=\"fas fa-trash-alt\"> </span>" + newtodo +  "</li>")

    }
})


$("#toggleform").on("click", function(){ 
    $("#newtdoinput").fadeToggle(100);
});