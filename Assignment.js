//Assignment 

//for printing the errors
const error ={
    status: 400,
    message: ""


}
 const filghts_data = {
        "data": [
            {
                "id": "1",
                "source": "Delhi",
                "destination": "Mumbai",
                "price": "4000"
            },
            {
                "id": "2",
                "source": "Delhi",
                "destination": "jaipur",
                "price": "5000"
            },
            {
                "id": "3",
                "source": "Delhi",
                "destination": "Mumbai",
                "price": "6000"
            },
        ]
    }
const getFlightPrice = async (req,res) => {
    try{
        const {source,destination} = req.body
        if(!source || !destination){
            error.message = "Source and Destination are required"
            throw error
        }
        const flights = filghts_data.data.filter((flight) => flight.source === source && flight.destination === destination)
        if(flights.length === 0){
            error.message = "No flights found"
            throw error
        }
        res.status(200).json({
            message: "Flight prices fetched successfully",
            data: flights
        })

        
    }
    catch(err){
        console.log(err)
    }
}
module.exports = {
    getFlightPrice
}




