import { createBook, getBook, updateBook } from "../../api/book";
import router from "../../helpers/router";

const BookAdd = {
  render: async (id) => {
    let book = {
      name: '',
      price: '',
      sale_price: '',
    };

    if (id) {
      const response = await getBook(id);
      book = response.data;
    }

    return `

        <div>
        <form>
            <div class='form-group'>
                <label>Tên sách</label>
                <input
                    value="${book.name}"
                    class='form-control'
                    id='name'
                />
            </div>
            <div class='form-group'>
                <label>Giá</label>
                <input
                    value="${book.price}"
                    class='form-control'
                    id='msv'
                />
            </div>
            <div class='form-group'>
                <label>Giá sale</label>
                <input
                    value="${book.sale_price}"
                    class='form-control'
                    id='avatar'
                />
            </div>
            <div class='form-group'>
                <button type='button' class='btn btn-success' id='btn'>
                    ${id ? 'Cập nhật' : 'Tạo mới'}
                </button>
            </div>
        </form>
    </div>
    
    
    
          
        `
  },
  afterRender: (id) => {
    // console.log('afterRender', id);
    const submitBtn = document.querySelector('#btn');
    submitBtn.addEventListener('click', async () => {
      const name = document.querySelector('#name').value;
      const msv = document.querySelector('#msv').value;
      const avatar = document.querySelector('#avatar').value;

      const submitData = {
        name: name,
        msv: msv,
        avatar: avatar,
      };

      if (id) {
        await updateBook(id, submitData);
      } else {
        await createBook(submitData);
      }

      router.navigate('/admin');
    });
  }
};

export default BookAdd;
