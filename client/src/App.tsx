import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { problemSets, categories } from "./problemSets";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import zyamaImg from './cropped-PXL_20250526_161532168.jpg';
import peteImg from './8f8e1999-869f-4922-89d8-4a90f4c0d1ec.jpg';

const HIGH_CIRCLE_THRESHOLD = 100;

// Color themes for each page
const pageThemes = {
  home: {
    primary: 'from-slate-600 to-slate-500',
    secondary: 'from-slate-700 to-slate-600',
    accent: 'from-blue-500 to-cyan-500',
    background: 'from-slate-900 via-black to-slate-900',
    text: 'text-slate-300',
    border: 'border-slate-700/50'
  },
  about: {
    primary: 'from-emerald-600 to-emerald-500',
    secondary: 'from-emerald-700 to-emerald-600',
    accent: 'from-emerald-500 to-teal-500',
    background: 'from-emerald-900 via-black to-emerald-900',
    text: 'text-emerald-300',
    border: 'border-emerald-700/50'
  },
  problems: {
    primary: 'from-purple-600 to-purple-500',
    secondary: 'from-purple-700 to-purple-600',
    accent: 'from-purple-500 to-pink-500',
    background: 'from-purple-900 via-black to-purple-900',
    text: 'text-purple-300',
    border: 'border-purple-700/50'
  },
  circles: {
    primary: 'from-orange-600 to-orange-500',
    secondary: 'from-orange-700 to-orange-600',
    accent: 'from-orange-500 to-red-500',
    background: 'from-orange-900 via-black to-orange-900',
    text: 'text-orange-300',
    border: 'border-orange-700/50'
  },
  register: {
    primary: 'from-blue-600 to-blue-500',
    secondary: 'from-blue-700 to-blue-600',
    accent: 'from-blue-500 to-indigo-500',
    background: 'from-blue-900 via-black to-blue-900',
    text: 'text-blue-300',
    border: 'border-blue-700/50'
  },
  contact: {
    primary: 'from-indigo-600 to-indigo-500',
    secondary: 'from-indigo-700 to-indigo-600',
    accent: 'from-indigo-500 to-purple-500',
    background: 'from-indigo-900 via-black to-indigo-900',
    text: 'text-indigo-300',
    border: 'border-indigo-700/50'
  }
};

// Hook to get current page theme
const usePageTheme = () => {
  const location = useLocation();
  const path = location.pathname;
  
  if (path === '/') return pageThemes.home;
  if (path === '/about') return pageThemes.about;
  if (path.startsWith('/problem-sets')) return pageThemes.problems;
  if (path === '/circles') return pageThemes.circles;
  if (path === '/register') return pageThemes.register;
  if (path === '/contact') return pageThemes.contact;
  
  return pageThemes.home;
};

