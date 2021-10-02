import { ElementRef } from '@angular/core';

// Small lib for html element reference manipulation
export const elRef = (ref: ElementRef) => {
    return {
        click(): void { ref.nativeElement.click(); },
        attr: {
            src(path: string): void { ref.nativeElement.src = path; },
            html(html: string | number): void { ref.nativeElement.innerHTML = html; },
        },
        class: {
            add(className: string): void { ref.nativeElement.classList.add(className); },
            remove(className: string): void { ref.nativeElement.classList.remove(className); },
        },
        style: {
            width(val: string): void { ref.nativeElement.style.width = val; },
            height(val: string): void { ref.nativeElement.style.height = val; },
            zIndex(index: number): void { ref.nativeElement.style.zIndex = index; },
            position(pos: string): void { ref.nativeElement.style.position = pos; },
            left(val: number): void { ref.nativeElement.style.left = val; },
            right(val: number): void { ref.nativeElement.style.right = val; },
            top(val: number): void { ref.nativeElement.style.top = val; },
            bottom(val: number): void { ref.nativeElement.style.bottom = val; },
            background(bcg: string): void { ref.nativeElement.style.background = bcg; },
            color(color: string): void { ref.nativeElement.style.color = color; }
        },
    };
};
