import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/Logo-Vetheal.png"
            alt="Vetheal Logo"
            width="150"
            height="100"
            className="h-12"
          />
        </div>

        {/* Navigation Menu */}
        <ul className="flex gap-6 items-center">
          <li className="relative group">
            <a
              href="https://kitpro.site/vetheal/template-kit/home/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </a>
          </li>
          <li className="relative group">
            <a
              href="https://kitpro.site/vetheal/template-kit/about-us/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About Us
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Services
            </a>
            <ul className="absolute left-0 hidden mt-2 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block">
              <li>
                <a
                  href="https://kitpro.site/vetheal/template-kit/services/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="https://kitpro.site/vetheal/template-kit/services-detail/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Services Detail
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Page
            </a>
            <ul className="absolute left-0 hidden mt-2 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block">
              <li>
                <a
                  href="https://kitpro.site/vetheal/template-kit/team/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="https://kitpro.site/vetheal/template-kit/blog/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://kitpro.site/vetheal/template-kit/faqs/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="https://kitpro.site/vetheal/template-kit/testimonials/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

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

    {/* Smaller Image to the Right */}
    <div className="hidden lg:block w-1/4">
      <img
        src="https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/european-cat-2021-08-26-18-00-50-utc.png"
        alt="Pet Image"
        className="object-cover w-full h-full rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

{/* About Me Section */}
<section className="p-8 bg-white text-center">
  <div className="flex items-center justify-center gap-6">
    {/* Image to the Left (Smaller Size) */}
    <div className="w-1/6">
      <img
        src="https://via.placeholder.com/200x200"
        alt="About Me Image"
        className="object-cover w-full h-full rounded-lg shadow-lg"
      />
    </div>

    {/* Text Content to the Right */}
    <div className="w-2/3 max-w-xl text-left">
      <h3 className="text-xl font-semibold mb-2 text-black">Lorem Ipsum Dolor Sit Amet</h3>
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
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Service Card 1 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-xl font-semibold mb-2 text-black">Service 1</h4>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    {/* Service Card 2 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-xl font-semibold mb-2 text-black">Service 2</h4>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    {/* Service Card 3 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-xl font-semibold mb-2 text-black">Service 3</h4>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    {/* Service Card 4 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-xl font-semibold mb-2 text-black">Service 4</h4>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    {/* Service Card 5 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-xl font-semibold mb-2 text-black">Service 5</h4>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    {/* Service Card 6 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-xl font-semibold mb-2 text-black">Service 6</h4>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
</section>


      </main>

      {/* Footer */}
      <footer className="p-6 bg-gray-800 text-white text-center">
        <p>© {new Date().getFullYear()} Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
