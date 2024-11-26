const links = document.querySelectorAll('.linksOfName');


links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      
        link.style.backgroundColor = '#004AAD';
        link.style.color = '#FEDC01';
    });

    link.addEventListener('mouseleave', () => {
        
        link.style.backgroundColor = '#FEDC01';
        link.style.color = '#004AAD';
    });
});

const descriptions = {
    program: "Discover a wide range of academic programs that prepare you for your future career.",
    Inter_app: "Learn how to apply as an international student and become part of a global community.",
    Continuing_Education: "Enhance your skills or pursue a new passion through our continuing education courses."
};

// Select all list items with the class 'links'
const link1 = document.querySelectorAll('.links');

// Add hover event listeners
link1.forEach(link => {
    const id = link.id; // Get the ID of the current link
    const description = descriptions[id]; // Get the matching description

    // Create a span element for the description
    const span = document.createElement('span');
    span.textContent = description;

    // Append the description span to the link element
    link.appendChild(span);
});