import { ref, computed } from "vue";

export default function useSortedMenu(menus) {
  const selectedSort = ref("");
  const sortedMenus = computed(() => {
    return [...menus.value].sort((menu1, menu2) =>
      menu1[selectedSort.value]?.localeCompare(menu2[selectedSort.value])
    );
  });

  return {
    selectedSort,
    sortedMenus,
  };
}
