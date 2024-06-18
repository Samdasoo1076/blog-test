import Image from 'next/image'

interface Props {
  title: string
  images?: string[] // images props를 선택적으로 설정
}

const CoverImage: React.FC<Props> = ({ title, images = [] }) => {
  // images에 기본값 [] 설정
  const imageUrl = images.length > 0 ? images[0] : '/static/images/default-cover-image.jpg'

  return (
    <div className="relative h-64 w-full">
      <Image
        src={imageUrl}
        alt={`Cover Image for ${title}`}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  )
}

export default CoverImage
