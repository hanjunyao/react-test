/*
 * @Autor: hanjy
 * @Date: 2021-05-03 17:03:20
 * @LastEditors: hanjy
 * @LastEditTime: 2021-05-03 17:04:55
 * @Description: 
 * @FilePath: /reacttest1/src/components/BoilingVerdict.js
 */
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

export default BoilingVerdict;