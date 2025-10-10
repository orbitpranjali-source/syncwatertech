import { Droplets, Zap, Gauge, ThermometerSun, Activity, FlaskConical } from 'lucide-react';
import heroWaterImage from '../assets/products/hero-section.jpg';
import subHeadingImage from '../assets/products/sub-heading.jpg';
import { buildProductsData, type ProductGroup } from '../data/products';
import { RAW_SUB_PRODUCTS } from '../data/rawProducts';
import iconProductsSolutions from '../assets/icon/Products & Solutions.png';
import iconWTP from '../assets/icon/Water Treatment Plants.png';
import iconSTP from '../assets/icon/Sewage Treatment Plants.png';
import iconRO from '../assets/icon/Reverse Osmosis Systems.png';
import iconETP from '../assets/icon/Effluent Treatment Plants.png';
import iconPLC from '../assets/icon/plc-control-panel.png';
import iconIoT from '../assets/icon/iot-sensors.png';
// Raw products now live in src/data/rawProducts to avoid HMR issues

interface ProductsPageProps {
  onNavigate?: (page: string) => void;
}

// Export raw data builder so App can create product index for details routing
export function getRawProducts() {
  return RAW_SUB_PRODUCTS as unknown as Array<{
    category: string;
    items: Array<{ name: string; image: string; paragraphs?: string[]; bullets?: string[] }>;
  }>;
}

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  const productCategories = [
    {
      icon: Droplets,
      image: iconWTP,
      title: 'Water Treatment Plants',
      description: 'Complete WTP solutions for municipal and industrial applications',
      features: [
        'Capacity: 1 MLD to 100 MLD',
        'Multi-stage filtration',
        'Chemical dosing systems',
        'Automated backwash',
        'Real-time quality monitoring'
      ]
    },
    {
      icon: FlaskConical,
      image: iconSTP,
      title: 'Sewage Treatment Plants',
      description: 'Advanced STP systems with automated controls',
      features: [
        'Biological treatment process',
        'Tertiary treatment options',
        'Sludge management',
        'Odor control systems',
        'Effluent quality monitoring'
      ]
    },
    {
      icon: Activity,
      image: iconRO,
      title: 'Reverse Osmosis Systems',
      description: 'High-efficiency RO plants for pure water production',
      features: [
        'Energy-efficient membranes',
        'Auto-flush systems',
        'TDS monitoring',
        'Compact modular design',
        'Low maintenance operation'
      ]
    },
    {
      icon: Gauge,
      image: iconETP,
      title: 'Effluent Treatment Plants',
      description: 'Industrial wastewater treatment solutions',
      features: [
        'Custom process design',
        'Zero liquid discharge options',
        'Chemical treatment',
        'Automated pH control',
        'Compliance monitoring'
      ]
    },
    {
      icon: Zap,
      image: iconPLC,
      title: 'PLC Control Panels',
      description: 'Intelligent automation and control systems',
      features: [
        'Programmable logic controllers',
        'HMI touch panels',
        'Remote monitoring',
        'Alarm management',
        'Data logging'
      ]
    },
    {
      icon: ThermometerSun,
      image: iconIoT,
      title: 'IoT Sensors',
      description: 'Smart sensors for water quality and flow monitoring',
      features: [
        'pH, turbidity, chlorine sensors',
        'Flow meters',
        'Pressure transmitters',
        'Level sensors',
        'Wireless connectivity'
      ]
    }
  ];

  // Local alias for rendering
  const subProducts = RAW_SUB_PRODUCTS as unknown as Array<{
    category: string;
    items: Array<{ name: string; image: string; paragraphs?: string[]; bullets?: string[] }>;
  }>;
  // Build enriched data with slugs for linking
  const groups: ProductGroup[] = buildProductsData(
    subProducts as unknown as Array<{
      category: string;
      items: Array<{ name: string; image: string; paragraphs?: string[]; bullets?: string[] }>;
    }>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative text-white py-20">
        <img
          src={heroWaterImage}
          alt="Digital water management and monitoring"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {iconProductsSolutions ? (
                <img src={iconProductsSolutions} alt="Products & Solutions icon" className="icon-img mx-auto mb-6" />
              ) : (
              <Droplets className="h-16 w-16 mx-auto mb-6 opacity-90" />
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Products & Solutions
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                Advanced water treatment technologies and automation systems
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8 border border-gray-100"
              >
                <div className="icon-wrap mb-6 mx-auto">
                  {category.image ? (
                    <img src={category.image} alt={`${category.title} icon`} className="icon-img icon-hover" />
                  ) : (
                    <category.icon className="h-10 w-10 text-[#0073bc] mx-auto" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-[#0073bc] mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subproducts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {groups.map((group, gIdx) => (
            <div key={gIdx} className="mb-16">
              <div className="relative rounded-xl overflow-hidden mb-6">
                <img src={subHeadingImage} alt="Section background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 py-8 px-4 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {group.category}
                  </h2>
                </div>
              </div>
              <div className={`${
                group.category === 'Cameras & Vision'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  : group.category === 'Analyzers & Transmitters'
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-8'
                  : group.category === 'Valves & Piping'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  : group.category === 'Jointing Machines'
                  ? 'grid grid-cols-1 md:grid-cols-3'
                  : group.category.startsWith('Rosemount')
                  ? 'grid grid-cols-1 md:grid-cols-2'
                  : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              } gap-6`}>
                {group.items.map((p, pIdx) => (
                  <div
                    key={pIdx}
                    className={`group bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full ${
                      group.category === 'Analyzers & Transmitters' ? 'md:col-span-1' : ''
                    } ${group.category === 'Flow Meters' ? 'min-h-[360px] md:min-h-[380px] px-6' : 'min-h-[320px] md:min-h-[340px] px-4'}`}
                  >
                    <button
                      onClick={() => onNavigate && onNavigate(`product:${p.slug}`)}
                      className="w-full text-left focus:outline-none"
                  >
                    <div className="overflow-hidden bg-gray-50">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className={`${
                          group.category.startsWith('Rosemount') ? 'w-11/12 mx-auto object-contain' : 'w-full object-cover'
                        } transform group-hover:scale-105 transition-transform duration-500 ${
                          group.category === 'Cameras & Vision'
                            ? 'h-64 md:h-72'
                            : group.category === 'Flow Meters'
                              ? 'h-64 md:h-72'
                          : (group.category === 'Jointing Machines' || group.category.startsWith('Rosemount'))
                              ? 'h-64 md:h-72'
                              : 'h-48 md:h-56'
                        }`}
                      />
                    </div>
                    <div className="p-4">
                        <h3 className="text-base font-semibold text-gray-900 mb-0 text-center underline decoration-transparent group-hover:decoration-[#0073bc] transition-colors">
                        {p.name}
                      </h3>
                        </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl text-white">
              <img src={subHeadingImage} alt="Clarus Fusion background" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 p-8 md:p-12 text-center py-20">
                <Zap className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h2 className="text-3xl font-bold mb-4">
                  Clarus Fusion Series
                </h2>
                <p className="text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Our flagship integrated water management platform combining advanced treatment processes with intelligent automation for optimal performance and efficiency.
                </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-2">30%</div>
                  <div className="text-blue-100 text-sm">Lower Power Consumption</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-2">99.5%</div>
                  <div className="text-blue-100 text-sm">Treatment Efficiency</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100 text-sm">Remote Monitoring</div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-200">•</span>
                    <span className="text-sm">Energy-optimized operation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-200">•</span>
                    <span className="text-sm">Predictive maintenance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-200">•</span>
                    <span className="text-sm">Cloud-based analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-200">•</span>
                    <span className="text-sm">Mobile app control</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-200">•</span>
                    <span className="text-sm">Automated reporting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-200">•</span>
                    <span className="text-sm">Scalable architecture</span>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our engineering team can design and build products tailored to your specific requirements
          </p>
          <button className="px-8 py-3 bg-[#0073bc] text-white rounded-full font-semibold hover:bg-[#005a94] transition-colors">
            Request Product Information
          </button>
        </div>
      </section>
    </div>
  );
}
