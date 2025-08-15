"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail } from "lucide-react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

export function MeetOurTeam() {
  const teamMembers = [
    {
      name: "Freadam Abebe",
      position: "CO-Founder & Product Manager",
      bio: "Visionary leader with 8+ years in software development. Passionate about using technology to solve Ethiopian business challenges.",
      image: "/our-teams/Freadam_Abebe.jpg",
      linkedin: "#",
      github: "#",
      email: "zemenay@zemenaytech.com",
    },
    {
      name: "Tehetna Askal",
      position: "CO-Founder & Project Manager",
      bio: "Full-stack expert specializing in React, Node.js, and cloud architecture. Leads our technical innovation and development standards.",
      image: "/our-teams/Tihitina_Askal.jpg",
      linkedin: "#",
      github: "#",
      email: "kidist@zemenaytech.com",
    },
    {
      name: "Michael Engida",
      position: "Co-Founder & Business Development",
      bio: "Mobile development specialist with expertise in React Native and Flutter. Creates seamless mobile experiences for our clients.",
      image: "/our-teams/Michael_Engida.jpg",
      linkedin: "#",
      github: "#",
      email: "samuel@zemenaytech.com",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-1000">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm font-medium rounded-full text-[#1e3a8a] dark:text-blue-500 bg-transparent"
          >
            <FontAwesomeIcon icon={faUsers} /> Our People
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black dark:text-white transition-colors duration-500">
            Meet Our{" "}
            <span className="text-[#1e3a8a] dark:text-blue-500">Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-500">
            Behind every great project is a passionate team. Meet the talented
            Ethiopian professionals who bring your digital visions to life.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-gray-200 dark:border-gray-600 hover:border-[#1e3a8a] dark:hover:border-blue-600 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl bg-white dark:bg-slate-900 group animate-scale-in hover:scale-102"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-600 group-hover:border-[#1e3a8a]/50 dark:group-hover:border-blue-400/50 transition-colors duration-300">
                    <Image
                      src={
                        member.image ||
                        `/placeholder.svg?height=96&width=96&text=${
                          member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("") || "/placeholder.svg"
                        }`
                      }
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="text-[#1e3a8a] dark:text-blue-500 font-medium mb-4 transition-colors duration-300">
                  {member.position}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 transition-colors duration-300">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <Link
                    href={member.linkedin}
                    className="w-8 h-8 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#1e3a8a] dark:hover:bg-blue-600 hover:text-white dark:hover:text-gray-900 transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link
                    href={member.github}
                    className="w-8 h-8 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#1e3a8a] dark:hover:bg-blue-600 hover:text-white dark:hover:text-gray-900 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#1e3a8a] dark:hover:bg-blue-600 hover:text-white dark:hover:text-gray-900 transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16 animate-fade-in delay-800">
          <Card className="border-gray-200 dark:border-gray-600 bg-white dark:bg-slate-900 max-w-2xl mx-auto transition-colors duration-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 transition-colors duration-300">
                Join Our Team
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                We're always looking for talented Ethiopian developers,
                designers, and innovators to join our growing team.
              </p>
              <Badge
                variant="outline"
                className="border-[#1e3a8a] dark:border-blue-600 text-[#1e3a8a] dark:text-blue-500 hover:bg-[#1e3a8a] dark:hover:bg-blue-600 hover:text-white dark:hover:text-gray-900 cursor-pointer transition-all duration-300"
              >
                View Open Positions
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
