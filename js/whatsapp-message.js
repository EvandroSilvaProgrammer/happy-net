/* -----------------------------------------------------
 *
 * # Configuração
 *
 * -----------------------------------------------------
 */
mobile = "244938165179"; //Ex. 551199999999 (DDI+DDD+SEUNUMERO)
openInNewWindow = "true"; // Abrir o WhatsApp em um nova janela
redirectMessage = "Você foi redirecionado para o WhatsApp para enviar uma mensagem. <br> <br> Entraremos em contato em breve! <br> <br> Obrigado";
title_page = "WhatsApp EasyForm"; //Título da página
title_form = "Demonstração de Formulário de Contato"; //Título do formulário
url_image = "img/wef-logo-default.png"; //Você pode substituir a imagem padrão por uma sua. (Medidas recomendadas: 700x300) 

asterisk_required = "true"; ///Mostrar asterisco para campos obrigatórios


/* -----------------------------------------------------
 *
 * # Inputs
 *
 * -----------------------------------------------------
 */
input = "true"; // True/false para ativar/desativar campos do tipo Input
inputs = [{
    id: 'nome',
    label: 'Nome',
    label_custom: '',
    placeholder: 'Seu nome',
    required: 'required',
    type: 'text',
    order: '1'
}, {
    id: 'telefone',
    label: 'Telefone',
    label_custom: '',
    placeholder: 'Seu telefone',
    required: 'required',
    type: 'text',
    class: 'phone_with_ddd',
    order: '3'
}, {
    id: 'email',
    label: 'E-mail',
    label_custom: '',
    placeholder: 'Seu e-mail',
    required: 'required',
    type: 'email',
    order: '2'
}];

/* -----------------------------------------------------
 *
 * # Textarea
 *
 * -----------------------------------------------------
 */
textarea = "true"; // True/false para ativar/desativar campos do tipo Textarea
textareas = [{
        id: 'comentarios',
        label: 'Comentários',
        label_custom: '',
        placeholder: "Comentários se houver",
        required: '',
        order: '6'
    },

];

/* -----------------------------------------------------
 *
 * # Checkbox
 *
 * -----------------------------------------------------
 */
checkbox = "true"; // True/false para ativar/desativar campos do tipo Checkbox
checkboxs = [{
    id: 'interesse',
    label: "Interessado em",
    label_custom: '',
    options: ['Projeto', 'Produto'],
    required: 'required',
    order: '7'
}];

/* -----------------------------------------------------
 *
 * # Radio
 *
 * -----------------------------------------------------
 */
radio = "true"; // True/false para ativar/desativar campos do tipo Radio
radios = [{
    id: 'tipo-trabalho',
    label: "Tipo de trabalho",
    label_custom: '',
    options: ['Projeto', 'Desenvolvimento'],
    required: 'required',
    order: '8'
}];

/* -----------------------------------------------------
 *
 * # Select
 *
 * -----------------------------------------------------
 */
select = "true"; // True/false para ativar/desativar campos do tipo Select
selects = [{
        id: 'plataforma',
        label: "Plataforma",
        label_custom: '',
        first_option_select: "Selecionar...",
        options: ["Web", "Mobile", "Web/Mobile"],
        required: 'required',
        order: '9'
    }

];

/* -----------------------------------------------------
 *
 * # Botão Enviar
 *
 * -----------------------------------------------------
 */
button_name = "Enviar"; //Texto do botão Enviar



/*============================================================================================================= */

//Mask for Fields
$(document).ready(function() {
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 00000-0000');
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', {
        reverse: true
    });
    $('.cnpj').mask('00.000.000/0000-00', {
        reverse: true
    });
    $('.money').mask('000.000.000.000.000,00', {
        reverse: true
    });
    $('.money2').mask("#.##0,00", {
        reverse: true
    });
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
        translation: {
            'Z': {
                pattern: /[0-9]/,
                optional: true
            }
        }
    });
    $('.ip_address').mask('099.099.099.099');
    $('.percent').mask('##0,00%', {
        reverse: true
    });
    $('.clear-if-not-match').mask("00/00/0000", {
        clearIfNotMatch: true
    });
    $('.placeholder').mask("00/00/0000", {
        placeholder: "__/__/____"
    });
    $('.fallback').mask("00r00r0000", {
        translation: {
            'r': {
                pattern: /[\/]/,
                fallback: '/'
            },
            placeholder: "__/__/____"
        }
    });
    $('.selectonfocus').mask("00/00/0000", {
        selectOnFocus: true
    });
});

