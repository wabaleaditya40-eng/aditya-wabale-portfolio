/* =========================================================
   ADITYA WABALE - PORTFOLIO SCRIPT
   Clean & Unified Version
   ========================================================= */


/* =========================================================
   1. PREMIUM PAGE LOADER + PAGE REVEAL
   ========================================================= */

(function createPreloader() {

    if (document.querySelector(".site-preloader")) {
        return;
    }

    /* -----------------------------------------------------
       PAGE LOCK
       ----------------------------------------------------- */

    const pageLockStyle = document.createElement("style");

    pageLockStyle.id = "portfolio-preloader-lock";

    pageLockStyle.textContent = `

        html.preloader-active,
        html.preloader-active body {
            overflow: hidden !important;
        }

        html.preloader-active body > *:not(.site-preloader) {
            visibility: hidden !important;
        }

        html.preloader-active body > .site-preloader {
            visibility: visible !important;
        }

    `;

    document.head.appendChild(pageLockStyle);

    document.documentElement.classList.add("preloader-active");


    /* -----------------------------------------------------
       TIMER
       ----------------------------------------------------- */

    const startTime = Date.now();

    const MINIMUM_DISPLAY_TIME = 1350;

    let hideStarted = false;


    /* -----------------------------------------------------
       PRELOADER HTML
       ----------------------------------------------------- */

    const preloader = document.createElement("div");

    preloader.className = "site-preloader";

    preloader.innerHTML = `

        <div class="preloader-content">

            <div class="preloader-logo">
                AW
            </div>

            <div class="preloader-designed">
                <span>DESIGNED BY</span>
            </div>

            <div class="preloader-name">
                ADITYA WABALE
            </div>

            <div class="preloader-line">
                <span></span>
            </div>

        </div>

    `;


    /* -----------------------------------------------------
       PRELOADER CSS
       ----------------------------------------------------- */

    const preloaderStyle = document.createElement("style");

    preloaderStyle.id = "portfolio-preloader-style";

    preloaderStyle.textContent = `

        .site-preloader {

            position: fixed !important;

            inset: 0 !important;

            width: 100% !important;

            height: 100% !important;

            display: flex !important;

            align-items: center !important;

            justify-content: center !important;

            background:
                radial-gradient(
                    circle at center,
                    rgba(41, 73, 150, 0.18) 0%,
                    rgba(15, 25, 55, 0.12) 30%,
                    #070b14 72%
                ) !important;

            z-index: 999999 !important;

            opacity: 1 !important;

            visibility: visible !important;

            pointer-events: auto !important;

            overflow: hidden !important;

            transform: translateY(0);

            transition:
                transform
                0.9s
                cubic-bezier(.76,0,.24,1),

                opacity
                0.35s
                ease
                0.55s;
        }


        .site-preloader::before {

            content: "";

            position: absolute;

            width: 460px;

            height: 460px;

            left: 50%;

            top: 50%;

            transform:
                translate(-50%, -50%);

            background:
                radial-gradient(
                    circle,
                    rgba(37,99,235,0.15) 0%,
                    rgba(124,58,237,0.09) 35%,
                    transparent 70%
                );

            filter: blur(18px);

            pointer-events: none;
        }


        .site-preloader::after {

            content: "";

            position: absolute;

            width: 180px;

            height: 180px;

            left: 50%;

            top: 50%;

            transform:
                translate(-50%, -50%);

            border-radius: 50%;

            background:
                rgba(99,102,241,0.06);

            filter: blur(35px);

            pointer-events: none;
        }


        .preloader-content {

            position: relative;

            z-index: 2;

            display: flex;

            flex-direction: column;

            align-items: center;

            justify-content: center;

            text-align: center;
        }


        .preloader-logo {

            width: 90px;

            height: 90px;

            display: flex;

            align-items: center;

            justify-content: center;

            border-radius: 24px;

            font-family:
                "Space Grotesk",
                sans-serif;

            font-size: 30px;

            font-weight: 700;

            letter-spacing: -1px;

            color: #ffffff;

            background:
                linear-gradient(
                    135deg,
                    #2563eb 0%,
                    #4f46e5 48%,
                    #7c3aed 100%
                );

            box-shadow:

                0 0 25px
                rgba(37,99,235,0.35),

                0 0 55px
                rgba(124,58,237,0.20),

                inset 0 1px 1px
                rgba(255,255,255,0.25);

            position: relative;

            animation:

                preloaderLogoIn
                0.75s
                cubic-bezier(.16,1,.3,1)
                forwards,

                preloaderPulse
                2.2s
                ease-in-out
                0.75s
                infinite;
        }


        .preloader-logo::after {

            content: "";

            position: absolute;

            inset: -5px;

            border-radius: 28px;

            border:
                1px solid
                rgba(96,165,250,0.35);

            animation:
                logoRing
                2.3s
                ease-in-out
                infinite;
        }


        .preloader-designed {

            margin-top: 23px;

            font-family:
                "Space Grotesk",
                sans-serif;

            font-size: 8px;

            font-weight: 500;

            letter-spacing: 4px;

            color:
                rgba(255,255,255,0.45);

            animation:
                textReveal
                0.7s
                cubic-bezier(.16,1,.3,1)
                0.35s
                both;
        }


        .preloader-name {

            margin-top: 7px;

            font-family:
                "Space Grotesk",
                sans-serif;

            font-size:
                clamp(28px, 5vw, 42px);

            font-weight: 700;

            letter-spacing: 1.5px;

            line-height: 1.05;

            background:
                linear-gradient(
                    90deg,
                    #ffffff 0%,
                    #93c5fd 30%,
                    #818cf8 55%,
                    #a78bfa 75%,
                    #ffffff 100%
                );

            background-size: 200% auto;

            -webkit-background-clip: text;

            background-clip: text;

            -webkit-text-fill-color:
                transparent;

            animation:

                nameReveal
                0.8s
                cubic-bezier(.16,1,.3,1)
                0.48s
                both,

                nameShine
                3s
                linear
                1.4s
                infinite;
        }


        .preloader-line {

            width: 190px;

            height: 3px;

            margin-top: 28px;

            background:
                rgba(255,255,255,0.09);

            border-radius: 100px;

            overflow: hidden;

            position: relative;

            box-shadow:
                inset 0 0 0 1px
                rgba(255,255,255,0.04);

            animation:
                lineAppear
                0.5s
                ease
                0.65s
                both;
        }


        .preloader-line span {

            display: block;

            width: 0%;

            height: 100%;

            border-radius: 100px;

            background:
                linear-gradient(
                    90deg,
                    #2563eb 0%,
                    #4f46e5 45%,
                    #7c3aed 75%,
                    #a78bfa 100%
                );

            box-shadow:

                0 0 8px
                rgba(37,99,235,0.65),

                0 0 18px
                rgba(124,58,237,0.55);

            animation:
                loadingProgress
                1.15s
                cubic-bezier(.22,.61,.36,1)
                0.05s
                forwards;

            position: relative;
        }


        .preloader-line span::after {

            content: "";

            position: absolute;

            top: 0;

            right: 0;

            width: 45px;

            height: 100%;

            background:
                linear-gradient(
                    90deg,
                    transparent,
                    rgba(255,255,255,0.75),
                    transparent
                );

            filter: blur(2px);

            animation:
                progressShine
                1.15s
                ease-out
                0.05s
                forwards;
        }


        .site-preloader.page-reveal {

            transform:
                translateY(-100%);

            opacity: 1;

            pointer-events: none;
        }


        @keyframes preloaderLogoIn {

            from {
                opacity: 0;

                transform:
                    translateY(18px)
                    scale(0.75);
            }

            to {
                opacity: 1;

                transform:
                    translateY(0)
                    scale(1);
            }
        }


        @keyframes preloaderPulse {

            0%,
            100% {

                box-shadow:

                    0 0 25px
                    rgba(37,99,235,0.35),

                    0 0 55px
                    rgba(124,58,237,0.20),

                    inset 0 1px 1px
                    rgba(255,255,255,0.25);
            }

            50% {

                box-shadow:

                    0 0 35px
                    rgba(37,99,235,0.50),

                    0 0 80px
                    rgba(124,58,237,0.30),

                    inset 0 1px 1px
                    rgba(255,255,255,0.30);
            }
        }


        @keyframes logoRing {

            0% {

                opacity: 0.7;

                transform:
                    scale(1);
            }

            50% {

                opacity: 0.2;

                transform:
                    scale(1.08);
            }

            100% {

                opacity: 0.7;

                transform:
                    scale(1);
            }
        }


        @keyframes textReveal {

            from {

                opacity: 0;

                transform:
                    translateY(12px);
            }

            to {

                opacity: 1;

                transform:
                    translateY(0);
            }
        }


        @keyframes nameReveal {

            from {

                opacity: 0;

                transform:
                    translateY(18px)
                    scale(0.96);

                filter: blur(6px);
            }

            to {

                opacity: 1;

                transform:
                    translateY(0)
                    scale(1);

                filter: blur(0);
            }
        }


        @keyframes nameShine {

            from {
                background-position:
                    0% center;
            }

            to {
                background-position:
                    200% center;
            }
        }


        @keyframes lineAppear {

            from {

                opacity: 0;

                transform:
                    scaleX(0.5);
            }

            to {

                opacity: 1;

                transform:
                    scaleX(1);
            }
        }


        @keyframes loadingProgress {

            from {
                width: 0%;
            }

            to {
                width: 100%;
            }
        }


        @keyframes progressShine {

            from {
                transform:
                    translateX(-55px);

                opacity: 0;
            }

            20% {
                opacity: 1;
            }

            to {

                transform:
                    translateX(235px);

                opacity: 0;
            }
        }


        @media (max-width: 576px) {

            .preloader-logo {

                width: 72px;

                height: 72px;

                border-radius: 20px;

                font-size: 24px;
            }


            .preloader-logo::after {
                border-radius: 24px;
            }


            .preloader-designed {

                margin-top: 21px;

                font-size: 7px;

                letter-spacing: 3.5px;
            }


            .preloader-name {

                font-size: 27px;

                letter-spacing: 1px;
            }


            .preloader-line {

                width: 135px;

                margin-top: 24px;
            }


            .site-preloader::before {

                width: 300px;

                height: 300px;
            }

        }


        @media (prefers-reduced-motion: reduce) {

            .preloader-logo,
            .preloader-designed,
            .preloader-name,
            .preloader-line,
            .preloader-line span,
            .preloader-line span::after {

                animation: none !important;
            }


            .site-preloader {

                transition:
                    opacity 0.2s ease;
            }

        }

    `;

    document.head.appendChild(preloaderStyle);


    /* -----------------------------------------------------
       MOUNT PRELOADER
       ----------------------------------------------------- */

    function mountPreloader() {

        if (!document.body) {
            return;
        }


        if (!document.querySelector(".site-preloader")) {

            document.body.prepend(preloader);

        }


        /* -------------------------------------------------
           REVEAL PAGE
           ------------------------------------------------- */

        function revealPage() {

            if (hideStarted) {
                return;
            }

            hideStarted = true;


            const elapsed =
                Date.now() - startTime;


            const remainingTime =
                Math.max(
                    0,
                    MINIMUM_DISPLAY_TIME - elapsed
                );


            setTimeout(function () {

                document.documentElement
                    .classList
                    .remove("preloader-active");


                document.body.classList.add(
                    "page-loaded"
                );


                requestAnimationFrame(function () {

                    requestAnimationFrame(function () {

                        preloader.classList.add(
                            "page-reveal"
                        );

                    });

                });


                setTimeout(function () {

                    if (preloader.parentNode) {
                        preloader.remove();
                    }


                    if (preloaderStyle.parentNode) {
                        preloaderStyle.remove();
                    }


                    if (pageLockStyle.parentNode) {
                        pageLockStyle.remove();
                    }

                }, 950);

            }, remainingTime);

        }


        window.addEventListener(
            "load",
            revealPage,
            {
                once: true
            }
        );


        if (document.readyState === "complete") {
            revealPage();
        }

    }


    if (document.body) {

        mountPreloader();

    } else {

        document.addEventListener(
            "DOMContentLoaded",
            mountPreloader,
            {
                once: true
            }
        );

    }

})();



