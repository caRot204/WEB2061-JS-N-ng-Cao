import { getBook } from "../../api/book";
import reRender from "../../helpers/reRender";
import Cart from "../../layout/client/cart";

const detail = {
  render: async (id) => {
    const response = await getBook(id);
    const { data } = response; // const data = response.data;

    return `
        
        <div>ID: ${data.id}</div>
        <div>Tên sách: ${data.name}</div>
        <div>Giá hiện tại: ${data.price}</div>
        <div>Giá sale: ${data.sale_price}</div>
        `;
  },
};

export default detail;
