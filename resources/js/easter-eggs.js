class DeveloperEasterEggs {
    constructor() {
        this.konamiCode = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];
        this.currentSequence = [];
        this.matrixActive = false;
        
        this.init();
    }
    
    init() {

        document.addEventListener('keydown', (e) => {
            this.handleKonamiCode(e);
        });
        

        this.addConsoleCommands();

        this.showConsoleGreeting();

        this.setupLogoClicks();
    }
    
    handleKonamiCode(e) {
        this.currentSequence.push(e.code);
        
        if (this.currentSequence.length > 10) {
            this.currentSequence.shift();
        }

        if (this.currentSequence.length === 10) {
            const matches = this.konamiCode.every((key, index) => 
                key === this.currentSequence[index]
            );
            
            if (matches) {
                this.activateMatrixMode();
                this.currentSequence = [];
            }
        }
    }
    
    activateMatrixMode() {
        if (this.matrixActive) return;
        
        this.matrixActive = true;

        const matrixContainer = document.createElement('div');
        matrixContainer.id = 'matrix-container';
        matrixContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 9999;
            background: rgba(0, 0, 0, 0.9);
            pointer-events: none;
        `;
        
        document.body.appendChild(matrixContainer);

        this.createMatrixRain(matrixContainer);

        setTimeout(() => {
            const message = document.createElement('div');
            message.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #00ff00;
                font-family: 'Courier New', monospace;
                font-size: 24px;
                text-align: center;
                z-index: 10000;
                animation: pulse 2s infinite;
            `;
            message.innerHTML = `
                <div>Welcome to the Matrix, Neo...</div>
                <div style="font-size: 16px; margin-top: 20px;">You found the secret!</div>
                <div style="font-size: 14px; margin-top: 10px; color: #00aa00;">Press ESC to exit</div>
            `;
            
            document.body.appendChild(message);

            const exitHandler = (e) => {
                if (e.key === 'Escape') {
                    document.body.removeChild(matrixContainer);
                    document.body.removeChild(message);
                    document.removeEventListener('keydown', exitHandler);
                    this.matrixActive = false;
                }
            };
            
            document.addEventListener('keydown', exitHandler);
 
            setTimeout(() => {
                if (this.matrixActive) {
                    document.body.removeChild(matrixContainer);
                    document.body.removeChild(message);
                    document.removeEventListener('keydown', exitHandler);
                    this.matrixActive = false;
                }
            }, 10000);
            
        }, 1000);
    }
    
    createMatrixRain(container) {
        const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const columns = Math.floor(window.innerWidth / 20);
        
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.style.cssText = `
                position: absolute;
                left: ${i * 20}px;
                top: -100vh;
                width: 20px;
                font-family: 'Courier New', monospace;
                font-size: 18px;
                color: #00ff00;
                line-height: 20px;
                animation: matrix-fall ${3 + Math.random() * 2}s linear infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            
            // Fill column with random characters
            for (let j = 0; j < 50; j++) {
                const char = document.createElement('div');
                char.textContent = characters[Math.floor(Math.random() * characters.length)];
                char.style.opacity = Math.random();
                column.appendChild(char);
            }
            
            container.appendChild(column);
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes matrix-fall {
                from { transform: translateY(-100vh); }
                to { transform: translateY(100vh); }
            }
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }
        `;
        document.head.appendChild(style);
    }
    
    addConsoleCommands() {
                 window.markDevInfo = () => {
             console.log(`
 🚀 Mark Prins - Developer Portfolio
 ───────────────────────────────────
 👨‍💻 Role: Junior Full-Stack Developer
 📍 Location: Netherlands
 🎓 Education: MBO Software Development
 ⚡ Status: Available for opportunities
 
 🛠️ Tech Stack:
    Backend: PHP, Laravel, MySQL
    Frontend: HTML5, CSS3, JavaScript, Tailwind CSS
    Tools: Git (GitHub/GitLab), VS Code, Postman
    Testing: PHPUnit (basic experience)
    OS: Windows & macOS experience
 
 🎯 Learning Focus:
    - Vue.js framework
    - Advanced Laravel features
    - Database optimization
 
 💡 Real Experience:
    - 6 months post-graduation
    - Have worked with Laravel professionally
    - Comfortable with SQL and database design
    - Familiar with Git workflows and pull requests
    - Hands-on experience with REST APIs
 
 📬 Contact: mark.prins.dev@example.com
 🔗 GitHub: github.com/mark-prins-dev
             `);
        };
        
                 window.markStats = () => {
             const stats = {
                 'Experience Level': 'Junior Developer',
                 'Months Since Graduation': '6',
                 'Laravel Projects': 'Professional + Personal',
                 'Comfortable With': 'HTML, CSS, JS, PHP, SQL',
                 'Learning Focus': 'Vue.js & Advanced Laravel',
                 'IDE of Choice': 'VS Code',
                 'Operating Systems': 'Windows & macOS',
                 'Version Control': 'Git (GitHub/GitLab)',
                 'API Testing': 'Postman',
                 'Database Skills': 'MySQL, ERD Design',
                 'Testing Experience': 'PHPUnit (Basic)',
                 'Coffee Dependency': 'High ☕'
             };
            
            console.table(stats);
        };
        
        window.markSecrets = () => {
            console.log(`
🔐 Developer Secrets Unlocked:
───────────────────────────────
• Try the Konami Code on the page: ↑↑↓↓←→←→BA
• Click the logo 10 times for a surprise
• Click the logo 10 times for a surprise
• Check the source code for hidden comments
• Press Ctrl+Shift+D for developer dashboard
• Look for //TODO comments in the console
            `);
        };
        
        // Debug mode toggle
        window.toggleDebugMode = () => {
            document.body.classList.toggle('debug-mode');
            const isDebug = document.body.classList.contains('debug-mode');
            
            if (isDebug) {
                console.log('🐛 Debug mode activated!');
                // Add debug styles
                const debugStyle = document.createElement('style');
                debugStyle.id = 'debug-style';
                debugStyle.textContent = `
                    .debug-mode * {
                        outline: 1px solid rgba(255, 0, 0, 0.3) !important;
                    }
                    .debug-mode *:hover {
                        outline: 2px solid rgba(0, 255, 0, 0.5) !important;
                    }
                `;
                document.head.appendChild(debugStyle);
            } else {
                console.log('🐛 Debug mode deactivated!');
                const debugStyle = document.getElementById('debug-style');
                if (debugStyle) {
                    debugStyle.remove();
                }
            }
        };
    }
    
    showConsoleGreeting() {
        const styles = {
            title: 'color: #10b981; font-size: 20px; font-weight: bold;',
            subtitle: 'color: #6366f1; font-size: 14px;',
            text: 'color: #64748b; font-size: 12px;',
            command: 'color: #f59e0b; font-size: 12px; font-family: monospace;'
        };
        
        setTimeout(() => {
            console.log('%c👋 Hey there, fellow developer!', styles.title);
            console.log('%cWelcome to Mark Prins\' interactive portfolio', styles.subtitle);
            console.log('%cI see you\'re checking the console - I like that! 🕵️‍♂️', styles.text);
            console.log('%c\nTry these commands:', styles.text);
            console.log('%cmarkDevInfo()     %c- Learn more about me', styles.command, styles.text);
            console.log('%cmarkStats()       %c- View my developer stats', styles.command, styles.text);
            console.log('%cmarkSecrets()     %c- Discover hidden features', styles.command, styles.text);
            console.log('%ctoggleDebugMode() %c- Toggle debug view', styles.command, styles.text);
            console.log('%c\n🎮 Bonus: Try the Konami Code on the page!', styles.subtitle);
        }, 2000);
    }
    
    setupLogoClicks() {
        let clickCount = 0;
        const logo = document.querySelector('.gradient-text');
        
        if (logo) {
            logo.addEventListener('click', () => {
                clickCount++;
                
                if (clickCount === 10) {
                    this.showSecretMessage();
                    clickCount = 0;
                }
                
                // Visual feedback
                logo.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    logo.style.transform = 'scale(1)';
                }, 150);
            });
        }
    }
    
    showSecretMessage() {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            z-index: 1000;
            font-family: 'Inter', sans-serif;
            max-width: 300px;
            animation: slideIn 0.5s ease-out;
        `;
        
        message.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <span style="font-size: 20px; margin-right: 10px;">🎉</span>
                <strong>Secret Unlocked!</strong>
            </div>
            <p style="margin: 0; font-size: 14px; line-height: 1.4;">
                You discovered the click secret! Thanks for being curious about my work. 
                This kind of attention to detail is what I bring to every project.
            </p>
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 5000);
        
        // Add animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize easter eggs when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DeveloperEasterEggs();
});

// Add keyboard shortcut for developer dashboard
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.code === 'KeyD') {
        e.preventDefault();
        showDeveloperDashboard();
    }
});

function showDeveloperDashboard() {
    // Remove existing dashboard if present
    const existing = document.getElementById('dev-dashboard');
    if (existing) {
        existing.remove();
        return;
    }
    
    const dashboard = document.createElement('div');
    dashboard.id = 'dev-dashboard';
    dashboard.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        width: 400px;
        height: 500px;
        background: rgba(17, 24, 39, 0.95);
        backdrop-filter: blur(10px);
        border: 1px solid #374151;
        border-radius: 10px;
        z-index: 10000;
        color: #f3f4f6;
        font-family: 'JetBrains Mono', monospace;
        font-size: 12px;
        overflow: hidden;
    `;
    
    dashboard.innerHTML = `
        <div style="background: #1f2937; padding: 10px; display: flex; justify-content: between; align-items: center;">
            <span>🛠️ Developer Dashboard</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 16px;">×</button>
        </div>
        <div style="padding: 20px; height: calc(100% - 50px); overflow-y: auto;">
            <div style="margin-bottom: 20px;">
                <h4 style="color: #10b981; margin: 0 0 10px 0;">System Status</h4>
                <div>✅ Portfolio loaded successfully</div>
                <div>✅ All components initialized</div>
                <div>✅ Easter eggs active</div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h4 style="color: #6366f1; margin: 0 0 10px 0;">Performance Metrics</h4>
                <div>Page Load Time: ${(performance.now() / 1000).toFixed(2)}s</div>
                <div>DOM Elements: ${document.querySelectorAll('*').length}</div>
                <div>Memory Usage: ${(performance.memory ? (performance.memory.usedJSHeapSize / 1048576).toFixed(1) + 'MB' : 'N/A')}</div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h4 style="color: #f59e0b; margin: 0 0 10px 0;">Developer Info</h4>
                <div>User Agent: ${navigator.userAgent.substring(0, 40)}...</div>
                <div>Screen: ${screen.width}x${screen.height}</div>
                <div>Viewport: ${window.innerWidth}x${window.innerHeight}</div>
            </div>
            
            <div>
                <h4 style="color: #ec4899; margin: 0 0 10px 0;">Quick Actions</h4>
                <button onclick="markDevInfo()" style="background: #374151; color: white; border: none; padding: 5px 10px; margin: 2px; border-radius: 3px; cursor: pointer; font-size: 11px;">Dev Info</button>
                <button onclick="markStats()" style="background: #374151; color: white; border: none; padding: 5px 10px; margin: 2px; border-radius: 3px; cursor: pointer; font-size: 11px;">Stats</button>
                <button onclick="toggleDebugMode()" style="background: #374151; color: white; border: none; padding: 5px 10px; margin: 2px; border-radius: 3px; cursor: pointer; font-size: 11px;">Debug Mode</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(dashboard);
} 