//Asterisk Fields
if (asterisk_required === "true") {
    asterisk = "<span style='color:red;'>*</span>";
} else {
    asterisk = "";
};

/*============================================================================================================= */


$("#title_page").html(title_page);
$("#title_form").html(title_form);
$(".logo").html('<img src="' + url_image + '" alt="Formulario WhatsApp - plugin jQuery" width="700px">');

/*============================================================================================================= */

result_fields = "";

//Input
if (input == "true") {
    var arrayLengthInput = inputs.length;
    result_input = "";
    for (var i = 0; i < arrayLengthInput; i++) {
        if (inputs[i].order[0]) {
            result_input += '<div data-sid="' + inputs[i].order + '" id="' + inputs[i].order + '">';
            result_input += '<label class="est1" ' + inputs[i].label_custom + '>' + inputs[i].label;
            result_input += '<span id="asterisk_input_' + inputs[i].id + '"></span></label>';
            result_input += '<input type="' + inputs[i].type + '" ';
            result_input += 'id="' + inputs[i].id + '"';
            result_input += 'placeholder="' + inputs[i].placeholder + '"';
            result_input += 'class="' + inputs[i].class + '"';
            result_input += 'required="' + inputs[i].required + '">';
            result_input += '<span id="help_input_' + inputs[i].id + '" class="textHelp"></span></label>';
            result_input += '</div>';
        } else {
            alert('Defina uma ordem de exibição para input "' + inputs[i].label + '"');
        }
    }
    result_fields += result_input;
}

//Textarea
if (textarea == "true") {
    var arrayLengthTextArea = textareas.length;
    result_textarea = "";
    for (var i = 0; i < arrayLengthTextArea; i++) {
        if (textareas[i].order[0]) {
            result_textarea += '<div data-sid="' + textareas[i].order + '" id="' + inputs[i].order + '">';
            result_textarea += '<label class="est1" ' + textareas[i].label_custom + '>' + textareas[i].label;
            result_textarea += '<span id="asterisk_textarea_' + textareas[i].id + '"></span></label>';
            result_textarea += '<textarea placeholder="' + textareas[i].placeholder + '" id="' + textareas[i].id + '"></textarea>';
            result_textarea += '</div>';

        } else {
            alert('Defina uma ordem de exibição para textarea "' + textareas[i].label + '"');
        }
    }
    result_fields += result_textarea;
}

//Checkbox
if (checkbox == "true") {
    var arrayLengthCheckbox = checkboxs.length;
    result_checkbox = "";
    for (var i = 0; i < arrayLengthCheckbox; i++) {
        if (checkboxs[i].order[0]) {
            result_checkbox += '<div data-sid="' + checkboxs[i].order + '" id="' + inputs[i].order + '">';
            result_checkbox += '<label class="est1" ' + checkboxs[i].label_custom + '>' + checkboxs[i].label;
            result_checkbox += '<span id="asterisk_checkbox_' + checkboxs[i].id + '"></span>';
            result_checkbox += '</label>';
            var arrayLengthCheckboxOptions = checkboxs[i].options.length;
            for (var x = 0; x < arrayLengthCheckboxOptions; x++) {
                result_checkbox += '<div class="est1">';
                result_checkbox += '<input type="checkbox"';
                result_checkbox += 'name="checkbox_' + checkboxs[i].id + '"';
                result_checkbox += 'value="' + checkboxs[i].options[x] + '">';
                result_checkbox += '<label>' + checkboxs[i].options[x] + '</label></div>';
            }
            result_checkbox += '</div>';
        } else {
            alert('Defina uma ordem de exibição para checkbox "' + checkboxs[i].label + '"');
        }
    }
    result_fields += result_checkbox;
}

