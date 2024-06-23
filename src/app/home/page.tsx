import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Magic 8 ball Frame',
  description: 'A Farcaster magic 8 ball',
  openGraph: {
    title: 'Magic 8 ball Frame',
    description: 'A magic 8 ball',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/preview.gif`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_SITE_URL}/preview.gif`,
    'fc:frame:image:aspect_ratio': '1:1',
    'fc:frame:post_url': `${process.env.NEXT_PUBLIC_SITE_URL}/api/guess`,
    'fc:frame:button:1': 'Ask the Cube',
  },
}

export default function Page() {
  return (
    <div>
      <h1>Magic 8 ball</h1>
    </div>
  )
}
