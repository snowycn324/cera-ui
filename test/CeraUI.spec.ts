import { afterAll, beforeAll, beforeEach } from "vitest";
import CeraUI, { CeraTeleport, CeraModal, CeraLoading } from "./lib";
import { createLocalVue, shallowMount } from "@vue/test-utils";

describe('CeraUI', () => {
  let wrapper;
  const MyComponent = {
    template: `<div>Hello</div>`
  };

  afterEach(() => {
    wrapper.destroy();
  })

  it("install CeraUI", () => {
    const localVue = createLocalVue();
    localVue.use(CeraUI);
    wrapper = shallowMount(MyComponent, {
      localVue
    });
    expect(Object.keys(localVue.options.components)).toContain("CeraTeleport");
    expect(Object.keys(localVue.options.components)).toContain("CeraModal");
  });

  it("install CeraTeleport", () => {
    const localVue = createLocalVue();
    localVue.use(CeraTeleport);
    wrapper = shallowMount(MyComponent, {
      localVue
    });
    expect(Object.keys(localVue.options.components)).toContain("CeraTeleport");
    expect(Object.keys(localVue.options.components)).not.toContain("CeraModal");
  });

  it("install CeraModal", () => {
    const localVue = createLocalVue();
    localVue.use(CeraModal);
    wrapper = shallowMount(MyComponent, {
      localVue
    });
    expect(Object.keys(localVue.options.components)).toContain("CeraModal");
    expect(Object.keys(localVue.options.components)).not.toContain("CeraTeleport");
  });

  it("install CeraLoading", () => {
    const localVue = createLocalVue();
    localVue.use(CeraLoading);
    wrapper = shallowMount(MyComponent, {
      localVue
    });
    expect(Object.keys(localVue.options.components)).toContain("CeraLoading");
    expect(Object.keys(localVue.options.components)).not.toContain("CeraTeleport");
  });
});