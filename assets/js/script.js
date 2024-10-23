document.addEventListener('DOMContentLoaded', function() {
    const welcomeText = document.getElementById('welcome-text');
    const fullWelcome = "Bienvenidos";
    const fullText = "Soy Luis Gabriel Padrón Moya y este es mi portafolio CV";
    let index = 0;

    function typeWriter(text, callback) {
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                welcomeText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                if (callback) setTimeout(callback, 500);
            }
        }, 50);
    }

    function eraseText(callback) {
        const erasing = setInterval(() => {
            if (welcomeText.textContent.length > 0) {
                welcomeText.textContent = welcomeText.textContent.slice(0, -1);
            } else {
                clearInterval(erasing);
                if (callback) setTimeout(callback, 500);
            }
        }, 50);
    }

    function blinkingCursor() {
        let visible = true;
        return setInterval(() => {
            welcomeText.textContent = visible ? "|" : " ";
            visible = !visible;
        }, 500);
    }

    const cursorInterval = blinkingCursor();

    setTimeout(() => {
        clearInterval(cursorInterval);
        welcomeText.textContent = "";
        typeWriter(fullWelcome, () => {
            setTimeout(() => {
                eraseText(() => {
                    typeWriter(fullText, () => {
                        setTimeout(() => {
                            eraseText(() => {
                                typeWriter(fullWelcome);
                            });
                        }, 5000);
                    });
                });
            }, 1000);
        });
    }, 3000);

    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const description = project.querySelector('.project-description');
        let isDescriptionVisible = false;

        project.addEventListener('click', () => {
            if (isDescriptionVisible) {
                description.style.opacity = '0';
            } else {
                description.style.opacity = '1';
            }
            isDescriptionVisible = !isDescriptionVisible;
        });
    });
});

