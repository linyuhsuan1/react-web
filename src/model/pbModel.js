class PBModel {
    constructor(rawData) {

        // const [getValue] =( () =>{
        //     let tempRawData = rawData;
        // })()
        this.getValue =((key) => {
            console.log('aaaa',rawData)
            let tempRawData = rawData;
            return (key) =>{
                return tempRawData[key]
            }
        })()
        // this.getValue = getValue;
        console.log("ffgdfg",this.getValue)
    }
    get id() {
        return this.getValue("id")
    }
}

export default  PBModel;