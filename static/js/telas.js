
const salgados = document.getElementById("salgados");

salgados.addEventListener("click", () => {
    // Seu HTML que deseja injetar
    const htmlToInject = `
    <div class="produto pt-1">
    <h3 class="pt-5 sm:pt-8 md:pt-10 lg:pt-12 pb-3 sm:pb-5 md:pb-7 pl-5 sm:pl-10 md:pl-20 pr-5 sm:pr-10 md:pr-20 bg-red-900 bg-opacity-10 rounded-tr-2xl rounded-tl-2xl text-center my-auto">Fritos</h3>
    <ul
        class="flex flex-col items-center space-y-4 bg-red-900 bg-opacity-5 p-5 rounded-bl-2xl rounded-br-2xl">
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl openPopup cursor-pointer" data-title="Disco de carne" data-image="img/bolinhoclose.webp" data-price="5.50"
            data-ingredients="Carne moida e catupiry">Disco
            de carne</li>
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl openPopup cursor-pointer" data-title="Coxinha" data-image="img/bolinhoclose.webp" data-price="10.00"
            data-ingredients="Peito de frango e catupiry">Coxinha</li>
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl cursor-pointer">Presunto
            e Queijo</li>
    </ul>
    </div>

    <div class="produto pt-1">
    <h2
    class="pt-5 sm:pt-8 md:pt-10 lg:pt-12 pb-3 sm:pb-5 md:pb-7 pl-5 sm:pl-10 md:pl-20 pr-5 sm:pr-10 md:pr-20 bg-red-900 bg-opacity-10 rounded-tr-2xl rounded-tl-2xl text-center my-auto">Assados</h2>
    <ul
        class="flex flex-col items-center space-y-4 bg-red-900 bg-opacity-5 p-5 rounded-bl-2xl rounded-br-2xl">
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl ">Pastel
            de frango</li>
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl">Pastel
            de <br>presunto e queijo</li>
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl">Pastel
            de carne</li>
    </ul>
    </div>
    
    <!-- Pop-up -->
        <div id="overlay" class="overlay"></div>

        <div id="popup" class="popup">
            <div class="popup-content">
                <span class="close" id="closePopup">&times;</span>
                <h2 id="popupTitle"></h2>
                <img class="imgpop_up" id="popupImage" src alt="Imagem do Item">
                <p id="popupPrice"></p>
                <p id="popupIngredients"></p>
                <button id="addToFavorites">Favoritos ❤</button>
                <button id="addToCart">Comprar 💵</button>
            </div>
        </div>
    `;

    // Selecione a div com o id "painel"
    const painel = document.getElementById("painel");

    // Injete o HTML dentro da div
    painel.innerHTML = htmlToInject;
});

const bebidas = document.getElementById("bebidas");

bebidas.addEventListener("click", () => {
    // Seu HTML que deseja injetar
    const htmlToInject = `
    <div class="produto pt-1">
    <h3 class="pt-5 sm:pt-8 md:pt-10 lg:pt-12 pb-3 sm:pb-5 md:pb-7 pl-5 sm:pl-10 md:pl-20 pr-5 sm:pr-10 md:pr-20 bg-red-900 bg-opacity-10 rounded-tr-2xl rounded-tl-2xl text-center my-auto">Fritos</h3>
    <ul
        class="flex flex-col items-center space-y-4 bg-red-900 bg-opacity-5 p-5 rounded-bl-2xl rounded-br-2xl">
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl openPopup cursor-pointer" data-title="Disco de carne" data-image="img/bolinhoclose.webp" data-price="5.50"
            data-ingredients="Carne moida e catupiry">Disco
            de carne</li>
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl openPopup cursor-pointer" data-title="Coxinha" data-image="img/bolinhoclose.webp" data-price="10.00"
            data-ingredients="Peito de frango e catupiry">Coxinha</li>
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl cursor-pointer">Presunto
            e Queijo</li>
    </ul>
    </div>
    <!-- Pop-up -->
        <div id="overlay" class="overlay"></div>

        <div id="popup" class="popup">
            <div class="popup-content">
                <span class="close" id="closePopup">&times;</span>
                <h2 id="popupTitle"></h2>
                <img class="imgpop_up" id="popupImage" src alt="Imagem do Item">
                <p id="popupPrice"></p>
                <p id="popupIngredients"></p>
                <button id="addToFavorites">Favoritos ❤</button>
                <button id="addToCart">Comprar 💵</button>
            </div>
        </div>
    `;

    // Selecione a div com o id "painel"
    const painel = document.getElementById("painel");

    // Injete o HTML dentro da div
    painel.innerHTML = htmlToInject;
});

const almoco = document.getElementById("almoco");

