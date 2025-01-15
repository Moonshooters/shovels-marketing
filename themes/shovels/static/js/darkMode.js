// Initialize dark mode state
document.addEventListener('alpine:init', () => {
    Alpine.store('darkMode', {
        on: localStorage.theme === 'dark' || 
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
        
        toggle() {
            this.on = !this.on;
            if (this.on) {
                document.documentElement.classList.add('dark')
                localStorage.theme = 'dark'
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.theme = 'light'
            }
        }
    })
})

// Initial check for dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
} 