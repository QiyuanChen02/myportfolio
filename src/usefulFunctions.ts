export const linkTo = (e: React.MouseEvent) => {
    const targetLocation = e.target as HTMLElement;
    if (targetLocation.dataset.location) {
        window.location.href = targetLocation.dataset.location;
    }
}

export const reloadPage = () => {
    window.location.reload();
}
