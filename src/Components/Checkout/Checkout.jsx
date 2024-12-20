
import { useLoaderData } from 'react-router';
import checkOutImg from '../../assets/images/checkout/checkout.png'




const Checkout = () => {
    const service = useLoaderData()
    const { title, price, _id,img } = service
    console.log(title, price,_id, img )
    
   

    return (
        <div>
            <img className="w-full" src={checkOutImg} alt="" />
            <h2 className="text-center text-3xl font-semibold mt-6 mb-6">Book Service</h2>
            {/* order confirm layout */}

            <form > 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name"  name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date"  className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"    name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text"  name="due" className="input input-bordered" required />
                    </div>
                    
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;