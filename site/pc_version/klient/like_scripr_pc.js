const doc = document
const log = console.log

const aria = {
    label: {
        true: "Отправить реакцию «нравится»",
        false: "Отменить реакцию «нравится»"
    }
}

doc.addEventListener("click", ({ target }) => {
    const likeBtn = target.closest(".selector")

    if (!likeBtn) return;
    likeBtn.ariaPressed = likeBtn.ariaPressed === "true" ? "false" : "true";
    likeBtn.ariaLabel = aria.label[likeBtn.ariaPressed];

})

