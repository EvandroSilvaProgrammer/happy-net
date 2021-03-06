mobile = "244938165179";
openInNewWindow = "true";
title_form = "Saber se existe cobertura de sinal na minha zona | LP origin";

input = "true";
inputs = [{
        id: 'username',
        label: 'Nome',
        required: 'required',
        type: 'text',
    }, {
        id: 'phone',
        label: 'Telefone',
        required: 'required',
        type: 'text',
    }, {
        id: 'county',
        label: 'Município',
        required: 'required',
        type: 'text',
    }, {
        id: 'neighborhood',
        label: 'Bairro',
        required: 'required',
        type: 'text',
    },
    {
        id: 'email',
        label: 'E-mail',
        required: 'no-required',
        type: 'email',
    }
];

textarea = "true";
textareas = [{
        id: 'message',
        label: 'Descrição do endereço',
        required: 'required',
    },

];

$("#submit").click(function() {
    submit();
});

function isEmail(email) {
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(email);
}

function cleanInputs() {
    $(".contact-form").find("input").each(function() {
        $(this).val("");
    });
    $(".contact-form").find("textarea").each(function() {
        $(this).val("");
    });
}

function submit() {
    var submit = "";
    var text = "";

    //Input
    if (input === "true") {
        for (var i = 0; i < inputs.length; i++) {
            var input_val = $("#" + inputs[i].id).val();
            if (inputs[i].required === 'required') {
                if (input_val.length === 0) {
                    submit += "1";
                } else {
                    if (inputs[i].type === "email") {
                        $("#help_input_" + inputs[i].id).html("");
                        submit += "0";

                        if (isEmail(input_val) === true) {
                            //email is valid
                            $("#help_input_" + inputs[i].id).html("");
                            submit += "0";
                        } else {
                            //email is not valid				
                            submit += "1";
                            $("#help_input_" + inputs[i].id).html("Digite um e-mail válido");
                        }
                    } else if (inputs[i].type === "date") {
                        submit += "0";
                        text += inputs[i].label + ": " + isDate(input_val) + "\n";
                    } else {
                        $("#asterisk_input_" + inputs[i].id).html("");
                        submit += "0";
                        text += inputs[i].label + ": " + input_val + "\n";
                    }
                }
            } else {
                if (inputs[i].type === "date") {
                    submit += "0";
                    text += inputs[i].label + ": " + isDate(input_val) + "\n";
                } else {
                    var input_val = $("#" + inputs[i].id).val();
                    submit += "0";
                    text += inputs[i].label + ": " + input_val + "\n";
                }
            }
        }
    }

    //Textarea
    if (textarea === "true") {

        var arrayLengthTextarea = textareas.length;
        for (var i = 0; i < arrayLengthTextarea; i++) {
            var textarea_val = $("#" + textareas[i].id).val();

            if (textareas[i].required === 'required') {
                if (textarea_val.length === 0) {
                    submit += "1";
                } else {
                    submit += "0";
                    text += textareas[i].label + ": " + textarea_val + "\n";
                }
            } else {
                submit += "0";
                text += textareas[i].label + ": " + textarea_val + "\n";
            }
        }
    }

    if ((parseInt(submit) + 0) === 0) {

        var message = title_form + "\n\n";
        message += text;

        message = window.encodeURIComponent(message);

        if (openInNewWindow === "true") {
            blank = "_blank";
        } else {
            blank = "_self";
        }

        window.open("https://wa.me/" + mobile + "?text=" + message, blank);

        alert("Você foi redirecionado para o WhatsApp para enviar a sua mensagem. \n \n Entraremos em contacto em breve, obrigado.");
        cleanInputs();
    }
}