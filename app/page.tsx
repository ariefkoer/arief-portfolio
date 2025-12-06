'use client'

import { ArrowRight, Code, Server, Briefcase, Award, Mail, Linkedin, Github, ExternalLink, CheckCircle, Star, TrendingUp, Users, Zap, Target, Database, Cloud, MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'Erabangun PMO Application',
      category: 'enterprise',
      type: 'Telecommunications Business Management',
      description: 'Comprehensive Project Management Office application for PT. Era Bangun Jaya managing tower leasing and fiber optics operations across Indonesia.',
      screenshots: [
        {
          url: '/images/erabangun/dashboard.png',
          thumbnail: '/images/erabangun/dashboard-thumb.png',
          caption: 'Main Dashboard',
          description: 'Real-time project tracking dashboard showing active SPKs, tower projects, and fiber optic installations with KPI metrics'
        },
        {
          url: '/images/erabangun/spk-list.png',
          thumbnail: '/images/erabangun/spk-list-thumb.png',
          caption: 'SPK Management',
          description: 'Comprehensive work order (SPK) list with filtering capabilities, status tracking, and quick action buttons'
        },
        {
          url: '/images/erabangun/project-detail.png',
          thumbnail: '/images/erabangun/project-detail-thumb.png',
          caption: 'Project Details',
          description: 'Detailed project view with timeline, budget tracking, resource allocation, and milestone management'
        },
        {
          url: '/images/erabangun/reports.png',
          thumbnail: '/images/erabangun/reports-thumb.png',
          caption: 'Analytics & Reports',
          description: 'Business intelligence dashboard with charts, graphs, and exportable reports for management decision making'
        }
      ],
      tech: ['React JS', 'Spring Boot', 'MySQL', 'Microservices', 'RESTful API'],
      features: [
        'End-to-end business process digitization',
        'Real-time project tracking dashboard',
        'Integration with multiple business modules',
        'Responsive design for mobile access'
      ],
      role: 'Business Analyst & Solution Architect',
      duration: 'July 2024 - Present',
      client: 'PT. Era Bangun Jaya',
      highlights: {
        users: '100+ Users',
        modules: '6 Integrated Modules',
        uptime: '99.5% Uptime'
      },
      aiPowered: {
        enabled: true,
        description: 'Developed using AI-assisted coding for rapid prototyping and code generation',
        benefits: ['50% faster development', 'Consistent code patterns', 'Automated testing scenarios']
      }
    },
    {
      id: 2,
      title: 'Vidici Company Website',
      category: 'web',
      type: 'Corporate Website',
      description: 'Modern, responsive corporate website for IT systems integrator showcasing enterprise solutions with emphasis on UX and performance.',
      screenshots: [
        {
          url: '/images/vidici/hero.png',
          thumbnail: '/images/vidici/hero-thumb.png',
          caption: 'Hero Section',
          description: 'Modern hero section with gradient design, company statistics, and clear call-to-action buttons'
        },
        {
          url: '/images/vidici/services.png',
          thumbnail: '/images/vidici/services-thumb.png',
          caption: 'Services Portfolio',
          description: 'Interactive services showcase with hover effects and detailed service descriptions'
        },
        {
          url: '/images/vidici/mobile.png',
          thumbnail: '/images/vidici/mobile-thumb.png',
          caption: 'Mobile Responsive',
          description: 'Fully responsive design optimized for mobile devices with touch-friendly navigation'
        }
      ],
      tech: ['React JS', 'HTML5/CSS3', 'JavaScript', 'Responsive Design'],
      features: [
        'Modern gradient-based UI design',
        'Fully responsive across all devices',
        'Interactive service portfolio',
        'SEO-optimized structure'
      ],
      role: 'Frontend Developer',
      duration: '2024',
      client: 'PT Vidya Diginara Cipta',
      highlights: {
        pageSpeed: '95/100 Score',
        responsive: '100% Mobile Ready',
        seo: 'Optimized'
      },
      aiPowered: {
        enabled: true,
        description: 'AI-powered design system and component generation',
        benefits: ['Rapid UI prototyping', 'Consistent design language', 'Automated responsive breakpoints']
      }
    },
    {
      id: 3,
      title: 'EA Developer Website',
      category: 'web',
      type: 'Trading Services Platform',
      description: 'Professional landing page for AI trading services featuring real-time performance metrics and automated trading statistics.',
      screenshots: [
        {
          url: '/images/ea-developer/landing.png',
          thumbnail: '/images/ea-developer/landing-thumb.png',
          caption: 'Landing Page',
          description: 'Conversion-optimized landing page with live performance metrics and trust indicators'
        },
        {
          url: '/images/ea-developer/performance.png',
          thumbnail: '/images/ea-developer/performance-thumb.png',
          caption: 'Performance Dashboard',
          description: 'Real-time trading performance display with ROI calculations and win rate statistics'
        },
        {
          url: '/images/ea-developer/services.png',
          thumbnail: '/images/ea-developer/services-thumb.png',
          caption: 'Services Section',
          description: 'Detailed service offerings including EA hosting, custom development, and consultation'
        }
      ],
      tech: ['Next.js', 'Tailwind CSS', 'API Integration', 'Responsive Design'],
      features: [
        'Live performance dashboard',
        'Real-time data integration',
        'Conversion-optimized design',
        'Interactive consultation system'
      ],
      role: 'Full-Stack Developer',
      duration: '2024',
      client: 'X-Breaker Pro',
      highlights: {
        conversion: '25% Increase',
        visitors: '1000+ Monthly',
        loading: '< 2s Load Time'
      },
      aiPowered: {
        enabled: true,
        description: 'Complete website built with AI assistance from concept to deployment',
        benefits: ['Full-stack development in days', 'Production-ready code', 'Best practices implementation']
      }
    },
    {
      id: 4,
      title: 'SIKOMPAS Business System',
      category: 'enterprise',
      type: 'Video Communication Platform',
      description: 'Communication system enabling video calls based on Web RTC platform between inmates and families or relations with comprehensive business process management for running the system that is being used by the corectional facilities and penetentiaries accross Indonesia.',
      screenshots: [
        {
          url: '/images/sikompas/landing-page.png',
          thumbnail: '/images/sikompas/landing-page-thumb.png',
          caption: 'Admin Dashboard',
          description: 'Landing Page of SIKOMPAS video call communication system that can be accessed by public containing all the information of SIKOMPAS system as well as how to download and how to use the mobile apps'
        },
        {
          url: '/images/sikompas/admin-dashboard.png',
          thumbnail: '/images/sikompas/admin-dashboard-thumb.png',
          caption: 'Admin Dashboard',
          description: 'Comprehensive admin panel for managing facilities, users, voucher, call transactions, cashback and monitoring video call sessions dan manage call recordings'
        },
        {
          url: '/images/sikompas/video-call.png',
          thumbnail: '/images/sikompas/video-call-thumb.png',
          caption: 'Video Call Interface',
          description: 'WebRTC-powered video call interface with secure connection and quality controls'
        },
        {
          url: '/images/sikompas/voucher-module.png',
          thumbnail: '/images/sikompas/voucher-module-thumb.png',
          caption: 'Voucher Module',
          description: 'Mobule for managing the voucher lifcycle from booking, creation, purchase, until usage by the inmates for video call with their families and relations'
        }
      ],
      tech: ['React JS', 'Spring Boot', 'WebRTC', 'AWS', 'Mobile Integration'],
      features: [
        'Backend system for video communication',
        'Web dashboard for business management',
        'Android and iOS integration',
        'AWS cloud infrastructure'
      ],
      role: 'Solution Architect',
      duration: 'Dec 2024 - Jun 2025',
      client: 'PT. Mitra Kita Jaya',
      highlights: {
        facilities: '50+ Facilities',
        calls: '10K+ Video Calls',
        security: 'Enterprise Grade'
      },
      aiPowered: {
        enabled: true,
        description: 'AI-assisted architecture design and code optimization',
        benefits: ['Optimized WebRTC implementation', 'Scalable microservices design', 'Security best practices']
      }
    },
    {
      id: 5,
      title: 'Sasmaya E-Commerce',
      category: 'web',
      type: 'Fashion Retail Platform',
      description: 'Modern e-commerce website for fashion retail with product catalog, shopping cart, and seamless checkout experience.',
      screenshots: [
        {
          url: '/images/sasmaya/homepage.png',
          thumbnail: '/images/sasmaya/homepage-thumb.png',
          caption: 'Homepage',
          description: 'Eye-catching homepage with featured collections, promotional banners, and trending products'
        },
        {
          url: '/images/sasmaya/product-catalog.png',
          thumbnail: '/images/sasmaya/product-catalog-thumb.png',
          caption: 'Product Catalog',
          description: 'Advanced product filtering with category navigation, price ranges, and size selection'
        },
        {
          url: '/images/sasmaya/checkout.png',
          thumbnail: '/images/sasmaya/checkout-thumb.png',
          caption: 'Checkout Process',
          description: 'Streamlined checkout flow with multiple payment options and order confirmation'
        }
      ],
      tech: ['React JS', 'E-Commerce', 'Payment Gateway', 'Responsive Design'],
      features: [
        'Advanced product filtering',
        'Shopping cart & checkout',
        'Payment gateway integration',
        'Order tracking system'
      ],
      role: 'Fullstack Developer',
      duration: '2024',
      client: 'Sasmaya Fashion',
      highlights: {
        products: '500+ Products',
        orders: '95% Success Rate',
        mobile: '70% Mobile Traffic'
      },
      aiPowered: {
        enabled: true,
        description: 'AI-powered component library and state management',
        benefits: ['Reusable component patterns', 'Optimized performance', 'Enhanced user experience']
      }
    },
    {
      id: 6,
      title: 'CTA-Saham',
      category: 'web',
      type: 'Trading Consulting Professional',
      description: 'Modern professional Equity Trading and Market Intelligence.',
      screenshots: [
        {
          url: '/images/ctasaham/cta-homepage.png',
          thumbnail: '/images/ctasaham/cta-homepage-thumb.png',
          caption: 'Homepage',
          description: 'Modern and professional website with gold and blue formal color scheme'
        },
        {
          url: '/images/ctasaham/cta-about.png',
          thumbnail: '/images/ctasaham/cta-about-thumb.png',
          caption: 'About The Founder and CTA Saham',
          description: 'Informative webpage section about the founder and CTA Saham profile'
        },
        {
          url: '/images/ctasaham/cta-services.png',
          thumbnail: '/images/ctasaham/cta-services-thumb.png',
          caption: 'products and services',
          description: 'Multiple Products and Services Information'
        },
        {
          url: '/images/ctasaham/cta-analysis.png',
          thumbnail: '/images/ctasaham/cta-analysis-thumb.png',
          caption: 'Blog and Trading Contents',
          description: 'Multiple Categories of Contencts'
        }        
      ],
      tech: ['Next JS', 'Multi Product & Services', 'Payment Gateway', 'Responsive Design'],
      features: [
        'Multi Product & Services',
        'Blog and Content Section',
        'Payment gateway integration'
      ],
      role: 'Fullstack Developer',
      duration: '2025',
      client: 'CTA Saham',
      highlights: {
        active : '6 Featured Services',
        orders: '98% Signal Accuracy',
        mobile: 'Mobile Responsive'
      },
      aiPowered: {
        enabled: true,
        description: 'AI-powered component library and state management',
        benefits: ['Reusable component patterns', 'Optimized performance', 'Enhanced user experience']
      }
    }    
  ]

  const skills = {
    frontend: ['React JS', 'Next.js', 'HTML5/CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
    backend: ['Java', 'Spring Boot', 'Node.js', 'RESTful API', 'Microservices', 'SOA'],
    cloud: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'DevOps'],
    tools: ['Git', 'JIRA', 'Figma', 'Postman', 'VS Code', 'IntelliJ'],
    ai: ['Claude AI', 'GitHub Copilot', 'AI-Powered Coding', 'Prompt Engineering', 'Code Automation', 'AI Debugging']
  }

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const openLightbox = (project, index) => {
    setSelectedImage({ project, index })
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedImage && currentImageIndex < selectedImage.project.screenshots.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const prevImage = () => {
    if (selectedImage && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Arief Kurniawan
                </h1>
                <p className="text-sm text-gray-600 font-semibold">Full-Stack Developer</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
            <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition">
              Get In Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                🚀 Available for Projects | 🤖 AI-Powered Development
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Full-Stack Developer & 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Solution Architect</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                18 years of experience delivering enterprise-scale applications leveraging <strong className="text-blue-600">AI utilization</strong> to accelerate development, ensure code quality, and maximize efficiency across telecommunications, banking, and digital transformation projects.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-blue-600">
                  <div className="text-3xl font-bold text-blue-600">18+</div>
                  <div className="text-sm text-gray-600">Years Exp</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-purple-600">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-green-600">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Success</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition">
                  <Briefcase className="w-5 h-5" />
                  <span>View Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/Arief_Kurniawan_CV.pdf" className="flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-blue-600 transition">
                  <Award className="w-5 h-5" />
                  <span>Download CV</span>
                </a>
              </div>

              <div className="flex items-center space-x-6">
                <a href="mailto:arief.koerniawan@gmail.com" className="text-gray-600 hover:text-blue-600 transition">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/ariefkurniawan" target="_blank" className="text-gray-600 hover:text-blue-600 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/ariefkurniawan" target="_blank" className="text-gray-600 hover:text-blue-600 transition">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-3xl rounded-full"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <h3 className="text-xl font-bold">Current Status</h3>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">AVAILABLE</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Position</span>
                      <span className="font-bold">Solution Architect</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Location</span>
                      <span className="font-bold">Jakarta, Indonesia</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Work Type</span>
                      <span className="font-bold">Remote / Hybrid</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Time Zone</span>
                      <span className="font-bold">GMT+7 (Flexible)</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-4 text-center">
                      <div className="text-sm mb-1">Expertise Level</div>
                      <div className="text-3xl font-bold">Senior</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">18+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600">
              18 years of experience across full-stack development and enterprise architecture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition border-t-4 border-blue-600">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition border-t-4 border-purple-600">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center mb-6">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, idx) => (
                  <span key={idx} className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition border-t-4 border-green-600">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-xl flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill, idx) => (
                  <span key={idx} className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition border-t-4 border-orange-600">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, idx) => (
                  <span key={idx} className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition border-t-4 border-pink-600">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-400 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI & Automation</h3>
              <div className="flex flex-wrap gap-2">
                {skills.ai.map((skill, idx) => (
                  <span key={idx} className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* AI-Powered Development Banner */}
          <div className="mt-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl p-8 text-white">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">🤖 AI-Powered Development Workflow</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  Leveraging cutting-edge AI tools to accelerate development cycles, improve code quality, and deliver projects faster without compromising standards.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="font-bold mb-2">⚡ 3-5x Faster Development</div>
                    <div className="text-sm text-white/80">AI-assisted coding & automation reduces manual tasks significantly</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="font-bold mb-2">🎯 Higher Code Quality</div>
                    <div className="text-sm text-white/80">AI code review & best practices implementation</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="font-bold mb-2">🔄 Smart Refactoring</div>
                    <div className="text-sm text-white/80">Intelligent code optimization & pattern recognition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 mb-8">
              Enterprise-scale applications across telecommunications, banking, and digital services
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center space-x-4 flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  activeFilter === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveFilter('enterprise')}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  activeFilter === 'enterprise'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Enterprise
              </button>
              <button
                onClick={() => setActiveFilter('web')}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  activeFilter === 'web'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Web Applications
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group border border-gray-100"
              >
                {/* Project Image */}
                <div className="relative">
                  {/* ✅ PERBAIKAN: Screenshot Gallery - Menggunakan Image Component */}
                  <div className="grid grid-cols-4 gap-2 p-4 bg-gradient-to-br from-blue-50 to-purple-50">
                    {project.screenshots && project.screenshots.length > 0 ? (
                      <>
                        {/* Main large image - takes 2x2 grid */}
                        <div 
                          className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden rounded-lg bg-white"
                          onClick={() => openLightbox(project, 0)}
                        >
                          <div className="relative w-full h-full min-h-[200px]">
                            <Image
                              src={project.screenshots[0].url}
                              alt={project.screenshots[0].caption}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="bg-white rounded-full p-3">
                                <ExternalLink className="w-6 h-6 text-blue-600" />
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-sm font-semibold">{project.screenshots[0].caption}</p>
                          </div>
                        </div>

                        {/* Smaller images - takes 1x1 grid each */}
                        {project.screenshots.slice(1, 5).map((screenshot, idx) => (
                          <div 
                            key={idx}
                            className="relative group cursor-pointer overflow-hidden rounded-lg bg-white"
                            onClick={() => openLightbox(project, idx + 1)}
                          >
                            <div className="relative w-full h-full min-h-[100px]">
                              <Image
                                src={screenshot.url}
                                alt={screenshot.caption}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 25vw"
                              />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-white rounded-full p-2">
                                  <ExternalLink className="w-4 h-4 text-purple-600" />
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <p className="text-white text-xs font-semibold truncate">{screenshot.caption}</p>
                            </div>
                          </div>
                        ))}

                        {/* View All badge if more than 5 images */}
                        {project.screenshots.length > 5 && (
                          <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                            +{project.screenshots.length - 5} more
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="col-span-4 h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <div className="text-center p-8">
                          <Briefcase className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                          <p className="text-gray-600 font-medium">Project Screenshots</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg z-10">
                    {project.category === 'enterprise' ? 'Enterprise' : 'Web App'}
                  </div>

                  {/* Screenshot counter badge */}
                  {project.screenshots && project.screenshots.length > 0 && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10 flex items-center space-x-1">
                      <Briefcase className="w-3 h-3" />
                      <span>{project.screenshots.length} Screenshots</span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-semibold">{project.type}</p>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    {Object.entries(project.highlights).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Role & Duration */}
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-6 pb-6 border-b">
                    <div>
                      <span className="font-semibold text-gray-700">Role:</span> {project.role}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Duration:</span> {project.duration}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* AI-Powered Badge */}
                  {project.aiPowered?.enabled && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4 border border-pink-200">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Zap className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-bold text-gray-900 mb-1 flex items-center">
                              🤖 AI-Powered Development
                            </h5>
                            <p className="text-sm text-gray-600 mb-2">{project.aiPowered.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.aiPowered.benefits.map((benefit, idx) => (
                                <span key={idx} className="text-xs bg-white text-pink-600 px-2 py-1 rounded-full font-medium">
                                  ✓ {benefit}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Work With Me?</h2>
            <p className="text-xl text-gray-600">
              18 years of proven expertise in enterprise-scale development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Proven Track Record</h3>
              <p className="text-gray-600 leading-relaxed">
                Successfully delivered 50+ enterprise projects for major clients including Telkom, BCA, BRI, and Telkomsel across banking, telecommunications, and manufacturing sectors.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-2 border-pink-200">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-400 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">🤖 AI-Enhanced Workflow</h3>
              <p className="text-gray-600 leading-relaxed">
                Leverage AI coding agents (Claude, GitHub Copilot) to accelerate development 3-5x faster while maintaining enterprise-grade quality standards and best practices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Multinational Project Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Worked with multinational teams in Thailand, Singapore, and across APAC region. Comfortable with remote collaboration and international time zones.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Full-Stack Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete understanding of development lifecycle from frontend to backend, cloud architecture, and deployment. One-stop solution for your project needs.
              </p>
            </div>
          </div>

          {/* AI Development Methodology */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-8">My AI-Enhanced Development Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="font-bold mb-2">Requirements Analysis</h4>
                <p className="text-sm text-gray-600">AI-assisted requirement gathering and documentation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="font-bold mb-2">Rapid Prototyping</h4>
                <p className="text-sm text-gray-600">AI-powered code generation and component scaffolding</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="font-bold mb-2">Quality Assurance</h4>
                <p className="text-sm text-gray-600">AI code review and automated testing scenarios</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h4 className="font-bold mb-2">Optimization</h4>
                <p className="text-sm text-gray-600">AI-driven performance tuning and refactoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-xl text-blue-100">
                Available for freelance projects and full-time opportunities
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <a href="mailto:arief.koerniawan@gmail.com" className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition group">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Email</div>
                        <div className="font-semibold text-gray-900">arief.koerniawan@gmail.com</div>
                      </div>
                    </a>

                    <a href="https://wa.me/6281513704488" target="_blank" className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition group">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">WhatsApp</div>
                        <div className="font-semibold text-gray-900">+62 815-1370-4488</div>
                      </div>
                    </a>

                    <a href="https://linkedin.com/in/ariefkurniawan" target="_blank" className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition group">
                      <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                        <Linkedin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">LinkedIn</div>
                        <div className="font-semibold text-gray-900">linkedin.com/in/ariefkurniawan</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                  <h4 className="text-xl font-bold mb-6">What I Offer</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Full-stack development expertise</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">AI-powered rapid development</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Enterprise architecture consulting</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Cloud migration & DevOps</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Project management & delivery</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Technical leadership & mentoring</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/20">
                    <div className="text-sm mb-2">Current Status</div>
                    <div className="text-2xl font-bold">Available for Projects</div>
                    <div className="text-sm text-blue-100 mt-1">Response within 24 hours</div>
                  </div>

                  <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-5 h-5" />
                      <span className="font-semibold">AI-Enhanced Delivery</span>
                    </div>
                    <p className="text-sm text-blue-100">
                      Projects delivered 3-5x faster with AI assistance while maintaining enterprise quality standards
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a 
                  href="https://wa.me/6281513704488?text=Hi%20Arief,%20I%20would%20like%20to%20discuss%20a%20project%20opportunity"
                  target="_blank"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-6 h-6" />
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Or download my CV for detailed experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Arief Kurniawan</h1>
                  <p className="text-xs text-gray-400 font-semibold">Full-Stack Developer & Solution Architect</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                18 years of experience delivering enterprise-scale applications across telecommunications, banking, and digital transformation projects in APAC region.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:arief.koerniawan@gmail.com" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/ariefkurniawan" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/ariefkurniawan" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://wa.me/6281513704488" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
                <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#contact" className="hover:text-blue-400 transition">Full-Stack Development</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition">Solution Architecture</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition">Cloud Migration</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition">Technical Consulting</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Arief Kurniawan. All rights reserved.</p>
            <p className="mt-2">
              Built with React & Tailwind CSS | Jakarta, Indonesia
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/6281513704488?text=Hi%20Arief,%20I%20saw%20your%20portfolio" 
        target="_blank"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition transform hover:scale-110 z-50 animate-bounce"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>

      {/* ✅ PERBAIKAN: Lightbox Modal dengan Image Component */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Image Display */}
              <div className="relative bg-gray-100">
                <div className="relative aspect-video">
                  <Image
                    src={selectedImage.project.screenshots[currentImageIndex].url}
                    alt={selectedImage.project.screenshots[currentImageIndex].caption}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1536px) 100vw, 1536px"
                    priority
                  />
                </div>

                {/* Navigation Arrows */}
                {currentImageIndex > 0 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                  </button>
                )}

                {currentImageIndex < selectedImage.project.screenshots.length - 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                  </button>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {currentImageIndex + 1} / {selectedImage.project.screenshots.length}
                </div>
              </div>

              {/* Image Details */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedImage.project.screenshots[currentImageIndex].caption}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {selectedImage.project.title} - {selectedImage.project.type}
                    </p>
                  </div>
                  <div className="bg-blue-50 px-4 py-2 rounded-lg">
                    <span className="text-sm font-semibold text-blue-600">
                      {selectedImage.project.category === 'enterprise' ? 'Enterprise' : 'Web App'}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedImage.project.screenshots[currentImageIndex].description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedImage.project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="border-t pt-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">All Screenshots:</h4>
                  <div className="grid grid-cols-6 gap-3">
                    {selectedImage.project.screenshots.map((screenshot, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative aspect-video rounded-lg overflow-hidden transition bg-white ${
                          idx === currentImageIndex
                            ? 'ring-4 ring-blue-600'
                            : 'ring-2 ring-gray-200 hover:ring-blue-400'
                        }`}
                      >
                        <Image
                          src={screenshot.thumbnail || screenshot.url}
                          alt={screenshot.caption}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 33vw, 16vw"
                        />
                        {idx === currentImageIndex && (
                          <div className="absolute inset-0 bg-blue-600/20"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Close Button at bottom */}
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={closeLightbox}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
                  >
                    Close Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}