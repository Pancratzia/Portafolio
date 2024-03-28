import Footer from "./Footer"
import Header from "./Header"
import PropTypes from "prop-types"
import { motion } from "framer-motion";

const MainLayout = ({ children, title, pageName }) => {
  return (
    <motion.div
      className="min-h-screen py-6 md:pb-0 font-d"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <Header title={title} pageName={pageName} />

      {children}

      <Footer />
      
    </motion.div>
  )
}

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  pageName: PropTypes.string
}