import "../styles/global.css"; // Style this separately

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Delicious Bites</h1>
        <p>Experience the best flavors in town.</p>
        <a href="/menu" className="btn btn-primary">
          View Menu
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