// Interactive Navigation Component
const Navigation = () => {
  const location = useLocation();
  const theme = usePageTheme();
  
  const navItems = [
    { to: '/about', label: 'About' },
    { to: '/problem-sets', label: 'Problem Sets' },
    { to: '/circles', label: 'Active Circles' },
    { to: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/problem-sets') {
      return location.pathname.startsWith('/problem-sets');
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-2xl border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Not clickable */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className={`w-8 h-8 bg-gradient-to-br ${theme.primary} rounded-lg border border-slate-500/50 flex items-center justify-center`}>
                <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-slate-200">MATH</span>
              <span className="text-xs text-slate-400 font-bold tracking-wider">CIRCLE NETWORK</span>
            </div>
          </div>

          {/* Interactive Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 transition-all duration-300 font-medium relative group text-sm ${
                  isActive(link.to) 
                    ? `text-white ${theme.text}` 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${theme.accent} transition-all duration-300 ${
                  isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </Link>
            ))}
          </div>

          {/* Interactive CTA */}
          <Link 
            to="/register" 
            className={`relative group px-6 py-2 bg-gradient-to-r ${theme.primary} text-white font-semibold text-sm rounded-lg border ${theme.border} hover:border-slate-500 transition-all duration-300 transform hover:scale-105`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${theme.secondary} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            <span className="relative z-10">Join the Network</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Home Page Component
const Home = () => {
  const theme = usePageTheme();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Matrix-style falling numbers */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-slate-600/20 text-lg font-mono animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${10 + Math.random() * 5}s`
              }}
            >
              {Math.floor(Math.random() * 10)}
            </div>
          ))}
        </div>
        
        {/* Central Holographic Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className={`w-96 h-96 rounded-full bg-gradient-to-r ${theme.accent} opacity-10 animate-pulse`}></div>
            <div className={`absolute inset-8 w-80 h-80 rounded-full bg-gradient-to-r ${theme.primary} opacity-15 animate-pulse`} style={{animationDelay: '0.5s'}}></div>
            <div className={`absolute inset-16 w-64 h-64 rounded-full bg-gradient-to-r ${theme.secondary} opacity-20 animate-pulse`} style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        {/* Orbiting Elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-slate-400/30 rounded-full animate-orbit"
              style={{
                left: '50%',
                top: '50%',
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${12 + i * 2}s`,
                transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateX(${250 + i * 30}px)`
              }}
            />
          ))}
        </div>
        
        {/* Additional orbiting rings */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-orbit"
              style={{
                left: '50%',
                top: '50%',
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${8 + i * 3}s`,
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(${180 + i * 20}px)`
              }}
            />
          ))}
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 bg-gradient-to-br ${theme.primary} opacity-20 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
                transform: `rotate(${i * 24}deg)`,
                borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0%' : '25%'
              }}
            />
          ))}
        </div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-12 transform hover:scale-105 transition-transform duration-500">
              <div className={`w-32 h-32 bg-gradient-to-br ${theme.primary} rounded-3xl border border-slate-500/50 backdrop-blur-sm flex items-center justify-center mx-auto mb-8 group hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                <svg className="w-16 h-16 text-slate-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-tight">
              <span className="block">NATIONAL</span>
              <span className={`block bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}>MATH CIRCLE</span>
              <span className="block">NETWORK</span>
            </h1>
            
            <p className={`text-2xl md:text-3xl ${theme.text} max-w-5xl mx-auto mb-12 leading-relaxed`}>
              Connecting high school students through <span className="text-slate-200 font-semibold">collaborative mathematical exploration</span> and 
              <span className="text-slate-200 font-semibold"> innovative problem-solving</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                to="/register" 
                className={`group relative px-10 py-5 bg-gradient-to-r ${theme.primary} text-white font-bold text-xl rounded-2xl border border-slate-500/50 hover:border-slate-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${theme.secondary} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <span className="relative z-10 flex items-center">
                  Join the Network
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link 
                to="/problem-sets" 
                className={`group relative px-10 py-5 bg-slate-800/50 backdrop-blur-sm text-white font-bold text-xl rounded-2xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Explore Problems
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-5xl md:text-6xl font-bold text-center mb-20 ${theme.text}`}>
              What We Offer
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Problem Sets",
                  description: "Access our growing library of challenging mathematical problems, sorted by difficulty and topic.",
                  icon: "📚",
                  delay: "0s",
                  color: "from-blue-500/20 to-cyan-500/20"
                },
                {
                  title: "Active Circles",
                  description: "Connect with math circles across the country and find one near you.",
                  icon: "🌐",
                  delay: "0.2s",
                  color: "from-emerald-500/20 to-teal-500/20"
                },
                {
                  title: "Collaborative Learning",
                  description: "Join monthly meetings to share insights and learn from peers nationwide.",
                  icon: "🤝",
                  delay: "0.4s",
                  color: "from-purple-500/20 to-pink-500/20"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`group relative bg-slate-800/40 backdrop-blur-md rounded-3xl p-10 text-center hover:scale-105 transition-all duration-500 transform overflow-hidden border ${theme.border} hover:border-slate-600/50`}
                  style={{animationDelay: feature.delay}}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className={`text-3xl font-bold mb-6 ${theme.text}`}>{feature.title}</h3>
                    <p className={`${theme.text} opacity-80 leading-relaxed text-lg`}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className={`bg-slate-800/40 backdrop-blur-md rounded-3xl p-12 border ${theme.border} group hover:border-slate-600/50 transition-all duration-500`}>
              <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${theme.text}`}>
                Ready to Join the Network?
              </h2>
              <p className={`text-xl ${theme.text} mb-10 leading-relaxed`}>
                Connect with math circles nationwide and start your mathematical journey today.
              </p>
              <Link 
                to="/register" 
                className={`inline-block px-10 py-5 bg-gradient-to-r ${theme.primary} text-white font-bold text-xl rounded-2xl border border-slate-500/50 hover:border-slate-400/50 transition-all duration-300 transform hover:scale-105 shadow-2xl`}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Page Component
const About = () => {
  const theme = usePageTheme();
  
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20 px-6 relative overflow-hidden`}>
      {/* Creative Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900`}></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'matrix 30s linear infinite'
          }}></div>
        </div>

        {/* Floating Mathematical Symbols */}
        <div className="absolute inset-0">
          {['∑', '∫', 'π', '∞', '√', '±', '×', '÷', '=', '≠', '≤', '≥', '∈', '∉', '⊂', '⊃'].map((symbol, i) => (
            <div
              key={i}
              className={`absolute text-3xl ${theme.text} opacity-15 animate-float font-mono`}
              style={{
                left: `${10 + i * 5}%`,
                top: `${15 + i * 4}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            >
              {symbol}
            </div>
          ))}
        </div>

        {/* Orbiting Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-indigo-400/30 rounded-full animate-orbit"
              style={{
                left: '20%',
                top: '30%',
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${15 + i * 3}s`,
                transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateX(${120 + i * 40}px)`
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-6 h-6 bg-gradient-to-br ${theme.primary} opacity-10 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${10 + Math.random() * 5}s`,
                transform: `rotate(${i * 18}deg)`,
                borderRadius: i % 4 === 0 ? '50%' : i % 4 === 1 ? '0%' : i % 4 === 2 ? '25%' : '0%'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Co-Founders Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">Co-Founders</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            {/* Pete Olhava Placeholder */}
            <div className="flex flex-col items-center">
              <img src={peteImg} alt="Pete Olhava" className="w-40 h-40 rounded-full object-cover border-4 border-slate-300/40 shadow-lg mb-4" />
              <p className="text-white text-2xl font-semibold">Pete Olhava</p>
              <p className="text-slate-400 text-lg font-medium">Co-Founder</p>
            </div>
            {/* Zyama Teytelman */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-400 shadow-lg mb-4 flex items-center justify-center">
                <img
                  src={zyamaImg}
                  alt="Zyama Teytelman"
                  className="w-full h-full object-cover object-center"
                  style={{ transform: 'scale(2.2) translateY(13%)' }}
                />
              </div>
              <p className="text-white text-2xl font-semibold">Zyama Teytelman</p>
              <p className="text-slate-400 text-lg font-medium">Co-Founder</p>
            </div>
          </div>
        </div>
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
            <span className="block">ABOUT</span>
            <span className={`block bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}>US</span>
          </h1>
          <p className={`text-2xl ${theme.text} max-w-4xl mx-auto leading-relaxed`}>
            Building a nationwide network of mathematical minds
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className={`bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border ${theme.border} group hover:border-slate-600/50 transition-all duration-500`}>
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className={`text-lg ${theme.text} leading-relaxed`}>
                To connect high school students across the country through collaborative mathematical exploration, 
                fostering a community where curiosity meets challenge and innovation thrives.
              </p>
            </div>
            
            <div className={`bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border ${theme.border} group hover:border-slate-600/50 transition-all duration-500`}>
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className={`text-lg ${theme.text} leading-relaxed`}>
                A world where every student has access to engaging mathematical experiences that inspire 
                lifelong learning and creative problem-solving.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className={`bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border ${theme.border} group hover:border-slate-600/50 transition-all duration-500`}>
              <h3 className="text-3xl font-bold text-white mb-6">Core Values</h3>
              <ul className={`space-y-4 ${theme.text} text-lg`}>
                <li className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${theme.accent}`}></div>
                  <span>Collaborative Learning</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${theme.accent}`}></div>
                  <span>Mathematical Excellence</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${theme.accent}`}></div>
                  <span>Innovation & Creativity</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${theme.accent}`}></div>
                  <span>Inclusive Community</span>
                </li>
              </ul>
            </div>
            
            <div className={`bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border ${theme.border} group hover:border-slate-600/50 transition-all duration-500`}>
              <h3 className="text-3xl font-bold text-white mb-6">What We Do</h3>
              <p className={`text-lg ${theme.text} leading-relaxed`}>
                We curate challenging problem sets, facilitate monthly collaborative sessions, 
                and maintain an active network of math circles across the country, providing 
                students with opportunities to explore advanced mathematics together.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/register" 
            className={`inline-block px-10 py-5 bg-gradient-to-r ${theme.primary} text-white font-bold text-xl rounded-2xl border border-slate-500/50 hover:border-slate-400/50 transition-all duration-300 transform hover:scale-105 shadow-2xl`}
          >
            Join Our Network
          </Link>
        </div>
      </div>
    </div>
  );
};

const Register = () => {
  const theme = usePageTheme();
  const [formData, setFormData] = useState({
    circleName: '',
    leaderName: '',
    email: '',
    location: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 py-20 px-6 relative overflow-hidden`}>
        {/* Creative Background */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900`}></div>
          
          {/* Success Animation Elements */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-green-400/40 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className={`bg-slate-800/50 backdrop-blur-md rounded-3xl p-12 border ${theme.border} group hover:border-slate-600/50 transition-all duration-500`}>
            <div className="text-6xl mb-8">🎉</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Welcome to the Network!</h1>
            <p className={`text-xl ${theme.text} mb-8 leading-relaxed`}>
              Thank you for joining the National Math Circle Network. We're excited to have you on board!
            </p>
            <p className={`text-lg ${theme.text} mb-10 leading-relaxed`}>
              You'll receive a confirmation email within 24 hours with next steps and access to our resources.
            </p>
            <div className="space-y-4">
              <Link 
                to="/problem-sets" 
                className={`inline-block px-8 py-4 bg-gradient-to-r ${theme.primary} text-white font-bold rounded-2xl border border-slate-500/50 hover:border-slate-400/50 transition-all duration-300 transform hover:scale-105`}
              >
                Explore Problem Sets
              </Link>
              <br />
              <Link 
                to="/" 
                className={`inline-block px-8 py-4 bg-slate-700/50 text-white font-bold rounded-2xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 transform hover:scale-105`}
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 py-20 px-6 relative overflow-hidden`}>
      {/* Creative Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900`}></div>
        
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

        {/* Floating Registration Symbols */}
        <div className="absolute inset-0">
          {['📝', '✍️', '📋', '✅', '🎯', '🚀', '🌟', '💫', '⭐', '🔗'].map((symbol, i) => (
            <div
              key={i}
              className={`absolute text-2xl opacity-20 animate-float`}
              style={{
                left: `${10 + i * 8}%`,
                top: `${15 + i * 6}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {symbol}
            </div>
          ))}
        </div>

        {/* Orbiting Elements */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400/40 rounded-full animate-orbit"
              style={{
                left: '30%',
                top: '40%',
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${20 + i * 2}s`,
                transform: `translate(-50%, -50%) rotate(${i * 36}deg) translateX(${150 + i * 20}px)`
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 bg-gradient-to-br ${theme.primary} opacity-10 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${10 + Math.random() * 5}s`,
                transform: `rotate(${i * 12}deg)`,
                borderRadius: i % 4 === 0 ? '50%' : i % 4 === 1 ? '0%' : i % 4 === 2 ? '25%' : '0%'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
            <span className="block">JOIN THE</span>
            <span className={`block bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}>NETWORK</span>
          </h1>
          <p className={`text-2xl ${theme.text} max-w-4xl mx-auto leading-relaxed`}>
            Register your math circle to connect with others and access our shared resources
          </p>
        </div>

        {/* Commitments Section */}
        <div className={`bg-slate-800/50 backdrop-blur-md border ${theme.border} rounded-3xl p-8 mb-12 group hover:border-slate-600/50 transition-all duration-500`}>
          <h2 className={`text-3xl font-bold mb-8 ${theme.text}`}>Network Commitments</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className={`w-8 h-8 bg-gradient-to-br ${theme.primary} rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className={`${theme.text} leading-relaxed text-lg`}>
                <strong>Meetings:</strong> Hold meetings at least once every 2 weeks (excluding holidays)
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className={`w-8 h-8 bg-gradient-to-br ${theme.primary} rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className={`${theme.text} leading-relaxed text-lg`}>
                <strong>Problem Sets:</strong> Create new problem sets for your meetings at least ½ the time
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className={`w-8 h-8 bg-gradient-to-br ${theme.primary} rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className={`${theme.text} leading-relaxed text-lg`}>
                <strong>Monthly Meetings:</strong> Leaders commit to joining our monthly zoom share outs
              </p>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className={`bg-slate-800/50 backdrop-blur-md border ${theme.border} rounded-3xl p-12 group hover:border-slate-600/50 transition-all duration-500`}>
          <h2 className={`text-3xl font-bold mb-8 ${theme.text}`}>Circle Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className={`block text-lg font-semibold mb-3 ${theme.text}`}>Circle Name *</label>
                <input
                  type="text"
                  name="circleName"
                  value={formData.circleName}
                  onChange={handleChange}
                  required
                  className={`w-full px-6 py-4 bg-slate-700/50 border ${theme.border} rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-all duration-300`}
                  placeholder="Enter your circle name"
                />
              </div>
              <div>
                <label className={`block text-lg font-semibold mb-3 ${theme.text}`}>Leader Name *</label>
                <input
                  type="text"
                  name="leaderName"
                  value={formData.leaderName}
                  onChange={handleChange}
                  required
                  className={`w-full px-6 py-4 bg-slate-700/50 border ${theme.border} rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-all duration-300`}
                  placeholder="Enter leader name"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className={`block text-lg font-semibold mb-3 ${theme.text}`}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-6 py-4 bg-slate-700/50 border ${theme.border} rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-all duration-300`}
                  placeholder="Enter contact email"
                />
              </div>
              <div>
                <label className={`block text-lg font-semibold mb-3 ${theme.text}`}>Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className={`w-full px-6 py-4 bg-slate-700/50 border ${theme.border} rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-all duration-300`}
                  placeholder="City, State"
                />
              </div>
            </div>
            
            <div>
              <label className={`block text-lg font-semibold mb-3 ${theme.text}`}>Circle Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className={`w-full px-6 py-4 bg-slate-700/50 border ${theme.border} rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 resize-none transition-all duration-300`}
                placeholder="Tell us about your math circle..."
              />
            </div>
            
            <div className="text-center pt-8">
              <button
                type="submit"
                className={`px-12 py-5 bg-gradient-to-r ${theme.primary} text-white font-bold text-xl rounded-2xl border border-slate-500/50 hover:border-slate-400/50 transition-all duration-300 transform hover:scale-105 shadow-2xl`}
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className={`bg-slate-800/50 backdrop-blur-md border ${theme.border} rounded-3xl p-8 mt-12 text-center group hover:border-slate-600/50 transition-all duration-500`}>
          <h2 className={`text-3xl font-bold mb-6 ${theme.text}`}>Questions?</h2>
          <p className={`${theme.text} leading-relaxed mb-6 text-lg`}>
            Have questions about joining the network? Contact us directly:
          </p>
          <p className={`text-xl font-semibold ${theme.text}`}>mathcirclenetwork@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const theme = usePageTheme();
  
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-20 px-6 relative overflow-hidden`}>
      {/* Creative Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900`}></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'matrix 35s linear infinite'
          }}></div>
        </div>

        {/* Floating Communication Symbols */}
        <div className="absolute inset-0">
          {['✉️', '📧', '💬', '📱', '🌐', '📞', '📨', '📬', '📭', '📮'].map((symbol, i) => (
            <div
              key={i}
              className={`absolute text-2xl opacity-20 animate-float`}
              style={{
                left: `${15 + i * 7}%`,
                top: `${20 + i * 5}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${7 + Math.random() * 3}s`
              }}
            >
              {symbol}
            </div>
          ))}
        </div>

        {/* Orbiting Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/40 rounded-full animate-orbit"
              style={{
                left: '80%',
                top: '70%',
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${18 + i * 2}s`,
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(${100 + i * 25}px)`
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 bg-gradient-to-br ${theme.primary} opacity-8 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${12 + Math.random() * 6}s`,
                transform: `rotate(${i * 15}deg)`,
                borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0%' : '25%'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
            <span className="block">GET IN</span>
            <span className={`block bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}>TOUCH</span>
          </h1>
          <p className={`text-2xl ${theme.text} max-w-3xl mx-auto leading-relaxed`}>
            Have questions? Want to join our network? We'd love to hear from you.
          </p>
        </div>

        <div className={`bg-slate-800/50 backdrop-blur-md rounded-3xl p-12 border ${theme.border} group hover:border-slate-600/50 transition-all duration-500`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className={`w-12 h-12 bg-gradient-to-br ${theme.primary} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-medium">Email</p>
                      <p className="text-white text-lg font-semibold">mathcirclenetwork@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className={`w-12 h-12 bg-gradient-to-br ${theme.secondary} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={zyamaImg} alt="Zyama Teytelman" className="w-16 h-16 rounded-full object-cover border-2 border-emerald-400 shadow" />
                      <div>
                        <p className="text-slate-400 text-sm font-medium">Founder</p>
                        <p className="text-white text-lg font-semibold">Zyama Teytelman</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-white mb-4">Response Time</h4>
                <p className={`${theme.text} leading-relaxed`}>
                  We typically respond to all inquiries within 24-48 hours. 
                  For urgent matters, please include "URGENT" in your subject line.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className={`bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30 group hover:border-slate-500/50 transition-all duration-300`}>
                <h4 className="text-xl font-bold text-white mb-4">Join Our Network</h4>
                <p className={`${theme.text} mb-6 leading-relaxed`}>
                  Ready to connect with math circles nationwide? 
                  Start your journey with us today.
                </p>
                <Link 
                  to="/register" 
                  className={`inline-block px-6 py-3 bg-gradient-to-r ${theme.primary} text-white font-semibold rounded-xl border border-slate-500/50 hover:border-slate-400/50 transition-all duration-300 transform hover:scale-105`}
                >
                  Register Now
                </Link>
              </div>
              
              <div className={`bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30 group hover:border-slate-500/50 transition-all duration-300`}>
                <h4 className="text-xl font-bold text-white mb-4">Explore Problems</h4>
                <p className={`${theme.text} mb-6 leading-relaxed`}>
                  Check out our collection of challenging mathematical problems 
                  designed to inspire and challenge.
                </p>
                <Link 
                  to="/problem-sets" 
                  className={`inline-block px-6 py-3 bg-gradient-to-r ${theme.secondary} text-white font-semibold rounded-xl border border-slate-500/50 hover:border-slate-400/50 transition-all duration-300 transform hover:scale-105`}
                >
                  View Problems
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

// Problem Sets Main Page
const ProblemSetsMain = () => {
  const theme = usePageTheme();
  
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 relative overflow-hidden`}>
      {/* Creative Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900`}></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '35px 35px',
            animation: 'matrix 20s linear infinite'
          }}></div>
        </div>

        {/* Matrix-style falling numbers */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute text-slate-600/30 text-lg font-mono animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${6 + Math.random() * 3}s`
              }}
            >
              {Math.floor(Math.random() * 10)}
            </div>
          ))}
        </div>
        
        {/* Floating Mathematical Symbols */}
        <div className="absolute inset-0">
          {['∑', '∫', 'π', '∞', '√', '±', '×', '÷', '=', '≠', '≤', '≥', '∈', '∉', '⊂', '⊃', '∩', '∪'].map((symbol, i) => (
            <div
              key={i}
              className={`absolute text-2xl ${theme.text} opacity-15 animate-float font-mono`}
              style={{
                left: `${8 + i * 5}%`,
                top: `${12 + i * 4}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${7 + Math.random() * 3}s`
              }}
            >
              {symbol}
            </div>
          ))}
        </div>

        {/* Orbiting Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-400/40 rounded-full animate-orbit"
              style={{
                left: '25%',
                top: '35%',
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${25 + i * 2}s`,
                transform: `translate(-50%, -50%) rotate(${i * 24}deg) translateX(${200 + i * 15}px)`
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 bg-gradient-to-br ${theme.primary} opacity-10 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
                transform: `rotate(${i * 9}deg)`,
                borderRadius: i % 4 === 0 ? '50%' : i % 4 === 1 ? '0%' : i % 4 === 2 ? '25%' : '0%'
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="pt-20 pb-16">
          <div className="max-w-6xl mx-auto px-6">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-block mb-8">
                <div className={`w-24 h-24 bg-gradient-to-br ${theme.primary} rounded-3xl border border-slate-400/30 backdrop-blur-sm flex items-center justify-center mb-6 group hover:scale-110 transition-all duration-500`}>
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">📚</span>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
                <span className="block">PROBLEM</span>
                <span className={`block bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}>SETS</span>
              </h1>
              <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Curated mathematical challenges designed to inspire and challenge students at every level
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {categories.map((category, index) => (
                <Link
                  key={category.key}
                  to={`/problem-sets/${slugify(category.key)}`}
                  className={`group relative bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 border ${theme.border} hover:border-slate-600/50 transition-all duration-500 cursor-pointer overflow-hidden transform hover:scale-105 hover:rotate-1`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                      {category.difficulty && (
                        <div className="text-xs text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">
                          {category.difficulty}
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-slate-200 transition-colors duration-300">{category.title}</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-slate-200 group-hover:text-white transition-colors duration-300">{category.count}</span>
                      <span className="text-slate-400 font-semibold transition-colors duration-300 text-sm group-hover:text-slate-300">
                        View Problems →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Interactive Stats Bar */}
            <div className={`bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 border ${theme.border} group hover:border-slate-600/50 transition-all duration-500`}>
              <div className="grid grid-cols-4 gap-8 text-center">
                {[
                  { number: problemSets.length.toString(), label: "Total Problems", icon: "📚" },
                  { number: (categories.length - 1).toString(), label: "Categories", icon: "🏷️" },
                  { number: "5", label: "Difficulty Levels", icon: "📈" },
                  { number: "24/7", label: "Available", icon: "⚡" }
                ].map((stat, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                    <div className="text-3xl font-black text-slate-200 group-hover:text-white transition-colors duration-300">{stat.number}</div>
                    <div className="text-sm text-slate-400 font-medium group-hover:text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Utility to create slugs from category keys
const slugify = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Dedicated pages for each category
const AllProblemsPage = () => <CategoryProblemsPage categoryKey="All" />;
const ProbabilityStatisticsPage = () => <CategoryProblemsPage categoryKey="Probability & Statistics" />;
const GameTheoryLogicPage = () => <CategoryProblemsPage categoryKey="Game Theory & Logic" />;
const ProbabilityLogicPage = () => <CategoryProblemsPage categoryKey="Probability & Logic" />;
const CombinatoricsGeometryPage = () => <CategoryProblemsPage categoryKey="Combinatorics & Geometry" />;
const AppliedMathematicsPage = () => <CategoryProblemsPage categoryKey="Applied Mathematics" />;

// Generic category problems page with improved math formatting
function CategoryProblemsPage({ categoryKey }: { categoryKey: string }) {
  const navigate = useNavigate();
  const theme = usePageTheme();
  const category = categories.find(cat => cat.key === categoryKey);
  const filteredSets = categoryKey === 'All'
    ? problemSets
    : problemSets.filter(set => set.category === categoryKey);
  const [pdfPreview, setPdfPreview] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState<number | null>(null);

  // Generate LaTeX-style PDF
  const generatePDF = (setIdx: number) => {
    const set = filteredSets[setIdx];
    const pdf = new jsPDF();
    
    // Set up fonts and styling
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0);
    
    // Title
    pdf.text(set.title, 20, 30);
    
    // Category
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(100, 100, 100);
    pdf.text(`Category: ${set.category}`, 20, 45);
    
    // Description
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    const descriptionLines = pdf.splitTextToSize(set.description, 170);
    pdf.text(descriptionLines, 20, 60);
    
    let yPosition = 80 + (descriptionLines.length * 5);
    
    // Problems
    set.problems.forEach((problem, probIdx) => {
      if (yPosition > 250) {
        pdf.addPage();
        yPosition = 30;
      }
      
      // Problem number
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 0, 0);
      pdf.text(`Problem ${probIdx + 1}.`, 20, yPosition);
      
      // Problem text
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      const problemLines = pdf.splitTextToSize(problem.question, 170);
      pdf.text(problemLines, 20, yPosition + 8);
      
      yPosition += 15 + (problemLines.length * 5);
      
      // Subparts
      if (problem.subparts) {
        problem.subparts.forEach((subpart, subIdx) => {
          if (yPosition > 250) {
            pdf.addPage();
            yPosition = 30;
          }
          
          const subpartText = `(${String.fromCharCode(97 + subIdx)}) ${subpart}`;
          const subpartLines = pdf.splitTextToSize(subpartText, 160);
          pdf.text(subpartLines, 30, yPosition);
          yPosition += 8 + (subpartLines.length * 5);
        });
      }
      
      yPosition += 10;
    });
    
    // Convert to data URL for preview
    const pdfDataUrl = pdf.output('datauristring');
    setPdfPreview(pdfDataUrl);
    setShowPreview(setIdx);
    
    // Download the PDF
    pdf.save(`${set.title.replace(/[^a-z0-9]/gi, '_')}.pdf`);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.background} py-20 px-6 relative overflow-hidden`}>
      {/* Creative Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.background}`}></div>
        
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

        {/* Floating Mathematical Symbols */}
        <div className="absolute inset-0">
          {['∑', '∫', 'π', '∞', '√', '±', '×', '÷', '=', '≠', '≤', '≥'].map((symbol, i) => (
            <div
              key={i}
              className={`absolute text-2xl ${theme.text} opacity-20 animate-float font-mono`}
              style={{
                left: `${10 + i * 7}%`,
                top: `${15 + i * 6}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${5 + Math.random() * 3}s`
              }}
            >
              {symbol}
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Back Button */}
        <div className="mb-12">
          <button
            onClick={() => navigate('/problem-sets')}
            className="inline-flex items-center text-slate-400 hover:text-white transition-colors duration-300 mb-8 group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:translate-x-[-2px] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Categories
          </button>
          
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${theme.primary} rounded-2xl border border-slate-400/30 backdrop-blur-sm flex items-center justify-center mb-4 group hover:scale-110 transition-all duration-500`}>
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{category?.icon}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">{category?.title || 'All Problems'}</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">{category?.description || 'All problem sets'}</p>
          </div>
        </div>

        {/* Problem Sets Display with Improved Formatting */}
        <div className="space-y-16">
          {filteredSets.length === 0 ? (
            <div className="text-slate-400 text-center text-lg">No problem sets found for this category.</div>
          ) : (
            filteredSets.map((set, idx) => (
              <div key={idx} className={`bg-slate-900/70 rounded-3xl border ${theme.border} shadow-xl p-8 md:p-12 relative overflow-hidden group hover:border-slate-600/50 transition-all duration-500`}>
                {/* PDF Actions */}
                <div className="flex justify-end gap-3 mb-6">
                  <button
                    onClick={() => generatePDF(idx)}
                    className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-lg shadow hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Preview and Download PDF
                  </button>
                  <button
                    onClick={() => setShowPreview(showPreview === idx ? null : idx)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Preview PDF
                  </button>
                </div>

                {/* PDF Preview Modal */}
                {showPreview === idx && pdfPreview && (
                  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
                      <div className="flex justify-between items-center p-4 border-b">
                        <h3 className="text-lg font-semibold text-gray-800">PDF Preview - {set.title}</h3>
                        <button
                          onClick={() => setShowPreview(null)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <iframe
                        src={pdfPreview}
                        className="w-full h-[70vh]"
                        title="PDF Preview"
                      />
                    </div>
                  </div>
                )}

                <div className="mb-8 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${theme.primary} flex items-center justify-center text-2xl text-slate-300 font-black group-hover:scale-110 transition-transform duration-300`}>
                    {set.category[0]}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-slate-200 transition-colors duration-300">{set.title}</h3>
                    <div className="text-slate-400 text-sm font-mono uppercase tracking-wider">{set.category}</div>
                  </div>
                </div>
                
                <div className="text-slate-300 mb-8 text-lg leading-relaxed bg-slate-800/40 rounded-xl p-6 border border-slate-700/40">
                  {set.description}
                </div>
                
                <div className="space-y-8">
                  {set.problems.map((prob, i) => (
                    <div key={i} className={`bg-slate-800/60 rounded-xl p-8 border ${theme.border} group-hover:border-slate-600/50 transition-all duration-300`}>
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${theme.accent} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold text-lg mb-4 leading-relaxed">
                            {prob.question}
                          </div>
                          
                          {prob.subparts && (
                            <div className="space-y-4 ml-4">
                              {prob.subparts.map((sub, j) => (
                                <div key={j} className="flex items-start gap-3">
                                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${theme.secondary} flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1`}>
                                    {String.fromCharCode(97 + j)}
                                  </div>
                                  <div className="text-slate-300 text-base leading-relaxed flex-1">
                                    {sub}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// Active Circles Page Component
const ActiveCirclesPage = () => {
  const theme = usePageTheme();
  
  const circles = [
    {
      name: "Newton Math Circle",
      president: "Zyama Teytelman",
      location: "Newton, MA",
      contact: "mathcirclenetwork@gmail.com",
      description: "A vibrant math circle focused on collaborative problem-solving and mathematical exploration.",
      coordinates: { lat: 42.3370, lng: -71.2092 }
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 py-20 px-6 relative overflow-hidden`}>
      {/* Creative Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900`}></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '45px 45px',
            animation: 'matrix 28s linear infinite'
          }}></div>
        </div>

        {/* Floating Location Symbols */}
        <div className="absolute inset-0">
          {['📍', '🌍', '🗺️', '🏛️', '🎓', '📚', '🔗', '🌐', '🏫', '🎯'].map((symbol, i) => (
            <div
              key={i}
              className={`absolute text-2xl opacity-20 animate-float`}
              style={{
                left: `${12 + i * 7}%`,
                top: `${18 + i * 5}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${9 + Math.random() * 3}s`
              }}
            >
              {symbol}
            </div>
          ))}
        </div>

        {/* Orbiting Elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/40 rounded-full animate-orbit"
              style={{
                left: '70%',
                top: '60%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${22 + i * 2}s`,
                transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateX(${130 + i * 25}px)`
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 bg-gradient-to-br ${theme.primary} opacity-8 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${11 + Math.random() * 4}s`,
                transform: `rotate(${i * 10}deg)`,
                borderRadius: i % 5 === 0 ? '50%' : i % 5 === 1 ? '0%' : i % 5 === 2 ? '25%' : i % 5 === 3 ? '0%' : '50%'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
            <span className="block">ACTIVE</span>
            <span className={`block bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}>CIRCLES</span>
          </h1>
          <p className={`text-2xl ${theme.text} max-w-4xl mx-auto leading-relaxed`}>
            Find math circles near you and connect with their leaders
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className={`bg-slate-800/50 backdrop-blur-md border ${theme.border} rounded-3xl p-12 group hover:border-slate-600/50 transition-all duration-500`}>
            <h2 className={`text-3xl font-bold mb-8 ${theme.text}`}>Network Map</h2>
            <div className="bg-slate-700/30 rounded-2xl p-12 text-center group-hover:scale-105 transition-transform duration-500">
              <div className="text-8xl mb-6">🗺️</div>
              <p className={`${theme.text} opacity-80 mb-6 text-lg`}>
                Interactive map showing registered math circles across the country
              </p>
              <p className={`text-base ${theme.text} opacity-60`}>
                Map integration coming soon - currently showing Newton Math Circle
              </p>
            </div>
          </div>
        </div>

        {/* Circles List */}
        <div className="mb-16">
          <h2 className={`text-4xl font-bold mb-12 text-center ${theme.text}`}>Registered Circles</h2>
          <div className="grid gap-8">
            {circles.map((circle, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-md border ${theme.border} rounded-3xl p-12 group hover:border-slate-600/50 transition-all duration-500`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                  <div>
                    <h3 className={`text-3xl font-bold mb-3 ${theme.text}`}>{circle.name}</h3>
                    <p className={`${theme.text} opacity-80 text-lg`}>{circle.location}</p>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <div className={`inline-block px-6 py-3 bg-gradient-to-r ${theme.primary} text-white font-bold rounded-xl text-lg`}>
                      Active
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className={`text-xl font-semibold mb-3 ${theme.text}`}>President</h4>
                    <p className={`${theme.text} opacity-80 text-lg`}>{circle.president}</p>
                  </div>
                  <div>
                    <h4 className={`text-xl font-semibold mb-3 ${theme.text}`}>Contact</h4>
                    <p className={`${theme.text} opacity-80 text-lg`}>{circle.contact}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className={`text-xl font-semibold mb-3 ${theme.text}`}>About</h4>
                  <p className={`${theme.text} opacity-80 leading-relaxed text-lg`}>{circle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration CTA */}
        <div className={`bg-slate-800/50 backdrop-blur-md border ${theme.border} rounded-3xl p-12 text-center group hover:border-slate-600/50 transition-all duration-500`}>
          <h2 className={`text-3xl font-bold mb-6 ${theme.text}`}>Register Your Circle</h2>
          <p className={`${theme.text} leading-relaxed mb-8 text-lg`}>
            Is your math circle not listed here? Register with our network to connect with other circles 
            and access our shared problem sets and resources.
          </p>
          <Link 
            to="/register" 
            className={`inline-block px-10 py-5 bg-gradient-to-r ${theme.primary} text-white font-bold text-xl rounded-2xl border border-slate-500/50 hover:border-slate-400/50 transition-all duration-300 transform hover:scale-105 shadow-2xl`}
          >
            Register Your Circle
          </Link>
        </div>
      </div>
    </div>
  );
};

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
      <Navigation />
      
      <LiveTracker count={circleCount} />
      
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/problem-sets" element={<ProblemSetsMain />} />
          <Route path="/problem-sets/all" element={<AllProblemsPage />} />
          <Route path="/problem-sets/probability-statistics" element={<ProbabilityStatisticsPage />} />
          <Route path="/problem-sets/game-theory-logic" element={<GameTheoryLogicPage />} />
          <Route path="/problem-sets/probability-logic" element={<ProbabilityLogicPage />} />
          <Route path="/problem-sets/combinatorics-geometry" element={<CombinatoricsGeometryPage />} />
          <Route path="/problem-sets/applied-mathematics" element={<AppliedMathematicsPage />} />
          <Route path="/circles" element={<ActiveCirclesPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
