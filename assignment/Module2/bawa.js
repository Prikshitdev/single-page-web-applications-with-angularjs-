(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

        toBuyList.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBougthList = this;

        alreadyBougthList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [
            { name: "parle-g", quantity: 22 },
            { name: "condom", quantity: 1 },
            { name: "juice", quantity: 2},
            { name: "kiwi", quantity: 10 },
            { name: "orange", quantity: 11 }
        ];
        var alreadyBoughtItems = [];

        service.buyItem = function(itemIndex) {
            var item = toBuyItems[itemIndex];

            alreadyBoughtItems.push(item);
            toBuyItems.splice(itemIndex, 1);
        };

        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        };
    }
})();
