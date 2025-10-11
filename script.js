function mostrarConteudo (conteudos){
    let cards = document.querySelector(".box-cards");
    let img1 = document.querySelector(".container-product1")
    let detailsProduct2 = document.querySelector(".details-product2")
    let detailsProduct3 = document.querySelector(".details-product3")
    let detailsProduct4 = document.querySelector(".details-product4")
        
    
    if(conteudos ==="inicio"){
        cards.style.display = "block"
        img1.style.display = "none"
        detailsProduct2.style.display="none"
        detailsProduct3.style.display="none"
        detailsProduct4.style.display="none"
        
        
    }


    if (conteudos==="item1"){

        cards.style.display = "none"
        img1.style.display = "block"
    }


    if(conteudos==="item2"){
        cards.style.display = "none"
        detailsProduct2.style.display="block"
    }

    if(conteudos==="item3"){
        cards.style.display = "none"
        detailsProduct2.style.display="none"
        detailsProduct3.style.display="block"

    }

    if(conteudos==="item4"){
        cards.style.display = "none"
        detailsProduct2.style.display="none"
        detailsProduct3.style.display="none"
        detailsProduct4.style.display="block"

    }

}





