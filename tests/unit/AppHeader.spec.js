import AppHeader from '@/components/AppHeader.vue';
import { mount } from '@vue/test-utils';

describe('AppHeader', () => {
  it('로그인 상태가 아니면 로그아웃 버튼이 보이지 않는다.', () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find('button').isVisible()).toBe(false);
  });

  test('로그인 상태면 로그아웃 버튼이 보인다.', async () => {
    const wrapper = mount(AppHeader);
    wrapper.setData({
      loggedIn: true,
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('button').isVisible()).toBe(true);
  });
});
