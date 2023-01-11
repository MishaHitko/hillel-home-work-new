import {CATEGORIES} from "./BD/data.js";
import {displayCategories} from "./components/creatElem.js";
import {btnBasket} from "./components/button-basket.js";
import {renderListOrders} from "./components/renderOrders.js";

displayCategories(CATEGORIES);
btnBasket();
renderListOrders();
