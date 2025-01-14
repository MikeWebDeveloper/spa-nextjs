'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').min(10, 'Message is too short'),
});

type FormData = yup.InferType<typeof schema>;

const contactInfo = {
  address: '123 Business Street, City, Country',
  email: 'contact@business.com',
  phone: '+1 (555) 123-4567',
  location: { lat: 40.7128, lng: -74.0060 }, // New York coordinates
  socials: [
    { name: 'Twitter', icon: 'twitter', link: '#' },
    { name: 'LinkedIn', icon: 'linkedin', link: '#' },
    { name: 'Facebook', icon: 'facebook', link: '#' },
    { name: 'Instagram', icon: 'instagram', link: '#' },
  ],
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Here you would typically send the form data to your backend
    console.log(data);
    reset();
    alert('Message sent successfully!');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">Get in Touch</h3>
          <p className="text-gray-600">
            Have a question or want to work together? Fill out the form below and we'll get back to you
            as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              {...register('subject')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              {...register('message')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information & Map */}
      <div className="space-y-8">
        {/* Contact Information */}
        <div className="bg-gray-50 rounded-lg p-6 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <svg
                className="w-6 h-6 text-blue-600 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h4 className="font-medium text-gray-900">Address</h4>
                <p className="text-gray-600">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg
                className="w-6 h-6 text-blue-600 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h4 className="font-medium text-gray-900">Email</h4>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg
                className="w-6 h-6 text-blue-600 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <h4 className="font-medium text-gray-900">Phone</h4>
                <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:underline">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t pt-6">
            <h4 className="font-medium text-gray-900 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {contactInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* You can add specific social media icons here */}
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="h-[300px] rounded-lg overflow-hidden">
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={contactInfo.location}
              zoom={13}
            >
              <Marker position={contactInfo.location} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
} 