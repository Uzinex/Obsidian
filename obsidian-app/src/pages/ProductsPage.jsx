const products = [
  {
    name: 'Aegis Plates',
    summary: 'Adaptive armor tiles that redirect thermal shock and kinetic force for aerospace hulls and orbital stations.',
    specs: ['Thermal rating: 6,000°C', 'Weight reduction: 42%', 'Self-healing crystalline mesh'],
  },
  {
    name: 'Helios Lattice',
    summary: 'Transparent energy conduits for solar megastructures, capturing and rerouting plasma-level heat with elegance.',
    specs: ['Quantum light routing', 'Radiant efficiency: 98%', 'Anti-corrosive ion layer'],
  },
  {
    name: 'Obsidian Core',
    summary: 'Geothermal reactors scaled for off-world colonies, blending magma flow with superconductive stabilization.',
    specs: ['Zero-emission plasma crucible', 'Autonomous fault prediction', 'Closed-loop cooling systems'],
  },
]

const ProductsPage = () => {
  return (
    <div className="page">
      <header className="page-header">
        <span className="page-subheading">Our Products</span>
        <h1>Artifacts of volcanic brilliance</h1>
        <p className="page-lede">
          Each Obsidian product embodies centuries of geothermal wisdom refined by quantum-age artisans. Explore a collection
          engineered for resilience, luminosity, and ethical power.
        </p>
      </header>

      <section className="page-grid">
        {products.map((product) => (
          <article key={product.name} className="glass-card">
            <h3>{product.name}</h3>
            <p>{product.summary}</p>
            <ul>
              {product.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  )
}

export default ProductsPage
