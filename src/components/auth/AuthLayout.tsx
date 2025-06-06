
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          {subtitle && (
            <p className="text-gray-600">{subtitle}</p>
          )}
        </div>
        
        <Card className="shadow-xl border-0">
          <CardContent className="p-8">
            {children}
          </CardContent>
        </Card>
        
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>© 2024 ContentViral Pro. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
