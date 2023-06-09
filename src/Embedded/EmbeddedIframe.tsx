declare global {
  interface Window {
    SignWellEmbed: any
  }
}

import { useEffect } from 'react'

export interface SignWellEmbedComponentProps {
  embeddedSigningUrl: string
}

export const SignWellEmbedComponent = ({ embeddedSigningUrl }: SignWellEmbedComponentProps) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://static.signwell.com/assets/embedded.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const signWellEmbed = new window.SignWellEmbed({
        url: embeddedSigningUrl,
      })
      signWellEmbed.open();
    }
    return () => {
      document.body.removeChild(script)
    }
  }, [embeddedSigningUrl])

  return null
}
