(() => {

// Contact Form Submission

jQuery('form.contact-form').on('submit', function( e ){
    e.preventDefault();
    var $form = jQuery(this);
    jQuery($form).find('span.contact-form-respond').remove();

    //checking on empty values
    jQuery($form).find('[aria-required="true"], [required]').each(function(index) {
        var $thisRequired = jQuery(this);
        if (!$thisRequired.val().length) {
            $thisRequired
                .addClass('invalid')
                .on('focus', function(){
                    $thisRequired
                        .removeClass('invalid');
                });
        }
    });
    //if one of form fields is empty - exit
    if ($form.find('[aria-required="true"], [required]').hasClass('invalid')) {
        return;
    }

    //sending form data to PHP server if fields are not empty
    var request = $form.serialize();
    var ajax = jQuery.post( "php/contact-form.php", request )
    .done(function( data ) {
        // jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="contact-form-respond highlight">'+data+'</span>');
        data = JSON.parse(data);
        if (data['status']) {
        Swal.fire(
            'Thank You!',
            'Your information was saved successfully. We\'ll be in touch.',
            'success'
          );
          //cleaning form
          var $formErrors = $form.find('.form-errors');
          if ( !$formErrors.length ) {
              $form[0].reset();
          }
        } else {
            Swal.fire(
                'Sorry, something went wrong',
                data['error'] ? data['error'] : 'We couldn\'t save your details. Please try again or contact us directly through: info@allstatesheatingandcooling.com',
                'error'
              );
        }
    })
    .fail(function( data ) {
        jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="contact-form-respond highlight">Mail cannot be sent. You need PHP server to send mail.</span>');
        Swal.fire(
            'Sorry, something went wrong',
            'We couldn\'t save your details. Please try again or contact us directly through: info@allstatesheatingandcooling.com',
            'error'
          );
    })
});


}) ();