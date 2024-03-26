var x = document.querySelector(".navigation-panel");
var y = document.querySelector('.content-panel')
    function togglePanel() {
        if (x.style.display === "none") {
            x.style.display = "block";
            x.style.width = "100%";
            y.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.display = "block";
            y.style.width = "100%"
        }
    }

    var navButtons = document.querySelectorAll('.nav-content');
    navButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var value = this.getAttribute('data-value');
            fetchContent(value);
             // Check screen width before calling togglePanel
        if (window.innerWidth < 600) {
            togglePanel();
        }
        });
    });

    function fetchContent(value) {
        // Assuming the HTML files are located in a folder named "html"
        fetch('sections/' + value + '.html') // Fetch the HTML file corresponding to the value
            .then(response => response.text())
            .then(data => {
                document.querySelector('.content-panel').innerHTML = data; // Insert the fetched HTML content into the content panel
            })
            .catch(error => console.error('Error fetching content:', error));
    }

    navButtons[0].click();