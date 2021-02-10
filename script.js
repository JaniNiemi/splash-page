const {body} = document;

function changeBackground(number) {
    // // Check if background is already showing
    let previousBackground;
    if (body.className) previousBackground = body.className;
    // Remove all CSS classes
    body.className = "";
    if (previousBackground === `background-${number}`) return;
    switch (number) {
        case "1":
            body.classList.add(`background-${number}`);
            break;
        case "2":
            body.classList.add(`background-${number}`);
            break;
        case "3":
            body.classList.add(`background-${number}`);
            break;
        case "4":
            body.classList.add(`background-${number}`);
            break;
        default:
            break;
    }
}