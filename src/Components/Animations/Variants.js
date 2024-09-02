const Variants = {
    moveRight: {
        offscreen: {
        x: -100,
        opacity: 0,
        },
        onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 3.0
        }
        }
    },

    moveLeft: {
        offscreen: {
            x: 100,
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 3.0
            }
        }
    },

    moveRightMobile: {
        offscreen: {
        // x: -20,
        y: 50,
        opacity: 0,
        },
        onscreen: {
        // x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 3.0
        }
        }
    },

    moveLeftMobile: {
        offscreen: {
            // x: 20,
            y: 50,
            opacity: 0
        },
        onscreen: {
            // x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 3.0
            }
        }
    },

    fadeIn: {
        offscreen: {
            opacity: 0,
            y: 50,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 3.0
            }
        }
    }
}

export default Variants;