//Radio
if (radio == "true") {
    var arrayLengthRadio = radios.length;
    result_radio = "";
    for (var i = 0; i < arrayLengthRadio; i++) {
        if (radios[i].order[0]) {
            result_radio += '<div data-sid="' + radios[i].order + '" id="' + inputs[i].order + '">';
            result_radio += '<label class="est1" ' + radios[i].label_custom + '>' + radios[i].label;
            result_radio += '<span id="asterisk_radio_' + radios[i].id + '"></span>';
            result_radio += '</label>';
            var arrayLengthRadioOptions = radios[i].options.length;
            for (var x = 0; x < arrayLengthRadioOptions; x++) {
                result_radio += '<div class="est1">';
                result_radio += '<input type="radio"';
                result_radio += 'id="radio_' + i + '"';
                result_radio += 'name="radio_' + radios[i].id + '"';
                result_radio += 'value="' + radios[i].options[x] + '"> <label>' + radios[i].options[x] + '</label></div>';
            }
            result_radio += '</div>';
        } else {
            alert('Defina uma ordem de exibição para radio "' + radios[i].label + '"');
        }
    }
    result_fields += result_radio;
}

//Select
if (select == "true") {
    var arrayLengthSelect = selects.length;
    result_select = "";
    for (var i = 0; i < arrayLengthSelect; i++) {
        if (selects[i].order[0]) {
            result_select += '<div data-sid="' + selects[i].order + '" id="' + inputs[i].order + '">';
            result_select += '<label class="est1" ' + selects[i].label_custom + '>' + selects[i].label;
            result_select += '<span id="asterisk_select_' + selects[i].id + '"></span>';
            result_select += '</label>';
            var arrayLengthSelectOptions = selects[i].options.length;
            result_select += '<select name="select_' + selects[i].id + '" id="select_' + selects[i].id + '">';
            result_select += '<option value="999">' + selects[i].first_option_select + '</option>';

            for (var x = 0; x < arrayLengthSelectOptions; x++) {
                result_select += '<option value="' + selects[i].options[x] + '">' + selects[i].options[x] + '</option>';
            }
            result_select += '</select></div>';

        } else {
            alert('Defina uma ordem de exibição para select "' + selects[i].label + '"');
        }
    }
    result_fields += result_select;
}

//Button
result_button = '<div data-sid="999" id="999">';
result_button += '<button class="botao-contato" id="submit">';
result_button += '<i class="fab fa-whatsapp"></i>' + button_name;
result_button += '</button>';
result_fields += result_button;

//Show fields
$("p").append("<div class='fields'>" + result_fields + "</div>");

/*============================================================================================================= */
//Validate e-mail
function isEmail(email) {
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(email);
}

//Data formato brasileiro (dd/mm/yyyy)
function isDate(date) {
    var dateformatted = date;
    return dateformatted.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');
}

//Enter event click
$(document).on('keypress', function(e) {
    if (e.which == 13) {
        Submit();
    }
});
//Click button submit
$("#submit").click(function() {
    Submit();
});

