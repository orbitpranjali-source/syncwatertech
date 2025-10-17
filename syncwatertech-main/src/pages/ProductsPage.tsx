import { Droplets, Zap, Gauge, ThermometerSun, Activity, FlaskConical } from 'lucide-react';
import heroWaterImage from '../assets/products/hero-section.jpg';
import subHeadingImage from '../assets/products/sub-heading.jpg';
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
                🧪 Products & Solutions
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
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-[#0073bc]/20 transform hover:-translate-y-1"
              >
                <div className="icon-wrap mb-6 mx-auto group-hover:bg-[#0073bc]/10 transition-colors duration-300">
                  {category.image ? (
                    <img src={category.image} alt={`${category.title} icon`} className="icon-img icon-hover group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <category.icon className="h-10 w-10 text-[#0073bc] mx-auto group-hover:scale-110 transition-transform duration-300" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {category.title === 'Water Treatment Plants' && '🚰 '}
                  {category.title === 'Sewage Treatment Plants' && '🧼 '}
                  {category.title === 'Reverse Osmosis Systems' && '💧 '}
                  {category.title === 'Effluent Treatment Plants' && '🏭 '}
                  {category.title === 'PLC Control Panels' && '📟 '}
                  {category.title === 'IoT Sensors' && '📶 '}
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
          <button onClick={() => onNavigate && onNavigate('product-info')} className="px-8 py-3 bg-[#0073bc] text-white rounded-full font-semibold hover:bg-[#005a94] transition-colors">
            Request Product Information
          </button>
        </div>
      </section>
    </div>
  );
}
