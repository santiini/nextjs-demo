/** @format */
import fetch from 'isomorphic-unfetch';
interface ProductProps {
  starts: string | number;
}
const Product = (props: ProductProps) => {
  return <div>Next stars: {props.starts}</div>;
};

/**
  getInitialProps入参对象的属性如下：
    pathname - URL 的 path 部分
    query - URL 的 query 部分，并被解析成对象
    asPath - 显示在浏览器中的实际路径（包含查询部分），为String类型
    req - HTTP 请求对象 (只有服务器端有)
    res - HTTP 返回对象 (只有服务器端有)
    jsonPageRes - 获取数据响应对象 (只有客户端有)
    err - 渲染过程中的任何错误
 */
Product.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json();
  return {
    starts: json.stargazers_count,
  };
};

export default Product;
