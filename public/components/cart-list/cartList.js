function CartController(CartService) {
    const ctrl = this;
    ctrl.cartItems = [];
    ctrl.banner = '';
    ctrl.isHovering = false;

    ctrl.cartList = () => {
        CartService.getCart()
        .then( (data) => {

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

    ctrl.pushCartList = () => {
        CartService.pushCart()
        .then( (data) => {
            let item = {
                id: 6,
                product: "apples",
                price: 1.09,
                quantity: 1,
                image: "/images/syrup-banner.jpg"
            }
            data.push(item);
        })

    }

    ctrl.cartList();

    ctrl.getBanner = (image) => {
        ctrl.isHovering = true;
        ctrl.banner = image;
        console.log(ctrl.isHovering);
    }
    console.log(ctrl.isHovering);




}

angular.module("CartApp")
.component('cartList', {
    controller: CartController,
    template: `
    <dynamic-banner background="$ctrl.banner"></dynamic-banner>
    <div class="container">
    <!-- <button ng-click="$ctrl.pushCartList()">Add Item</button> -->
        <div class="cart">
            <div class="cart-item" ng-repeat="item in $ctrl.cartItems" ng-mouseover="$ctrl.getBanner(item.image)" ng-mouseleave="$ctrl.isHovering = false;">
            
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