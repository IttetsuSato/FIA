import { useState, useEffect } from "react";
import "./App.css";

import {
  collection,
  query,
  onSnapshot,
  addDoc,
  QuerySnapshot,
} from "firebase/firestore";
import { db, auth } from "./firebase";
import Add from "./Add";

function App() {
  const [data, setData] = useState([
    {
      id: "",
      title: "",
    },
  ]);
  const [titleValue, setTitleValue] = useState<string>();
  console.log("data: ", data);

  useEffect(() => {
    //2.1 query=コレクション
    const q = query(collection(db, "group")); //データにアクセス

    const unsub = onSnapshot(q, (QuerySnapshot) => {
      setData(
        QuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
        }))
      );
    });
    return () => unsub();
  }, []);

  //4. inputのonChangeのイベントを記述🤗
  const handleInputChange = (e) => {
    // console.log(e, "event");
    // console.log(e.target, "event target");
    setTitleValue(e.target.value);
  };
  //送信の処理を記述＝送信のボタンが押されたら登録の処理を実行する🤗
  const addData = async () => {
    // 処理を記述していきます🤗
    // alert(1); 記述後、送信ボタンを押す→画面に変化があればコメントアウトしましょう🤗

    // firebaseへの登録の処理
    await addDoc(
      collection(db, "group"), //場所どこ？
      {
        title: titleValue,
      }
    );

    // 文字を空にします🤗
    setTitleValue("");
  };
  return (
    <div className="App">
      {data.map((item, index) => (
        <div key={index}>
          <div>{index}</div>
          <div>{item.id}</div>
          <div>{item.title}</div>
        </div>
      ))}

      <hr />
      <Add
        addData={addData}
        titleValue={titleValue}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
