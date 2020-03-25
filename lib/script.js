"use strict";

var Product = React.createClass({
  displayName: "Product",
  getInitialState: function getInitialState() {
    return {
      qty: 0
    };
  },
  buy: function buy() {
    // alert("You have an Android phone");
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.props.price);
  },
  show: function show() {
    this.props.handleShow(this.props.name);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "What is up?"), /*#__PURE__*/React.createElement("p", null, this.props.name, " - $", this.props.price), /*#__PURE__*/React.createElement("button", {
      onClick: this.buy
    }, "Buy"), "\xA0", /*#__PURE__*/React.createElement("button", {
      onClick: this.show
    }, "Show"), /*#__PURE__*/React.createElement("h3", null, "Qty: ", this.state.qty, " item(s)"), /*#__PURE__*/React.createElement("hr", null));
  }
});
var Total = React.createClass({
  displayName: "Total",
  render: function render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Total cash: $", this.props.total));
  }
});
var ProductForm = React.createClass({
  displayName: "ProductForm",
  submit: function submit(e) {
    e.preventDefault(); // alert("Name" + this.refs.name.value + " - $" + this.refs.price.value);

    var product = {
      name: this.refs.name.value,
      price: parseInt(this.refs.price.value)
    };
    this.props.handleCreate(product);
    this.refs.name.value = '';
    this.refs.price.value = '';
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: this.submit
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Product Name",
      ref: "name"
    }), "\xA0-\xA0", /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Product Price",
      ref: "price"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", null, "Create Product"), /*#__PURE__*/React.createElement("hr", null));
  }
});
var ProductList = React.createClass({
  displayName: "ProductList",
  getInitialState: function getInitialState() {
    return {
      total: 0,
      productList: [{
        name: 'Android',
        price: 121
      }, {
        name: 'iPhone',
        price: 221
      }, {
        name: 'Nokia',
        price: 99
      }]
    };
  },
  createProduct: function createProduct(product) {
    this.setState({
      productList: this.state.productList.concat(product)
    });
  },
  calculateTotal: function calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    }); //  alert(this.state.total);
  },
  showProduct: function showProduct(name) {
    alert('You selected ' + name);
  },
  render: function render() {
    var component = this;
    var products = this.state.productList.map(function (product) {
      return /*#__PURE__*/React.createElement(Product, {
        name: product.name,
        price: product.price,
        handleShow: component.showProduct,
        handleTotal: component.calculateTotal
      });
    });
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ProductForm, {
      handleCreate: this.createProduct
    }), products, /*#__PURE__*/React.createElement(Total, {
      total: this.state.total
    }));
  }
});
React.render( /*#__PURE__*/React.createElement(ProductList, null), document.getElementById('root'));
/*FROM LINE 68: <Product name="Android" price={121} handleShow={this.showProduct}
            handleTotal={this.calculateTotal}/>
            <Product name="iPhone" price={221} handleShow={this.showProduct}
            handleTotal={this.calculateTotal}/>
            <Product name="Nokia" price={99} handleShow={this.showProduct}
            handleTotal={this.calculateTotal}/>*/