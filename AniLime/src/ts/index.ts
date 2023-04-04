import { anime } from "./api/api";
import { addAnimeToHtml } from "./addCards";
import { searchToggle } from "./search";
import { addPaginationBtn } from "./addPaginationBtn";


addAnimeToHtml(anime);

searchToggle()

addPaginationBtn()
