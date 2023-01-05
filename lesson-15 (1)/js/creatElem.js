import {info, categories, goods} from "./data.js";
import clearBlocks from "./clearBlocks.js";
import {modalIcon} from "./modal.js";

const blockShop = document.querySelector('.blockShop');

export function categoriesGoods(array) {
    const blockCategories = document.createElement('div');
    blockCategories.classList.add('blockShop__blocks-items');

    array.forEach((value) => {
        const categories = document.createElement('div');

        categories.addEventListener('click', (event) => {
            const categoriesTarget = event.target.innerHTML;
            const targetGoods = goods.filter((value) => value.categories === categoriesTarget);
            const goodsBlock = document.querySelector('.goodsBlock');
            const infBlock = document.querySelector('.info-block');

            if (infBlock) {
                infBlock.remove();
            }
            if (goodsBlock) {
                goodsBlock.remove();
            }

            blockGoods(targetGoods);
        });

        categories.innerText = value;
        blockCategories.append(categories);
    });

    blockShop.append(blockCategories);
}

export function blockGoods(array) {
    const goodsBlock = document.createElement('div');

    goodsBlock.classList.add('blockShop__blocks-items');
    goodsBlock.classList.add('goodsBlock');

    array.forEach((value) => {
        const brandGoods = document.createElement('div');
        const categories = document.createElement('p');
        const brand = document.createElement('h3');
        const price = document.createElement('p');


        brandGoods.addEventListener('click', () => {
            const goodInfo = info.find((item) => value.id === item.id);
            const infBlock = document.querySelector('.info-block');
            if (infBlock) {
                infBlock.remove();
            }

            infoGoods(goodInfo);
        });

        categories.innerText = value.categories;
        brand.innerText = value.brand;
        price.innerText = value.price;

        brandGoods.append(categories);
        brandGoods.append(brand);
        brandGoods.append(price);
        goodsBlock.append(brandGoods);
    });

    blockShop.append(goodsBlock);
}

export function infoGoods(item) {
    const infoBlock = document.createElement('div');
    infoBlock.classList.add('info-block','blockShop__blocks-items');
    function buyHandler() {
        modalIcon(item);
        clearBlocks();
    };

    infoBlock.innerHTML = `
      <div>
          <p>Категория: ${item.categories}</p>
          <h3>${item.brand}</h3>
          <p>Цена: ${item.price}</p>
          <p>Цвет: ${item.color}</p>
          <p>В наличии: ${item.amount}</p>
          <button>Купить</button>
      </div>
  `
    infoBlock.querySelector('button').addEventListener('click', buyHandler)
    blockShop.append(infoBlock);
}