import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { baseUrl, formatDate } from "../../../Auth/Data";

function ResposeCard({ item, isNotification }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (item) => {
    const res = await axios.post(`${baseUrl}/api/v1/leadResponse`, {
      response,
      modalName: item.modalName,
      id: item._id,
    });
    if (res.status === 200) {
      window.location.reload();
    } else {
      alert(res.data);
    }
    setIsPopupOpen(false);
  };

  const divRef = useRef(null);
  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsPopupOpen(false);
      setIsDetailOpen(false);
    }
  };
  const handleEditableSave = () => {
    setIsEditable(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [isEditable, setIsEditable] = useState(false);
  return (
    <div className="container ContainerOfLead">
      <div className="lead-grid">
        <div className="lead-item">
          <span className="lead-label">Name:</span>
          <span className="lead-value">{item?.fullName.toUpperCase()}</span>
        </div>
        <div className="lead-item">
          <span className="lead-label">Mobile:</span>
          <span className="lead-value">{item?.mobileNo}</span>
        </div>
        <div className="lead-item">
          <span className="lead-label">Form Name:</span>

          <span className="lead-value"> {item?.modalName.toUpperCase()} </span>
        </div>
        <div style={{ rowGap: 3 }} className="lead-item">
          {item.reapply ? (
            <button
              className="response-button"
              onClick={() => setIsPopupOpen(true)}
            >
              Response
            </button>
          ) : item.status == "null" && !item.reapply ? (
            <button
              className="response-button"
              onClick={() => setIsPopupOpen(true)}
            >
              Response
            </button>
          ) : item.status != "null" && item.reapply ? (
            <button
              className="response-button"
              onClick={() => setIsPopupOpen(true)}
            ></button>
          ) : (
            <span className="">{item?.status.toUpperCase()}</span>
          )}
          <button
            className="response-button"
            onClick={() => setIsDetailOpen(true)}
          >
            Details
          </button>
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div ref={divRef} className="popup">
            <h2>Response Form</h2>
            <label>
              Status:
              <select
                onChange={(val) => setResponse(val.target.value)}
                name="status"
              >
                <option value="decline">Decline</option>
                <option value="approve">Approve</option>
                <option value="ring">Ring</option>
                <option value="not-reachable">Not reachable</option>
                <option value="v-kyc-done">v-KYC Done</option>
                <option value="v-kyc-pending">v-KYC Pending</option>
                <option value="in-process">In Process</option>
                <option value="not-intrested">Not Intrested</option>
              </select>
            </label>
            <div className="text-center">
              <button onClick={() => handleSubmit(item)} type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {isDetailOpen && (
        <div className="popup-overlay">
          <div ref={divRef} className="popup">
            <h2>
              Lead Details   
            </h2>
            {item?.fullName ? (
              <p>
                Name:
                {!isEditable ? (
                  item?.fullName.toUpperCase()
                ) : (
                  <input type="text" value={item?.fullName} />
                )}
              </p>
            ) : null}
            {item?.mobileNo ? <p>Mobile No: {item?.mobileNo}</p> : null}
            {item?.fatherName ? (
              <p>Father Name: {item?.fatherName.toUpperCase()}</p>
            ) : null}
            {item?.panNo ? <p>Pan No: {item?.panNo.toUpperCase()}</p> : null}
            {item?.dateOfBirth ? (
              <p>Date Of Birth: {item?.dateOfBirth}</p>
            ) : null}
            {item?.status ? (
              <p>Lead Status: {item?.status.toUpperCase()}</p>
            ) : null}
            {item?.emailId ? (
              <p>Email Id: {item?.emailId.toUpperCase()}</p>
            ) : null}
            {item?.residenceAddress ? (
              <p>
                Residence Address Line 1:{" "}
                {item?.residenceAddress?.line1.toUpperCase()}
              </p>
            ) : null}
            {item?.residenceAddress ? (
              <p>
                Residence Address Line 3:{" "}
                {item?.residenceAddress?.line3.toUpperCase()}
              </p>
            ) : null}
            {item?.residenceAddress ? (
              <p>
                Residence Address Lank mark:{" "}
                {item?.residenceAddress?.landmark.toUpperCase()}
              </p>
            ) : null}
            {item?.residenceAddress ? (
              <p>
                Residence Address Pin Code:{" "}
                {item?.residenceAddress?.pincode.toUpperCase()}
              </p>
            ) : null}
            {item?.modalName ? (
              <p>Form Name: {item?.modalName.toUpperCase()}</p>
            ) : null}
            {item?.companyName ? (
              <p>Compony Name: {item?.companyName.toUpperCase()}</p>
            ) : null}
            {item?.designation ? (
              <p>Designation: {item?.designation.toUpperCase()}</p>
            ) : null}
            {item?.createdAt ? (
              <p>Submission Date: {formatDate(item?.createdAt)}</p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResposeCard;
