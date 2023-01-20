
import Nav from "./components/nav";
const idb =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;
const insertDataInIndexedDb = () => {
  //check for support
  if (!idb) {
    console.log("This browser doesn't support IndexedDB");
    return;
  }
}
   const request = idb.open("test-db", 1);
   request.onerror = function (event) {
    console.error("An error occurred with IndexedDB");
    console.error(event);
  };
   request.onupgradeneeded = function (event) {
    console.log(event);
    const db = request.result;

    if (!db.objectStoreNames.contains("userData")) {
      const objectStore = db.createObjectStore("userData", { keyPath: "id" });

      objectStore.createIndex("age", "age", {
        unique: false,
      });
    }
  };
  // request.onsuccess = function () {
  //   console.log("Database opened successfully");

  //   const db = request.result;

  //   var tx = db.transaction("userData", "readwrite");
  //   var userData = tx.objectStore("userData");

  //   USER_DATA.forEach((item) => userData.add(item));

  //   return tx.complete;
  // };


function App() {
  return (
  <>

     <Nav/>

  </>
  );
}

export default App;
