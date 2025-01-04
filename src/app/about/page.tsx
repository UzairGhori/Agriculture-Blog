import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <main className="flex flex-col justify-center items-center p-6 min-h-screen">
      <h1 className="text-7xl font-bold mb-8 text-center font-[Poppins] animate-bounce">About Us</h1>
      <p className="text-xl mb-4 text-center max-w-3xl">
        Welcome to our AgriBlog! We are a passionate team of farmers, researchers, and environmental enthusiasts dedicated to sharing knowledge and best practices for sustainable farming. Our goal is to empower farmers with innovative ideas, practical advice, and insights into the latest agricultural technologies.
      </p>
      <p className="text-lg mb-4 text-center max-w-3xl">
        Our blog covers a wide range of topics including crop rotation, organic farming, water management, and more. Whether you are a seasoned farmer or someone new to the world of agriculture, we strive to provide valuable content that helps improve farming practices, promotes sustainability, and nurtures the future of agriculture.
      </p>
      <p className="text-lg text-center max-w-3xl">
        Thank you for visiting our blog, and we hope you find the information helpful and inspiring!
      </p>
    </main>
  );
};

export default AboutUs;
