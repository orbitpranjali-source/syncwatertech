import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import heroWaterImage from '../assets/products/hero-section.jpg';
import { Building2, TrendingUp, CheckCircle2, Clock, Construction, Award } from 'lucide-react';

interface ProjectsPageProps {
  initialFilter?: 'all' | 'completed' | 'ongoing';
}

export default function ProjectsPage({ initialFilter = 'all' }: ProjectsPageProps) {
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing'>(initialFilter);
  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  const completedProjects = [
    { name: 'Kymore & Vijayraghavgarh (Package 5D) – MPUDCL Bhopal', value: '₹34.60 Lakh', year: '2024', location: 'Kymore & Vijayraghavgarh, MP', client: 'MPUDCL Bhopal' },
    { name: 'Amarpatan & Ramnagar (Package 7D) – MPUDCL Bhopal', value: '₹1.37 Crore', year: '2024', location: 'Amarpatan & Ramnagar, MP', client: 'MPUDCL Bhopal' },
    { name: 'Harpalpur & Badagaon (Package 6G) – MPUDCL Bhopal', value: '₹43.45 Lakh', year: '2024', location: 'Harpalpur & Badagaon, MP', client: 'MPUDCL Bhopal' },
    { name: 'Bankhedi Turnkey Project – Central India Pvt Ltd', value: '₹27 Lakh', year: '2024', location: 'Bankhedi, MP', client: 'Central India Pvt Ltd' },
    { name: 'KARI & Lidhorakhas Water Meter SITC – Tikamgarh Nagar Parishads', value: '₹85.80 Lakh', year: '2024', location: 'Tikamgarh, MP', client: 'Tikamgarh Nagar Parishads' },
    { name: 'Gangadhar Meher Lift Irrigation Project – WRD Bhopal', value: '₹74.74 Lakh', year: '2024', location: 'Bhopal, MP', client: 'WRD Bhopal' },
  ];

  const milestoneProjects = [
    { name: 'Prism Cement, Satna', value: '₹4.50 Crore', year: '2015', location: 'Satna, MP', client: 'Prism Cement' },
    { name: 'Lupin, Mandideep', value: '₹18 Lakh', year: '2016', location: 'Mandideep, MP', client: 'Lupin' },
    { name: 'Vindhyachal Distillery, Pilukhedi', value: '₹2.50 Crore', year: '2017', location: 'Pilukhedi, MP', client: 'Vindhyachal Distillery' },
    { name: 'Bhopal Municipal Corporation, Idgah Hills', value: '₹25 Lakh', year: '2018', location: 'Bhopal, MP', client: 'BMC' },
    { name: 'MP Jal Nigam, Punjapura (Neemuch, Badhwani)', value: '₹28 Lakh', year: '2020', location: 'Neemuch, Badhwani, MP', client: 'MP Jal Nigam' },
    { name: 'Indore District (Betma, Gautampura, Depalpur)', value: '₹12.68 Lakh', year: '2021', location: 'Indore District, MP', client: 'Indore District' },
    { name: 'Betul-Bazar, Amla & Sarni Nagar Parishads (MP)', value: '₹13.19 Lakh', year: '2022', location: 'Betul, Amla, Sarni, MP', client: 'Nagar Parishads' },
    { name: 'Gobranawapra STP (Raipur, C.G.)', value: '₹11.74 Lakh', year: '2023', location: 'Raipur, Chhattisgarh', client: 'Raipur Municipal Corporation' },
  ];

  const ongoingProjects = [
    { name: 'Gandhisagar Package 2 – Multi-Village Project (District Neemach)', value: '₹10.87 Crore', expectedCompletion: 'Q2 2025', location: 'Neemach, MP', client: 'MP Jal Nigam - Dilip Buildcon' },
    { name: 'Beohari Multi-Village Scheme – Shahdol', value: '₹1.49 Crore', expectedCompletion: 'Q3 2025', location: 'Shahdol, MP', client: 'MP Jal Nigam - Tejas Construction' },
    { name: 'Rewa Bansagar Scheme – District Rewa', value: '₹14.24 Crore', expectedCompletion: 'Q4 2025', location: 'Rewa, MP', client: 'MP Jal Nigam - Dilip Buildcon' },
    { name: 'Pahargarh Multi-Village Scheme – District Rajgarh', value: '₹27.54 Lakh', expectedCompletion: 'Q1 2025', location: 'Rajgarh, MP', client: 'MP Jal Nigam - KNK Projects' },
    { name: 'Narmada Gambhir Multi-Village Scheme – District Ujjain', value: '₹10.34 Crore', expectedCompletion: 'Q3 2025', location: 'Ujjain, MP', client: 'MP Jal Nigam - Dilip Buildcon' },
    { name: 'Gohad Water Supply Scheme – MPUDCL Bhopal', value: '₹50.04 Lakh', expectedCompletion: 'Q2 2025', location: 'Gohad, MP', client: 'MPUDCL Bhopal - Shree Contractor' },
  ];


  // Refs for scroll navigation
  const completedRef = useRef<HTMLDivElement>(null);
  const ongoingRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Scroll to section function
  const scrollToSection = (section: 'completed' | 'ongoing') => {
    const targetRef = section === 'completed' ? completedRef : ongoingRef;
    targetRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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
              Delivering water infrastructure excellence across India with PLC, SCADA & Automation Systems
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8"
          >
            <button
              onClick={() => scrollToSection('completed')}
              className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Completed Projects
            </button>
            <button
              onClick={() => scrollToSection('ongoing')}
              className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#0073bc] to-[#005a94] text-white font-semibold hover:from-[#005a94] hover:to-[#004080] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Construction className="h-5 w-5 mr-2" />
              Ongoing Projects
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Completed Projects Section */}
          {(filter === 'all' || filter === 'completed') && (
            <motion.div 
              ref={completedRef}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
              className="mb-20"
            >
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl"></div>
                <div className="relative bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-500 p-3 rounded-xl mr-4 shadow-lg">
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        ✅ Completed Projects
                      </h2>
                      <p className="text-gray-600 mt-2">All executed with PLC, SCADA & Automation Systems</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {completedProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:-translate-y-2"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-4 leading-relaxed">
                        {project.name}
                      </h3>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap shadow-sm">
                        {project.year}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 flex items-center">
                          <Building2 className="h-4 w-4 mr-1" />
                          {project.location}
                        </span>
                        <span className="text-[#0073bc] font-semibold text-lg">
                          {project.value}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Client:</span> {project.client}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Milestone Projects */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-16"
              >
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl"></div>
                  <div className="relative bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-6">
                    <div className="flex items-center">
                      <div className="bg-blue-500 p-3 rounded-xl mr-4 shadow-lg">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Milestones (Past Key Projects)
                        </h3>
                        <p className="text-gray-600 mt-1">Notable achievements from 2015-2023</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  variants={containerVariants}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                  {milestoneProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 hover:border-blue-200"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-base font-semibold text-gray-900 flex-1 pr-3">
                          {project.name}
                        </h4>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                          {project.year}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{project.location}</span>
                        <span className="text-[#0073bc] font-semibold">
                          {project.value}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {/* Ongoing Projects Section */}
          {(filter === 'all' || filter === 'ongoing') && (
            <motion.div 
              ref={ongoingRef}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
              className="mb-16"
            >
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl"></div>
                <div className="relative bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-500 p-3 rounded-xl mr-4 shadow-lg">
                      <Construction className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        🚧 Ongoing Projects
                      </h2>
                      <p className="text-gray-600 mt-2">Currently in progress with advanced automation systems</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {ongoingProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-orange-200 hover:-translate-y-2"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-4 leading-relaxed">
                        {project.name}
                      </h3>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap shadow-sm">
                        In Progress
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 flex items-center">
                          <Building2 className="h-4 w-4 mr-1" />
                          {project.location}
                        </span>
                        <span className="text-[#0073bc] font-semibold text-lg">
                          {project.value}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-600">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Expected: {project.expectedCompletion}
                        </div>
                        <div className="text-gray-600">
                          <span className="font-medium">Client:</span> {project.client}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0073bc] to-[#005a94] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Let's discuss how we can bring innovative water solutions with PLC, SCADA & Automation Systems to your community
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#0073bc] rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Request a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
