import { ref, computed } from "vue";

export default function useSortedPosts(sortedMenus) {
  const searchQuery = ref("");

  const sortedAndSearchedPosts = computed(() => {
    return sortedMenus.value.filter((menu) =>
      menu.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return {
    searchQuery,
    sortedAndSearchedPosts,
  };
}
