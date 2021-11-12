import React from "react";
import { shop_data } from "./shop.data.js";
import PreviewCollection from "../../components/preview-collection/preview-collection.component.jsx";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shop_data,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
