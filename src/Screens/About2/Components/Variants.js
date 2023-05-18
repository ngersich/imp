import React from "react";

const Variants = {
    moveRight: {
        offscreen: {
        x: -500
        },
        onscreen: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 2.0
        }
        }
    },

    moveLeft: {
        offscreen: {
            x: 500
        },
        onscreen: {
            x: 0,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 2.0
            }
        }
    },

    fadeIn: {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.0,
                duration: 3.0
            }
        }
    }
}

export default Variants;