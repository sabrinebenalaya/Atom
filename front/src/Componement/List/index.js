import React, { useEffect } from "react";
import CustomCard from "./card";
import { useUser } from "./../../Hooks/useUser";
import { styleList } from "../../Style/style";
function Listindex() {
  const { users } = useUser();

  return (
    <div style={styleList}>
      {users.map((user) => (
        <CustomCard key={user._id} user={user} />
      ))}
    </div>
  );
}

export default Listindex;
