import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { siteConfig } from '@/config/seo'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    // Dynamic params
    const title = searchParams.get('title') || siteConfig.name
    const mode = searchParams.get('mode') || 'light'
    const type = searchParams.get('type') || 'default'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: mode === 'dark' ? '#000' : '#fff',
            color: mode === 'dark' ? '#fff' : '#000',
            fontFamily: 'system-ui',
          }}
        >
          {/* Gradient Background */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: mode === 'dark' ? '#000' : '#fff',
              backgroundImage:
                mode === 'dark'
                  ? 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)'
                  : 'radial-gradient(circle at 25px 25px, #eee 2%, transparent 0%), radial-gradient(circle at 75px 75px, #eee 2%, transparent 0%)',
              backgroundSize: '100px 100px',
            }}
          />
          
          {/* Content Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              maxWidth: '80%',
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                style={{ transform: 'scale(1.5)' }}
              >
                <rect
                  width="48"
                  height="48"
                  rx="8"
                  fill={mode === 'dark' ? '#fff' : '#000'}
                />
                <path
                  d="M24 12.5L35 28H13L24 12.5Z"
                  fill={mode === 'dark' ? '#000' : '#fff'}
                />
              </svg>
              <span
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  letterSpacing: '-0.05em',
                }}
              >
                YARM
              </span>
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: 64,
                fontWeight: 900,
                letterSpacing: '-0.05em',
                lineHeight: 1.1,
                marginBottom: '1rem',
                textWrap: 'balance',
              }}
            >
              {title}
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: 28,
                fontWeight: 400,
                opacity: 0.8,
                marginBottom: '2rem',
              }}
            >
              {siteConfig.description}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: unknown) {
    console.error('OG Image generation failed:', e instanceof Error ? e.message : 'Unknown error')
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
} 