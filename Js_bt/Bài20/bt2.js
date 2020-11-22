var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
    ];
    function shoppingSpree(wishlist) {
    // Write code here...
        return wishlist.reduce(function(total, i){return total+=i.price}, 0)
    }
    shoppingSpree(wishlist)