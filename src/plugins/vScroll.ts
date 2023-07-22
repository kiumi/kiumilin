import type { DirectiveBinding, Plugin } from 'vue';


interface Options {
  class: string,
  offsetY?: number,
  restorable?: boolean,
}

const vScrollPlugin: Plugin = {
  install(app) {
    let registers: [HTMLElement, { class: string, offsetY?: number }][] = [];
    const scrollBelow = new CustomEvent("scroll-below");
    const scrollAbove = new CustomEvent("scroll-above");

    window.addEventListener('scroll', () => {
      const windowOutHeight = window.outerHeight

      registers.forEach(row => {
        const [el, config] = row;
        const rect = el.getBoundingClientRect();
        const top = rect.top + (config.offsetY ?? 0)

        el.dispatchEvent(top <= windowOutHeight ? scrollBelow : scrollAbove);
      })
    });

    app.directive('scroll-over', {
      mounted(el: HTMLElement, binding: DirectiveBinding<Options>) {
        el.addEventListener("scroll-below", () => {
          el.classList.add(...binding.value.class.split(" "));
        })

        if (binding.value.restorable === true) {
          el.addEventListener("scroll-above", () => {
            el.classList.remove(...binding.value.class.split(" "));
          })
        }
  
        registers.push([el, binding.value]);
      },
      unmounted(el: HTMLElement) {
        registers = registers.filter(row => row[0] !== el);
      }
    })
  }
}

export default vScrollPlugin;