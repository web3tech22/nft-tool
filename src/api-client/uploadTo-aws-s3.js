import { awsS3BaseUrl } from "../config";

export default async function generateAuthToken(fileInput) {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2MTMzNDg5MywianRpIjoiOTA0M2Q5YTAtMjhiNS00NmQ4LWE5NmEtMjM2M2FmNmRlOTc1IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImdBQUFBQUJqQmZWdE5BMVc4X3JFWnA0RTZuaWJQM2lzZ0dRbXJtc25mN012Q2ZMem0wWjBBdnhOaV9pT2FvRHVad2ExLTFoRDAwM28zcWo5d3cxSF9KX2d0MkozNXI4ZGFlRTdHSnp4c2NNNzVnX2hpSHFXSk1nPSIsIm5iZiI6MTY2MTMzNDg5MywiZXhwIjoxNjYxMzM1MTkzfQ.lQcWlfRN_QzLmoDoBiRI3pFaB8zJNEfsFjkkBD3kL7M"
  );

  var formData = new FormData();
  formData.append(
    "report",
    fileInput.files[0],
    "/D:/Block Chain POC/pwc-heritage-nft/package.json"
  );
  formData.append("report_type", "robot_script");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formData,
    redirect: "follow",
  };

  fetch(`http://52.152.235.210:8210/api/v2/894/upload`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
