import React from 'react'
import './shoppage.styles.scss'
import Shop_Data from './shop.data';
 import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class  ShopPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          collections: Shop_Data
        }
           
           
        
    }
    render () {
      const {collections} = this.state
      return (
        <div className = "shop-page">
        {collections.map(({id , ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} ></CollectionPreview>
          ))        }
        </div>
        
      )
    }
}

export default ShopPage;
