import { createContext, useContext } from 'react'

// Create Context object.
const TestimonialContext = createContext()

// Export Provider.
export function TestimonialProvider(props) {
    const { value, children } = props

    return (
        <TestimonialContext.Provider value={value}>
            {children}
        </TestimonialContext.Provider>
    )
}

// Export useContext Hook.
export function useMenuContext() {
    return useContext(TestimonialContext);
}