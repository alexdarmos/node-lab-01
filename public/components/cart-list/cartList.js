function CartController(CartService) {
    const ctrl = this;
    ctrl.cartItems = [];
    ctrl.banner = '';

    ctrl.cartList = () => {
        CartService.getCart()
        .then( (data) => {
            // console.log(data);

            data.forEach(function(item)  {
                let cartObj = {
                    id: item.id,
                    product: item.product,
                    price: item.price,
                    quantity: item.quantity,
                    image: item.image
                }
                ctrl.cartItems.push(cartObj);
            })

        })
        .catch( (error) => {
            console.log(error);
        })

    }

    ctrl.cartList();

    ctrl.getBanner = (image) => {
        ctrl.banner = image;
    }


}

angular.module("CartApp")
.component('cartList', {
    controller: CartController,
    template: `
    <dynamic-banner background="$ctrl.banner"></dynamic-banner>
    <div class="container">
        <div class="cart">
            <div class="cart-item" ng-repeat="item in $ctrl.cartItems" ng-mouseover="$ctrl.getBanner(item.image)">
            
                <div class="item-header ">{{item.product}}</div>
                <div class="item-cost">Cost: \${{item.quantity * item.price}}</div>

                <div class="item-info-container">
                <div class="item-info quantity">Qty: {{item.quantity}}</div>
                <div class="item-info price">Price: \${{item.price}}</div>

                </div>
            </div>
        </div>
    </div>
    `
})