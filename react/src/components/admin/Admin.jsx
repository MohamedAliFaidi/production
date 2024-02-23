import { testAdminRoute } from "../../services/auth.service";
function Admin() {

  return (
    <div>
      <button onClick={testAdminRoute}>admin action</button>
    </div>
  );
}

export default Admin
