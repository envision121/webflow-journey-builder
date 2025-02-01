import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Building2 } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <div className="h-1 w-20 bg-primary rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Since our establishment, we have been at the forefront of renewable energy solutions in India. 
                Our journey began with a vision to make clean energy accessible and affordable for everyone, 
                and today we stand as one of the leading providers of wind and solar energy systems.
              </p>
              <p className="text-gray-700">
                With years of experience and a team of dedicated professionals, we have successfully 
                implemented numerous projects across various sectors, from residential installations 
                to large-scale industrial applications.
              </p>
            </div>
            <div>
              <img 
                src="/images/b1021f9e-4de4-46c5-9ec7-51113a87868f.jpg"
                alt="About Us" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide innovative and sustainable energy solutions that help businesses 
                and communities thrive while protecting our environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Team</h3>
              <p className="text-gray-700">
                A diverse group of experts committed to delivering excellence in renewable 
                energy solutions and customer service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Facilities</h3>
              <p className="text-gray-700">
                State-of-the-art manufacturing and testing facilities ensuring the highest 
                quality standards in all our products.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Experience & Expertise</h3>
                <p className="text-gray-700">
                  With years of experience in the renewable energy sector, we bring unmatched 
                  expertise to every project we undertake.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
                <p className="text-gray-700">
                  We maintain rigorous quality standards throughout our manufacturing and 
                  installation processes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
                <p className="text-gray-700">
                  Our dedicated support team ensures smooth operation and maintenance of 
                  all installed systems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-700">
                  We continuously invest in research and development to bring the latest 
                  renewable energy technologies to our customers.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Commitment</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We are committed to driving the transition towards sustainable energy solutions 
              while ensuring reliability, efficiency, and cost-effectiveness for our customers. 
              Our goal is to contribute to a cleaner, greener future for generations to come.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;