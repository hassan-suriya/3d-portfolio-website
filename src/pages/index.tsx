import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import LoadingScreen from '@/components/LoadingScreen'

// Dynamically import the 3D portfolio to avoid SSR issues
const Portfolio3D = dynamic(() => import('@/components/Portfolio3D'), {
  ssr: false,
  loading: () => <LoadingScreen />
})

export default function Home() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Suspense fallback={<LoadingScreen />}>
        <ErrorBoundary>
          <Portfolio3D />
        </ErrorBoundary>
      </Suspense>
    </div>
  )
}

// Simple error boundary for catching 3D rendering errors
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
          <p className="mb-6">There was an error loading the 3D content</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 shadow-lg"
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
