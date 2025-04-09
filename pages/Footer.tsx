"use client"

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-8 bg-black text-white">
            <div className="container px-4 text-center">
                <p className="font-mono">
                    © {new Date().getFullYear()} Gulcht. All rights reserved.
                </p>
                <div className="flex justify-center gap-4 mt-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:text-black"
                    >
                        <Github className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:text-black"
                    >
                        <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:text-black"
                    >
                        <Mail className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </footer>
    );
};
