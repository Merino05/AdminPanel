import httpService from "./httpServices"

export const getCategories = (id=null) => {
    return httpService(`/admin/categories${id?`?parent=${id}`:``}`,"get");   
}