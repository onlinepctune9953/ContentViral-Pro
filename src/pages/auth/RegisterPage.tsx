
import React from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import RegisterForm from '@/components/auth/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <AuthLayout
      title="Get started today"
      subtitle="Create your ContentViral Pro account"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
