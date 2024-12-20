import { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Booking = () => {

    const {user} = useContext(AuthContext)
    console.log(user)

    const Booking = useLoaderData()
    const { title, img, price } = Booking

    const handleBooking = e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const due = form.due.value;
        console.log(name, email, date, due)

        const booking = {
            email, date, price, img, due, title
        }
        
        fetch('http://localhost:5000/booking',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    return (
        <div className="mb-24">
            <h2 className="text-3xl text-center mb-12">This is booking session:  {title}</h2>

            {/* booking form */}
            <div className="card bg-base-100 shadow-xl">
                <form  onSubmit={handleBooking} className="card-body ">
                    <div className="flex gap-4 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.name} placeholder="Name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="Date"  name="date" className="input input-bordered w-full" required />
                            
                        </div>
                    </div>
                    <div className="flex gap-4 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name="due"  defaultValue={ '$  ' + price}  className="input input-bordered w-full" required />
                            
                        </div>
                    </div>

                    <input type="submit" value="Booking" className="btn btn-block mt-6" />
                    

                </form>
            </div>
        </div>
    );
};

export default Booking;