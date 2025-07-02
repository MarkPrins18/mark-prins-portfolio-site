<div class="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
    
    <div class="bg-gray-800 px-4 py-2 flex items-center justify-between">
        <div class="flex items-center gap-2">
            <i class="fas fa-code text-blue-400"></i>
            <span class="text-gray-400 text-sm">live-coding-session.php</span>
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-2"></div>
        </div>
        <div class="flex items-center gap-2 text-xs text-gray-400">
            <span>PHP</span>
            <span>•</span>
            <span id="typing-status">Typing...</span>
        </div>
    </div>
    

    <div class="p-4 font-mono text-sm">
        <div class="flex">
            
            <div class="text-gray-500 pr-4 select-none" id="line-numbers">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
            </div>
            
            
            <div class="flex-1">
                <pre id="live-code" class="text-gray-300 leading-relaxed"><span class="cursor-blink">|</span></pre>
            </div>
        </div>
    </div>
</div>

<style>
.cursor-blink {
    animation: blink 1s infinite;
    color: #10b981;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

.code-keyword { color: #c678dd; }
.code-string { color: #98c379; }
.code-comment { color: #5c6370; font-style: italic; }
.code-function { color: #61afef; }
.code-variable { color: #e06c75; }
.code-operator { color: #56b6c2; }
.code-number { color: #d19a66; }
</style>

<script>
class LiveCodeEditor {
    constructor() {
        this.codeElement = document.getElementById('live-code');
        this.statusElement = document.getElementById('typing-status');
        this.currentIndex = 0;
        this.typingSpeed = 80; // milliseconds between characters
        this.pauseAfterLine = 800; // pause after completing a line
        
        this.codeSnippet = '<?php\n\n' +
            'namespace App\\Controllers;\n\n' +
            'use Illuminate\\Http\\Request;\n' +
            'use App\\Models\\Portfolio;\n\n' +
            'class PortfolioController extends Controller\n' +
            '{\n' +
            '    /**\n' +
            '     * Display Mark\'s portfolio with dynamic content\n' +
            '     * Built with Laravel + Vue.js for maximum flexibility\n' +
            '     */\n' +
            '    public function index(Request $request)\n' +
            '    {\n' +
            '        $skills = [\n' +
            '            \'backend\' => [\'PHP\', \'Laravel\', \'MySQL\'],\n' +
            '            \'frontend\' => [\'JavaScript\', \'Vue.js\', \'Tailwind\'],\n' +
            '            \'learning\' => [\'Docker\', \'Testing\', \'Cloud\']\n' +
            '        ];\n' +
            '        \n' +
            '        $projects = Portfolio::where(\'status\', \'active\')\n' +
            '            ->orderBy(\'created_at\', \'desc\')\n' +
            '            ->get();\n' +
            '            \n' +
            '        // Real-time interaction tracking\n' +
            '        $this->logVisitor($request);\n' +
            '        \n' +
            '        return view(\'portfolio\', compact(\'skills\', \'projects\'));\n' +
            '    }\n' +
            '    \n' +
            '    private function logVisitor(Request $request)\n' +
            '    {\n' +
            '        // Analytics for continuous improvement\n' +
            '        logger(\'Portfolio viewed\', [\n' +
            '            \'ip\' => $request->ip(),\n' +
            '            \'user_agent\' => $request->userAgent(),\n' +
            '            \'timestamp\' => now()\n' +
            '        ]);\n' +
            '    }\n' +
            '}';

        this.init();
    }
    
    init() {
        this.startTyping();
    }
    
    async startTyping() {
        this.statusElement.textContent = 'Typing...';
        
        for (let i = 0; i < this.codeSnippet.length; i++) {
            const char = this.codeSnippet[i];
            const currentText = this.codeSnippet.substring(0, i + 1);
            
            // Add syntax highlighting
            const highlightedCode = this.addSyntaxHighlighting(currentText);
            this.codeElement.innerHTML = highlightedCode + '<span class="cursor-blink">|</span>';
            
            // Pause longer after newlines
            if (char === '\\n') {
                await this.sleep(this.pauseAfterLine);
            } else {
                await this.sleep(this.typingSpeed + Math.random() * 40); // Add some randomness
            }
        }
        
        // Remove cursor and update status
        this.codeElement.innerHTML = this.addSyntaxHighlighting(this.codeSnippet);
        this.statusElement.textContent = 'Complete';
        
        // Optional: restart after a delay
        setTimeout(() => {
            this.restart();
        }, 10000);
    }
    
    addSyntaxHighlighting(code) {
        return code
            // PHP tags and keywords
            .replace(/(&lt;\\?php|\\?&gt;)/g, '<span class="code-keyword">$1</span>')
            .replace(/\\b(namespace|use|class|extends|public|private|function|return|if|else|foreach|as|new)\\b/g, '<span class="code-keyword">$1</span>')
            
            // Strings
            .replace(/(['"])((?:\\\\.|(?!\\1)[^\\\\\\r\\n])*)\\1/g, '<span class="code-string">$1$2$1</span>')
            
            // Comments
            .replace(/(\\/\\*[\\s\\S]*?\\*\\/|\\/\\/.*$|#.*$)/gm, '<span class="code-comment">$1</span>')
            
            // Variables
            .replace(/(\\$\\w+)/g, '<span class="code-variable">$1</span>')
            
            // Functions and methods
            .replace(/\\b(\\w+)(?=\\()/g, '<span class="code-function">$1</span>')
            
            // Numbers
            .replace(/\\b(\\d+)\\b/g, '<span class="code-number">$1</span>')
            
            // Operators
            .replace(/([=+\\-*\\/&|!<>]+)/g, '<span class="code-operator">$1</span>');
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    restart() {
        this.codeElement.innerHTML = '<span class="cursor-blink">|</span>';
        this.currentIndex = 0;
        this.startTyping();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new LiveCodeEditor();
});
</script> 