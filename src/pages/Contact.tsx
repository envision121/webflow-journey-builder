import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    I notice there are merge conflict markers (<<<<<<< HEAD, =======, >>>>>>>) in multiple files that need to be resolved. Let's fix these issues step by step.

<lov-code>
Let's fix each file by removing the merge conflict markers and keeping the correct code:

<lov-write file_path="src/pages/Contact.tsx">
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="h-[70vh] relative w-full">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/images/4a1f7656-c373-4f2a-82df-88003f95a553.jpg')"
            }}
          >
            <div className="absolute inset-0 bg-black/60 flex items-center">
              <div className="container mx-auto px-4">
                <div className="text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Contact Us
                  </h1>
                  <p className="text-white/90 text-lg">
                    Get in touch with our team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-primary mr-2" />
                <span>123 Green Energy St, Eco City, EC 12345</span>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-primary mr-2" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-primary mr-2" />
                <span>info@empeegreenenergy.com</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded"
                  rows={4}
                  required
                />
                <button type="submit" className="bg-primary text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-primary/90">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Map />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;