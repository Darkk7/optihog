import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import NavBar from './pages/components/Navbar'


export default function Home() {

  const brandImages = [ 
     'https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/logo1.png',
     'https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/logo2.png',
     'https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/logo3.png',
     'https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/logo4.png', 
    ];

  return (    
    <div className="flex flex-col min-h-screen">

    {/* Navbar reusable component */}
    <NavBar />

      {/* Main Content */}
      <main className="flex-grow">
{/* About Section with Background Overlay */}
<section
  className="relative p-10 bg-cover bg-center text-center flex items-center justify-center"
  style={{
    backgroundImage: "url('https://placeholder.pics/svg/1600x950')",
  }}
>
  <div className="absolute inset-0 bg-black opacity-40"></div>

  <div className="relative z-10 flex items-center justify-center space-x-4 w-full">
    {/* Text Content */}
    <div className="max-w-xl text-left">
      <h2 className="text-7xl font-bold text-white mb-4">
        Building a Better Future to Your Pet
      </h2>
      <p className="text-gray-300 text-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      {/* Learn More Button */}
      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
        Learn More
      </button>
    </div>

    {/* Larger Image to the Right */}
    <div className="hidden lg:block w-1/3">
      <Image
        src="https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/european-cat-2021-08-26-18-00-50-utc.png"
        width={150}
        height={100}
        alt="Pet Image"
        className="object-cover w-full h-full rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>


{/* About Me Section */}
<section className="p-8 bg-white text-center">
  <div className="flex items-center justify-center gap-12">
    {/* Image to the Left (Smaller Size) */}
    <div className="w-1/6">
      <Image
        src="https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/tricolor-cat-in-studio-2021-08-26-17-35-36-utc.png"
        width={150}
        height={100}
        alt="About Me Image"
        className="object-cover w-full h-full rounded-lg"
      />
    </div>

    {/* Text Content to the Right */}
    <div className="w-2/3 max-w-xl text-left">
      <h3 className="text-xl font-semibold mb-2 text-black">About Me</h3>
      <p className="text-sm text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
        Learn More
      </button>
    </div>
  </div>
</section>


      {/* Special Services Section */}
<section className="p-8 bg-gray-100 text-center">
  <h2 className="text-3xl font-bold mb-6 text-black">Special Services</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-12">
    {/* Service Card 1 */}
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
      <div className="mb-4">
        <Image src="https://via.placeholder.com/50" width={50} height={50} alt="Vaccinate Icon" className="mx-auto" />
      </div>
      <h4 className="text-xl font-semibold mb-2 text-black">Vaccinate</h4>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="#" className="text-blue-500">Learn More</a>
    </div>

    {/* Service Card 2 */}
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
      <div className="mb-4">
        <Image src="https://via.placeholder.com/50" width={50} height={50} alt="Pet Shuttle Icon" className="mx-auto" />
      </div>
      <h4 className="text-xl font-semibold mb-2 text-black">Pet Shuttle</h4>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="#" className="text-blue-500">Learn More</a>
    </div>

    {/* Service Card 3 */}
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
      <div className="mb-4">
        <Image src="https://via.placeholder.com/50" width={50} height={50} alt="Pet Medicine Icon" className="mx-auto" />
      </div>
      <h4 className="text-xl font-semibold mb-2 text-black">Pet Medicine</h4>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="#" className="text-blue-500">Learn More</a>
    </div>

    {/* Service Card 4 */}
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
      <div className="mb-4">
        <Image src="https://via.placeholder.com/50" width={50} height={50} alt="X-Ray Clinic Icon" className="mx-auto" />
      </div>
      <h4 className="text-xl font-semibold mb-2 text-black">X-Ray Clinic</h4>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="#" className="text-blue-500">Learn More</a>
    </div>

    {/* Service Card 5 */}
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
      <div className="mb-4">
        <Image src="https://via.placeholder.com/50" width={50} height={50} alt="Pet Checkup Icon" className="mx-auto" />
      </div>
      <h4 className="text-xl font-semibold mb-2 text-black">Pet Checkup</h4>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="#" className="text-blue-500">Learn More</a>
    </div>

    {/* Service Card 6 */}
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
      <div className="mb-4">
        <Image src="https://via.placeholder.com/50" width={50} height={50} alt="Eye Clinic Icon" className="mx-auto" />
      </div>
      <h4 className="text-xl font-semibold mb-2 text-black">Eye Clinic</h4>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="#" className="text-blue-500">Learn More</a>
    </div>
  </div>
</section>

{/* Brands Section */}
<section className="p-8 bg-white text-center">
  <div className="carousel-container flex justify-center overflow-x-auto gap-4 px-12">
    {brandImages.map((brand, index) => (
      <div
        key={index}
        className="carousel-item bg-white-200 rounded-lg  flex-shrink-0 w-48 h-32 flex items-center justify-center text-gray-600 text-xl"
      >
        <Image src={brand} width={100} height={100} alt={`Brand ${index + 1}`} className="w-full h-full object-contain"/>
      </div>
    ))}
  </div>
</section>

      {/* Trading Hours Section */}
<section className="p-8 bg-gray-100 text-center flex flex-col lg:flex-row items-center justify-center">
  <div className="w-full lg:w-1/3 text-left p-6 bg-blue-100 rounded-lg shadow-md mx-auto mb-6 lg:mb-0 lg:ml-20 flex flex-col justify-center">
    <h2 className="text-3xl font-bold mb-4 text-black">Opening Hours</h2>
    <p className="text-sm text-gray-600 mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
    </p>
    <ul className="list-none text-gray-600">
      <li><strong>Mon-Tue:</strong> 9am - 10am</li>
      <li><strong>Wed-Thu:</strong> 8am - 9am</li>
      <li><strong>Fri-Sat:</strong> 7am - 8am</li>
      <li><strong>Sunday:</strong> Closed</li>
    </ul>
  </div>

  <div className="w-full lg:w-2/3 flex flex-wrap justify-center mx-auto lg:mr-10">
    <div className="w-1/2 lg:w-1/3 p-2">
      <Image
        src="https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/dog-sits-at-examination-table-in-veterinary-clinic-2021-10-21-03-38-42-utc.jpg"
        width={1000}
        height={827}
        alt="Veterinarian examining dog"
        className="object-cover w-full h-full rounded-lg shadow-lg"
      />
    </div>
    <div className="w-1/2 lg:w-1/3 p-2">
      <Image
        src="https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/veterinarians-working-with-animals-in-veterinary-c-2021-12-09-15-06-57-utc.jpg"
        width={1000}
        height={827}
        alt="Dog on examination table"
        className="object-cover w-full h-full rounded-lg shadow-lg"
      />
    </div>
    <div className="w-full lg:w-2/3 p-2">
      <Image
        src="https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/happy-veterinarians-playing-with-dog-on-yard-at-ve-2021-08-29-22-51-18-utc-1024x418.jpg"
        width={1024}
        height={418}
        alt="Veterinarian interacting with dog outside"
        className="object-cover w-full h-full rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>


      </main>

      {/* Footer Section */}
      <footer className="p-8 bg-gray-800 text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <Image src="https://via.placeholder.com/150x50" width={150} height={50} alt="vetheal logo" className="mb-4" />
            <p className="mb-2">Phone: +676 5456 5443</p>
            <p className="mb-2">Email: contact@vetheal.com</p>
            <p className="mb-2">Address: London Eye, London UK</p>
            <div className="flex space-x-4 mt-4">
              <a href="#"><Image src="https://via.placeholder.com/24x24" width={24} height={24} alt="Facebook" /></a>
              <a href="#"><Image src="https://via.placeholder.com/24x24" width={24} height={24} alt="Twitter" /></a>
              <a href="#"><Image src="https://via.placeholder.com/24x24" width={24} height={24} alt="YouTube" /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Pages</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Pages</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>          
        </div>
        <div className="mt-8 text-center">
        <p>© {new Date().getFullYear()} - Opti Hog</p>
        </div>
      </footer>

    </div>
  );
}
