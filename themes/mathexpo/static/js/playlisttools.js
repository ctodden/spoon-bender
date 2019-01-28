
function createVidToggle() {
$('.vid_toggle').click(function(){
    $(this).next().fadeToggle(250);
    $(this).val( $(this).val() == 'Hide video' ? 'Show video' : 'Hide video' );
});
}

function createPDFToggle() {
$('.pdf_toggle').click(function(){
    $(this).next().fadeToggle(250);
    $(this).val( $(this).val() == 'Hide PDF' ? 'Show PDF' : 'Hide PDF' );
});
}

function hidePDFContainer() {
$('.pdf-ex-container').hide();
}

function addMenuIDs() {
$('.menu-category').attr('id','foo');
}