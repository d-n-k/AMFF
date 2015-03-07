
(function($) {
	'use strict';
    var $rightBox = $('.jsDef'),
        $form = $('#form'),
        $response = $('.jsRes'),
        $notification = $('.jsReq');

    $form.parsley();

	var request = function () {
        $.ajax({

            url: 'data/config.json',
            dataType: 'json'

        })
        .done(function (response) {
            console.log(response);
            if (response && response !== '') {
            	$rightBox.hide();
                $response.text(response.notification);
                $notification.show().fadeIn(1000);

            }
        })
        .fail(function(error){
            console.log('Fail to send data');

        });
        var postvars = $(this).serializeArray();
        $.post('http://wwww.amff.com', postvars ,function(data){
            $form.submit();
        });
    };

	$form.submit(function( event ) {
        event.preventDefault();
  		request();
	});



})(jQuery);
