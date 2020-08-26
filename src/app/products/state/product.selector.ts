import { createSelector } from '@ngrx/store';


export const selectFeature = (state: any) => state;
 
export const selectFeatureCount = createSelector(
  selectFeature,
  (state: any) => state.products.idCounter
);

export const selectProductList = createSelector(
    selectFeature,
    (state: any) => sortProducts(state.products.productList)
)

const sortProducts = (state) => {
  if (state.length > 1) {
    const sortedProduct = state.slice().sort(function (a, b) {
     let dateFormata = convertDate(a.deliveryDate)
      let dateFormatb = convertDate(b.deliveryDate)

      let aa =  dateFormata.split('/').reverse().join()
      let bb =  dateFormatb.split('/').reverse().join()
      return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });
    return sortedProduct
  }
  return state
}

const convertDate=(inputFormat)=> {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat)
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}