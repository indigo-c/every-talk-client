import React from 'react';
import BaseLayout from '@/components/organisms/layout/BaseLayout';
import Image from 'next/image';
import KakaoLoginButton from '@/components/molecules/button/KakaoLoginButton';
import NextHead from '@/components/atoms/inc/NextHead';

interface ILoginPageProps {}

function LoginPage(props: ILoginPageProps) {
  return (
    <>
      <NextHead pageTitle="모두의 톡 - 로그인" />
      <BaseLayout>
        <div className="bg-primary-50 h-full flex justify-center items-center">
          <KakaoLoginButton />
        </div>
      </BaseLayout>
    </>
  );
}

export default LoginPage;
