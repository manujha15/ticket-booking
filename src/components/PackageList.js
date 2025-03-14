import React, { useEffect, useState } from "react";
import axios from "axios";

const PackageList = ({ bookPackage }) => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/packages")
      .then((res) => setPackages(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Available Packages</h2>
      <ul>
        {packages.map((pkg) => (
          <li key={pkg._id}>
            {pkg.destination} - ${pkg.price} - Available: {pkg.availability}
            <button onClick={() => bookPackage(pkg._id)}>Book Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackageList;
