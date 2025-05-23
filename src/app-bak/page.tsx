'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import LoadingScreen from '@/components/LoadingScreen'

// Dynamically import the 3D portfolio to avoid SSR issues
const Portfolio3D = dynamic(() => import('@/components/Portfolio3D'), {
  ssr: false,
  loading: () => <LoadingScreen />
})

export default function Home() {
  return (
    <main className="h-screen w-full overflow-hidden">
      <Suspense fallback={<LoadingScreen />}>
        <Portfolio3D />
      </Suspense>
    </main>
  )
}
