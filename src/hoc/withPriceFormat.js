
export default function withPriceFormat(WrapCoponent, product) {
  // let {real_price} = product;

  product.real_price_text = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.real_price)

  return <WrapCoponent {...product} />
}
