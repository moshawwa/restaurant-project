
import { Link } from 'react-router-dom';
import "../styles/global.css";

const HeroSection = () => {
  return (
    <section 
      className="hero" 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}
    >
      <div className="hero-content">
        <h1 className="display-3 fw-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Welcome to AL-Shawwa Restaurant
        </h1>
        <p className="lead mb-5" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
          Experience the finest dining with our authentic cuisine
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <Link to="/menu" className="btn btn-danger btn-lg px-4 py-2">
            View Menu
          </Link>
          <Link to="/contact" className="btn btn-outline-light btn-lg px-4 py-2">
            Book a Table
          </Link>
        </div>
      </div>
      
      <div 
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}
      >
        <i className="fas fa-chevron-down fa-2x text-white"></i>
      </div>

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-20px);
            }
            60% {
              transform: translateY(-10px);
            }
          }
          .hero-content {
            max-width: 800px;
            padding: 20px;
          }
          .btn {
            transition: all 0.3s ease;
          }
          .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
