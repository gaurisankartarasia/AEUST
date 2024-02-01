document.addEventListener('DOMContentLoaded', function () {
    const customPointer = document.getElementById('custom-pointer');

    document.addEventListener('mousemove', function (e) {
        // Update the position of the custom pointer based on the cursor coordinates
        const x = e.clientX;
        const y = e.clientY;
        customPointer.style.transform = `translate(${x}px, ${y}px)`;
    });
});