/* =========================================================
   2. INITIALIZE AOS
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (typeof AOS === "undefined") {
            return;
        }


        AOS.init({

            duration: 850,

            easing:
                "ease-out-quart",

            once: true,

            offset:
                window.innerWidth < 768
                    ? 30
                    : 80,

            disable: false

        });

    }
);



/* =========================================================
   3. NAVBAR SCROLL EFFECT
   ========================================================= */

(function initNavbarScroll() {

    function setupNavbar() {

        const navbar =
            document.querySelector(
                ".custom-navbar"
            );


        if (!navbar) {
            return;
        }


        function updateNavbar() {

            navbar.classList.toggle(
                "navbar-scrolled",
                window.scrollY > 40
            );

        }


        window.addEventListener(
            "scroll",
            updateNavbar,
            {
                passive: true
            }
        );


        updateNavbar();

    }


    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            setupNavbar,
            {
                once: true
            }
        );

    } else {

        setupNavbar();

    }

})();



/* =========================================================
   4. HERO MOUSE MOVEMENT EFFECT
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const heroSection =
            document.querySelector(
                ".hero-section"
            );


        const profileCard =
            document.querySelector(
                ".profile-card"
            );


        const codeCard =
            document.querySelector(
                ".floating-code-card"
            );


        const aiCard =
            document.querySelector(
                ".floating-ai-card"
            );


        if (
            !heroSection ||
            !profileCard ||
            !codeCard ||
            !aiCard
        ) {

            return;

        }


        let animationFrame = null;


        const canUseMouseEffect =
            window.matchMedia(
                "(hover: hover) and (pointer: fine)"
            ).matches;


        if (!canUseMouseEffect) {
            return;
        }


        heroSection.addEventListener(
            "mousemove",
            function (e) {

                if (window.innerWidth < 992) {
                    return;
                }


                const rect =
                    heroSection.getBoundingClientRect();


                if (
                    !rect.width ||
                    !rect.height
                ) {
                    return;
                }


                const x =
                    (e.clientX - rect.left)
                    / rect.width
                    - 0.5;


                const y =
                    (e.clientY - rect.top)
                    / rect.height
                    - 0.5;


                if (animationFrame) {

                    cancelAnimationFrame(
                        animationFrame
                    );

                }


                animationFrame =
                    requestAnimationFrame(
                        function () {

                            profileCard.style.transform =
                                `translate(
                                    ${x * 8}px,
                                    ${y * 8}px
                                )`;


                            codeCard.style.transform =
                                `translate(
                                    ${x * 12}px,
                                    ${y * 12}px
                                )`;


                            aiCard.style.transform =
                                `translate(
                                    ${x * -10}px,
                                    ${y * -10}px
                                )`;

                        }
                    );

            }
        );


        heroSection.addEventListener(
            "mouseleave",
            function () {

                if (animationFrame) {

                    cancelAnimationFrame(
                        animationFrame
                    );

                }


                profileCard.style.transform = "";

                codeCard.style.transform = "";

                aiCard.style.transform = "";

            }
        );

    }
);



/* =========================================================
   5. MOBILE NAVBAR CLOSE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const navbarCollapse =
            document.querySelector(
                ".navbar-collapse"
            );


        const navLinks =
            document.querySelectorAll(
                ".navbar-collapse .nav-link"
            );


        if (
            !navbarCollapse ||
            !navLinks.length ||
            typeof bootstrap === "undefined"
        ) {

            return;

        }


        const bsCollapse =
            bootstrap.Collapse
                .getOrCreateInstance(
                    navbarCollapse,
                    {
                        toggle: false
                    }
                );


        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        if (
                            window.innerWidth < 992
                        ) {

                            bsCollapse.hide();

                        }

                    }
                );

            }
        );

    }
);



/* =========================================================
   6. HERO TYPING EFFECT
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const typingElement =
            document.querySelector(
                ".hero-content h2"
            );


        if (!typingElement) {
            return;
        }


        const texts = [

            "CSE (AI) Student",

            "Java Learner",

            "DSA Learner"

        ];


        let textIndex = 0;

        let charIndex = 0;

        let deleting = false;


        function typeEffect() {

            const currentText =
                texts[textIndex];


            if (!deleting) {

                typingElement.textContent =
                    currentText.substring(
                        0,
                        charIndex + 1
                    );


                charIndex++;


                if (
                    charIndex ===
                    currentText.length
                ) {

                    deleting = true;


                    setTimeout(
                        typeEffect,
                        1500
                    );


                    return;

                }

            } else {

                typingElement.textContent =
                    currentText.substring(
                        0,
                        charIndex - 1
                    );


                charIndex--;


                if (charIndex === 0) {

                    deleting = false;

                    textIndex =
                        (textIndex + 1)
                        % texts.length;

                }

            }


            setTimeout(
                typeEffect,
                deleting
                    ? 60
                    : 100
            );

        }


        typeEffect();

    }
);



/* =========================================================
   7. SCROLL PROGRESS INDICATOR
   ========================================================= */

