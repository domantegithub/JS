import { facebookBlue, googleBlue, googleRed, googleYellow, googleGreen, youtubeRed, youtubeBlack } from "./modules/colors.js";

import numbers, {zero, nine} from "./modules/numbers.js";
import {addition} from "./modules/math.js";
import renderHeader from "./modules/header.js";
import header from "./modules/codeacademy.js";
import multiplyNumbers from "./modules/multi.js";
import cars from "./modules/cars";
console.log( facebookBlue,googleBlue, googleRed, googleYellow, googleGreen, youtubeBlack, youtubeRed);

console.log(numbers, zero, nine);
console.log(addition(zero,nine));
renderHeader();
console.log(multiplyNumbers(6,4));
header(document.body);
cars(document.body);