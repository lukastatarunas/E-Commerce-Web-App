import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import CollectionPage from './collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { selectAreCollectionsLoaded } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectAreCollectionsLoaded(state),
});

const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage);

export default CollectionPageContainer;
