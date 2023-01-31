import { getBooks, deleteBook } from "../../api/book";
import reRender from "../../helpers/reRender";
import Cart from "../../layout/client/cart";

const Home = {
  render: async () => {
    const response = await getBooks();
    const { data } = response;
    return `
          <div class="container">
          <div class="row">
          <a href="/cart"><div id='cart'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
        </svg>${Cart.render()}</div></a>
          
          ${data.map(
      (book) => `         
      <section style="background-color: #eee;">
        <div class="container py-5">
          <div class="row justify-content-center mb-3">
            <div class="col-md-12 col-xl-10">
              <div class="card shadow-0 border rounded-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div class="bg-image hover-zoom ripple rounded ripple-surface">
                        <img src="####"
                          class="w-100" />
                        <a href="#!">
                          <div class="hover-overlay">
                            <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-6">
                    <p class="card-text" font-bold>${book.name}</p>
                      <div class="d-flex flex-row">
                        <div class="text-danger mb-1 me-2">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <span>310</span>
                      </div>
                      <div class="mt-1 mb-0 text-muted small">
                        <span>100% cotton</span>
                        <span class="text-primary"> • </span>
                        <span>Light weight</span>
                        <span class="text-primary"> • </span>
                        <span>Best finish<br /></span>
                      </div>
                      <div class="mb-2 text-muted small">
                        <span>Unique design</span>
                        <span class="text-primary"> • </span>
                        <span>For men</span>
                        <span class="text-primary"> • </span>
                        <span>Casual<br /></span>
                      </div>
                      <p class="text-truncate mb-4 mb-md-0">
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable.
                      </p>
                    </div>
                    <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div class="d-flex flex-row align-items-center mb-1">
                        <h4 class="mb-1 me-1">${book.price}</h4>
                        <span class="text-danger"><s>${book.sale_price}</s></span>
                      </div>
                      <h6 class="text-success">Free shipping</h6>
                      <div class="d-flex flex-column mt-4">
                        <a href="/products/detail/${book.id}"><button class="btn btn-primary btn-sm" type="button">Details</button></a>
                        <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mb-3">
            <div class="col-md-12 col-xl-10">
              <div class="card shadow-0 border rounded-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div class="bg-image hover-zoom ripple rounded ripple-surface">
                        <img src="####"
                          class="w-100" />
                        <a href="#!">
                          <div class="hover-overlay">
                            <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-6">
                      <h5 class="card-text">${book.name}</h5>
                      <div class="d-flex flex-row"><
                        <div class="text-danger mb-1 me-2">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <span>289</span>
                      </div>
                      <div class="mt-1 mb-0 text-muted small">
                        <span>100% cotton</span>
                        <span class="text-primary"> • </span>
                        <span>Light weight</span>
                        <span class="text-primary"> • </span>
                        <span>Best finish<br /></span>
                      </div>
                      <div class="mb-2 text-muted small">
                        <span>Unique design</span>
                        <span class="text-primary"> • </span>
                        <span>For men</span>
                        <span class="text-primary"> • </span>
                        <span>Casual<br /></span>
                      </div>
                      <p class="text-truncate mb-4 mb-md-0">
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable.
                      </p>
                    </div>
                    <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div class="d-flex flex-row align-items-center mb-1">
                        <h4 class="mb-1 me-1">${book.price}</h4>
                        <span class="text-danger"><s>${book.sale_price}</s></span>
                      </div>
                      <h6 class="text-success">Free shipping</h6>
                      <div class="d-flex flex-column mt-4">
                        <a href="/products/detail/${book.id}"><button class="btn btn-primary btn-sm" type="button">Details</button></a>
                        <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-12 col-xl-10">
              <div class="card shadow-0 border rounded-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div class="bg-image hover-zoom ripple rounded ripple-surface">
                        <img src="####"
                          class="w-100" />
                        <a href="#!">
                          <div class="hover-overlay">
                            <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-6">
                      <h5 class="card-text">${book.name}</h5>
                      <div class="d-flex flex-row">
                        <div class="text-danger mb-1 me-2">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <span>145</span>
                      </div>
                      <div class="mt-1 mb-0 text-muted small">
                        <span>100% cotton</span>
                        <span class="text-primary"> • </span>
                        <span>Light weight</span>
                        <span class="text-primary"> • </span>
                        <span>Best finish<br /></span>
                      </div>
                      <div class="mb-2 text-muted small">
                        <span>Unique design</span>
                        <span class="text-primary"> • </span>
                        <span>For women</span>
                        <span class="text-primary"> • </span>
                        <span>Casual<br /></span>
                      </div>
                      <p class="text-truncate mb-4 mb-md-0">
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable.
                      </p>
                    </div>
                    <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div class="d-flex flex-row align-items-center mb-1">
                        <h4 class="old-price mb-1 me-1">${book.price}</h4>
                        <span class="text-danger"><s>${book.sale_price}</s></span>
                      </div>
                      <h6 class="text-success">Free shipping</h6>
                      <div class="d-flex flex-column mt-4">
                        <a href="/products/detail/${book.id}"><button class="btn btn-primary btn-sm" type="button">Details</button></a>
                        <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                            Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>      
           `
    ).join('')}
          </div>
        </div>
    </div>
    `;
  },
};

export default Home;
