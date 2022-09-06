import axios from "axios";

const {REACT_APP_API_URL =  "http://localhost:3001"} = process.env

export interface PostImageResponse {
  url: string;
}

export function postImage(image: File) {
  const formData = new FormData();
  formData.append("image", image);
  return axios.post<PostImageResponse>(
    REACT_APP_API_URL+"/image",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ).then((response)=> response.data.url)
}


