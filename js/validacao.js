$(document).ready(function() {
    $("#conjuge").hide();

    $("#casado").click(function(evento) {
        $("#conjuge").toggle("slow");
        evento.preventDefault();
    });

    $("span").hide();

    $("#nome").focusout(function() {
        $("#span-nome").hide("slow");
        if ($("#nome").val() == "") {
            $("#span-nome").show("slow");
            $("#nome").focus();
        }
    });
    $("#dtnasc").focusout(function() {
        $("#span-dtnasc").hide("slow");
        if ($("#dtnasc").val() == "") {
            $("#span-dtnasc").show("slow");
        }
    });
    $("#cep").focusout(function() {
        $("#span-cep").hide("slow");
        if ($("#cep").val() == "") {
            $("#span-cep").show("slow");
        }
    });
    $("#endereco").focusout(function() {
        $("#span-endereco").hide("slow");
        if ($("#endereco").val() == "") {
            $("#span-endereco").show("slow");
        }
    });
    $("#cidade").focusout(function() {
        $("#span-cidade").hide("slow");
        if ($("#cidade").val() == "") {
            $("#span-cidade").show("slow");
        }
    });
    $("#estado").focusout(function() {
        $("#span-estado").hide("slow");
        if ($("#estado").val() == "") {
            $("#span-estado").show("slow");
        }
    });
    $("#bairro").focusout(function() {
        $("#span-bairro").hide("slow");
        if ($("#bairro").val() == "") {
            $("#span-bairro").show("slow");
        }
    });
    $("#tel").focusout(function() {
        $("#span-tel").hide("slow");
        if ($("#tel").val() == "") {
            $("#span-tel").show("slow");
        }
    });
    $("#cel").focusout(function() {
        $("#span-cel").hide("slow");
        if ($("#cel").val() == "") {
            $("#span-cel").show("slow");
        }
    });
    $("#email").focusout(function() {
        $("#span-email").hide("slow");
        if ($("#email").val() == "") {
            $("#span-email").show("slow");
        }
    });

    $("#dtnasc").mask("99/99/9999");
    $("#dtnasc2").mask("99/99/9999");
    $("#cep").mask("99999-999");
    $("#tel").mask("(99) 9999-9999");
    $("#cel").mask("(99) 99999-9999");
    $("#cel2").mask("(99) 99999-9999");

    $(".btn-dependente").click(function(e) {
        e.preventDefault();

        let quantidade = $("#quantidade").val();

        $("#gera-dependente").hide("slow");

        for (var i = 0; i < quantidade; i++) {
            $("#gera-dependente").after(`<div class="form-group mt-2">
                <label>Nome do dependente</label>
                <input type="text" name="" id="" class="form-control">
            </div>
        `);
        }
        $("#dep").fadeOut(2000);
    });

    $("#enviar").click(function() {
        alert("A sua jornada para o lado sombrio da força começou");
    });
});