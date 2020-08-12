
function useDevice() {
    return {
        mob: window.innerWidth < 768,
        tab: window.innerWidth > 768 && window.innerWidth < 1023,
        web: window.innerWidth > 1023,
        hideMob: (window.innerWidth > 1023) || (window.innerWidth > 768 && window.innerWidth < 1023)
    };
}

export default useDevice;