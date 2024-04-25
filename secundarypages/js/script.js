
    const tarjetas = document.querySelectorAll('.tarjeta');

    tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        tarjeta.classList.toggle('expandida');
    });
});
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
