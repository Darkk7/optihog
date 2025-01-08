"use client"

import React from "react";
import Link from "next/link";
import NavBar from '../Navbar';

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <section className="flex items-center justify-center p-8 bg-gray-100">
        <div className="w-1/4 pr-4">
          <h2 className="text-2xl font-bold text-blue-600">About Opti Hog</h2>
        </div>
        <div className="w-1/3 pl-4 text-black">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. 
            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. 
            Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
          </p>
        </div>
      </section>
      <section className="w-full bg-gray-200 py-8">
  <div className="flex justify-center w-full px-8">
    <div className="text-center mx-12">
      <div className="text-5xl font-bold text-black">20</div>
      <div className="text-md text-black">Years Experience</div>
    </div>
    <div className="text-center mx-12">
      <div className="text-5xl font-bold text-black">100+</div>
      <div className="text-md text-black">Happy Clients</div>
    </div>
    <div className="text-center mx-12">
      <div className="text-5xl font-bold text-black">100+</div>
      <div className="text-md text-black">Cases Completed</div>
    </div>
    <div className="text-center mx-12">
      <div className="text-5xl font-bold text-black">34</div>
      <div className="text-md text-black">Team Expert</div>
    </div>
  </div>
</section>


    </div>
  );
};

export default AboutUs;
