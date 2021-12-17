import PBModel from './pbModel'

class Order extends PBModel {
    get status() {
        return this.getValue("status")
    }

    get dateCreated() {
        return this.getValue('date_created').replace("T", " ")
    }

    get currency() {
        return this.getValue("currency")
    }

    get total() {
        return this.getValue("total")
    }
    get id() {
        return this.getValue("id")
    }
}

export default Order