//Submit
function Submit() {
    var submit = "";
    var text = "";


    //Input
    if (input === "true") {
        var arrayLengthInput = inputs.length;
        for (var i = 0; i < arrayLengthInput; i++) {
            var input_val = $("#" + inputs[i].id).val();
            if (inputs[i].required === 'required') {
                if (input_val.length === 0) {
                    submit += "1";
                    $("#asterisk_input_" + inputs[i].id).html("&nbsp;" + asterisk);
                } else {
                    if (inputs[i].type === "email") {
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


    //Checkbox
    if (checkbox === "true") {
        checkbox_arr = "";
        var arrayLengthCheckbox = checkboxs.length;
        for (var i = 0; i < arrayLengthCheckbox; i++) {
            if (checkboxs[i].required === 'required') {
                var checkbox_leng = $('[name="checkbox_' + checkboxs[i].id + '"]:checked').length;
                if (checkbox_leng === 0) {
                    submit += "1";
                    $("#asterisk_checkbox_" + checkboxs[i].id).html("&nbsp;" + asterisk);
                } else {
                    $("#asterisk_checkbox_" + checkboxs[i].id).html("");
                    $('[name="checkbox_' + checkboxs[i].id + '"]:checked').map(function() {
                        checkbox_arr += $(this).val() + ", ";
                    }).get()
                    submit += "0";
                    text += checkboxs[i].label + ": " + checkbox_arr.substring(0, checkbox_arr.length - 2) + "\n";
                }
            } else {
                $('[name="checkbox_' + checkboxs[i].id + '"]:checked').map(function() {
                    checkbox_arr += $(this).val() + ", ";
                }).get()
                submit += "0";
                text += checkboxs[i].label + ": " + checkbox_arr.substring(0, checkbox_arr.length - 2) + "\n";
            }
        }
    }


    //Radio
    if (radio === "true") {
        radio_val = "";
        var arrayLengthRadio = radios.length;
        for (var i = 0; i < arrayLengthRadio; i++) {
            if (radios[i].required === 'required') {
                var radio_length = $('[name="radio_' + radios[i].id + '"]:checked').length
                if (radio_length === 0) {
                    submit += "1";
                    $("#asterisk_radio_" + radios[i].id).html("&nbsp;" + asterisk);
                } else {
                    $("#asterisk_radio_" + radios[i].id).html("");
                    $('[name="radio_' + radios[i].id + '"]:checked').map(function() {
                        radio_val += $(this).val();
                    }).get()
                    submit += "0";
                    text += radios[i].label + ": " + radio_val + "\n";
                }
            } else {
                $('[name="radio_' + radios[i].id + '"]:checked').map(function() {
                    radio_val += $(this).val();
                }).get()
                submit += "0";
                text += radios[i].label + ": " + radio_val + "\n";
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
                    $("#asterisk_textarea_" + textareas[i].id).html("&nbsp;" + asterisk);
                } else {
                    $("#asterisk_textarea_" + textareas[i].id).html("");
                    submit += "0";
                    text += textareas[i].label + ": " + textarea_val + "\n";
                }
            } else {
                submit += "0";
                text += textareas[i].label + ": " + textarea_val + "\n";
            }
        }
    }

    //Select
    if (select === "true") {
        var arrayLengthSelect = selects.length;
        for (var i = 0; i < arrayLengthSelect; i++) {
            var select_val = $("#select_" + selects[i].id + " option:selected").val();
            if (selects[i].required === 'required') {
                if (select_val === '999') {
                    submit += "1";
                    $("#asterisk_select_" + selects[i].id).html("&nbsp;" + asterisk);
                } else {
                    $("#asterisk_select_" + selects[i].id).html("");
                    submit += "0";
                    text += selects[i].label + ": " + select_val + "\n";
                }
            } else {
                submit += "0";
                text += selects[i].label + ": " + select_val + "\n";
            }
        }
    }
    if ((parseInt(submit) + 0) === 0) {

        var message = title_form + "\n\n";
        message += text;

        //alert(message);

        message = window.encodeURIComponent(message);

        if (openInNewWindow === "true") {

            blank = "_blank";
        } else {
            blank = "_self";
        }

        window.open("https://wa.me/" + mobile + "?text=" + message, blank);

        $("#title_form").css("display", "none");
        $(".fields").css("display", "none");

        $("p").append("<div>" + redirectMessage + "</div>");

    } else {
        alert("Por favor preencha todos os campos!");
    }
}

/*============================================================================================================= */

//Sort
var fields = $('div.fields'),
    field = fields.children('div');

field.detach().sort(function(a, b) {
    var astts = $(a).data('sid');
    var bstts = $(b).data('sid')
    return (astts > bstts) ? (astts > bstts) ? 1 : 0 : -1;
});

fields.append(field);