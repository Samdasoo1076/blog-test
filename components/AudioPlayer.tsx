import { useState, useRef, RefObject } from 'react'

interface AudioPlayerProps {
  audioSrc: string
}
//사용하려면 <AudioPlayer audioSrc= 필수입력
export default function AudioPlayer({ audioSrc }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef: RefObject<HTMLAudioElement> = useRef(null)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="fixed left-0 top-0 m-4 flex items-center rounded-lg bg-gray-800 p-4 shadow-lg">
      <audio ref={audioRef} src={audioSrc} controls>
        <track kind="captions" />
      </audio>
      <button onClick={togglePlayPause} className="ml-2 text-white">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}
