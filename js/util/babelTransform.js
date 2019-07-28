export default async function babelTransform(code) {
  return (await import(
    /* webpackChunkName: "babelTransform" */
    /* webpackPreload: true */
    './babelTransformChunk'
  )).default(code);
}
