function renderHeader () {
    const heading = document.createElement("h1");
    heading.textContent = "Domantė";
    heading.style.textAlign = "center";
    heading.style.color = "red";

    document.body.append(heading);
}

export default renderHeader;