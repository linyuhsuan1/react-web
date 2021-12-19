import React from 'react'

const getCityOptions = (cities) => {
    return cities.map((city) => {
        return (
            <option key={city} value={city}>{city}</option>
        )
    })
}
const getDistricOptions = (districts) => {
    return districts.map((district) => {
        return (
            <option key={district} value={district}>{district}</option>
        )
    })
}
const AddressPicker = ({
    taiwanPostalCodes,
    fullAddress,
    handler
}) => {
    const {
        city,
        district,
        postalCode,
        address
    } = fullAddress
    const cities = Object.keys(taiwanPostalCodes)
    const cityOptions = getCityOptions(cities)
    const cityData = taiwanPostalCodes[city];
    const districts = Object.keys(cityData)
    const districtsOptions = getDistricOptions(districts)
    const handlerRelated = (name, value) => {
        let mergeObject = {}
        if (name === "city" && city !== value) {
            mergeObject['district'] = ""
            mergeObject['postalCode'] = ""
        } else if (name === "district" && district !== value) {
            const cityData = taiwanPostalCodes[city];
            const postalCode = cityData[value];
            mergeObject['postalCode'] = postalCode
        }

        return mergeObject
    }

    const enhancedtHandler = (e) => {
        const { name, value } = e.target
        const mergeObject = handlerRelated(name, value)
        handler("fullAddress", { ...fullAddress, ...mergeObject, [name]: value })
    };

    const inputHandler = (e) => {
        const { name, value } = e.target
        const mergeObject = handlerRelated(name, value)
        handler("fullAddress", { ...fullAddress, ...mergeObject, [name]: value })
    }

    return (
        <>
            <div className="flex flex-wrap mb-2 -mx-3" >
                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                    <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                        City
                    </label>
                    <select
                        value={city}
                        name="city"
                        onChange={enhancedtHandler}
                        className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500">
                        {cityOptions}
                    </select>
                </div>
                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                    <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                        State
                    </label>
                    <div className="relative">
                        <select
                            value={district}
                            onChange={enhancedtHandler}
                            name="district"
                            className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500">
                            {districtsOptions}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                    <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                        Zip
                    </label>
                    <input
                        id="postalCode"
                        name="postalCode"
                        value={postalCode}
                        disabled={true}
                        className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
                    <input type="hidden" name="postalCode" value={postalCode} />
                </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3">
                    <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                        Address
                    </label>
                    <input
                        id='address'
                        name="address"
                        value={address}
                        onChange={inputHandler}
                        className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Street" />
                </div>
            </div>
        </>
    )
}



export default AddressPicker;