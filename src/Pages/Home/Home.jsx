import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import CoreFeture from "../../Components/CoreFeture/CoreFeture";
import MeetTeam from "../../Components/MeetTeam/MeetTeam";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";
import TimeManage from "../../Components/TimeManage/TimeManage";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <TimeManage></TimeManage>
            <MeetTeam></MeetTeam>
            <CoreFeture></CoreFeture>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;