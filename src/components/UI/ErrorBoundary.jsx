import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('🔴 ErrorBoundary caught:', error)
    console.error('Error Info:', errorInfo)
    this.setState({ errorInfo })
    
    // TODO: Send to Sentry/error service
    // Sentry.captureException(error, { contexts: { react: errorInfo } })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-[#fbf9f9]">
          <div className="text-center p-8 max-w-md">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-3xl font-bold mb-2 text-[#1b1c1c]">Oops! Something went wrong</h1>
            <p className="text-gray-600 mb-2 text-sm">{this.state.error?.message}</p>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 text-left bg-gray-100 p-4 rounded text-xs overflow-auto max-h-48">
                <summary className="cursor-pointer font-bold mb-2">Error Details</summary>
                <pre className="whitespace-pre-wrap">{this.state.error?.stack}</pre>
              </details>
            )}
            <div className="flex gap-3 mt-6 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-[#5c4a00] text-white rounded-lg hover:bg-[#3d3300] transition"
              >
                Reload Page
              </button>
              <button
                onClick={() => window.history.back()}
                className="px-6 py-2 border border-[#5c4a00] text-[#5c4a00] rounded-lg hover:bg-[#fbf9f9] transition"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}