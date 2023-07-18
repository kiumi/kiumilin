import type { Plugin } from 'vue';


const vScrollPlugin: Plugin = {
  install(app) {
    let registers: [HTMLElement, { class: string, offsetY?: number }][] = [];
    const scrollBelow = new CustomEvent("scroll-below");
    const scrollAbove = new CustomEvent("scroll-above");

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY
      
      registers.forEach(row => {
        const [el, config] = row;
        const top = el.scrollTop + (config.offsetY ?? 0)

        el.dispatchEvent(top <= scrollY ? scrollBelow : scrollAbove);
      })
    });

    app.directive('scroll-over', {
      mounted(el: HTMLElement, binding) {
        el.addEventListener("scroll-below", () => {
          el.classList.add(binding.value.class);
        })

        el.addEventListener("scroll-above", () => {
          el.classList.remove(binding.value.class);
        })
  
        registers.push([el, binding.value]);
      },
      unmounted(el) {
        registers = registers.filter(row => row !== el);
      }
    })
  }
}

export default vScrollPlugin;