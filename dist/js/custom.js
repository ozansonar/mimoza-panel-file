/* ------------------------------------------------------------------------------
 *
 *  # Media gallery
 *
 *  Demo JS code for gallery page kit
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var CustomJs = function() {


    //
    // Setup module components
    //

    // Lightbox
    var _componentLightbox = function() {
        $(document).on('click', '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox({
                alwaysShowClose: true
            });
        });
    };

    // Custom
    var _componentCustom = function() {
        $('.sayi_nokta_field').on('input', function (event) {
            this.value = this.value.replace(/[^0-9.]/g, '');
        });
        $('.numeric_field').on('input', function (event) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
        $('.text').on('input', function (event) {
            this.value = this.value.replace(/[^a-zA-ZşŞüÜıİğĞçÇöÖ ]/g, '');
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentLightbox();
            _componentCustom();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    CustomJs.init();
});


function goBack() {
    window.history.back();
}


function AlertMessage(type, title, message = array(), btn_text = "OK", yonlendir =0, url, time = false) {
    /*var tit;
    $.each(title, function( key, value ) {
        tit = value;
    });
    */
    var msg;
    msg = "<ul>";
    $.each(message, function (key, value) {
        msg += "<li>" + value + "</li>";
    });
    msg += "</ul>";
    if (btn_text == "") {
        btn_text = "TAMAM";
    }
    Swal.fire({
        icon: type,
        title: title,
        html: msg,
        timer: time,
        confirmButtonText: btn_text,
    }).then((result) => {
        if (yonlendir == 1) {
            if (result.value) {
                setTimeout(
                    function () {
                        window.location = url;
                    }, 500);
            } else {
                setTimeout(
                    function () {
                        window.location = url;
                    }, 500);
            }
        }

    })
}


function generate_random_key(length = 15) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function toast_message(color = "bg-info",title,text,position = "topRight",subtitle = null,autohide = true,delay = 5000){
    $(document).Toasts('create', {
        class: color,
        title: title,
        subtitle: subtitle,
        autohide: autohide,
        position: position,
        body: text,
        delay: delay,
    })
}

function copyToClipboard(text) {

    var textArea = document.createElement( "textarea" );
    textArea.value = text;
    document.body.appendChild( textArea );
    textArea.select();

    try {
        var successful = document.execCommand( 'copy' );
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy',err);
    }
    document.body.removeChild( textArea );
}

function checkPass(field, rules, i, options){
    var passVal = field.val();
    var html = "";
    if (passVal.length < 8) {
        html += "* Şifreniz en az 8 karakter içermelidir.<br/>";
    }
    if (passVal.length > 32) {
        html += "* Şifreniz en fazla 32 karakter içermelidir.<br/>";
    }
    if (passVal.search(/[a-z]/) < 0) {
        html += "* Şifreniz en az 1 küçük harf içermelidir.<br/>";
    }

    if (passVal.search(/[A-Z]/) < 0) {
        html += "* Şifreniz en az 1 büyük harf içermelidir.<br/>";
    }

    if (passVal.search(/[0-9]/) < 0) {
        html += "* Şifreniz en az 1 rakam içermelidir.<br/>";
    }
    if(html != "") {
        return html;
    }
}



