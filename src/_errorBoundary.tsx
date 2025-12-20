import React from 'react'
import { InternalServerErrorUI } from './errors'

interface ErrorBoundaryProps {
    children: React.ReactNode
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
    state = { hasError: false }
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log('Error caught in Error Boundary:', error, errorInfo) // TODO: Create a Logger
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <InternalServerErrorUI
                    errorMessage={'An unexpected error occurred.'}
                    onRetry={() => globalThis.location.reload()}
                />
            )
        }

        return this.props.children
    }
}
export default ErrorBoundary
