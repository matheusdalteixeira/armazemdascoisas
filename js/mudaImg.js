$(document).ready(function() {

	var tela		= $(window);
	var larguraTela	= tela.width();
	var imagem		= $('main>.container-fluid>img');
	var relativeRow	= $('.relative>.container-fluid>.row');
	var form 		= $('form');
	var estilo 		= $('.estilo');

	if(larguraTela < 768){
		imagem.attr('src', 'imagens/fundo.JPG').load(function(){
			relativeRow.css('top', '0').addClass('backForm');
			form.addClass('formMob').addClass('position').addClass('backFormTrans').css('top', (imagem.height()-form.height())/2);
			//estilo.addClass('width100');
		});
	}
	else{
		imagem.attr('src', 'imagens/fundo1.jpg').load(function(){
			relativeRow.css('top', (imagem.height()-form.height())/2);
			form.addClass('formDesk');
			//estilo.addClass('width50');
		});
	}

    $(window).resize(function(){

		var nLarguraTela	= tela.width();

		if(larguraTela < 768){
			imagem.attr('src', 'imagens/fundo.JPG').load(function(){
				relativeRow.css('top', '0').addClass('backForm');
				form.removeClass('formDesk').addClass('formMob').addClass('position').addClass('backFormTrans').css('top', (imagem.height()-form.height())/2);
				//estilo.removeClass('width50').addClass('width100');
			});
		}
		else{
			imagem.attr('src', 'imagens/fundo1.jpg').load(function(){
				relativeRow.removeClass('backForm').css('top', (imagem.height()-form.height())/2);
				form.removeClass('formMob').removeClass('backFormTrans').addClass('formDesk').css('top', '0');
				//estilo.removeClass('width100').addClass('width50');
			});	
		}
		
		larguraTela = nLarguraTela;
    });
});
