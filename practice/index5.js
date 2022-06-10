$('document').ready(function(){
    // append() prepend()
    $('button').on('click', function(){
        var city = $(this).prev().val() //input
        var html = '<div class="item">' + '<div class="remove">X</div>'
        $('#places-container').append(html)
    })
})