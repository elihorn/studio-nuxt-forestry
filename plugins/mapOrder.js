export default function ({ app }, inject) {
  function mapOrder(a, order, key) {
    order = order.map(function (e) {
      return e.split('/').pop().split('.')[0];
    });
    const map = order.reduce((r, v, i) => ((r[v] = i), r), {});
    return a.sort((a, b) => map[a[key]] - map[b[key]]);
  }
  inject('mapOrder', (a, order, key) => mapOrder(a, order, key));
}
