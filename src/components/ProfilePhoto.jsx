import { useEffect } from "react";
import React from "react";
import "../styles/ProfilePhoto.css";

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

function ProfilePhoto({ photoFile }) {
  const [base64File, setBase64File] = React.useState("");

  useEffect(() => {
    async function convert() {
      if (photoFile) {
        const img = await toBase64(photoFile);
        console.log(img);
        setBase64File(img);
      }
    }
    convert();
  }, [photoFile]);

  return (
    <div className="profile-photo">
      {base64File ? <img src={base64File} /> : null}
    </div>
  );
}

export default ProfilePhoto;
