import PBModel from './pbModel'

class Customer extends PBModel {
    get id() {
        return this.getValue("id")
    }

}


export default Customer