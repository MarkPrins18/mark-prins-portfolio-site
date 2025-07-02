@extends('layouts.app')

@section('title', 'Mark Prins - Full-Stack Developer')
@section('description', 'Mark Prins - Full-Stack Developer from Netherlands specializing in modern web technologies, backend systems, and user experience design.')

@section('content')
    @include('components.navbar')

    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20"></div>
        
        <!-- Animated Code Background -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-20 left-10 text-green-400 font-mono text-sm animate-pulse">
                &lt;?php echo "Hello World!"; ?&gt;
            </div>
            <div class="absolute top-40 right-20 text-blue-400 font-mono text-sm animate-pulse delay-500">
                const stack = ['Laravel', 'Vue', 'Node.js'];
            </div>
            <div class="absolute bottom-40 left-20 text-yellow-400 font-mono text-sm animate-pulse delay-1000">
                SELECT * FROM opportunities WHERE developer = 'Mark';
            </div>
            <div class="absolute bottom-20 right-10 text-purple-400 font-mono text-sm animate-pulse delay-1500">
                git commit -m "Building the future"
            </div>
        </div>
        
        <div class="absolute inset-0">
            <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
            <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div class="relative z-10 text-center max-w-4xl mx-auto px-4 fade-in-up">
            <div class="mb-6">
                <span class="text-primary-400 font-mono text-lg">console.log('Hello, I'm')</span>
            </div>
            <h1 class="text-6xl md:text-8xl font-black mb-4">
                <span class="gradient-text">Mark Prins</span>
            </h1>
            <h2 class="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                Junior Full-Stack Developer <span class="text-primary-400">|</span> MBO Graduate <span class="text-primary-400">|</span> Laravel Developer
            </h2>
            <p class="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                Recent MBO Software Development graduate from the Netherlands with professional Laravel experience. 
                Comfortable working across the full stack - from database design to frontend implementation. 
                Always eager to learn new technologies and improve my development skills.
            </p>
            
            <!-- Tech Stack Preview -->
            <div class="flex flex-wrap justify-center gap-3 mb-8">
                <span class="tech-tag">PHP</span>
                <span class="tech-tag">Laravel</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">HTML/CSS</span>
                <span class="tech-tag">MySQL</span>
                <span class="tech-tag">Tailwind</span>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#projects" class="btn-primary">
                    <i class="fas fa-code mr-2"></i>View My Learning Journey
                </a>
                <a href="#contact" class="btn-secondary">
                    <i class="fas fa-coffee mr-2"></i>Let's Talk Tech
                </a>
            </div>
        </div>
        
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" class="text-primary-400 hover:text-primary-300 transition-colors">
                <i class="fas fa-chevron-down text-2xl"></i>
            </a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-800/50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 fade-in-up">
                <h2 class="section-title">About Me</h2>
                <p class="text-gray-400 text-lg max-w-2xl mx-auto">
                    I am a junior developer with professional Laravel experience and a solid foundation in web development fundamentals
                </p>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-8 items-center">
                <!-- Skills Overview -->
                <div class="lg:col-span-2 fade-in-up">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="glass-effect p-6">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-server text-blue-400 text-xl"></i>
                                </div>
                                <h4 class="text-xl font-bold">Backend Development</h4>
                            </div>
                            <p class="text-gray-400 mb-4">Comfortable with PHP and Laravel development, including database design and API creation.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">PHP</span>
                                <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Laravel</span>
                                <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">MySQL</span>
                                <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">REST APIs</span>
                            </div>
                        </div>
                        
                        <div class="glass-effect p-6">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-desktop text-green-400 text-xl"></i>
                                </div>
                                <h4 class="text-xl font-bold">Frontend Development</h4>
                            </div>
                            <p class="text-gray-400 mb-4">Solid foundation in frontend technologies with focus on responsive design and user experience.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">HTML5</span>
                                <span class="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">CSS3</span>
                                <span class="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">JavaScript</span>
                                <span class="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Tailwind</span>
                            </div>
                        </div>
                        
                        <div class="glass-effect p-6">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-database text-purple-400 text-xl"></i>
                                </div>
                                <h4 class="text-xl font-bold">Database Design</h4>
                            </div>
                            <p class="text-gray-400 mb-4">Understanding of database fundamentals, SQL queries, and basic database design principles.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">MySQL</span>
                                <span class="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">SQL</span>
                                <span class="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">ERD Design</span>
                                <span class="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Migrations</span>
                            </div>
                        </div>
                        
                        <div class="glass-effect p-6">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-tools text-yellow-400 text-xl"></i>
                                </div>
                                <h4 class="text-xl font-bold">DevOps & Tools</h4>
                            </div>
                            <p class="text-gray-400 mb-4">Familiar with essential development tools and version control workflows.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">Git</span>
                                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">VS Code</span>
                                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">Postman</span>
                                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">PHPUnit</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="skills" class="py-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 fade-in-up">
                <h2 class="section-title">My Developer Toolkit</h2>
                <p class="text-gray-400 text-lg">The technologies I work with and am constantly learning</p>
            </div>
            
            <!-- Code Block Style Skills -->
            <div class="grid lg:grid-cols-2 gap-8">
                <!-- Backend Toolkit -->
                <div class="fade-in-up">
                    <div class="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden font-mono">
                        <div class="bg-gray-800 px-4 py-2 flex items-center justify-between">
                            <span class="text-gray-400 text-sm">backend_stack.php</span>
                            <div class="flex gap-1">
                                <div class="w-2 h-2 rounded-full bg-red-500"></div>
                                <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div class="p-6 space-y-3 text-sm">
                            <div class="text-purple-400">&lt;?php</div>
                            <div class="ml-4">
                                <span class="text-blue-400">class</span> <span class="text-yellow-400">MarksPrinsTechStack</span> <span class="text-white">{</span>
                            </div>
                            <div class="ml-8">
                                <span class="text-blue-400">public</span> <span class="text-green-400">$frameworks</span> = [
                            </div>
                            <div class="ml-12 space-y-1">
                                <div><span class="text-orange-400">'Laravel'</span> => <span class="text-cyan-400">'Professional experience'</span>,</div>
                                <div><span class="text-orange-400">'PHP'</span> => <span class="text-cyan-400">'Server-side development'</span>,</div>
                            </div>
                            <div class="ml-8">];</div>
                            <div class="ml-8">
                                <span class="text-blue-400">public</span> <span class="text-green-400">$databases</span> = [
                            </div>
                            <div class="ml-12 space-y-1">
                                <div><span class="text-orange-400">'MySQL'</span> => <span class="text-cyan-400">'Primary database'</span>,</div>
                                <div><span class="text-orange-400">'SQL'</span> => <span class="text-cyan-400">'Query language & ERD design'</span>,</div>
                            </div>
                            <div class="ml-8">];</div>
                            <div class="ml-4 text-white">}</div>
                            <div class="text-purple-400">?&gt;</div>
                        </div>
                    </div>
                </div>

                <!-- Frontend Toolkit -->
                <div class="fade-in-up">
                    <div class="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden font-mono">
                        <div class="bg-gray-800 px-4 py-2 flex items-center justify-between">
                            <span class="text-gray-400 text-sm">frontend_tools.js</span>
                            <div class="flex gap-1">
                                <div class="w-2 h-2 rounded-full bg-red-500"></div>
                                <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div class="p-6 space-y-3 text-sm">
                            <div class="text-blue-400">const</div> <span class="text-yellow-400">frontendSkills</span> = <span class="text-white">{</span>
                            <div class="ml-4">
                                <span class="text-cyan-400">fundamentals</span>: [
                            </div>
                            <div class="ml-8 space-y-1">
                                <div><span class="text-orange-400">'HTML5'</span>, <span class="text-gray-400">// Semantic markup</span></div>
                                <div><span class="text-orange-400">'CSS3'</span>, <span class="text-gray-400">// Styling & animations</span></div>
                                <div><span class="text-orange-400">'JavaScript'</span>, <span class="text-gray-400">// DOM manipulation & events</span></div>
                            </div>
                            <div class="ml-4">],</div>
                            <div class="ml-4">
                                <span class="text-cyan-400">frameworks</span>: [
                            </div>
                            <div class="ml-8 space-y-1">
                                <div><span class="text-orange-400">'Tailwind CSS'</span>, <span class="text-gray-400">// Utility-first styling</span></div>
                                <div><span class="text-orange-400">'Vue.js'</span>, <span class="text-gray-400">// Currently learning</span></div>
                            </div>
                            <div class="ml-4">],</div>
                            <div class="ml-4">
                                <span class="text-cyan-400">tools</span>: [<span class="text-orange-400">'VS Code'</span>, <span class="text-orange-400">'Chrome DevTools'</span>]
                            </div>
                            <div class="text-white">};</div>
                        </div>
                    </div>
                </div>

                <!-- Development Tools -->
                <div class="fade-in-up lg:col-span-2">
                    <div class="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden font-mono">
                        <div class="bg-gray-800 px-4 py-2 flex items-center justify-between">
                            <span class="text-gray-400 text-sm">development_workflow.yml</span>
                            <div class="flex gap-1">
                                <div class="w-2 h-2 rounded-full bg-red-500"></div>
                                <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div class="p-6 space-y-2 text-sm">
                            <div class="grid md:grid-cols-3 gap-6">
                                <div>
                                    <div class="text-yellow-400 mb-3">version_control:</div>
                                    <div class="ml-4 space-y-1 text-gray-300">
                                        <div>- Git (GitHub/GitLab)</div>
                                        <div>- Pull requests</div>
                                        <div>- Basic branching</div>
                                        <div>- Collaborative workflows</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-yellow-400 mb-3">development_tools:</div>
                                    <div class="ml-4 space-y-1 text-gray-300">
                                        <div>- VS Code (Windows/macOS)</div>
                                        <div>- Postman (API testing)</div>
                                        <div>- Chrome DevTools</div>
                                        <div>- PHPUnit (basic testing)</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-yellow-400 mb-3">learning_focus:</div>
                                    <div class="ml-4 space-y-1 text-gray-300">
                                        <div>- Vue.js framework</div>
                                        <div>- Advanced Laravel features</div>
                                        <div>- Database optimization</div>
                                        <div>- Modern deployment practices</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Learning Journey Section -->
    <section id="projects" class="py-20 bg-gray-800/50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 fade-in-up">
                <h2 class="section-title">My Learning Journey</h2>
                <p class="text-gray-400 text-lg">Honest showcase of my development growth and current focus areas</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- What I'm Building -->
                <div class="project-card glass-effect fade-in-up group">
                    <div class="h-48 bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center relative overflow-hidden">
                        <i class="fas fa-hammer text-4xl text-green-400 group-hover:scale-110 transition-transform"></i>
                        <div class="absolute top-2 right-2">
                            <span class="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">In Progress</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">My First Real Projects</h3>
                        <p class="text-gray-400 mb-4 text-sm">Currently building my first portfolio projects. Learning through doing - creating small applications to practice and showcase my skills.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">API Integration</span>
                            <span class="tech-tag">Testing</span>
                            <span class="tech-tag">Deployment</span>
                        </div>
                        <div class="flex gap-4">
                            <span class="text-yellow-400 text-sm flex items-center">
                                <i class="fas fa-clock mr-1"></i> Coming Soon
                            </span>
                        </div>
                    </div>
                </div>
                
                <!-- Learning Focus -->
                <div class="project-card glass-effect fade-in-up group">
                    <div class="h-48 bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center relative overflow-hidden">
                        <i class="fas fa-book text-4xl text-blue-400 group-hover:scale-110 transition-transform"></i>
                        <div class="absolute top-2 right-2">
                            <span class="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Learning</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Skills Development</h3>
                        <p class="text-gray-400 mb-4 text-sm">Focusing on strengthening my core skills through tutorials, practice exercises, and small coding challenges. Building a solid foundation for real-world development.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="tech-tag">Laravel</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Database Design</span>
                            <span class="tech-tag">Git Workflow</span>
                        </div>
                        <div class="flex gap-4">
                            <span class="text-blue-400 text-sm flex items-center">
                                <i class="fas fa-graduation-cap mr-1"></i> Continuous
                            </span>
                        </div>
                    </div>
                </div>
                
                <!-- This Portfolio -->
                <div class="project-card glass-effect fade-in-up group">
                    <div class="h-48 bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
                        <i class="fas fa-code text-4xl text-purple-400 group-hover:scale-110 transition-transform"></i>
                        <div class="absolute top-2 right-2">
                            <span class="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">Live</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">This Interactive Portfolio</h3>
                        <p class="text-gray-400 mb-4 text-sm">My first major project - a modern portfolio showcasing my skills and learning journey. Features interactive components, developer easter eggs, and responsive design.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="tech-tag">Laravel</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Tailwind CSS</span>
                            <span class="tech-tag">UX Design</span>
                        </div>
                        <div class="flex gap-4">
                            <a href="#" class="text-primary-400 hover:text-primary-300 transition-colors flex items-center text-sm">
                                <i class="fab fa-github mr-1"></i> View Code
                            </a>
                            <span class="text-green-400 text-sm flex items-center">
                                <i class="fas fa-eye mr-1"></i> Live Site
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            
          
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 fade-in-up">
                <h2 class="section-title">Let's Build Something Amazing</h2>
                <p class="text-gray-400 text-lg">Ready to discuss your next project or just want to talk about technology?</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-12">
                <div class="fade-in-up">
                    <h3 class="text-2xl font-bold mb-6">Get In Touch</h3>
                    <p class="text-gray-300 mb-8 leading-relaxed">
                        I'm always excited to discuss new opportunities, collaborate on interesting projects, or just chat about the latest in web development. 
                        Whether you need a full-stack developer or want to explore innovative solutions, let's connect!
                    </p>
                    
                    <div class="space-y-4">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                                <i class="fas fa-envelope text-white"></i>
                            </div>
                            <div>
                                <div class="font-semibold">Email</div>
                                <div class="text-gray-400">mark.prins@ziggo.nl</div>
                            </div>
                        </div>
                        
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                                <i class="fab fa-github text-white"></i>
                            </div>
                            <div>
                                <div class="font-semibold">GitHub</div>
                                <div class="text-gray-400">github.com/MarkPrins18</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="fade-in-up">
                    <form id="contact-form" class="glass-effect p-8 space-y-6" action="{{ route('contact.store') }}" method="POST">
                        @csrf
                        <div id="form-messages" class="hidden"></div>
                        
                        <div>
                            <label for="name" class="block text-sm font-medium mb-2">Name</label>
                            <input type="text" id="name" name="name" class="form-input" required>
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" class="form-input" required>
                        </div>
                        
                        <div>
                            <label for="subject" class="block text-sm font-medium mb-2">Subject</label>
                            <input type="text" id="subject" name="subject" class="form-input" required>
                        </div>
                        
                        <div>
                            <label for="message" class="block text-sm font-medium mb-2">Message</label>
                            <textarea id="message" name="message" rows="4" class="form-input resize-none" required></textarea>
                        </div>
                        
                        <button type="submit" id="submit-btn" class="w-full btn-primary">
                            <i class="fas fa-paper-plane mr-2"></i>Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 bg-gray-800/50 border-t border-gray-700">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <p class="text-gray-400">
                   Crafted with <span class="text-red-500">♥</span> using Laravel, Vue.js & Tailwind CSS
                </p>
                <p class="text-gray-500 text-sm mt-2">
                    <span class="font-mono">git commit -m "Always learning, always building"</span>
                </p>
            </div>
        </div>
    </footer>
@endsection 