<template>
  <main>
    <div class="container-fluid">
      <h1 class="mt-4">Products</h1>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active">Products</li>
      </ol>
      <div class="card mb-4">
        <div class="card-header">
          <div class="d-inline-block">
            <i class="fas fa-table mr-1"></i>
            Product List
          </div>
          <button class="btn btn-primary float-right" v-on:click="showAddProductModal">Add New Product</button>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Images</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th class="text-center">Modify</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product, index) in products" v-bind:key="index">
                  <td>{{ ++index }}</td>
                  <td>
                    <img class="product-image" v-bind:src="product.images[0]" alt="">
                  </td>
                  <td>{{ product.name }}</td>
                  <td>{{ formatPrice(product.price) }}</td>
                  <td class="text-center">
                    <a class="btn btn-warning mr-2" href="#" v-on:click.prevent="showEditProductModal(product)">Edit</a>
                    <a class="btn btn-danger" href="#" v-on:click.prevent="showDeleteProductModal(product)">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="productModalLabel">Add New Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-8">
                <div class="form-group">
                  <input type="text" class="form-control" id="productName" placeholder="Product name" v-model="product.name">
                </div>
                <div class="form-group">
                  <vue-editor v-model="product.description"></vue-editor>
                </div>
              </div>
              <div class="col-md-4">
                <h5>Product Details</h5>
                <hr>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Product price" v-model="product.price">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Product tags" v-model="tag" v-on:keyup.188="addTag">
                  <div class="d-flex">
                    <p v-for="(tag, index) in product.tags" v-bind:key="index">
                      <span class="mr-1">{{ tag }}</span>
                    </p>
                  </div>
                </div>
                <div class="form-group">
                  <label for="productImage">Product Images</label>
                  <input type="file" class="form-control" id="productImage" v-on:change="uploadImage">
                </div>
                <div class="form-group d-flex">
                  <div class="mr-1" v-for="(image, index) in product.images" v-bind:key="index">
                    <div class="img-wrap">
                      <img v-bind:src="image" width="80px">
                      <span class="delete-image" v-on:click="deleteImage(image, index)">x</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" v-on:click="addProduct" v-if="modal === 'add'">Add Product</button>
            <button type="button" class="btn btn-primary" v-on:click="editProduct" v-if="modal === 'edit'">Apply Changes</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Product Modal -->
    <div class="modal fade" id="deleteProductModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Delete Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Are you sure? You won't be able to revert this!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger" v-on:click="deleteProduct">Delete Product</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Notification -->
    <div aria-live="polite" aria-atomic="true">
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" style="position: fixed; bottom: 20px; right: 20px;" data-delay="4000">
        <div class="toast-header">
          <strong class="mr-auto text-success">{{ toast.header }}</strong>
          <!-- <small>11 mins ago</small> -->
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          {{ toast.body }}
        </div>
      </div>
    </div>
    <!-- / Notification -->
  </main>
</template>

<script>
import { fb, db } from '@/firebase.js';
import { VueEditor } from 'vue2-editor';

export default {
  name: 'Products',
  components: {
    'vue-editor': VueEditor,
  },
  data() {
    return {
      products: [],
      product: {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: []
      },
      selectedProduct: null,
      modal: null,
      toast: {
        header: null,
        body: null
      },
      tag: null,
    }
  },
  firestore() {
    return {
      products: db.collection('products'),
    }
  },
  methods: {
    deleteImage(img, index = null) {
      let image = fb.storage().refFromURL(img);

      if (index) {
        this.product.images.splice(index, 1);
      }
      image.delete().then(() => {
        console.log('image deleted');
      }).catch((error) => {
        console.log('gagal menghapus image');
      });
    },
    uploadImage(e) {
      // setiap ada file yang diupload maka simpan ke firebase storage
      if (e.target.files[0]) {
        let file = e.target.files[0];
        let storageRef = fb.storage().ref(`products/${Math.random()}_${file.name}`);
        let uploadTask = storageRef.put(file);

        uploadTask.on('state_changed', (snapshot) => {
          // handle uploading an image
        }, (error) => {
          // handle unsuccessful uploads
        }, () => {
          // handle successful uploads
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log(`File available at ${downloadURL}`);
            this.product.images.push(downloadURL);
          });
        });
      }
    },
    addTag() {
      this.product.tags.push(this.tag);
      this.tag = null;
    },
    showAddProductModal() {
      this.resetProductData();
      this.modal = 'add';
      $('#productModal').modal('show');
    },
    showEditProductModal(product) {
      this.modal = 'edit';
      $('#productModal').modal('show');
      this.product = product;
      this.selectedProduct = product.id;
    },
    showDeleteProductModal(product) {
      this.selectedProduct = product;
      $('#deleteProductModal').modal('show');
    },
    addProduct() {
      this.$firestore.products.add(this.product);
      $('#productModal').modal('hide');
      this.setNotification(
        'Success!', 
        `Your product ${this.product.name} has been added!`
      );
      this.resetProductData();
    },
    editProduct() {
      this.$firestore.products.doc(this.selectedProduct).update(this.product);
      $('#productModal').modal('hide');
      this.setNotification(
        'Success!', 
        'Your product has been edited!'
      );
      this.resetProductData();
    },
    deleteProduct() {
      this.$firestore.products.doc(this.selectedProduct.id).delete();
      $('#deleteProductModal').modal('hide');
      this.setNotification(
        'Success!', 
        `Your product ${this.selectedProduct.name} has been deleted!`
      );
      this.selectedProduct = null;
    },
    resetProductData() {
      this.product = {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: []
      };
    },
    setNotification(header, body) {
      this.toast.header = header;
      this.toast.body = body;
      $('.toast').toast('show');
    },
    formatPrice(price) {
      let formatter = new Intl.NumberFormat('id', {
        style: 'currency',
        currency: 'IDR'
      });
      return formatter.format(price);
    }
  }
}
</script>

<style scoped lang="scss">
.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  object-position: top;
}

.img-wrap {
  position: relative;
}
.img-wrap span.delete-image {
  position: absolute;
  top: -14px;
  left: -2px;
}
.img-wrap span.delete-image:hover {
  cursor: pointer;
}
</style>
