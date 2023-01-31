import { getBooks, deleteBook } from "../../api/book";
import reRender from "../../helpers/reRender";

const Book = {
  render: async () => {
    const response = await getBooks();
    const { data } = response;
    return `
  <table class="table table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Giá gốc</th>
        <th>Giá sale</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    ${data.map((book) => (`
      <tr>
        <td> ${book.id}</td>
        <td>${book.name}</td>
        <td>${book.price}</td>
        <td>${book.sale_price}</td>
        
        <td style="width: 250px">
          <a href="/admin/detail/${book.id}">
            <button class="btn btn-info">Detail</button>
          </a>

          <button
          class='btn btn-danger'
          data-id="${book.id}"
          data-name="${book.name}"
      >DELETE</button>

          <a href="/admin/edit/${book.id}">
            <button class="btn btn-warning">Edit</button>
          </a>
        </td>
      </tr>`
    )).join('')
      }
    </tbody>
  </table>

    `;
  },
  afterRender: () => {
    // Đây là nơi thực thi nghiệp vụ định nghĩa sự kiện xoá
    // 1. Tìm toàn bộ nút xoá và thêm sự kiện click cho nó
    const deleteBtns = document.querySelectorAll('.btn-danger');
    deleteBtns.forEach((btn) => {
      // addEventListener('tên sự kiện', khi sự kiện kích hoạt sẽ thực thi hàm)
      btn.addEventListener('click', async () => {
        // Tìm xem chúng ta muốn xoá thằng nào
        // const data = btn.dataset; // {id: '', name: ''} với id ~ data-id, name ~ data-name
        const btnId = btn.dataset.id;
        // Thực hiện xoá
        await deleteBook(btnId);
        // window.location.reload();
        await reRender('#content', Book);
      });
    }


    );
  }
};

export default Book;
