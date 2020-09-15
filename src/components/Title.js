import React from 'react';
import { motion } from "framer-motion"

const Title = ({title}) => {
    return (
        <motion.h1 className="ribbon"
        initial = { { opacity: 0 } }
        animate={{ opacity: 1}}
        transition={{ duration: 0.5 }}
        >
            <strong className="ribbon-content">{title}</strong>
        </motion.h1>
    )
}

export default Title