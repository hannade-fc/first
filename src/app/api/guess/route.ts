import { NextRequest, NextResponse } from 'next/server'
import { generateBase64Image as generateBase64Image } from '@/utils/image'

async function getResponse(req: NextRequest): Promise<NextResponse> {

const image = await generateBase64Image();

  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>Magic 8 ball</title>        
    <meta property="fc:frame" content="vNext" />    
    <meta property="fc:frame:image" content="data:image/png;base64,${image}"/>
    <meta property="fc:frame:image:aspect_ratio" content="1:1"/> 
    <meta property="og:image" content="${process.env.NEXT_PUBLIC_SITE_URL}/preview.gif" />
    <meta property="fc:frame:button:1" content="Shake again" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/guess" />
  </head></html>`)
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req)
}
