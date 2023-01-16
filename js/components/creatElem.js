import {GOODS} from "../BD/data.js";
import clearBlocks from "./clearBlocks.js";
import {modalIcon} from "./modal.js";

const blockShop = document.querySelector('.blockShop');

export function displayCategories(categories) {
    const blockCategories = document.createElement('div');
    blockCategories.classList.add('blockShop__blocks-items');

    function showCategoryItems (event) {
        const categoryName = event.target.dataset.categoryId;
        const targetGoods = GOODS.filter(({category}) => category === categoryName);
        clearBlocks(['.info-block', '.goodsBlock']);
        displayGoods(targetGoods);
    };

    categories.forEach((category) => {
        const categoriesElem = document.createElement('div');

        categoriesElem.addEventListener('click', showCategoryItems);

        categoriesElem.innerText = category;
        categoriesElem.setAttribute('data-category-id', category);
        blockCategories.append(categoriesElem);
    });

    blockShop.append(blockCategories);
}

export function displayGoods(goods) {
    const goodsBlock = document.createElement('div');

    goodsBlock.classList.add('blockShop__blocks-items');
    goodsBlock.classList.add('goodsBlock');

    goods.forEach((good) => {
        const brandGoods = document.createElement('div');
        const categories = document.createElement('p');
        const brand = document.createElement('h3');
        const price = document.createElement('p');
        brandGoods.setAttribute('data-good-id', good.id);

        brandGoods.addEventListener('click', (event) => {
            const goodInfo = event.currentTarget.dataset.goodId;
            clearBlocks('.info-block');
            displayInfoGoods(GOODS[goodInfo - 1]);
        });

        categories.innerText = good.category;
        brand.innerText = good.brand;
        price.innerText = good.price;

        brandGoods.append(categories);
        brandGoods.append(brand);
        brandGoods.append(price);
        goodsBlock.append(brandGoods);
    });

    blockShop.append(goodsBlock);
}

export function displayInfoGoods(good) {
    const infoBlock = document.createElement('div');
    infoBlock.classList.add('info-block','blockShop__blocks-items');
    function buyHandler() {
        modalIcon(good);
    };

    infoBlock.innerHTML = `
      <div>
          <p>Категория: ${good.category}</p>
          <h3>${good.brand}</h3>
          <p>Цена: ${good.price}</p>
          <p>Цвет: ${good.color}</p>
          <p>В наличии: ${good.amount}</p>
          <button>Купить</button>
      </div>
  `
    infoBlock.querySelector('button').addEventListener('click', () => {
        const buttonBasket = document.querySelector('.btn-basket');
        buyHandler();
        blockShop.classList.add('form-none');
        buttonBasket.classList.add('form-none');
    });
    blockShop.append(infoBlock);
}
