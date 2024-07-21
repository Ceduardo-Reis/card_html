document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("birthdayForm");
    const cardsContainer = document.getElementById("cardsContainer");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const birthday = document.getElementById("birthday").value;
        const sector = document.getElementById("sector").value;
        const photoInput = document.getElementById("photo");

        if (photoInput.files && photoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                addBirthdayCard(name, new Date(birthday), sector, e.target.result);
            };
            reader.readAsDataURL(photoInput.files[0]);
        }

        form.reset();
    });

    const addBirthdayCard = (name, birthday, sector, photoSrc) => {
        const card = document.createElement("div");
        card.className = "card";

        const imgElement = document.createElement("img");
        imgElement.src = photoSrc;
        imgElement.alt = `${name}'s photo`;

        const nameElement = document.createElement("h2");
        nameElement.textContent = name;

        const sectorElement = document.createElement("p");
        sectorElement.textContent = `Setor: ${sector}`;

        const birthdayElement = document.createElement("p");
        birthdayElement.textContent = formatDate(birthday);

        card.appendChild(imgElement);
        card.appendChild(nameElement);
        card.appendChild(sectorElement);
        card.appendChild(birthdayElement);
        cardsContainer.appendChild(card);
    };

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };
});