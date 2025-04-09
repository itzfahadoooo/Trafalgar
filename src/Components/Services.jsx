import React from 'react'

const services = [
    {
      id: 1,
      icon: '🔍', // Replace with the actual icon or image path
      title: 'Search doctor',
      description: 'Choose your doctor from thousands of specialists, general, and trusted hospitals.',
    },
    {
      id: 2,
      icon: '💊', // Replace with the actual icon or image path
      title: 'Online pharmacy',
      description: 'Buy your medicines with our mobile application with a simple delivery system.',
    },
    {
      id: 3,
      icon: '📋', // Replace with the actual icon or image path
      title: 'Consultation',
      description: 'Free consultation with our trusted doctors and get the best recommendations.',
    },
    {
      id: 4,
      icon: '📄', // Replace with the actual icon or image path
      title: 'Details info',
      description: 'Free consultation with our trusted doctors and get the best recommendations.',
    },
    {
      id: 5,
      icon: '🚑', // Replace with the actual icon or image path
      title: 'Emergency care',
      description: 'You can get 24/7 urgent care for yourself or your children and your lovely family.',
    },
    {
      id: 6,
      icon: '📊', // Replace with the actual icon or image path
      title: 'Tracking',
      description: 'Track and save your medical history and health data.',
    },
  ];
const Services = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1280px] mx-auto items-center py-6 px-8 md:px-16'>
            <h1>Our Services</h1>
            <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-[40px] mb-4">{service.icon}</div>
              <h2 className="text-[20px] font-bold mb-2">{service.title}</h2>
              <p className="text-[#7D7987] text-[16px]">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#458FF6] text-white text-[18px] font-bold py-3 px-6 rounded-[55px] hover:bg-[#2563eb] transition-colors duration-300">
            Learn more
          </button>
        </div>
        </div>
    </div>
  )
}

export default Services