import { useState } from "react";
import { useUser } from "../../stores/userStore";
import { axiosClient } from "../../utils/axiosClient";

function Profile() {
  const [data, setData] = useState("");
  const [user] = useUser((state) => [state.user]);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setData(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const up = async () => {
    console.log("executed");
    return await axiosClient
      .post(
        "/user/update/" + user._id,
        { data },
        {
          withCredentials: true,
        }
      )
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input onChange={handleFileInputChange} type="file" />
      <button type="button" className="bg-black" onClick={up}>
        {" "}
        upload
      </button>
    </div>
  );
}

export default Profile;
