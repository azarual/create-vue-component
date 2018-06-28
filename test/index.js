const { Vue, createVueComponent } = window;

describe('create-vue-component', () => {
  describe('content', () => {
    it('should be undefined by default', () => {
      const vm = new Vue(createVueComponent()).$mount();

      expect(vm.$el.textContent).to.equal('undefined');
    });

    it('should support HTML as value', () => {
      const content = '<strong>Hello, World!</strong>';
      const vm = new Vue(createVueComponent(content)).$mount();

      expect(vm.$el.innerHTML).to.equal(content);
    });

    it('should support string as value', () => {
      const content = 'Hello, World!';
      const vm = new Vue(createVueComponent(content)).$mount();

      expect(vm.$el.textContent).to.equal(content);
    });

    it('should support number as value', () => {
      const content = 1;
      const vm = new Vue(createVueComponent(content)).$mount();

      expect(vm.$el.textContent).to.equal(String(content));
    });

    it('should support boolean as value', () => {
      const content = true;
      const vm = new Vue(createVueComponent(content)).$mount();

      expect(vm.$el.textContent).to.equal(String(content));
    });

    it('should support array as value', () => {
      const content = ['Hello', 'World'];
      const vm = new Vue(createVueComponent(content)).$mount();

      expect(vm.$el.textContent).to.equal(String(content));
    });

    it('should support function as value', () => {
      const content = (createElement, data, context) => {
        expect(context).to.be.an.instanceOf(Vue);
        return createElement('p', `Hello, ${data.name}!`);
      };
      const vm = new Vue(createVueComponent(content, {
        data: {
          name: 'World',
        },
      })).$mount();

      expect(vm.$el.textContent).to.equal('Hello, World!');
    });

    describe('should support object as value', () => {
      it('a valid Vue component', () => {
        const content = {
          template: '<p>Hello, World!</p>',
        };
        const vm = new Vue(createVueComponent(content)).$mount();

        expect(vm.$el.textContent).to.equal('Hello, World!');
      });

      it('not a valid Vue component', () => {
        const content = {};
        const vm = new Vue(createVueComponent(content)).$mount();

        expect(vm.$el.textContent).to.equal(String(content));
      });
    });
  });

  describe('options', () => {
    describe('tag', () => {
      it('should be span by default', () => {
        const content = 'Hello, World!';
        const vm = new Vue(createVueComponent(content)).$mount();

        expect(vm.$el.tagName.toLowerCase()).to.equal('span');
      });

      it('should apply the given tag', () => {
        const content = 'Hello, World!';
        const vm = new Vue(createVueComponent(content, {
          tag: 'p',
        })).$mount();

        expect(vm.$el.tagName.toLowerCase()).to.equal('p');
      });
    });

    describe('data', () => {
      it('should be undefined by default', () => {
        const content = (createElement, data) => createElement('p', `${data}`);
        const vm = new Vue(createVueComponent(content)).$mount();

        expect(vm.$el.textContent).to.equal('undefined');
      });

      it('should apply the given data', () => {
        const content = (createElement, data) => createElement('p', `Hello, ${data.name}!`);
        const vm = new Vue(createVueComponent(content, {
          data: {
            name: 'World',
          },
        })).$mount();

        expect(vm.$el.textContent).to.equal('Hello, World!');
      });
    });
  });
});
