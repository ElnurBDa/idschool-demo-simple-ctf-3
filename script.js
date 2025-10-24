document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('login-container');
    const mainApp = document.getElementById('main-app');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const logoutBtn = document.getElementById('logout-btn');
    const currentUser = document.getElementById('current-user');
    
    document.cookie = "secret=flag{XSS-pro}; path=/";
    
    const translations = {
        en: {
            app_title: "SocialConnect",
            username: "Username",
            password: "Password",
            login: "Login",
            logout: "Logout",
            navigation: "Navigation",
            feed: "Feed",
            search: "Search",
            chat: "Chat",
            profile: "Profile",
            tools: "Tools",
            learn_xss: "Learn XSS",
            whats_on_mind: "What's on your mind?",
            share_thoughts: "Share your thoughts...",
            post: "Post",
            search_users: "Search Users",
            search_users_placeholder: "Search for users...",
            type_message: "Type a message...",
            send: "Send",
            profile_settings: "Profile Settings",
            display_name: "Display Name:",
            update_name: "Update Name",
            bio: "Bio:",
            bio_placeholder: "Tell us about yourself...",
            update_bio: "Update Bio",
            xss_testing_tools: "XSS Testing Tools",
            basic_alert: "Basic Alert",
            basic_alert_desc: "Simple alert popup",
            cookie_stealer: "Cookie Stealer",
            cookie_stealer_desc: "Steal cookies from current session",
            image_xss: "Image XSS",
            image_xss_desc: "XSS using image tag",
            learn_xss_from_scratch: "Learn XSS from Scratch",
            what_is_html: "What is HTML?",
            html_description: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It uses tags to structure content:",
            what_is_javascript: "What is JavaScript?",
            javascript_description: "JavaScript is a programming language that runs in web browsers. It can manipulate HTML elements and perform actions:",
            what_is_xss: "What is XSS?",
            xss_description: "Cross-Site Scripting (XSS) occurs when a web application includes untrusted data in a web page without proper validation or escaping. This allows attackers to execute malicious scripts in the victim's browser.",
            how_xss_works: "How XSS Works",
            xss_step1: "1. Attacker injects malicious script into a vulnerable input field",
            xss_step2: "2. The script gets stored or reflected back to users",
            xss_step3: "3. When other users view the page, the script executes in their browser",
            xss_step4: "4. The script can steal cookies, redirect users, or perform other malicious actions",
            types_of_xss: "Types of XSS",
            stored_xss: "Stored XSS",
            stored_xss_desc: "Malicious script is permanently stored on the server (like in a comment or post)",
            reflected_xss: "Reflected XSS",
            reflected_xss_desc: "Malicious script is reflected back immediately (like in search results)",
            dom_xss: "DOM-based XSS",
            dom_xss_desc: "Vulnerability exists in client-side code that manipulates the DOM",
            common_xss_payloads: "Common XSS Payloads",
            cookie_theft: "Cookie Theft",
            basic_alert_payload_desc: "Shows a popup alert - good for testing if XSS is possible",
            cookie_theft_desc: "Displays all cookies - can be used to steal session tokens",
            image_xss_payload_desc: "Uses image tag with onerror event - bypasses script tag filters",
            redirect: "Redirect",
            redirect_desc: "Redirects user to malicious website",
            how_to_test_xss: "How to Test for XSS",
            test_step1: "Find input fields that display data back to users",
            test_step2: "Try basic payloads like:",
            test_step3: "If you see an alert popup, the site is vulnerable",
            test_step4: "Try different payloads to bypass filters",
            test_step5: "Test if you can steal cookies or redirect users",
            practice_areas: "Practice Areas in This Lab",
            practice_posts: "<strong>Posts:</strong> Try XSS in the post content area",
            practice_chat: "<strong>Chat:</strong> Send XSS payloads in chat messages",
            practice_search: "<strong>Search:</strong> Use XSS in search queries",
            practice_profile: "<strong>Profile:</strong> Try XSS in the name field",
            html_code: "HTML Code:",
            html_result: "Result:",
            javascript_code: "JavaScript Code:",
            terminal_output: "Terminal Output:",
            run_code: "Run Code"
        },
        az: {
            app_title: "SocialConnect",
            username: "İstifadəçi adı",
            password: "Şifrə",
            login: "Daxil ol",
            logout: "Çıxış",
            navigation: "Naviqasiya",
            feed: "Xəbərlər",
            search: "Axtarış",
            chat: "Söhbət",
            profile: "Profil",
            tools: "Alətlər",
            learn_xss: "XSS öyrən",
            whats_on_mind: "Nə düşünürsən?",
            share_thoughts: "Fikirlərini paylaş...",
            post: "Paylaş",
            search_users: "İstifadəçi axtar",
            search_users_placeholder: "İstifadəçi axtar...",
            type_message: "Mesaj yaz...",
            send: "Göndər",
            profile_settings: "Profil tənzimləmələri",
            display_name: "Göstərilən ad:",
            update_name: "Adı yenilə",
            bio: "Bio:",
            bio_placeholder: "Özün haqqında danış...",
            update_bio: "Bio yenilə",
            xss_testing_tools: "XSS Test Alətləri",
            basic_alert: "Əsas Xəbərdarlıq",
            basic_alert_desc: "Sadə xəbərdarlıq pəncərəsi",
            cookie_stealer: "Cookie Oğurlayıcı",
            cookie_stealer_desc: "Cari sessiyadan cookie-ləri oğurla",
            image_xss: "Şəkil XSS",
            image_xss_desc: "Şəkil teqindən istifadə edərək XSS",
            learn_xss_from_scratch: "Sıfırdan XSS öyrən",
            what_is_html: "HTML nədir?",
            html_description: "HTML (HyperText Markup Language) veb səhifələr yaratmaq üçün standart markup dilidir. Məzmunu strukturlaşdırmaq üçün teqlərdən istifadə edir:",
            what_is_javascript: "JavaScript nədir?",
            javascript_description: "JavaScript veb brauzerlərdə işləyən proqramlaşdırma dilidir. HTML elementlərini manipulyasiya edə bilər və hərəkətlər yerinə yetirə bilər:",
            what_is_xss: "XSS nədir?",
            xss_description: "Cross-Site Scripting (XSS) veb tətbiqi etibarsız məlumatları düzgün yoxlama və ya qaçırma olmadan veb səhifəyə daxil etdikdə baş verir. Bu, hücumçuların qurbanın brauzerində zərərli skriptlər yerinə yetirməsinə imkan verir.",
            how_xss_works: "XSS necə işləyir",
            xss_step1: "1. Hücumçu zəif input sahəsinə zərərli skript daxil edir",
            xss_step2: "2. Skript saxlanılır və ya istifadəçilərə qaytarılır",
            xss_step3: "3. Digər istifadəçilər səhifəni görəndə skript onların brauzerində işləyir",
            xss_step4: "4. Skript cookie-ləri oğurlaya, istifadəçiləri yönləndirə və ya digər zərərli hərəkətlər yerinə yetirə bilər",
            types_of_xss: "XSS növləri",
            stored_xss: "Saxlanılan XSS",
            stored_xss_desc: "Zərərli skript serverdə daimi olaraq saxlanılır (şərh və ya post kimi)",
            reflected_xss: "Əks olunan XSS",
            reflected_xss_desc: "Zərərli skript dərhal geri qaytarılır (axtarış nəticələri kimi)",
            dom_xss: "DOM əsaslı XSS",
            dom_xss_desc: "Zəiflik DOM-u manipulyasiya edən müştəri tərəfi kodda mövcuddur",
            common_xss_payloads: "Ümumi XSS Payload-ları",
            cookie_theft: "Cookie Oğurluğu",
            basic_alert_payload_desc: "Xəbərdarlıq pəncərəsi göstərir - XSS mümkünlüyünü test etmək üçün yaxşıdır",
            cookie_theft_desc: "Bütün cookie-ləri göstərir - sessiya token-lərini oğurlamaq üçün istifadə edilə bilər",
            image_xss_payload_desc: "Şəkil teqi və onerror hadisəsindən istifadə edir - skript teq filtrlərini keçir",
            redirect: "Yönləndirmə",
            redirect_desc: "İstifadəçini zərərli veb saytına yönləndirir",
            how_to_test_xss: "XSS üçün necə test etmək",
            test_step1: "İstifadəçilərə məlumat qaytaran input sahələrini tapın",
            test_step2: "Əsas payload-ları sınayın:",
            test_step3: "Xəbərdarlıq pəncərəsi görsəniz, sayt zəifdir",
            test_step4: "Filtrləri keçmək üçün fərqli payload-ları sınayın",
            test_step5: "Cookie-ləri oğurlaya və ya istifadəçiləri yönləndirə biləcəyinizi test edin",
            practice_areas: "Bu Laboratoriyada Təcrübə Sahələri",
            practice_posts: "<strong>Postlar:</strong> Post məzmun sahəsində XSS sınayın",
            practice_chat: "<strong>Söhbət:</strong> Söhbət mesajlarında XSS payload-ları göndərin",
            practice_search: "<strong>Axtarış:</strong> Axtarış sorğularında XSS istifadə edin",
            practice_profile: "<strong>Profil:</strong> Ad sahəsində XSS sınayın",
            html_code: "HTML Kodu:",
            html_result: "Nəticə:",
            javascript_code: "JavaScript Kodu:",
            terminal_output: "Terminal Çıxışı:",
            run_code: "Kodu İşə Sal"
        }
    };
    
    let currentLanguage = localStorage.getItem('language') || 'en';
    
    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        updateTranslations();
    }
    
    function updateTranslations() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLanguage][key]) {
                element.textContent = translations[currentLanguage][key];
            }
        });
        
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[currentLanguage][key]) {
                element.placeholder = translations[currentLanguage][key];
            }
        });
    }
    
    const menuBtns = document.querySelectorAll('.menu-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    const postContent = document.getElementById('post-content');
    const postBtn = document.getElementById('post-btn');
    const postsContainer = document.getElementById('posts-container');
    
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');
    
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');
    
    const mockUsers = [
        { name: 'alice', messages: ['Hello! How are you?', 'Nice to meet you!', 'What are you up to?'] },
        { name: 'bob', messages: ['Hey there!', 'How is your day going?', 'Any plans for the weekend?'] },
        { name: 'charlie', messages: ['Good morning!', 'Hope you are doing well!', 'See you later!'] }
    ];
    
    let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    let mockUserIndex = 0;
    
    const displayName = document.getElementById('display-name');
    const updateNameBtn = document.getElementById('update-name-btn');
    const bio = document.getElementById('bio');
    const updateBioBtn = document.getElementById('update-bio-btn');
    
    function showSection(sectionId) {
        contentSections.forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(sectionId + '-section').classList.remove('hidden');
        
        menuBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
    }
    
    function addPost(content) {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <div class="post-header">
                <span class="post-author">${currentUser.textContent}</span>
                <span class="post-time">${new Date().toLocaleTimeString()}</span>
            </div>
            <div class="post-content">${content}</div>
        `;
        postsContainer.insertBefore(postDiv, postsContainer.firstChild);
    }
    
    function addChatMessage(content, author = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message';
        const authorName = author || currentUser.textContent;
        messageDiv.innerHTML = `
            <span class="message-author">${authorName}:</span>
            <span class="message-content">${content}</span>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        chatHistory.push({ author: authorName, content: content, timestamp: new Date().toISOString() });
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }
    
    function loadChatHistory() {
        chatHistory.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'chat-message';
            messageDiv.innerHTML = `
                <span class="message-author">${msg.author}:</span>
                <span class="message-content">${msg.content}</span>
            `;
            chatMessages.appendChild(messageDiv);
        });
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function simulateMockUser() {
        const user = mockUsers[mockUserIndex];
        const message = user.messages[Math.floor(Math.random() * user.messages.length)];
        addChatMessage(message, user.name);
        mockUserIndex = (mockUserIndex + 1) % mockUsers.length;
    }
    
    function performSearch(query) {
        searchResults.innerHTML = `
            <div class="search-result">
                <h4>Search Results for: ${query}</h4>
                <p>No users found matching "${query}"</p>
            </div>
        `;
    }
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'xaker' && password === 'xaker') {
            loginContainer.classList.add('hidden');
            mainApp.classList.remove('hidden');
            currentUser.textContent = 'xaker';
        } else {
            loginError.textContent = 'Invalid credentials';
        }
    });
    
    logoutBtn.addEventListener('click', function() {
        loginContainer.classList.remove('hidden');
        mainApp.classList.add('hidden');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        loginError.textContent = '';
    });
    
    menuBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });
    
    postBtn.addEventListener('click', function() {
        const content = postContent.value;
        if (content.trim()) {
            addPost(content);
            postContent.value = '';
        }
    });
    
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value;
        if (query.trim()) {
            performSearch(query);
        }
    });
    
    sendBtn.addEventListener('click', function() {
        const content = chatInput.value;
        if (content.trim()) {
            addChatMessage(content);
            chatInput.value = '';
            
            setTimeout(() => {
                simulateMockUser();
            }, 1000 + Math.random() * 2000);
        }
    });
    
    updateNameBtn.addEventListener('click', function() {
        const newName = displayName.value;
        if (newName.trim()) {
            currentUser.textContent = newName;
        }
    });
    
    updateBioBtn.addEventListener('click', function() {
        const bioContent = bio.value;
        if (bioContent.trim()) {
            console.log('Bio updated:', bioContent);
        }
    });
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });
    
    postContent.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && e.ctrlKey) {
            postBtn.click();
        }
    });
    
    loadChatHistory();
    
    setInterval(() => {
        if (Math.random() < 0.1 && chatHistory.length > 0) {
            simulateMockUser();
        }
    }, 5000);
    
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('lang-az').addEventListener('click', () => setLanguage('az'));
    document.getElementById('lang-en-main').addEventListener('click', () => setLanguage('en'));
    document.getElementById('lang-az-main').addEventListener('click', () => setLanguage('az'));
    
    updateTranslations();
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    const runJsBtn = document.getElementById('run-js-btn');
    const terminalOutput = document.getElementById('terminal-output');
    
    if (runJsBtn && terminalOutput) {
        runJsBtn.addEventListener('click', function() {
            terminalOutput.innerHTML = '';
            
            function addTerminalLine(text, type = 'text') {
                const line = document.createElement('div');
                line.className = 'terminal-line';
                line.innerHTML = `
                    <span class="terminal-prompt">></span>
                    <span class="terminal-text ${type}">${text}</span>
                `;
                terminalOutput.appendChild(line);
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
            
            function simulateTyping(text, delay = 50) {
                return new Promise(resolve => {
                    let i = 0;
                    const interval = setInterval(() => {
                        if (i < text.length) {
                            addTerminalLine(text.substring(0, i + 1), 'output');
                            i++;
                        } else {
                            clearInterval(interval);
                            resolve();
                        }
                    }, delay);
                });
            }
            
            async function runSimulation() {
                addTerminalLine('Starting JavaScript execution...', 'success');
                await new Promise(resolve => setTimeout(resolve, 500));
                
                addTerminalLine('Executing: alert("Hello World");', 'text');
                await new Promise(resolve => setTimeout(resolve, 800));
                
                // Actually execute the alert
                alert("Hello World");
                addTerminalLine('Alert dialog displayed: "Hello World"', 'success');
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                addTerminalLine('Executing: document.getElementById("js-title").innerHTML = "What is BananaScript?";', 'text');
                await new Promise(resolve => setTimeout(resolve, 800));
                
                // Actually execute the DOM manipulation
                const jsTitle = document.querySelector('[data-translate="what_is_javascript"]');
                if (jsTitle) {
                    const originalText = jsTitle.textContent;
                    jsTitle.textContent = "What is BananaScript?";
                    addTerminalLine('DOM element updated successfully', 'success');
                    
                    // Restore original text after 3 seconds
                    setTimeout(() => {
                        jsTitle.textContent = originalText;
                    }, 3000);
                } else {
                    addTerminalLine('Element not found', 'error');
                }
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                addTerminalLine('Executing: console.log("Debug message");', 'text');
                await new Promise(resolve => setTimeout(resolve, 800));
                
                // Actually execute console.log
                console.log("Debug message");
                addTerminalLine('Debug message', 'output');
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                addTerminalLine('JavaScript execution completed!', 'success');
            }
            
            runSimulation();
        });
    }
});
