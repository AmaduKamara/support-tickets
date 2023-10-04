import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container mx-auto py-16 flex justify-center w-1/2">
      <section className="px-16 w-full text-center">
        <h1 className="md:text-3xl lg:text-5xl font-bold text-gray-600">
          What do you need help with?
        </h1>
        <p className="text-gray-700 mt-5 md:text-xl">
          Please choose from the options below
        </p>
        <div className="mt-10">
          <Link
            to="/new-ticket"
            className="py-3 rounded-md flex items-center justify-center bg-cyan-600 relative md:text-xl text-white hover:bg-cyan-700"
          >
            <FaQuestionCircle className="mr-4" /> Create New Ticket
          </Link>
          <Link
            to="/tickets"
            className="py-3 rounded-md mt-5 border border-cyan-500 flex items-center justify-center text-cyan-600 relative md:text-xl hover:text-white hover:bg-cyan-600"
          >
            <FaTicketAlt className="mr-4" /> View My Tickets
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
