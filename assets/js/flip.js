$(function(){
    $("#card").flip({
    axis: 'y',
    trigger: 'manual'
    });
});

$('#btnConfig').click(function(){
    $("#card").flip(true);
});

$('#btnGuardar').click(function(){
    $("#card").flip(false);
});