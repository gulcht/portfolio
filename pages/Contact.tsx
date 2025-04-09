"use client"

import { Github, Linkedin, Mail, Gitlab } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 border-t-2 border-black">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-mono text-center mb-12 text-black">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6 p-6 border-2 border-black bg-white">
            <h3 className="text-xl font-mono text-black">
              Let's Work Together
            </h3>
            <p className="text-black/80 font-mono">
              I'm currently available for freelance work and full-time
              opportunities. If you have a project that needs coding expertise,
              a problem that needs solving, or if you're looking to hire a
              dedicated developer, feel free to contact me.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-black" />
                <span className="font-mono">pn.glcht@gmail.com</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-black" />
                <span className="font-mono">linkedin.com/in/yourname</span>
              </div> */}
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-black" />
                <span className="font-mono">github.com/gulct</span>
              </div>
              <div className="flex items-center gap-3">
                <Gitlab className="h-5 w-5 text-black" />
                <span className="font-mono">gitlab.com/gulcht</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-2 border-black bg-white">
            <h3 className="text-xl font-mono text-black mb-4">
              Find Me Here
            </h3>
            <div className="w-full h-4/6 relative mb-4">
              <iframe 
                className="border w-full h-full border-gray-300"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4050695562!2d103.04401931534165!3d15.837678773625875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUwJzE1LjYiTiAxMDPCsDAyJzQ2LjMiRQ!5e0!3m2!1sen!2sus!4v1617984755950!5m2!1sen!2sus`}
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-l font-mono text-black mb-4">
              Ban Het Khai, Na Chueak, Maha Sarakham 44170, Thailand
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};