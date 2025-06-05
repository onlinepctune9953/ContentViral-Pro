
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Mike Chen",
      title: "Digital Marketer",
      result: "$12,847 in 30 days",
      quote: "I was spending 6 hours a day on content. Now I spend 30 minutes and make more money than ever. The affiliate integration alone pays for itself 10x over!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jessica Rodriguez",
      title: "Fitness Coach",
      result: "50,000 new followers in 60 days",
      quote: "My engagement skyrocketed because I could finally post consistently across all platforms. The humanizer makes everything sound like I wrote it personally.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b385?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Park",
      title: "Course Creator",
      result: "300% increase in course sales",
      quote: "The content research feature alone is worth $1000+. I can see exactly what my audience wants and create content that converts.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <div className="text-center mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-3"
              />
              <div className="text-2xl font-bold text-green-600 mb-2">
                {testimonial.result}
              </div>
            </div>
            
            <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
            
            <div className="text-center">
              <div className="font-bold text-gray-900">{testimonial.name}</div>
              <div className="text-sm text-gray-600">{testimonial.title}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TestimonialCarousel;
