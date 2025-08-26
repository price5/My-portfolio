
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Briefcase, GraduationCap, Lightbulb, Send, Code, Database, Server, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContactForm } from '@/components/contact-form';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site for a local artisan, built with Next.js and Stripe for payments.",
    image: "https://picsum.photos/600/400?random=1",
    tags: ["Client Work", "Next.js", "Stripe"],
    hint: "online shopping",
  },
  {
    title: "College Event Manager",
    description: "A web app to manage and promote college events, workshops, and fests, streamlining registration.",
    image: "https://picsum.photos/600/400?random=2",
    tags: ["College Project", "React", "Firebase"],
    hint: "event management",
  },
  {
    title: "Personal Portfolio V1",
    description: "My first personal portfolio website, exploring creative designs and web animations.",
    image: "https://picsum.photos/600/400?random=3",
    tags: ["Personal Project", "HTML/CSS", "JavaScript"],
    hint: "web design",
  },
   {
    title: "Restaurant Website",
    description: "A modern, responsive website for a local restaurant to showcase their menu and handle online reservations.",
    image: "https://picsum.photos/600/400?random=4",
    tags: ["Client Work", "React", "UI/UX"],
    hint: "food menu",
  },
];

const skills = [
  { name: "React & Next.js", icon: <Code className="w-6 h-6" /> },
  { name: "Node.js & Express", icon: <Server className="w-6 h-6" /> },
  { name: "SQL & NoSQL Databases", icon: <Database className="w-6 h-6" /> },
  { name: "UI/UX Design", icon: <Lightbulb className="w-6 h-6" /> },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link href="/" className="font-headline text-2xl font-bold text-primary">
            Varun Rao
          </Link>
          <nav className="hidden md:flex gap-6 font-headline text-lg">
            <Link href="#projects" className="transition-colors hover:text-primary">Projects</Link>
            <Link href="#codenuvix" className="transition-colors hover:text-primary">Codenuvix</Link>
            <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section id="home" className="container mx-auto py-20 px-4 md:py-32">
          <div className="grid grid-cols-1 gap-12 items-center opacity-0 animate-fade-in-up">
            <div className="space-y-6 text-center">
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-primary">Varun Rao</h1>
              <p className="font-headline text-2xl md:text-3xl text-foreground/80">
                Full-Stack Developer & Entrepreneur
              </p>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                I build beautiful and functional websites to help businesses grow their digital presence. With a background in engineering and a passion for code, I bring ideas to life on the web.
              </p>
              <div className="flex justify-center space-x-4">
                <Button asChild size="lg">
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </div>
              <div className="flex pt-4 space-x-4 justify-center">
                <Link href="#" aria-label="Github"><Github className="w-8 h-8 transition-transform hover:scale-110 hover:text-primary" /></Link>
                <Link href="#" aria-label="LinkedIn"><Linkedin className="w-8 h-8 transition-transform hover:scale-110 hover:text-primary" /></Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-secondary">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <h2 className="font-headline text-4xl font-bold text-primary">About Me</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                  <p><strong className="font-headline">Education:</strong> I completed my pre-university education at Alva's PU College and pursued my engineering degree at New Horizon College of Engineering, building a strong technical foundation.</p>
                </div>
                 <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                  <p><strong className="font-headline">Skills:</strong> I specialize in full-stack development, creating seamless user experiences from front-end design to back-end logic. My tool-kit is modern, robust, and always expanding.</p>
                </div>
              </div>
            </div>
             <div className="space-y-4">
                {skills.map((skill, index) => (
                    <Card key={index} className="bg-background/70 transition-transform hover:scale-105 hover:shadow-lg">
                      <CardContent className="p-4 flex items-center gap-4">
                         <div className="p-3 bg-accent/20 rounded-lg text-accent">
                          {skill.icon}
                        </div>
                        <p className="font-headline text-xl">{skill.name}</p>
                      </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4">
          <div className="container mx-auto text-center space-y-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-4">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">My Work</h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">A selection of projects that showcase my skills in web development, from client work to personal experiments.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="text-left overflow-hidden group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader className="p-0">
                    <div className="relative h-64 w-full">
                      <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-110" data-ai-hint={project.hint}/>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4 bg-secondary/50">
                    <CardTitle className="font-headline text-2xl text-primary">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                     <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => <Badge key={tag} variant={tag === "Client Work" ? "default" : "secondary"} className={tag === "Client Work" ? "bg-primary text-primary-foreground" : "bg-accent/20 text-accent-foreground"}>{tag}</Badge>)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="codenuvix" className="py-20 px-4 bg-secondary">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
             <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-xl">
                <Image src="https://picsum.photos/800/600?random=5" alt="Local business" layout="fill" objectFit="cover" data-ai-hint="local business storefront"/>
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary flex items-center gap-4"><Building/> Codenuvix</h2>
              <p className="font-headline text-2xl text-foreground/80">Empowering Local Businesses</p>
              <p className="text-lg leading-relaxed">
                Codenuvix is my initiative to help local businesses thrive in the digital age. I create affordable, high-quality websites that increase visibility, attract new customers, and build a strong online brand presence. Your success is my mission.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center space-y-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
             <div className="space-y-4">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Let's Connect</h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">Have a project in mind, a question, or just want to say hi? My inbox is always open.</p>
            </div>
            <Card className="p-8 text-left bg-secondary/30">
              <ContactForm />
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto text-center px-4">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="#" aria-label="Github"><Github className="w-7 h-7 transition-transform hover:scale-110 hover:text-primary" /></Link>
            <Link href="#" aria-label="LinkedIn"><Linkedin className="w-7 h-7 transition-transform hover:scale-110 hover:text-primary" /></Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Varun Rao. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
