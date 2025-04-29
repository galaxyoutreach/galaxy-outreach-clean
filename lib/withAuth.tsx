import React from 'react'

export function withAuth<P>(WrappedComponent: React.ComponentType<P>) {
  return function StaticWrapper(props: P) {
    return <WrappedComponent {...props} />
  }
}
