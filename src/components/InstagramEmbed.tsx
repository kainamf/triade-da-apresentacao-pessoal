// Declaração global para o objeto instgrm do Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
import { useEffect, useRef } from 'react';

interface InstagramEmbedProps {
  url: string;
  maxWidth?: number;
  className?: string;
}

export default function InstagramEmbed({
  url,
  maxWidth = 540,
  className = '',
}: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => window.instgrm?.Embeds.process();
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={`w-full flex justify-center mx-auto ${className}`}
      style={{ maxWidth }}
    >
      <blockquote
        className="instagram-media w-full"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#fff',
          border: 0,
          margin: '0 auto',
          width: '100%',
        }}
      ></blockquote>
    </div>
  );
}
