(function() {
    // Injeta a tag style com as variáveis CSS do tema claro original e tema escuro premium
    const style = document.createElement('style');
    style.innerHTML = `
        :root {
            --color-on-error: #ffffff;
            --color-error: #ba1a1a;
            --color-on-secondary-container: #004972;
            --color-inverse-surface: #2f312f;
            --color-primary-fixed: #c1ecd4;
            --color-on-tertiary-fixed: #2c1600;
            --color-surface-container-low: #f3f4f1;
            --color-on-primary-fixed-variant: #274e3d;
            --color-outline-variant: #c1c8c2;
            --color-primary-container: #1b4332;
            --color-primary: #012d1d;
            --color-tertiary-fixed-dim: #f0bd8b;
            --color-primary-fixed-dim: #a5d0b9;
            --color-surface-container-highest: #e2e3e0;
            --color-secondary: #006399;
            --color-on-secondary-fixed-variant: #004b74;
            --color-on-primary: #ffffff;
            --color-on-surface: #1a1c1a;
            --color-on-primary-fixed: #002114;
            --color-surface: #f9f9f6;
            --color-on-surface-variant: #414844;
            --color-surface-container: #eeeeeb;
            --color-surface-dim: #dadad7;
            --color-tertiary-container: #56340e;
            --color-on-background: #1a1c1a;
            --color-secondary-fixed-dim: #94ccff;
            --color-on-secondary-fixed: #001d32;
            --color-surface-variant: #e2e3e0;
            --color-surface-container-lowest: #ffffff;
            --color-surface-container-high: #e8e8e5;
            --color-inverse-primary: #a5d0b9;
            --color-background: #f9f9f6;
            --color-secondary-container: #67bafd;
            --color-secondary-fixed: #cde5ff;
            --color-on-tertiary-fixed-variant: #623f18;
            --color-error-container: #ffdad6;
            --color-tertiary-fixed: #ffdcbd;
            --color-surface-bright: #f9f9f6;
            --color-on-tertiary-container: #cd9d6d;
            --color-on-error-container: #93000a;
            --color-on-tertiary: #ffffff;
            --color-inverse-on-surface: #f1f1ee;
            --color-surface-tint: #3f6653;
            --color-outline: #717973;
            --color-on-primary-container: #86af99;
            --color-tertiary: #3b1f00;
            --color-on-secondary: #ffffff;
        }

        .dark {
            --color-background: #0b0f0c;
            --color-on-background: #e1e9e3;
            --color-surface: #111613;
            --color-on-surface: #e1e9e3;
            
            --color-surface-container-lowest: #070a08;
            --color-surface-container-low: #171f1a;
            --color-surface-container: #1d2722;
            --color-surface-container-high: #24302a;
            --color-surface-container-highest: #2d3c34;
            --color-surface-bright: #1d2722;
            --color-surface-dim: #0a0d0b;
            --color-surface-variant: #1f2a24;
            --color-on-surface-variant: #a2aea5;
            
            --color-primary: #52e59b;
            --color-on-primary: #003822;
            --color-primary-container: #005234;
            --color-on-primary-container: #b4ffd5;
            --color-primary-fixed: #76e2a7;
            --color-primary-fixed-dim: #52e59b;
            --color-on-primary-fixed-variant: #005234;
            
            --color-secondary: #4ea8de;
            --color-on-secondary: #003554;
            --color-secondary-container: #004d74;
            --color-on-secondary-container: #bde0fe;
            
            --color-outline: #88958d;
            --color-outline-variant: #35423a;
            --color-inverse-surface: #e1e9e3;
            --color-inverse-on-surface: #111613;
            
            --color-error: #ffb4ab;
            --color-on-error: #690005;
            --color-error-container: #93000a;
            --color-on-error-container: #ffdad6;
        }
        
        /* Transição suave de cores de tema de forma global */
        body, header, aside, main, section, div, button, input, select, textarea, a {
            transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), 
                        border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), 
                        color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    };

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    // Escuta mudanças de tema em tempo real vindas de outras abas/janelas
    window.addEventListener('storage', (e) => {
        if (e.key === 'theme') {
            applyTheme(e.newValue);
        }
    });
})();

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-error": "var(--color-on-error)",
                "error": "var(--color-error)",
                "on-secondary-container": "var(--color-on-secondary-container)",
                "inverse-surface": "var(--color-inverse-surface)",
                "primary-fixed": "var(--color-primary-fixed)",
                "on-tertiary-fixed": "var(--color-on-tertiary-fixed)",
                "surface-container-low": "var(--color-surface-container-low)",
                "on-primary-fixed-variant": "var(--color-on-primary-fixed-variant)",
                "outline-variant": "var(--color-outline-variant)",
                "primary-container": "var(--color-primary-container)",
                "primary": "var(--color-primary)",
                "tertiary-fixed-dim": "var(--color-tertiary-fixed-dim)",
                "primary-fixed-dim": "var(--color-primary-fixed-dim)",
                "surface-container-highest": "var(--color-surface-container-highest)",
                "secondary": "var(--color-secondary)",
                "on-secondary-fixed-variant": "var(--color-on-secondary-fixed-variant)",
                "on-primary": "var(--color-on-primary)",
                "on-surface": "var(--color-on-surface)",
                "on-primary-fixed": "var(--color-on-primary-fixed)",
                "surface": "var(--color-surface)",
                "on-surface-variant": "var(--color-on-surface-variant)",
                "surface-container": "var(--color-surface-container)",
                "surface-dim": "var(--color-surface-dim)",
                "tertiary-container": "var(--color-tertiary-container)",
                "on-background": "var(--color-on-background)",
                "secondary-fixed-dim": "var(--color-secondary-fixed-dim)",
                "on-secondary-fixed": "var(--color-on-secondary-fixed)",
                "surface-variant": "var(--color-surface-variant)",
                "surface-container-lowest": "var(--color-surface-container-lowest)",
                "surface-container-high": "var(--color-surface-container-high)",
                "inverse-primary": "var(--color-inverse-primary)",
                "background": "var(--color-background)",
                "secondary-container": "var(--color-secondary-container)",
                "secondary-fixed": "var(--color-secondary-fixed)",
                "on-tertiary-fixed-variant": "var(--color-on-tertiary-fixed-variant)",
                "error-container": "var(--color-error-container)",
                "tertiary-fixed": "var(--color-tertiary-fixed)",
                "surface-bright": "var(--color-surface-bright)",
                "on-tertiary-container": "var(--color-on-tertiary-container)",
                "on-error-container": "var(--color-on-error-container)",
                "on-tertiary": "var(--color-on-tertiary)",
                "inverse-on-surface": "var(--color-inverse-on-surface)",
                "surface-tint": "var(--color-surface-tint)",
                "outline": "var(--color-outline)",
                "on-primary-container": "var(--color-on-primary-container)",
                "tertiary": "var(--color-tertiary)",
                "on-secondary": "var(--color-on-secondary)"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "base": "8px",
                "bento-gap": "12px",
                "gutter": "16px",
                "margin-mobile": "16px",
                "margin-desktop": "32px"
            },
            "fontFamily": {
                "sans": ["Inter", "sans-serif"],
                "data-metric": ["Inter", "sans-serif"],
                "label-sm": ["Inter", "sans-serif"],
                "display-lg": ["Inter", "sans-serif"],
                "label-md": ["Inter", "sans-serif"],
                "headline-md": ["Inter", "sans-serif"],
                "body-md": ["Inter", "sans-serif"],
                "body-lg": ["Inter", "sans-serif"],
                "headline-lg-mobile": ["Inter", "sans-serif"],
                "headline-lg": ["Inter", "sans-serif"]
            },
            "fontSize": {
                "data-metric": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "600" }],
                "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500" }],
                "headline-md": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
                "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                "headline-lg-mobile": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600" }]
            }
        }
    }
}
