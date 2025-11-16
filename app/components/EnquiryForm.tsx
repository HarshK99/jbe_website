'use client';

import { useState } from 'react';
import { Button, Input, Select, Textarea } from './ui';

interface FormData {
  name: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  description: string;
}

const countries = [
  { value: 'IN', label: 'India' },
  { value: 'US', label: 'United States' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'CA', label: 'Canada' },
  { value: 'AU', label: 'Australia' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'JP', label: 'Japan' },
  { value: 'CN', label: 'China' },
  { value: 'BR', label: 'Brazil' },
];

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    description: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        description: '',
      });
      setErrors({});
    }
  };

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-3">Thank You!</h2>
            <p className="text-base text-gray-700 mb-3">
              Your enquiry has been submitted successfully. We will get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="px-4 py-2">Submit Another Enquiry</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="enquiry" className="py-12 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Request a Quote</h2>
            <p className="text-sm text-gray-600">We will get back to you within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid md:grid-cols-2 gap-3">
              <Input
                label="Name *"
                value={formData.name}
                onChange={handleChange('name')}
                error={errors.name}
                required
              />
              <Input
                label="Company Name"
                value={formData.companyName}
                onChange={handleChange('companyName')}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Contact Person"
                value={formData.contactPerson}
                onChange={handleChange('contactPerson')}
              />
              <Input
                label="Email *"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                error={errors.email}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Phone *"
                type="tel"
                value={formData.phone}
                onChange={handleChange('phone')}
                error={errors.phone}
                placeholder="+91 XXXXX XXXXX"
                required
              />
              <Select
                label="Country"
                value={formData.country}
                onChange={handleChange('country')}
                options={countries}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="City"
                value={formData.city}
                onChange={handleChange('city')}
              />
              <div></div> {/* Empty div for grid alignment */}
            </div>

            <Textarea
              label="Description"
              value={formData.description}
              onChange={handleChange('description')}
              placeholder="Please provide details about your enquiry..."
            />

            <div className="text-center">
              <Button type="submit" className="w-full md:w-auto px-4 py-2">
                Submit to Get Quote Now
              </Button>
            </div>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">We respect your privacy</p>
          </div>
        </div>
      </div>
    </section>
  );
}