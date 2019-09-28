
$(document).ready(function(){
    console.log("READY")
    $('.btn').on("click", function(){
        console.log($(this).attr("id"))
    })

    $('#addBurger').on('click', function(){
        console.log("adding burger...")
        $.post('/burger/add/'+$('#burgerName').val(), function(res){
console.log(res)
        })
        $('#burgerName').val('')
    })
})