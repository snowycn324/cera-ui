import { shallowMount } from '@vue/test-utils';
import CeraTeleport from './lib/CeraTeleport';
import { vi } from "vitest";

describe('CeraTeleport', () => {
  let wrapper

  afterEach(() => {
    if (wrapper) {
      wrapper.destroy()
    }
  })

  it('render slot to body', () => {
    wrapper = shallowMount(CeraTeleport, {
      propsData: {
        to: "body",
        disabled: false
      },
      slots: {
        default: '<p>I want to add it to body</p>'
      }
    });
    expect(document.body.innerHTML).toMatch('<p>I want to add it to body</p>')
  });

  it('computed classes should be correct when prop disabled is updated', async () => {
    wrapper = shallowMount(CeraTeleport, {
      propsData: {
        to: "body",
        disabled: false
      },
      slots: {
        default: '<p>I want to add it to body</p>'
      }
    });
    await wrapper.setProps({
      disabled: true
    })
    expect(CeraTeleport.computed.classes.call({
      disabled: true
    })).toEqual(["cera-teleporter"])
    await wrapper.setProps({
      disabled: false
    })
    expect(CeraTeleport.computed.classes.call({
      disabled: false
    })).toEqual(['cera-teleporter', 'hidden'])
  });

  it('attach to an invalid target', () => {
    wrapper = shallowMount(CeraTeleport, {
      propsData: {
        to: "#invalidTarget",
        disabled: false
      },
      slots: {
        default: '<p>I want to add it to body</p>'
      }
    });
    expect(document.body.innerHTML).not.toMatch('<p>I want to add it to body</p>')
  });

  it('bootObserver can only be executed once', () => {
    wrapper = shallowMount(CeraTeleport, {
      propsData: {
        to: "body",
        disabled: false
      },
      data() {
        return{
          observer: new MutationObserver(() => null)
        };
      },
      slots: {
        default: '<p>second wrapper</p>'
      }
    });
    const bootObserverSpy = vi.spyOn(wrapper.vm, 'bootObserver')
    wrapper.vm.checkObserver()
    expect(bootObserverSpy).toHaveBeenCalledTimes(0)
  })

  it('attach teleport to any other target except body', () => {
    const root = document.createElement('div');
    root.setAttribute("id", "root");
    document.body.appendChild(root);
    const wrapper = shallowMount(CeraTeleport, {
      propsData: {
        to: "#root",
        disabled: false
      },
      slots: {
        default: '<p>I want to add it to root</p>'
      }
    });
    expect(document.querySelector("#root").innerHTML).toMatch('<p>I want to add it to root</p>')
    document.body.removeChild(root);
  })

  it('destroy and teardown', async () => {
    wrapper = shallowMount(CeraTeleport, {
      propsData: {
        to: "body",
        disabled: false
      },
      slots: {
        default: '<p>I want to add it to body</p>'
      }
    });
    expect(document.body.innerHTML).toMatch('<p>I want to add it to body</p>')
    await wrapper.destroy();
    expect(document.body.innerHTML).not.toMatch('<p>I want to add it to body</p>')
  });
});