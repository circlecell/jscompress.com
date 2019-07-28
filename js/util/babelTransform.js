export default async function babelTransform(code) {
  return (await import(
    /* webpackChunkName: "babelTransform" */
    /* webpackMode: "lazy" */
    /* webpackPrefetch: true */
    './babelTransformChunk'
  )).default(code);
}
