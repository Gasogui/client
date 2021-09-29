import { Title } from '@angular/platform-browser';

export interface Movie {
    mov_id?: number | string,
    mov_title?: string,
    mov_year?: number | string,
    mov_time?: number | string,
    mov_lang?: string,
    mov_dt_rel?: Date | string,
    mov_rel_country?: string
};