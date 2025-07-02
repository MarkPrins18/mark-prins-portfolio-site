<nav class="fixed top-0 w-full z-50 glass-effect transition-all duration-300 bg-white/10" id="navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
            <div class="text-2xl font-bold gradient-text">Mark Prins</div>
            
            <!-- Desktop Navigation -->
            <div class="hidden md:flex space-x-8">
                <a href="#home" class="hover:text-primary-400 transition-colors">Home</a>
                <a href="#about" class="hover:text-primary-400 transition-colors">About</a>
                <a href="#skills" class="hover:text-primary-400 transition-colors">Skills</a>
                <a href="#projects" class="hover:text-primary-400 transition-colors">Projects</a>
                <a href="#contact" class="hover:text-primary-400 transition-colors">Contact</a>
            </div>
            
            <!-- Mobile Menu Button -->
            <div class="md:hidden">
                <button id="mobile-menu-btn" class="text-white hover:text-primary-400 transition-colors">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        
        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="hidden md:hidden pb-4">
            <div class="flex flex-col space-y-2">
                <a href="#home" class="py-2 hover:text-primary-400 transition-colors">Home</a>
                <a href="#about" class="py-2 hover:text-primary-400 transition-colors">About</a>
                <a href="#skills" class="py-2 hover:text-primary-400 transition-colors">Skills</a>
                <a href="#projects" class="py-2 hover:text-primary-400 transition-colors">Projects</a>
                <a href="#contact" class="py-2 hover:text-primary-400 transition-colors">Contact</a>
            </div>
        </div>
    </div>
</nav> 