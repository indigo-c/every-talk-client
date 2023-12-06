import React from 'react';
import KakaoButtonImage from '@/assets/images/button/kakao_login_medium_wide.png';
import Image from 'next/image';

interface IKakaoLoginButtonProps {}

function KakaoLoginButton(props: IKakaoLoginButtonProps) {
  return (
    <button>
      <Image
        src={KakaoButtonImage}
        alt="카카오 로그인 버튼"
        width={300}
        height={45}
        priority
      />
    </button>
  );
}

export default KakaoLoginButton;
