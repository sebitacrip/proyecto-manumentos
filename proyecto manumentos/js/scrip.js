$(document).ready(function(){
    $(".pie-pagina").hide(function(){
    
    })
    
     $("#elh").click(function(){
        $(".pie-pagina").show(1500)
        })
    $("#estatua").click(function(){
        $(".container").toggle(1500);
    })
    $("#boton").click(function(){
        $(".pie-pagina").hide();
    })

})

function addProduct() {
    const cart = document.querySelector('');
    const product = document.createElement('#imagen1');
    product.classList.add('product');
    product.innerHTML = `
      <div class="name">Nuevo Producto</div>
      <div class="quantity"></div>
      <div class="remove" onclick="removeProduct(this)">Eliminar</div>
    `;
    cart.appendChild(product);
    hideEmptyCartMessage();
  }


