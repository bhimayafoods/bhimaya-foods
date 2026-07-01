import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h2>
            <p className="text-gray-600 mb-6">
              The application encountered a runtime error. This might be due to corrupted data or a temporary issue.
            </p>
            <div className="bg-gray-50 p-4 rounded text-left mb-6 overflow-auto max-h-40">
              <code className="text-xs text-red-500">{this.state.error?.toString()}</code>
            </div>
            <button
              onClick={() => {
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = '/';
              }}
              className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition"
            >
              Clear Data & Restart
            </button>
            <p className="mt-4 text-xs text-gray-400">
              Tip: Clearing data usually fixes issues caused by corrupted cart information.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
