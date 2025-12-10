// src/components/ContactInfo.jsx
import { Show } from 'solid-js';

export default function ContactInfo({ items = [], variant = 'default' }) {
  const variants = {
    default: {
      container: 'grid grid-cols-1 md:grid-cols-2 gap-4',
      item: 'group relative flex items-center space-x-3 p-4 bg-gradient-to-br from-blue-950/40 to-purple-950/40 border border-blue-400/30 rounded-xl hover:border-blue-400/60 hover:from-blue-900/60 hover:to-purple-900/60 transition-all duration-200 cursor-pointer backdrop-blur-sm overflow-hidden',
      icon: 'text-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-200 relative z-10',
      text: 'text-blue-100/90 font-medium group-hover:text-blue-200 transition-colors relative z-10'
    },
    banner: {
      container: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4',
      item: 'group relative flex items-center space-x-3 p-3 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-400/40 rounded-lg hover:from-blue-500/40 hover:to-purple-500/40 hover:border-blue-300/60 transition-all duration-200 backdrop-blur-md overflow-hidden',
      icon: 'text-xl group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-200 relative z-10',
      text: 'text-white text-sm md:text-base font-medium group-hover:text-blue-100 transition-colors relative z-10'
    },
    compact: {
      container: 'flex flex-wrap gap-3',
      item: 'group relative inline-flex items-center space-x-2 text-blue-300/80 hover:text-blue-200 transition-colors duration-200',
      icon: 'text-lg group-hover:scale-110 transition-transform duration-200 relative z-10',
      text: 'text-sm font-medium relative z-10'
    },
    footer: {
      container: 'flex flex-col space-y-3',
      item: 'group relative flex items-center space-x-3 text-blue-300/80 hover:text-blue-200 transition-colors duration-200 p-2 rounded-lg hover:bg-blue-500/10 backdrop-blur-sm',
      icon: 'text-lg group-hover:translate-x-1 transition-transform duration-200 relative z-10',
      text: 'text-sm font-medium relative z-10'
    },
    inline: {
      container: 'flex flex-wrap gap-2',
      item: 'group relative inline-flex items-center px-3 py-2 text-sm font-medium text-blue-200 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full hover:from-blue-600/40 hover:to-purple-600/40 hover:border-blue-400/60 transition-all duration-200 backdrop-blur-sm overflow-hidden',
      icon: 'mr-1 group-hover:scale-110 transition-transform duration-200 relative z-10',
      text: 'relative z-10'
    }
  };

  const selectedVariant = variants[variant] || variants.default;

  const getAriaLabel = (info) => {
    if (info.text.includes('@')) return `Email: ${info.text}`;
    if (info.text.includes('+')) return `Phone: ${info.text}`;
    if (info.text.includes('linkedin')) return 'LinkedIn Profile';
    return info.text;
  };

  return (
    <div class={selectedVariant.container}>
      {items.map((info) => (
        <a
          href={info.link || '#'}
          target={info.link && !info.text.includes('Casablanca') ? '_blank' : '_self'}
          rel={info.link && !info.text.includes('Casablanca') ? 'noopener noreferrer' : ''}
          aria-label={getAriaLabel(info)}
          class={selectedVariant.item}
          classList={{
            'pointer-events-none': !info.link
          }}
        >
          {/* Glow effect background */}
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          
          {/* Animated border glow */}
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-purple-400/0 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-20 group-hover:animate-pulse"></div>

          <span class={selectedVariant.icon}>{info.icon}</span>
          
          <Show when={variant !== 'inline'}>
            <span class={selectedVariant.text}>{info.text}</span>
          </Show>
          
          <Show when={variant === 'inline'}>
            <span class={selectedVariant.text}>{info.text.split(' ')[0]}</span>
          </Show>
        </a>
      ))}
    </div>
  );
}