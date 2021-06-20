export default class Api {
    constructor(ax) {
        this.ax = ax;
    }

    send(url = '', method = 'get', data = null) {
        const requestOptions = {
            method,
            url
        }
        if (data) {
            requestOptions.data = data;
        }
        return this.ax(requestOptions).then(res => res.data);
        // return [{type:"accs", title:"Sims 4", cost: 139, img:"/img/items/no-item.png"},
        //     {type:"keys", title:"Sims 4", cost: 139, img:"/img/items/no-item.png"},
        //     {type:"keys", title:"Sims 4", cost: 139, img:"/img/items/no-item.png"}];
    }
}