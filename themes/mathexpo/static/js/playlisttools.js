
function createVidToggle() {
$('.vid_toggle').click(function(){
    $('.video-container').fadeToggle(250);
    $(this).val( $(this).val() == 'Hide video' ? 'Show video' : 'Hide video' );
});
}

function createPDFToggle() {
$('.pdf_toggle').click(function(){
    $('.pdf-ex-container').fadeToggle(250);
    $(this).val( $(this).val() == 'Hide PDF' ? 'Show PDF' : 'Hide PDF' );
});
}

function hidePDFContainer() {
$('.pdf-ex-container').hide();
}