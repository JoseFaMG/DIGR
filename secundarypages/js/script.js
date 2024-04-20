
    const tarjetas = document.querySelectorAll('.tarjeta');

    tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        tarjeta.classList.toggle('expandida');
    });
});
    /*text movement*/
    // function([string1, string2],target id,[color1,color2])
    consoleText(['CREA.', 'DISEÑA.', 'PROGRAMA'], 'text',['tomato','purple','RED']);

    function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function() {

            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount)
                window.setTimeout(function() {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0])
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function() {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x;
            }
        }, 120)
        window.setInterval(function() {
            if (visible === true) {
                con.className = 'console-underscore hidden'
                visible = false;

            } else {
                con.className = 'console-underscore'

                visible = true;
            }
        }, 400)
    }

/*mostarmensajedefiniciones*/
    document.addEventListener('DOMContentLoaded', function() {
        const tooltips = document.querySelectorAll('.tooltip');

        tooltips.forEach(function(tooltip) {
            tooltip.addEventListener('click', function(event) {
                event.stopPropagation();
                const definition = tooltip.getAttribute('data-definition');
                const tooltipDefinition = document.createElement('div');
                tooltipDefinition.classList.add('tooltip-definition');
                tooltipDefinition.textContent = definition;
                tooltip.appendChild(tooltipDefinition);
                tooltipDefinition.classList.toggle('active');
            });
        });

        document.addEventListener('click', function() {
            const activeTooltips = document.querySelectorAll('.tooltip .tooltip-definition.active');
            activeTooltips.forEach(function(activeTooltip) {
                activeTooltip.classList.remove('active');
            });
        });
    });
/*carrucel*/
    let slideIndex = 0;
    carousel();

    function carousel() {Tecnologías web
        let i;
        const slides = document.querySelectorAll('.card');
        for (i = 0; i < slides.length; i++) {
            slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
        }
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        setTimeout(carousel, 2000); // Cambia la imagen cada 2 segundos (2000 milisegundos)
    }
