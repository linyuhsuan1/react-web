import pbModel from './pbModel';

class product extends pbModel{

    get id() {
        return this.getValue("id")
    }
    get name(){
        return this.getValue("name")
    }
    get description(){
        return this.getValue("short_description")
    }
    get onSale(){
        return this.getValue("on_sale")
    }
    get regularPrice(){
        return this.getValue("regular_price")
    }
    get price(){
        return this.getValue("sale_price")
    }
    get imageUrl(){
        const images= this.getValue("images")
        if(images && images.length>0){
            return images[0].src
        }
        return ""
    }
    
}

export default  product;