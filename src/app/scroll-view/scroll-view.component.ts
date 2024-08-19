// import { Component, HostListener } from '@angular/core';

// @Component({
//   selector: 'app-scroll-view',
//   templateUrl: './scroll-view.component.html',
//   styleUrls: ['./scroll-view.component.css']
// })
// export class ScrollViewComponent {
//   items = [
//     { title: 'Item 1', description: 'Description for item 1', image: 'Dashboard1.png' },
//     { title: 'Item 2', description: 'Description for item 2', image: 'Dashboard2.png' },
//     { title: 'Item 3', description: 'Description for item 3', image: 'Dashboard3.png' },
//     { title: 'Item 3', description: 'Description for item 3', image: 'Dashboard3.png' },
//     { title: 'Item 3', description: 'Description for item 3', image: 'Dashboard3.png' },
//     { title: 'Item 3', description: 'Description for item 3', image: 'Dashboard3.png' },
//     { title: 'Item 3', description: 'Description for item 3', image: 'Dashboard3.png' }

//     // Add more items as needed
//   ];
  
//   currentImage = this.items[0].image;

//   @HostListener('window:scroll', [])
//   onWindowScroll() {
//     const scrollPosition = window.pageYOffset;
//     const itemElements = document.querySelectorAll('.scroll-item');

//     itemElements.forEach((element, index) => {
//       const htmlElement = element as HTMLElement;
//       if (htmlElement.offsetTop <= scrollPosition + window.innerHeight / 2 && htmlElement.offsetTop + htmlElement.clientHeight > scrollPosition + window.innerHeight / 2) {
//         this.changeImage(index);
//       }
//     });
//   }

//   changeImage(index: number) {
//     this.currentImage = this.items[index].image;
//   }
// }

// items = [
//   { title: 'Item 1', description: 'Description for item 1', image: 'Dashboard1.png' },
//   { title: 'Item 2', description: 'Description for item 1', image: 'Dashboard2.png' },
//   { title: 'Item 3', description: 'Description for item 1', image: 'Dashboard3.png' },
//   { title: 'Item 4', description: 'Description for item 1', image: 'Dashboard2.png' },
//   { title: 'Item 5', description: 'Description for item 1', image: 'Dashboard3.png' },
//   { title: 'Item 6', description: 'Description for item 1', image: 'Dashboard1.png' },
  // { title: 'Item 1', description: 'Description for item 1', image: 'oly1.avif' },
  // { title: 'Item 2', description: 'Description for item 2', image: 'oly2.avif' },
  // { title: 'Item 3', description: 'Description for item 3', image: 'oly3.avif' },
  // { title: 'Item 4', description: 'Description for item 4', image: 'oly4.webp' },
  // { title: 'Item 5', description: 'Description for item 5', image: 'oly5.webp' },
  // { title: 'Item 5', description: 'Description for item 5', image: 'oly6.webp' },
  // { title: 'Item 6', description: 'Description for item 6', image: 'oly7.webp' },
  // { title: 'Item 7', description: 'Description for item 7', image: 'oly8.webp' },
  // { title: 'Item 8', description: 'Description for item 8', image: 'oly9.webp' },
// ];


import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-view',
  templateUrl: './scroll-view.component.html',
  styleUrls: ['./scroll-view.component.css']
})
export class ScrollViewComponent implements AfterViewInit {
  items = [
    { title: 'Item 1', description: 'Description for item 1', image: '1.png' },
    { title: 'Item 2', description: 'Description for item 2', image: '2.png' },
    { title: 'Item 3', description: 'Description for item 3', image: '3.png' },
    { title: 'Item 4', description: 'Description for item 4', image: 'oly4.webp' },
    { title: 'Item 5', description: 'Description for item 5', image: 'oly5.webp' },
    { title: 'Item 6', description: 'Description for item 6', image: 'oly6.webp' },
    { title: 'Item 7', description: 'Description for item 7', image: 'oly7.webp' },
    { title: 'Item 8', description: 'Description for item 8', image: 'oly8.webp' },
    { title: 'Item 9', description: 'Description for item 9', image: 'oly9.webp' },
    // Add more items as needed
  ];

  currentImage = this.items[0].image;

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  ngAfterViewInit() {
    this.scrollContainer.nativeElement.addEventListener('scroll', () => {
      this.onContainerScroll();
    });
  }

  onContainerScroll() {
    const scrollPosition = this.scrollContainer.nativeElement.scrollTop;
    const itemElements = this.scrollContainer.nativeElement.querySelectorAll('.scroll-item');

    itemElements.forEach((element: HTMLElement, index: number) => {
      if (element.offsetTop <= scrollPosition + window.innerHeight / 0.8 && element.offsetTop + element.clientHeight > scrollPosition + window.innerHeight / 2) {
        this.changeImage(index);
      }
    });
  }

  changeImage(index: number) {
    this.currentImage = this.items[index].image;
  }
}

