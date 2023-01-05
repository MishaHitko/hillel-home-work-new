export default function clearBlocks() {
    const infoBlock = document.querySelector('.info-block');
    const goodsBlock = document.querySelector('.goodsBlock');
    if(infoBlock && goodsBlock) {
        goodsBlock.remove()
        infoBlock.remove()
    }
}