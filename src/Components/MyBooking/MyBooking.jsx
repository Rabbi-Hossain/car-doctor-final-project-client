import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import TableRow from "../TableRow/TableRow";

const MyBooking = () => {

    const { user } = useContext(AuthContext)

    const [booking, setBooking] = useState([])

    const url = `http://localhost:5000/booking?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBooking(data)
            })
    }, [url])



    const handleBooking =id=>{
        const procude = confirm('are you sure delete')
        if(procude){
            fetch(`http://localhost:5000/booking/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const remaining = booking.filter(book=>book._id !== id)
                setBooking(remaining)
            })
        }
    }



    const handleconfirm =id=>{
        fetch(`http://localhost:5000/booking/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const remaining = booking.filter(book=>book._id !== id)
            const updated = booking.find(book=>book._id === id)
            updated.status ='confirm'
            const newBooking = [updated, ...remaining]
            setBooking(newBooking)
        })
    }



    return (
        <div>
            <h3>My Booking session:{booking.length}</h3>


            {/* booking table card */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th></th>
                            <th>Picture</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                        {
                            booking.map(book=><TableRow key={book._id} book={book} handleBooking={handleBooking} handleconfirm={handleconfirm}></TableRow>)
                        }
                        
                      
                    </tbody>
                   
                </table>
            </div>
        </div>
    );
};

export default MyBooking;