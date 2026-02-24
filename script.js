class FeedbackForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                form {
                    display: flex;
                    flex-direction: column;
                    max-width: 400px;
                    gap: 10px;
                }
                label {
                    font-weight: bold;
                }
                input, select, textarea, button {
                    padding: 8px;
                    font-size: 1rem;
                }
                #result {
                    margin-top: 15px;
                    font-size: 1.1rem;
                }
                .required::after {
                    content: " *";
                    color: red;
                }
            </style>
            <form>
                <label for="name" class="required">Nombre</label>
                <input type="text" id="name" name="name" placeholder="Su nombre...">

                <label for="hotel" class="required">Hotel</label>
                <select id="hotel" name="hotel">
                    <option value="">-- Seleccione hotel --</option>
                    <option value="Hotel Sol">Hotel Sol</option>
                    <option value="Posada Luna">Posada Luna</option>
                    <option value="Resort Mar">Resort Mar</option>
                </select>

                <label for="rating" class="required">Calificación</label>
                <select id="rating" name="rating">
                    <option value="">-- Seleccione --</option>
                    <option value="1">1 estrella</option>
                    <option value="2">2 estrellas</option>
                    <option value="3">3 estrellas</option>
                    <option value="4">4 estrellas</option>
                    <option value="5">5 estrellas</option>
                </select>

                <label for="comments">Comentarios</label>
                <textarea id="comments" name="comments" rows="3" placeholder="Opcional"></textarea>

                <button type="submit">Enviar</button>
            </form>
            <div id="result"></div>
        `;

        this.shadowRoot
            .querySelector('form')
            .addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(e) {
        e.preventDefault();
        const nameInput = this.shadowRoot.querySelector('#name');
        const ratingSelect = this.shadowRoot.querySelector('#rating');
        const commentsInput = this.shadowRoot.querySelector('#comments');
        const resultDiv = this.shadowRoot.querySelector('#result');

        const name = nameInput.value.trim();
        const hotel = this.shadowRoot.querySelector('#hotel').value;
        const rating = ratingSelect.value;

        // validación básica
        if (name === '' || hotel === '' || rating === '') {
            resultDiv.textContent = 'Por favor complete todos los campos obligatorios.';
            resultDiv.style.color = 'red';
            return;
        }

        // mostrar resultado sin recargar la página
        resultDiv.style.color = 'green';
        resultDiv.textContent = `Gracias, ${name}. En ${hotel} calificaste tu estadía con ${rating} estrella${
            rating === '1' ? '' : 's'
        }. Comentarios: ${commentsInput.value || 'Ninguno'}.`;

        this.shadowRoot.querySelector('form').reset();
    }
    
}

customElements.define('feedback-form', FeedbackForm);
