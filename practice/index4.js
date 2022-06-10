$('document').ready(function(){
    $('select').on('change', function(){
        //console.log($(this))
        console.log($(this).val())
        console.log($(this).find(':selected').data('price'))

        $('#result').text($(this).val() + '' + $(this).find(':selected').data('price'))
    })
});