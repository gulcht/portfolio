"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  // Added smooth scroll functionality
  const handleLinkClick = (e: any, href: any) => {
    e.preventDefault()
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
    
    // Get the target element
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      // Scroll smoothly to the element
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      
      // Update URL without page reload
      window.history.pushState(null, '', href)
    }
  }
  
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white border-b-2 border-black" : "bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between py-4">
        <Link href="#home" className="text-xl font-mono text-black font-semibold">
          Gulcht<span className="text-gray-600 font-bold">.PORT</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-mono text-black hover:text-gray-600 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          
          <Button className="bg-black hover:bg-black/80 text-white font-mono rounded-none">Resume</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden text-black" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="h-6 w-6" />
        </Button>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col">
            <div className="flex justify-end p-4">
              <Button variant="ghost" size="icon" className="text-black" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black text-xl font-mono hover:text-gray-600 transition-colors cursor-pointer"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              
              <Button className="bg-black hover:bg-black/80 text-white font-mono rounded-none mt-4">Resume</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}