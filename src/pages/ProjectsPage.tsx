import { useState, useEffect } from 'react';
import heroWaterImage from '../assets/products/hero-section.jpg';
import { Building2, TrendingUp, CheckCircle2, Clock } from 'lucide-react';

interface ProjectsPageProps {
  initialFilter?: 'all' | 'completed' | 'ongoing';
}

export default function ProjectsPage({ initialFilter = 'all' }: ProjectsPageProps) {
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing'>(initialFilter);
  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  const completedProjects = [
    { name: 'Smart Water Distribution Network - Bhopal Phase 1', value: '₹12.5 Cr', year: '2023', location: 'Bhopal, MP' },
    { name: 'STP Automation & Monitoring System - Indore', value: '₹8.3 Cr', year: '2023', location: 'Indore, MP' },
    { name: 'Rural Water Supply Scheme - Raisen District', value: '₹15.7 Cr', year: '2022', location: 'Raisen, MP' },
    { name: 'WTP Modernization - Jabalpur Municipal Corporation', value: '₹10.2 Cr', year: '2022', location: 'Jabalpur, MP' },
    { name: 'Industrial Effluent Treatment Plant - Pithampur', value: '₹6.8 Cr', year: '2022', location: 'Pithampur, MP' },
    { name: 'Upper Lake Monitoring System - Bhopal', value: '₹4.5 Cr', year: '2021', location: 'Bhopal, MP' },
  ];

  const ongoingProjects = [
    { name: 'Integrated Water Management System - Gwalior', value: '₹18.5 Cr', expectedCompletion: 'Q2 2025', location: 'Gwalior, MP' },
    { name: 'Smart City Water Infrastructure - Ujjain', value: '₹22.3 Cr', expectedCompletion: 'Q3 2025', location: 'Ujjain, MP' },
    { name: 'STP Expansion & Automation - Dewas', value: '₹9.7 Cr', expectedCompletion: 'Q1 2025', location: 'Dewas, MP' },
    { name: 'Rural Water Supply Automation - Sehore', value: '₹7.2 Cr', expectedCompletion: 'Q4 2024', location: 'Sehore, MP' },
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative text-white py-20">
        <img src={heroWaterImage} alt="Water technology background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building2 className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Delivering water infrastructure excellence across India
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter buttons removed; selection now handled via navbar dropdown */}

          {(filter === 'all' || filter === 'completed') && (
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <CheckCircle2 className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Completed Projects
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {completedProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-4">
                        {project.name}
                      </h3>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                        {project.year}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{project.location}</span>
                      <span className="text-[#0073bc] font-semibold text-lg">
                        {project.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(filter === 'all' || filter === 'ongoing') && (
            <div>
              <div className="flex items-center mb-8">
                <Clock className="h-8 w-8 text-[#0073bc] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Ongoing Projects
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {ongoingProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-4">
                        {project.name}
                      </h3>
                      <span className="bg-blue-100 text-[#0073bc] px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                        In Progress
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">{project.location}</span>
                        <span className="text-[#0073bc] font-semibold text-lg">
                          {project.value}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Expected: {project.expectedCompletion}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#0073bc] to-[#005a94] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let's discuss how we can bring innovative water solutions to your community
          </p>
          <button className="px-8 py-3 bg-white text-[#0073bc] rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Request a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
