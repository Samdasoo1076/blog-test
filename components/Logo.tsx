// components/Logo.tsx

import React from 'react'
import Image from './Image'
// 로고 이미지 경로를 지정하세요.
import LogoImage from '../public/static/images/Doje.png'

const Logo: React.FC = () => (
  <div className="relative h-32 w-24">
    <Image src={LogoImage} alt="Logo" layout="fill" objectFit="contain" />
  </div>
)

export default Logo
