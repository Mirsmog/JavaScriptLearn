import { getAnimeList } from "./api/api";
import { addAnimeToHtml } from "./addCards";
import { searchToggle } from "./search";
import { addPaginationBtn } from "./addPaginationBtn";
import { addHeaderActive } from "./scrollHeader";

addHeaderActive()

addAnimeToHtml(getAnimeList(`https://kitsu.io/api/edge/anime?filter[seasonYear]=2020&page[limit]=12&page[offset]=${720}`))

searchToggle()

addPaginationBtn()
