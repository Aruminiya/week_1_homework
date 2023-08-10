import { useState } from "react";

import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      item: "珍珠奶茶",
      descript: "香濃奶茶搭配QQ珍珠",
      price: 50,
      stock: 20,
      editMode: false,
    },
    {
      id: 2,
      item: "冬瓜檸檬",
      descript: "清新冬瓜配上新鮮檸檬",
      price: 45,
      stock: 15,
      editMode: false,
    },
    {
      id: 3,
      item: "翡翠檸檬",
      descript: "綠茶與檸檬的完美結合",
      price: 55,
      stock: 30,
      editMode: false,
    },
    {
      id: 4,
      item: "四季春茶",
      descript: "香醇四季春茶，回甘無比",
      price: 45,
      stock: 10,
      editMode: false,
    },
    {
      id: 5,
      item: "阿薩姆奶茶",
      descript: "阿薩姆紅茶搭配香醇鮮奶",
      price: 50,
      stock: 25,
      editMode: false,
    },
    {
      id: 6,
      item: "檸檬冰茶",
      descript: "檸檬與冰茶的清新組合",
      price: 45,
      stock: 20,
      editMode: false,
    },
    {
      id: 7,
      item: "芒果綠茶",
      descript: "芒果與綠茶的獨特風味",
      price: 55,
      stock: 18,
      editMode: false,
    },
    {
      id: 8,
      item: "抹茶拿鐵",
      descript: "抹茶與鮮奶的絕配",
      price: 60,
      stock: 20,
      editMode: false,
    },
  ]);

  function stockAdd(productStock, amount) {
    const updatedProducts = products.map((p) => {
      if (p.id === productStock.id) {
        const newStock = Math.max(p.stock + amount, 0);
        return { ...p, stock: newStock };
      }
      return p;
    });
    setProducts(updatedProducts);
  }

  function changeMode(newP) {
    const updatedMode = products.map((p) => {
      if (p.id === newP.id) {
        const newMode = (p.editMode = !p.editMode);
        return { ...p, editMode: newMode };
      }
      return p;
    });
    setProducts(updatedMode);
  }

  function changeName(newP, e) {
    const updatedName = products.map((p) => {
      if (p.id === newP.id) {
        p.item = e.target.value;
      }
      return p;
    });
    setProducts(updatedName);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">編輯</th>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
          </tr>
        </thead>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <button className="edit" onClick={() => changeMode(product)}>
                {product.editMode === false ? "修改品項" : "完成"}
              </button>
            </td>
            {product.editMode === true ? (
              <td>
                <input
                  onChange={(e) => changeName(product, e)}
                  placeholder={product.item}
                ></input>
              </td>
            ) : (
              <td className="item">{product.item}</td>
            )}

            <td>
              <small>{product.descript}</small>
            </td>
            <td>{product.price}</td>
            <td>
              <button className="num" onClick={() => stockAdd(product, -1)}>
                -
              </button>
              {product.stock}
              <button className="num" onClick={() => stockAdd(product, 1)}>
                +
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
