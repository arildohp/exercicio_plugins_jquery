$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000' ,{
    placeholder:'(**) ***** ****'
    });

    $('#cpf').mask('000.000.0000-00' , {
    placeholder:'***.***.*** - **'
    })

    $('#cep').mask('00.000-000' , {
    placeholder:'**.***-***'
  })
})