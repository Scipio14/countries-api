import { instance } from "./base.api";

const endpoint = "countries";

export const countries = {
  getAll: function ({ page = 1 }: { page?: number }) {
    return instance.get(endpoint, { params: { page } });
  },
  getById: function ({ id }: { id: string | undefined }) {
    return instance.get(`${endpoint}/${id}`);
  },
};
