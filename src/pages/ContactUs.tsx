import Navbar from "../components/Navbar"
import contact_img from '../assets/contact_img.png'
import phone from '../assets/phone.png'
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import address from '../assets/location.png'
import Footer from "../components/Footer"
 

const ContactUs = () => {
  return (
    <div>
        <Navbar/>
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${contact_img})` }}>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
    <p className="text-lg mb-6 max-w-2xl">
      You need some clarification? You can always reach out to us. We are always available 24/7.
    </p>
    <button className="bg-hardGreen hover:bg-hardYellow text-white py-3 px-6 rounded-lg shadow-lg transition duration-300">
      Help Line
    </button>
  </div>
</div>
<div className="flex flex-col lg:flex-row px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto gap-8">
  {/* Contact Details */}
  <div className="lg:w-1/2 space-y-6">
    <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
    <p className="text-gray-700">
      You need some clarification? You can always reach out to us. Stay connected to us on all our social media pages.
    </p>

    <div className="grid grid-cols-2 gap-6">
      {/* Phone */}
      <div className="flex items-center space-x-4">
        <img src={phone} alt="Phone Icon" className="w-8 h-8" />
        <div>
          <p className="text-sm font-semibold">Phone</p>
          <p className="text-gray-600">(+234) 5466 7854 432</p>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-center space-x-4">
        <img src={address} alt="Address Icon" className="w-8 h-8" />
        <div>
          <p className="text-sm font-semibold">Address</p>
          <p className="text-gray-600">Lagos, Nigeria</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-4">
        <img src={mail} alt="Email Icon" className="w-8 h-8" />
        <div>
          <p className="text-sm font-semibold">Email</p>
          <p className="text-gray-600">reneryhub@gmail.com</p>
        </div>
      </div>

      {/* Linkedin */}
      <div className="flex items-center space-x-4">
        <img src={linkedin} alt="LinkedIn Icon" className="w-8 h-8" />
        <div>
          <p className="text-sm font-semibold">LinkedIn</p>
          <p className="text-gray-600">Renergy Hub</p>
        </div>
      </div>
    </div>
  </div>

  {/* Contact Form */}
  <div className="lg:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
    <form className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-hardGreen"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-hardGreen"
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-hardGreen"
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-hardGreen"
      />
      <textarea
        placeholder="Message"
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-hardGreen h-32"
      ></textarea>
      <div className="flex justify-center">
  <button className="px-6 bg-hardGreen hover:bg-hardYellow text-white py-3 rounded-lg transition duration-300">
    Send Message
  </button>
</div>

    </form>
  </div>

</div>
<div className="flex justify-center items-center mt-10 mb-10">
<iframe width="90%" height="400"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lagos%20Nigeria+(Renergy%20Hub)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
</div>

<Footer/>
    </div>
  )
}

export default ContactUs