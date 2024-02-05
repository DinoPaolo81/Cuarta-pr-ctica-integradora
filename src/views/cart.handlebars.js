<div class="container mainContainer" style="max-width: 750px; margin: 2rem auto;">

    {{#if cart}}
    <h1 class="title text-center mb-4">Carrito de Cervezas!</h1>

    {{#each cart.products}}
    <div class="card border-light mb-3 artifactCard">
        <div class="row">
            <div class="col-4 d-flex align-items-center justify-content-center">
                <img src="{{this.productId.thumbnails.[0]}}" class="img-fluid" alt="...">
            </div>
            <div class="col-8">
                <div class="card-body">
                    <h4 class="card-title itemName">{{this.productId.title}}</h4>
                    <p class="card-text itemType">{{this.productId.description}}</p>
                    <p class="card-text">Codigo: {{this.productId.code}}</p>
                    <p class="card-text">Precio: {{this.productId.price}} <img src="/public/img/logo.png" alt="Cervezas" /></p>
                    <p class="card-text">Cantidad: {{this.quantity}}</p>
                    <button class="btn btn-outline-danger">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
    {{/each}}

    {{else}}
    <p>No se ha encontrado el carrito</p>
    {{/if}}


</div>