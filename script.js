class AtroposComponent extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.atropos = new Atropos({
        el: this.querySelector('.atropos'),
        onEnter() {
          console.log('Atropos Component: Enter');
        },
        onLeave() {
          console.log('Atropos Component: Leave');
        },
        onRotate(x, y) {
          console.log('Atropos Component: Rotate', x, y);
        }
      });

      console.log('Atropos Component: Connected!', this);
    }

    disconnectedCallback() {
      this.atropos.destroy();

      console.log('Atropos Component: Disconnected!', this);
    }
  }

  customElements.define('atropos-component', AtroposComponent);