/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Card, Grid } from "@mui/material";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import TransctionModal from "./TransctionModal";
import HeaderWrapper from "./BackgroundUI";
import { _transction } from "../../CONTRACT-ABI/connect";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
// import { uploadFileToAws } from "../../utils/uploadFileToAws";
import { createAnduploadFileToIpfs } from "../../utils/uploadFileToIpfs";
import ListAllFeedback from "./ListAllFeedback";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const VendorSchema = Yup.object().shape({
  authorName: Yup.string().required("Authorname is required"),
});

const Feedback = ({ nftData, tokenId }) => {
  const [start, setStart] = useState(false);
  const [response, setResponse] = useState(null);
  const [file, setFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [checked, setChecked] = useState(false);
  const [description, setDescription] = useState(null);

  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  let history = useNavigate();

  const saveData = async ({ authorName, email, contact }) => {
    setStart(true);
    const feedback = {
      authorName,
      email,
      contact,
      description,
      value,
      date: new Date().valueOf(),
    };
    if (nftData?.feedback) {
      nftData.feedback.push(feedback);
    } else {
      nftData.feedback = [feedback];
    }
    const resultsSaveMetaData = await createAnduploadFileToIpfs(nftData);
    console.log("---resultsSaveMetaData-->", resultsSaveMetaData);
    const responseData = await _transction(
      "updateNftUri",
      Number(tokenId),
      resultsSaveMetaData
    );
    setResponse(responseData);
  };

  const modalClose = () => {
    // setStart(false);
    // setResponse(null);
    window.location.reload();
  };
  return (
    <>
      {start && <TransctionModal response={response} modalClose={modalClose} />}
      <HeaderWrapper>
        <div className="form-layer2">
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div style={{ margin: 20 }}>
                {nftData?.feedback?.map((data) => (
                  <div style={{ marginTop: 20 }}>
                    <ListAllFeedback data={data} />
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div style={{ margin: 20 }}>
                <Card
                  style={{
                    background: "#ffffff9e",
                  }}
                >
                  <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <div
                        style={{
                          padding: "20px",
                        }}
                      >
                        <h4>Feedback</h4>
                        <Formik
                          initialValues={{
                            authorName: "",
                            email: "",
                            contact: "",
                          }}
                          validationSchema={VendorSchema}
                          onSubmit={(values, { setSubmitting }) => {
                            console.log("values=======>", values);
                            saveData(values);
                            setSubmitting(false);
                          }}
                        >
                          {({ touched, errors, isSubmitting, values }) => (
                            <Form>
                              <Grid container>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                  <Box
                                    sx={{
                                      width: 200,
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Rating
                                      name="hover-feedback"
                                      value={value}
                                      precision={1}
                                      getLabelText={getLabelText}
                                      onChange={(event, newValue) => {
                                        setValue(newValue);
                                      }}
                                      onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                      }}
                                      emptyIcon={
                                        <StarIcon
                                          style={{ opacity: 0.55 }}
                                          fontSize="inherit"
                                        />
                                      }
                                    />
                                    {value !== null && (
                                      <Box sx={{ ml: 2 }}>
                                        {labels[hover !== -1 ? hover : value]}
                                      </Box>
                                    )}
                                  </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                  <div
                                    className="form-group"
                                    style={{ marginLeft: 10, marginTop: 10 }}
                                  >
                                    <label for="title" className="my-2">
                                      Name{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                      type="text"
                                      name="authorName"
                                      autoComplete="flase"
                                      placeholder="Enter name"
                                      className={`form-control text-muted ${
                                        touched.authorName && errors.authorName
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      style={{ marginRight: 10, padding: 9 }}
                                    />
                                  </div>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                  <div
                                    className="form-group"
                                    style={{ marginLeft: 10, marginTop: 10 }}
                                  >
                                    <label for="email" className="my-2">
                                      Email{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                      type="email"
                                      name="email"
                                      autoComplete="flase"
                                      placeholder="Enter Email"
                                      className={`form-control text-muted ${
                                        touched.email && errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      style={{ marginRight: 10, padding: 9 }}
                                    />
                                  </div>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                  <div
                                    className="form-group"
                                    style={{ marginLeft: 10, marginTop: 10 }}
                                  >
                                    <label for="contact" className="my-2">
                                      Contact no.{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                      type="number"
                                      name="contact"
                                      autoComplete="flase"
                                      placeholder="Enter Contact no"
                                      className={`form-control text-muted ${
                                        touched.contact && errors.contact
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      style={{ marginRight: 10, padding: 9 }}
                                    />
                                  </div>
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                  <div
                                    className="form-group"
                                    style={{ marginLeft: 10, marginTop: 10 }}
                                  >
                                    <label for="title" className="my-2">
                                      Description{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <TextareaAutosize
                                      aria-label="minimum height"
                                      minRows={3}
                                      name="text"
                                      onChange={(e) =>
                                        setDescription(e.target.value)
                                      }
                                      placeholder="Description"
                                      style={{ width: "100%" }}
                                      className={`form-control text-muted ${
                                        touched.text && errors.text
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                    />
                                  </div>
                                </Grid>

                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                  <div
                                    className="form-group"
                                    style={{
                                      marginLeft: 10,
                                      marginTop: 10,
                                      float: "right",
                                    }}
                                  >
                                    <span className="input-group-btn">
                                      <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                          marginX: "15px",
                                          marginBottom: "15px",
                                        }}
                                        type="submit"
                                        value={"Submit"}
                                        style={{
                                          fontSize: 16,
                                          padding: "10px 24px",
                                          borderRadius: 12,
                                        }}
                                      >
                                        Submit
                                      </Button>
                                    </span>
                                  </div>
                                </Grid>
                              </Grid>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </Grid>
                  </Grid>
                </Card>
              </div>
            </Grid>
          </Grid>
        </div>
      </HeaderWrapper>
    </>
  );
};
export default Feedback;