almoco.addEventListener("click", () => {
    // Seu HTML que deseja injetar
    const htmlToInject = `
    <div class="produto pt-1">
    <h3 class="pt-5 sm:pt-8 md:pt-10 lg:pt-12 pb-3 sm:pb-5 md:pb-7 pl-5 sm:pl-10 md:pl-20 pr-5 sm:pr-10 md:pr-20 bg-red-900 bg-opacity-10 rounded-tr-2xl rounded-tl-2xl text-center my-auto">Fritos</h3>
    <ul
        class="flex flex-col items-center space-y-4 bg-red-900 bg-opacity-5 p-5 rounded-bl-2xl rounded-br-2xl">
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl openPopup cursor-pointer" data-title="Disco de carne" data-image="img/bolinhoclose.webp" data-price="5.50"
            data-ingredients="Carne moida e catupiry">Disco
            de carne</li>
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl openPopup cursor-pointer" data-title="Coxinha" data-image="img/bolinhoclose.webp" data-price="10.00"
            data-ingredients="Peito de frango e catupiry">Coxinha</li>
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl cursor-pointer">Presunto
            e Queijo</li>
    </ul>
    </div>
    <!-- Pop-up -->
        <div id="overlay" class="overlay"></div>

        <div id="popup" class="popup">
            <div class="popup-content">
                <span class="close" id="closePopup">&times;</span>
                <h2 id="popupTitle"></h2>
                <img class="imgpop_up" id="popupImage" src alt="Imagem do Item">
                <p id="popupPrice"></p>
                <p id="popupIngredients"></p>
                <button id="addToFavorites">Favoritos ❤</button>
                <button id="addToCart">Comprar 💵</button>
            </div>
        </div>
    `;

    // Selecione a div com o id "painel"
    const painel = document.getElementById("painel");

    // Injete o HTML dentro da div
    painel.innerHTML = htmlToInject;
});

const jantinha = document.getElementById("jantinha");

jantinha.addEventListener("click", () => {
    // Seu HTML que deseja injetar
    const htmlToInject = `
    <div class="produto pt-1">
    <h3 class="pt-5 sm:pt-8 md:pt-10 lg:pt-12 pb-3 sm:pb-5 md:pb-7 pl-5 sm:pl-10 md:pl-20 pr-5 sm:pr-10 md:pr-20 bg-red-900 bg-opacity-10 rounded-tr-2xl rounded-tl-2xl text-center my-auto">Fritos</h3>
    <ul
        class="flex flex-col items-center space-y-4 bg-red-900 bg-opacity-5 p-5 rounded-bl-2xl rounded-br-2xl">
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl openPopup cursor-pointer" data-title="Disco de carne" data-image="img/bolinhoclose.webp" data-price="5.50"
            data-ingredients="Carne moida e catupiry">Disco
            de carne</li>
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl openPopup cursor-pointer" data-title="Coxinha" data-image="img/bolinhoclose.webp" data-price="10.00"
            data-ingredients="Peito de frango e catupiry">Coxinha</li>
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl cursor-pointer">Presunto
            e Queijo</li>
    </ul>
    </div>

    <div class="produto pt-1">
    <h2
    class="pt-5 sm:pt-8 md:pt-10 lg:pt-12 pb-3 sm:pb-5 md:pb-7 pl-5 sm:pl-10 md:pl-20 pr-5 sm:pr-10 md:pr-20 bg-red-900 bg-opacity-10 rounded-tr-2xl rounded-tl-2xl text-center my-auto">Assados</h2>
    <ul
        class="flex flex-col items-center space-y-4 bg-red-900 bg-opacity-5 p-5 rounded-bl-2xl rounded-br-2xl">
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl ">Pastel
            de frango</li>
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl">Pastel
            de <br>presunto e queijo</li>
        <li
            class="text-center text-sm sm:text-base md:text-lg lg:text-xl bg-red-900 bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl">Pastel
            de carne</li>
    </ul>
    </div>
    <!-- Pop-up -->
        <div id="overlay" class="overlay"></div>

        <div id="popup" class="popup">
            <div class="popup-content">
                <span class="close" id="closePopup">&times;</span>
                <h2 id="popupTitle"></h2>
                <img class="imgpop_up" id="popupImage" src alt="Imagem do Item">
                <p id="popupPrice"></p>
                <p id="popupIngredients"></p>
                <button id="addToFavorites">Favoritos ❤</button>
                <button id="addToCart">Comprar 💵</button>
            </div>
        </div>
    `;

    // Selecione a div com o id "painel"
    const painel = document.getElementById("painel");

    // Injete o HTML dentro da div
    painel.innerHTML = htmlToInject;
});