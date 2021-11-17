class PBModel {
    constructor(rawData) {

        // const [getValue] =( () =>{
        //     let tempRawData = rawData;
        // })()
        this.getValue =((key) => {
            let tempRawData = rawData;
            return (key) =>{
                return tempRawData[key]
            }
        })()
        // this.getValue = getValue;
    }

    
}

export default  PBModel;