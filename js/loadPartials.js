// loadPartials.js
document.addEventListener("DOMContentLoaded", function() {
    // Define the header content
    const headerContent = `
        <header class="row">

            <div id="header_logo_wrap" class="header_wrap col-md-3">
                <a href="index.html" id="link_Header_Logo">
                    <img src="img/HeaderLogo.jpg" alt="Asparagus" id="img_Header_Logo" />
                </a>
            </div>

            <div id="header_title_wrap" class="header_wrap col-md-6">
                <h1 class="blueShadow">
                    Solo Keto
                </h1>
                <h2 class="greenShadow">
                    Learn
                </h2>
                <h2 class="greenShadow">
                    Simplify
                </h2>
                <h2 class="greenShadow">
                    Apply
                </h2>
            </div>

            <div id="header_nav_wrap" class="header_wrap col-md-3">
                <nav>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="learn.html">Learn</a>
                        </li>
                        <li>
                            <a href="shop.html">Shop</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    `;

    // Define the footer content
    const footerContent = `
        <footer>
            <p class="text-secondary text-center">Website developed by <a href="https://paulleadbeater.com" target="_blank">Paul Leadbeater</a> without the help of WordPress, SqaureSpace, Shopify or Zeus.</p>
        </footer>
    `;

    // Insert the header content
    document.querySelector('header').innerHTML = headerContent;

    // Insert the footer content
    document.querySelector('footer').innerHTML = footerContent;
});
