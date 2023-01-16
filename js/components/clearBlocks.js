export default function clearBlocks(removeBlock) {
    if (!Array.isArray(removeBlock)) {
        removeBlock = [removeBlock];
    }
    removeBlock.map((block) => {
        const blockElem = document.querySelector(block);
        if (blockElem) {
            blockElem.remove();
        }
    })
}