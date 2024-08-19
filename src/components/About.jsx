import { Link } from "react-router-dom";

function About() {
  return (
    <div className=" pb-10 pt-20 flex justify-center items-center min-h-screen bg-gray-900">
      <div className=" bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">About Us</h1>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">Our Story</h2>
          <p className="text-gray-300">
            Founded in 2024, our company has been at the forefront of innovation in the tech industry. 
            We started with a simple idea: to make technology accessible to everyone. 
            Today, were proud to say weve helped millions of users worldwide.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">Our Mission</h2>
          <p className="text-gray-300">
            Our mission is to empower individuals and businesses through cutting-edge technology solutions. 
            We believe in creating products that are not only powerful but also user-friendly and accessible.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">Our Team</h2>
          <p className="text-gray-300">
            Were a diverse group of passionate individuals, each bringing unique skills and perspectives to the table. 
            From seasoned industry veterans to fresh, innovative minds, our team is united by a common goal: 
            to push the boundaries of whats possible in tech.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">Join Us</h2>
          <p className="text-gray-300">
            Were always looking for talented individuals to join our team. If youre passionate about technology 
            and want to make a difference, wed love to hear from you. Check out our careers page for current openings.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link to="/contact">
          <a    
            className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            Get in Touch
          </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;