import pbModel from './pbModel';

class product extends pbModel{
    get name(){
        return this.getValue("name")
    }
}

export default  product;