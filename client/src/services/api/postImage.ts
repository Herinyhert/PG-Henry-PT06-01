import axios from "axios";

export interface PostImageResponse {
  url: string;
}

export function postImage(image: File) {
  const formData = new FormData();
  formData.append("image", image);
  return axios.post<PostImageResponse>(
    "http://localhost:3001/image",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ).then((response)=> response.data.url)
}


