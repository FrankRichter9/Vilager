import axios from "axios";
import Api from "@/api/index";

export default class ShopApi extends Api {
    constructor() {
        const shopAx = axios.create({
            baseURL: "https://api.zakvielshop.ru/api",
            headers: {
                post: {        // can be common or any other method
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                }
            }
        });

        super(shopAx);
    }

    getAllItems(groups) {
        let res = [];

        groups.map((group) => {
            Array.prototype.push.apply(res, group.products.flat());
        });

        return res;
    }

    getItems() {
        return this.send("/productGroups")
    }

    checkPrice(coupon, player, products) {
        const data = {
            coupon: coupon,
            player: player,
            products: [
                products
            ]
        };
        return this.send("/products/price", "post", data);
    }

    checkAvailability(itemId) {
        const data = {
            productId: itemId
        };
        return this.send("/products/availability", "post", data)
    }

    buyItem(coupon, player, products) {
        const data = {
            coupon: coupon,
            player: player,
            products: [
                products
            ]
        };
        return this.send("/products/checkout", "post", data);
    }

    tryToBuy(coupon, player, products) {
        let api = this;
        return new Promise(function (resolve, reject) {
            const data = {
                coupon: coupon,
                player: player,
                products: [
                    products
                ]
            };
            if (player.email === "")
                reject(21);

            api.checkAvailability(data.products[0].productId).then((res) => {
                if (res.available) {
                    if (res.amount >= data.products[0].amount) {
                        api.buyItem(coupon, player, products).then((res) => {
                            resolve(res.link);
                        }).catch(err => {
                            if (err.response.status === 400) {
                                reject(err.response.data.code);
                            } else
                                reject(0)
                        })
                    } else {
                        //If not enough products in shop
                        reject(0);
                    }
                } else {
                    //If buy not available
                    reject(0);
                }
            }).catch(err => {
                if (err.response.status === 400) {
                    //unknown product id
                    reject(0)
                } else
                    reject(0)
            })
        });
    }

    checkLastPurchases(orderId) {
        return this.send("/products/lastPurchasedValues/" + orderId);
    }

    getGroupIdByProduct(pId) {
        return this.send("/productGroups/product/" + pId + "/idOnly");
    }

    getAccountByRoute(route) {
        let account = "";

        if (route.query.account !== undefined)
            account = route.query.account.substring(5);
        else if (route.query.LMI_PAYMENT_NO !== undefined)
            account = this.$route.query.LMI_PAYMENT_NO;
        else if (route.query.orderId !== undefined)
            account = route.query.orderId
        else
            account = undefined;

        return account;
    }
}
/*
Customs Error-code:
0 - Error that push to fail page
21 - User error
2 - not available
3 - amount error
4 - buy error
5 - id error
 */

