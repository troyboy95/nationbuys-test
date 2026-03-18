'use client'
import { useEffect, useState } from 'react'

const FLOATING_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800',
    style: { top: '18%', right: '8%', width: '180px' },
    mobileStyle: { top: '12%', right: '4%', width: '110px' },
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
    style: { bottom: '18%', right: '12%', width: '220px' },
    mobileStyle: { bottom: '22%', right: '4%', width: '130px' },
  },
]

export default function ContactHero() {
  const [loaded, setLoaded] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setLoaded(true)

    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 12,
        y: (e.clientY / window.innerHeight - 0.5) * 12,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '560px',
        width: '100%',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85&auto=format"
        alt="Luxury Real Estate"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.3) contrast(1.1)',
          transform: loaded ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 8s ease',
        }}
      />

      {/* Overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: isMobile
          ? 'linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.6))'
          : 'linear-gradient(to right, rgba(0,0,0,0.92), rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent 60%)',
      }} />

      {/* Floating Frames — hidden on very small screens */}
      {!isMobile && FLOATING_IMAGES.map((img, i) => {
        const depth = (i + 1) * 0.5
        const currentStyle = isMobile ? img.mobileStyle : img.style

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              ...currentStyle,
              transform: `translate(${mouse.x * depth}px, ${mouse.y * depth}px)`,
              transition: 'transform 0.2s ease-out',
              zIndex: 2,
              opacity: 0.9,
            }}
          >
            <div
              style={{
                padding: '4px',
                borderRadius: '8px',
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(201,168,76,0.7)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.8)',
              }}
            >
              <img
                src={img.src}
                alt="Property"
                style={{
                  width: '100%',
                  height: isMobile ? '140px' : '240px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                  filter: 'brightness(0.9)',
                }}
              />
            </div>
          </div>
        )
      })}

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: isMobile ? '0 1.5rem' : '0 6rem',
          maxWidth: isMobile ? '100%' : '1000px',
        }}
      >
        {/* Eyebrow */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}>
          <div style={{
            width: '30px',
            height: '1px',
            background: 'linear-gradient(90deg,#E2C07A,#C9A84C)',
          }} />
          <span style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            color: '#C9A84C',
            textTransform: 'uppercase',
          }}>
            Contact
          </span>
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: isMobile ? 'clamp(2.4rem, 10vw, 3.5rem)' : 'clamp(3rem, 6vw, 5.8rem)',
          fontWeight: 300,
          lineHeight: 1.05,
          marginBottom: '1.2rem',
          color: 'rgba(255,255,255,0.95)',
        }}>
          Let's Discuss
          <br />
          <span style={{
            background: 'linear-gradient(135deg,#E2C07A,#C9A84C,#A07830)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Your Next Investment
          </span>
        </h1>

        {/* Description */}
        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.9rem',
          color: 'rgba(255,255,255,0.5)',
          maxWidth: isMobile ? '100%' : '420px',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}>
          Connect with our advisory team for exclusive opportunities,
          strategic insights, and premium real estate investments.
        </p>

        
      </div>

      {/* Vertical Tagline — hidden on mobile */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          writingMode: 'vertical-rl',
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          color: 'rgba(255,255,255,0.18)',
          zIndex: 3,
        }}>
          PRIME • LUXURY • REAL ESTATE
        </div>
      )}

      <style>{`
        @media (max-width: 480px) {
          section { min-height: 100svh; }
        }
      `}</style>
    </section>
  )
}