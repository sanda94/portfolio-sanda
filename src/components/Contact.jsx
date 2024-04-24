import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.div whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 1.5 }} 
    className="border-b border-neutral-900 p-4">
        <h2 className="my-20 text-center text-neutral-900 text-4xl"> Get in
        <span className="text-neutral-900"> Touch</span>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="#" className="border-b">{CONTACT.email}</a>

        </div>
      </h2>
      
    </motion.div>
  )
}

export default Contact
