import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: 'Ayush Rana',
    feedback: 'They provides an amazing service! Highly recommended.',
    designation: 'DY PATIL',
  },
  {
    id: 2,
    name: 'Prashant Yadav',
    feedback: 'I was blown away by the quality and support.',
    designation: 'SRM',
  },
  {
    id: 3,
    name: 'Vineet Raj',
    feedback: 'A seamless experience of quality services from start to finish.',
    designation: 'VIT VELLORE',
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full mt-16 bg-gray-100">
    <div className="w-4/5 mx-auto text-center py-10 rounded-lg">
      <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-gray-800">What Our <span className='text-primary'>STUDENTS</span> Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-6">
            <p className="italic text-gray-600 mb-4">"{testimonial.feedback}"</p>
            <p className="font-semibold text-gray-800">- {testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default TestimonialSection;