const button: HTMLElement | null = document.querySelector('#theButton')!;
const paragraph: HTMLElement | null = document.querySelector('#theParagraph')!;
const mainTitle: HTMLElement | null = document.querySelector('#theMainTitle')!;

if (button && paragraph && mainTitle) {
  button?.addEventListener('click', () =>{
    mainTitle.style.color = 'yellow';
    paragraph.style.color = 'yellow';
  })
}