(function initScrollProgress() {

    const progress =
        document.getElementById(
            "scrollProgress"
        );


    if (!progress) {
        return;
    }


    let ticking = false;


    function updateProgress() {

        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement
                .scrollHeight
            - window.innerHeight;


        const percentage =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;


        progress.style.width =
            Math.min(
                100,
                Math.max(
                    0,
                    percentage
                )
            ) + "%";


        ticking = false;

    }


    function requestProgressUpdate() {

        if (!ticking) {

            requestAnimationFrame(
                updateProgress
            );

            ticking = true;

        }

    }


    window.addEventListener(
        "scroll",
        requestProgressUpdate,
        {
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        requestProgressUpdate,
        {
            passive: true
        }
    );


    updateProgress();

})();



/* =========================================================
   8. ACTIVE NAVBAR SECTION INDICATOR
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const sections =
            document.querySelectorAll(
                "section[id]"
            );


        const navLinks =
            document.querySelectorAll(
                ".navbar-nav a[href^='#']"
            );


        if (
            !sections.length ||
            !navLinks.length
        ) {

            return;

        }


        function updateActiveNav() {

            let currentSection = "home";


            const scrollPosition =
                window.scrollY + 180;


            sections.forEach(
                function (section) {

                    if (
                        scrollPosition >=
                        section.offsetTop
                    ) {

                        currentSection =
                            section.getAttribute(
                                "id"
                            );

                    }

                }
            );


            navLinks.forEach(
                function (link) {

                    const target =
                        link.getAttribute(
                            "href"
                        );


                    link.classList.toggle(
                        "active",
                        target ===
                        "#" + currentSection
                    );

                }
            );

        }


        window.addEventListener(
            "scroll",
            updateActiveNav,
            {
                passive: true
            }
        );


        window.addEventListener(
            "resize",
            updateActiveNav,
            {
                passive: true
            }
        );


        updateActiveNav();

    }
);



/* =========================================================
   9. PROJECT CARD 3D TILT EFFECT
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const projectCards =
            document.querySelectorAll(
                ".project-card"
            );


        if (!projectCards.length) {
            return;
        }


        const canUseTilt =
            window.matchMedia(
                "(hover: hover) and (pointer: fine)"
            ).matches;


        if (!canUseTilt) {
            return;
        }


        projectCards.forEach(
            function (card) {

                card.addEventListener(
                    "mousemove",
                    function (event) {

                        const rect =
                            card.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left;


                        const y =
                            event.clientY -
                            rect.top;


                        const centerX =
                            rect.width / 2;


                        const centerY =
                            rect.height / 2;


                        if (
                            !centerX ||
                            !centerY
                        ) {
                            return;
                        }


                        const rotateX =
                            ((y - centerY)
                                / centerY)
                            * -3;


                        const rotateY =
                            ((x - centerX)
                                / centerX)
                            * 3;


                        card.style.transform =
                            `perspective(900px)
                             rotateX(${rotateX}deg)
                             rotateY(${rotateY}deg)
                             translateY(-6px)`;

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        card.style.transform =
                            "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";

                    }
                );


                card.addEventListener(
                    "mouseenter",
                    function () {

                        card.style.willChange =
                            "transform";

                    }
                );

            }
        );

    }
);



/* =========================================================
   10. FOOTER BACK TO TOP
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const topButton =
            document.querySelector(
                ".footer-top-btn"
            );


        if (!topButton) {
            return;
        }


        topButton.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }
);



/* =========================================================
   11. AOS REFRESH ON RESIZE
   ========================================================= */

(function initAOSResize() {

    let resizeTimer = null;


    window.addEventListener(
        "resize",
        function () {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    function () {

                        if (
                            typeof AOS !==
                            "undefined"
                        ) {

                            AOS.refreshHard();

                        }

                    },
                    180
                );

        },
        {
            passive: true
        }
    );

})();



/* =========================================================
   12. GLOBAL REDUCED-MOTION SUPPORT
   ========================================================= */

(function initReducedMotionSupport() {

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (!reducedMotion.matches) {
        return;
    }


    document.documentElement
        .classList
        .add("reduced-motion");

})();


/* =========================================================
   END OF PORTFOLIO SCRIPT
   ========================================================= */