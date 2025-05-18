document.addEventListener("DOMContentLoaded", () => {
    // Function to add the modal HTML to the DOM
    function addModalHTML() {
        const modalHTML = `
            <div id="myModal" class="modal" style="display: none;">
                <main>
                    <div>
                        <span id="close">&times;</span>
                        <h2>Dienste, die wir nutzen möchten</h2>
                        <p class="text-xs tiny:text-sm sm:text-base text-white">
                            Wir setzen auf unserer Website Cookies ein. Einige von ihnen sind
                            essenziell (z.B. für den Warenkorb), während andere uns helfen unser
                            Onlineangebot zu verbessern und wirtschaftlich zu betreiben. Sie
                            können dies akzeptieren oder per Klick auf die Schaltfläche
                            „Essenzielle Cookies“ ablehnen sowie diese Einstellungen jederzeit
                            aufrufen und Cookies auch nachträglich jederzeit abwählen (z.B. im
                            Fußbereich unserer Website). Nähere Hinweise erhalten Sie in unserer
                            Datenschutzerklärung. Um mehr zu erfahren, lesen Sie bitte unsere
                            <a href="../pages/data-protection.html" target="_blank" class="modal-link" rel="noopener">
                                Datenschutzerklärung</a>.
                        </p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div class="toggle-container">
                                    <label class="toggle-switch">
                                        <input type="checkbox" name="marketing" checked id="marketing-toggle" />
                                        <span class="slider"></span>
                                    </label>
                                </div>
                                <div>
                                    <p>Marketing</p>
                                    <p class="toggle-description">
                                        Diese Dienste verarbeiten persönliche Daten, um Ihnen
                                        relevante Inhalte über Produkte, Dienstleistungen oder Themen
                                        zu zeigen, die Sie interessieren könnten.
                                    </p>
                                    <div>
                                        <a class="modal-link" href="#" aria-haspopup="true" aria-expanded="false" tabindex="0"
                                            id="marketing-link"><span>↓</span> 1 Dienst</a>
                                    </div>
                                    <!-- First Hidden toggle -->
                                    <div class="extra-toggle" id="first-hidden-toggle" style="display: none; transition: all 0.3s ease;">
                                        <div class="toggle-container">
                                            <label class="toggle-switch">
                                                <input type="checkbox" id="first-additional-toggle" checked />
                                                <span class="slider"></span>
                                            </label>
                                        </div>
                                        <div>
                                            <p class="toggle-text">Google Analytics</p>
                                            <p class="toggle-description">Zweck: Marketing.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="toggle-container">
                                    <label class="toggle-switch disabled-toggle">
                                        <span class="slider"></span>
                                    </label>
                                </div>
                                <div>
                                    <p>
                                        Essential
                                        <span class="toggle-helper">(immer erforderlich)</span>
                                    </p>
                                    <div>
                                        <a class="modal-link" href="#" aria-haspopup="true" aria-expanded="false"
                                            id="essential-link" tabindex="0"><span>↓</span> 1 Dienst</a>
                                    </div>
                                    <!-- Second Hidden toggle -->
                                    <div class="extra-toggle" id="second-hidden-toggle" style="display: none; transition: all 0.3s ease;">
                                        <div class="toggle-container">
                                            <label class="toggle-switch disabled-toggle">
                                                <span class="slider"></span>
                                            </label>
                                        </div>
                                        <div>
                                            <p class="toggle-text">(Opt-out)</p>
                                            <p class="toggle-description">
                                                Essentielle Cookies, die zum Speichern des Warenkorbs oder
                                                Login benötigt werden. Zweck: Essential
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button type="button" id="save-button">Speichern</button>
                        <a target="_blank" href="https://kiprotect.com/klaro">Realisiert mit Klaro!</a>
                    </div>
                </main>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // Helper function to toggle visibility and update link text
    function toggleVisibility(element, linkElement, expandedText, collapsedText) {
        const currentlyVisible = document.querySelector('.extra-toggle:not([style*="display: none"])');
        if (currentlyVisible && currentlyVisible !== element) {
            currentlyVisible.style.display = 'none';
            const correspondingLink = currentlyVisible.previousElementSibling.querySelector('.modal-link');
            if (correspondingLink) {
                correspondingLink.innerHTML = `<span>↓</span> ${collapsedText}`;
            }
        }

        const isHidden = element.style.display === "none";
        element.style.display = isHidden ? "flex" : "none";
        linkElement.innerHTML = isHidden
            ? `<span>↑</span> ${expandedText}`
            : `<span>↓</span> ${collapsedText}`;
    }

    // Function to sync checkboxes
    function syncCheckboxes(checkbox1, checkbox2) {
        checkbox1.addEventListener("change", () => {
            checkbox2.checked = checkbox1.checked;
        });
        checkbox2.addEventListener("change", () => {
            checkbox1.checked = checkbox2.checked;
        });
    }

    // Add modal HTML to the DOM
    addModalHTML();

    // Modal management
    const modal = document.getElementById("myModal");
    const closeButton = document.getElementById("close");
    const acceptButton = document.getElementById("save-button");
    const openModalButton = document.getElementById("openModalButton");

    // Open the modal when the footer button is clicked
    openModalButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Close the modal when the close button or save button is clicked
    closeButton.onclick = () => (modal.style.display = "none");
    acceptButton.onclick = () => (modal.style.display = "none");

    // Close the modal if the user clicks outside of the modal
    window.onclick = (event) => {
        if (event.target === modal) modal.style.display = "none";
    };

    // First Toggle (Marketing Link)
    const marketingLink = document.getElementById("marketing-link");
    const firstHiddenToggle = document.getElementById("first-hidden-toggle");

    marketingLink.addEventListener("click", (e) => {
        e.preventDefault();
        toggleVisibility(firstHiddenToggle, marketingLink, "1 Dienst", "1 Dienst");
    });

    // Synchronize toggling between marketing toggle and extra checkbox
    const extraToggleCheckbox = document.querySelector(
        ".extra-toggle input[type='checkbox']"
    );
    const marketingToggle = document.getElementById("marketing-toggle");

    syncCheckboxes(marketingToggle, extraToggleCheckbox);

    // Second Toggle (Essential Link)
    const essentialLink = document.getElementById("essential-link");
    const secondHiddenToggle = document.getElementById("second-hidden-toggle");

    essentialLink.addEventListener("click", (e) => {
        e.preventDefault();
        toggleVisibility(secondHiddenToggle, essentialLink, "1 Dienst", "1 Dienst");
    });
});
