let Item = new Object();

Item.colour = 'red';
Item.price = 5.89;
Item.name = 'tomato';

Item.knowInfo = function () {
        return this.name + ' - ' + this.price 'zl';