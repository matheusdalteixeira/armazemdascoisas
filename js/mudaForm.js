$(document).on('ready', function() {

	var tela		= $(window);
	var main 		= $('main>.container-fluid>img');
	var form 		= $('form');
    var caixaForm	= $('main>.container-fluid>.row>div');
    var larguraTela	= tela.width();
    var alturaMain	= main.height();
    var alturaForm	= form.height();

	if(larguraTela < 768){
		caixaForm.removeClass('formDesk').addClass('formMob');
	}
	else{
		caixaForm.removeClass('formMob').addClass('formDesk').css('top', (alturaMain-alturaForm)/2);
	}
    $(window).on('resize', function() {
		var nLarguraTela 	= tela.width();
		var nAlturaMain	 	= main.height();
		var nAlturaForm		= form.height();
		
		if(larguraTela < 768){
			caixaForm.removeClass('formDesk').addClass('formMob');
		}
		else{
			caixaForm.removeClass('formMob').addClass('formDesk').css('top',(alturaMain-alturaForm)/2);
		}
		larguraTela = nLarguraTela;
		alturaMain	= nAlturaMain;
		alturaForm	= nAlturaForm;
    });
});
