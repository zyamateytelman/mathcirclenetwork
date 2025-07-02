import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

const HIGH_CIRCLE_THRESHOLD = 100;

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Radical 3D Grid System */}
      <div className="absolute inset-0 perspective-1000">
        <div className="absolute inset-0 transform-style-3d">
          {/* Multiple rotating grid layers */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 transform-style-3d"
              style={{
                transform: `rotateX(${i * 15}deg) rotateY(${i * 20}deg) translateZ(${i * 100}px)`,
                animation: `gridRotate ${20 + i * 5}s linear infinite`
              }}
            >
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: `${50 + i * 20}px ${50 + i * 20}px`,
                transform: `translateZ(${i * 50}px)`
              }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Data Streams */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-slate-400/30 to-transparent animate-dataStream"
            style={{
              left: `${(i + 1) * 12.5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Holographic Orbs */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full animate-hologram"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(148, 163, 184, 0.6) 0%, transparent 70%)`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Neural Network Connections */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" style={{opacity: 0.3}}>
          {[...Array(20)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="rgba(148, 163, 184, 0.2)"
              strokeWidth="1"
              className="animate-pulse"
              style={{animationDelay: `${i * 0.1}s`}}
            />
          ))}
        </svg>
      </div>
    
    {/* Radical Content Layout */}
    <div className="relative z-10 min-h-screen flex items-center">
      {/* Left Panel - Main Content */}
      <div className="w-1/2 h-screen flex flex-col justify-center pl-20 pr-10">
        {/* Floating Logo */}
        <div className="mb-12 transform hover:rotate-12 transition-transform duration-700">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-600/20 to-slate-500/20 rounded-2xl border border-slate-400/30 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>

        {/* Radical Title */}
        <h1 className="text-6xl font-black text-white mb-8 leading-tight">
          <span className="block transform hover:scale-105 transition-transform duration-500">NATIONAL</span>
          <span className="block text-slate-300 transform hover:scale-105 transition-transform duration-500" style={{animationDelay: '0.2s'}}>MATH CIRCLE</span>
          <span className="block text-slate-400 transform hover:scale-105 transition-transform duration-500" style={{animationDelay: '0.4s'}}>NETWORK</span>
        </h1>

        {/* Dynamic Description */}
        <div className="space-y-4 mb-12">
          <p className="text-lg text-slate-300 font-light leading-relaxed">
            A <span className="text-slate-200 font-semibold">decentralized network</span> connecting mathematical minds across the nation.
          </p>
          <p className="text-lg text-slate-300 font-light leading-relaxed">
            Through <span className="text-slate-200 font-semibold">collaborative intelligence</span> and <span className="text-slate-400 font-semibold">shared resources</span>.
          </p>
        </div>

        {/* Interactive Stats Grid */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-black text-slate-300 group-hover:text-white transition-colors duration-300">50+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">Circles</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-black text-slate-300 group-hover:text-white transition-colors duration-300">1000+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">Students</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-black text-slate-300 group-hover:text-white transition-colors duration-300">25+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">States</div>
          </div>
        </div>
      </div>

      {/* Right Panel - Interactive Elements */}
      <div className="w-1/2 h-screen flex items-center justify-center pr-20">
        <div className="relative w-96 h-96">
          {/* Central Holographic Display */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-600/10 to-slate-500/10 rounded-full border border-slate-400/20 backdrop-blur-sm animate-pulse"></div>
          
          {/* Orbiting Elements */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 bg-gradient-to-br from-slate-500/20 to-slate-400/20 rounded-full border border-slate-400/30 backdrop-blur-sm animate-orbit"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-120px)`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '8s'
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-slate-300 text-xs font-bold">
                {['MATH', 'CIRCLE', 'NETWORK', 'SHARE', 'LEARN', 'GROW'][i]}
              </div>
            </div>
          ))}

          {/* Central Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              onClick={() => navigate('/register')}
              className="w-24 h-24 bg-gradient-to-br from-slate-600/30 to-slate-500/30 rounded-full border border-slate-400/50 backdrop-blur-sm hover:scale-110 transition-all duration-500 flex items-center justify-center group"
            >
              <svg className="w-8 h-8 text-slate-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  );
};

const About = () => (
  <div className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
    {/* Creative Background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-slate-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" style={{opacity: 0.1}}>
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={`${(i + 1) * 12.5}%`}
              x2="100%"
              y2={`${(i + 1) * 12.5}%`}
              stroke="rgba(148, 163, 184, 0.3)"
              strokeWidth="1"
              className="animate-pulse"
              style={{animationDelay: `${i * 0.3}s`}}
            />
          ))}
        </svg>
      </div>
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      {/* Creative Header */}
      <div className="text-center mb-20">
        <div className="inline-block mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-slate-600/30 to-slate-500/30 rounded-2xl border border-slate-400/30 backdrop-blur-sm flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          <span className="block">ABOUT OUR</span>
          <span className="block text-slate-300">MISSION</span>
        </h2>
        <div className="w-32 h-0.5 bg-gradient-to-r from-slate-600 to-slate-400 mx-auto"></div>
      </div>
      
      {/* Creative Content Layout */}
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Panel - Mission */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500">
            <h3 className="text-3xl font-bold text-white mb-6">Empowering Mathematical Excellence</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              We are a <span className="text-slate-200 font-semibold">decentralized network</span> of mathematical minds, 
              connecting students, educators, and enthusiasts across the nation. Our mission is to 
              democratize access to advanced mathematics through collaborative learning communities.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Through <span className="text-slate-200 font-semibold">innovative programs</span> and 
              <span className="text-slate-200 font-semibold"> shared experiences</span>, we inspire the next 
              generation of mathematicians, scientists, and problem solvers.
            </p>
          </div>

          {/* Interactive Stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { number: "50+", label: "Active Circles", icon: "🏛️" },
              { number: "1000+", label: "Students Reached", icon: "🎓" },
              { number: "25+", label: "States Covered", icon: "🗺️" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 text-center group hover:border-slate-600/50 transition-all duration-500 cursor-pointer">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-black text-slate-200 group-hover:text-white transition-colors duration-300">{stat.number}</div>
                <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Values */}
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-white mb-6">Our Core Values</h4>
          {[
            { title: "Excellence", description: "Mathematical rigor and precision", icon: "⭐" },
            { title: "Collaboration", description: "Shared learning experiences", icon: "🤝" },
            { title: "Innovation", description: "Creative teaching methods", icon: "💡" },
            { title: "Accessibility", description: "Open to all students", icon: "🌍" }
          ].map((value, i) => (
            <div key={i} className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 group hover:border-slate-600/50 transition-all duration-500 cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{value.icon}</div>
                <div>
                  <h5 className="text-lg font-bold text-white group-hover:text-slate-200 transition-colors duration-300">{value.title}</h5>
                  <p className="text-slate-400 text-sm">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold">Email</div>
                <div className="text-gray-400">info@nationalmathcircles.org</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold">Address</div>
                <div className="text-gray-400">123 Math Lane, Numbers City, USA</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"></textarea>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const ProblemSets = () => (
  <div className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
    {/* Creative Background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'matrix 25s linear infinite'
        }}></div>
      </div>

      {/* Floating Numbers */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-slate-400/20 text-lg font-mono animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            {Math.floor(Math.random() * 100)}
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Creative Header */}
      <div className="text-center mb-20">
        <div className="inline-block mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-slate-600/30 to-slate-500/30 rounded-2xl border border-slate-400/30 backdrop-blur-sm flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          <span className="block">PROBLEM</span>
          <span className="block text-slate-300">SETS</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Curated mathematical challenges designed to <span className="text-slate-200 font-semibold">inspire</span> and 
          <span className="text-slate-200 font-semibold"> challenge</span> students at every level.
        </p>
      </div>
      
      {/* Interactive Problem Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { 
            title: "Elementary", 
            count: "50+", 
            difficulty: "Beginner",
            icon: "🔢",
            description: "Foundational concepts and basic problem-solving",
            color: "from-green-500/20 to-emerald-500/20"
          },
          { 
            title: "Middle School", 
            count: "75+", 
            difficulty: "Intermediate",
            icon: "📐",
            description: "Algebraic thinking and geometric reasoning",
            color: "from-blue-500/20 to-cyan-500/20"
          },
          { 
            title: "High School", 
            count: "100+", 
            difficulty: "Advanced",
            icon: "⚡",
            description: "Complex mathematical concepts and proofs",
            color: "from-purple-500/20 to-pink-500/20"
          },
          { 
            title: "Competition", 
            count: "40+", 
            difficulty: "Expert",
            icon: "🏆",
            description: "Olympiad-style problems and challenges",
            color: "from-yellow-500/20 to-orange-500/20"
          },
          { 
            title: "Research", 
            count: "25+", 
            difficulty: "Master",
            icon: "🔬",
            description: "Open problems and research opportunities",
            color: "from-red-500/20 to-pink-500/20"
          },
          { 
            title: "Creative", 
            count: "30+", 
            difficulty: "Innovative",
            icon: "🎨",
            description: "Artistic and creative mathematical thinking",
            color: "from-indigo-500/20 to-purple-500/20"
          }
        ].map((set, index) => (
          <div key={index} className="group relative bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 cursor-pointer overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${set.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{set.icon}</div>
                <div className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">
                  {set.difficulty}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-200 transition-colors duration-300">{set.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{set.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-slate-300 group-hover:text-white transition-colors duration-300">{set.count}</span>
                <button className="text-slate-400 hover:text-white font-semibold transition-colors duration-300 text-sm">
                  Explore →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Stats Bar */}
      <div className="mt-20 bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50">
        <div className="grid grid-cols-4 gap-8 text-center">
          {[
            { number: "320+", label: "Total Problems" },
            { number: "6", label: "Categories" },
            { number: "5", label: "Difficulty Levels" },
            { number: "24/7", label: "Available" }
          ].map((stat, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="text-3xl font-black text-slate-200 group-hover:text-white transition-colors duration-300">{stat.number}</div>
              <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Experiences = () => (
  <div className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
    {/* Creative Background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
      
      {/* Floating Story Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-slate-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Animated Quote Marks */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-slate-400/10 text-6xl font-serif animate-float"
            style={{
              left: `${(i % 3) * 33.33}%`,
              top: `${Math.floor(i / 3) * 50}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + Math.random() * 2}s`
            }}
          >
            "
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Creative Header */}
      <div className="text-center mb-20">
        <div className="inline-block mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-slate-600/30 to-slate-500/30 rounded-2xl border border-slate-400/30 backdrop-blur-sm flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          <span className="block">STORIES &</span>
          <span className="block text-slate-300">EXPERIENCES</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Real stories from <span className="text-slate-200 font-semibold">mathematical communities</span> across the nation.
        </p>
      </div>
      
      {/* Featured Story */}
      <div className="mb-16 bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-3xl font-bold text-white mb-4">From 5 to 50: Building a Thriving Math Community</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              "When we started our math circle with just 5 students, we never imagined it would grow into a community of 50+ passionate learners. The key was creating an environment where every question was celebrated..."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-slate-600/50 rounded-full flex items-center justify-center">
                <span className="text-slate-300 font-bold">SC</span>
              </div>
              <div>
                <div className="text-white font-semibold">Sarah Chen</div>
                <div className="text-slate-400 text-sm">Founder, Bay Area Math Circle</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">📈</div>
            <div className="text-4xl font-black text-slate-200 mb-2">10x Growth</div>
            <div className="text-slate-400">in just 2 years</div>
          </div>
        </div>
      </div>
      
      {/* Story Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { 
            title: "Competition Success", 
            author: "Marcus Rodriguez", 
            excerpt: "Our journey to the national mathematics competition taught us that preparation is everything...",
            icon: "🏆",
            category: "Competition",
            readTime: "5 min read"
          },
          { 
            title: "Innovative Teaching", 
            author: "Dr. Emily Watson", 
            excerpt: "Using technology to make advanced math accessible to students with different learning styles...",
            icon: "💡",
            category: "Innovation",
            readTime: "7 min read"
          },
          { 
            title: "Student Leadership", 
            author: "Alex Thompson", 
            excerpt: "Empowering students to lead their own math sessions created a whole new dynamic...",
            icon: "👑",
            category: "Leadership",
            readTime: "4 min read"
          },
          { 
            title: "Outreach Impact", 
            author: "Maria Garcia", 
            excerpt: "Bringing math education to underserved communities changed everything for us...",
            icon: "🌍",
            category: "Outreach",
            readTime: "6 min read"
          },
          { 
            title: "Research Projects", 
            author: "David Kim", 
            excerpt: "High school students conducting original research opened up incredible opportunities...",
            icon: "🔬",
            category: "Research",
            readTime: "8 min read"
          },
          { 
            title: "Digital Transformation", 
            author: "Lisa Park", 
            excerpt: "Moving our math circle online during the pandemic actually expanded our reach...",
            icon: "💻",
            category: "Technology",
            readTime: "5 min read"
          }
        ].map((story, index) => (
          <div key={index} className="group relative bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-600/10 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{story.icon}</div>
                <div className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">
                  {story.category}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-200 transition-colors duration-300">{story.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{story.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="text-slate-400 text-sm">{story.readTime}</div>
                <button className="text-slate-400 hover:text-white font-semibold transition-colors duration-300 text-sm">
                  Read Story →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Share Your Story CTA */}
      <div className="mt-20 text-center">
        <div className="bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50">
          <div className="text-4xl mb-4">✍️</div>
          <h3 className="text-2xl font-bold text-white mb-4">Share Your Story</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Have an inspiring story from your math circle? We'd love to hear about your experiences and share them with our community.
          </p>
          <button className="bg-slate-700/50 hover:bg-slate-600/50 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-slate-600/50">
            Submit Your Story
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Register = () => {
  const [form, setForm] = React.useState({ name: '', location: '', email: '', description: '' });
  const [status, setStatus] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch('https://your-backend-url.com/api/circles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Registration successful! Welcome to the network.');
        setForm({ name: '', location: '', email: '', description: '' });
      } else {
        const data = await res.json();
        setStatus(data.error || 'Registration failed. Please try again.');
      }
    } catch {
      setStatus('Registration failed. Please check your connection and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Network</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300">
            Register your math circle and become part of our growing community of mathematical excellence.
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">Circle Name *</label>
              <input 
                type="text" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your math circle name"
              />
            </div>
            
            <div>
              <label className="block text-white font-semibold mb-2">City/State *</label>
              <input 
                type="text" 
                name="location" 
                value={form.location} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., San Francisco, CA"
              />
            </div>
            
            <div>
              <label className="block text-white font-semibold mb-2">Contact Email *</label>
              <input 
                type="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your-email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-white font-semibold mb-2">Description</label>
              <textarea 
                name="description" 
                value={form.description} 
                onChange={handleChange} 
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Tell us about your math circle (optional)"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Register Circle
            </button>
          </form>
          
          {status && (
            <div className={`mt-6 p-4 rounded-xl text-center font-semibold ${
              status.includes('successful') 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Outreach = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Outreach Opportunities</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover ways to make a difference in your community through mathematics education and outreach programs.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "School Partnerships", description: "Partner with local schools to provide math enrichment programs", icon: "🏫" },
          { title: "Community Workshops", description: "Host workshops for students and families in your community", icon: "👨‍👩‍👧‍👦" },
          { title: "Competition Hosting", description: "Organize local math competitions and tournaments", icon: "🏆" },
          { title: "Online Tutoring", description: "Provide virtual math tutoring to students worldwide", icon: "💻" },
          { title: "Research Mentorship", description: "Guide students through mathematical research projects", icon: "🔬" },
          { title: "Resource Sharing", description: "Share your math circle's resources with other organizations", icon: "📚" }
        ].map((opportunity, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <div className="text-4xl mb-4">{opportunity.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{opportunity.title}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{opportunity.description}</p>
            <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LiveTracker = ({ count }: { count: number }) => (
  count > HIGH_CIRCLE_THRESHOLD ? (
    <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded-2xl shadow-2xl text-center font-bold animate-pulse border border-white/20 backdrop-blur-sm">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
        <span>Live: {count} circles connected!</span>
      </div>
    </div>
  ) : null
);

function App() {
  const [circleCount, setCircleCount] = React.useState(0);

  React.useEffect(() => {
    fetch('https://your-backend-url.com/api/circles/count')
      .then(res => res.json())
      .then(data => setCircleCount(data.count || 0))
      .catch(() => setCircleCount(0));
  }, []);

  return (
    <Router>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-2xl border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Sleek Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-500 rounded-lg border border-slate-500/50 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-slate-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-slate-200 group-hover:text-white transition-colors duration-300">MATH</span>
                <span className="text-xs text-slate-400 font-bold tracking-wider">CIRCLES</span>
              </div>
            </Link>

            {/* Sleek Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {[
                { to: '/about', label: 'About' },
                { to: '/problem-sets', label: 'Resources' },
                { to: '/experiences', label: 'Stories' },
                { to: '/outreach', label: 'Outreach' },
                { to: '/contact', label: 'Contact' }
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-2 text-slate-400 hover:text-white transition-all duration-300 font-medium relative group text-sm"
                >
                  {link.label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-400 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            {/* Sleek CTA */}
            <Link 
              to="/register" 
              className="relative group px-6 py-2 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-semibold text-sm rounded-lg border border-slate-600/50 hover:border-slate-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-slate-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Join Network</span>
            </Link>
          </div>
        </div>
      </nav>
      
      <LiveTracker count={circleCount} />
      
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/problem-sets" element={<ProblemSets />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
