import axios from "axios";
function Admin() {
  const testAdminRoute = async () => {
    const response = await axios.get("http://localhost:3000/admin/admintest", {
      withCredentials: true,
    });
    console.log(response);
  };

  return (
    <div>
      <button onClick={testAdminRoute}></button>
    </div>
  );
}

export default Admin;
