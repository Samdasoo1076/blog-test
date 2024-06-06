interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '롯데렌터카 단기개선 PJT',
    description: `기간 : 2024-02-28 ~ 2024-04-25 다국어 홈페이지 개발 및 관리자 페이지 개발, 운영자 메뉴얼 작성 및 CS 를 담당 했습니다.
    `,
    imgSrc: '/static/images/lotte.png',
    href: 'https://www.lotterentacar.net/hp/eng/reservation/index.do?LANG=eng',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
