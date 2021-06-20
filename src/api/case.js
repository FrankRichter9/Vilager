import axios from "axios";
import Api from "@/api/index";

export default class CaseApi extends Api {
    constructor() {
        const shopAx = axios.create({
            baseURL: process.env.VUE_APP_CASE_URL,
            headers: {
                post: {        // can be common or any other method
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                }
            }
        });

        super(shopAx);
    }

    getAllCases() {
        return this.send("/products");
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
        localStorage.isCaseBuy = true;
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

    useCase(id) {
        return this.send("/cases/" + id + "/use", "POST");
    }

    checkCount(id) {
        return this.send("/cases/" + id + "/checkCount", "POST");
    }

}
