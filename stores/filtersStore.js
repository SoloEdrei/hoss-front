export const useFiltersStore = defineStore('form', {
    state: () => ({
        updatable: false,
        filters: {}
    }),
    actions: {
        updateFormData(data) {
            this.updatable = data;
        },
        updateFilters(data) {
            this.filters = data;
        },
    },
});