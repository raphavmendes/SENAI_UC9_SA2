//JS
//A para nível de correção da atividade,
//tem mais um pequeno código JS no arquivo index.

// function mostrarPopup(){
//     window.alert("Seja Bem Vindo!")
// }



//JQUERY

// $(document).ready(function(){
//     $("#barras").click(function(){
//         if($("#menu").hasClass("#menu-ativo")){
//             $("#menu").removeClass("#menu-ativo")
//         }else{
//             $("#menu").addClass("menu-ativo")
//         }
//     })
// })

$(document).ready(function(){

    $("#barras").click(function(){
        $("#menu").toggleClass("menu-ativo")
    })
})



$(document).ready(function(){
    $("#carrossel img:eq(0)").addClass("banner-ativo").show()  
})

setInterval(slide,1000)

function slide(){
    if($(".banner-ativo").next().length){
        $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    }else{
        $(".banner-ativo").removeClass().hide()
        $("#carrossel img:eq(0)").addClass("banner-ativo").show()
    }
}