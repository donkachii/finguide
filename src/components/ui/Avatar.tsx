import React from 'react'
interface AvatarProps {
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  initials?: string
  className?: string
}
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  size = 'md',
  initials,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-lg',
  }
  return (
    <div
      className={`relative rounded-full flex items-center justify-center overflow-hidden bg-[#0B1F3A] text-white ${sizeClasses[size]} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      ) : (
        <span className="font-medium">{initials}</span>
      )}
    </div>
  )
}
